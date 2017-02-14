var mongoose = require('mongoose');

blogPostSchema = new mongoose.Schema({
    title: {type:String,},
    firstPar: {type:String},
    secondPar: {type:String},
    thirdPar: {type:String},
    finalPar: {type:String},
    picOne: {type:String},
    picTwo: {type:String},
    picThree: {type:String},
    picFour: {type:String},
    subhead1 : {type:String},
    subhead3 : {type:String},
    subhead2 : {type:String}

});
mongoose.model('blogPost', blogPostSchema);