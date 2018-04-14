const db =require('../models/');

const addMessage =async (req,res)=>{
   try {
       if(await db.topic_message.creat(req.body)){
            res.json({
                status:'sucessful',
                message:'Insert message is sucessful'
            })
       }else {
           res.json({
               status:'failed',
               message:'Insert message is failed.'
           })
       }
   } catch (error) {
       console.log(error);
   }
}
const alertMessage =async(req,res)=>{
    try {
        req.body.update_at=new Date();
        if(await db.topic_message.findOne({where:{id:req.body.id}})){
            if(await db.topic_message.update_at({topic_message:req.body.topic_message,update_at:req.body.update_at},{where:{id:req.body.id}})){
                res.json({
                    status:'sucessful',
                    message:'alter message is sucessful'
                })
            }else {
                res.json({
                    status:'failed',
                    message:'alter message is failed'
                })
            }
        }else {
            res.json({
                status:'failed',
                message:'this message don\'t exist'
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const delMessage =async(req,res)=>{
    try {
        if(await db.topic_message.findOne({where:{id:req.body.id}})){
            if(await db.topic_message.destory({where:{id:req.body.id}})){
                res.json({
                    status:'sucessful',
                    message:'alter message is sucessful'
                })
            }else {
                res.json({
                    status:'failed',
                    message:'alter message is failed'
                })
            }
        }else {
            res.json({
                status:'failed',
                message:'this message don\'t exist'
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const getMessage =async(req,res)=>{
   try {
       await db.topic_message.findAll({where:{topic_id:req.body.topic_id,delete_at:null}}).then((message)=>{
           res.json(message);
       })
   } catch (error) {
       console.log(error);
   }
}
module.exports={
    addMessage ,
    alertMessage ,
    delMessage ,
    getMessage 
}