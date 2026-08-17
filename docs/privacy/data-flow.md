# Documento de Fluxo de Dados & Privacidade — Fase 4: Mobilização
**Documento:** `docs/privacy/data-flow.md`  
**Data:** 17/08/2026  
**Fase:** Fase 4 — Mobilização Real

---

## 1. Arquitetura Escolhida: Opção A (Sem Armazenamento em Servidor)

A campanha de **Ana Elisa (1331)** adota o modelo de máxima transparência e privacidade para o site estático hospedado no GitHub Pages:

```
[ Usuário digita Nome, Cidade, Interesse ]
                   │
                   ▼ (Validação local no navegador / JS)
[ Gera URL codificada: api.whatsapp.com/send?text=... ]
                   │
                   ▼
[ Abre aplicativo do WhatsApp do próprio usuário ]
                   │
                   ▼
[ Envio direto e voluntário para o contato oficial da campanha ]
```

---

## 2. Princípios de Privacidade

1. **Zero Coleta Persistente no Site:** O site **não** possui backend, banco de dados ou endpoints terceiros ocultos coletando dados do usuário.
2. **Controle Total do Usuário:** O visitante visualiza e aprova a mensagem gerada antes de clicar em enviar dentro do seu próprio aplicativo do WhatsApp.
3. **Ausência de Sucesso Falso:** O site **não** exibe mensagens enganosas de "cadastro salvo no banco" porque nenhum dado é retido no servidor web.
4. **Conformidade LGPD:** O encarregado oficial de dados da campanha está declarado no rodapé institucional (`Brenno Adrian Simões dos Reis Dias`).
