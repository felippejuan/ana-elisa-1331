# Relatório de Testes e Red Team — Fase 1: Mapa Territorial de Minas Gerais (v2)
**Documento:** `docs/test-results/fase-01-mapa.md`  
**Data:** 17/08/2026  
**Branch:** `feature/fase-01-mapa-territorial`  
**Status do Gate:** ✅ **APROVADO TECNICAMENTE**

---

## 1. Matriz de Viewports & Validação Técnica

| Viewport | Resolução | Overflow-X | Renderização do Mapa | Interação (SVG + Chips) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Celular Pequeno** | 320px | ❌ 0px | ✅ Proporcional sem cortes | Chips horizontais confortáveis | **Aprovado** |
| **Celular Comum** | 375px | ❌ 0px | ✅ Mapa nítido e legível | Chips + clique no mapa | **Aprovado** |
| **Celular Grande** | 414px | ❌ 0px | ✅ Layout fluido | Chips + clique no mapa | **Aprovado** |
| **Tablet** | 768px | ❌ 0px | ✅ Grid equilibrado | Seleção no SVG e botões | **Aprovado** |
| **Desktop Compacto** | 1024px | ❌ 0px | ✅ 2 colunas (Mapa 52% / Card 48%) | Hover suave e clique no SVG | **Aprovado** |
| **Desktop Padrão** | 1280px | ❌ 0px | ✅ Contido em 1180px | Hover suave e clique no SVG | **Aprovado** |
| **Desktop Amplo** | 1440px+ | ❌ 0px | ✅ Margens automáticas | Hover suave e clique no SVG | **Aprovado** |

---

## 2. Red Team Territorial, Visual & Confiança

1. **O mapa é geograficamente reconhecível como Minas Gerais?**  
   *Sim. Contorno territorial com proporção geométrica correta e as 8 macrorregiões oficiais.*
2. **Divinópolis possui o devido destaque como berço da candidata?**  
   *Sim. Marcador dourado e legenda destacada com o texto oficial "Divinópolis (Origem)".*
3. **Há algum dado fictício ou promessa falsa de grupos de WhatsApp?**  
   *Não. Zero links `sample-centro-oeste`. Cada região apresenta seu contexto temático e cidades polo reais.*
4. **O mapa quebra ou polui o Hero e as demais seções?**  
   *Não. O Hero da Fase 2 permaneceu 100% congelado e intocado.*
5. **O fallback para celular e leitores de tela funciona?**  
   *Sim. Chips de texto táteis funcionam como alternativa direta e acessível ao toque nos polígonos do SVG.*

---

## 3. Classificação de Falhas

- **P0 (Bloqueador):** 0
- **P1 (Grave):** 0
- **P2 (Importante):** 0
- **P3 (Acabamento):** 0

---

## 4. Decisão do Gate

- **Decisão:** **APROVADO TECNICAMENTE**
- **Próximo Passo:** Submeter branch `feature/fase-01-mapa-territorial` para aprovação antes de abrir a Fase 2 (Foto da Carteira de Trabalho em Compromissos).
