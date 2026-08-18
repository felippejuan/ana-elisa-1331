import json

paths = json.load(open('svg_8_regions.json', encoding='utf-8'))

template = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mapa Territorial Interativo de Minas Gerais · Ana Elisa 1331</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Syne:wght@700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --red: #DE0021;
      --red-hover: #FF1A3C;
      --yellow: #FCBD00;
      --brown: #31170C;
      --brown-dark: #1E0C05;
      --cream: #FAF4EB;
      --cream-light: #FDFBF7;
      --white: #FFFFFF;
      --green-wa: #25D366;
      
      --font-body: 'Open Sans', sans-serif;
      --font-title: 'Syne', sans-serif;
      --font-ui: 'Plus Jakarta Sans', sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-body);
      background-color: var(--brown);
      color: var(--cream);
      padding: 2.5rem 1rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .test-header {
      text-align: center;
      margin-bottom: 2rem;
      max-width: 800px;
    }

    .test-kicker {
      font-family: var(--font-ui);
      font-weight: 800;
      font-size: 0.82rem;
      color: var(--yellow);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .test-title {
      font-family: var(--font-title);
      font-size: clamp(2rem, 4vw, 2.7rem);
      color: var(--white);
      margin: 0.5rem 0;
      line-height: 1.15;
    }

    .test-desc {
      font-size: 1rem;
      color: #E2D7CC;
      line-height: 1.55;
    }

    .map-container {
      width: 100%;
      max-width: 1140px;
      background: var(--brown-dark);
      border: 1px solid rgba(252, 189, 0, 0.22);
      border-radius: 18px;
      padding: clamp(1.5rem, 4vw, 2.8rem);
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 2.5rem;
      align-items: center;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
    }

    /* SVG MAP STYLING - Interativo, Elegante & Preciso */
    .map-wrapper {
      position: relative;
      width: 100%;
      max-width: 530px;
      margin: 0 auto;
    }

    .map-svg {
      width: 100%;
      height: auto;
      display: block;
      filter: drop-shadow(0 14px 28px rgba(0,0,0,0.55));
    }

    .map-region {
      fill: #462211;
      stroke: #FCBD00;
      stroke-width: 0.75;
      stroke-linejoin: round;
      cursor: pointer;
      transition: fill 0.25s ease, stroke 0.25s ease, filter 0.25s ease;
    }

    /* Hover State Interativo & Elegante */
    .map-region:hover, .map-region:focus {
      fill: var(--red-hover);
      stroke: #FFFFFF;
      stroke-width: 1.8;
      filter: drop-shadow(0 0 10px rgba(222, 0, 33, 0.6));
      outline: none;
    }

    /* Active Selected Region */
    .map-region.active {
      fill: var(--red);
      stroke: #FFFFFF;
      stroke-width: 2.2;
      filter: drop-shadow(0 0 12px rgba(252, 189, 0, 0.5));
    }

    /* Região Origem (Centro-Oeste) */
    .map-region.origin-region {
      fill: #5A2A13;
    }

    .map-region.origin-region.active {
      fill: var(--red);
    }

    /* Marcador Divinópolis */
    .divinopolis-marker {
      fill: var(--yellow);
      stroke: var(--brown-dark);
      stroke-width: 2.5;
      animation: pulse 2s infinite ease-in-out;
      pointer-events: none;
    }

    @keyframes pulse {
      0% { r: 6px; opacity: 1; }
      50% { r: 9.5px; opacity: 0.85; }
      100% { r: 6px; opacity: 1; }
    }

    .divinopolis-label {
      font-family: var(--font-ui);
      font-weight: 800;
      font-size: 11.5px;
      fill: #FFFFFF;
      paint-order: stroke;
      stroke: var(--brown-dark);
      stroke-width: 3.5px;
      stroke-linejoin: round;
      pointer-events: none;
    }

    /* Painel Informativo */
    .map-info-panel {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .info-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 14px;
      padding: 1.6rem;
      border-left: 5px solid var(--yellow);
      transition: all 0.3s ease;
    }

    .info-badge {
      display: inline-block;
      font-family: var(--font-ui);
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--yellow);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 0.4rem;
    }

    .info-title {
      font-family: var(--font-title);
      font-size: 1.55rem;
      color: var(--white);
      margin-bottom: 0.6rem;
      line-height: 1.2;
    }

    .info-desc {
      font-size: 0.95rem;
      color: var(--cream);
      line-height: 1.6;
    }

    .info-pautas {
      margin-top: 1rem;
      padding-top: 0.9rem;
      border-top: 1px dashed rgba(255, 255, 255, 0.14);
      font-size: 0.9rem;
      color: #EBDCCB;
      line-height: 1.5;
    }

    .info-pautas strong {
      color: var(--yellow);
      display: block;
      margin-bottom: 0.3rem;
      font-family: var(--font-ui);
    }

    /* Botão de WhatsApp Regional */
    .btn-regional-wa {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background-color: var(--green-wa);
      color: #FFFFFF;
      font-family: var(--font-ui);
      font-weight: 800;
      font-size: 0.95rem;
      padding: 13px 22px;
      border-radius: 999px;
      text-decoration: none;
      margin-top: 1.2rem;
      border: 0;
      cursor: pointer;
      width: 100%;
      min-height: 48px;
      transition: filter 0.2s ease, transform 0.2s ease;
      box-shadow: 0 6px 16px rgba(37, 211, 102, 0.25);
    }

    .btn-regional-wa:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }

    /* Chips de Seleção (Mecanismo Principal no Mobile) */
    .chips-section-title {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--yellow);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-family: var(--font-ui);
    }

    .region-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .chip-btn {
      background: rgba(255, 255, 255, 0.05);
      color: var(--cream);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 999px;
      padding: 0.5rem 1rem;
      font-family: var(--font-ui);
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .chip-btn:hover {
      background: rgba(255, 255, 255, 0.16);
      color: var(--white);
    }

    .chip-btn.active {
      background: var(--yellow);
      color: var(--brown-dark);
      border-color: var(--yellow);
      font-weight: 800;
    }

    /* Responsividade */
    @media (max-width: 768px) {
      .map-container {
        grid-template-columns: 1fr;
        padding: 1.25rem;
        gap: 1.6rem;
      }

      .map-wrapper {
        max-width: 100%;
      }

      .info-card {
        padding: 1.25rem;
      }

      .info-title {
        font-size: 1.35rem;
      }
    }
  </style>
</head>
<body>

  <header class="test-header">
    <span class="test-kicker">FASE 3 — TESTE ISOLADO</span>
    <h1 class="test-title">Minas É Nosso Território</h1>
    <p class="test-desc">Mapa territorial oficial com as 8 macrorregiões mineiras. Passe o mouse ou selecione para conhecer as prioridades populares e entrar no grupo de mobilização regional.</p>
  </header>

  <div class="map-container">
    
    <!-- MAPA SVG VETORIAL COM AS 8 MACRORREGIÕES EXATAS -->
    <div class="map-wrapper">
      <svg class="map-svg" viewBox="0 0 600 540" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa interativo de Minas Gerais com as 8 macrorregiões">
        
        <!-- 1. NORTE -->
        <path id="reg-norte" class="map-region" data-region="norte" tabindex="0" role="button" aria-label="Região Norte de Minas"
          d="__PATH_NORTE__" />
        
        <!-- 2. VALES (JEQUITINHONHA / MUCURI / RIO DOCE NORTE) -->
        <path id="reg-vales" class="map-region" data-region="vales" tabindex="0" role="button" aria-label="Região dos Vales (Jequitinhonha e Mucuri)"
          d="__PATH_VALES__" />
        
        <!-- 3. TRIÂNGULO / ALTO PARANAÍBA -->
        <path id="reg-triangulo-alto-paranaiba" class="map-region" data-region="triangulo-alto-paranaiba" tabindex="0" role="button" aria-label="Região Triângulo e Alto Paranaíba"
          d="__PATH_TRIANGULO__" />
        
        <!-- 4. CENTRO-OESTE (DIVINÓPOLIS / SAMONTE / ITAÚNA...) -->
        <path id="reg-centro-oeste" class="map-region origin-region active" data-region="centro-oeste" tabindex="0" role="button" aria-label="Região Centro-Oeste e Divinópolis"
          d="__PATH_CENTRO_OESTE__" />
        
        <!-- 5. RMBH (CAPITAL E REGIÃO METROPOLITANA) -->
        <path id="reg-rmbh" class="map-region" data-region="rmbh" tabindex="0" role="button" aria-label="Região Metropolitana de Belo Horizonte (RMBH)"
          d="__PATH_RMBH__" />
        
        <!-- 6. VALE DO AÇO / RIO DOCE -->
        <path id="reg-vale-do-aco-rio-doce" class="map-region" data-region="vale-do-aco-rio-doce" tabindex="0" role="button" aria-label="Região Vale do Aço e Rio Doce"
          d="__PATH_VALE_DO_ACO__" />
        
        <!-- 7. ZONA DA MATA / VERTENTES -->
        <path id="reg-zona-da-mata-vertentes" class="map-region" data-region="zona-da-mata-vertentes" tabindex="0" role="button" aria-label="Região Zona da Mata e Vertentes"
          d="__PATH_ZONA_DA_MATA__" />
        
        <!-- 8. SUL -->
        <path id="reg-sul" class="map-region" data-region="sul" tabindex="0" role="button" aria-label="Região Sul de Minas"
          d="__PATH_SUL__" />

        <!-- MARCADOR INSTITUCIONAL: DIVINÓPOLIS (Origem da Candidata) -->
        <g id="marker-divinopolis" aria-hidden="true">
          <circle class="divinopolis-marker" cx="326.8" cy="358.1" r="7" />
          <text class="divinopolis-label" x="338" y="362">Divinópolis (Origem)</text>
        </g>
      </svg>
    </div>

    <!-- PAINEL CONTEXTUAL DINÂMICO & CHIPS -->
    <div class="map-info-panel">
      
      <div class="info-card" id="infoCard">
        <span class="info-badge" id="infoBadge">Origem & Berço da Candidata</span>
        <h2 class="info-title" id="infoTitle">Centro-Oeste</h2>
        <p class="info-desc" id="infoDesc">
          Cidade natal de Ana Elisa e pólo de formação de sua trajetória. Uma voz jovem conectada às cidades do interior mineiro.
        </p>
        <div class="info-pautas" id="infoPautas">
          <strong>Pautas Prioritárias:</strong>
          <span>Foco em empregabilidade jovem, transporte intermunicipal, passe livre, fortalecimento dos serviços públicos e a pauta trabalhista (Fim da Escala 6x1).</span>
        </div>

        <a href="https://api.whatsapp.com/send?text=Ol%C3%A1%21%20Quero%20fazer%20parte%20do%20grupo%20de%20mobiliza%C3%A7%C3%A3o%20da%20Ana%20Elisa%201331%20no%20Centro-Oeste." target="_blank" rel="noopener" class="btn-regional-wa" id="btnWaRegional">
          <span>ENTRAR NO GRUPO DO WHATSAPP</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.078-1.748-.383-1.424-.59-2.34-2.036-2.411-2.13-.071-.094-.579-.771-.579-1.47 0-.7.366-1.044.496-1.187.13-.143.285-.179.38-.179.095 0 .19.001.272.006.088.004.204-.033.32.245.12.288.409.998.445 1.071.036.073.06.159.012.256-.048.096-.072.155-.144.239-.072.083-.151.185-.216.249-.072.072-.147.151-.063.295.084.144.373.615.8 1 .552.496 1.018.65 1.162.723.144.072.228.06.312-.036.084-.096.36-419.456-.563.096-.144.192-.12.324-.072.132.048.837.395.981.467.144.072.24.108.276.168.036.06.036.348-.108.753z"/></svg>
        </a>
      </div>

      <!-- SELETOR DE CHIPS (Acessibilidade e Mobile) -->
      <div>
        <p class="chips-section-title">Selecione sua Região:</p>
        <div class="region-chips" id="regionChips">
          <button class="chip-btn active" data-region="centro-oeste">Centro-Oeste</button>
          <button class="chip-btn" data-region="rmbh">RMBH</button>
          <button class="chip-btn" data-region="triangulo-alto-paranaiba">Triângulo / Alto Paranaíba</button>
          <button class="chip-btn" data-region="sul">Sul</button>
          <button class="chip-btn" data-region="zona-da-mata-vertentes">Zona da Mata / Vertentes</button>
          <button class="chip-btn" data-region="vale-do-aco-rio-doce">Vale do Aço / Rio Doce</button>
          <button class="chip-btn" data-region="norte">Norte</button>
          <button class="chip-btn" data-region="vales">Vales</button>
        </div>
      </div>

    </div>

  </div>

  <script>
    const regionalData = {
      'centro-oeste': {
        badge: 'Origem & Berço da Candidata',
        title: 'Centro-Oeste',
        desc: 'Região de Divinópolis, Itaúna, Formiga, Samonte, Nova Serrana, Pará de Minas e cidades vizinhas. Pólo de formação e liderança de Ana Elisa.',
        pautas: 'Foco em empregabilidade jovem, transporte intermunicipal, passe livre, serviços públicos de saúde e a pauta trabalhista (Fim da Escala 6x1).'
      },
      'rmbh': {
        badge: 'Capital e Região Metropolitana',
        title: 'RMBH (Belo Horizonte & Região)',
        desc: 'Belo Horizonte, Betim, Contagem, Ribeirão das Neves, Santa Luzia, Nova Lima, Sabará, Sete Lagoas e municípios da grande BH.',
        pautas: 'Foco em pautas de juventude, cultura, igualdade racial, diversidade, passe livre metropolitano e combate à extrema-direita.'
      },
      'norte': {
        badge: 'Macrorregião Norte',
        title: 'Norte de Minas',
        desc: 'Montes Claros, Janaúba, Januária, Pirapora, São Francisco, Taiobeiras, Buritizeiro, Três Marias e norte mineiro.',
        pautas: 'Foco em empregabilidade jovem, transporte, passe livre, convivência sustentável com o semiárido, serviços públicos e a pauta trabalhista (Fim da Escala 6x1).'
      },
      'triangulo-alto-paranaiba': {
        badge: 'Macrorregião Oeste',
        title: 'Triângulo / Alto Paranaíba',
        desc: 'Uberlândia, Uberaba, Patos de Minas, Araguari, Ituiutaba, Paracatu, Unaí, São Gotardo e região.',
        pautas: 'Foco em empregabilidade jovem, apoio aos Institutos Federais, transporte, serviços públicos e a pauta trabalhista (Fim da Escala 6x1).'
      },
      'sul': {
        badge: 'Macrorregião Sul',
        title: 'Sul de Minas',
        desc: 'Pouso Alegre, Poços de Caldas, Varginha, Itajubá, Passos, Lavras, Alfenas, Três Corações, São Lourenço e região.',
        pautas: 'Foco em empregabilidade jovem, transporte, passe livre estudantil, fortalecimento das universidades e a pauta trabalhista (Fim da Escala 6x1).'
      },
      'vale-do-aco-rio-doce': {
        badge: 'Macrorregião Leste',
        title: 'Vale do Aço / Rio Doce',
        desc: 'Ipatinga, Governador Valadares, Coronel Fabriciano, Timóteo, Itabira, João Monlevade, Caratinga e bacia do Rio Doce.',
        pautas: 'Foco em empregabilidade jovem, segurança de barragens, transporte, serviços públicos e a pauta trabalhista (Fim da Escala 6x1).'
      },
      'vales': {
        badge: 'Macrorregião Nordeste',
        title: 'Vales (Jequitinhonha & Mucuri)',
        desc: 'Teófilo Otoni, Diamantina, Almenara, Pedra Azul, Jequitinhonha, Capelinha e cidades dos vales.',
        pautas: 'Foco em empregabilidade jovem, combate às desigualdades regionais, transporte, acesso à água, serviços públicos e pauta trabalhista (Fim da Escala 6x1).'
      },
      'zona-da-mata-vertentes': {
        badge: 'Macrorregião Sudeste',
        title: 'Zona da Mata / Vertentes',
        desc: 'Juiz de Fora, Barbacena, São João del-Rei, Ubá, Viçosa, Muriaé, Conselheiro Lafaiete, Ouro Preto e região.',
        pautas: 'Foco em empregabilidade jovem, cultura viva descentralizada, transporte, passe livre estudantil, serviços públicos e a pauta trabalhista (Fim da Escala 6x1).'
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
      document.getElementById('infoBadge').textContent = data.badge;
      document.getElementById('infoTitle').textContent = data.title;
      document.getElementById('infoDesc').textContent = data.desc;
      document.getElementById('infoPautas').innerHTML = '<strong>Pautas Prioritárias:</strong><span>' + data.pautas + '</span>';

      // Atualizar botão de WhatsApp
      const btnWa = document.getElementById('btnWaRegional');
      if (btnWa) {
        const msg = encodeURIComponent('Olá! Quero fazer parte do grupo de mobilização da Ana Elisa 1331 na região ' + data.title + '.');
        btnWa.href = 'https://api.whatsapp.com/send?text=' + msg;
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
  </script>
</body>
</html>"""

for k, v in paths.items():
    placeholder = f"__PATH_{k.upper().replace('-', '_')}__"
    template = template.replace(placeholder, v)

with open('map-test.html', 'w', encoding='utf-8') as f:
    f.write(template)

print('SUCCESS: map-test.html updated.')
