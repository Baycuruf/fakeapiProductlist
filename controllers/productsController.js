// controllers/productsController.js
const products = require('../data/productsData');

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Ürün bulunamadı' });
  res.json(product);
};

// Diğer controller fonksiyonları...
// (createProduct, updateProduct, deleteProduct vb.)