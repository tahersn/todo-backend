const router = require('express').Router();
const { getTodos, createTodo, deleteTodo, updateTodo } =require ('./controllers');


router.get('/', getTodos);
router .post('/add', createTodo);
router.delete('/:id', deleteTodo);
router.put(':/id', updateTodo);
module.exports = router;