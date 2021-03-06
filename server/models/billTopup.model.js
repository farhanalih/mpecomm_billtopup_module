const billTopup = (sequelize,DataTypes) => {
    const billTopup = sequelize.define('bill_topup', {
        bito_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        bito_created_on: {
          type: DataTypes.DATE,
          allowNull: true
        },
        bito_type: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        bito_amount: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        bito_desc: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        bito_watr_numbers: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        bito_token: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        bito_vendor_name: {
          type: DataTypes.STRING(15),
          allowNull: true,
          references: {
            model: 'vendor',
            key: 'vendor_name'
          }
        },
        bito_acco_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'account',
            key: 'acco_id'
          }
        }
      }, {
        sequelize,
        tableName: 'bill_topup',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "bill_topup_pkey",
            unique: true,
            fields: [
              { name: "bito_id" },
            ]
          },
        ]
      });

      billTopup.associate = models => {
        billTopup.belongsTo(models.account,{foreignKey : 'bito_acco_id'});
        billTopup.belongsTo(models.vendor,{foreignKey : 'bito_vendor_name'});
        
      };
      return billTopup;
}

export default billTopup;