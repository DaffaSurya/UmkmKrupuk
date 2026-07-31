/**
 * CART & QUANTITY MODULE
 * Product card quantity pickers and order modal triggers
 */

import { PRODUCT_PRICES } from '../config.js';

export function initCart(openModalCallback) {
  // Quantity buttons listener
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const picker = e.currentTarget.closest('.qty-picker');
      const valSpan = picker.querySelector('.qty-val');
      let currentVal = parseInt(valSpan.textContent, 10);

      if (e.currentTarget.classList.contains('plus')) {
        currentVal++;
      } else if (e.currentTarget.classList.contains('minus') && currentVal > 1) {
        currentVal--;
      }
      valSpan.textContent = currentVal;
    });
  });

  // Direct "Pesan via WA" buttons in product cards
  document.querySelectorAll('.btn-add-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.product-card');
      const productName = card.dataset.productName;
      const qtyVal = parseInt(card.querySelector('.qty-val').textContent, 10);

      if (openModalCallback) {
        openModalCallback(productName, qtyVal);
      }
    });
  });

  // Header cart button listener
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn && openModalCallback) {
    cartBtn.addEventListener('click', () => openModalCallback());
  }
}
