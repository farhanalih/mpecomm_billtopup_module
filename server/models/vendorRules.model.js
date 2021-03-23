const vendorRule = (sequelize,DataTypes) => {
    const vendorRule = sequelize.define('vendor_rules', {
        veru_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        veru_bill_amount: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        veru_vendor_name: {
          type: DataTypes.STRING(15),
          allowNull: true,
          references: {
            model: 'vendor',
            key: 'vendor_name'
          }
        },
        veru_bill_price: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        veru_desc: {
          type: DataTypes.STRING(20),
          allowNull: true
        }
      }, {
        sequelize,
        tableName: 'vendor_rules',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "vendor_rules_pkey",
            unique: true,
            fields: [
              { name: "veru_id" },
            ]
          },
        ]
      });
      vendorRule.associate = models => {
        vendorRule.belongsTo(models.vendor,{foreignKey : 'veru_vendor_name'});
      }

      return vendorRule;
    
}

export default vendorRule;