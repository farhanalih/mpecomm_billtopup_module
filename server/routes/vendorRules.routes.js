// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();



router.get('/', indexCtrl.vendorRule.readVendorRule);
router.post('/insertVendorRules',indexCtrl.vendorRule.addVendorRules);
router.put('/updateVendorRules/:veru_id',indexCtrl.vendorRule.editVendorRules);
router.delete('/deleteVendorRules/:veru_id',indexCtrl.vendorRule.deleteVendorRules);

export default router;
