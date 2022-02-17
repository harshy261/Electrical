import userModel from "../models/Contact.js"

// CREATING FUNCTION
class userController {
    //Creating Doc
    static createDoc = async(req,res) => {
        try {
            const {name, email, phone, message} = req.body
            const doc = new userModel({
                name:name,
                email:email,
                phone:phone,
                message:message
            })
            //Saving Doc
            const result = await doc.save()
            res.render('index')
        } catch (error) {
            console.log(error);
        }
    }


}


export {userController} 



