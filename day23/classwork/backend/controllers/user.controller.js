const login = (req, res) =>{
    const data = req.body;
    try{
        if(data.email == "" && data.password == ""){
            return res.status(400).send({message: "Data not found"});
        }else{
            return res.status(200).send({message: "user logged in successfully"});
        }
    } catch(error){
        return res.status(500).send({message: error.messege});
    }
    
}

const signUp = (req, res) =>{
    const data = req.body;
    try{
        if(data.email == "" && data.password == ""){
            return res.status(400).send({message: "Data not found"});
        }else{
            return res.status(200).send({message: "user registerd successfully"});
        }
    } catch(error){
        return res.status(500).send({message: error.messege});
    }
}

module.exports = {
    login, signUp
}

