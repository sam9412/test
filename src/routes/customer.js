const express =require('express');
const router=express.Router();
const customerController = require('../controllers/customerController');

router.get('/list',customerController.list);
router.post('/add',customerController.save);
router.delete('/cliente/:Cliente_ID',customerController.eliminar);

router.get('/update/:id',customerController.edit);
router.post('/update/:id',customerController.update)
module.exports=router;
