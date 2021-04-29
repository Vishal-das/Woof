import mongoose from 'mongoose';
import { Vet } from '../models/vets.js';
let ObjectId = mongoose.Types.ObjectId;


export const getVets = (req,res)=>{
    Vet.find((err,data)=>{
        if(err){
            console.log('Error in retreiving mongodb data : ' + JSON.stringify(err,null,2));            
        }
        else{
            res.send(data);
        }
    });
};

export const addVets = (req,res)=>{
    let vet = new Vet({
        name:req.body.name,
        email:req.body.email,
        ph_no:req.body.ph_no,
        charges:req.body.charges,
        specialization:req.body.specialization

    });

    vet.save((err,data)=>{
        if(err){
            console.log('Error in saving data : ' + JSON.stringify(err,null,2));
        }
        else{
            res.send(data);
        }
    });
};

export const getVetById = (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    
        Vet.findById(req.params.id, (err,data)=>{
            if(err)
                console.log('Error in retriving employee data : ' + JSON.stringify(err,null,2));
            else
                res.send(data);
        });
}


export const updateVet = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id ${req.params.id}`);

    let vet = {
        name : req.body.name,
        email : req.body.email,
        ph_no : req.body.ph_no,
        charges : req.body.charges,
        specialization : req.body.specialization
    };

    Vet.findByIdAndUpdate(req.params.id, {$set : vet}, {new : true}, (err,data)=>{
        if(err)
            console.log(`Error in updating employee data : ` + JSON.stringify(err,null,2));
        else
            res.send(data);
    });
};

export const deleteVet = (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);

    Vet.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            console.log('Error in removing employee : ' + JSON.stringify(err,null,2));
        }
        else{
            res.send(data);
        }
    });
};