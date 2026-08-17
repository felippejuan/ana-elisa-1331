# Dados Territoriais & Editoriais do Mapa de Minas Gerais
**Documento:** `docs/post-release/map-data.md`  
**Data:** 17/08/2026  
**Fase:** Fase C — Mapa Territorial Visual

---

## Estrutura de Dados das Macrorregiões Editoriais

```javascript
const mapRegions = {
  'centro-oeste': {
    name: 'Centro-Oeste (Origem)',
    tag: 'Berço da Candidata',
    cityHighlight: 'Divinópolis',
    desc: 'Divinópolis é a terra natal de Ana Elisa, onde começou sua vivência com a realidade dos bairros trabalhadores, o transporte público e a educação.',
    cities: 'Divinópolis, Itaúna, Nova Serrana, Formiga, Pará de Minas, Lagoa da Prata, Bom Despacho, Oliveira, Cláudio, Santo Antônio do Monte...',
    status: 'Território prioritário de diálogo'
  },
  'rmbh': {
    name: 'Belo Horizonte & Região Metropolitana',
    tag: 'Mobilização Estudantil & Popular',
    cityHighlight: 'Belo Horizonte',
    desc: 'Centro nevrálgico do movimento universitário e das grandes mobilizações pela ampliação do passe livre e defesa dos serviços públicos.',
    cities: 'Belo Horizonte, Contagem, Betim, Ribeirão das Neves, Santa Luzia, Ibirité, Sabará, Nova Lima, Vespasiano, Sete Lagoas...',
    status: 'Articulação metropolitana'
  },
  'triangulo': {
    name: 'Triângulo & Alto Paranaíba',
    tag: 'Juventude & Universidades Federais',
    cityHighlight: 'Uberlândia',
    desc: 'Região universitária e produtiva estratégica para a interiorização do ensino técnico dos IFs e incentivo ao primeiro emprego com carteira assinada.',
    cities: 'Uberlândia, Uberaba, Patos de Minas, Araguari, Ituiutaba, Frutal, Monte Carmelo, Unaí, Paracatu...',
    status: 'Diálogo regional aberto'
  },
  'zona-mata': {
    name: 'Zona da Mata & Vertentes',
    tag: 'Tradição Universitária & Cultura',
    cityHighlight: 'Juiz de Fora',
    desc: 'Pólo de produção acadêmica e cultural, com forte demanda por valorização dos profissionais de educação e permanência estudantil.',
    cities: 'Juiz de Fora, Viçosa, Ubá, São João del-Rei, Muriaé, Barbacena, Santos Dumont, Ponte Nova, Cataguases...',
    status: 'Diálogo regional aberto'
  },
  'norte': {
    name: 'Norte de Minas',
    tag: 'Convivência com o Semiárido & Direitos',
    cityHighlight: 'Montes Claros',
    desc: 'Foco na captação de recursos federais para agricultura familiar, segurança hídrica e fortalecimento dos polos educacionais no semiárido.',
    cities: 'Montes Claros, Janaúba, Januária, Pirapora, Salinas, Brasília de Minas, São Francisco, Taiobeiras...',
    status: 'Diálogo regional aberto'
  },
  'sul': {
    name: 'Sul de Minas',
    tag: 'Desenvolvimento Social & IFs',
    cityHighlight: 'Pouso Alegre',
    desc: 'Região com forte presença de Institutos Federais e agricultura, demandando investimentos em pesquisa aplicada e transporte intermunicipal.',
    cities: 'Pouso Alegre, Poços de Caldas, Varginha, Lavras, Passos, Alfenas, Itajubá, Três Corações, São Lourenço...',
    status: 'Diálogo regional aberto'
  },
  'vales': {
    name: 'Vales do Jequitinhonha & Mucuri',
    tag: 'Cultura Popular & Dignidade Social',
    cityHighlight: 'Teófilo Otoni',
    desc: 'Compromisso prioritário com o combate às desigualdades, incentivo às artesãs e extensão de programas federais de combate à pobreza.',
    cities: 'Teófilo Otoni, Diamantina, Almenara, Pedra Azul, Araçuaí, Itaobim, Jequitinhonha, Capelinha...',
    status: 'Diálogo regional aberto'
  },
  'rio-doce': {
    name: 'Vale do Aço & Rio Doce',
    tag: 'Indústria, Trabalho & Meio Ambiente',
    cityHighlight: 'Ipatinga',
    desc: 'Defesa dos direitos dos metalúrgicos, redução da jornada 6x1 e rigor na recuperação socioambiental de toda a bacia do Rio Doce.',
    cities: 'Governador Valadares, Ipatinga, Coronel Fabriciano, Timóteo, Caratinga, Guanhães, Mantena...',
    status: 'Diálogo regional aberto'
  }
};
```
