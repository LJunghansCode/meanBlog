var mongoose = require('mongoose');
var Admin = mongoose.model('Admin');


module.exports = (function(){
    return{
        loginLuca : function(req, res){
            Admin.findOne({cred : req.body.luca.cred},function(err, admin){
                if(admin){
                    req.session.admin = {luca: "Luca"};
                    res.json({success:true});
                }
                else{
                    res.json({fail:true});
                }       
        
            }); 
        },
        getadmin : function(req,res){
            if(!req.session.admin || req.session.admin === null){
                res.send(null);
            }else{
                res.json({admin: req.session.admin.luca});
            }
        }

    };

})();