# Release Checklist Oficial — Versão Release Candidate (Ana Elisa 1331)
**Documento:** `docs/06_release_checklist.md`  
**Data:** 17/08/2026  
**Branch:** `feature/fase-05-release`  
**Status Geral:** ✅ **PASSOU EM 100% DOS CRITÉRIOS**

---

## 1. Verificação Estrutural & Visual

| Item | Critério | Estado | Observação |
| :--- | :--- | :--- | :--- |
| **01** | Header limpo sem faixa "ELEIÇÕES 2026" | **Passou** | Header sóbrio com logo e 4 links |
| **02** | Foto no Hero sem corte de rosto no mobile | **Passou** | Enquadramento com 76% de largura |
| **03** | Hero em 2 colunas equilibradas no desktop | **Passou** | Texto em 560px e foto em 380px contidos em 1180px |
| **04** | Zero overflow horizontal de 320px a 1440px+ | **Passou** | 0px de overflow em todos os viewports |
| **05** | Botões com altura mínima de 48px | **Passou** | Alturas entre 48px e 50px |
| **06** | Manifesto em bloco editorial em fundo creme | **Passou** | Sem aspecto de marketing genérico |
| **07** | Compromissos em lista limpa sem emojis | **Passou** | 4 eixos estruturados com numeração clara |

---

## 2. Verificação Funcional, Links & Downloads

| Item | Critério | Estado | Observação |
| :--- | :--- | :--- | :--- |
| **08** | Navegação interna suave em 100% dos links | **Passou** | Âncoras `#historia`, `#compromissos`, `#mobilizacao`, `#materiais`, `#topo` |
| **09** | Menu mobile abre e fecha suavemente | **Passou** | `aria-expanded` dinâmico e fechamento automático ao clique |
| **10** | Mobilização gera mensagem real no WhatsApp | **Passou** | URL `api.whatsapp.com/send?text=...` testada |
| **11** | Zero simulação falsa de backend/cadastro | **Passou** | Explicação clara sobre processamento local |
| **12** | Download do Santinho Digital Oficial | **Passou** | Arquivo `assets/img/og-share.jpg` (71 KB) |
| **13** | Download do Logotipo Oficial | **Passou** | Arquivo `assets/img/ana-elisa-logo.png` (183 KB) |
| **14** | Download da Foto Oficial da Candidata | **Passou** | Arquivo `assets/img/ana-elisa-foto.png` (1.9 MB) |
| **15** | Link do Instagram oficial verificado | **Passou** | `https://www.instagram.com/anaelisast` |

---

## 3. Verificação Jurídica, Acessibilidade & Performance

| Item | Critério | Estado | Observação |
| :--- | :--- | :--- | :--- |
| **16** | CNPJ oficial da campanha informado | **Passou** | `68.344.770/0001-95` |
| **17** | Federação partidária correta | **Passou** | `Federação Brasil da Esperança (PT / PCdoB / PV)` |
| **18** | Encarregado de dados LGPD informado | **Passou** | `Brenno Adrian Simões dos Reis Dias` |
| **19** | Foco visível de teclado em links e botões | **Passou** | `:focus-visible` com outline amarelo de alto contraste |
| **20** | Zero erros ou warnings no console | **Passou** | JavaScript enxuto e sem dependências |
| **21** | Carregamento rápido sem scripts pesados | **Passou** | HTML/CSS puros sem frameworks |
