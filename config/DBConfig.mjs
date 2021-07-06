// Bring in Sequelize
import ORM from 'sequelize';
const { Sequelize } = ORM;
// Bring in db.js which contains database name, username and password
const db = {
    host: 'localhost',
    database: 'vidjot',
    username: 'itp211',
    password: 'itp211'
};

// Instantiates Sequelize with database parameters
export const Database = new Sequelize(db.database, db.username, db.password, {
    host: db.host, // Name or IP address of MySQL server
    dialect: 'mysql', // Tells squelize that MySQL is used
    operatorsAliases: 0,

    define: {
        timestamps: false // Don't create timestamp fields in database
    },

    pool: { // Database system params, don't need to know
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
