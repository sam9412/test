const express =require('express');
const router=express.Router();
const customerController = require('../controllers/customerController');

router.get('/list',customerController.list);
router.post('/add',customerController.save);
router.delete('/cliente/:Cliente_ID',customerController.eliminar);


router.post('/update/:Cliente_ID',customerController.update)
module.exports=router;
