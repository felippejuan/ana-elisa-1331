// ============================================================================
// SCRIPT MÍNIMO - FASE 1 (FOUNDATION TÉCNICA)
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.getElementById('headerNav');

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
      headerNav.classList.toggle('active');
      const isExpanded = headerNav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
