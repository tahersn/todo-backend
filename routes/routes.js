const router = require('express').Router();
const { getTodos, createTodo, deleteTodo, updateTodo,getOneTodo } =require ('./controllers');


router.get('/', getTodos);
router .post('/', createTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);
router.get('/:id', getOneTodo);
module.exports = router;