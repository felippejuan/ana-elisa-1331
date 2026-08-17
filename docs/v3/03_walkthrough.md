# Walkthrough Oficial & Relatório de Testes — Fase 3: Mapa Isolado (Implementation Plan Rigoroso v3)
**Data:** 17/08/2026  
**Branch:** `feature/v3-03-map`  
**Status do Gate:** ⏸️ **Pendente de Validação do Mapa Isolado pelo Usuário**

---

## 1. Escopo Estrito da Fase 3 v3 (Mapa Isolado)

Conforme a regra do plano, o mapa de Minas Gerais foi **construído e testado isoladamente no arquivo `map-test.html`**, sem modificar a página principal (`index.html`), o hero, o manifesto, os compromissos ou a mobilização.

### Destaques Técnicos do `map-test.html`:
1. **Contorno Geográfico Real de Minas Gerais:**
   * Projeção cartográfica precisa baseada na malha do IBGE, sem polígonos pretos ou formas abstratas.
   * Cores contrastantes e aprovadas no design system: fundo do mapa `#442010`, contornos em amarelo `#FCBD00` e região ativa em vermelho `#DE0021`.
2. **Destaque Institucional para Divinópolis:**
   * Marcador âmbar pulsante na coordenada exata da cidade natal da candidata (`cx=326.8, cy=358.1`) com rótulo legível *"Divinópolis (Origem)"*.
3. **Mecanismo Principal no Mobile (Chips Táteis):**
   * Seletor em chips horizontais para as macrorregiões com botões táteis (`≥ 44px`), dispensando toques milimétricos no SVG em telas pequenas.
4. **Painel Informativo Contextual & Acessibilidade:**
   * Apresenta nome da macrorregião, síntese regional e pautas populares prioritárias (saúde, IFs, trabalho, água, cultura viva).
   * **Zero Dados Fictícios:** Nenhum link de grupo de WhatsApp fictício ou placeholder enganoso.
   * Navegação total por teclado com foco visível e eventos `Enter`/`Space`.

---

## 2. Capturas Reais Anexadas no Repositório

Todas as capturas do `map-test.html` foram salvas em [`docs/v3/evidence/fase-03/`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/):
- **Desktop Amplo (`1440px`):** [`map_isolated_1440px.png`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/map_isolated_1440px.png)
- **Desktop Padrão (`1280px`):** [`map_isolated_1280px.png`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/map_isolated_1280px.png)
- **Desktop Compacto (`1024px`):** [`map_isolated_1024px.png`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/map_isolated_1024px.png)
- **Tablet (`768px`):** [`map_isolated_768px.png`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/map_isolated_768px.png)
- **Mobile Amplo (`414px`):** [`map_isolated_414px.png`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/map_isolated_414px.png)
- **Mobile Padrão (`375px`):** [`map_isolated_375px.png`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/map_isolated_375px.png)
- **Mobile Pequeno (`320px`):** [`map_isolated_320px.png`](file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/docs/v3/evidence/fase-03/map_isolated_320px.png)

---

## 3. Matriz de Qualidade & Console
- **Erros de JavaScript:** 0
- **Erros 404 de Rede:** 0
- **Overflow Horizontal:** 0px em todos os viewports.
- **Classificação de Falhas:** **0 falhas P0/P1/P2/P3**.
