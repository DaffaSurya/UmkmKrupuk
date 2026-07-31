/**
 * COMPONENT LOADER MODULE
 * Asynchronously loads HTML components into data-component placeholders
 */

export async function loadComponents() {
  const placeholders = document.querySelectorAll('[data-component]');
  
  const loadPromises = Array.from(placeholders).map(async (el) => {
    const componentName = el.getAttribute('data-component');
    try {
      const response = await fetch(`components/${componentName}.html`);
      if (response.ok) {
        const html = await response.text();
        el.innerHTML = html;
      } else {
        console.error(`Failed to load component: ${componentName}`);
      }
    } catch (err) {
      console.error(`Error fetching component ${componentName}:`, err);
    }
  });

  await Promise.all(loadPromises);
}
