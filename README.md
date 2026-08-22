# ☥ Ficha Automatizada V20 — Vampiro: A Máscara 🦇

Uma ficha de personagem interativa, automatizada e rica em recursos para **Vampiro: A Máscara (20th Anniversary Edition / V20)**, desenvolvida em JavaScript puro, CSS3 moderno e SVG dinâmico.

![Vampire The Masquerade V20 Sheet Banner](https://img.shields.io/badge/Sistema-V20_%7C_Vampiro%3A_A_M%C3%A1scara-8b0000?style=for-the-badge&logo=tabletop)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Gothic_UI-1572B6?style=for-the-badge&logo=css3)
![Discord Webhook](https://img.shields.io/badge/Discord-Webhook_Integrado-5865F2?style=for-the-badge&logo=discord&logoColor=white)

---

## 📖 Visão Geral

Esta aplicação web foi criada para jogadores e narradores de RPG que desejam uma experiência moderna, imersiva e completa para gerenciar seus Membros. Ela une a elegância visual clássica gótica do Mundo das Trevas com automações avançadas de regras, física interativa de cabos sangüíneos, histórico de rolagens e integração em tempo real com o Discord.

---

## ✨ Principais Funcionalidades

### 🩸 1. Sistema Completo de Regras V20
- **Atributos & Habilidades:** Seleção fluida de bolinhas para Atributos (Físicos, Sociais, Mentais) e Habilidades (Talentos, Perícias, Conhecimentos).
- **Disciplinas & Especializações Dinâmicas:** Adicione, renomeie e remova Disciplinas, Especializações, Antecedentes e Caminhos customizados.
- **Controle de Geração & Sangue Automático:**
  - Suporte dinâmico da **4ª à 15ª Geração**.
  - O tamanho da Parada de Sangue (*Blood Pool*) e o gasto máximo de pontos por turno se ajustam automaticamente de acordo com as tabelas oficiais de Geração do V20.
- **Força de Vontade & Trilha/Humanidade:** Controle de Força de Vontade permanente e caixas de gasto temporário, além de Trilha da Sabedoria / Humanidade com Virtudes associadas.
- **Tabela de Vitalidade & Penalidades:** Controle de dano Contundente (`/`), Letal (`X`) e Agravado (`*`) com cálculo automático de penalidades nos dados (`-1`, `-2`, `-5`, Incapacitado).
- **Controle de Experiência (XP):** Cálculo automático de saldo disponível com base no total adquirido e gasto.
- **Página 2 Completa (Grimório & Detalhes):**
  - Lista de Rituais e Linhas Taumatúrgicas / Necromancia.
  - Campos dedicados para Qualidades & Defeitos, Fraquezas do Clã e Histórico.

---

### 🕸️ 2. Cabos de Ligação Sangüínea (*Blood Link Cables*)
- **Conexão Dinâmica de Traços:** Clique nos nós circulares de um Atributo e de uma Habilidade (ou Disciplina/Especialização) para ligá-los.
- **Física SVG 2D em Tempo Real:** Conexões em curvas Bezier com oscilação física amortecida (*harmonic sway physics*) que reagem suavemente a cada nova ligação.
- **Cálculo Automático da Parada:** A barra inferior de dados calcula a soma dos traços interligados instantaneamente.

---

### 🎲 3. Rolador de Dados V20 Avançado
- **Regras Oficiais:**
  - **Sucessos:** Dados iguais ou maiores que a Dificuldade selecionada.
  - **Críticos (10s):** Contabilizam **2 sucessos** e recebem destaque neon **Ciano**.
  - **Cancelamento por 1s:** Fracassos cancelam sucessos. Caso não haja sucessos e ocorram 1s, declara **Falha Crítica (*Botch*)**.
- **Rerrolagem de Falhas:** Permite rerrolar os dados que falharam com um clique, destacando os dados novos em **dourado**.
- **Somatório e Modificadores:** Ajuste fácil de dificuldade e dados adicionais temporários.

---

### 💬 4. Integração com Discord Webhook (Por Personagem)
- **Envio Automático:** Envia os resultados das rolagens diretamente para o canal do Discord do seu grupo.
- **Embeds Góticos Ricos:**
  - Exibe nome do personagem, clã, nome do jogador, foto/avatar do personagem, traços usados e resultado detalhado.
  - **Cores Dinâmicas:** Ciano para Sucessos Críticos, Verde para Sucessos, Vermelho para Falhas Críticas e Cinza para Falhas Simples.
  - **Edição em Tempo Real (`PATCH`):** Ao rerrolar falhas na ficha, a mensagem no Discord é editada automaticamente com o novo resultado.
- **Emotes Customizados:** Suporte nativo para emojis personalizados do servidor (ex: `<:critico:ID>`, `<:sucesso:ID>`, `<:falha:ID>`, `<:falhacritica:ID>`).
- **Isolamento Total:** Cada personagem da sua lista tem sua própria URL de Webhook independente.

---

### 𝕮 5. Gaveta de Histórico de Rolagens (*Slide-Out Drawer*)
- **Botão Flutuante Gótico:** Aba fixa na lateral direita com o símbolo **`𝕮`** e contador numérico em tempo real.
- **Painel Lateral Deslizante:**
  - Visualização cronológica organizada (mais antigas no topo, mais recentes no fundo com auto-scroll).
  - Exibição de horário exato, traços selecionados, badge de sucesso/crítico/falha, mini-dados individuais coloridos e destaque nos dados rerrolados.
- **Escopo por Personagem:** Cada ficha mantém seu próprio histórico de rolagens gravado no navegador.

---

### 🎨 6. Customizador de Temas & Cores (Por Personagem)
- **Presets Rápidos:**
  - 🩸 *Vermelho (Carmesim)*
  - 🌿 *Verde (Esmeralda)*
  - 🔮 *Roxo (Abissal)*
  - ☀️ *Amarelo (Âmbar)*
- **Ajuste Fino HSL:** Sliders de Matiz, Saturação, Luminosidade de fundo e Ruído de película (*film grain noise*).
- **Sincronização dos Cabos:** Os cabos de ligação de sangue adaptam sua cor e brilho dinamicamente de acordo com o tema do personagem ativo.

---

### 👥 7. Gerenciador Multi-Fichas & Exportação
- **Múltiplos Personagens:** Crie, clone e alterne rapidamente entre personagens no menu superior.
- **Importação/Exportação JSON:** Salve suas fichas em arquivos `.json` locais e compartilhe com seu Narrador ou amigos.
- **Persistência Total:** Tudo é salvo automaticamente no `localStorage` do navegador.
- **Modo de Impressão (@media print):** Estilos limpos para gerar PDF da ficha ou imprimir em papel formato clássico.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e acessível.
- **SVG Dinâmico:** Renderização vetorial dos cabos de sangue e conexões interativas.
- **CSS3 Moderno:** Flexbox, CSS Grid, Glassmorphism, Backdrop Filters, Animações e Variáveis CSS para tematização dinâmica.
- **JavaScript Vanilla (ES6+):** Código limpo, modular, reativo e sem dependências externas pesadas.

---

## 🚀 Como Utilizar

### Executando Localmente

1. Clone o repositório:
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
├── index.html        # Estrutura da ficha, abas, modais, gaveta de histórico e painéis
├── styles.css        # Estilos góticos, tema escuro, variáveis CSS, animações e responsividade
├── app.js            # Lógica das regras V20, física dos cabos, Discord Webhook, dados e storage
└── README.md         # Documentação completa do projeto
```

---

## 📜 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

*Vampiro: A Máscara e o Mundo das Trevas são marcas registradas da Paradox Interactive / White Wolf Publishing. Este projeto é uma ferramenta de fã sem fins lucrativos criada para a comunidade de RPG de mesa.*
