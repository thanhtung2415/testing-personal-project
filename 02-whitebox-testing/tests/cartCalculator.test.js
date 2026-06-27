const { calculateOrder } = require('../src/cartCalculator');

describe('calculateOrder whitebox tests', () => {
  test('returns zero total for empty cart', () => {
    expect(calculateOrder({ items: [] })).toEqual({
      subtotal: 0,
      discount: 0,
      shippingFee: 0,
      tax: 0,
      total: 0
    });
  });

  test('rejects invalid item quantity', () => {
    expect(() =>
      calculateOrder({
        items: [{ name: 'Keyboard', quantity: 0, unitPrice: 25 }]
      })
    ).toThrow('Item quantity must be a positive integer');
  });

  test('rejects missing item name', () => {
    expect(() =>
      calculateOrder({
        items: [{ name: '', quantity: 1, unitPrice: 25 }]
      })
    ).toThrow('Item name is required');
  });

  test('rejects invalid item price', () => {
    expect(() =>
      calculateOrder({
        items: [{ name: 'Keyboard', quantity: 1, unitPrice: -1 }]
      })
    ).toThrow('Item unit price must be a non-negative number');
  });

  test('rejects invalid items input', () => {
    expect(() => calculateOrder({ items: 'not-array' })).toThrow('Items must be an array');
  });

  test('calculates a normal domestic standard order', () => {
    const result = calculateOrder({
      items: [{ name: 'Mouse', quantity: 2, unitPrice: 20 }]
    });

    expect(result).toEqual({
      subtotal: 40,
      discount: 0,
      shippingFee: 7,
      tax: 3.2,
      total: 50.2
    });
  });

  test('applies SAVE10 coupon', () => {
    const result = calculateOrder({
      items: [{ name: 'Monitor', quantity: 1, unitPrice: 80 }],
      couponCode: 'SAVE10'
    });

    expect(result.discount).toBe(8);
    expect(result.total).toBe(84.76);
  });

  test('applies FREESHIP coupon', () => {
    const result = calculateOrder({
      items: [{ name: 'Cable', quantity: 1, unitPrice: 10 }],
      couponCode: 'FREESHIP'
    });

    expect(result.shippingFee).toBe(0);
    expect(result.total).toBe(10.8);
  });

  test('applies VIP tier discount', () => {
    const result = calculateOrder({
      items: [{ name: 'Headset', quantity: 1, unitPrice: 50 }],
      customerTier: 'vip'
    });

    expect(result.discount).toBe(2.5);
    expect(result.total).toBe(58.3);
  });

  test('adds express and international shipping fees', () => {
    const result = calculateOrder({
      items: [{ name: 'Laptop Stand', quantity: 1, unitPrice: 30 }],
      shippingMethod: 'express',
      destination: 'international'
    });

    expect(result).toEqual({
      subtotal: 30,
      discount: 0,
      shippingFee: 35,
      tax: 0,
      total: 65
    });
  });
});
