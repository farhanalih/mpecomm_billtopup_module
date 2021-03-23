// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();



router.get('/', indexCtrl.walletTransaction.readWalletTransaction);
router.post('/insertWalletTransaction',indexCtrl.walletTransaction.addWalletTransaction);
router.put('/updateWalletTransaction/:watr_id',indexCtrl.walletTransaction.editWalletTransaction);
router.delete('/deleteWalletTransaction/:watr_id',indexCtrl.walletTransaction.deleteWalletTransaction);
export default router;
