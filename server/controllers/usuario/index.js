const {Usuario} = require('../../models')


module.exports.getUsuario = async (req, res) =>{
    try {
       let user = req.user;
       
       if(user){
            res.json({
                success:true,
                data:user
            })
       }else{
           res.json({
               success:true,
               message:'Usuario no Proporcionado',
               data: []
           })
       }
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Intente mas tarde'
        })
    }
}