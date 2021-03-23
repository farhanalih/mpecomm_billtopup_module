

const readAccount = async (req,res) => {
    const account = await req.context.models.account.findAll(
        // {
        //     include : [{
        //         model : req.context.models.billTopup
        //     }]
        // }
    );
    return res.send(account);
}

export default {
    readAccount
}