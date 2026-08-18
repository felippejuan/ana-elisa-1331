# Walkthrough de Implementação — Fase 4: Central de Materiais de Campanha em Cards Controlados
**Documento:** `docs/v3/04_walkthrough.md`  
**Data:** 17/08/2026  
**Branch:** `feature/v3-04-materials`  
**Base Commit SHA (Fase 3):** `c5e1d20387b99c7595c52c67cf766a50da17d598`  

---

## 1. Escopo & Objetivos da Fase 4
1. **Central de Materiais em Cards Controlados (`#materiais`):**
   * Sem grids desordenados ou galerias infinitas.
   * Exatamente 3 cards estruturados em grid de proporção fixa:
     * **Card 1 (WhatsApp):** Pacote de Figurinhas Oficiais no Sticker.ly.
     * **Card 2 (Redes Sociais & Zap):** Santinho Digital Oficial (JPEG 1200x630px para download).
     * **Card 3 (Identidade Visual):** Logotipo Oficial Transparente (PNG para download).
2. **Integração do Mapa Territorial de 8 Macrorregiões (`#territorio`):**
   * Mapa colorido com 8 blocos puros harmônicos.
   * Estado inicial limpo ("Selecione uma Região").
   * Discurso político e diagnóstico autêntico por região (RMBH contra a extrema-direita; Centro-Oeste e interior por empregos, transporte e Fim da Escala 6x1).
   * Botão inteligente para o grupo de WhatsApp regional.
3. **Preservação de Todas as Conquistas Anteriores:**
   * Hero oficial com badge 1331 e slogan.
   * Carta Manifesto e História.
   * Carteira de Trabalho normalizada integrada aos Compromissos.
   * Formulário de mobilização direta via WhatsApp (sem retenção de dados).

---

## 2. Índice de Evidências Visuais Reais (`docs/v3/evidence/fase-04/`)

| Arquivo de Evidência | Viewport / Resolução | Finalidade da Captura |
| :--- | :--- | :--- |
| `full_page_1440px.png` | 1440 x 900 (Desktop Amplo) | Visão completa da página com todas as seções integradas |
| `full_page_1280px.png` | 1280 x 800 (Desktop Padrão) | Composição equilibrada de grids e seções |
| `full_page_1024px.png` | 1024 x 768 (Desktop Compacto) | Transição fluida de grids |
| `full_page_768px.png` | 768 x 1024 (Tablet) | Responsividade vertical |
| `full_page_414px.png` | 414 x 896 (Mobile Amplo) | Layout mobile coeso e legível |
| `full_page_375px.png` | 375 x 812 (iPhone Padrão) | Mobile completo: hero, manifesto, mapa, carteira, materiais, mobilização |
| `full_page_320px.png` | 320 x 800 (Mobile Pequeno) | Zero overflow horizontal (0px de transbordamento) |
| `materiais_1440px.png` | Desktop | Foco detalhado na Central de Materiais em 3 cards |
| `materiais_375px.png` | Mobile | Foco nos cards empilhados com botões confortáveis |

---

## 3. Cadeia Canônica Ativa
* `index.html` (com todas as âncoras `#topo`, `#inicio`, `#historia`, `#territorio`, `#compromissos`, `#materiais`, `#mobilizacao`)
* `style.css` (CSS unificado e responsivo)
* `script.js` (Interatividade do mapa, menu mobile e formulário WhatsApp)
