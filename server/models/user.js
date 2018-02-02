'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING
  });
  
  // User.associate = (models) => {
  //   User.hasMany(models.Post, {
  //     foreignKey: 'userId',
  //     as: 'posts'
  //   });
  // };

  return User;
};