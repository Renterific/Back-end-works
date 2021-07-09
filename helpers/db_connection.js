const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://renterific:root@cluster0.ihfc1.mongodb.net/renterific?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false ,useCreateIndex: true}).
then(()=>{
    console.log('DB success connection')
}).catch((error)=>{
    console.log('DB error connection')
})
mongoose.set('useFindAndModify', false);
module.exports = mongoose

