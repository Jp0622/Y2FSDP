'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
      {
        movie_title: 'The Shawshank Redemption',
        movie_time: '140',
        movie_image: 'public/images/1627094791985.png',
        movie_type: 'Narrative',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: 'Captain America 3',
        movie_time: '180',
        movie_image: 'public/images/1627094964701.png',
        movie_type: 'Sci-Fi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: 'The Avengers',
        movie_time: '180',
        movie_image: 'public/images/1627101053492.png',
        movie_type: 'Sci-Fi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: 'Tenet',
        movie_time: '140',
        movie_image: 'public/images/1627101704562.png',
        movie_type: 'War',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: 'Inception',
        movie_time: '120',
        movie_image: 'public/images/1627102177988.png',
        movie_type: 'Sci-Fi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: 'District 9',
        movie_time: '123',
        movie_image: 'public/images/1627102407080.png',
        movie_type: 'War',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: 'Weathering With You',
        movie_time: '120',
        movie_image: 'public/images/1627102650688.png',
        movie_type: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movies', null, {});
  }
};
