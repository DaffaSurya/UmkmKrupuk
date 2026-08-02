/**
 * MAIN JAVASCRIPT LOGIC
 * UMKM Kerupuk Bawang "Abdi Barokah" Desa Kedali
 */

document.addEventListener('DOMContentLoaded', () => {
  // State Management
  const state = {
    cart: [
      { id: 'p1', name: 'Kerupuk Bawang Bulat belum digoreng', price: 5000, unit: '250g', qty: 1 }
    ],
    whatsappNumber: '6281249201501' // Nomor pemilik UMKM Abdi Barokah
  };

  // DOM Elements
  const header = document.getElementById('mainHeader');
  const cartBadge = document.getElementById('cartBadge');
  const cartBtn = document.getElementById('cartBtn');
  const orderModalBackdrop = document.getElementById('orderModalBackdrop');
  const orderModalCard = document.getElementById('orderModalCard');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const orderForm = document.getElementById('orderForm');
  const productSelect = document.getElementById('orderProductSelect');
  const orderQtyInput = document.getElementById('orderQtyInput');
  const totalPriceDisplay = document.getElementById('totalPriceDisplay');
  const toastContainer = document.getElementById('toastContainer');

  // Product Prices Mapping
  const prices = {
    'Kerupuk Bawang Bulat belum digoreng (250g)': 5000,
    'Kerupuk Bawang Bulat sudah digoreng (15 Pcs)': 12500,
    'Kerupuk Bawang lonjong mentah (250g)': 5000
  };

  // 1. Sticky Header Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy for Navigation Active State
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLinks = document.querySelectorAll(`.nav-link[href*="#${sectionId}"], .mobile-nav-item[href*="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.add('active'));
      } else {
        navLinks.forEach(link => link.classList.remove('active'));
      }
    });
  });

  // 2. Quantity Selectors inside Product Cards
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

  // 3. Product "Pesan via WA" Direct Buttons
  document.querySelectorAll('.btn-add-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.product-card');
      const productName = card.dataset.productName;
      const qtyVal = parseInt(card.querySelector('.qty-val').textContent, 10);

      openOrderModal(productName, qtyVal);
    });
  });

  // 4. Modal Handlers
  function openOrderModal(selectedProduct = '', quantity = 1) {
    if (selectedProduct && productSelect) {
      // Find matching option
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
    orderModalBackdrop.classList.add('open');
    orderModalCard.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    orderModalBackdrop.classList.remove('open');
    orderModalCard.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', () => openOrderModal());
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (orderModalBackdrop) orderModalBackdrop.addEventListener('click', closeModal);

  // 5. Dynamic Price Calculation in Modal
  function updateModalPrice() {
    if (!productSelect || !orderQtyInput || !totalPriceDisplay) return;
    const selectedText = productSelect.value;
    const qty = parseInt(orderQtyInput.value, 10) || 1;
    const unitPrice = prices[selectedText] || 15000;
    const total = unitPrice * qty;

    totalPriceDisplay.textContent = `Rp ${total.toLocaleString('id-ID')}`;
  }

  if (productSelect) productSelect.addEventListener('change', updateModalPrice);
  if (orderQtyInput) orderQtyInput.addEventListener('input', updateModalPrice);

  // 6. Form Submission to WhatsApp
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const product = productSelect.value;
      const qty = orderQtyInput.value;
      const address = document.getElementById('custAddress').value.trim();
      const note = document.getElementById('custNote').value.trim();

      const unitPrice = prices[product] || 15000;
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
      const waUrl = `https://wa.me/${state.whatsappNumber}?text=${encodedText}`;

      // Open WA in new tab
      window.open(waUrl, '_blank');

      showToast('Pesanan telah disiapkan! Membuka WhatsApp...');
      closeModal();
    });
  }

  // 7. FAQ Accordion Toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.currentTarget.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 8. Toast Notification Utility
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-12px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
});
