const router=require('express').Router(),
      controller=require('../controller/topic');
router.post('/addTopic',controller.addTopic);
router.post('/alertTopic',controller.alertTopic);
router.post('/delTopic',controller.delTopic);
router.post('/getTopic',controller.getTopic);

module.exports=router;