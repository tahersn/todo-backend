const todo = require("./model/todo");

exports.getTodos = (req, res, next) => {
  todo
    .find()
    .then((todos) => {
      res.status(200).json({
        message: "Todos fetched successfully!",
        todos: todos,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching todos failed!",
      });
    });
};

exports.createTodo = (req, res) => {
 const Todo = new todo({
    name: req.body.name,
    completed: req.body.completed,
  });
  console.log(Todo);
   try{Todo.save().then((createdTodo) => {
     res.status(201).json({
      message: "Todo added successfully",
    });
  });}catch(error){
    res.status(500).json({
      message: "Creating a todo failed!",
    });
  }
};

exports.deleteTodo =async (req,res)=>{
    let {id} = req.params;
    try{ await todo.findByIdAndDelete(id);
    res.send("deleted successfully");}
    catch(error){
      res.status(500).json({
        message: "Deleting a todo failed!",
      });
    }
};

exports.updateTodo =async (req,res)=>{
    let {id} = req.params;
    console.log(req.body);
    console.log("skrrr");
    try{
        await todo.updateOne({_id:id},req.body);
        console.log(req.body);
        res.send("updated successfully");
    }  catch (error){
        res.status(500).json({
          message: "Updating a todo failed!",
        });
    }
};

