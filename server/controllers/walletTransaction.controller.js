const readWalletTransaction = async (req, res) => {
    const walletTransaction = await req.context.models.walletTransaction.findAll(
    );
    return res.send(walletTransaction);
}

const addWalletTransaction = async (req, res) => {
    const {watr_numbers} = req.body;
    const walletTransaction = await req.context.models.walletTransaction.create({
        watr_numbers : watr_numbers 
    });
    return res.send(walletTransaction);
};

const editWalletTransaction = async (req, res) => {
    const {watr_numbers} = req.body;
    const walletTransaction =  await req.context.models.walletTransaction.update({    
        watr_numbers : watr_numbers
     }, {
        where: { watr_id: req.params.watr_id }
          });
        return res.sendStatus(200);
  };

  const deleteWalletTransaction = async (req, res) => {
    const walletTransaction = await req.context.models.walletTransaction.destroy({
      where: { watr_id: req.params.watr_id },
    });
  
    return res.send(true);
  };


export default {
    readWalletTransaction,
    addWalletTransaction,
    editWalletTransaction,
    deleteWalletTransaction
}