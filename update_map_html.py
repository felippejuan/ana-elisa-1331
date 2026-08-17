import json

svg_paths = json.load(open('svg_paths_mg.json', encoding='utf-8'))

html_template = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste Isolado do Mapa Territorial de Minas Gerais · Ana Elisa 1331</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Syne:wght@700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {{
      --red: #DE0021;
      --yellow: #FCBD00;
      --brown: #31170C;
      --brown-dark: #1E0C05;
      --cream: #FAF4EB;
      --cream-light: #FDFBF7;
      --white: #FFFFFF;
      
      --font-body: 'Open Sans', sans-serif;
      --font-title: 'Syne', sans-serif;
      --font-ui: 'Plus Jakarta Sans', sans-serif;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: var(--font-body);
      background-color: var(--brown);
      color: var(--cream);
      padding: 2.5rem 1rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }}

    .test-header {{
      text-align: center;
      margin-bottom: 2rem;
      max-width: 750px;
    }}

    .test-kicker {{
      font-family: var(--font-ui);
      font-weight: 800;
      font-size: 0.8rem;
      color: var(--yellow);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }}

    .test-title {{
      font-family: var(--font-title);
      font-size: clamp(1.8rem, 3.5vw, 2.5rem);
      color: var(--white);
      margin: 0.5rem 0;
    }}

    .test-desc {{
      font-size: 0.95rem;
      color: #E2D7CC;
      line-height: 1.5;
    }}

    .map-container {{
      width: 100%;
      max-width: 1100px;
      background: var(--brown-dark);
      border: 1px solid rgba(252, 189, 0, 0.2);
      border-radius: 16px;
      padding: clamp(1.5rem, 4vw, 2.5rem);
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 2.5rem;
      align-items: center;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
    }}

    /* SVG MAP STYLING - Geometria Geográfica Real */
    .map-wrapper {{
      position: relative;
      width: 100%;
      max-width: 540px;
      margin: 0 auto;
    }}

    .map-svg {{
      width: 100%;
      height: auto;
      display: block;
      filter: drop-shadow(0 14px 28px rgba(0,0,0,0.5));
    }}

    .map-region {{
      fill: #442010;
      stroke: #FCBD00;
      stroke-width: 0.8;
      stroke-linejoin: round;
      cursor: pointer;
      transition: all 0.25s ease;
    }}

    .map-region:hover, .map-region:focus {{
      fill: #DE0021;
      stroke: #FFFFFF;
      stroke-width: 1.8;
      outline: none;
    }}

    .map-region.active {{
      fill: #DE0021;
      stroke: #FFFFFF;
      stroke-width: 2.2;
    }}

    .map-region.origin-region {{
      fill: #5C2B14;
    }}

    .map-region.origin-region.active {{
      fill: #DE0021;
    }}

    /* Marcador Divinópolis */
    .divinopolis-marker {{
      fill: #FCBD00;
      stroke: #1E0C05;
      stroke-width: 2.5;
      animation: pulse 2s infinite ease-in-out;
    }}

    @keyframes pulse {{
      0% {{ r: 6px; opacity: 1; }}
      50% {{ r: 9px; opacity: 0.85; }}
      100% {{ r: 6px; opacity: 1; }}
    }}

    .divinopolis-label {{
      font-family: var(--font-ui);
      font-weight: 800;
      font-size: 12px;
      fill: #FFFFFF;
      paint-order: stroke;
      stroke: #1E0C05;
      stroke-width: 3.5px;
      stroke-linejoin: round;
    }}

    /* Painel Informativo */
    .map-info-panel {{
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }}

    .info-card {{
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
      border-left: 4px solid var(--yellow);
    }}

    .info-badge {{
      display: inline-block;
      font-family: var(--font-ui);
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--yellow);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
    }}

    .info-title {{
      font-family: var(--font-title);
      font-size: 1.5rem;
      color: var(--white);
      margin-bottom: 0.5rem;
    }}

    .info-desc {{
      font-size: 0.95rem;
      color: var(--cream);
      line-height: 1.55;
    }}

    .info-pautas {{
      margin-top: 0.8rem;
      padding-top: 0.8rem;
      border-top: 1px dashed rgba(255, 255, 255, 0.12);
      font-size: 0.88rem;
      color: #EBDCCB;
    }}

    .info-pautas strong {{
      color: var(--yellow);
      display: block;
      margin-bottom: 0.25rem;
    }}

    /* Chips de Seleção (Mecanismo Principal no Mobile) */
    .region-chips {{
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }}

    .chip-btn {{
      background: rgba(255, 255, 255, 0.06);
      color: var(--cream);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 999px;
      padding: 0.5rem 1rem;
      font-family: var(--font-ui);
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }}

    .chip-btn:hover {{
      background: rgba(255, 255, 255, 0.15);
      color: var(--white);
    }}

    .chip-btn.active {{
      background: var(--yellow);
      color: var(--brown-dark);
      border-color: var(--yellow);
      font-weight: 800;
    }}

    /* Responsividade */
    @media (max-width: 768px) {{
      .map-container {{
        grid-template-columns: 1fr;
        padding: 1.25rem;
        gap: 1.5rem;
      }}

      .map-wrapper {{
        max-width: 100%;
      }}

      .info-card {{
        padding: 1.2rem;
      }}

      .info-title {{
        font-size: 1.3rem;
      }}
    }}
  </style>
