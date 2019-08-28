'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_emojis = sequelize.define('user_emojis', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    emoji_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'emojis',
        key: 'emoji'
      }
    },
    user_comment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  user_emojis.associate = function(models) {
    // associations can be defined here
    //user_emojis.belongsToMany(users);
    //user_emojis.belongsToMany(emojis);
  };
  return user_emojis;
};