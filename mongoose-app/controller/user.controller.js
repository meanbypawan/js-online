import { User } from "../model/user.model.js"

export const save = (request,response,next)=>{
    User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        contact: request.body.contact
    }).then(result=>{
        return response.status(200).json({result: result, status: true});
    }).catch(err=>{ 
        return response.status(500).json({error: 'Server Error', status: false});
    })
}

export const addField = (request,response,next)=>{
    User.updateOne({_id: request.body.id},{
        $set:{contact: 1111111}
    }).then(result=>{
        return response.status(200).json({result: result, status: true});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: 'server error', status: false});
    })
}