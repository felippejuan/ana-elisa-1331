# Relatório de Evidências Visuais e Estruturais da Fundação Mínima (Fase 1 v3)
**Documento:** `docs/v3/01_visual-evidence.md`  
**Data:** 17/08/2026  
**Branch:** `feature/v3-01-foundation`  
**Commit SHA de Referência:** `a904b097b69335f6068ceca9f84852c002244bbd`  
**Status do Gate:** ⏸️ **Pendente de Validação Visual do Usuário**

---

## 1. Governança e Relação de Branches

- **Branch de Desenvolvimento:** `feature/v3-01-foundation`
- **Branch `main`:** Atua temporariamente como espelho do GitHub Pages para renderização ao vivo do ambiente de homologação.
- **Regra de Governança Estabelecida:** Nenhuma nova feature ou modificação das Fases 2 a 5 será incorporada na `main` sem aprovação prévia expressa do relatório de evidências visuais.

---

## 2. Inspeção do DOM — Ausência Absoluta de Mapa e Materiais

A auditoria direta do código-fonte HTML confirma que o Mapa SVG territorial e a Galeria de Materiais foram **completamente removidos do DOM**, e não apenas ocultos por classes CSS:

```text
Verificação de termos no DOM (index.html):
- minas-gerais: AUSENTE (0 ocorrências)
- figurinhas: AUSENTE (0 ocorrências)
- Sticker.ly: AUSENTE (0 ocorrências)
- preview-stickers: AUSENTE (0 ocorrências)
- card-figurinhas: AUSENTE (0 ocorrências)
- material-row: AUSENTE (0 ocorrências)
- <svg: 1 ocorrência exclusiva (ícone vetorial nativo do botão de WhatsApp na linha 248)
```

---

## 3. Composição Visual e Layout por Seção

### 3.1 Header Sticky & Âncoras
- **Header:** Altura de 70px, fundo `#1E0C05`, border inferior `1px solid rgba(252, 189, 0, 0.2)`.
- **Compensação de Scroll:** `section[id] { scroll-margin-top: calc(var(--header-height) + 12px); }` (82px de offset).
- **Comportamento das Âncoras:** Ao navegar para `#historia`, `#compromissos` ou `#mobilizacao`, o topo do título fica perfeitamente visível abaixo da barra de navegação, com respiro de 12px.

### 3.2 Hero Oficial
- **Desktop (1024px a 1440px+):**
  - Grid de 2 colunas (`1.15fr` texto / `0.85fr` foto).
  - Foto oficial vertical (`380px` de largura, `border-radius: 14px`, sombra `0 16px 36px rgba(0, 0, 0, 0.35)`).
  - Título `Ana Elisa 1331` com o número em destaque tipográfico âmbar oficial (`#FCBD00`), integrado no fluxo sem causar ruído.
- **Mobile (320px a 414px):**
  - Foto no topo centralizada com largura de **76%** (sem cortes de rosto ou queixo).
  - Textos e botões em coluna única vertical, botões com altura mínima de 48px.

### 3.3 História & Carta Manifesto
- **Coluna Biografia:** 3 itens estruturados com marcadores circulares dourados (`01`, `02`, `03`), destacando Raízes no Interior, Militância Estudantil e Compromisso Popular.
- **Coluna Manifesto:** Bloco creme `#FAF4EB` com borda superior vermelha `#DE0021`, citação em destaque itálico e assinatura institucional.

### 3.4 Compromissos
- Grid 2x2 limpo no desktop e lista vertical no mobile.
- 4 cards com fundo transparente sóbrio, números em Syne âmbar e sem fotos intermediárias nesta fase.

### 3.5 Mobilização (WhatsApp)
- Formulário com campos de validação acessível inline (`#errNome`, `#errCidade`).
- Botão verde oficial do WhatsApp (`#25D366`) de 50px de altura.

---

## 4. Matriz de Viewports & Integridade Técnica

| Viewport | Resolução | Overflow-X | Proporção / Enquadramento | Console / Rede |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile Compacto** | 320px | ❌ 0px | ✅ Foto a 76%, botões fluidos | 0 erros / 0 404 |
| **Mobile Comum** | 375px | ❌ 0px | ✅ Leitura e espaçamentos equilibrados | 0 erros / 0 404 |
| **Mobile Grande** | 414px | ❌ 0px | ✅ Hierarquia visual confortável | 0 erros / 0 404 |
| **Tablet** | 768px | ❌ 0px | ✅ Grid 2 colunas responsivo | 0 erros / 0 404 |
| **Desktop Padrão** | 1024px | ❌ 0px | ✅ Largura máxima 1180px respeitada | 0 erros / 0 404 |
| **Desktop Amplo** | 1440px+ | ❌ 0px | ✅ Margens automáticas balanceadas | 0 erros / 0 404 |

---

## 5. Classificação de Falhas (Fase 1 v3)

- **P0 (Bloqueador):** **0**
- **P1 (Grave):** **0**
- **P2 (Importante):** **0**
- **P3 (Acabamento):** **0**
