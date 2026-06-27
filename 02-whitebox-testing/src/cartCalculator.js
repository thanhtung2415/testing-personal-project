function roundMoney(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function validateItem(item) {
  if (!item || typeof item.name !== 'string' || item.name.trim() === '') {
    throw new Error('Item name is required');
  }

  if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
    throw new Error('Item quantity must be a positive integer');
  }

  if (typeof item.unitPrice !== 'number' || item.unitPrice < 0) {
    throw new Error('Item unit price must be a non-negative number');
  }
}

function calculateOrder(order) {
  const {
    items = [],
    couponCode = '',
    customerTier = 'standard',
    shippingMethod = 'standard',
    destination = 'domestic'
  } = order || {};

  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }

  if (items.length === 0) {
    return {
      subtotal: 0,
      discount: 0,
      shippingFee: 0,
      tax: 0,
      total: 0
    };
  }

  items.forEach(validateItem);

  const subtotal = items.reduce((sum, item) => {
    return sum + item.quantity * item.unitPrice;
  }, 0);

  let discountRate = 0;
  if (couponCode === 'SAVE10') {
    discountRate += 0.1;
  }

  if (customerTier === 'vip') {
    discountRate += 0.05;
  }

  const discount = subtotal * Math.min(discountRate, 0.5);
  const discountedSubtotal = subtotal - discount;

  let shippingFee = shippingMethod === 'express' ? 15 : 7;

  if (discountedSubtotal >= 100 || couponCode === 'FREESHIP') {
    shippingFee = 0;
  }

  if (destination === 'international') {
    shippingFee += 20;
  }

  const tax = destination === 'domestic' ? discountedSubtotal * 0.08 : 0;
  const total = discountedSubtotal + shippingFee + tax;

  return {
    subtotal: roundMoney(subtotal),
    discount: roundMoney(discount),
    shippingFee: roundMoney(shippingFee),
    tax: roundMoney(tax),
    total: roundMoney(total)
  };
}

module.exports = {
  calculateOrder
};

