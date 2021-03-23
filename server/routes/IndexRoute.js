/*  gunakan salah satu untuk latihan, kita buat 3 route : 
    1. region-raw : menggunakan raw query
    2. region-seq : menggunakan method sequelize
    3. region-ctrl : bisnis logic dipisah di folder controller
*/


import account from './account.routes';
import billTopup from './billTopup.routes';
import vendor from './vendor.routes';
import vendorRule from './vendorRules.routes';
import walletTransaction from './walletTransaction.routes';
import billCustomer from './billCustomer.routes';
export default {
  account,
  billTopup,
  vendor,
  vendorRule,
  walletTransaction,
  billCustomer
};
