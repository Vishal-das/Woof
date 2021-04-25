import mong from 'mongoose';

const schema = new mong.Schema({
    user_id:'string',
    name:'string',
    day:'Number',
    month:'Number',
    year:'Number',
    gender:'string'
})

export var Dog = mong.model('Dog',schema,'Dogs');
