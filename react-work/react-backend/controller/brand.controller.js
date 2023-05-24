import { Brand } from "../model/brand.model.js"

export const updateBrand = (request,response,next)=>{
    
    Brand.updateOne({_id: request.body._id},{
        $set:{brandName: request.body.brandName, categoryId: request.body.categoryId}
    }).then(result=>{
        console.log(result);
        return response.status(200).json({result: result,status: true});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({message: 'Internal server error', status: false});
    })
    
}
export const deleteBrand = (request,response,next)=>{
    Brand.deleteOne({_id: request.query.id})
    .then(result=>{
        console.log(result);
        return response.status(200).json({result: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: 'Internal Server Error',status: false});
    })
}

export const save = (request,response,next)=>{
   Brand.create(request.body)
   .then(result=>{
     Brand.findById(result._id).populate('categoryId').then(result=>{
        return response.status(200).json({result: result, status: true});
     }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error",status: false});
     })
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error",status: false});
   })    
}

export const allBrands = (request,response,next)=>{
   Brand.find().populate({path: 'categoryId'}).then(result=>{
    return response.status(200).json({brandList: result,status: true});
   }).catch(err=>{
    return response.status(200).json({error: 'Internal Server Error',status: false});
   })
}

export const brandByCategory = (request,response,next)=>{
    Brand.find({categoryId: request.query.id})
    .then(result=>{
        return response.status(200).json({brandList: result,status: true});
    }).catch(err=>{
        return response.status(500).json({error: 'Internal Server Error',status: false});
    })
}