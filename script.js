// ============================================================================
// SCRIPT OFICIAL - FASE 4: MOBILIZAÇÃO REAL NO WHATSAPP
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Acessível
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

  // 2. Formulário de Mobilização (Opção A - Geração de Mensagem Real no WhatsApp)
  const mobForm = document.getElementById('mobForm');

  if (mobForm) {
    mobForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputNome = document.getElementById('mobNome');
      const inputCidade = document.getElementById('mobCidade');
      const selectInteresse = document.getElementById('mobInteresse');
      
      const errNome = document.getElementById('errNome');
      const errCidade = document.getElementById('errCidade');

      let isValid = true;

      // Validação do campo Nome
      if (!inputNome.value.trim()) {
        errNome.textContent = 'Por favor, informe seu nome.';
        inputNome.classList.add('input-error');
        isValid = false;
      } else {
        errNome.textContent = '';
        inputNome.classList.remove('input-error');
      }

      // Validação do campo Cidade
      if (!inputCidade.value.trim()) {
        errCidade.textContent = 'Por favor, informe sua cidade em Minas Gerais.';
        inputCidade.classList.add('input-error');
        isValid = false;
      } else {
        errCidade.textContent = '';
        inputCidade.classList.remove('input-error');
      }

      if (!isValid) {
        return;
      }

      const nome = inputNome.value.trim();
      const cidade = inputCidade.value.trim();
      const interesse = selectInteresse ? selectInteresse.value : 'Apoio geral';

      // Mensagem pré-formatada limpa e sem ruídos
      const mensagem = `Olá! Meu nome é ${nome}, sou de ${cidade} - MG e quero fazer parte do Time da Ana Elisa 1331! Tenho interesse em: ${interesse}.`;
      const mensagemCodificada = encodeURIComponent(mensagem);

      // Link real de compartilhamento/conversa no WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?text=${mensagemCodificada}`;

      // Abre no WhatsApp sem simular gravação inexistente de dados
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
