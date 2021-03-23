// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();



router.get('/', indexCtrl.account.readAccount);

export default router;
