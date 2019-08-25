'use strict';
// import mysql2 from 'mysql2';

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
   var emotions = require('emoji-emotion');

   var emojis = [];
   emotions.forEach(function(emotion) {
    emojis.push({
      name: emotion.name,
      emoji: emotion.emoji,
      polarity: emotion.polarity,
      createdAt: new Date(),
      updatedAt: new Date()
    });
   });

   return queryInterface.bulkInsert('emojis', emojis, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('emojis', null, {});
  }
};
