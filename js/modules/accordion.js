/**
 * FAQ ACCORDION MODULE
 * Expand / collapse toggle handler for FAQ items
 */

export function initAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.currentTarget.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all other active items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      // Toggle clicked item state
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
