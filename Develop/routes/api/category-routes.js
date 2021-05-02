const router = require('express').Router();
//const { json } = require('sequelize/types');
const { Category, Product, ProductTag, Tag } = require('../../models');

// The `/api/categories` endpoint

// find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll(
      {
        include: [{ model: Product }]
      }
    );
      res.status(200).json(err);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id,
      {
        include: [{ model: Product }]
      })
    
    if (!categoryData) {
      res.status(404).json({ message: 'Bad request'});
      return;
    }

    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

  // create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(404).json({ message: 'Bad request'});  
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json(categoryData)
  } catch (err) {
    res.status(404).json({ message: 'Bad request'});  
  }
});

  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
try {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (!categoryData) {
    res.status(404).json({ message: 'Bad request'});
    return;
  }
  res.status(200).json(categoryData);

  } catch (err) {
  res.status(404).json({ message: 'Bad request'});  
  }
});

module.exports = router;
