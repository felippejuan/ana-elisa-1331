// ============================================================================
// SCRIPT OFICIAL 2.0 - ANA ELISA 1331
// Menu acessível, mapa territorial interativo e mobilização no WhatsApp
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

  // 2. Mapa Territorial & Seletor de Macrorregiões de Minas Gerais
  const mapRegions = {
    'centro-oeste': {
      name: 'Centro-Oeste (Origem)',
      tag: 'Berço da Candidata',
      desc: 'Divinópolis é a terra natal de Ana Elisa, onde começou sua vivência com a realidade dos bairros trabalhadores, o transporte público e a educação.',
      cities: 'Divinópolis, Itaúna, Nova Serrana, Formiga, Pará de Minas, Lagoa da Prata, Bom Despacho, Oliveira, Cláudio, Santo Antônio do Monte...',
      status: 'Território prioritário de diálogo'
    },
    'rmbh': {
      name: 'Belo Horizonte & Região Metropolitana',
      tag: 'Mobilização Estudantil & Popular',
      desc: 'Centro nevrálgico do movimento universitário e das grandes mobilizações pela ampliação do passe livre e defesa dos serviços públicos.',
      cities: 'Belo Horizonte, Contagem, Betim, Ribeirão das Neves, Santa Luzia, Ibirité, Sabará, Nova Lima, Vespasiano, Sete Lagoas...',
      status: 'Articulação metropolitana'
    },
    'triangulo': {
      name: 'Triângulo & Alto Paranaíba',
      tag: 'Juventude & Universidades Federais',
      desc: 'Região universitária e produtiva estratégica para a interiorização do ensino técnico dos IFs e incentivo ao primeiro emprego com carteira assinada.',
      cities: 'Uberlândia, Uberaba, Patos de Minas, Araguari, Ituiutaba, Frutal, Monte Carmelo, Unaí, Paracatu...',
      status: 'Diálogo regional aberto'
    },
    'zona-mata': {
      name: 'Zona da Mata & Vertentes',
      tag: 'Tradição Universitária & Cultura',
      desc: 'Pólo de produção acadêmica e cultural, com forte demanda por valorização dos profissionais de educação e permanência estudantil.',
      cities: 'Juiz de Fora, Viçosa, Ubá, São João del-Rei, Muriaé, Barbacena, Santos Dumont, Ponte Nova, Cataguases...',
      status: 'Diálogo regional aberto'
    },
    'norte': {
      name: 'Norte de Minas',
      tag: 'Convivência com o Semiárido & Direitos',
      desc: 'Foco na captação de recursos federais para agricultura familiar, segurança hídrica e fortalecimento dos polos educacionais no semiárido.',
      cities: 'Montes Claros, Janaúba, Januária, Pirapora, Salinas, Brasília de Minas, São Francisco, Taiobeiras...',
      status: 'Diálogo regional aberto'
    },
    'sul': {
      name: 'Sul de Minas',
      tag: 'Desenvolvimento Social & IFs',
      desc: 'Região com forte presença de Institutos Federais e agricultura, demandando investimentos em pesquisa aplicada e transporte intermunicipal.',
      cities: 'Pouso Alegre, Poços de Caldas, Varginha, Lavras, Passos, Alfenas, Itajubá, Três Corações, São Lourenço...',
      status: 'Diálogo regional aberto'
    },
    'vales': {
      name: 'Vales do Jequitinhonha & Mucuri',
      tag: 'Cultura Popular & Dignidade Social',
      desc: 'Compromisso prioritário com o combate às desigualdades, incentivo às artesãs e extensão de programas federais de combate à pobreza.',
      cities: 'Teófilo Otoni, Diamantina, Almenara, Pedra Azul, Araçuaí, Itaobim, Jequitinhonha, Capelinha...',
      status: 'Diálogo regional aberto'
    },
    'rio-doce': {
      name: 'Vale do Aço & Rio Doce',
      tag: 'Indústria, Trabalho & Meio Ambiente',
      desc: 'Defesa dos direitos dos metalúrgicos, redução da jornada 6x1 e rigor na recuperação socioambiental de toda a bacia do Rio Doce.',
      cities: 'Governador Valadares, Ipatinga, Coronel Fabriciano, Timóteo, Caratinga, Guanhães, Mantena...',
      status: 'Diálogo regional aberto'
    }
  };

  const chipButtons = document.querySelectorAll('.chip-btn');
  const geoPaths = document.querySelectorAll('.mg-geo-path');
  const regionTag = document.getElementById('regionTag');
  const regionTitle = document.getElementById('regionTitle');
  const regionDesc = document.getElementById('regionDesc');
  const regionCities = document.getElementById('regionCities');
  const regionStatus = document.getElementById('regionStatus');
  const regionDetailCard = document.getElementById('regionDetailCard');

  function selectRegion(regionKey) {
    const data = mapRegions[regionKey];
    if (!data) return;

    // Atualiza classes ativas
    chipButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-region') === regionKey);
    });

    geoPaths.forEach(path => {
      path.classList.toggle('active', path.getAttribute('data-region') === regionKey);
    });

    // Atualiza conteúdo do painel com transição suave
    if (regionDetailCard) {
      regionDetailCard.style.opacity = '0.4';
      regionDetailCard.style.transform = 'translateY(4px)';

      setTimeout(() => {
        if (regionTag) regionTag.textContent = data.tag;
        if (regionTitle) regionTitle.textContent = data.name;
        if (regionDesc) regionDesc.textContent = data.desc;
        if (regionCities) regionCities.textContent = data.cities;
        if (regionStatus) regionStatus.textContent = data.status;

        regionDetailCard.style.opacity = '1';
        regionDetailCard.style.transform = 'translateY(0)';
      }, 150);
    }
  }

  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const reg = btn.getAttribute('data-region');
      selectRegion(reg);
    });
  });

  geoPaths.forEach(path => {
    path.addEventListener('click', () => {
      const reg = path.getAttribute('data-region');
      selectRegion(reg);
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
