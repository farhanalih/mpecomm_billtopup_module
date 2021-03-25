const readBillTopup = async (req, res) => {
    const billTopup = await req.context.models.billTopup.findAll(
      {
        include : {
          model : req.context.models.account
        }
      }
    );
    return res.send(billTopup);
}

const byBitoId = async (req, res) => {
  const billTopup = await req.context.models.billTopup.findOne(
    {
      where : {bito_id : req.params.bito_id},
      include : {
        model : req.context.models.account
      }
    }
  );
  return res.send(billTopup);
}

const addBillTopup = async (req, res) => {
    const {bito_created_on, bito_type, bito_amount, bito_desc, bito_watr_numbers, bito_token, bito_vendor_name, bito_acco_id} = req.body;
    const billTopup = await req.context.models.billTopup.create({
        bito_created_on : bito_created_on,
        bito_type : bito_type,
        bito_amount : bito_amount,
        bito_desc : bito_desc,
        bito_watr_numbers : bito_watr_numbers,
        bito_token : bito_token,
        bito_vendor_name : bito_vendor_name,
        bito_acco_id : bito_acco_id,
        
    });
    return res.send(billTopup);
};

const editBillTopup = async (req, res) => {
    const {bito_created_on, bito_type, bito_amount, bito_desc, bito_watr_numbers, bito_token, bito_vendor_name, bito_acco_id} = req.body;
    const billTopup =  await req.context.models.billTopup.update({    
        bito_created_on : bito_created_on,
        bito_type : bito_type,
        bito_amount : bito_amount,
        bito_desc : bito_desc,
        bito_watr_numbers : bito_watr_numbers,
        bito_token : bito_token,
        bito_vendor_name : bito_vendor_name,
        bito_acco_id : bito_acco_id,
        
     }, {
        where: { bito_id: req.params.bito_id }
          });
        return res.sendStatus(200);
  };

  const deleteBillTopup = async (req, res) => {
    const billTopup = await req.context.models.billTopup.destroy({
      where: { bito_id: req.params.bito_id },
    });
  
    return res.send(true);
  };

export default {
    readBillTopup,
    addBillTopup,
    editBillTopup,
    deleteBillTopup,
    byBitoId
}