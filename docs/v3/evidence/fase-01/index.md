# Índice de Evidências Visuais — Fase 1 (Implementation Plan Rigoroso v3)
**Data:** 17/08/2026  
**Branch de Homologação:** `feature/v3-01-foundation`  
**Commit SHA Único e Canônico:** `a904b097b69335f6068ceca9f84852c002244bbd`  
**Mecanismo de Renderização:** Playwright Chromium Headless  

---

## 1. Relação de Capturas por Viewport e Finalidade

| Arquivo de Evidência | Resolução / Viewport | Finalidade da Captura | Status |
| :--- | :--- | :--- | :--- |
| `full_page_320px.png` | 320 x 800 (Mobile Pequeno) | Página inteira: hero, biografia, manifesto, compromissos, formulário e footer | ✅ Gerado |
| `full_page_375px.png` | 375 x 812 (iPhone Comum) | Página inteira: verificação de respiros, legibilidade e alinhamentos | ✅ Gerado |
| `full_page_414px.png` | 414 x 896 (Mobile Amplo) | Página inteira: espaçamento proporcional em telas maiores | ✅ Gerado |
| `full_page_768px.png` | 768 x 1024 (Tablet) | Página inteira: transição e adaptação para 2 colunas | ✅ Gerado |
| `full_page_1024px.png` | 1024 x 768 (Desktop Compacto) | Página inteira: container centralizado nos 1180px | ✅ Gerado |
| `full_page_1280px.png` | 1280 x 800 (Desktop Padrão) | Página inteira: equilíbrio visual e hierarquia tipográfica | ✅ Gerado |
| `full_page_1440px.png` | 1440 x 900 (Desktop Amplo) | Página inteira: margens automáticas, ritmo e ausência de distorção | ✅ Gerado |
| `hero_320px.png` | 320 x 480 | Enquadramento do rosto (76%), título e botões no mobile | ✅ Gerado |
| `hero_1440px.png` | 1440 x 500 | Composição em 2 colunas (560px texto / 380px foto) no desktop | ✅ Gerado |
| `anchor_historia_1440px.png` | 1440 x 900 | Navegação para `#historia`: título visível com respiro de 12px sob o header | ✅ Gerado |
| `anchor_compromissos_1440px.png` | 1440 x 900 | Navegação para `#compromissos`: título visível e não encoberto | ✅ Gerado |
| `anchor_mobilizacao_1440px.png` | 1440 x 900 | Navegação para `#mobilizacao`: formulário visível e não encoberto | ✅ Gerado |

---

## 2. Estratégia Definitiva de Governança
1. **Ambiente Local & Evidências:** A branch de feature (`feature/v3-01-foundation`) gera evidências físicas na pasta `docs/v3/evidence/fase-01/`.
2. **Ambiente de Homologação (GitHub Pages):** Apenas após a aprovação formal de cada walkthrough, as alterações são integradas e promovidas.
3. **Commit SHA Canônico Unificado:** `a904b097b69335f6068ceca9f84852c002244bbd`.
