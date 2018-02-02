'use strict';
module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    path: DataTypes.STRING,
    author: DataTypes.STRING
  });
  
  // Post.associate = (models) => {
  //   Post.belongsTo(models.User, {
  //     foreignKey: 'userId',
  //     onDelete: 'CASCADE'
  //   });
  // };

  return Post;
};