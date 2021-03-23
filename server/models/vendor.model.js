const vendor = (sequelize,DataTypes) => {
    const vendor = sequelize.define('vendor', {
        vendor_name: {
          type: DataTypes.STRING(15),
          allowNull: false,
          primaryKey: true
        },
        vendor_desc: {
          type: DataTypes.STRING(15),
          allowNull: true
        }
      }, {
        sequelize,
        tableName: 'vendor',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "vendor_pkey",
            unique: true,
            fields: [
              { name: "vendor_name" },
            ]
          },
        ]
      });
      vendor.associate = models => {
        vendor.hasMany(models.billTopup,{foreignKey: 'bito_vendor_name', onDelete: 'CASCADE'});
        vendor.hasMany(models.vendorRule,{foreignKey: 'veru_vendor_name', onDelete: 'CASCADE'});
        vendor.hasMany(models.billCustomer,{foreignKey:'bilc_vendor_name',onDelete:'CASCADE'});
      };
    return vendor;

    
}

export default vendor;