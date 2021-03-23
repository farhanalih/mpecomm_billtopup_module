const readVendorRule = async (req, res) => {
    const vendorRule = await req.context.models.vendorRule.findAll(
    );
    return res.send(vendorRule);
}

const addVendorRules = async (req, res) => {
    const {veru_bill_amount, veru_vendor_name,veru_bill_price,veru_desc} = req.body;
    const vendorRule = await req.context.models.vendorRule.create({
        veru_bill_amount : veru_bill_amount,
        veru_vendor_name : veru_vendor_name,
        veru_bill_price : veru_bill_price,
        veru_desc : veru_desc
    });
    return res.send(vendorRule);
};

const editVendorRules = async (req, res) => {
    const {veru_bill_amount, veru_vendor_name,veru_bill_price,veru_desc} = req.body.data;
    const vendorRule =  await req.context.models.vendorRule.update({    
        veru_bill_amount : veru_bill_amount,
        veru_vendor_name : veru_vendor_name,
        veru_bill_price : veru_bill_price,
        veru_desc : veru_desc
     }, {
        where: { veru_id: req.params.veru_id }
          });
        return res.sendStatus(200);
  };

  const deleteVendorRules = async (req, res) => {
    const vendor = await req.context.models.vendorRule.destroy({
      where: { veru_id: req.params.veru_id },
    });
  
    return res.send(true);
  };


export default {
    readVendorRule,
    addVendorRules,
    editVendorRules,
    deleteVendorRules
}