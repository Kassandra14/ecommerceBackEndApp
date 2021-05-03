const { Tag } = require('../models');


const tagData = [
  
    {
      "tag_name": "black"
    },
    {
      "tag_name": "silver"
    },
    {
      "tag_name": "blue"
    },
    {
      "tag_name": "red"
    },
    {
      "tag_name": "green"
    },
    {
      "tag_name": "white"
    },
    {
      "tag_name": "gold"
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

