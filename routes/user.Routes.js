import { Router } from "express";
const userRouter=Router();
userRouter.get('/',(req,res)=>
    res.send(
    {title:'Get all users'}
));

userRouter.get('/:id',(req,res)=>
    res.send(
    {title:'Get user detauls'}
))

userRouter.post('/',(req,res)=>
    res.send(
    {title:'Create user'}
))

userRouter.put('/:id',(req,res)=>
    res.send(
    {title:'Update user'}
))

userRouter.delete('/:id',(req,res)=>
    res.send(
    {title:'Delete user'}
))

export default userRouter;

