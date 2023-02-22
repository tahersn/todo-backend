const Todo = require("./model/todo");

exports.getTodos = (req, res, next) => {
  Todo
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
 const todo = new Todo({
    name: req.body.name,
    completed: req.body.completed,
  });
  console.log(todo);
   try{todo.save().then((createdTodo) => {
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
    try{ await Todo.findByIdAndDelete(id);
    res.send("deleted successfully");}
    catch(error){
      res.status(500).json({
        message: "Deleting a todo failed!",
      });
    }
};

exports.updateTodo =async (req,res)=>{
    let {id} = req.params;
    try{
        await Todo.updateOne({_id:id},req.body);
        res.send("updated successfully");
    }  catch (error){
        res.status(500).json({
          message: "Updating a todo failed!",
        });
    }
};

