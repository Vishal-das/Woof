import { Dog } from '../models/dog.js';
import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;
export const getDog = (req,res)=>{
    Dog.find((err,data)=>{
            if(err){
                console.log('Error in retreiving mongodb data : ' + JSON.stringify(err,null,2));            
            }
            else{
                res.send(data);
            }
    })
}


export const getDogById = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    
        Dog.findById(req.params.id, (err,data)=>{
            if(err)
                console.log('Error in retriving employee data : ' + JSON.stringify(err,null,2));
            else
                res.send(data);
        });
};

export const addDog = (req,res) => {
    let dog = new Dog({
        user_id : req.body.user_id,
        name : req.body.name,
        day : req.body.day,
        month : req.body.month,
        year : req.body.year,
        gender : req.body.gender
    });

    dog.save((err,data)=>{
        if(err)
            console.log('Error in saving data : ' + JSON.stringify(err,null,2));
        else
            res.send(data);
    });
}


export const updateDog = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id ${req.params.id}`);

    let dog = {
        user_id : req.body.user_id,
        name : req.body.name,
        day : req.body.day,
        month : req.body.month,
        year : req.body.year,
        gender : req.body.gender
    };

    Dog.findByIdAndUpdate(req.params.id, {$set : dog}, {new : true}, (err,data)=>{
        if(err)
            console.log(`Error in updating employee data : ` + JSON.stringify(err,null,2));
        else
            res.send(data);
    });
};

export const deleteDog = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id ${req.params.id}`);

    Dog.findByIdAndRemove(req.params.id, (err,data) => {
        if(err)
            console.log('Error in removing employee : ' + JSON.stringify(err,null,2));
        else
            res.send(data);
    });
}