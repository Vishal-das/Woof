import { WalkerRequest } from "../models/walkerRequest.js";
import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

export const getWalkerRequest = (req,res)=>{
    WalkerRequest.find((err,data)=>{
        if(err){
            console.log('Error in retreiving mongodb data : ' + JSON.stringify(err,null,2));            
        }
        else{
            res.send(data);
        }
    });
};

export const getWalkerRequestById = (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    
    WalkerRequest.findById(req.params.id,(err,data)=>{
        if(err){
            console.log('Error in retriving employee data : ' + JSON.stringify(err,null,2));
        }
        else{
            res.send(data);
        }
    });
};

export const addWalkerRequest = (req,res)=>{
    let walkerReuest = new WalkerRequest({
        user_id:req.body.user_id,
        day:req.body.day,
        month:req.body.month,
        year:req.body.year,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        pincode:req.body.pincode,
        duration:req.body.duration,
        no_of_dogs:req.body.no_of_dogs,
        status:req.body.status,
        walker_id:req.body.walker_id
    });

    walkerReuest.save((err,data)=>{
        if(err){
            console.log('Error in saving data : ' + JSON.stringify(err,null,2));
        }
        else{
            res.send(data);
        }
    });
};

export const deleteWalkerRequest = (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);

    WalkerRequest.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            console.log('Error in removing employee : ' + JSON.stringify(err,null,2));
        }
        else{
            res.send(data);
        }
    });
}

export const updateWalkerRequest = (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);

    let walkerRequest = {
        user_id:req.body.user_id,
        day:req.body.day,
        month:req.body.month,
        year:req.body.year,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        pincode:req.body.pincode,
        duration:req.body.duration,
        no_of_dogs:req.body.no_of_dogs,
        status:req.body.status,
        walker_id:req.body.walker_id
    };

    WalkerRequest.findByIdAndUpdate(req.params.id,  {$set : walkerRequest}, {new : true}, (err,data)=>{
        if(err){
            console.log(`Error in updating request : ` + JSON.stringify(err,null,2));
        }else{
            res.send(data);
        }
    });
};

