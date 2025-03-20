const { userModel } = require("../modules/user.model");
const bcrypt = require("bcrypt");

const signUp = async (req, res) =>{
    const {userName, email, password} = req.body;

    try {
        bcrypt.hash(password, 5, async(err, hash) => {
            if(err){
                return res.status(400).send({error:error.message});
            }else{
                const userData = new userModel({userName, email, password:hash});
            await userData.save();

            res.status(200).send({message:'user registered successfully'});
            }
            
        });

    } catch (error) {
        return res.status(400).send({error:error.message});
    }
}

module.exports = {
      signUp
}