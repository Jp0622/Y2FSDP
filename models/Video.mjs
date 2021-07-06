import ORM from 'sequelize';
const { Model, Sequelize } = ORM;

export class Video extends Model {

    static initialize (database) {
        Video.init({
            title: {
                type: Sequelize.STRING
            },
            story: { 
                type: Sequelize.STRING(2000)
            },
            language:{
                type: Sequelize.STRING
            },
            subtitles: {
                type: Sequelize.STRING
            },
            classification: {
                type: Sequelize.STRING
            },
            dateRelease: {
                type: Sequelize.DATE
            }
        }, {
            sequelize: database
        });
    }
}