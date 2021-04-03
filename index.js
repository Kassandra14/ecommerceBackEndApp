// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tags, {
   through: 'ProductTag',
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, { through: 'ProductTag',
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Products, {
//  foreignKey: 'reader_id',
//  onDelete: 'CASCADE',
});

ProductTag.belongsTo(
   // * References the `Tag` model's `id`.
   //* References the `Product` model's `id`.
)
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
