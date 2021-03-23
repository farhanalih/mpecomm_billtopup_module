// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();



router.get('/', indexCtrl.vendor.readVendor);
router.post('/insertVendor',indexCtrl.vendor.addVendor);
router.put('/updateVendor/:vendor_name',indexCtrl.vendor.editVendor);
router.delete('/deleteVendor/:vendor_name',indexCtrl.vendor.deleteVendor);
router.get('/byVendorName/:vendor_name',indexCtrl.vendor.byVendorName)

export default router;
