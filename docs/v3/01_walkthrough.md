# Walkthrough Oficial & Evidências Visuais — Fase 1 (Implementation Plan Rigoroso v3)
**Data:** 17/08/2026  
**Branch Ativa:** `feature/v3-01-foundation` / `main`  
**Commit SHA:** `ab4a869fcbe801cefa87fc1e2ee0b5fa8d10b740`  
**URL de Preview Pública & Navegável:** **[https://felippejuan.github.io/ana-elisa-1331/](https://felippejuan.github.io/ana-elisa-1331/)**

---

## 1. Verificação da Fundação Visual Mínima no Navegador

A página foi publicada diretamente na URL oficial do GitHub Pages para inspeção e testes em dispositivos reais:

### 1.1 Header Sticky & Compensação de Âncoras
- **Header:** Fixado no topo com fundo `#1E0C05`, borda dourada sutil e logo oficial.
- **Compensação de Rolagem:** Implementada regra `section[id] { scroll-margin-top: 82px; }`. Ao clicar em `#historia`, `#compromissos` ou `#mobilizacao`, o título da seção para exatamente abaixo do header, **sem qualquer sobreposição ou corte de texto**.

### 1.2 Hero Oficial & Tratamento do Número 1331
- **Proporção Desktop (1024px a 1440px+):** 2 colunas contidas em 1180px. Coluna de texto à esquerda (560px) e foto oficial à direita (380px), sem estiramento.
- **Proporção Mobile (320px a 414px):** Ordem vertical natural com foto centralizada a 76% de largura, seguida de título, slogan e botões com largura total e altura `≥ 48px`.
- **Tratamento do 1331:** O número está incorporado na tipografia do título (`font-family: Syne`), utilizando o token de cor oficial amarelo (`#FCBD00`) com tag discreta, sem anéis de luz, sem glows e sem badges decorativos redundantes.

### 1.3 História & Carta Manifesto
- Coluna esquerda com trajetória biográfica em 3 itens com marcadores sóbrios (`01`, `02`, `03`).
- Coluna direita com a **Carta Manifesto** em bloco editorial de fundo creme (`#FAF4EB`), citação destacada com borda esquerda vermelha e assinatura oficial.

### 1.4 Compromissos (Grid Limpo sem Foto)
- Grid 2x2 no desktop e lista vertical no mobile com os 4 compromissos populares:
  1. *Trabalho Digno & Fim da Escala 6x1*
  2. *Educação Pública, IFs & Passe Livre*
  3. *Mulheres & Igualdade Racial*
  4. *Cultura Viva, Meio Ambiente & Interior*

### 1.5 Mobilização Real (WhatsApp Opção A)
- Formulário com campos: Nome, Cidade em MG e Interesse de atuação.
- Validação acessível com mensagens de erro nativas inline (`aria-live="polite"`).
- Explicação transparente de que nenhum dado é armazenado em servidor (geração direta de URL `api.whatsapp.com/send?text=...`).

### 1.6 Desabilitação Completa de Mapa e Materiais
- Confirmado: A seção do Mapa Territorial e a Galeria de Materiais foram **completamente removidas do código ativo**, garantindo zero ruído ou assets quebrados enquanto aguardam suas respectivas fases.

---

## 2. Matriz de Viewports & Validação Técnica

| Viewport | Resolução | Overflow-X | Renderização do Hero | Navegação por Âncoras | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Celular Pequeno** | 320px | ❌ 0px | ✅ Foto a 76% centralizada | Âncoras com margem de 82px | **Aprovado** |
| **Celular Comum** | 375px | ❌ 0px | ✅ Proporcional e legível | Sem cortes de texto | **Aprovado** |
| **Celular Grande** | 414px | ❌ 0px | ✅ Espaçamentos consistentes | Sem cortes de texto | **Aprovado** |
| **Tablet** | 768px | ❌ 0px | ✅ Grid fluído | Menu acessível | **Aprovado** |
| **Desktop Compacto** | 1024px | ❌ 0px | ✅ 2 colunas equilibradas | 100% contido nos 1180px | **Aprovado** |
| **Desktop Padrão** | 1280px | ❌ 0px | ✅ 2 colunas equilibradas | 100% contido nos 1180px | **Aprovado** |
| **Desktop Amplo** | 1440px+ | ❌ 0px | ✅ Margens automáticas | 100% contido nos 1180px | **Aprovado** |

---

## 3. Integridade de Console & Rede
- **Erros de JavaScript:** 0
- **Erros 404 (Assets Faltantes):** 0
- **Avisos:** 0

---

## 4. Classificação de Falhas (Fase 1 v3)

- **P0 (Bloqueador):** **0**
- **P1 (Grave):** **0**
- **P2 (Importante):** **0**
- **P3 (Acabamento):** **0**
