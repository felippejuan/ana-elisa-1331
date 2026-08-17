# Índice de Evidências Visuais — Fase 2: Carteira de Trabalho & Correção Mobile
**Documento:** `docs/v3/evidence/fase-02/index.md`  
**Data:** 17/08/2026  
**Branch:** `feature/v3-02-carteira`  
**Mecanismo de Renderização:** Playwright Chromium Headless  

---

## 1. Relação de Capturas Reais da Fase 2

| Arquivo de Evidência | Viewport / Resolução | Finalidade da Captura | Status |
| :--- | :--- | :--- | :--- |
| `compromissos_1440px.png` | 1440 x 900 (Desktop) | Composição assimétrica: Foto vertical (40%) / Compromissos (60%) | ✅ Gerado |
| `compromissos_1024px.png` | 1024 x 768 (Desktop Compacto) | Alinhamento de altura e proporção 1180px | ✅ Gerado |
| `compromissos_768px.png` | 768 x 1024 (Tablet) | Adaptação responsiva intermediária | ✅ Gerado |
| `compromissos_414px.png` | 414 x 896 (Mobile Amplo) | Foto a 85% centralizada e compromissos empilhados | ✅ Gerado |
| `compromissos_375px.png` | 375 x 812 (iPhone Padrão) | Foto vertical ereta, legenda clara e sem cortes | ✅ Gerado |
| `compromissos_320px.png` | 320 x 800 (Mobile Pequeno) | Enquadramento vertical perfeito (0px overflow) | ✅ Gerado |
| `mobilizacao_375px.png` | 375 x 812 (Mobile) | Verificação estrutural da seção Mobilização: preenchimento total da tela, sem faixa vazia à direita, texto 100% visível | ✅ Gerado |
| `full_page_1440px.png` | 1440 x 900 | Página inteira com integração da Carteira | ✅ Gerado |
| `full_page_375px.png` | 375 x 812 | Página inteira no celular: Hero, Bio, Compromissos, Mobilização e Footer | ✅ Gerado |
| `full_page_320px.png` | 320 x 800 | Página inteira no menor viewport | ✅ Gerado |

---

## 2. Diagnóstico & Correção da Estrutura Mobile (P1 Resolvido)
- **Causa da Faixa Vazia:** Havia desalinhamento de `margin-left` e `margin-right` no container e no grid de formulário.
- **Correção Aplicada:** Declaradas regras `width: 100%`, `margin-left: auto`, `margin-right: auto` e padding horizontal unificado (`--gutter: clamp(1rem, 4vw, 2.5rem)`), garantindo que o formulário, hero e footer ocupem 100% da viewport em qualquer celular.
