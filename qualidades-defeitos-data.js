/**
 * CATÁLOGO COMPLETO DE QUALIDADES E DEFEITOS (VAMPIRO: A MÁSCARA V20 / 3ª EDIÇÃO)
 * Base de dados integral gerada com base nos livros de regras oficiais e suplementos.
 */
const MERITS_FLAWS_DATA = [
  // ==========================================
  // QUALIDADES FÍSICAS
  // ==========================================
  {
    type: "qualidade",
    category: "fisica",
    name: "Sentido Aguçado",
    points: "1",
    desc: "Um de seus sentidos é excepcionalmente aguçado (visão, audição, paladar, tato ou olfato). As dificuldades de todas as tarefas que envolvem o uso deste sentido aguçado ficam reduzidas em dois pontos. Esta Qualidade pode ser combinada com a Disciplina Auspícios para produzir uma acuidade sensorial sobre-humana.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 296"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Ambidestro",
    points: "1",
    desc: "Você possui um elevado nível de destreza manual, podendo executar tarefas com sua mão \"inábil\" sem sofrer penalidades. Você ainda precisa seguir as regras para execução de ações múltiplas, mas não sofrerá penalidade à dificuldade se, digamos, usar duas armas ou for forçado a usar a mão \"inábil\".",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 296"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Ingerir Comida",
    points: "1",
    desc: "Você tem a capacidade de ingerir comida e até saboreá-la. Embora você não seja capaz de extrair nenhum nutriente ao comer alimentos normais, esta habilidade lhe será útil para manter a Máscara. Naturalmente, você é incapaz de digerir o que come e chegará um momento durante a noite no qual você terá que \"devolver\" o que ingeriu.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 296"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Equilíbrio Perfeito",
    points: "1",
    desc: "Você possui um senso de equilíbrio inato perfeito. Os personagens com esta Qualidade reduzem as dificuldades de seus testes relacionados com equilíbrio (ex: Destreza+Esportes para caminhar sobre uma tábua estreita) em dois pontos.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 296"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Sangue Amargo",
    points: "1",
    desc: "Alguma coisa nos seus genes ou na sua dieta faz seu sangue ter um gosto horrível para vampiros. Nada impede que um sanguessuga se alimente de você só de sacanagem, é claro, mas você é o último infeliz que um vampiro escolheria arbitrariamente para se alimentar.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 27"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Visão Noturna",
    points: "2",
    desc: "Você pode ver perfeitamente durante a noite e você nunca entendeu porque as pessoas tem tanta dificuldade em enxergar só porque está um pouco escuro. Você não sofre qualquer penalidade nos dados enquanto tiver no mínimo luz equivalente a um céu moderadamente estrelado. Quando vai de uma condição de luminosidade brilhante para uma condição escura, seus olhos podem levar um turno ou dois para se adaptar.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 27"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Vigoroso",
    points: "5 (Só para Humanos)",
    desc: "Você não precisa dormir. Seu corpo pode precisar de um descanso por uma hora ou duas por dia, mas você não pode dormir e não precisa disso. As vantagens disso são muitas, mas a primária é a habilidade de lidar tanto com uma vida normal durante o dia quanto durante a noite.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 27"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Rubor de Saúde",
    points: "2",
    desc: "A sua aparência é mais natural e saudável do que a dos outros vampiros, o que lhe permite misturar-se aos humanos com mais facilidade. Você ainda conserva a cor de um mortal vivo e sua pele é apenas um pouco mais fria ao contato.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 296"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Voz Encantadora",
    points: "2",
    desc: "Existe algo em sua voz que os outros simplesmente não conseguem ignorar. Quando você dá ordens, eles se encolhem. Quando seduz, eles se desmancham. Seja trovejante, gentil, persuasiva ou simplesmente ao conversar, sua voz chama a atenção. As dificuldades de todos os testes que envolvam o uso da voz para persuadir, enfeitiçar ou comandar são diminuídas em dois pontos.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Temerário",
    points: "3",
    desc: "Você é bom em assumir riscos e ainda melhor em sobreviver a eles. Sempre que estiverem tentando alguma coisa particularmente arriscada (como saltar de um carro em movimento para outro), os personagens com esta Qualidade acrescentam três dados adicionais à sua jogada e desprezam um resultado de falha crítica num dado que resulte de ações desse tipo. Em geral, essas ações devem corresponder a uma dificuldade de pelo menos 8 e ter potencial de inflingir no mínimo três níveis de dano em caso de fracasso.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Digestão Eficiente",
    points: "3",
    desc: "Você é capaz de extrair mais nutrientes do sangue do que o habitual. Ao alimentar-se você ganha um ponto de sangue a mais para a sua reserva de sangue a cada dois pontos que consumir. Isso não lhe permite exceder o máximo de sua reserva de sangue.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Corpo Grande",
    points: "4",
    desc: "Você é anormalmente grande, medindo talvez mais de dois metros de altura. Além de torná-lo extremamente notório em público, essa massa extra lhe confere um nível de vitalidade Machucado a mais. Os personagens que têm esta Qualidade também podem ganhar bônus para empurrar objetos, abrir portas bloqueadas, evitar ser derrubado etc.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Brigão",
    points: "1",
    desc: "Sua aparência é bárbara o suficiente para inspirar medo ou pelo menos inquietação naqueles que o vêem. Embora não seja necessariamente feio por si, você irradia uma espécie de ameaça silenciosa, ao ponto de fazer com que as pessoas atravessem a rua para não passar a seu lado. A dificuldade de todos os seus testes de Intimidação contra pessoas que ainda não lhe demonstraram superioridade física fica reduzida em 1.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 73"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Fisionomia Amigável",
    points: "1",
    desc: "Você tem um rosto que faz que todos se recordem de alguém, a ponto de fazer com que estranhos estejam inclinados a favorecê-lo por causa disso. Este efeito não desaparece se você explicar o \"mal-entendido\", acarretando em -1 na dificuldade de todos os testes Sociais apropriados (por exemplo, para Sedução, não Intimidação) em que um estranho esteja envolvido. Esta Qualidade só funciona no primeiro encontro.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 73"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Madrugador",
    points: "1",
    desc: "Ninguém sabe dizer o porquê, mas você parece ter a habilidade de precisar de menos descanso que seus companheiros de bando, tendendo a se levantar pelo menos uma hora antes de todo mundo. Você é sempre o primeiro a se levantar e o último a se deitar, mesmo que tenha ficado acordado até o amanhecer. Enquanto seus companheiros ainda estão grogues, você está desperto e alerta.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Nervos Amortecidos",
    points: "4",
    desc: "Seja por algum problema em vida ou resultado inesperado do Abraço, faltam algumas conexões no seu sistema nervoso. Você tem pouquíssimo senso tátil, seja de prazer ou dor. O prejuízo é obvio: um de seus sentidos está seriamente prejudicado (Dif. +3 em testes de Percepção por tato). Porém, todas as penalidades por ferimentos são divididas pela metade (arredondando para baixo); você não sofre penalidade até atingir Ferido Gravemente (-1 dado) e mesmo Aleijado tem apenas -2 dados.",
    source: "Vampiro, a Máscara; Clanbook Malkaviano 3ªed, pág. 65"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Membros de Lagarto",
    points: "1",
    desc: "Com um pouco de esforço, você pode “soltar” partes do seu corpo. Quando um de seus membros estiver preso ou seguro, gaste 1 Ponto de Sangue e faça um teste de Força de Vontade (Dif. 8). Se for bem-sucedido, você pode soltar aquela parte de seu corpo e fugir. Vampiros podem regenerar membros gastando sangue suficiente.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 70"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Dedos Longos",
    points: "1",
    desc: "Seus dedos são anormalmente longos e aracnídeos. Você ganha um dado extra em qualquer teste envolvendo coordenação digital ou para segurar alguma coisa.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 70"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Presas Exageradas",
    points: "1",
    desc: "Você possui dentes enormes, presas salientes que lembram as dos elefantes ou morsas. Elas não podem ser retraídas, mas causam um dado adicional de dano e somam um dado à sua parada de dados de Intimidação.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 70"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Písceo",
    points: "1",
    desc: "Você se sente anormalmente confortável debaixo d’água e prefere nadar a caminhar. Você tem um redutor de -1 na dificuldade em qualquer parada de dados física relacionada a movimento submarino.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 70"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Gosmento",
    points: "1",
    desc: "Como um verme ou molusco, sua pele secreta um muco gosmento. Sua dificuldade para absorver dano de fogo é reduzida em um, e os oponentes que tentarem agarrá-lo precisam conseguir dois sucessos além do normal.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Boca Exagerada",
    points: "2",
    desc: "Você tem um talho detestável onde sua boca deveria estar. Você pode arreganhar os dentes cinco a dez centímetros além do normal e pode sugar até 4 Pontos de Sangue por turno (em vez do limite comum de 3).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Vômito Ejetável",
    points: "2",
    desc: "Você pode ingerir e armazenar comida/bebida para uso posterior, conseguindo ejetar e mirar o vômito com grande precisão (teste de Vigor + Esportes, Dif. 8) para obscurecer a visão de um alvo, fazê-lo escorregar ou passar vergonha.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Couro Duro",
    points: "2",
    desc: "Uma pele grossa e enrugada envolve você. Some um dado extra à absorção de dano (exceto para fogo e luz do sol).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Sangue Repugnante",
    points: "2",
    desc: "O Vitae em suas veias tem um gosto horrível. Quem morder você precisa ter sucesso em Força de Vontade (Dif. 6) ou perde o próximo turno vomitando. Quem tentar cometer Diablerie em você precisa de 3 sucessos em Força de Vontade (Dif. 9).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Patágios",
    points: "4",
    desc: "Asas de couro se dobram para dentro de seu corpo. Com a ajuda de uma corrente ascendente ou vento forte, você pode planar por curtas distâncias na velocidade de caminhada normal.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 72"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Cara de Mau",
    points: "5",
    desc: "Seu rosto é horrendo, mas pode passar por um humano Realmente Feio. Você pode andar em meio à sociedade mortal com precauções sem quebrar a Máscara automaticamente.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 72"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Gosto Apurado",
    points: "2 (Exclusivo Tremere)",
    desc: "Ao experimentar sangue, você sente naturalmente correspondências sutis e ocultas, vislumbrando automaticamente um fator sobre a fonte como pelo poder Nível 1 da Trilha do Sangue, sem gastar sangue ou fazer teste.",
    source: "Vampiro, a Máscara; Clanbook Tremere 3ªed, pág. 66"
  },
  {
    type: "qualidade",
    category: "fisica",
    name: "Tolerância à Dor",
    points: "2 (Tzimisce)",
    desc: "Você ignora um dado de penalidade por ferimentos: quando Machucado ou Ferido, você não sofre penalidades (exige 3+ em Convicção ou Coragem).",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 69"
  },

  // ==========================================
  // QUALIDADES MENTAIS
  // ==========================================
  {
    type: "qualidade",
    category: "mental",
    name: "Bom Senso",
    points: "1",
    desc: "Você tem sabedoria prática cotidiana. Sempre que seu personagem estiver a ponto de agir de modo contrário ao bom senso, o Narrador pode fazer sugestões ou avisá-lo das implicações.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Concentração",
    points: "1",
    desc: "Você tem a habilidade de focalizar sua mente e desligar-se de qualquer distração. Você não é afetado por penalidades de distrações (ruídos altos, luzes estroboscópicas, etc).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Noção Exata do Tempo",
    points: "1",
    desc: "Você tem uma noção inata de tempo e é capaz de estimar a passagem das horas e minutos com exatidão sem relógios.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Código de Honra",
    points: "2",
    desc: "Você segue um código de ética rigoroso. Ganha dois dados adicionais em todos os testes de Força de Vontade e Virtude quando estiver agindo de acordo com seu código ou evitando violá-lo.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Memória Eidética",
    points: "2",
    desc: "Você se lembra com perfeição de detalhes de coisas vistas ou ouvidas (documentos, conversas, fotos) com o mínimo esforço.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Sono Leve",
    points: "2",
    desc: "Você acorda instantaneamente ao menor sinal de problema sem hesitação, podendo ignorar restrições de Humanidade/Trilha sobre dados disponíveis para agir durante o dia.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Linguista Nato",
    points: "2",
    desc: "Você tem facilidade excepcional para idiomas e adiciona três dados a todas as paradas de dados envolvendo línguas faladas ou escritas.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Temperamento Calmo",
    points: "3",
    desc: "Você é naturalmente sereno e recebe dois dados extras em todas as tentativas de resistir ao frenesi (Brujah não podem comprar).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Vontade de Ferro",
    points: "3",
    desc: "Quando focado, nada o afasta de seus objetivos. Pode gastar 1 ponto de Força de Vontade para cancelar um poder de Dominação e ganha 3 dados extras para resistir a magias ou feitiços mentais.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Frieza Lógica",
    points: "1",
    desc: "Aptidão para separar fatos de histeria emocional; a dificuldade de todos os testes de Sentir Dissimulação e similares diminui em 1.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Conhecimento Proveitoso",
    points: "1",
    desc: "Perito em um campo específico que atrai a atenção e patrocínio temporário de um Membro ancião (funciona como Mentor 1 temporário).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Aptidão com Computadores",
    points: "2",
    desc: "Computadores e tecnologia são intuitivos para você; a dificuldade de todos os testes envolvendo informática diminui em 2.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Precoce",
    points: "3",
    desc: "Você aprende rápido: o tempo necessário para aprender uma Habilidade e o custo em pontos de experiência são cortados pela metade.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Introspecção",
    points: "1",
    desc: "Conhecimento profundo dos motivos subconscientes das pessoas. Adicione dois dados a testes de Percepção contra quem tiver a mesma Natureza ou Comportamento que você.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Misericordioso",
    points: "4",
    desc: "Caráter moral dos Brujah ancestrais. Se falhar em Consciência, pode gastar 1 Força de Vontade para repetir o teste com Dif. +1 (uma vez por teste).",
    source: "Vampiro, a Máscara; Clanbook Brujah 3ªed, pág. 68"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Senso Climático",
    points: "1",
    desc: "Sente inconscientemente a aproximação de tempestades e mau tempo com várias horas de antecedência (Percepção + Sobrevivência, Dif. 7).",
    source: "Vampiro, a Máscara; Clanbook Lasombra 3ªed, pág. 63"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Harmonia Pelágica",
    points: "3",
    desc: "Estar próximo ao mar acalma e fortalece seu Autocontrole. Testes de Força de Vontade feitos no mar ou com o oceano à vista têm Dif. -1.",
    source: "Vampiro, a Máscara; Clanbook Lasombra 3ªed, pág. 64"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Temperamento de Dracon",
    points: "3",
    desc: "Psique mutável: no início de cada história você pode escolher um Arquétipo de Personalidade para funcionar como sua Natureza, alterando como recupera Força de Vontade.",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 69"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Afinidade com o Refúgio",
    points: "3",
    desc: "Conectado misticamente ao solo de seu refúgio principal (+1 dado em todas as ações lá). Funciona como farol para encontrá-lo com Percepção + Sobrevivência (Dif. 6).",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 69"
  },
  {
    type: "qualidade",
    category: "mental",
    name: "Encarar as Chamas",
    points: "3",
    desc: "Menos suscetível ao pânico cego diante do fogo; recebe dois dados extras para testes de Rötschreck.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 81"
  },

  // ==========================================
  // QUALIDADES SOCIAIS
  // ==========================================
  {
    type: "qualidade",
    category: "social",
    name: "Prole",
    points: "2",
    desc: "O jogador pode ter outro jogador como prole (cria), com quantia proporcional de XP a menos e vínculo narrativo de prelúdio/mentor.",
    source: "Regra de Crônica / Livro do Jogador"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Senhor de Prestígio",
    points: "1",
    desc: "Seu senhor possui grande Status na seita ou clã, conferindo prestígio automático a você ao lidar com anciões e neófitos.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Líder Nato",
    points: "1",
    desc: "Magnetismo inato; confere dois dados extras em testes de Liderança (exige Carisma 3+).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Dívida de Gratidão",
    points: "1 a 3",
    desc: "Um ancião lhe deve gratidão por algo feito no passado (1 ponto = favor menor; 3 pontos = deve a própria não-vida).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Frequentador do Elísio",
    points: "1",
    desc: "Passa muito tempo nos Elísios da cidade; membros influentes e hárpias conhecem seu nome e reputação.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Ex-Carniçal",
    points: "1",
    desc: "Longa vivência como carniçal antes do Abraço; dificuldade de testes Sociais e conhecimento da Família reduzida em 1 entre neófitos.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Inofensivo",
    points: "1",
    desc: "Todos sabem que você não representa ameaça; ninguém perde tempo tramando contra você, garantindo relativa segurança.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 75"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Protegido",
    points: "1",
    desc: "Seu senhor o recomendou amplamente; dificuldade dos testes Sociais com quem ouviu falar bem de você diminui em 1.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 75"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Reputação",
    points: "1",
    desc: "Sua fama excedeu sua seita; todos conhecem seu nome e seus feitos notórios.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 75"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Veterano",
    points: "1",
    desc: "Sobreviveu a ataques do Sabá; dificuldade de testes de Percepção contra emboscadas do Sabá reduzida em 1.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 75"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Favor",
    points: "1 a 6",
    desc: "Alguém lhe deve um favor de magnitude proporcional ao custo em pontos (desde um neófito até o próprio Príncipe).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 75"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Valentão",
    points: "2",
    desc: "Faz parte do pelotão do xerife para trabalho pesado; ganha confiança dos líderes e certa vista grossa para infrações menores.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 75"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Velho Companheiro",
    points: "2",
    desc: "Um amigo mortal foi Abraçado na mesma época e serve como Aliado muito fiel e confidente.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 75"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Peregrino",
    points: "2",
    desc: "Conhecimento profundo de rotas e refúgios seguros entre cidades sem atrair atenção de Lupinos ou da polícia.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Informações Sobre o Inimigo",
    points: "2",
    desc: "Especialista nos costumes de um inimigo da Camarilla (-2 na dificuldade em testes contra ele).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Informações Alheias",
    points: "2",
    desc: "Funciona como Informações Sobre o Inimigo, mas voltado a grupos neutros ou independentes.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Amigo do Xerife",
    points: "2",
    desc: "O xerife gosta de você e tolera transgressões menores, fornecendo avisos antecipados sobre operações da cidade.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Domínio",
    points: "2 a 4",
    desc: "Direito exclusivo concedido pelo Príncipe sobre um território de caça na cidade proporcional aos pontos gastos.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Identidade Alternativa",
    points: "3",
    desc: "Segunda identidade sólida e acreditável para infiltrar-se em outros grupos ou seitas vampíricas.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Conhecedor Subterrâneo",
    points: "3",
    desc: "Você conhece os túneis e esgotos da cidade (não-Nosferatu); testes no submundo têm dificuldade reduzida em 1.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Informante",
    points: "3",
    desc: "Possui um contato infiltrado em outra seita fornecendo relatórios confidenciais.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Estrela Ascendente",
    points: "3",
    desc: "Neófito promissor na Camarilla; dificuldade de testes Sociais com membros que apoiam sua ascensão diminui em 1.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Posto na Camarilla",
    points: "3 a 5 (Só Ancillae)",
    desc: "Detém um cargo oficial formal na estrutura da Camarilla na cidade.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Amigo de um Clã",
    points: "4",
    desc: "Carinho e respeito especial de outro clã; dificuldade de testes Sociais com membros daquele clã diminui em 2.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Laços Quebrados",
    points: "4",
    desc: "Conseguiu quebrar secretamente um Laço de Sangue anterior sem que seu antigo mestre saiba.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Amigo da Primigênie",
    points: "4",
    desc: "Consultado com frequência pelo conselho da cidade; suas recomendações têm grande peso político.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Hárpia",
    points: "5 (Só Ancillae)",
    desc: "Integrante oficial do círculo de hárpias do Elísio; dita o prestígio social da cidade.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 76"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Primógeno",
    points: "7",
    desc: "Líder e representante oficial de seu clã no conselho governante da cidade.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Santidade",
    points: "2",
    desc: "Efeito auréola: todos o consideram puro e inocente, inspirando confiança e recebendo punições brandas.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Personalidade Dinâmica",
    points: "5",
    desc: "Permite comprar Antecedentes adicionais com XP ao final das histórias (2 XP por ponto em Aliados, Contatos, Rebanho, Lacaios).",
    source: "Vampiro, a Máscara; Clanbook Brujah 3ªed, pág. 68"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Companheiro Réptil",
    points: "3",
    desc: "Criou e treinou um jacaré carniçal albino de inteligência aguçada que patrulha seus esgotos e obedece ordens.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Abraçado sem a Taça",
    points: "3 (Tremere)",
    desc: "Seu Abraço dispensou o ritual da Transubstanciação dos Sete; você não possui passos no Laço com o Conselho dos Sete.",
    source: "Vampiro, a Máscara; Clanbook Tremere 3ªed, pág. 67"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Luminar",
    points: "6 (Ventrue)",
    desc: "Pode exceder em 1 ponto o limite de um Antecedente específico acima do teto estabelecido pela sua Geração.",
    source: "Vampiro, a Máscara; Clanbook Ventrue 3ªed, pág. 77"
  },
  {
    type: "qualidade",
    category: "social",
    name: "Contato Sobrenatural",
    points: "3",
    desc: "Mantém uma relação de trégua e troca de favores com um lobisomem, mago, fada ou outro ser sobrenatural.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 81"
  },

  // ==========================================
  // QUALIDADES SOBRENATURAIS
  // ==========================================
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Aura Enganosa",
    points: "1",
    desc: "Sua aura tem brilho e coloração de um mortal comum; leituras de aura o revelam como humano.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Médium",
    points: "2",
    desc: "Afinidade natural para sentir e ouvir espíritos e fantasmas, podendo invocá-los para aconselhamento.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Resistência a Magia",
    points: "2",
    desc: "Resistência natural a rituais e feitiços (+2 na dificuldade de mágicas direcionadas a você; não pode aprender Taumaturgia).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Habilidade Oracular",
    points: "3",
    desc: "Capacidade de ver e interpretar presságios e visões místicas sobre o futuro (Percepção + Ocultismo).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Mentor Espiritual",
    points: "3",
    desc: "Guia espiritual que o acompanha e aconselha em situações críticas.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Imunidade ao Laço de Sangue",
    points: "3",
    desc: "Você é totalmente imune a formar Laço de Sangue (Tremeres não podem possuir).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Sorte",
    points: "3",
    desc: "Pode repetir três testes fracassados por crônica (incluindo falhas críticas), uma vez por teste.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 301"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Amor Verdadeiro",
    points: "4",
    desc: "Amor mortal profundo que lhe garante um sucesso automático em todos os testes de Força de Vontade.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 301"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Nove Vidas",
    points: "6",
    desc: "Quando sofrer a Morte Final em um teste, refaça o teste; se tiver sucesso, sobrevive gastando 1 de suas 9 vidas.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 301"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Fé Verdadeira",
    points: "7",
    desc: "Fé profunda em Deus; inicia com 1 ponto de Fé Verdadeira (+1 dado em testes de Força de Vontade e Virtudes; exige Humanidade 9+).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 301"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Toque de Cura",
    points: "1",
    desc: "Fecha os ferimentos que causa com um simples toque, sem precisar lamber.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Inofensivo aos Animais",
    points: "1",
    desc: "Animais não se assustam nem fogem instintivamente de sua presença.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Diablerie Oculta",
    points: "3",
    desc: "As listras negras causadas por Diablerie não aparecem na sua aura quando examinada por Auspícios.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Disciplina Adicional",
    points: "5",
    desc: "Permite escolher mais uma Disciplina comum e tratá-la como se fosse nativa de seu clã para custos de XP.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Reconhecimento Vampírico",
    points: "3",
    desc: "Consegue reconhecer um vampiro a 10 passos de distância por sinais sutis da natureza morta-viva.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 27"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Resistência Consanguínea",
    points: "1 (Giovanni)",
    desc: "Não pode sofrer Laço de Sangue de membros de sua própria linhagem mortal Giovanni.",
    source: "Vampiro, a Máscara; Clanbook Giovanni 3ªed, pág. 77"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Beijo de Procuração",
    points: "4 (Giovanni)",
    desc: "Recebeu o Beijo tradicional Giovanni antes do Abraço: ganha 1 ponto extra em Potência (e Laço parcial com um anziani).",
    source: "Vampiro, a Máscara; Clanbook Giovanni 3ªed, pág. 77"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Incongruência Sanguínea",
    points: "5 (Giovanni)",
    desc: "Atavismo raro: seu Beijo não causa dor letal desproporcional da Maldição de Lamia, embora sua pele fique perpetuamente cadavérica.",
    source: "Vampiro, a Máscara; Clanbook Giovanni 3ªed, pág. 78"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Visão Tenebrosa Controlável",
    points: "2 (Lasombra)",
    desc: "Pode inverter voluntariamente percepções de luz e sombras (escuridão vira luz e vice-versa).",
    source: "Vampiro, a Máscara; Clanbook Lasombra 3ªed, pág. 63"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Aura Imaculada",
    points: "1 (Malkaviano)",
    desc: "Sua aura não deixa transparecer sua loucura, mantendo-se estável mesmo em frenesi ou colapso.",
    source: "Vampiro, a Máscara; Clanbook Malkaviano 3ªed, pág. 64"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Sangue Benevolente",
    points: "1 (Malkaviano)",
    desc: "Seus carniçais não sofrem risco de adquirir perturbações ao beber seu sangue.",
    source: "Vampiro, a Máscara; Clanbook Malkaviano 3ªed, pág. 64"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Mentor Incorpóreo",
    points: "5 (Malkaviano)",
    desc: "Guia que habita dentro de sua mente e tem acesso à Rede de Loucura do clã.",
    source: "Vampiro, a Máscara; Clanbook Malkaviano 3ªed, pág. 65"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Ligação Recíproca",
    points: "5",
    desc: "Se alguém criar um Laço de Sangue com você, essa pessoa também fica automaticamente laçada a você.",
    source: "Vampiro, a Máscara; Clanbook Malkaviano 3ªed, pág. 66"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Dormir Invisível",
    points: "2 (Nosferatu)",
    desc: "Pode usar Ofuscação para permanecer oculto de mortais enquanto dorme de dia (gasta 1 ponto de sangue extra).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Reflexo Falso",
    points: "3 (Nosferatu)",
    desc: "Com Máscara das Mil Faces, seu disfarce engana câmeras, gravações de vídeo, fotos e aparelhos de áudio.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 71"
  },
  {
    type: "qualidade",
    category: "sobrenatural",
    name: "Disciplinas Revenantes",
    points: "3 (Tzimisce)",
    desc: "Mantém as 3 Disciplinas de sua família revenante mortal e as aprende como se fossem de clã.",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 69"
  },

  // ==========================================
  // DEFEITOS FÍSICOS
  // ==========================================
  {
    type: "defeito",
    category: "fisica",
    name: "Cheiro do Túmulo",
    points: "1",
    desc: "Você exala um odor de umidade e terra recém-revolvida que nenhum perfume mascara; +1 na dificuldade de testes Sociais com mortais.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Estatura Baixa",
    points: "1",
    desc: "Mede 1,50m ou menos; velocidade de corrida é a metade da humana normal e tem dificuldade de manipular objetos.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Deficiência Auditiva",
    points: "1",
    desc: "Audição deficiente; +2 na dificuldade em todas as jogadas que envolvem audição.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "14ª Geração",
    points: "2",
    desc: "Criado por membro de 13ª geração; possui 10 pontos de sangue mas apenas 8 utilizáveis para curar/ativar disciplinas. Não pode ter Status.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Mordida Infecciosa",
    points: "2",
    desc: "Não pode fechar feridas de alimentação lambendo-as; chance de 1 em 5 da mordida infeccionar a vítima gravemente.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Deficiência Visual",
    points: "1 ou 3",
    desc: "Visão deficiente (+2 na dificuldade de testes visuais). Por 1 ponto pode ser corrigida com óculos; por 3 pontos é incurável.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Caolho",
    points: "2",
    desc: "Possui apenas um olho (+2 em Percepção visual, +1 em noção de profundidade e combate à distância).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Desfigurado",
    points: "2",
    desc: "Desfiguração horrível (+2 na dificuldade de testes sociais; Aparência máxima 2).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Criança",
    points: "3",
    desc: "Abraçado quando criança (5 a 10 anos); Força e Vigor limitados a 2 e +2 na dificuldade para controlar adultos mortais (requer Estatura Baixa).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Deformidade",
    points: "3",
    desc: "Deformidade física severa (ex: corcunda, membro atrofiado) que reduz Destreza em 2 e aumenta dificuldade de perícias sociais em 1.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Aleijado",
    points: "3",
    desc: "Pernas danificadas; caminha com muletas/bengala a 1/4 da velocidade e é incapaz de correr.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Monstruoso",
    points: "3",
    desc: "Aparência igual a zero; reflete a Besta exteriorizada em forma animalesca horrenda.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Ferimento Permanente",
    points: "3",
    desc: "Acorda toda noite no nível de vitalidade Ferido, precisando gastar sangue para curar.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Cura Demorada",
    points: "3",
    desc: "Exige 2 pontos de sangue por nível de dano normal curado, e dano agravado leva 5 dias por nível.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Vício",
    points: "3",
    desc: "Viciado em substância (álcool, drogas, adrenalina) que precisa estar presente no sangue das vítimas para saciá-lo.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 297"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Mudo",
    points: "4",
    desc: "Incapaz de emitir sons vocais ou falar.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Sangue Fraco",
    points: "4",
    desc: "Custos de sangue dobrados para curar ou ativar poderes; incapaz de criar Laço de Sangue e apenas 20% de sucesso em Abraços.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Portador de Doença Contagiosa",
    points: "4",
    desc: "Sangue infectado com enfermidade letal; precisa gastar 1 ponto de sangue extra a cada noite ao acordar.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Surdez",
    points: "4",
    desc: "Totalmente surdo; +3 na dificuldade de muitos testes de Prontidão.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Pele Cadavérica",
    points: "5",
    desc: "A pele não se regenera com perfeição, mantendo cortes, cicatrizes e orifícios de bala sofridos.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Cegueira",
    points: "6",
    desc: "Totalmente cego; +2 na dificuldade em todas as ações de Destreza.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 298"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Tique Nervoso",
    points: "1",
    desc: "Movimento repetitivo quando tenso (tosse crônica, estalar dedos); custa 1 Força de Vontade para reprimir.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 73"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Mordida Entorpecida",
    points: "2",
    desc: "Presas atrofiadas; precisa do dobro de sucessos para penetrar ou precisa cortar as vítimas com facas.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 73"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Ferimento Exposto",
    points: "2 ou 4",
    desc: "Ferimento que sangra constantemente (+1 ponto de sangue perdido por noite). Por 4 pontos inclui mutilação severa.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 73"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Presas Permanentes",
    points: "3",
    desc: "Presas não se retraem; ameaça constante à Máscara e Aparência limitada a 3.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 73"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Olhos Incandescentes",
    points: "3",
    desc: "Olhos brilhantes que causam +1 em testes de visão, +2 em Furtividade na escuridão e -1 em Intimidação.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Vulnerabilidade a Prata",
    points: "2",
    desc: "Prata causa dano agravado como se fosse fogo e sol.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Preguiçoso",
    points: "3",
    desc: "Evita qualquer esforço; +1 na dificuldade de ações físicas espontâneas e combate sem planejamento.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Vitae Infértil",
    points: "5",
    desc: "Qualquer um que tente Abraçar morre; sangue não cria crias nem carniçais e não serve para Vaulderie.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Insônia",
    points: "2",
    desc: "Dificuldade extrema para dormir durante o dia; +2 na dificuldade de testes de Percepção.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 28"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Baixa Tolerância a Dor",
    points: "2",
    desc: "Penalidade adicional de -1 em todos os níveis de ferimento a partir de Machucado.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 28"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Congênito",
    points: "1 a 5 (Giovanni)",
    desc: "Problemas congênitos decorrentes de endogamia familiar, variando de traços visuais (1 pt) a paralisias e perturbações graves (5 pts).",
    source: "Vampiro, a Máscara; Clanbook Giovanni 3ªed, pág. 78"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Dentes Rombudos",
    points: "1 (Nosferatu)",
    desc: "Dentes quadrados e cegos; precisa mastigar e obter sucesso extra para causar dano de mordida.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 72"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Fedor",
    points: "1 (Nosferatu)",
    desc: "Odor horripilante que afasta até outros Nosferatu (-2 em Furtividade contra quem tiver olfato).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 72"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Anosmia",
    points: "1 (Nosferatu)",
    desc: "Não possui olfato nem paladar.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 72"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Infestação Parasitária",
    points: "2 (Nosferatu)",
    desc: "Larvas, mosquitos e sanguessugas vivem em sua pele; perde sangue toda noite para os parasitas e +1 na dificuldade de Autocontrole.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 73"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Perna Atrofiada",
    points: "3 (Nosferatu)",
    desc: "Uma perna não funciona direito (-3 dados em movimento e metade da velocidade).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 73"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Putrescência",
    points: "4 (Nosferatu)",
    desc: "Corpo apodrece perpetuamente (-1 dado para absorver dano; choque violento exige teste de Vigor para pedaços não caírem).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 74"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Escarificado",
    points: "2 ou 4 (Tzimisce)",
    desc: "Carne cura em forma de cicatrizes grossas que aumentam dificuldade social em +1 (por 2 pts) e Destreza em +1 (por 4 pts).",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 70"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Consumo",
    points: "5 (Tzimisce)",
    desc: "Bactéria carnívora consome seu corpo: sofre 1 dano de contusão incurável por noite e precisa devorar 1/10 do seu peso em carne humana.",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 70"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "15ª Geração",
    points: "4",
    desc: "Vitae ultra fraca: apenas 6 pontos de sangue utilizáveis com custo dobrado. Luz solar causa dano letal em vez de agravado.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "fisica",
    name: "Sem Presas",
    points: "2",
    desc: "Abraço sem presas: precisa de facas ou seringas para abrir ferimentos e sugar sangue.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 79"
  },

  // ==========================================
  // DEFEITOS MENTAIS
  // ==========================================
  {
    type: "defeito",
    category: "mental",
    name: "Sono Pesado",
    points: "1",
    desc: "Muito difícil acordá-lo durante o dia (+2 na dificuldade de testes para despertar).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Pesadelos",
    points: "1",
    desc: "Pesadelos horríveis ao acordar exigem teste de Força de Vontade (Dif. 7) ou perde 1 dado em todas as ações da noite.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Fobia",
    points: "2",
    desc: "Medo irracional de um objeto ou situação específica (aranhas, alturas, fogo); exige teste de Coragem.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Exclusão de Presa",
    points: "1",
    desc: "Recusa-se a alimentar de certo tipo de mortal (policiais, crianças, drogas); alimentar-se acidentalmente causa frenesi.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Timidez",
    points: "1",
    desc: "Extrema dificuldade social com estranhos (+2 na dificuldade, ou +3 se for o centro das atenções).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Coração Mole",
    points: "1",
    desc: "Não suporta ver sofrimento ou causar dor física a menos que passe em Força de Vontade Dif. 8 (Humanidade 7+).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Dificuldade de Fala",
    points: "1",
    desc: "Gagueira ou problema de dicção (+2 na dificuldade de comunicação verbal).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Bairrismo",
    points: "2",
    desc: "Apego obsessivo a seu território; invasão de outro vampiro exige teste para não entrar em frenesi territorial.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Cabeça Quente",
    points: "2",
    desc: "Irrita-se com facilidade; +2 na dificuldade para evitar frenesi (Brujah não podem comprar).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Vingança",
    points: "2",
    desc: "Obsessão em se vingar de um indivíduo ou grupo; exige gastar Força de Vontade para adiar a vingança.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Amnésia",
    points: "1",
    desc: "Incapaz de recordar qualquer coisa de seu passado mortal ou família.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 299"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Lunático",
    points: "2",
    desc: "Fases da lua aumentam a dificuldade para evitar frenesi (+1 crescente, +2 minguante, +3 cheia).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Vontade Fraca",
    points: "3",
    desc: "Altamente suscetível a Dominação e intimidação; Força de Vontade nunca pode exceder 4.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Consumo Conspícuo",
    points: "4",
    desc: "Acredita que precisa devorar o coração e órgãos da vítima além de beber sangue (exige Ingerir Comida).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Impaciente",
    points: "1",
    desc: "Incapaz de esperar parado; precisa passar em Autocontrole para não agir precipitadamente.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Teimoso",
    points: "1",
    desc: "Expressa publicamente que a Máscara é desnecessária, atraindo suspeitas dos anciões.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Estereótipo",
    points: "2",
    desc: "Age como vampiro de cinema (capa, sotaque); +2 em testes sociais com outros Membros e risco à Máscara.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Sede de Inocência",
    points: "2",
    desc: "Visão de inocência incita fome incontrolável; teste Autocontrole para não entrar em frenesi.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Vítima da Máscara",
    points: "2",
    desc: "Recusa-se a acreditar que é vampiro, procurando explicações biológicas para sua sede.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Culpa Destruidora",
    points: "4",
    desc: "Culpa profunda por beber sangue; teste Consciência Dif. 7 a cada alimentação para não entrar em frenesi.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 74"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Flashbacks",
    points: "6",
    desc: "Comportamento instável; teste de Força de Vontade no início da sessão ou Força de Vontade é reduzida a 1.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Iludido",
    points: "2",
    desc: "Conhecimento sobre o sobrenatural completamente errado e repleto de mitos falsos.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 28"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Incontrolável",
    points: "5 (Brujah)",
    desc: "Predisposição extrema à fúria; dificuldade para resistir ao frenesi é sempre 10.",
    source: "Vampiro, a Máscara; Clanbook Brujah 3ªed, pág. 69"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Chamado de Poseidon",
    points: "1 (Lasombra)",
    desc: "Autocontrole varia com o mar (+1 dificuldade em tempestades, +3 em furacões).",
    source: "Vampiro, a Máscara; Clanbook Lasombra 3ªed, pág. 64"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Compulsão Pelágica",
    points: "2 (Lasombra)",
    desc: "Agitação em terra firme; +1 na dificuldade de testes de Força de Vontade após 24h longe do mar.",
    source: "Vampiro, a Máscara; Clanbook Lasombra 3ªed, pág. 64"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Hemético",
    points: "4",
    desc: "Aversão a beber sangue: teste de Vigor (Dif. 8) para não vomitar todo o sangue consumido.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Encontro Compulsivo",
    points: "2 (Superstição)",
    desc: "Compulsão folclórica de contar grãos ou objetos idênticos ao se deparar com eles (teste Força de Vontade).",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 79"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Repulsa a Rosas Selvagens",
    points: "1 (Superstição)",
    desc: "Repelido por raminhos de rosas selvagens, celidônias ou espinheiros.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 79"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Fetiche ao se Alimentar",
    points: "1 (Superstição)",
    desc: "Compelido a morder apenas uma parte específica do corpo da vítima (ex: sola dos pés).",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 79"
  },
  {
    type: "defeito",
    category: "mental",
    name: "Fetiche de Poder",
    points: "3 (Superstição)",
    desc: "Acredita que seus poderes dependem de um objeto específico (sem ele, exige Força de Vontade Dif. 8 para usar Disciplinas).",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 79"
  },

  // ==========================================
  // DEFEITOS SOCIAIS
  // ==========================================
  {
    type: "defeito",
    category: "social",
    name: "Senhor Indigno",
    points: "1",
    desc: "Seu senhor era detestado pelos Membros da cidade; você herda esse desprezo.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "social",
    name: "Segredo Sombrio",
    points: "1",
    desc: "Segredo embaraçoso que, se descoberto, o tornaria um pária ou condenado.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "social",
    name: "Identidade Trocada",
    points: "1",
    desc: "Parecido com outro vampiro criminoso ou com péssima reputação, gerando confusões perigosas.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "social",
    name: "Ressentimento do Senhor",
    points: "1",
    desc: "Seu senhor o odeia e trabalha ativamente nos bastidores para arruiná-lo.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "social",
    name: "Inimigo",
    points: "1 a 5",
    desc: "Possui um inimigo que busca destruí-lo (de um neófito vingativo a um Matusalém).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "social",
    name: "Caçado",
    points: "4",
    desc: "Perseguido por caçador de bruxas mortal fanático e perigoso.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "social",
    name: "Membro de Seita sob Observação",
    points: "4",
    desc: "Desertor de outra seita tratado com desconfiança e hostilidade constante.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 300"
  },
  {
    type: "defeito",
    category: "social",
    name: "Apresentação Desastrosa",
    points: "1",
    desc: "Estragou sua apresentação ao Príncipe; exige teste de Força de Vontade para não fugir de vergonha.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Dispensável",
    points: "1",
    desc: "Alguém no poder o coloca em missões suicidas \"pelo bem da seita\" sem remorso.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Compreensão Falha",
    points: "1",
    desc: "Não entende bem o funcionamento da Máscara e das Tradições da Camarilla.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Recém-Chegado",
    points: "1",
    desc: "Novo na cidade; não conhece as alianças, rivalidades e etiqueta local.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Novato",
    points: "1",
    desc: "O Abraçado mais recente da cidade; neófitos aproveitam para demonstrar superioridade (+1 na Dif. social).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Alvo de Recrutamento",
    points: "1",
    desc: "O Sabá está determinado a recrutá-lo e manda bandos de coerção nas piores horas.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Simpatizante",
    points: "1",
    desc: "Expressou simpatia pelos ideais do Sabá, levantando suspeitas de traição.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Unido ao Sangue",
    points: "2",
    desc: "Preso por Laço de Sangue a outro vampiro, perdendo sua autonomia de vontade.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Joguete",
    points: "2",
    desc: "Fez trabalho sujo para um líder e agora é considerado uma ponta solta perigosa a ser eliminada.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Pretendente Fugaz",
    points: "2",
    desc: "Alguém Abraçou seu alvo mortal antes de você; fúria (+2 na Dif. de frenesi) na presença do rival.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Fracassado",
    points: "2",
    desc: "Fracassou vergonhosamente em um cargo oficial e agora é tido como incompetente por todos.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Infrator da Máscara",
    points: "2",
    desc: "Cometeu infração da Máscara no passado e deve um favor perpétuo a quem acobertou.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Chamas do Passado",
    points: "2",
    desc: "Amigo querido do passado está na seita inimiga, dificultando agir contra ele.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 77"
  },
  {
    type: "defeito",
    category: "social",
    name: "Senhores Rivais",
    points: "2",
    desc: "Dois vampiros disputavam para Abraçá-lo; o perdedor busca vingança contra você.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Presunçoso",
    points: "2",
    desc: "Arrogante com seu status; atrai antipatia e +2 na dificuldade em testes Sociais.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Desgraça para o Sangue",
    points: "3",
    desc: "Seu senhor o considera um terrível erro e faz questão de humilhá-lo nos Elísios.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Ex-Príncipe",
    points: "3",
    desc: "Já governou uma cidade; o atual Príncipe o enxerga como rival perigoso.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Caçado como um Cão",
    points: "3",
    desc: "Perseguido implacavelmente por outra seita ou clã para extermínio.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Dedo-Duro",
    points: "3",
    desc: "Fama de informante do xerife; odiado pelos demais membros (+1 na Dif. Social).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Dormindo com o Inimigo",
    points: "3",
    desc: "Relacionamento proibido com membro de seita hostil que acarretaria pena de morte se descoberto.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Inimigo de um Clã",
    points: "4",
    desc: "Ofendeu um clã inteiro e todos os seus membros querem sua cabeça (+2 na Dif. Social).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Mestre Repugnante",
    points: "4",
    desc: "Preso por Laço de Sangue a um mestre sádico e cruel que o maltrata.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Visado",
    points: "4",
    desc: "Muitos rivais focados em sabotar suas operações e cortar sua influência.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Vítima de Caçada de Sangue",
    points: "4 ou 6",
    desc: "Alvo de Caçada de Sangue na sua cidade (4 pts) ou por toda a Camarilla (6 pts).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Alvo de Risos",
    points: "5",
    desc: "Alvo favorito de piadas das hárpias (+2 na Dif. Social no Elísio).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Lista Vermelha",
    points: "7",
    desc: "Consta na temida Lista Vermelha dos maiores anátemas a serem destruídos pela Camarilla.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "social",
    name: "Responsabilidade Especial",
    points: "1",
    desc: "Voluntariou-se para tarefa árdua no bando que consome seu tempo.",
    source: "Vampiro, a Máscara; Guia do Sabá 3ª ed, pág 95"
  },
  {
    type: "defeito",
    category: "social",
    name: "Antecedentes Criminais",
    points: "2",
    desc: "Histórico penal mortal; +2 na dificuldade com autoridades e sem porte legal de armas.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 27"
  },
  {
    type: "defeito",
    category: "social",
    name: "Ingênuo",
    points: "2",
    desc: "Confia demais nos outros; +2 na dificuldade para detectar mentiras.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 27"
  },
  {
    type: "defeito",
    category: "social",
    name: "Predador Óbvio",
    points: "2 (Brujah)",
    desc: "Ar ameaçador ostensivo; +2 em testes Sociais com mortais (exceto Intimidação).",
    source: "Vampiro, a Máscara; Clanbook Brujah 3ªed, pág. 69"
  },
  {
    type: "defeito",
    category: "social",
    name: "Incoerente",
    points: "5 (Nosferatu)",
    desc: "Incapaz de articular palavras humanas (apenas grunhidos e gestos).",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 74"
  },
  {
    type: "defeito",
    category: "social",
    name: "Autarca Infame",
    points: "1 (Nosferatu)",
    desc: "Rejeitado tanto pela Camarilla quanto pelo Sabá devido a histórico abominável.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 72"
  },
  {
    type: "defeito",
    category: "social",
    name: "Ninhada Inimiga",
    points: "3 (Nosferatu)",
    desc: "Ninhada inteira de Nosferatu move uma vendetta implacável contra você.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 73"
  },
  {
    type: "defeito",
    category: "social",
    name: "Necrófilo",
    points: "3 (Nosferatu)",
    desc: "Obsessão mórbida por cadáveres e restos mortais decorando seu refúgio.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 73"
  },
  {
    type: "defeito",
    category: "social",
    name: "Traidor",
    points: "4 (Nosferatu)",
    desc: "Vaza informações confidenciais sobre seus aliados sob ameaça de morte se descoberto.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 74"
  },
  {
    type: "defeito",
    category: "social",
    name: "Contagioso",
    points: "5 (Nosferatu)",
    desc: "Carrega bactérias infecciosas virulentas; mortais que o tocam devem passar em Vigor (Dif. 9) ou adoecem.",
    source: "Vampiro, a Máscara; Clanbook Nosferatu 3ªed, pág. 74"
  },
  {
    type: "defeito",
    category: "social",
    name: "Laçado ao Conselho",
    points: "3 (Tremere)",
    desc: "Laço de Sangue estrito ao Conselho dos Sete; custa Força de Vontade para desobedecer a Pirâmide.",
    source: "Vampiro, a Máscara; Clanbook Tremere 3ªed, pág. 67"
  },
  {
    type: "defeito",
    category: "social",
    name: "Traidor Duplo",
    points: "4 (Tremere)",
    desc: "Porta a marca do Traidor por ter participado da Vaulderie no passado.",
    source: "Vampiro, a Máscara; Clanbook Tremere 3ªed, pág. 67"
  },
  {
    type: "defeito",
    category: "social",
    name: "Protegido Indefeso",
    points: "3",
    desc: "Um mortal querido depende de sua proteção e se mete constantemente em apuros.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 80"
  },

  // ==========================================
  // DEFEITOS SOBRENATURAIS
  // ==========================================
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Toque de Congelamento",
    points: "1",
    desc: "Plantas murcham e morrem ao seu toque, que retira calor como gelo.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 301"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Repulsa ao Alho",
    points: "1",
    desc: "Não tolera cheiro de alho; exige Força de Vontade para permanecer no local.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 301"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Amaldiçoado",
    points: "1 a 5",
    desc: "Alvo de maldição sobrenatural ativa de intensidade proporcional aos pontos.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 301"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Imagem sem Reflexo",
    points: "1",
    desc: "Não produz reflexo em espelhos (automático para Lasombra).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Presença Sinistra",
    points: "2",
    desc: "Mortais sentem mal-estar inconsciente em sua presença (+2 na Dif. Social).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Repulsa a Cruzes",
    points: "3",
    desc: "Repelido por cruzes (Força de Vontade Dif. 9 para não fugir; toque causa dano agravado).",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Incapacidade de Atravessar Água Corrente",
    points: "3",
    desc: "Incapaz de cruzar rios ou água corrente sem estar a 15m de altura.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Assombrado",
    points: "3",
    desc: "Espírito atormentado de uma vítima o persegue e atrapalha sua caçada.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Aperto dos Amaldiçoados",
    points: "4",
    desc: "Não há êxtase no Beijo: vítimas gritam e lutam desesperadamente durante a alimentação.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Futuro Negro",
    points: "5",
    desc: "Amaldiçoado com agonia eterna ou Morte Final inescapável ao longo da crônica.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Sensibilidade à Luz",
    points: "5",
    desc: "Luz solar causa o dobro de dano e luar causa dano letal direto.",
    source: "Vampiro, a Máscara; Livro Básico 3ª ed, pág 302"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Brisa Frígida",
    points: "1",
    desc: "Vento gelado o segue constantemente (+1 na Dif. Social com humanos).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Marca do Amaldiçoado",
    points: "2",
    desc: "Irradia aura maligna; templos e igrejas estão barrados a você.",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Visão Agonizante",
    points: "2",
    desc: "Enxerga o mundo como cadáver decomposto (+2 na Dif. de Percepção).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Senhor das Moscas",
    points: "2",
    desc: "Nuvem de moscas o acompanha zunindo (+2 na Dif. de Furtividade).",
    source: "Vampiro, a Máscara; Guia da Camarilla 3ª ed, pág 79"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Azar Sobrenatural",
    points: "4",
    desc: "O Narrador pode aumentar em +2 a dificuldade de uma rolagem crítica uma vez por sessão.",
    source: "Vampiro, a Máscara; Guia do Jogador 3ª ed, pág. 28"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Viciado em Magia",
    points: "3 ou 5 (Assamita)",
    desc: "Vício em drogas alquímicas para canalizar feitiçaria (+2 na Dif. ou incapacidade sem a droga).",
    source: "Vampiro, a Máscara; Clanbook Assamita 3ªed, pág. 76"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Inquebrável",
    points: "3 (Assamita)",
    desc: "Beber sangue de não-Assamita causa 1 nível de dano letal automático incurável na ingestão.",
    source: "Vampiro, a Máscara; Clanbook Assamita 3ªed, pág. 77"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Andarilho da Sombra",
    points: "6 (Giovanni)",
    desc: "Conexão perpétua com as Terras das Sombras: fantasmas podem feri-lo diretamente no mundo físico.",
    source: "Vampiro, a Máscara; Clanbook Giovanni 3ªed, pág. 78"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Visão Tenebrosa Incontrolável",
    points: "2 (Lasombra)",
    desc: "Luz e escuridão invertidas permanentemente de forma incontrolável.",
    source: "Vampiro, a Máscara; Clanbook Lasombra 3ªed, pág. 64"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Reflexo da Morte",
    points: "3 (Lasombra)",
    desc: "Produz reflexo, mas este sempre exibe seu estado decomposto cadavérico ou esqueleto.",
    source: "Vampiro, a Máscara; Clanbook Lasombra 3ªed, pág. 65"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Estigmata",
    points: "2 ou 4 (Malkaviano)",
    desc: "Sangra constantemente de ferimentos fantasmas (perde 1 sangue por noite; por 4 pts sangra dos olhos).",
    source: "Vampiro, a Máscara; Clanbook Malkaviano 3ªed, pág. 66"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Infeccioso",
    points: "3 (Malkaviano)",
    desc: "Mordida transmite perturbação temporária às vítimas por uma semana.",
    source: "Vampiro, a Máscara; Clanbook Malkaviano 3ªed, pág. 66"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Taumaturgicamente Inapto",
    points: "4 (Tremere)",
    desc: "Adiciona +4 na dificuldade para usar rituais e trilhas taumatúrgicas.",
    source: "Vampiro, a Máscara; Clanbook Tremere 3ªed, pág. 67"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Dependência do Solo Ancestral",
    points: "4 (Tzimisce)",
    desc: "Precisa de dois punhados de solo da Europa Oriental para descansar.",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 70"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Fraqueza Revenante",
    points: "3 (Tzimisce)",
    desc: "Sofre tanto a fraqueza de seu clã quanto a de sua antiga família revenante.",
    source: "Vampiro, a Máscara; Clanbook Tzimisce 3ªed, pág. 70"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Anos Assoladores",
    points: "2",
    desc: "Envelhece devagar (1 ano a cada 20) e envelhece 1 ano sempre que cura ferimento agravado.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Fraqueza de Clã",
    points: "2 (Caitiff)",
    desc: "Embora sem clã, manifesta a fraqueza mística de um clã vampírico.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 78"
  },
  {
    type: "defeito",
    category: "sobrenatural",
    name: "Decrepitude",
    points: "3",
    desc: "Curar dano agravado exige teste de Vigor; falha deixa sequelas/cicatrizes permanentes e falha crítica reduz atributos.",
    source: "Vampiro, a Máscara; Tempo de Sangue Fraco, 3ª ed, pág 78"
  }
];
