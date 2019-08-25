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
   return queryInterface.bulkInsert('users', [{
      username: 'raj@gmail.com',
      password: '$2a$10$RbFvoj6nRl2yr0DRC8gV.e.WhkXpWkq1psUrqZ3gWY322uacNLxCy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'hally@gmail.com',
      password: '$2a$10$RbFvoj6nRl2yr0DRC8gV.e.WhkXpWkq1psUrqZ3gWY322uacNLxCy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'tj@gmail.com',
      password: '$2a$10$RbFvoj6nRl2yr0DRC8gV.e.WhkXpWkq1psUrqZ3gWY322uacNLxCy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'mohammed@gmail.com',
      password: '$2a$10$RbFvoj6nRl2yr0DRC8gV.e.WhkXpWkq1psUrqZ3gWY322uacNLxCy',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
