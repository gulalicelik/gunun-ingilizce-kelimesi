'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  word.init({
    word: DataTypes.STRING,
    mean: DataTypes.STRING,
    category_id: DataTypes.STRING,
    sentence_source: DataTypes.STRING,
    sentence_target: DataTypes.STRING,
    usage_video_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'word',
  });
  return word;
};