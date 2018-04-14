const db =require('../models/');

const addTopic =async (req,res)=>{
    try {
        if(await db.Topic.create(req.body)){
            res.json({
                status:'sucessful',
                message:"insert new Topic."
            })
        }else {
            res.json({
                status:'failed',
                message:"cant't insert new Topic."
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const alertTopic=async(req,res)=>{
    try {
        req.body.update_at=new Date();
        if(await db.Topic.findOne({where:{id:req.body.id}})){
            if(await db.Topic.update(
                {
                    topic_type:req.body.topic_type,
                    topic_content:req.body.topic_content,
                    update_at:req.body.update_at},
                {where:{id:req.body.id}})){
                    res.json({
                        status:'sucessful',
                        message:'Top alter is sucessful'
                    })
            }else {
                res.json({
                    status:'failed',
                    message:'Topic alter is failed.'
                })
            }
        }else {
            res.json({
                status:'failed',
                message:'this Topic don\'t exist.'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
const delTopic=async(req,res)=>{
    try {
        if(await db.Topic.findOne({where:{id:req.body.id}})){
            if(await db.Topic.destroy({where:{id:req.body.id}})){
                res.json({
                    status:'sucessful',
                    message:'delete Topic is sucessful'
                })
            }else{
                res.json({
                    status:'failed',
                    message:'delete Topic is failed'
                })
            }
        }else {
            res.json({
                status:'failed',
                message:'this Topic don\'t exist.'
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const getTopic=async(req,res)=>{
    try {
        await db.Topic.findAll({where:{deleted_at:null,course_id:req.body.course_id}}).then((Topic)=>{
            res.json(Topic);
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    addTopic,
    getTopic,
    alertTopic,
    delTopic,
    getTopic
}