import mong from 'mongoose';

export const _mong = mong.connect('mongodb://localhost:27017/Woof', {useNewUrlParser : true,useUnifiedTopology : true})
.then( () => console.log('Mongodb connection successful...') )
.catch( (err) => console.log(err));





