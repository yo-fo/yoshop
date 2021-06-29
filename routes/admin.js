var express = require('express');
var router = express.Router();
const users = [
  {name:'yonatan', role:'admin', email:'yo@foult.com', password: '1234'},
  {name:'olivier', role:'admin', email:'olive@foult.com', password: '1234'},

];

/* SERVER RESPONSE POST login API */
router.post('/api/login', function(req, res, next) {
  const password = req.body.password;
  const email = req.body.email;
  const user = users.find(user=>email==user.email&&password==user.password);
  if(user) {
  res.json({
    success: true,
    user: { ...user, password: undefined},
   })
  } else {
    res.json({
      success: false,
    })
  }
})

;

module.exports = router;