</head>
<body>

  <header class="test-header">
    <span class="test-kicker">FASE 3 — TESTE ISOLADO</span>
    <h1 class="test-title">Mapa Territorial de Minas Gerais</h1>
    <p class="test-desc">Contorno geográfico oficial de Minas Gerais, divido em suas 8 macrorregiões com destaque institucional para Divinópolis (Berço da Candidata).</p>
  </header>

  <div class="map-container">
    
    <!-- MAPA SVG VETORIAL COM CONTORNO GEOGRÁFICO DE MINAS GERAIS -->
    <div class="map-wrapper">
      <svg class="map-svg" viewBox="0 0 600 540" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa territorial de Minas Gerais com as macrorregiões">
        
        <!-- 1. NORTE DE MINAS -->
        <path id="reg-norte" class="map-region" data-region="norte" tabindex="0" role="button" aria-label="Região Norte de Minas"
          d="{svg_paths.get('norte', '')}" />
        
        <!-- 2. NOROESTE -->
        <path id="reg-noroeste" class="map-region" data-region="noroeste" tabindex="0" role="button" aria-label="Região Noroeste de Minas"
          d="{svg_paths.get('noroeste', '')}" />
        
        <!-- 3. JEQUITINHONHA & MUCURI -->
        <path id="reg-jequitinhonha" class="map-region" data-region="jequitinhonha" tabindex="0" role="button" aria-label="Região Jequitinhonha e Mucuri"
          d="{svg_paths.get('jequitinhonha', '')}" />
        
        <!-- 4. TRIÂNGULO MINEIRO & ALTO PARANAÍBA -->
        <path id="reg-triangulo" class="map-region" data-region="triangulo" tabindex="0" role="button" aria-label="Região Triângulo Mineiro e Alto Paranaíba"
          d="{svg_paths.get('triangulo', '')}" />
        
        <!-- 5. CENTRO-OESTE (BERÇO / DIVINÓPOLIS) -->
        <path id="reg-centro-oeste" class="map-region origin-region active" data-region="centro-oeste" tabindex="0" role="button" aria-label="Região Centro-Oeste e Divinópolis"
          d="{svg_paths.get('centro-oeste', '')}" />
        
        <!-- 6. CENTRAL & METROPOLITANA DE BH -->
        <path id="reg-central" class="map-region" data-region="central" tabindex="0" role="button" aria-label="Região Central e Metropolitana de Belo Horizonte"
          d="{svg_paths.get('central', '')}" />
        
        <!-- 7. RIO DOCE & VALE DO AÇO -->
        <path id="reg-rio-doce" class="map-region" data-region="rio-doce" tabindex="0" role="button" aria-label="Região Rio Doce e Vale do Aço"
          d="{svg_paths.get('rio-doce', '')}" />
        
        <!-- 8. ZONA DA MATA -->
        <path id="reg-zona-da-mata" class="map-region" data-region="zona-da-mata" tabindex="0" role="button" aria-label="Região Zona da Mata"
          d="{svg_paths.get('zona-da-mata', '')}" />
        
        <!-- 9. SUL & SUDOESTE DE MINAS -->
        <path id="reg-sul" class="map-region" data-region="sul" tabindex="0" role="button" aria-label="Região Sul e Sudoeste de Minas"
          d="{svg_paths.get('sul', '')}" />

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
        <h2 class="info-title" id="infoTitle">Centro-Oeste · Divinópolis</h2>
        <p class="info-desc" id="infoDesc">
          Cidade natal de Ana Elisa e pólo de formação de sua trajetória política e comunitária. Uma voz jovem que conhece a realidade do trabalhador do interior mineiro.
        </p>
        <div class="info-pautas" id="infoPautas">
          <strong>Pautas Prioritárias da Região:</strong>
          <span>Fortalecimento dos serviços públicos de saúde (SUS), ampliação do transporte intermunicipal acessível e apoio ao pólo de confecção e indústria local.</span>
        </div>
      </div>

      <!-- SELETOR DE CHIPS (Acessibilidade e Mobile) -->
      <div>
        <p style="font-size: 0.82rem; font-weight: 700; color: var(--yellow); margin-bottom: 0.4rem; text-transform: uppercase;">
          Selecione a Região:
        </p>
        <div class="region-chips" id="regionChips">
          <button class="chip-btn active" data-region="centro-oeste">Centro-Oeste (Divinópolis)</button>
          <button class="chip-btn" data-region="central">Central & Metropol. BH</button>
          <button class="chip-btn" data-region="triangulo">Triângulo & Alto Paranaíba</button>
          <button class="chip-btn" data-region="sul">Sul & Sudoeste</button>
          <button class="chip-btn" data-region="zona-da-mata">Zona da Mata</button>
          <button class="chip-btn" data-region="rio-doce">Rio Doce & Vale do Aço</button>
          <button class="chip-btn" data-region="norte">Norte de Minas</button>
          <button class="chip-btn" data-region="jequitinhonha">Jequitinhonha & Mucuri</button>
          <button class="chip-btn" data-region="noroeste">Noroeste</button>
        </div>
      </div>

    </div>

  </div>

  <script>
    const regionalData = {{
      'centro-oeste': {{
        badge: 'Origem & Berço da Candidata',
        title: 'Centro-Oeste · Divinópolis',
        desc: 'Cidade natal de Ana Elisa e pólo de formação de sua trajetória política e comunitária. Uma voz jovem que conhece a realidade do trabalhador do interior mineiro.',
        pautas: 'Fortalecimento dos serviços públicos de saúde (SUS), transporte intermunicipal acessível e valorização da indústria têxtil e comercial local.'
      }},
      'central': {{
        badge: 'Macrorregião Central',
        title: 'Central & Metropolitana de BH',
        desc: 'Coração econômico e universitário do estado. Defesa do passe livre metropolitano, permanência estudantil nas universidades federais e mobilidade urbana digna.',
        pautas: 'Defesa das Universidades Públicas (UFMG, CEFET, UEMG), passe livre estudantil e combate à precarização do trabalho.'
      }},
      'triangulo': {{
        badge: 'Macrorregião Oeste',
        title: 'Triângulo Mineiro & Alto Paranaíba',
        desc: 'Pólo agroecológico, educacional e tecnológico. Compromisso com investimentos no Pé-de-Meia para estudantes técnicos e defesa dos IFs da região.',
        pautas: 'Apoio aos Institutos Federais (IFTM), fortalecimento da agricultura familiar e sustentabilidade hídrica.'
      }},
      'sul': {{
        badge: 'Macrorregião Sul',
        title: 'Sul & Sudoeste de Minas',
        desc: 'Região de forte tradição produtiva cafeeira e pólos de ensino superior. Luta pelo Fim da Escala 6x1 e valorização dos trabalhadores rurais e industriais.',
        pautas: 'Direitos trabalhistas no campo e indústria, apoio à UNIFAL/UNIFEI e fomento às cooperativas.'
      }},
      'zona-da-mata': {{
        badge: 'Macrorregião Leste-Sul',
        title: 'Zona da Mata',
        desc: 'Região histórica de Juiz de Fora e cidades vizinhas. Defesa de incentivos culturais descentralizados e apoio à permanência estudantil da UFJF.',
        pautas: 'Recursos para a Cultura Viva, moradia estudantil e preservação ambiental das serras da Mata.'
      }},
      'rio-doce': {{
        badge: 'Macrorregião Leste',
        title: 'Rio Doce & Vale do Aço',
        desc: 'Região industrial e de luta por justiça climática e reparação ambiental. Fiscalização severa das mineradoras com garantia de soberania hídrica.',
        pautas: 'Segurança de barragens, reparação socioambiental do Rio Doce e diversificação econômica regional.'
      }},
      'norte': {{
        badge: 'Macrorregião Norte',
        title: 'Norte de Minas',
        desc: 'Região do semiárido mineiro, rica em cultura popular e diversidade. Defesa do acesso universal à água, fortalecimento da UNIMONTES e energia limpa para o povo.',
        pautas: 'Convivência sustentável com o semiárido, segurança hídrica e ampliação dos programas sociais federais.'
      }},
      'jequitinhonha': {{
        badge: 'Macrorregião Nordeste',
        title: 'Jequitinhonha & Mucuri',
        desc: 'Berço da cultura artesanal e das riquezas humanas de Minas. Prioridade absoluta na atração de recursos para infraestrutura, saúde e educação pública.',
        pautas: 'Apoio aos artesãos e agricultores familiares, fortalecimento da UFVJM e combate às desigualdades regionais.'
      }},
      'noroeste': {{
        badge: 'Macrorregião Noroeste',
        title: 'Noroeste de Minas',
        desc: 'Fronteira estratégica de produção agrícola. Defesa da sustentabilidade dos cerrados e incentivo a cooperativas de pequenos e médios produtores.',
        pautas: 'Proteção das nascentes do Cerrado, eletrificação rural e ampliação de escolas técnicas no campo.'
      }}
    }};

    function selectRegion(regionId) {{
      if (!regionalData[regionId]) return;

      // Atualizar paths do SVG
      document.querySelectorAll('.map-region').forEach(p => {{
        if (p.getAttribute('data-region') === regionId) {{
          p.classList.add('active');
        }} else {{
          p.classList.remove('active');
        }}
      }});

      // Atualizar chips
      document.querySelectorAll('.chip-btn').forEach(btn => {{
        if (btn.getAttribute('data-region') === regionId) {{
          btn.classList.add('active');
        }} else {{
          btn.classList.remove('active');
        }}
      }});

      // Atualizar painel
      const data = regionalData[regionId];
      document.getElementById('infoBadge').textContent = data.badge;
      document.getElementById('infoTitle').textContent = data.title;
      document.getElementById('infoDesc').textContent = data.desc;
      document.getElementById('infoPautas').innerHTML = `<strong>Pautas Prioritárias da Região:</strong><span>${{data.pautas}}</span>`;
    }}

    // Eventos de clique e teclado nos paths
    document.querySelectorAll('.map-region').forEach(p => {{
      p.addEventListener('click', () => {{
        selectRegion(p.getAttribute('data-region'));
      }});
      p.addEventListener('keydown', (e) => {{
        if (e.key === 'Enter' || e.key === ' ') {{
          e.preventDefault();
          selectRegion(p.getAttribute('data-region'));
        }}
      }});
    }});

    // Eventos nos chips
    document.querySelectorAll('.chip-btn').forEach(btn => {{
      btn.addEventListener('click', () => {{
        selectRegion(btn.getAttribute('data-region'));
      }});
    }});
  </script>
</body>
</html>'''

with open('map-test.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

print('Updated map-test.html with true geographic SVG boundaries.')
