# ☥ Ficha Automatizada V20 — Vampiro: A Máscara 🦇

Uma ficha de personagem interativa, automatizada e rica em recursos para **Vampiro: A Máscara (20th Anniversary Edition / V20)**, desenvolvida em JavaScript puro, CSS3 moderno modular, física de cabos SVG, responsividade mobile completa e interface customizável.

![Vampire The Masquerade V20 Sheet Banner](https://img.shields.io/badge/Sistema-V20_%7C_Vampiro%3A_A_M%C3%A1scara-8b0000?style=for-the-badge&logo=tabletop)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+_Modular-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modular_Gothic_UI-1572B6?style=for-the-badge&logo=css3)
![Mobile Ready](https://img.shields.io/badge/Mobile-100%25_Responsivo-22c55e?style=for-the-badge&logo=android)
![Discord Webhook](https://img.shields.io/badge/Discord-Webhook_Integrado-5865F2?style=for-the-badge&logo=discord&logoColor=white)

---

## 📖 Visão Geral

Esta aplicação web foi criada para jogadores e narradores de RPG que desejam uma experiência moderna, imersiva e completa para gerenciar seus Membros. Ela une a elegância visual clássica gótica do Mundo das Trevas com automações avançadas de regras, física interativa de cabos sangüíneos, janelas modulares magnéticas, compêndios completos de Qualidades, Defeitos e Rituais, histórico de rolagens, temas exclusivos dos Clãs e integração em tempo real com o Discord.

A aplicação roda **100% no navegador (Client-Side)**, sem necessidade de servidores backend ou banco de dados externo, garantindo privacidade total, portabilidade offline e compatibilidade imediata com **GitHub Pages**, **Vercel** ou abertura local por duplo clique (`file:///`).

---

## ✨ Principais Funcionalidades

### 🩸 1. Sistema Completo de Regras V20
- **Atributos & Habilidades:** Seleção fluida de bolinhas para Atributos (*Físicos, Sociais, Mentais*) e Habilidades (*Talentos, Perícias, Conhecimentos*), com **indicadores numéricos à esquerda** de cada linha de traço.
- **Disciplinas & Especializações Dinâmicas:** Adicione, renomeie e remova Disciplinas, Especializações, Antecedentes e Caminhos customizados.
- **Controle de Geração & Sangue Automático:**
  - Suporte dinâmico da **3ª à 15ª Geração**.
  - O tamanho da Parada de Sangue (*Blood Pool*) e o gasto máximo de pontos por turno se ajustam automaticamente de acordo com as tabelas oficiais de Geração do V20.
  - Botões de conveniência para encher (`Encher Max`) e esvaziar a reserva.
- **Força de Vontade & Trilha/Humanidade:** Controle de Força de Vontade permanente (bolinhas) e temporária (caixas de marcação `✕`), além de Trilha da Sabedoria / Humanidade com Virtudes associadas.
- **Tabela de Vitalidade & Penalidades:** Controle do ciclo de dano Contundente (`/`), Letal (`X`) e Agravado (`*`) com cálculo automático de penalidades nos dados (`-1`, `-2`, `-5`, Incapacitado).
- **Controle de Experiência (XP):** Cálculo automático de saldo disponível com base no total adquirido e gasto.
- **Página 2 Completa (Grimório & Detalhes):**
  - Lista dinâmica de Rituais e Linhas Taumatúrgicas / Necromancia (Níveis 1 a 9 com efeitos e anotações).
  - Campos dedicados com fundo escuro gótico para Qualidades & Defeitos, Fraqueza do Clã, Outras Características e Histórico detalhado.

---

### 📱 2. Responsividade Mobile & Tablet Completa
- **Design Adaptativo para Celulares:** Em smartphones e tablets, a ficha se reorganiza automaticamente em **1 coluna vertical fluida**, sem sobreposição de janelas.
- **Bolinhas Proporcionais:** Em telas estreitas (320px a 600px), o diâmetro das bolinhas de 1 a 9 se adapta proporcionalmente para caber em qualquer smartphone sem transbordar.
- **Dock de Dados Verticalizado:** O painel de rolagem inferior se ajusta perfeitamente na vertical para toque confortável no polegar.
- **Modais e Drawers em Tela Cheia:** O personalizador de temas, a gaveta do Histórico (`𝕮`) e a Wiki abrem em visual confortável de tela cheia no mobile.

---

### 🎭 3. Temas Oficiais dos 7 Clãs & Ajuste Fino HSL
- **Presets Temáticos dos Clãs:**
  - 👑 **Ventrue:** Sangue Azul Nobre & Ouro Aristocrático
  - 🩸 **Tremere:** Carmesim Hermético & Ouro Arcano
  - 🌹 **Toreador:** Rosa das Paixões & Ouro Rosé
  - 🔥 **Brujah:** Fogo Revolucionário & Aço Urbano
  - 🌑 **Lasombra:** Escuridão Abissal & Prata Lunar
  - 🐉 **Tzimisce:** Esmeralda Draconiana & Ouro Ancestral
  - ⚰️ **Giovanni:** Púrpura Espectral & Ouro Veneziano
- **Cores Clássicas V20:** Vermelho Carmesim, Verde Esmeralda, Roxo Abissal e Amarelo Âmbar.
- **Sliders em Tempo Real:** Ajuste fino de Matiz, Saturação, Luminosidade de fundo e Ruído de película (*film grain noise*).

---

### 🪟 4. Janelas Modulares Flutuantes (Drag, Snap Magnético & Resize)
- **Arraste Livre (*Draggable Cards*):** Em computadores e telas amplas, todas as categorias e cartões de status podem ser arrastados livremente.
- **Ímã Magnético (*Magnetic Grid Snap*):** Encaixe inteligente em grade de 12px para alinhamento perfeito.
- **Redimensionamento Livre (*Card Resizing*):** Puxe o manipulador (`◢`) no canto inferior direito de cada card para redimensionar largura e altura.
- **Modo Badge Compacto Automático:** Ao reduzir cards para tamanhos mínimos, os campos internos se ocultam para economizar espaço de tela.
- **Persistência de Layout & Reset:** Posições e tamanhos salvos no navegador, com botão **`🔄 Resetar Layout`** na barra superior.

---

### 🕸️ 5. Cabos de Ligação Sangüínea (*Blood Link Cables*)
- **Conexão Dinâmica de Traços:** Clique nos nós circulares de um Atributo e de uma Habilidade (ou Disciplina) para ligá-los e formar paradas de dados.
- **Física SVG 2D em Tempo Real:** Conexões em curvas Bézier com oscilação física amortecida que reagem a cada nova ligação.
- **Ancoragem Inteligente na Borda (*Border Snapping*):** Quando um card conectado é redimensionado ou colapsado, o cabo se fixa na borda externa voltada para o nó destino.
- **Brilho Carmesim Pulsante:** O container com nós ativos brilha suavemente com aura carmesim pulsante.

---

### 🎲 6. Rolador de Dados V20 Avançado
- **Regras Oficiais do Sistema Storyteller:**
  - **Sucessos:** Dados iguais ou maiores que a Dificuldade selecionada (Dif padrão 6).
  - **Críticos (10s):** Contabilizam **2 sucessos** e recebem destaque neon **Ciano**.
  - **Cancelamento por 1s:** Fracassos cancelam sucessos. Caso não haja sucessos e ocorram 1s, declara **Falha Crítica (*Botch*)**.
- **Rerrolagem de Falhas:** Permite rerrolar os dados que falharam com um clique, destacando os novos dados em **dourado**.
- **Dock Flutuante de Comando:** Exibe a fórmula matemática dos dados, o total e gera o comando para bots de Discord (`!vr <pool>`).

---

### 💬 7. Integração com Discord Webhook (Por Personagem)
- **Envio Automático:** Envia os resultados das rolagens diretamente para o canal de texto do Discord do seu grupo.
- **Embeds Góticos Ricos:**
  - Exibe nome do personagem, clã, nome do jogador, foto de perfil, traços usados e resultado detalhado.
  - **Cores Dinâmicas:** Ciano para Sucessos Críticos, Verde para Sucessos, Vermelho para Falhas Críticas e Cinza para Falhas Simples.
  - **Edição em Tempo Real (`PATCH`):** Ao rerrolar falhas na ficha, a mensagem original no Discord é editada automaticamente com o novo resultado.
- **Emotes Customizados:** Suporte nativo para emojis personalizados do servidor (ex: `<:critico:ID>`, `<:sucesso:ID>`, `<:falha:ID>`, `<:falhacritica:ID>`).

---

### 𝕮 8. Gaveta de Histórico de Rolagens (*Slide-Out Drawer*)
- **Botão Flutuante Gótico à Direita:** Aba fixa na lateral direita com o símbolo **`𝕮`** e contador numérico em tempo real.
- **Painel Lateral Deslizante:** Visualização cronológica com horário, traços usados, badge de resultado, mini-dados individuais coloridos e destaque nos dados rerrolados.

---

### 📚 9. Compêndios Integrados
- **Qualidades & Defeitos (`qualidades-defeitos.html`):** Mais de 130 Qualidades e Defeitos oficiais catalogados com filtros duplos combináveis (Tipo e Categoria), busca em tempo real e botão de copiar.
- **Grimório Oficial de Rituais (`compendios/grimorio-rituais.html`):** Mais de 45 rituais das **7 Tradições de Feitiçaria e Taumaturgia** (*Hermética, Necromancia, Setita, Anarquista, Assamita, Koldúnica e Indiana*) com botão **"➕ Adicionar à Ficha"**.
- **Painel de Ajuda & Wiki (`𝖂 Wiki`):** Drawer lateral com busca rápida por regras, danos, absorção, virtudes e links oficiais da White Wolf Wiki.

---

### 🛡️ 10. Segurança, Boas Práticas & Popup Informativo
- **Popup de Boas-Vindas & Aviso de Salvamento:** Exibido no primeiro acesso com orientações claras sobre `localStorage`, backups `.json`, abas anônimas e privacidade do Webhook, com opção *"Não mostrar novamente"*.
- **Proteção contra Injeção (XSS):** Sanitização com `escapeHtml()` em todas as exibições dinâmicas e no histórico.
- **Compressão de Avatar em Canvas:** Redimensionamento e compressão automática de fotos de perfil para manter o `localStorage` leve e rápido.
- **Backup Completo (`.json`):** Exportação e importação de personagens inteiros com 1 clique para transferência entre PC e Celular.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica, formulários reativos e container queries.
- **SVG Dinâmico:** Renderização vetorial dos cabos de sangue, auras e filtros gaussianos de brilho.
- **CSS3 Modular:** Dividido em 7 módulos especializados com Flexbox, CSS Grid, Container Queries, Glassmorphism, ruído de fundo e variáveis CSS.
- **JavaScript Vanilla (ES6+ Modular):** Dividido em 8 módulos independentes com zero dependências externas ou frameworks pesados.

---

## 📂 Estrutura de Arquivos do Projeto

```
v20-character-sheet/
│
├── index.html                      # ⭐ Ficha principal de personagem (raiz limpa)
├── LICENSE                         # Licença MIT
├── README.md                       # Documentação completa do projeto
│
├── css/                            # 🎨 Estilos e Tematização Gótica Modular
│   ├── base.css                    # Variáveis globais, reset, tipografia, ruído e toasts
│   ├── themes.css                  # Paletas e texturas dos 7 Clãs e cores clássicas
│   ├── sheet.css                   # Layout da ficha, cabeçalho responsivo, avatar e grids
│   ├── traits.css                  # Bolinhas, badges numéricos, vitalidade e sangue
│   ├── draggable.css               # Janelas arrastáveis, ímã magnético e modo mobile
│   ├── cables.css                  # Laços SVG de sangue, dock flutuante de rolagem
│   ├── modals.css                  # Modals, drawer do histórico, wiki e aviso de boas-vindas
│   └── styles.css                  # Ponto de entrada / importador dos módulos CSS
│
├── js/                             # ⚙️ Lógica e Módulos JavaScript (ES6+)
│   ├── constants.js                # Regras V20, tabelas de geração, sanitização e utilitários
│   ├── storage.js                  # Gerenciador AppState, localStorage e compressor de imagens
│   ├── themes.js                   # ThemeManager, presets dos 7 Clãs e sliders HSL
│   ├── cables.js                   # LinkCableSystem, física de cabos Bézier e auras SVG
│   ├── draggable.js                # DraggableWindowManager, grid de 12px e layout fluido mobile
│   ├── dice.js                     # Rolador Storyteller, Discord Webhook e DiceHistoryManager
│   ├── renderer.js                 # UIRenderer, bolinhas dinâmicas e reatividade da ficha
│   └── main.js                     # WelcomeNoticeManager, atalhos de teclado e ciclo de vida
│
├── compendios/                     # 📚 Enciclopédias e Compêndios Oficiais
│   ├── qualidades-defeitos.html    # Catálogo de 130+ Qualidades & Defeitos com filtros
│   └── grimorio-rituais.html       # Grimório Oficial de Rituais V20 (7 Tradições Místicas)
│
└── data/                           # 🗄️ Bases de Dados Canônicas
    ├── qualidades-defeitos-data.js # Dados estruturados de Qualidades & Defeitos
    └── grimorio-rituais-data.js    # Dados estruturados de Rituais com links da Wiki
```

---

## 🚀 Como Utilizar

### Execução Local (PC ou Notebook)

1. Clone o repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/SEU-USUARIO/v20-character-sheet.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd v20-character-sheet
   ```
3. Dê um duplo clique no arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Opera, Safari).

### Publicação no GitHub Pages (Para Jogar Online e no Celular)

1. Envie o projeto para o seu repositório no GitHub.
2. Acesse **Settings** > **Pages** no repositório.
3. Em **Branch**, selecione `main` (ou `master`) e a pasta `/ (root)`.
4. Clique em **Save**. Em instantes, o link público da sua ficha estará no ar!
5. Abra o link no navegador do seu smartphone ou tablet e selecione **"Adicionar à Tela Inicial"** para usar a ficha como um aplicativo de celular.

---

## 📜 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

*Vampiro: A Máscara e o Mundo das Trevas são marcas registradas da Paradox Interactive / White Wolf Publishing. Este projeto é uma ferramenta de fã sem fins lucrativos criada para a comunidade de RPG de mesa.*
