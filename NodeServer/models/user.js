import mong from 'mongoose';
const schema = new mong.Schema({
    name : 'string', 
    email : 'string',
    password: 'string',
    phno : 'Number',
    address: 'string'});
export var User = mong.model('User',schema,'Users');


