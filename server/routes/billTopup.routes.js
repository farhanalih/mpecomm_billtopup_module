// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();



router.get('/', indexCtrl.billTopup.readBillTopup);
router.post('/insertbillTopup',indexCtrl.billTopup.addBillTopup);
router.put('/updatebillTopup/:bito_id',indexCtrl.billTopup.editBillTopup);
router.delete('/deletebillTopup/:bito_id',indexCtrl.billTopup.deleteBillTopup);

export default router;
