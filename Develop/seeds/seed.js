const sequelize = require('../config/connection');
const { Category, Product, ProductTag, Tag } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const productTagsData = require('./productTagData.json');
const tagData = require('./tagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
}
//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const blog of blogData) {
//     await Blog.create({
//       ...blog,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

seedDatabase();