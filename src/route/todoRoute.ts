import express from 'express';
import {createTodo, deleteTodo, getTodo, updateTodo} from '../controller/todoController'
const router  = express.Router();

router.get('/get-todos', getTodo)
router.post('/create', createTodo);
router.patch("/update-todo/:id", updateTodo)
router.delete("/delete-todo/:id", deleteTodo)



export default router