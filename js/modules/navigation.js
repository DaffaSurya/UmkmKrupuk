/**
 * NAVIGATION MODULE
 * Sticky navbar glassmorphism, mobile menu drawer & scroll-spy controller
 */

export function initNavigation() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  // Mobile Nav Drawer Elements
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileClose = document.getElementById('mobileMenuClose');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-drawer-link');

  function openDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add('open');
      mobileBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove('open');
      mobileBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  const drawerWaBtn = document.getElementById('mobileDrawerWaBtn');
  if (drawerWaBtn) {
    drawerWaBtn.addEventListener('click', () => {
      closeDrawer();
    });
  }

  window.addEventListener('scroll', () => {
    // Sticky header toggle
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll-Spy active indicator
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLinks = document.querySelectorAll(
        `.nav-link[href*="#${sectionId}"], .mobile-nav-item[href*="#${sectionId}"], .mobile-drawer-link[href*="#${sectionId}"]`
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.add('active'));
      } else {
        navLinks.forEach(link => link.classList.remove('active'));
      }
    });
  });
}
