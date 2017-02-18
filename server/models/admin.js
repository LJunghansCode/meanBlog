var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    cred: {type:String}}
);
mongoose.model('admin', adminSchema, 'admin');