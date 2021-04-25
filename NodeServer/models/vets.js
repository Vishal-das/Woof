import mong from 'mongoose';
const schema = new mong.Schema({
    name:'string',
    email:'string',
    ph_no:'Number',
    charges:'Number',
    specialization:"string"
});
export var Vet = mong.model('Vet',schema,'Vets');