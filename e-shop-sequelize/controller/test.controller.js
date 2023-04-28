import Test from "../model/test.model.js"

export const save = (request,response,next)=>{
    Test.create(request.body)
    .then((result)=>{
        return response.status(200).json({message: 'Test record created.'});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: 'Test record not created.'});
    })
}

export const removeRecord = (request,response,next)=>{
    Test.destroy({where: {id: request.body.id}})
    .then((result)=>{
        return response.status(200).json({message: 'Test record Deleted'});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: 'Test record not delete.'});
    })
}

export const fetchTest = (request,response,next)=>{
    Test.findAll({
        paranoid: false
    })
    .then(result=>{
        return response.status(200).json({result: result, status: true});
    }).catch(err=>{
        return response.status(200).json({error: "Error", status: false});
    });

}