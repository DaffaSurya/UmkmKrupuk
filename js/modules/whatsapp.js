/**
 * WHATSAPP ORDER SERVICE MODULE
 * Handles Order Modal calculation and WhatsApp URL generation
 */

import { CONFIG, PRODUCT_PRICES } from '../config.js';
import { showToast } from './toast.js';

export function initWhatsAppModal() {
  const orderModalBackdrop = document.getElementById('orderModalBackdrop');
  const orderModalCard = document.getElementById('orderModalCard');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const orderForm = document.getElementById('orderForm');
  const productSelect = document.getElementById('orderProductSelect');
  const orderQtyInput = document.getElementById('orderQtyInput');
  const totalPriceDisplay = document.getElementById('totalPriceDisplay');

  function updateModalPrice() {
    if (!productSelect || !orderQtyInput || !totalPriceDisplay) return;
    const selectedText = productSelect.value;
    const qty = parseInt(orderQtyInput.value, 10) || 1;
    const unitPrice = PRODUCT_PRICES[selectedText] || 15000;
    const total = unitPrice * qty;

    totalPriceDisplay.textContent = `Rp ${total.toLocaleString('id-ID')}`;
  }

  function openOrderModal(selectedProduct = '', quantity = 1) {
    if (selectedProduct && productSelect) {
      for (let i = 0; i < productSelect.options.length; i++) {
        if (productSelect.options[i].value.includes(selectedProduct)) {
          productSelect.selectedIndex = i;
          break;
        }
      }
    }
    if (orderQtyInput) {
      orderQtyInput.value = quantity;
    }

    updateModalPrice();
    orderModalBackdrop?.classList.add('open');
    orderModalCard?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    orderModalBackdrop?.classList.remove('open');
    orderModalCard?.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (orderModalBackdrop) orderModalBackdrop.addEventListener('click', closeModal);
  if (productSelect) productSelect.addEventListener('change', updateModalPrice);
  if (orderQtyInput) orderQtyInput.addEventListener('input', updateModalPrice);

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const product = productSelect.value;
      const qty = orderQtyInput.value;
      const address = document.getElementById('custAddress').value.trim();
      const note = document.getElementById('custNote').value.trim();

      const unitPrice = PRODUCT_PRICES[product] || 15000;
      const total = unitPrice * parseInt(qty, 10);
      const formattedTotal = `Rp ${total.toLocaleString('id-ID')}`;

      let text = `*PESANAN KERUPUK ABDI BAROKAH DESA KEDALI*\n\n`;
      text += `Halo Ibu Siti Solikhah, saya mau pesan kerupuk:\n`;
      text += `-------------------------------------------\n`;
      text += `📦 *Produk:* ${product}\n`;
      text += `🔢 *Jumlah:* ${qty} bungkus/kemasan\n`;
      text += `💰 *Total Estimasi:* ${formattedTotal}\n\n`;
      text += `👤 *Nama Pembeli:* ${name}\n`;
      text += `📱 *No. HP/WA:* ${phone}\n`;
      text += `📍 *Alamat Pengiriman:* ${address}\n`;
      if (note) {
        text += `📝 *Catatan TAMBAHAN:* ${note}\n`;
      }
      text += `-------------------------------------------\n`;
      text += `Mohon konfirmasi ketersediaan stok & ongkos kirim. Terima kasih!`;

      const encodedText = encodeURIComponent(text);
      const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;

      window.open(waUrl, '_blank');
      showToast('Pesanan disiapkan! Membuka WhatsApp...');
      closeModal();
    });
  }

  return { openOrderModal, closeModal };
}
