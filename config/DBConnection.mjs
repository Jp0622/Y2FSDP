import { Database } from './DBConfig.mjs';
import { User } from '../models/User.mjs';
import { Video } from '../models/Video.mjs';

// If drop is true, all existing tables are dropped and recreated
export function setUpDB(drop) {
    Database.authenticate()
        .then(() => {
            console.log('Vidjot database connected');
        })
        .then(() => {
            /*
                Defines the relationship where a user has many videos.
                In this case the primary key from user will be a foreign key
                in video.
            */
            User.initialize(Database);
            Video.initialize(Database);
            User.hasMany(Video);
            Database.sync({ // Creates table if none exists
                force: drop
            }).then(() => {
                console.log('Create tables if none exists')
            }).catch(err => console.log(err))
        })
        .catch(err => console.log('Error: ' + err));
};