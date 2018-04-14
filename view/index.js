const router=require('express').Router(),
      topic=require('./topic');

router.use(topic);
router.get('/',(req,res)=>{
    res.send("hello ");
})
module.exports=router;