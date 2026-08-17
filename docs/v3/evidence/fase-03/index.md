# Índice de Evidências Visuais — Fase 3: Mapa de Minas Gerais Isolado
**Documento:** `docs/v3/evidence/fase-03/index.md`  
**Data:** 17/08/2026  
**Branch:** `feature/v3-03-map`  
**Arquivo de Teste Isolado:** `map-test.html`  
**Mecanismo de Renderização:** Playwright Chromium Headless  

---

## 1. Relação de Capturas do Mapa Isolado (`map-test.html`)

| Arquivo de Evidência | Viewport / Resolução | Finalidade da Captura | Status |
| :--- | :--- | :--- | :--- |
| `map_isolated_1440px.png` | 1440 x 900 (Desktop) | Contorno geográfico real de MG, 8 macrorregiões e painel lateral integrado | ✅ Gerado |
| `map_isolated_1280px.png` | 1280 x 800 (Desktop Padrão) | Proporção visual e legibilidade dos textos e marcadores | ✅ Gerado |
| `map_isolated_1024px.png` | 1024 x 768 (Desktop Compacto) | Grid 2 colunas equilibrado sem distorção do SVG | ✅ Gerado |
| `map_isolated_768px.png` | 768 x 1024 (Tablet) | Adaptação responsiva para layout vertical | ✅ Gerado |
| `map_isolated_414px.png` | 414 x 896 (Mobile Amplo) | Chips táteis com botões largos e painel informativo | ✅ Gerado |
| `map_isolated_375px.png` | 375 x 812 (iPhone Padrão) | SVG proporcional e seletor em chips acessível | ✅ Gerado |
| `map_isolated_320px.png` | 320 x 800 (Mobile Pequeno) | Zero overflow horizontal (0px) e leitura nítida | ✅ Gerado |

---

## 2. Características Técnicas e Editoriais do Mapa
- **Geometria:** Projeção vetorial real baseada na malha de municípios de Minas Gerais (IBGE).
- **Sem Polígonos Pretos:** Cores definidas e contrastantes (`fill: #442010; stroke: #FCBD00; stroke-width: 0.8`), com destaque ativo em vermelho `#DE0021`.
- **Destaque de Divinópolis:** Marcador âmbar pulsante (`cx=326.8, cy=358.1`) com rótulo legível *"Divinópolis (Origem)"*.
- **Mecanismo Mobile:** Chips táteis horizontais (`.chip-btn`) de 44px de altura mínima, permitindo navegação rápida sem exigir toque de precisão em telas pequenas.
- **Acessibilidade:** Suporte total a navegação por teclado (`Tab` + `Enter`/`Space`) e tags ARIA (`role="button"`, `aria-label`).
