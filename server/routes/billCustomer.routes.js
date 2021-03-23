// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();



router.get('/', indexCtrl.billCustomer.readBillCustomer);
router.post('/insertbillCustomer',indexCtrl.billCustomer.addBillCustomer);
router.put('/updatebillCustomer/:bilc_id',indexCtrl.billCustomer.editBillCustomer);
router.delete('/deletebillCustomer/:bilc_id',indexCtrl.billCustomer.deleteBillCustomer);
router.get('/readbytoken/:token',indexCtrl.billCustomer.readByToken);
export default router;
