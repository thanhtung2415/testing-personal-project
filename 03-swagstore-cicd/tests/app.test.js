const request = require('supertest');
const { createApp, calculateCartTotal } = require('../src/app');

describe('SwagStore API', () => {
  const app = createApp();

  test('returns health check information', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.service).toBe('swagstore');
  });

  test('returns product list', async () => {
    const response = await request(app).get('/api/products');

    expect(response.status).toBe(200);
    expect(response.body.products.length).toBeGreaterThanOrEqual(3);
  });

  test('calculates cart total with shipping fee', async () => {
    const response = await request(app)
      .post('/api/cart')
      .send({
        items: [{ productId: 'bike-light', quantity: 2 }]
      });

    expect(response.status).toBe(200);
    expect(response.body.subtotal).toBe(19.98);
    expect(response.body.shippingFee).toBe(5);
    expect(response.body.total).toBe(24.98);
  });

  test('rejects unknown product', async () => {
    const response = await request(app)
      .post('/api/cart')
      .send({
        items: [{ productId: 'unknown', quantity: 1 }]
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('Product not found');
  });

  test('creates an order with valid customer and items', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        customer: {
          fullName: 'Nguyen Van An',
          email: 'an@example.com'
        },
        items: [{ productId: 'backpack', quantity: 1 }]
      });

    expect(response.status).toBe(201);
    expect(response.body.orderId).toMatch(/^SWAG-/);
    expect(response.body.status).toBe('created');
  });
});

describe('calculateCartTotal unit logic', () => {
  test('rejects empty cart', () => {
    expect(() => calculateCartTotal([])).toThrow('Cart must contain at least one item');
  });

  test('rejects quantity greater than stock', () => {
    expect(() =>
      calculateCartTotal([{ productId: 'backpack', quantity: 99 }])
    ).toThrow('Not enough stock');
  });
});

