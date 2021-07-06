import ORM from 'sequelize';
const { Model, Sequelize } = ORM;

export class User extends Model {

    static initalize(database) {
        User.init({
            name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            }
        }, {
            sequelize: database
        });
    }
}