const router=require('express').Router(),
      controller=require('../controller/Message ');
router.post('/addMessage ',controller.addMessage );
router.post('/alterMessage ',controller.alertMessage );
router.post('/delMessage ',controller.delMessage );
router.post('/getMessage ',controller.getMessage );

module.exports=router;