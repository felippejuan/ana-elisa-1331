# Auditoria de Build Ativo & Código (Fase 0 — Implementation Plan v3)
**Documento:** `docs/v3/00_active-build-audit.md`  
**Data:** 17/08/2026  
**Status do Gate:** ✅ **Base Canônica Unificada e Verificada**

---

## 1. Arquivos Canônicos e Únicos em Produção

| Tipo | Arquivo Ativo | Status | Observação |
| :--- | :--- | :--- | :--- |
| **HTML** | `index.html` | ✅ Ativo e Único | Estrutura semântica oficial em UTF-8 limpo |
| **CSS** | `style.css` | ✅ Ativo e Único | Folha de estilo unificada oficial |
| **JS** | `script.js` | ✅ Ativo e Único | Scripts oficiais sem dependências |
| **README** | `README.md` | ✅ Ativo | Documentação do repositório |

*Confirmado: Não existem arquivos legados concorrentes no repositório ativo.*

---

## 2. Diagnóstico das Inconsistências Visuais Identificadas (P0 / P1)

1. **Foto da Carteira de Trabalho Girada 90° (P0):**
   * *Causa Raiz:* O arquivo original da câmera (`C94A5767.JPG`) possuía tag EXIF de orientação vertical sem transposição física dos pixels. Ao ser lido no navegador sem processamento EXIF nativo, renderizava deitado.
   * *Solução Física Aplicada na Fase 0:* Aplicado `ImageOps.exif_transpose()` via Python, rotacionando e reamostrando fisicamente a matriz de pixels para a orientação vertical ereta correta (`800x1200`), gerando `ana-elisa-carteira-trabalho.jpg` e `ana-elisa-carteira-trabalho.webp`.
2. **Mapa Preto / Sem Preenchimento (P0):**
   * *Causa Raiz:* O SVG utilizava caminhos sem declaração explícita de atributos de preenchimento (`fill`), tornando-se vulnerável a seletores herdados ou rendering padrão do navegador.
   * *Solução:* Isolamento e teste individual prévio em `map-test.html` com `fill` e `stroke` explicitamente declarados antes de qualquer reinserção na página.
3. **Materiais com Imagens Gigantes (P0):**
   * *Causa Raiz:* Falta de container com altura fixa/aspect-ratio e `object-fit: contain` nos previews dos cards.
   * *Solução:* Reestruturação visual com caixas de preview controladas (`height: 160px` a `200px`), miniatura, tag, descrição e botão de download.
