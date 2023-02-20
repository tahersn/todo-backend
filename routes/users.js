// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// let users = [
//   { id: 1, name: "John Doe", email: "johndoe@example.com" },
//   { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
//   { id: 3, name: "Bob Smith", email: "bobsmith@example.com" }
// ];


// router.get('/', function(req, res, next) {
//   res.send(users);
// });

// router.get('/:id', function(req,res , next ){
//   const id = req.params.id;
//   const u=users.find(u=> u.id ==id );
//   if (u){
//     res.send(u )
//   }else {
//   res.status(404).send("user not found");
//   }
// });

// router.put('/:id' , function(req,res , next){
//   const id= req.params.id;
//   const user = users.find(u =>u.id == id);
//   if(user){
//     const updateUser=req.body ;
//     users = users.map(user=>user.id==id? updateUser : user );
//     res.send (users);

//   }
// });

// router.delete('/:id',function(req,res,next){
//   const id = req.params.id;
//   const userINdex = users.findIndex(u=>u.id===id);
//   if(userINdex){
//     users.splice(userINdex,1);
//     res.send("user deleted")
//   }else{
//     res.status(404).send("user not found");
//   }
// });


// module.exports = router;
