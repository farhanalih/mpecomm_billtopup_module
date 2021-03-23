const readBillCustomer = async (req, res) => {
    const billCustomer = await req.context.models.billCustomer.findAll(
      {
        include : [
          {model : req.context.models.account},
          {model : req.context.models.vendor,include:[{
              model : req.context.models.vendorRule
          }]}
        ]
      }
    );
    return res.send(billCustomer);
}

const readByToken = async (req, res) => {
    const billCustomer = await req.context.models.billCustomer.findOne(
      {
        where : {bilc_token: req.params.token},  
        include : [
          {model : req.context.models.account},
          {model : req.context.models.vendor,include:[{
              model : req.context.models.vendorRule
          }]}
        ]
      }
    );
    return res.send(billCustomer);
}

const addBillCustomer = async (req,res) =>{
    const {bilc_token,bilc_vendor_name,bilc_acco_id} = req.body;
    const billCustomer = await req.context.models.billCustomer.create({
        bilc_token : bilc_token,
        bilc_vendor_name : bilc_vendor_name,
        bilc_acco_id : bilc_acco_id
    });
    return res.send(billCustomer);
};

const editBillCustomer = async (req,res) => {
    const {bilc_token,bilc_vendor_name,bilc_acco_id} = req.body;
    const billCustomer = await req.context.models.billCustomer.update({
        bilc_token : bilc_token,
        bilc_vendor_name : bilc_vendor_name,
        bilc_acco_id : bilc_acco_id
    }, {
        where: {bilc_id : req.params.bilc_id}
    }
    );
    return res.sendStatus(200);
};

const deleteBillCustomer = async (req, res) => {
    const billCustomer = await req.context.models.billCustomer.destroy({
      where: { bilc_id: req.params.bilc_id },
    });
  
    return res.send(true);
  };

  export default {
      readBillCustomer,
      addBillCustomer,
      editBillCustomer,
      deleteBillCustomer,
      readByToken
  }