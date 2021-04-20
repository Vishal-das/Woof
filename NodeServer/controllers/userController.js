import { User } from '../models/user.js';
import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

export const getUser = (req,res) => {
    User.find((err,data)=>{
        if(err){
            console.log('Error in retreiving mongodb data : ' + JSON.stringify(err,null,2));            
        }
        else{
            res.send(data);
        }
    });    
};

export const getUserById = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    
        User.findById(req.params.id, (err,data)=>{
            if(err)
                console.log('Error in retriving employee data : ' + JSON.stringify(err,null,2));
            else
                res.send(data);
        });
};

export const addUser = (req,res) => {
    let user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phno : req.body.phno,
        address : req.body.address
    });

    user.save((err,data)=>{
        if(err)
            console.log('Error in saving data : ' + JSON.stringify(err,null,2));
        else
            res.send(data);
    });
}

export const updateUser = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id ${req.params.id}`);

    let user = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phno : req.body.phno,
        address : req.body.address
    };

    User.findByIdAndUpdate(req.params.id, {$set : user}, {new : true}, (err,data)=>{
        if(err)
            console.log(`Error in updating employee data : ` + JSON.stringify(err,null,2));
        else
            res.send(data);
    });
};

export const deleteUser = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err,data) => {
        if(err)
            console.log('Error in removing employee : ' + JSON.stringify(err,null,2));
        else
            res.send(data);
    });
}

