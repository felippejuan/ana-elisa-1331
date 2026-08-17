// ============================================================================
// SCRIPT DE INTERATIVIDADE - ANA ELISA 1331
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      burgerBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. City Autocomplete (Principais Cidades de MG)
  const mgCities = [
    "Belo Horizonte", "Divinópolis", "Juiz de Fora", "Contagem", "Uberlândia", "Betim",
    "Montes Claros", "Ribeirão das Neves", "Governador Valadares", "Ipatinga", "Sete Lagoas",
    "Santa Luzia", "Ibirité", "Poços de Caldas", "Patos de Minas", "Pouso Alegre", "Teófilo Otoni",
    "Barbacena", "Sabará", "Varginha", "Conselheiro Lafaiete", "Araguari", "Itabira", "Passos",
    "Nova Lima", "Ubá", "Coronel Fabriciano", "Muriaé", "Ituiutaba", "Lavras", "Nova Serrana",
    "Itaúna", "São João del-Rei", "Pará de Minas", "Mariana", "Ouro Preto", "Diamantina",
    "Viçosa", "Timóteo", "Alfenas", "Três Corações", "Janaúba", "Januária", "Pirapora", "Salinas",
    "Jequitinhonha", "Almenara", "Pedra Azul", "Formiga", "Lagoa da Prata", "São Lourenço", "Itajubá"
  ];

  const cityInput = document.getElementById('cidade');
  const citySuggestions = document.getElementById('citySuggestions');

  if (cityInput && citySuggestions) {
    cityInput.addEventListener('input', () => {
      const query = cityInput.value.trim().toLowerCase();
      citySuggestions.innerHTML = '';

      if (query.length < 2) {
        citySuggestions.classList.remove('active');
        return;
      }

      const matches = mgCities.filter(c => c.toLowerCase().includes(query));

      if (matches.length > 0) {
        matches.slice(0, 6).forEach(city => {
          const div = document.createElement('div');
          div.className = 'city-opt';
          div.textContent = city + ' - MG';
          div.addEventListener('click', () => {
            cityInput.value = city + ' - MG';
            citySuggestions.classList.remove('active');
          });
          citySuggestions.appendChild(div);
        });
        citySuggestions.classList.add('active');
      } else {
        citySuggestions.classList.remove('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!cityInput.contains(e.target) && !citySuggestions.contains(e.target)) {
        citySuggestions.classList.remove('active');
      }
    });
  }

  // 3. Form Submit Handler
  const timeForm = document.getElementById('timeForm');
  const formSuccess = document.getElementById('formSuccess');

  if (timeForm) {
    timeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const whatsapp = document.getElementById('whatsapp').value.trim();

      if (!nome || !whatsapp) {
        alert('Por favor, preencha seu nome e WhatsApp.');
        return;
      }

      // Simulate success
      timeForm.hidden = true;
      if (formSuccess) formSuccess.hidden = false;
    });
  }

  // 4. WhatsApp Phone Mask
  const telInput = document.getElementById('whatsapp');
  if (telInput) {
    telInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 6) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
      } else if (v.length > 2) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
      } else if (v.length > 0) {
        e.target.value = `(${v}`;
      }
    });
  }

  // 5. Agenda Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const agendaItems = document.querySelectorAll('.agenda-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const reg = btn.getAttribute('data-reg');

      agendaItems.forEach(item => {
        if (reg === 'all' || item.getAttribute('data-reg') === reg) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 6. Materials Carousel Navigation
  const matTrack = document.getElementById('matTrack');
  const matPrev = document.getElementById('matPrev');
  const matNext = document.getElementById('matNext');

  if (matTrack && matPrev && matNext) {
    matPrev.addEventListener('click', () => {
      matTrack.scrollBy({ left: -300, behavior: 'smooth' });
    });

    matNext.addEventListener('click', () => {
      matTrack.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
});

// Copy Zap Text function
window.copyZapText = function(btn) {
  const card = btn.closest('.zap-msg-card');
  const text = card.querySelector('.msg-body').textContent;

  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.textContent;
    btn.textContent = 'COPIADO! ✓';
    btn.style.background = '#FCBD00';
    btn.style.color = '#31170C';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });
};
