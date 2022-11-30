import { Request,Response } from "express";
import Todo from "../model/todoModel";

export const getTodo = async (req:Request, res: Response)=>{
try{
    const todos = await Todo.find()
    res.status(200).json({
        todos
    })
}catch(err){
    return res. status(500).json({
        message: "internal server error",
    routes: "todo/get-todos"
    })
}
}


export const createTodo = async (req:Request, res: Response)=>{
try{
    const {description, status} = req.body;
    const todos = await Todo.find();

    if(todos){
        const todos = await Todo.create({
            description,
            status
        })
    
        res.status(200).json({
            status: 'success',
            data: todos
        })
    }

    return res. status(400).json({
    todos
    })
}catch(err){
   res.status(500).json({
    message: "internal server error",
    routes: "todo/create"
   }) 
}
    
};

export const updateTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
 const {description, status} = req.body;
 const updatetodo = await Todo.findOne({"_id": id});
 if(updatetodo){
    const todo = await Todo.updateOne({"_id": id},{
        description, status
    })
    return res.status(200).json({
        status: 'updated successfully',
        data: todo
    })
    }
    return res.status(400).json({
        message: "unidentified data"
     }) 
}catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/update-todo/:id'
         })  
    }
}
export const deleteTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
        const removedtodo = await Todo.findOneAndDelete({"_id": id})
        return res.status(200).json({
           message: "deleted successfully"
        })
        return res.status(400).json({
            message: "unidentified data"
         }) 
    }catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/delete-todo/:id'
         })
    }
}