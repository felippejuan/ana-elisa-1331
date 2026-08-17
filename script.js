// ============================================================================
// INTERATIVIDADE REORGANIZADA - ANA ELISA 1331
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      burgerBtn.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      burgerBtn.setAttribute('aria-expanded', isExpanded);
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burgerBtn.classList.remove('active');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. City Autocomplete (MG)
  const mgCities = [
    "Divinópolis", "Belo Horizonte", "Juiz de Fora", "Contagem", "Uberlândia", "Betim",
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
        matches.slice(0, 5).forEach(city => {
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

  // 3. Form Submit
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

      timeForm.hidden = true;
      if (formSuccess) formSuccess.hidden = false;
    });
  }

  // 4. Phone Mask
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
  const agBtns = document.querySelectorAll('.ag-btn');
  const eventCards = document.querySelectorAll('.event-card');

  agBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      agBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const reg = btn.getAttribute('data-reg');

      eventCards.forEach(card => {
        if (reg === 'all' || card.getAttribute('data-reg') === reg) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Copy Zap Message
window.copyZapMsg = function(btn) {
  const card = btn.closest('.zap-bubble-card');
  const text = card.querySelector('.zbc-body').textContent;

  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'COPIADO! ✓';
    btn.style.background = '#FCBD00';
    btn.style.color = '#1E0C05';

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });
};
