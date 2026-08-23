# ☥ Ficha Automatizada V20 — Vampiro: A Máscara 🦇

Uma ficha de personagem interativa, automatizada e rica em recursos para **Vampiro: A Máscara (20th Anniversary Edition / V20)**, desenvolvida em JavaScript puro, CSS3 moderno, física de cabos SVG e interface modular customizável.

![Vampire The Masquerade V20 Sheet Banner](https://img.shields.io/badge/Sistema-V20_%7C_Vampiro%3A_A_M%C3%A1scara-8b0000?style=for-the-badge&logo=tabletop)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Gothic_UI-1572B6?style=for-the-badge&logo=css3)
![Discord Webhook](https://img.shields.io/badge/Discord-Webhook_Integrado-5865F2?style=for-the-badge&logo=discord&logoColor=white)

---

## 📖 Visão Geral

Esta aplicação web foi criada para jogadores e narradores de RPG que desejam uma experiência moderna, imersiva e completa para gerenciar seus Membros. Ela une a elegância visual clássica gótica do Mundo das Trevas com automações avançadas de regras, física interativa de cabos sangüíneos, janelas modulares magnéticas, compêndio completo de Qualidades e Defeitos, histórico de rolagens e integração em tempo real com o Discord.

---

## ✨ Principais Funcionalidades

### 🩸 1. Sistema Completo de Regras V20
- **Atributos & Habilidades:** Seleção fluida de bolinhas para Atributos (Físicos, Sociais, Mentais) e Habilidades (Talentos, Perícias, Conhecimentos).
- **Disciplinas & Especializações Dinâmicas:** Adicione, renomeie e remova Disciplinas, Especializações, Antecedentes e Caminhos customizados.
- **Controle de Geração & Sangue Automático:**
  - Suporte dinâmico da **4ª à 15ª Geração**.
  - O tamanho da Parada de Sangue (*Blood Pool*) e o gasto máximo de pontos por turno se ajustam automaticamente de acordo com as tabelas oficiais de Geração do V20.
  - Botões de conveniência para encher (`Encher Max`) e esvaziar a reserva.
- **Força de Vontade & Trilha/Humanidade:** Controle de Força de Vontade permanente (bolinhas) e temporária (caixas de marcação `✕`), além de Trilha da Sabedoria / Humanidade com Virtudes associadas.
- **Tabela de Vitalidade & Penalidades:** Controle do ciclo de dano Contundente (`/`), Letal (`X`) e Agravado (`*`) com cálculo automático de penalidades nos dados (`-1`, `-2`, `-5`, Incapacitado).
- **Controle de Experiência (XP):** Cálculo automático de saldo disponível com base no total adquirido e gasto.
- **Página 2 Completa (Grimório & Detalhes):**
  - Lista dinâmica de Rituais e Linhas Taumatúrgicas / Necromancia (Níveis 1 a 9 com efeitos e anotações).
  - Campos dedicados para Qualidades & Defeitos com link direto para o compêndio, Fraqueza do Clã, Outras Características e Histórico detalhado.

---

### 🪟 2. Janelas Modulares Flutuantes (Drag, Snap Magnético & Resize)
- **Arraste Livre (*Draggable Cards*):** Todas as categorias e cartões de status podem ser arrastados livremente para qualquer posição na tela.
- **Ímã Magnético (*Magnetic Grid Snap*):** Encaixe inteligente em grade magnética de 12px para alinhamento perfeito e simetria visual.
- **Redimensionamento Livre (*Card Resizing*):** Puxe o manipulador no canto inferior direito de cada card para redimensionar sua largura e altura livremente.
- **Modo Badge Compacto Automático:**
  - Ao reduzir os cards de **Experiência**, **Força de Vontade** ou **Ponto de Sangue** para tamanhos muito pequenos, os campos internos se ocultam automaticamente e o card se transforma em uma elegante badge centralizada com o título da seção.
- **Persistência de Layout & Reset:** As posições e tamanhos customizados de cada janela são salvos no navegador, com o botão **`🔄 Resetar Layout`** na barra superior para restaurar o padrão clássico a qualquer momento.

---

### 🕸️ 3. Cabos de Ligação Sangüínea (*Blood Link Cables*) & Ancoragem Inteligente
- **Conexão Dinâmica de Traços:** Clique nos nós circulares de um Atributo e de uma Habilidade (ou Disciplina/Especialização) para ligá-los e formar paradas de dados.
- **Física SVG 2D em Tempo Real:** Conexões em curvas Bezier com oscilação física amortecida (*harmonic sway physics*) que reagem a cada nova ligação.
- **Ancoragem Inteligente na Borda do Container (*Border Snapping*):**
  - Se você conectar um traço para rolagem e em seguida redimensionar ou colapsar o card onde ele está, o cabo não se perde: ele **gruda perfeitamente na borda externa da janela** voltada na direção do outro nó ou do dock de dados.
- **Brilho Carmesim Pulsante no Container:**
  - A janela que possui nós conectados ocultos começa a brilhar com uma aura carmesim pulsante (`.card-cable-linked-active`), mantendo o brilho vermelho mesmo enquanto é redimensionada.
- **Auras em Overlay Global:** Os anéis de brilho e pontos de junção são renderizados em um layer SVG global (z-index 90), 100% livres de cortes de borda.

---

### 🎭 4. Compêndio Completo de Qualidades & Defeitos (`qualidades-defeitos.html`)
- **Catálogo Integral V20 & 3ª Edição:** Mais de 130 Qualidades e Defeitos categorizados fielmente a partir dos livros oficiais (*Livro Básico, Guia da Camarilla, Guia do Sabá, Livros de Clã, Tempo de Sangue Fraco*).
- **Filtros Combináveis em Dois Eixos:**
  - **Eixo 1 (Tipo):** *Todos os Tipos*, *✨ Apenas Qualidades*, *💀 Apenas Defeitos*.
  - **Eixo 2 (Categoria):** *Todas as Categorias*, *🩸 Físicas*, *🧠 Mentais*, *🏛️ Sociais*, *🔮 Sobrenaturais*.
  - Exemplo: Escolha *Defeitos* + *Físicas* para visualizar **exatamente e apenas os Defeitos Físicos**.
- **Busca em Tempo Real (`🔍`):** Pesquisa instantânea por nome, pontos, livro de origem ou termos descritivos (ex: *"frenesi"*, *"fogo"*, *"tremere"*).
- **Botão "📋 Copiar":** Copia a qualidade/defeito formatada diretamente para a área de transferência para colar na ficha.
- **Acesso Rápido:** Botão `[📖 Lista Completa ↗]` presente diretamente no cabeçalho de Qualidades & Defeitos na Página 2 da ficha e no menu Wiki.

---

### 📜 5. Grimório Oficial de Rituais V20 (`compendios/grimorio-rituais.html`)
- **Catálogo Abrangente de Magia de Sangue:** Mais de 45 rituais canônicos (Níveis 1 a 5) cobrindo todas as **7 Grandes Tradições Oficiais da White Wolf Wiki**:
  - 🩸 **Taumaturgia Hermética** (*Clã Tremere*)
  - 💀 **Necromancia** (*Clã Giovanni & Capadócios*)
  - 🐍 **Akhu / Feitiçaria Setita** (*Seguidores de Set / Ministério*)
  - ⚡ **Feitiçaria Anarquista** (*Hacktivista & Punk dos Anarquistas*)
  - 🗡️ **Dur-An-Ki / Feitiçaria Assamita** (*Clã Banu Haqim*)
  - 🌲 **Koldunismo / Feitiçaria Koldúnica** (*Clã Tzimisce*)
  - 🕉️ **Sādhana / Feitiçaria Indiana** (*Clã Ravnos & Daityas*)
- **Ficha Completa por Ritual:** Componentes materiais, tempos de conjuração, sistemas de paradas de dados, livros de referência e links diretos para a **White Wolf Fandom Wiki**.
- **Filtros por Nível & Tradição:** Filtre instantaneamente por Nível (1 ao 5) e por qualquer uma das 7 tradições místicas.
- **Botão "➕ Adicionar à Ficha":** Integração direta com o personagem ativo: adiciona o ritual pré-carregado diretamente à lista de rituais na Página 2 da ficha!
- **Preservação de Rituais Customizados:** A ficha mantém 100% da flexibilidade para adicionar e editar rituais personalizados livremente pelo botão `＋`.

---

### 📖 6. Painel Lateral de Ajuda & Wiki V20 (`𝖂 Wiki`)
- **Botão Flutuante Espelhado à Esquerda:** Aba gótica fixa na lateral esquerda com o símbolo **`𝖂`** e efeito hover luminoso.
- **Drawer Deslizante com Busca Rápida:**
  - Campo de pesquisa em tempo real para localizar regras e lore rapidamente.
  - Links oficiais e enciclopédias (*White Wolf Fandom Wiki, Índice de Disciplinas 1-10, Clãs & Linhagens, Rituais Taumatúrgicos, Geração e Sangue, Sistema Storyteller*).
  - **Cartões de Consulta Rápida In-App:** Resumos de regras essenciais (Cálculo de parada de dados, Danos e Absorção, Usos de Força de Vontade e Gastos de Sangue).

---

### 🎲 7. Rolador de Dados V20 Avançado
- **Regras Oficiais do Sistema Storyteller:**
  - **Sucessos:** Dados iguais ou maiores que a Dificuldade selecionada (Dif padrão 6).
  - **Críticos (10s):** Contabilizam **2 sucessos** e recebem destaque neon **Ciano**.
  - **Cancelamento por 1s:** Fracassos cancelam sucessos. Caso não haja sucessos e ocorram 1s, declara **Falha Crítica (*Botch*)**.
- **Rerrolagem de Falhas:** Permite rerrolar os dados que falharam com um clique, destacando os novos dados em **dourado**.
- **Dock Flutuante de Comando:** Exibe a fórmula matemática dos dados, o total e gera o comando para bots de Discord (`!vr <pool>`).

---

### 💬 8. Integração com Discord Webhook (Por Personagem)
- **Envio Automático:** Envia os resultados das rolagens diretamente para o canal de texto do Discord do seu grupo.
- **Embeds Góticos Ricos:**
  - Exibe nome do personagem, clã, nome do jogador, foto/avatar do personagem, traços usados e resultado detalhado.
  - **Cores Dinâmicas:** Ciano para Sucessos Críticos, Verde para Sucessos, Vermelho para Falhas Críticas e Cinza para Falhas Simples.
  - **Edição em Tempo Real (`PATCH`):** Ao rerrolar falhas na ficha, a mensagem original no Discord é editada automaticamente com o novo resultado.
- **Emotes Customizados:** Suporte nativo para emojis personalizados do servidor (ex: `<:critico:ID>`, `<:sucesso:ID>`, `<:falha:ID>`, `<:falhacritica:ID>`).
- **Isolamento Total:** Cada personagem da sua lista tem sua própria URL de Webhook independente.

---

### 𝕮 9. Gaveta de Histórico de Rolagens (*Slide-Out Drawer*)
- **Botão Flutuante Gótico à Direita:** Aba fixa na lateral direita com o símbolo **`𝕮`** e contador numérico em tempo real.
- **Painel Lateral Deslizante:**
  - Visualização cronológica organizada (mais antigas no topo, mais recentes no fundo com auto-scroll).
  - Exibição de horário exato, traços selecionados, badge de resultado, mini-dados individuais coloridos e destaque nos dados rerrolados.
- **Escopo por Personagem:** Cada ficha mantém seu próprio histórico de rolagens gravado individualmente no navegador.

---

### 🎨 10. Customizador de Temas & Cores (Por Personagem)
- **Presets Rápidos:**
  - 🩸 *Vermelho (Carmesim)*
  - 🌿 *Verde (Esmeralda)*
  - 🔮 *Roxo (Abissal)*
  - ☀️ *Amarelo (Âmbar)*
- **Ajuste Fino HSL:** Sliders de Matiz, Saturação, Luminosidade de fundo e Ruído de película (*film grain noise*).
- **Sincronização dos Cabos:** Os cabos de ligação de sangue adaptam sua cor e brilho dinamicamente de acordo com o tema do personagem ativo.

---

### 👥 11. Gerenciador Multi-Fichas & Responsividade
- **Barra Superior Responsiva & Centralizada:** Menu de navegação harmonioso que se adapta automaticamente a telas menores, dividindo botões de ação em blocos simétricos.
- **Múltiplos Personagens:** Crie, clone e alterne rapidamente entre personagens no menu superior.
- **Importação/Exportação JSON:** Salve suas fichas em arquivos `.json` locais e compartilhe com seu Narrador ou amigos.
- **Persistência Total:** Tudo é salvo automaticamente no `localStorage` do navegador com atalho `Ctrl + S`.
- **Modo de Impressão (@media print):** Estilos limpos para gerar PDF da ficha ou imprimir em papel formato clássico.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e acessível com suporte a container queries.
- **SVG Dinâmico:** Renderização vetorial dos cabos de sangue, auras pulsantes e nós de conexão.
- **CSS3 Moderno:** Flexbox, CSS Grid, Container Queries (`@container`), Glassmorphism, Backdrop Filters, Animações e Variáveis CSS para tematização dinâmica.
- **JavaScript Vanilla (ES6+):** Código limpo, modular, reativo e sem dependências externas pesadas.

---

## 🚀 Como Utilizar

### Executando Localmente

1. Clone o repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/SEU-USUARIO/v20-character-sheet.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd v20-character-sheet
   ```
3. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Opera, Safari, etc.):
   - Basta dar um clique duplo em `index.html` ou usar extensões como o *Live Server* do VS Code.

### Hospedagem no GitHub Pages

Este projeto é 100% estático e funciona diretamente no **GitHub Pages**:
1. Vá nas configurações do seu repositório no GitHub (**Settings** > **Pages**).
2. Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
3. Clique em **Save** e acesse a URL gerada!

---

## 📂 Estrutura de Arquivos

```
v20-character-sheet/
│
├── index.html                  # ⭐ Ficha principal de personagem (raiz limpa)
├── LICENSE                     # Licença MIT
├── README.md                   # Documentação completa do projeto
│
├── css/                        # 🎨 Estilos e tematização gótica
│   └── styles.css              # Variáveis CSS, layout responsivo e animações
│
├── js/                         # ⚙️ Scripts e lógica principal
│   └── app.js                  # Regras V20, física dos cabos, Discord Webhook e storage
│
├── compendios/                 # 📚 Enciclopédias e páginas auxiliares
│   ├── qualidades-defeitos.html # Compêndio de Qualidades & Defeitos com filtros duplos
│   └── grimorio-rituais.html   # Grimório Oficial de Rituais V20 (Taumaturgia & Necromancia)
│
└── data/                       # 🗄️ Bases de dados oficiais
    ├── qualidades-defeitos-data.js # Base com mais de 130 qualidades/defeitos catalogados
    └── grimorio-rituais-data.js    # Catálogo de rituais com links oficiais da White Wolf Wiki
```

---

## 📜 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

*Vampiro: A Máscara e o Mundo das Trevas são marcas registradas da Paradox Interactive / White Wolf Publishing. Este projeto é uma ferramenta de fã sem fins lucrativos criada para a comunidade de RPG de mesa.*
