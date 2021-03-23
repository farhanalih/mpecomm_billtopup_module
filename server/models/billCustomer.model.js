

const billCustomer = (sequelize,DataTypes) => {
    const billCustomer = sequelize.define('bill_customer',{
        bilc_id:{
            autoIncrement: true,
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        bilc_token: {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        bilc_vendor_name:{
            type: DataTypes.STRING(15),
            allowNull : true,
            references:{
                model: 'vendor',
                key: 'vendor_name'
            }
        },
        bilc_acco_id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
                model: 'account',
                key: 'acco_id'
            }
        }
    },{
        sequelize,
        tableName: 'bill_customer',
        schema: 'public',
        timestamps: false,
        indexes:[
            {
                name: "bill_customer_pkey",
                unique: true,
                fields: [
                    { name: "bilc_id"},
                ]
            },
        ]
    });

    billCustomer.associate = models => {
        billCustomer.belongsTo(models.vendor,{foreignKey:'bilc_vendor_name'});
        billCustomer.belongsTo(models.account,{foreignKey:'bilc_acco_id'});
    };
    return billCustomer;
}

export default billCustomer;