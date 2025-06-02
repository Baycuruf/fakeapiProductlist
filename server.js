const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware'ler
app.use(cors());
app.use(bodyParser.json());

// CSP Header (isteğe bağlı)
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' https://vercel.live; style-src 'self' https://www.gstatic.com"
  );
  next();
});

// Routes
app.use('/api/products', productsRouter); // Vercel'de /api/products olarak erişin


// Test Endpoint
app.get('/', (req, res) => {
  res.json({ status: 'API çalışıyor!' });
});

// Favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Sunucuyu başlat
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API http://localhost:${PORT} adresinde çalışıyor`);
  });
}

// Vercel için export
module.exports = app;