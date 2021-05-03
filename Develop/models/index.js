// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Produccts belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
   through: { 
   model: ProductTag,
  },
  //defines alt for when data is retrieved
  as: "product_tag"
});

//Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: { 
    model: ProductTag,
  },
  as: "tag_data"
 });


//Categories have many Products
Category.hasMany(Product, {
 foreignKey: "category_id",
 onDelete: "CASCADE",
});


module.exports = { Product, Category, Tag, ProductTag };
