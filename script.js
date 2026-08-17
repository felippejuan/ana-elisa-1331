// ============================================================================
// INTERATIVIDADE OFICIAL - ANA ELISA 1331
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

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Mapa Interativo de Minas Gerais
  const regionData = {
    'centro-oeste': {
      title: 'Centro-Oeste (Terra da Ana)',
      cities: 'Divinópolis, Itaúna, Nova Serrana, Formiga, Pará de Minas, Lagoa da Prata, Santo Antônio do Monte, Bom Despacho...',
      zap: 'https://chat.whatsapp.com/sample-centro-oeste'
    },
    'rmbh': {
      title: 'Belo Horizonte & Região Metropolitana',
      cities: 'Belo Horizonte, Contagem, Betim, Ribeirão das Neves, Santa Luzia, Ibirité, Sabará, Nova Lima, Vespasiano, Sete Lagoas...',
      zap: 'https://chat.whatsapp.com/sample-rmbh'
    },
    'norte': {
      title: 'Norte de Minas',
      cities: 'Montes Claros, Janaúba, Januária, Pirapora, Salinas, Brasília de Minas, São Francisco, Taiobeiras...',
      zap: 'https://chat.whatsapp.com/sample-norte'
    },
    'triangulo': {
      title: 'Triângulo & Alto Paranaíba',
      cities: 'Uberlândia, Uberaba, Patos de Minas, Araguari, Ituiutaba, Frutal, Monte Carmelo, Unaí, Paracatu...',
      zap: 'https://chat.whatsapp.com/sample-triangulo'
    },
    'zona-mata': {
      title: 'Zona da Mata & Vertentes',
      cities: 'Juiz de Fora, Viçosa, Ubá, São João del-Rei, Muriaé, Barbacena, Santos Dumont, Ponte Nova, Cataguases...',
      zap: 'https://chat.whatsapp.com/sample-zona-mata'
    },
    'sul': {
      title: 'Sul de Minas',
      cities: 'Pouso Alegre, Poços de Caldas, Varginha, Lavras, Passos, Alfenas, Itajubá, Três Corações, São Lourenço...',
      zap: 'https://chat.whatsapp.com/sample-sul'
    },
    'vales': {
      title: 'Vales do Jequitinhonha & Mucuri',
      cities: 'Teófilo Otoni, Diamantina, Almenara, Pedra Azul, Araçuaí, Itaobim, Jequitinhonha, Capelinha...',
      zap: 'https://chat.whatsapp.com/sample-vales'
    },
    'rio-doce': {
      title: 'Vale do Aço & Rio Doce',
      cities: 'Governador Valadares, Ipatinga, Coronel Fabriciano, Timóteo, Caratinga, Guanhães, Mantena...',
      zap: 'https://chat.whatsapp.com/sample-rio-doce'
    }
  };

  const mapPaths = document.querySelectorAll('.map-path');
  const pillTriggers = document.querySelectorAll('.pill-trigger');
  const regionTitle = document.getElementById('regionTitle');
  const regionCities = document.getElementById('regionCities');
  const regionZapBtn = document.getElementById('regionZapBtn');

  function selectRegion(regionId) {
    const data = regionData[regionId];
    if (!data) return;

    mapPaths.forEach(p => p.classList.remove('active'));
    pillTriggers.forEach(t => t.classList.remove('active'));

    const activePath = document.querySelector(`.map-path[data-region="${regionId}"]`);
    const activePill = document.querySelector(`.pill-trigger[data-region="${regionId}"]`);

    if (activePath) activePath.classList.add('active');
    if (activePill) activePill.classList.add('active');

    if (regionTitle) regionTitle.textContent = data.title;
    if (regionCities) regionCities.textContent = data.cities;
    if (regionZapBtn) regionZapBtn.href = data.zap;
  }

  mapPaths.forEach(path => {
    path.addEventListener('click', () => {
      const reg = path.getAttribute('data-region');
      selectRegion(reg);
    });
  });

  pillTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const reg = btn.getAttribute('data-region');
      selectRegion(reg);
    });
  });

  // 3. City Autocomplete (Principais Cidades de MG)
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

  // 4. Form Submit Handler
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

  // 5. WhatsApp Phone Mask
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

  // 6. Agenda Filters
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

  // 7. Materials Carousel Navigation
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
    btn.style.color = '#1E0C05';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });
};
