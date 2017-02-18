var mongoose = require('mongoose');

adminSchema = new mongoose.Schema({
    name: {type:String,},
    cred: {type:String}
});
mongoose.model('Admin', adminSchema);