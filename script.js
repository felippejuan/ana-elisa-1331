// ============================================================================
// SCRIPT LIMPO & 100% FUNCIONAL - ANA ELISA 1331
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
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

  // 2. Formulário de Mobilização (Geração de Mensagem Real no WhatsApp)
  const mobForm = document.getElementById('mobForm');

  if (mobForm) {
    mobForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('mobNome').value.trim();
      const cidade = document.getElementById('mobCidade').value.trim();
      const interesse = document.getElementById('mobInteresse').value;

      if (!nome || !cidade) {
        alert('Por favor, preencha seu nome e sua cidade.');
        return;
      }

      // Mensagem pré-formatada real para o WhatsApp
      const texto = `Olá! Meu nome é ${nome}, sou de ${cidade} - MG e quero fazer parte do Time da Ana Elisa 1331! Tenho interesse em: ${interesse}.`;
      const encodedTexto = encodeURIComponent(texto);
      
      // Link direto oficial de WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTexto}`;

      window.open(whatsappUrl, '_blank');
    });
  }
});
