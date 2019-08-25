'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('user_emojis', [
      {
        user_id: 1,
        emoji_id: 2,
        updatedAt: '2019-08-19 23:24:46',
      },
      {
        user_id: 1,
        emoji_id: 3,
        updatedAt: '2019-08-20 23:24:46',
      },
      {
        user_id: 1,
        emoji_id: 5,
        updatedAt: '2019-08-21 23:24:46',
      },
      {
        user_id: 1,
        emoji_id: 100,
        updatedAt: '2019-08-22 23:24:46',
      },
      {
        user_id: 1,
        emoji_id: 50,
        updatedAt: '2019-08-23 23:24:46',
      },
      {
        user_id: 1,
        emoji_id: 49,
        updatedAt: '2019-08-24 23:24:46',
      },
      {
        user_id: 1,
        emoji_id: 101,
        updatedAt: '2019-08-25 23:24:46',
      },
      {
        user_id: 2,
        emoji_id: 2,
        updatedAt: '2019-08-23 23:24:46',
      },
      {
        user_id: 2,
        emoji_id: 3,
        updatedAt: '2019-08-23 23:24:46',
      },
      {
        user_id: 2,
        emoji_id: 5,
        updatedAt: '2019-08-24 23:24:46',
      },
      {
        user_id: 3,
        emoji_id: 2,
        updatedAt: '2019-08-25 23:24:46',
      },
      {
        user_id: 3,
        emoji_id: 3,
        updatedAt: '2019-08-26 23:24:46',
      },
      {
        user_id: 3,
        emoji_id: 5,
        updatedAt: '2019-08-27 23:24:46',
      },{
        user_id: 4,
        emoji_id: 2,
        updatedAt: '2019-08-28 23:24:46',
      },
      {
        user_id: 4,
        emoji_id: 3,
        updatedAt: '2019-08-29 23:24:46',
      },
      {
        user_id: 4,
        emoji_id: 5,
        updatedAt: '2019-08-30 23:24:46',
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('user_emojis', null, {});
  }
};
