// routes/products.js
const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  // Diğer fonksiyonlar...
} = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
// Diğer route'lar...

module.exports = router;