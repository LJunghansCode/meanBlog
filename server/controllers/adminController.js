var mongoose = require('mongoose');
var admin = mongoose.model('admin');


module.exports = (function(){
    return{
        loginLuca : function(req, res){
                admin.findOne({cred: req.body.luca}, function(err, Admin){
                if(Admin){
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