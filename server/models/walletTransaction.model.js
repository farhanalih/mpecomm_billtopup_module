const walletTransaction = (sequelize,DataTypes) => {
    const walletTransaction = sequelize.define('wallet_transaction', {
        watr_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        watr_numbers: {
          type: DataTypes.STRING(100),
          allowNull: true
        }

      }, {
        sequelize,
        tableName: 'wallet_transaction',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "wallet_transaction_pkey",
            unique: true,
            fields: [
              { name: "watr_id" },
            ]
          },
        ]
      });
      
    return walletTransaction;
}

export default walletTransaction;