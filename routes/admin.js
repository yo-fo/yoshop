var express = require('express');
var router = express.Router();
const userDatabase = [
  {id: 1, name:'yonatan', role:'admin', email:'yo@foult.com', password: '1234'},
  {id: 2, name:'olivier', role:'admin', email:'olive@foult.com', password: '1234'},
];

let categoriesIndex = 5;

const categoriesDatabase = [
  {id: 0, name:'Halacha', products: 3},
  {id: 1, name:'Guemara', products: 5},
  {id: 2, name:'Moussar', products: 5},
  {id: 3, name:'Kabala', products: 5},
  {id: 4, name:'Houmash', products: 5},
];

/* SERVER RESPONSE POST login API */
router.post('/api/login', function(req, res, next) {
  const password = req.body.password;
  const email = req.body.email;
  const user = userDatabase.find(user=>email==user.email&&password==user.password);
  if(user) {
  res.json({
    success: true,
    user: { ...user, password: undefined},
  });
  } else {
    res.json({
      success: false,
    });
  }
});

/* SERVER RESPONSE GET Categories API */
router.get('/api/categories', function(req, res, next) {
  res.json({
    success: true,
    categories: categoriesDatabase,
  });
});

/* SERVER RESPONSE POST Categories API */
router.post('/api/categories', function(req, res, next) {
  const name = req.body.name;
  categoriesIndex++;
  const category = {
    id : categoriesIndex,
    name : name,
    products: 0,
  }
  categoriesDatabase.push(category)
  res.json({
    success: true,
  });
});

/* SERVER RESPONSE DELETE Categories API */
router.delete('/api/categories', function(req, res, next) {
  const id = req.body.id;
  const index = categoriesDatabase.findIndex(function (category)  {
    return category.id==id;
  });
  categoriesDatabase.splice(index,1);
  res.json({
    success: true,
  });
});

module.exports = router;
