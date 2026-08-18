// ============================================================================
// SCRIPT OFICIAL - FASE 4 V3 (MAPA REGIONAL INTERATIVO & MOBILIZAÇÃO)
// Sem dependências externas, acessível e responsivo
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

  // 2. Mapa Territorial Interativo (8 Macrorregiões)
  const regionalData = {
    'centro-oeste': {
      badge: 'Macrorregião Centro-Oeste',
      title: 'Centro-Oeste',
      desc: 'Nossa região Centro-Oeste já está cansada com o desemprego, a falta de passe livre universitário e as passagens caras entre as cidades. É hora de quem vive aqui ter voz firme no Congresso.',
      pautas: 'Empregabilidade e primeiro emprego para jovens, criação do Passe Livre Universitário intermunicipal (Divinópolis, Itaúna, Formiga, Samonte, Nova Serrana, Pará de Minas), ampliação dos serviços de saúde do SUS e defesa intransigente da classe trabalhadora pelo Fim da Escala 6x1.'
    },
    'rmbh': {
      badge: 'Capital e Região Metropolitana',
      title: 'RMBH (Capital & Metropolitana)',
      desc: 'A extrema-direita tenta sufocar a cultura popular, a diversidade e os direitos da juventude negra e periférica na Grande BH. Não vamos recuar: nossa luta é por dignidade, vida livre e futuro.',
      pautas: 'Combate frontal à extrema-direita, defesa radical da cultura viva e dos coletivos de juventude, igualdade racial e de gênero, passe livre metropolitano e combate à precarização de entregadores e motoristas de aplicativo.'
    },
    'norte': {
      badge: 'Macrorregião Norte',
      title: 'Norte de Minas',
      desc: 'O Norte de Minas não aceita mais ser esquecido por quem só aparece em ano de eleição. A juventude nortista quer oportunidade de trabalho sem precisar deixar sua terra natal.',
      pautas: 'Geração de empregos para a juventude no Norte, acesso universal à água e segurança hídrica, fortalecimento dos campi da UNIMONTES e IFNMG, transporte público regional e aprovação do Fim da Escala 6x1.'
    },
    'triangulo-alto-paranaiba': {
      badge: 'Macrorregião Oeste',
      title: 'Triângulo / Alto Paranaíba',
      desc: 'Uma região rica que precisa gerar futuro e dignidade para sua juventude trabalhadora e estudantil, e não apenas lucros concentrados para poucos.',
      pautas: 'Incentivo à contratação e primeiro emprego para jovens formados nos IFs e Universidades (UFU, IFTM), transporte interurbano acessível, apoio à agricultura familiar e garantia de direitos pelo Fim da Escala 6x1.'
    },
    'sul': {
      badge: 'Macrorregião Sul',
      title: 'Sul de Minas',
      desc: 'O Sul de Minas produz riqueza no campo, no café e na indústria tecnológica, mas os jovens sofrem com salários precarizados e falta de auxílio para estudar.',
      pautas: 'Empregabilidade jovem com remuneração justa, ampliação de bolsas de permanência estudantil (UNIFAL, UNIFEI, IFsuldeMinas), transporte regional digno e luta prioritária pelo Fim da Escala 6x1.'
    },
    'vale-do-aco-rio-doce': {
      badge: 'Macrorregião Leste',
      title: 'Vale do Aço / Rio Doce',
      desc: 'Uma região marcada pela força dos trabalhadores industriais e pelas dores dos crimes das mineradoras. Exigimos reparação real, respeito e empregos seguros para os jovens.',
      pautas: 'Segurança absoluta contra barragens, fiscalização severa da mineração, empregos industriais qualificados para a juventude, saúde do trabalhador e apoio ao Fim da Escala 6x1.'
    },
    'vales': {
      badge: 'Macrorregião Nordeste',
      title: 'Vales (Jequitinhonha & Mucuri)',
      desc: 'O povo dos Vales é sinônimo de resistência, mas a juventude não pode ser condenada à falta de trabalho e ao isolamento. Os recursos federais precisam chegar na ponta.',
      pautas: 'Superação das desigualdades históricas com empregos e incentivo ao artesanato e cooperativas, fortalecimento da UFVJM e dos IFs, acesso à água potável, transporte escolar rural e proteção do trabalhador (Fim da Escala 6x1).'
    },
    'zona-da-mata-vertentes': {
      badge: 'Macrorregião Sudeste',
      title: 'Zona da Mata / Vertentes',
      desc: 'Tradição universitária, histórica e cultural que sofre com a falta de oportunidades para quem se forma e quer continuar trabalhando e vivendo na região.',
      pautas: 'Empregabilidade e bolsas de pesquisa e extensão para recém-formados (UFJF, UFV, UFSJ), descentralização de recursos federais da Lei Paulo Gustavo/Aldir Blanc para municípios pequenos, passe livre e Fim da Escala 6x1.'
    }
  };

  function selectRegion(regionId) {
    if (!regionalData[regionId]) return;

    // Atualizar paths do SVG
    document.querySelectorAll('.map-region').forEach(p => {
      if (p.getAttribute('data-region') === regionId) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // Atualizar chips
    document.querySelectorAll('.chip-btn').forEach(btn => {
      if (btn.getAttribute('data-region') === regionId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Atualizar painel informativo
    const data = regionalData[regionId];
    const card = document.getElementById('infoCard');
    if (card) {
      card.classList.remove('is-initial');
    }

    const badgeEl = document.getElementById('infoBadge');
    const titleEl = document.getElementById('infoTitle');
    const descEl = document.getElementById('infoDesc');
    const pautasEl = document.getElementById('infoPautas');

    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    
    if (pautasEl) {
      pautasEl.style.display = 'block';
      pautasEl.innerHTML = `<strong>Pautas Prioritárias da Região:</strong><span>${data.pautas}</span>`;
    }

    // Atualizar botão de WhatsApp
    const btnWa = document.getElementById('btnWaRegional');
    if (btnWa) {
      btnWa.classList.add('visible');
      const msg = encodeURIComponent(`Olá! Quero fazer parte do grupo de mobilização da Ana Elisa 1331 na região ${data.title}.`);
      btnWa.href = `https://api.whatsapp.com/send?text=${msg}`;
    }
  }

  // Eventos de clique, hover e teclado nos paths
  document.querySelectorAll('.map-region').forEach(p => {
    p.addEventListener('click', () => {
      selectRegion(p.getAttribute('data-region'));
    });
    p.addEventListener('mouseenter', () => {
      selectRegion(p.getAttribute('data-region'));
    });
    p.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectRegion(p.getAttribute('data-region'));
      }
    });
  });

  // Eventos nos chips
  document.querySelectorAll('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectRegion(btn.getAttribute('data-region'));
    });
  });

  // 3. Formulário de Mobilização (Opção A - WhatsApp sem retenção)
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

      if (!inputNome.value.trim()) {
        errNome.textContent = 'Por favor, informe seu nome.';
        inputNome.classList.add('input-error');
        isValid = false;
      } else {
        errNome.textContent = '';
        inputNome.classList.remove('input-error');
      }

      if (!inputCidade.value.trim()) {
        errCidade.textContent = 'Por favor, informe sua cidade em Minas Gerais.';
        inputCidade.classList.add('input-error');
        isValid = false;
      } else {
        errCidade.textContent = '';
        inputCidade.classList.remove('input-error');
      }

      if (!isValid) return;

      const nome = inputNome.value.trim();
      const cidade = inputCidade.value.trim();
      const interesse = selectInteresse ? selectInteresse.value : 'Apoio geral';

      const mensagem = `Olá! Meu nome é ${nome}, sou de ${cidade} - MG e quero fazer parte do Time da Ana Elisa 1331! Tenho interesse em: ${interesse}.`;
      const mensagemCodificada = encodeURIComponent(mensagem);

      const whatsappUrl = `https://api.whatsapp.com/send?text=${mensagemCodificada}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
