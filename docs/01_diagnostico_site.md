# Diagnóstico Inicial Obrigatório — Ana Elisa 1331
**Documento:** `docs/01_diagnostico_site.md`  
**Data:** 17/08/2026  
**Fase:** Fase 0 — Diagnóstico & Congelamento

---

## 1. Inventário de Arquivos e Funções

| Arquivo | Tamanho | Função Pretendida | Estado Atual | Avaliação Técnica |
| :--- | :--- | :--- | :--- | :--- |
| `index.html` | ~15 KB | Estrutura semântica da página única | Parcialmente limpo | Precisa de alinhamento estrito à nova matriz de conteúdo. |
| `style.css` | ~15 KB | Estilização global e responsiva | Reduzido | Deve ser substituído pelo contrato de design com tokens fechados. |
| `script.js` | ~2 KB | Menu mobile e WhatsApp | Funcional (Opção A) | Pronto para ser modularizado sem dependências externas. |

---

## 2. Auditoria Completa de Assets (Existentes vs Ausentes)

| Asset | Caminho Local | Formatos Disponíveis | Estado | Decisão |
| :--- | :--- | :--- | :--- | :--- |
| **Foto Oficial Ana Elisa** | `assets/img/ana-elisa-foto.png` | PNG (1.9MB), WebP (143KB) | ✅ Existente e real | **Aprovado** para uso no Hero e Materiais. |
| **Logo Oficial Ana Elisa** | `assets/img/ana-elisa-logo.png` | PNG (183KB), WebP (87KB) | ✅ Existente e real | **Aprovado** para Header, Footer e Materiais. |
| **Slogan "Minas quer +"** | `assets/img/slogan.png` | PNG (338KB), WebP (164KB) | ✅ Existente e real | **Aprovado** para uso pontual acima da manchete. |
| **Card de Compartilhamento / Santinho** | `assets/img/og-share.jpg` | JPG (71KB) | ✅ Existente e real | **Aprovado** para OpenGraph e download de Santinho. |
| **Mapa SVG Geográfico de MG** | N/A | Inexistente | ❌ Ausente | **Remover** até existir vetor cartográfico certificado. |
| **Pack de Stickers (.wastickers / link)** | N/A | Inexistente | ❌ Ausente | **Remover** para não apontar link fictício. |
| **PDF de Propostas / Diretrizes** | N/A | Inexistente | ❌ Ausente | **Aguardar documento oficial** antes de criar link. |

---

## 3. Auditoria de Links e Integrações

| Link / Integração | Destino | Estado | Decisão |
| :--- | :--- | :--- | :--- |
| **Instagram** | `https://www.instagram.com/anaelisast` | ✅ Real e verificado | **Aprovado**. |
| **WhatsApp Grupos Regionais** | `sample-centro-oeste`, etc. | ❌ Fictício / Placeholder | **Removido** definitivamente. |
| **WhatsApp Mobilização (Opção A)** | `api.whatsapp.com/send?text=...` | ✅ 100% Real e funcional | **Aprovado** (Gera mensagem sem backend). |
| **Downloads de Materiais** | Links locais para `og-share.jpg`, `logo.png`, `foto.png` | ✅ Arquivos reais | **Aprovado**. |

---

## 4. Tabela de Diagnóstico e Decisões de Governança

| Item | Estado | Evidência | Decisão | Responsável |
| :--- | :--- | :--- | :--- | :--- |
| **Faixa "ELEIÇÕES 2026" no Header** | Corrigir | Poluía o topo e causava quebra visual | **Remover** permanentemente | Frontend |
| **Composição do Hero (Desktop)** | Aprovado | 2 colunas equilibradas (Texto à esquerda / Foto à direita) | **Adotar** no Contrato de Design | Design / UI |
| **Composição do Hero (Mobile)** | Aprovado | Foto no topo (70-82% largura), sem cortes, seguida de texto | **Adotar** no Contrato de Design | Design / UI |
| **Fórmula "13+31=1331"** | Corrigir | Elemento puramente decorativo | **Remover**; manter apenas número 1331 integrado | Editorial |
| **Mapa Regional Interativo** | Remover | Não possui mapa cartográfico certificado nem links reais | **Remover** totalmente | Arquitetura |
| **Agenda de Campanha** | Aguardar informação | Não há datas reais confirmadas no momento | **Remover** e só ativar com evento verificado | Editorial |
| **Formulário de Mobilização** | Aprovado | Opção A (WhatsApp direto sem simulação de backend) | **Adotar** como padrão oficial | Frontend |
| **Dados Legais (CNPJ / LGPD)** | Aprovado | CNPJ 68.344.770/0001-95 / Encarregado Brenno Adrian | **Manter** no Footer institucional | Jurídico / Editorial |
