'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [
        {
          user_account: 'aaa',
          user_password: '123456',
          user_email: 'jiapengss22@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_account: 'bbb',
          user_password: '456789',
          user_email: 'jiapengss22@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
