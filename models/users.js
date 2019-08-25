'use strict';
var bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    users.belongsToMany(models.emojis, {
      through: 'user_emojis',
      as: 'umoji',
      foreignKey: 'user_id'
    });
  };

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
users.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
users.addHook("beforeCreate", function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});

  return users;
};