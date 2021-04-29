import mong from 'mongoose';
const schema = new mong.Schema({
    user_id:'string',
    day:'Number',
    month:'Number',
    year:'Number',
    address:'string',
    city:'string',
    state:'string',
    pincode:'Number',
    duration:'Number',
    no_of_dogs:'Number',
    status:'string',
    walker_id:'string'
});

export var WalkerRequest = mong.model('WalkerRequest',schema,'WalkerRequests');
