module.exports = (sequelze, Sequelize) => {
    const Spent = sequelze.define('tb_spents', {
        name: {
            type: Sequelize.STRING
        },
        paymentMonthDay: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        value: {
            type: Sequelize.DOUBLE
        },
        idUser: {
            type: Sequelize.INTEGER,
            foreingKey: true,
            allowNull: false,
            references: {
                model: 'tb_users',
                key: 'id'
           }
        }

    });

    return Spent;
}