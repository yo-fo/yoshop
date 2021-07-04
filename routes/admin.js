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

const productsDatabase = [
  {id: 0, name:'shukchan aruch', stock: 3, categoryId: 0, price: '2205', description: '', imageSrc:'/admin/images/talmud.jpg'},
  {id: 1, name:'Shass Vilna', stock: 13, categoryId: 1, price: '1705', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 2, name:'Rambam', stock: 10, categoryId: 0, price: '500', description: '',imageSrc:'/admin/images/rambam.jpg'},
  {id: 3, name:'Sifrei HaRamchal', stock: 3, categoryId: 3, price: '350', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 4, name:'Chumash Rashi', stock: 5, categoryId: 4, price: '50', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 5, name:'Mikraos Gedolos', stock: 18, categoryId: 4, price: '350', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 6, name:'Chumash Hamaor', stock: 5, categoryId: 4, price: '200', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 7, name:'Messilas Yesharim', stock: 20, categoryId: 2, price: '45', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 8, name:'Shass Shotenstein', stock: 5, categoryId: 1, price: '1200', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 9, name:'Shut Chatam Sofer', stock: 7, categoryId: 0, price: '500', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 10, name:'Shut Or Letsion', stock: 5, categoryId: 0, price: '350', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 11, name:'Alei SHor', stock: 5, categoryId: 2, price: '175', description: '',imageSrc:'/admin/images/talmud.jpg'},
  {id: 12, name:'Etz Chaim', stock: 2, categoryId: 3, price: '210', description: '',imageSrc:'/admin/images/talmud.jpg'},


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
    return category.id==id; // if condition true, returns index of corresponding element
  });
  categoriesDatabase.splice(index,1);
  res.json({
    success: true,
  });
});

/* SERVER RESPONSE PUT Edit Categories API */
router.put('/api/categories', function(req, res, next) {
  const id = req.body.id;
  const categoryName = req.body.name;
  const category = categoriesDatabase.find(function (category)  {
    return category.id==id;
  });
  category.name = categoryName;
  res.json({
    success: true,
  });
});

/* SERVER RESPONSE GET Products API */
router.get('/api/products', function(req, res, next) {
  res.json({
    success: true,
    products: productsDatabase,
  });
});

/* SERVER RESPONSE POST Products API */
router.post('/api/categories', function(req, res, next) {
  const name = req.body.name;
  const desc = req.body.description;
  const id = req.body.id;
  const categoryId = req.body.categoryId;
  const stock = req.body.stock;
  const price = req.body.price;


  productIndex++;
  const product = {
    id : productIndex,
    name : name,
    desc: desc,
    stock: stock,
    categoryId : categoryId,
    price : price,
  }
  categoriesDatabase.push(category)
  res.json({
    success: true,
  });
});

module.exports = router;
