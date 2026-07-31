/**
 * MAIN APPLICATION ENTRY POINT (Clean Architecture Orchestrator)
 * UMKM Kerupuk Bawang "Abdi Barokah" Desa Kedali
 */

import { loadComponents } from './modules/componentLoader.js';
import { initNavigation } from './modules/navigation.js';
import { initCart } from './modules/cart.js';
import { initWhatsAppModal } from './modules/whatsapp.js';
import { initAccordion } from './modules/accordion.js';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Load HTML View Components dynamically if placeholder present
  await loadComponents();

  // 2. Initialize Service Modules
  const { openOrderModal } = initWhatsAppModal();
  initNavigation();
  initCart(openOrderModal);
  initAccordion();
});
