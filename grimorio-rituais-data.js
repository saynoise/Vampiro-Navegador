/**
 * GRIMÓRIO OFICIAL DE RITUAIS V20 & 3ª EDIÇÃO (TAUMATURGIA & NECROMANCIA)
 * Fonte: White Wolf Wiki Oficial (Fandom) & Livro de Regras Oficial V20.
 */
const RITUALS_DATA = [
  // ==========================================
  // NÍVEL 1 (LEVEL 1)
  // ==========================================
  {
    name: "Defesa do Refúgio Sagrado",
    nameEn: "Defense of the Sacred Haven",
    level: 1,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "1 Ponto de Sangue do conjurador espalhado nas portas e janelas.",
    desc: "Impede que qualquer luz solar entre no refúgio durante o dia. As janelas e frestas ficam completamente escurecidas por sombras mágicas impenetráveis, permitindo que o vampiro durma em total segurança contra os raios solares.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). Dura enquanto o vampiro permanecer dentro do refúgio.",
    book: "Vampiro: A Máscara V20, pág. 230",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_1_Rituals"
  },
  {
    name: "Despertar com a Frescura da Noite",
    nameEn: "Wake with Evening's Freshness",
    level: 1,
    tradition: "taumaturgia",
    castTime: "30 minutos antes do amanhecer",
    components: "Cinzas de penas de galo queimadas.",
    desc: "Permite ao vampiro despertar instantaneamente e agir sem qualquer torpor, sonolência ou penalidade pelas regras de Humanidade caso seu refúgio seja ameaçado durante o dia.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). Se for bem-sucedido, o vampiro acorda imediatamente diante de qualquer perigo diurno pelas próximas 24 horas.",
    book: "Vampiro: A Máscara V20, pág. 230",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_1_Rituals"
  },
  {
    name: "Sabor de Sangue",
    nameEn: "Taste of Blood",
    level: 1,
    tradition: "taumaturgia",
    castTime: "1 turno (rápido)",
    components: "Uma gota do sangue do alvo.",
    desc: "Ao provar uma gota de sangue, o taumaturgo descobre instantaneamente a quantidade aproximada de sangue no alvo, sua Geração, se é vampiro, mortal ou carniçal, e se cometeu Diablerie recentemente.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). Cada sucesso concede informações mais profundas sobre o sangue provado.",
    book: "Vampiro: A Máscara V20, pág. 230",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_1_Rituals"
  },
  {
    name: "Comunicação com o Senhor",
    nameEn: "Communicate with Sire",
    level: 1,
    tradition: "taumaturgia",
    castTime: "15 minutos",
    components: "Um espelho de prata e um objeto pessoal do senhor.",
    desc: "Permite estabelecer uma conversa telepática e visual em tempo real com o seu Senhor através de uma bacia com água ou espelho de prata encantado, mesmo que ele esteja a centenas de quilômetros.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). Dura 10 minutos por sucesso.",
    book: "Vampiro: A Máscara V20, pág. 230",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_1_Rituals"
  },
  {
    name: "Rito de Apresentação",
    nameEn: "Rite of Introduction",
    level: 1,
    tradition: "taumaturgia",
    castTime: "30 minutos",
    components: "Um incensário e 1 Ponto de Sangue.",
    desc: "Ritual formal que transmite uma mensagem respeitosa ao Regente Tremere da capela local ao adentrar uma nova cidade, informando sua chegada e linhagem sem quebrar a etiqueta do clã.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). O Regente local recebe a mensagem mentalmente.",
    book: "Vampiro: A Máscara V20, pág. 231",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_1_Rituals"
  },
  {
    name: "Incêndio",
    nameEn: "Kindle",
    level: 1,
    tradition: "taumaturgia",
    castTime: "1 turno",
    components: "Um fósforo de enxofre.",
    desc: "Permite ao taumaturgo acender pequenas chamas mágicas (equivalentes a uma tocha ou isqueiro) num estalar de dedos com a ponta do indicador.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). Dura uma cena ou até o vampiro fechar a mão.",
    book: "Vampiro: A Máscara V20, pág. 231",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_1_Rituals"
  },
  {
    name: "Olhos de Penumbra",
    nameEn: "Eyes of the Night",
    level: 1,
    tradition: "taumaturgia",
    castTime: "15 minutos",
    components: "Olhos de coruja ou gato mergulhados em vitae.",
    desc: "Concede visão noturna cristalina em ambientes de escuridão total sem sofrer qualquer penalidade por falta de luz até o amanhecer.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). Dura uma noite completa.",
    book: "Vampiro: A Máscara V20, pág. 231",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_1_Rituals"
  },
  {
    name: "Línguas do Túmulo",
    nameEn: "Call of the Hungry Dead",
    level: 1,
    tradition: "necromancia",
    castTime: "10 minutos",
    components: "Um pedaço de osso humano e um cálice com cinzas.",
    desc: "O necromante sussurra palavras antigas e compele uma aparição próxima a sussurrar segredos e ruídos arrepiantes no ouvido de um alvo, perturbando seu sono e concentração.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 4). A vítima sofre +1 na dificuldade de testes mentais por 24 horas.",
    book: "Vampiro: A Máscara V20 (Necromancia), pág. 165",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Necromancy_(VTM)#Level_1_Rituals"
  },

  // ==========================================
  // NÍVEL 2 (LEVEL 2)
  // ==========================================
  {
    name: "Caminhada de Sangue",
    nameEn: "Blood Walk",
    level: 2,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "1 Ponto de Sangue do alvo e uma adaga de prata.",
    desc: "Rastreia a árvore genealógica de um vampiro. O taumaturgo descobre o Senhor do alvo, o senhor de seu senhor, e traça a linhagem direta até as Gerações ancestrais, identificando laços de sangue e diableries passadas.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 5). Cada sucesso revela uma geração anterior na linhagem.",
    book: "Vampiro: A Máscara V20, pág. 231",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_2_Rituals"
  },
  {
    name: "Olhos do Falcão da Noite",
    nameEn: "Eyes of the Night Hawk",
    level: 2,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "Um pássaro de rapina (coruja, falcão ou corvo).",
    desc: "O feiticeiro alimenta um pássaro com seu sangue e assume o controle visual da criatura, enxergando através de seus olhos enquanto ela sobrevoa a cidade à noite.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 5). O taumaturgo pode controlar o voo da ave até o amanhecer.",
    book: "Vampiro: A Máscara V20, pág. 232",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_2_Rituals"
  },
  {
    name: "Preservação de Sangue",
    nameEn: "Principal Focus of Vitae Infusion",
    level: 2,
    tradition: "taumaturgia",
    castTime: "2 horas",
    components: "Um objeto pequeno e precioso (moeda antiga, joia, anel).",
    desc: "Infunde 1 ponto de sangue do próprio vampiro em um pequeno objeto inanimado. Mais tarde, ao tocar o objeto e quebrá-lo ou ativá-lo, o sangue retorna instantaneamente à reserva do vampiro sem deteriorar.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 5). O objeto armazena o ponto de sangue indefinidamente.",
    book: "Vampiro: A Máscara V20, pág. 232",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_2_Rituals"
  },
  {
    name: "Proteção contra Carniçais",
    nameEn: "Ward Versus Ghouls",
    level: 2,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "1 Ponto de Sangue e um objeto/porta a ser protegido.",
    desc: "Traça uma runa de proteção sobre um objeto ou entrada. Qualquer Carniçal que tocar o objeto sofre 3 dados de dano letal automático e recua em pavor de dor.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 5). Dura até ser descarregado ou apagado.",
    book: "Vampiro: A Máscara V20, pág. 232",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_2_Rituals"
  },
  {
    name: "Garras do Cadáver",
    nameEn: "Claws of the Dead",
    level: 2,
    tradition: "taumaturgia",
    castTime: "30 minutos",
    components: "Unhas arrancadas de um cadáver e 1 Ponto de Sangue.",
    desc: "Torna as unhas do taumaturgo pretas, afiadas e rígidas como obsidiana. Seus ataques desarmados com as mãos passam a causar dano Letal (Força + 1) por uma noite.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 5).",
    book: "Vampiro: A Máscara V20, pág. 233",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_2_Rituals"
  },
  {
    name: "Mãos do Cadáver",
    nameEn: "Grasp of the Ghostly Hands",
    level: 2,
    tradition: "necromancia",
    castTime: "20 minutos",
    components: "Terra de sepultura e vela negra.",
    desc: "Invoca mãos espectrais e frias do submundo que brotam do chão ou das paredes para agarrar, desacelerar ou desarmar um oponente.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 5). As mãos seguram com Força efetiva igual ao número de sucessos obtidos.",
    book: "Vampiro: A Máscara V20 (Necromancia), pág. 166",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Necromancy_(VTM)#Level_2_Rituals"
  },

  // ==========================================
  // NÍVEL 3 (LEVEL 3)
  // ==========================================
  {
    name: "Passagem Incorpórea",
    nameEn: "Incorporeal Passage",
    level: 3,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "Um espelho de mão quebrado e 1 Ponto de Sangue.",
    desc: "Permite ao taumaturgo transformar seu corpo em uma forma espectral e atravessar paredes, portas trancadas e obstáculos sólidos de pedra ou metal sem ser tocado.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 6). O estado incorpóreo dura 1 turno por sucesso.",
    book: "Vampiro: A Máscara V20, pág. 233",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_3_Rituals"
  },
  {
    name: "Proteção contra Lupinos",
    nameEn: "Ward Versus Lupines",
    level: 3,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "Pó de prata pura e 1 Ponto de Sangue.",
    desc: "Cria uma runa protetora mística mortal para Lobisomens. Qualquer metamorfo/lupino que tocar a runa sofre 3 níveis de dano Agravado imediato e é repelido com dor atroz.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 6).",
    book: "Vampiro: A Máscara V20, pág. 233",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_3_Rituals"
  },
  {
    name: "Pavês da Presença Nefasta",
    nameEn: "Pavis of the Foul Presence",
    level: 3,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "Uma fita de seda azul presa ao peito.",
    desc: "Escudo místico que reflete qualquer poder da Disciplina Presença de volta contra quem o lançou. Se um vampiro tentar usar Fascínio, Olhar Aterrorizante ou Majestade em você, ele próprio sofrerá os efeitos do poder!",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 6). Dura uma noite completa.",
    book: "Vampiro: A Máscara V20, pág. 233",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_3_Rituals"
  },
  {
    name: "Fogo no Sangue",
    nameEn: "Fire in the Blood",
    level: 3,
    tradition: "taumaturgia",
    castTime: "1 hora",
    components: "Cinzas de carvão em brasa e 1 Ponto de Sangue.",
    desc: "Faz o sangue de um oponente ferver dentro de suas próprias veias ao ser tocado, causando dor excruciante e infligindo dano letal contínuo turno a turno.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 6). Causa 1 nível de dano Letal não absorvível por turno (duração de turnos igual aos sucessos).",
    book: "Vampiro: A Máscara V20, pág. 234",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_3_Rituals"
  },
  {
    name: "Abraço da Terra",
    nameEn: "Earth's Embrace",
    level: 3,
    tradition: "taumaturgia",
    castTime: "15 minutos",
    components: "1 Ponto de Sangue derramado sobre terra fresca.",
    desc: "Permite ao taumaturgo afundar e repousar dentro da terra sólida como se estivesse usando Fusão com a Terra (Metamorfose 3), protegendo-se da luz do sol e de caçadores durante o dia.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 6).",
    book: "Vampiro: A Máscara V20, pág. 234",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_3_Rituals"
  },
  {
    name: "Ilusão de Morte Serena",
    nameEn: "Sculpting the Cadaver",
    level: 3,
    tradition: "necromancia",
    castTime: "30 minutos",
    components: "Óleos de embalsamamento e agulha de prata.",
    desc: "O necromante molda a carne e o aspecto de um cadáver para mascarar completamente a causa da morte, fazendo uma vítima de mordida vampírica parecer ter falecido pacificamente de causas naturais.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 6). Autópsias comuns não conseguem detectar vestígios sobrenaturais.",
    book: "Vampiro: A Máscara V20 (Necromancia), pág. 167",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Necromancy_(VTM)#Level_3_Rituals"
  },

  // ==========================================
  // NÍVEL 4 (LEVEL 4)
  // ==========================================
  {
    name: "Coração de Pedra",
    nameEn: "Heart of Stone",
    level: 4,
    tradition: "taumaturgia",
    castTime: "3 horas",
    components: "Uma pedra esculpida e uma vela de cera de abelha.",
    desc: "Transmuta o coração do vampiro em pedra maciça. O taumaturgo fica totalmente imune a ser estacado por madeira e ganha +2 dados em testes para resistir a qualquer emoção ou frenesi, porém perde temporariamente 2 pontos em Empatia.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 7). Dura enquanto o feiticeiro desejar.",
    book: "Vampiro: A Máscara V20, pág. 234",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_4_Rituals"
  },
  {
    name: "Proteção contra Vampiros",
    nameEn: "Ward Versus Cainites",
    level: 4,
    tradition: "taumaturgia",
    castTime: "2 horas",
    components: "Cinzas de cinábrio e 1 Ponto de Sangue.",
    desc: "Cria uma runa de proteção suprema contra outros vampiros. Qualquer Membro/Cainita que tocar no objeto protegido sofre 3 níveis de dano Agravado imediato e é repelido com dor insuportável.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 7).",
    book: "Vampiro: A Máscara V20, pág. 235",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_4_Rituals"
  },
  {
    name: "Osso das Mentiras",
    nameEn: "Bone of Lies",
    level: 4,
    tradition: "taumaturgia",
    castTime: "Uma noite inteira",
    components: "Um crânio humano de 200+ anos e 10 Pontos de Sangue.",
    desc: "Encanta um crânio humano antigo. Qualquer indivíduo que segurar o crânio fica magicamente obrigado a dizer apenas a verdade incontestável. Se tentar mentir, o crânio escurece e sua língua queima com dor horrível.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 7). O crânio pode ser usado até 10 vezes.",
    book: "Vampiro: A Máscara V20, pág. 235",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_4_Rituals"
  },
  {
    name: "Sopro Espectral",
    nameEn: "Spectral Breath",
    level: 4,
    tradition: "necromancia",
    castTime: "1 hora",
    components: "Gelo seco e um cálice com sangue de cadáver.",
    desc: "O necromante expira uma névoa espectral congelante do Mundo Inferior que paralisa e congela a essência de fantasmas e aparições, forçando-as a materializarem-se ou fugirem.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 7).",
    book: "Vampiro: A Máscara V20 (Necromancia), pág. 168",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Necromancy_(VTM)#Level_4_Rituals"
  },

  // ==========================================
  // NÍVEL 5 (LEVEL 5)
  // ==========================================
  {
    name: "Abandono dos Grilhões",
    nameEn: "Abandon the Fetters",
    level: 5,
    tradition: "taumaturgia",
    castTime: "Três noites consecutivas de rituais",
    components: "Um pedaço de carne do mestre do laço e sangue sagrado.",
    desc: "Um dos rituais mais temidos e valiosos de todo o clã Tremere: quebra e destrói completamente um Laço de Sangue anterior que escravizava o conjurador ou um aliado voluntário.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 8). Exige 3 sucessos acumulados ao longo das noites. A quebra do laço causa dor excruciante mas liberta a vontade.",
    book: "Vampiro: A Máscara V20, pág. 236",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_5_Rituals"
  },
  {
    name: "Proteção contra Espíritos",
    nameEn: "Ward Versus Spirits",
    level: 5,
    tradition: "taumaturgia",
    castTime: "3 horas",
    components: "Sal marinho consagrado e sangue puro.",
    desc: "Cria uma barreira impenetrável contra entidades astrais, espíritos da Umbra e fantasmas. Qualquer espírito que tentar cruzar a barreira sofre 3 níveis de dano Agravado e é arremessado de volta.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 8).",
    book: "Vampiro: A Máscara V20, pág. 236",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_5_Rituals"
  },
  {
    name: "Fuga para o Refúgio Seguro",
    nameEn: "Escape to a True Sanctuary",
    level: 5,
    tradition: "taumaturgia",
    castTime: "Uma noite inteira para preparar o refúgio; 1 turno para ativar",
    components: "Um círculo rúnico permanente gravado no chão do refúgio.",
    desc: "Em momento de morte iminente ou desespero, o taumaturgo profere uma palavra de comando de emergência e desintegra-se num turbilhão de sombras, teletransportando-se instantaneamente para seu refúgio sagrado.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 8). Requer gastar 3 pontos de Força de Vontade no momento da ativação.",
    book: "Vampiro: A Máscara V20, pág. 236",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_5_Rituals"
  },
  {
    name: "Contrato de Sangue",
    nameEn: "Blood Contract",
    level: 5,
    tradition: "taumaturgia",
    castTime: "3 horas",
    components: "Um pergaminho de pele de cordeiro e sangue de todos os signatários.",
    desc: "Cria um tratado de lealdade indissolúvel escrito com o sangue dos participantes. Caso qualquer um dos signatários quebre uma cláusula do contrato, ele sofre dano Agravado contínuo e imediato até a Morte Final.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 8). O contrato tem força de lei cósmica irrevogável.",
    book: "Vampiro: A Máscara V20, pág. 237",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Thaumaturgy_(VTM)#Level_5_Rituals"
  },
  {
    name: "Pacto da Carne Espectral",
    nameEn: "Grasp of the Ghostly Flesh",
    level: 5,
    tradition: "necromancia",
    castTime: "2 horas",
    components: "Cinzas de cremação de um parente e um espelho negro.",
    desc: "Permite ao necromante materializar temporariamente uma aparição do Mundo Inferior no plano físico com corpo tangível por uma noite completa.",
    system: "Teste de Inteligência + Ocultismo (Dificuldade 8).",
    book: "Vampiro: A Máscara V20 (Necromancia), pág. 169",
    wikiUrl: "https://whitewolf.fandom.com/wiki/Necromancy_(VTM)#Level_5_Rituals"
  }
];
