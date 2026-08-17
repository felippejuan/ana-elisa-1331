// ============================================================================
// INTERATIVIDADE OFICIAL UNIFICADA - ANA ELISA 1331
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
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

  // 2. Mapa & Seletor Regional de Minas Gerais
  const regionData = {
    'centro-oeste': {
      title: 'Centro-Oeste (Terra da Ana)',
      icon: '📍',
      cities: 'Divinópolis, Itaúna, Nova Serrana, Formiga, Pará de Minas, Lagoa da Prata, Santo Antônio do Monte, Bom Despacho, Cláudio, Oliveira...',
      zap: 'https://chat.whatsapp.com/sample-centro-oeste'
    },
    'rmbh': {
      title: 'Belo Horizonte & Região Metropolitana',
      icon: '🏢',
      cities: 'Belo Horizonte, Contagem, Betim, Ribeirão das Neves, Santa Luzia, Ibirité, Sabará, Nova Lima, Vespasiano, Sete Lagoas...',
      zap: 'https://chat.whatsapp.com/sample-rmbh'
    },
    'triangulo': {
      title: 'Triângulo & Alto Paranaíba',
      icon: '🚜',
      cities: 'Uberlândia, Uberaba, Patos de Minas, Araguari, Ituiutaba, Frutal, Monte Carmelo, Unaí, Paracatu...',
      zap: 'https://chat.whatsapp.com/sample-triangulo'
    },
    'zona-mata': {
      title: 'Zona da Mata & Vertentes',
      icon: '⛰️',
      cities: 'Juiz de Fora, Viçosa, Ubá, São João del-Rei, Muriaé, Barbacena, Santos Dumont, Ponte Nova, Cataguases...',
      zap: 'https://chat.whatsapp.com/sample-zona-mata'
    },
    'norte': {
      title: 'Norte de Minas',
      icon: '☀️',
      cities: 'Montes Claros, Janaúba, Januária, Pirapora, Salinas, Brasília de Minas, São Francisco, Taiobeiras...',
      zap: 'https://chat.whatsapp.com/sample-norte'
    },
    'sul': {
      title: 'Sul de Minas',
      icon: '☕',
      cities: 'Pouso Alegre, Poços de Caldas, Varginha, Lavras, Passos, Alfenas, Itajubá, Três Corações, São Lourenço...',
      zap: 'https://chat.whatsapp.com/sample-sul'
    },
    'vales': {
      title: 'Vales do Jequitinhonha & Mucuri',
      icon: '💎',
      cities: 'Teófilo Otoni, Diamantina, Almenara, Pedra Azul, Araçuaí, Itaobim, Jequitinhonha, Capelinha...',
      zap: 'https://chat.whatsapp.com/sample-vales'
    },
    'rio-doce': {
      title: 'Vale do Aço & Rio Doce',
      icon: '🏭',
      cities: 'Governador Valadares, Ipatinga, Coronel Fabriciano, Timóteo, Caratinga, Guanhães, Mantena...',
      zap: 'https://chat.whatsapp.com/sample-rio-doce'
    }
  };

  const mapPaths = document.querySelectorAll('.mg-map-path');
  const chipBtns = document.querySelectorAll('.chip-btn');
  const regionTitle = document.getElementById('regionTitle');
  const regionIcon = document.getElementById('regionIcon');
  const regionCities = document.getElementById('regionCities');
  const regionZapBtn = document.getElementById('regionZapBtn');

  function updateActiveRegion(regionKey) {
    const data = regionData[regionKey];
    if (!data) return;

    // Atualiza chips
    chipBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-region') === regionKey);
    });

    // Atualiza paths do SVG
    mapPaths.forEach(path => {
      path.classList.toggle('active', path.getAttribute('data-region') === regionKey);
    });

    // Atualiza texto e botão
    if (regionTitle) regionTitle.textContent = data.title;
    if (regionIcon) regionIcon.textContent = data.icon;
    if (regionCities) regionCities.textContent = data.cities;
    if (regionZapBtn) regionZapBtn.href = data.zap;
  }

  mapPaths.forEach(path => {
    path.addEventListener('click', () => {
      const reg = path.getAttribute('data-region');
      updateActiveRegion(reg);
    });
  });

  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const reg = btn.getAttribute('data-region');
      updateActiveRegion(reg);
    });
  });

  // 3. Autocomplete de Cidades de MG
  const mgCities = [
    "Divinópolis", "Belo Horizonte", "Juiz de Fora", "Contagem", "Uberlândia", "Betim",
    "Montes Claros", "Ribeirão das Neves", "Governador Valadares", "Ipatinga", "Sete Lagoas",
    "Santa Luzia", "Ibirité", "Poços de Caldas", "Patos de Minas", "Pouso Alegre", "Teófilo Otoni",
    "Barbacena", "Sabará", "Varginha", "Conselheiro Lafaiete", "Araguari", "Itabira", "Passos",
    "Nova Lima", "Ubá", "Coronel Fabriciano", "Muriaé", "Ituiutaba", "Lavras", "Nova Serrana",
    "Itaúna", "São João del-Rei", "Pará de Minas", "Mariana", "Ouro Preto", "Diamantina",
    "Viçosa", "Timóteo", "Alfenas", "Três Corações", "Janaúba", "Januária", "Pirapora", "Salinas",
    "Jequitinhonha", "Almenara", "Pedra Azul", "Formiga", "Lagoa da Prata", "São Lourenço", "Itajubá",
    "Cláudio", "Oliveira", "Campo Belo", "Araxá", "Manhuaçu", "Caratinga", "Curvelo", "Unaí", "Paracatu"
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
          div.className = 'city-option-item';
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

  // 4. Máscara de Telefone WhatsApp
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

  // 5. Validação e Envio do Formulário
  const timeForm = document.getElementById('timeForm');
  const formSuccess = document.getElementById('formSuccess');

  if (timeForm) {
    timeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nome = document.getElementById('nome');
      const whatsapp = document.getElementById('whatsapp');
      const email = document.getElementById('email');
      const cidade = document.getElementById('cidade');

      let isValid = true;

      // Valida Nome
      if (!nome.value.trim()) {
        document.getElementById('errNome').textContent = 'Por favor, digite seu nome completo.';
        isValid = false;
      } else {
        document.getElementById('errNome').textContent = '';
      }

      // Valida WhatsApp
      if (whatsapp.value.replace(/\D/g, '').length < 10) {
        document.getElementById('errWhatsapp').textContent = 'Digite seu WhatsApp com DDD.';
        isValid = false;
      } else {
        document.getElementById('errWhatsapp').textContent = '';
      }

      // Valida Email
      if (!email.value.includes('@') || !email.value.includes('.')) {
        document.getElementById('errEmail').textContent = 'Digite um e-mail válido.';
        isValid = false;
      } else {
        document.getElementById('errEmail').textContent = '';
      }

      // Valida Cidade
      if (!cidade.value.trim()) {
        document.getElementById('errCidade').textContent = 'Informe sua cidade em MG.';
        isValid = false;
      } else {
        document.getElementById('errCidade').textContent = '';
      }

      if (isValid) {
        timeForm.hidden = true;
        if (formSuccess) formSuccess.hidden = false;
      }
    });
  }

  // 6. Carrossel de Materiais (Navegação por Setas)
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

  // 7. Filtros da Agenda
  const agChips = document.querySelectorAll('.ag-chip');
  const eventRows = document.querySelectorAll('.event-row-card');

  agChips.forEach(chip => {
    chip.addEventListener('click', () => {
      agChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const reg = chip.getAttribute('data-reg');

      eventRows.forEach(row => {
        if (reg === 'all' || row.getAttribute('data-reg') === reg) {
          row.style.display = 'flex';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
});

// 8. Função Global de Cópia de Mensagem do WhatsApp
window.copyZapText = function(btn) {
  const card = btn.closest('.zap-chat-card');
  const text = card.querySelector('.zcc-text').textContent;

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
