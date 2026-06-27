const express = require('express');
const path = require('path');

const products = [
  {
    id: 'backpack',
    name: 'Swag Backpack',
    price: 29.99,
    stock: 12
  },
  {
    id: 'bike-light',
    name: 'Bike Light',
    price: 9.99,
    stock: 20
  },
  {
    id: 'bolt-shirt',
    name: 'Bolt T-Shirt',
    price: 15.99,
    stock: 15
  }
];

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function calculateCartTotal(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Cart must contain at least one item');
  }

  return items.reduce(
    (cart, item) => {
      const product = findProduct(item.productId);

      if (!product) {
        throw new Error(`Product not found: ${item.productId}`);
      }

      if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
        throw new Error('Quantity must be a positive integer');
      }

      if (item.quantity > product.stock) {
        throw new Error(`Not enough stock for ${product.name}`);
      }

      const lineTotal = product.price * item.quantity;

      cart.items.push({
        productId: product.id,
        name: product.name,
        quantity: item.quantity,
        unitPrice: product.price,
        lineTotal: Number(lineTotal.toFixed(2))
      });

      cart.subtotal += lineTotal;
      return cart;
    },
    { items: [], subtotal: 0 }
  );
}

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'swagstore',
      timestamp: new Date().toISOString()
    });
  });

  app.get('/api/products', (req, res) => {
    res.json({ products });
  });

  app.post('/api/cart', (req, res) => {
    try {
      const cart = calculateCartTotal(req.body.items);
      const shippingFee = cart.subtotal >= 50 ? 0 : 5;
      const total = cart.subtotal + shippingFee;

      res.json({
        items: cart.items,
        subtotal: Number(cart.subtotal.toFixed(2)),
        shippingFee,
        total: Number(total.toFixed(2))
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.post('/api/orders', (req, res) => {
    const { customer, items } = req.body;

    if (!customer || !customer.fullName || !customer.email) {
      return res.status(400).json({ error: 'Customer full name and email are required' });
    }

    try {
      const cart = calculateCartTotal(items);
      return res.status(201).json({
        orderId: `SWAG-${Date.now()}`,
        customer,
        subtotal: Number(cart.subtotal.toFixed(2)),
        status: 'created'
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });

  return app;
}

module.exports = {
  createApp,
  calculateCartTotal,
  products
};

