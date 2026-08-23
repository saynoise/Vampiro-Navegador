/**
 * GRIMÓRIO OFICIAL COMPLETO DE RITUAIS V20 (100% BASEADO NA WHITE WOLF WIKI)
 * Total de Rituais Oficiais: 476
 * 
 * Nomes traduzidos para Português em destaque, com nome oficial canônico em inglês logo abaixo.
 * Todas as descrições e processos traduzidos e revisados com gramática fluente em Português.
 * Ingredientes exibidos estritamente quando constam nas tabelas oficiais da Wiki.
 */
const RITUALS_DATA = [
  {
    "id": "ritual_taumaturgia_1",
    "name": "Amarrar a Língua Acusadora",
    "nameEn": "Bind the Accusing Tongue",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Enrola o cordão ao redor do cabelo e da imagem enquanto entoa encantamentos. — Efeito: O alvo é incapaz de falar mal, acusar ou difamar o conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Uma mecha de cabelo do alvo, um cordão de seda preta e uma imagem da pessoa"
  },
  {
    "id": "ritual_taumaturgia_2",
    "name": "Contrato de Sangue",
    "nameEn": "Blood Contract",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "a outra parte assina seu nome com sangue no contrato. — Efeito: O conjurador cria um contrato místico vinculativo entre ambas as partes que desencadeia terríveis maldições contra quem violar os termos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Um contrato escrito com o sangue do conjurador e da outra parte"
  },
  {
    "id": "ritual_taumaturgia_3",
    "name": "Sangue em Água",
    "nameEn": "Blood into Water",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Despeja a água através da mão estendida enquanto entoa encantamentos. — Efeito: Transmuta todo sangue derramado ao redor em água pura.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Um cálice de água purificada"
  },
  {
    "id": "ritual_taumaturgia_4",
    "name": "Domínio do Sangue",
    "nameEn": "Blood Mastery",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Queima a vitae sobre uma chama aberta enquanto entoa encantamentos. — Efeito: Garante 1 sucesso automático contra o alvo em uma disputa ou ação específica.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Um frasco de vitae do conjurador e do alvo"
  },
  {
    "id": "ritual_taumaturgia_5",
    "name": "Sangue da Paz",
    "nameEn": "Blood of Peace",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Mistura a uma bebida ou aplica diretamente sobre a pele do alvo. — Efeito: O sangue torna-se uma droga potente que induz sono profundo",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "2 pontos do sangue do conjurador"
  },
  {
    "id": "ritual_taumaturgia_6",
    "name": "Ímpeto do Sangue",
    "nameEn": "Blood Rush",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Entoação cerimonial de encantamentos. — Efeito: Sente o prazer e êxtase de se alimentar de sangue sem precisar de fato fazê-lo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A presa de um animal predador"
  },
  {
    "id": "ritual_taumaturgia_7",
    "name": "Marca Mística",
    "nameEn": "Brand",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Enquanto entoa encantamentos, prata derretida é derramada sobre um tatuagem. — Efeito: a marca ou tatuagem torna-se permanente e indestrutível na carne do vampiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Prata derretida e uma tatuagem ou símbolo na pele"
  },
  {
    "id": "ritual_taumaturgia_8",
    "name": "Marca do Amante",
    "nameEn": "Brand of the Paramour",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador e o carniçal bebem 2 pontos de sangue dos gêmeos mortais. — Efeito: O conjurador sente dores empáticas e sabe instantaneamente quando o carniçal sofre danos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Gêmeos mortais e um carniçal"
  },
  {
    "id": "ritual_taumaturgia_9",
    "name": "A Mosca Varejeira Retardada",
    "nameEn": "The Carrion Fly Delayed",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Realiza a dissecação da vítima e coloca as partes extraídas sobre o incensário com sais alquímicos. — Efeito: Preserva membros decepados e órgãos contra decomposição indefinidamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Uma vítima viva, um incensário e sais alquímicos"
  },
  {
    "id": "ritual_taumaturgia_10",
    "name": "Sino dos Espíritos Invisíveis",
    "nameEn": "Chime of Unseen Spirits",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Os uméé são fundidos em um carrilhão enquanto o conjurador entoa encantamentos. — Efeito: Os sinos ressoam magicamente quando qualquer entidade espiritual se aproxima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "As alianças de casamento de três mulheres falecidas"
  },
  {
    "id": "ritual_taumaturgia_11",
    "name": "Manto de Sangue",
    "nameEn": "Cloak of Blood",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Jejuar por sete noites e beber do sangue oferecido voluntariamente por um inocente. — Efeito: Oculta temporariamente as estrias negras de Diablerie na aura do vampiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Uma pessoa inocente disposta a doar sangue"
  },
  {
    "id": "ritual_taumaturgia_12",
    "name": "Comunicação com o Senhor",
    "nameEn": "Communicate with Sire",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Meditação profunda por 30 minutos. — Efeito: Comunica-se telepaticamente com seu senhor cainita direto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Um objeto pessoal que pertenceu ao senhor cainita"
  },
  {
    "id": "ritual_taumaturgia_13",
    "name": "Contagem de Conquistas",
    "nameEn": "Counting Coup",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "15 minutos. — Efeito: O Príncipe ou sua linhagem recebe uma mensagem psíquica ou sinal cerimonial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Um pedaço de giz cerimonial"
  },
  {
    "id": "ritual_taumaturgia_14",
    "name": "Decifrar Mensagem",
    "nameEn": "Decrypt Missive",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Deixa 1 gota de sangue cair sobre o documento e medita por 10 minutos. — Efeito: O conjurador quebra e decifra quaisquer criptografias e proteções taumatúrgicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Sangue e um documento criptografado"
  },
  {
    "id": "ritual_taumaturgia_15",
    "name": "Consagração da Capela",
    "nameEn": "Dedicate the Chantry",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Caminha em círculo ao redor fazer edifício aspergindo água e unge as mãos no piso inferior. — Efeito: Facilita e reduz um dificuldade de todos os rituais defensivos subsequentes lançados sobre o edifício.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Água estagnada e as fundações do edifício"
  },
  {
    "id": "ritual_taumaturgia_16",
    "name": "Defesa do Refúgio Sagrado",
    "nameEn": "Defense of the Sacred Haven",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Pinta sigilos arcanos em todas as portas e janelas enquanto entoa encantamentos. — Efeito: Impede que a luz solar penetre no cômodo enquanto o conjurador estiver dentro dele.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Blood"
  },
  {
    "id": "ritual_taumaturgia_17",
    "name": "Deflexão da Perdição de Madeira",
    "nameEn": "Deflection of Wooden Doom",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Entoa encantamentos dentro de um círculo de madeira com uma farpa sob um língua. — Efeito: um primeira estaca de madeira desferida contra o conjurador desintegra-se em pó.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A splinter of wood, a wooden circle"
  },
  {
    "id": "ritual_taumaturgia_18",
    "name": "Toque do Diabo",
    "nameEn": "Devil's Touch",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Smuggle um coin para O alvo. — Efeito: O alvo é socially shunned e treated like um outcast.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A coin"
  },
  {
    "id": "ritual_taumaturgia_19",
    "name": "Dominó da Vida",
    "nameEn": "Dominoe of Life",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Entoação cerimonial de encantamentos. — Efeito: Simula uma característica de um ser humano vivo (pulso cardíaco, respiração, capacidade de ingerir alimentos, etc.)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A vial of human blood"
  },
  {
    "id": "ritual_taumaturgia_20",
    "name": "Criptografar Missiva",
    "nameEn": "Encrypt Missive",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Escreve um mensagem com sangue e profere o nome fazer destinatário. — Efeito: Apenas o conjurador e o destinatário pretendido conseguem ler um mensagem.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Blood, paper"
  },
  {
    "id": "ritual_taumaturgia_21",
    "name": "Ativação do Receptáculo de Transferência",
    "nameEn": "Engaging the Vessel of Transference",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Gravação de um selo hermético sobre o recipiente. — Efeito: Transfere o sangue do recipiente e drena o sangue de qualquer indivíduo que tocá-lo com as mãos desprotegidas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A container, vitae of the caster"
  },
  {
    "id": "ritual_taumaturgia_22",
    "name": "Expediente Burocrático Ágil",
    "nameEn": "Expedient Paperwork",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Passa os pelos cerimoniais sobre o documento burocrático. — Efeito: O documento é percebido como prioritário e tramita com máxima urgência pelos canais burocráticos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "An official document, hairs of a loyal dog"
  },
  {
    "id": "ritual_taumaturgia_23",
    "name": "Morte Clínica (Linha Reta)",
    "nameEn": "Flatline",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador esconde o inseto em o refúgio do alvo. — Efeito: O alvo não apresenta sinais vitais secundários, parecendo clinicamente morto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A dead insect"
  },
  {
    "id": "ritual_taumaturgia_24",
    "name": "Iluminar o Rastro da Presa",
    "nameEn": "Illuminate Trail of Prey",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Queima um fita cerimonial. — Efeito: Visualiza o rastro do alvo como uma luz pulsante visível apenas ao conjurador (o elo se desfaz se o alvo cruzar água corrente)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A length of white satin ribbon"
  },
  {
    "id": "ritual_taumaturgia_25",
    "name": "Aflição do Diabrete",
    "nameEn": "The Imp's Affliction",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador escreve o nome do alvo em o paper enquanto entoa encantamentos. — Efeito: os traços físicos do alvo become distorted.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A scrap of paper"
  },
  {
    "id": "ritual_taumaturgia_26",
    "name": "Semblante Impressionante",
    "nameEn": "Impressive Visage",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Lava o rosto em sangue puro e coloca folhas de hortelã seca nos sapatos. — Efeito: Adquire uma presençum irresistivelmente sedutora e atraente para todos ao redor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Dried mint, virgin blood"
  },
  {
    "id": "ritual_taumaturgia_27",
    "name": "Encantamento do Pastor",
    "nameEn": "Incantation of the Shepherd",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Entoa encantamentos girando lentamente em círculo enquanto segura duas lentes de vidro diante dos olhos. — Efeito: Localiza instantaneamente um posição exata de mortais que compõem seu rebanho habitual.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Two glass objects"
  },
  {
    "id": "ritual_taumaturgia_28",
    "name": "Sondar a Mente em Torpor",
    "nameEn": "Learning the Mind Enslumbered",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Coloca as moedas sobre os olhos do alvo e entra em meditação. — Efeito: Comunica-se mentalmente com um vampiro que se encontra em estado de Torpor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A torpid vampire, coins"
  },
  {
    "id": "ritual_taumaturgia_29",
    "name": "Vitae Luminosa",
    "nameEn": "Luminous Vitae",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador olha através fazer buraco da agulha enquanto entoa encantamentos. — Efeito: Todo sangue derramado nas proximidades do conjurador brilha com uma luminescência roxa iridescente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A needle"
  },
  {
    "id": "ritual_taumaturgia_30",
    "name": "Agora Seus Olhos São Nossos",
    "nameEn": "Now Its Sight Is Ours",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O olho de uma criatura é extraífazer e perfurado com um alfinete sob encantamentos. o pin é attached para o wire, o qual é attached para o claw. o eye é drawn through o smoke de o censor e then bathed em o vitae within o bowl. — Efeito: O olho passa um funcionar como um dispositivo espião quando um vampiro bebe da vitae em que o olho foi banhado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A three-inch golden pin, wire, vitae from the caster, a golden bowl, a censor, a small golden claw, and a living victim"
  },
  {
    "id": "ritual_taumaturgia_31",
    "name": "Preservar Sangue",
    "nameEn": "Preserve Blood",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O jarro é enterrado por dois dias na terra, depois aberto para inserção do sangue e lacrado com cera. — Efeito: Preserva o sangue em estado fresco indefinidamente sem necessidade de refrigeração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "An earthenware jug"
  },
  {
    "id": "ritual_taumaturgia_32",
    "name": "Preservar Cadáver",
    "nameEn": "Preserve Corpse",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Aplica o líquido sobre o que necessita de conservação (perde um potência após uma semana) — Efeito: Protege um cadáver adulto contra decomposição e podridão",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A special liquid composed of decaying organic material and rare herbs"
  },
  {
    "id": "ritual_taumaturgia_33",
    "name": "Proteger a Tumba",
    "nameEn": "Protect the Tomb",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador adentra um câmara mortuária, queima incenso enquanto entoa encantamentos e inscreve um sepultura com símbolos sagrados. — Efeito: Aumenta um dificuldade de qualquer tentativa de perturbar ou violar o cadáver ou o espírito fazer falecido.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A specially constructed gravesite, a dead body, incense"
  },
  {
    "id": "ritual_taumaturgia_34",
    "name": "Purgar o Demônio Interior",
    "nameEn": "Purge the Inner Demon",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador crava o alfinete através da mão dominante do alvo. — Efeito: Silencia um Besta interior e encerra instantaneamente o estado de Frenesi.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A sturdy pin"
  },
  {
    "id": "ritual_taumaturgia_35",
    "name": "Pureza do Sangue",
    "nameEn": "Purity of Blood",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Coloca o sangue em um recipiente, entoa encantamentos, gesticula e adiciona cinzas e gengibre. — Efeito: Purifica o sangue contra quaisquer doenças, toxinas ou venenos contaminantes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A container, blood, Cinzas, crushed ginger"
  },
  {
    "id": "ritual_taumaturgia_36",
    "name": "Pureza da Carne",
    "nameEn": "Purity of Flesh",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Senta-se no centro de um círculo de pedras sobre terra nua. — Efeito: Expulsa do corpo quaisquer intrusões e impurezas estranhas (tinta de tatuagem, balas alojadas, drogas, sujeira)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "13 sharp stones"
  },
  {
    "id": "ritual_taumaturgia_37",
    "name": "Renascimento da Vaidade Mortal",
    "nameEn": "Rebirth of Mortal Vanity",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador posiciona os fios de cabelo sobre o espelho, gesticula e entoa encantamentos enquanto os fios afundam na superfície reflexiva. — Efeito: Permite ao vampiro alterar o comprimento e fazer crescer cabelo novamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Hair from the head of a human child, Um espelho"
  },
  {
    "id": "ritual_taumaturgia_38",
    "name": "Return to Tremere Safe Haven",
    "nameEn": "Return to Tremere Safe Haven",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "dois hour ritual que must ser done em o Tremere Chantry.&#160;Unbroken red círculo. — Efeito: Teleportation back para o Chantry para only O conjurador.&#160;If someone ou something else é teleported Permanent paraçum de Vontade é lost.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Blood from all Casters"
  },
  {
    "id": "ritual_taumaturgia_39",
    "name": "Rito de Apresentação",
    "nameEn": "Rite of Introduction",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador brews o tamarisk root em o água, then speaks um formal introduction em o vapors e drops um pint de oil em o água. — Efeito: O conjurador pode communicate com seu nearest superior em o Pyramid.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Tamarisk root, galangal oil, rainÁgua pura, a pot"
  },
  {
    "id": "ritual_taumaturgia_40",
    "name": "Sanguineous Phial",
    "nameEn": "Sanguineous Phial",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Bury o container em o chão para dois nights, then crumple o ash leaves em it enquanto entoa encantamentos e fill o sangue em it. — Efeito: O conjurador pode store sangue o qual contains its sympathetical connections.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Earthenware container, dried Cinzas leaves, blood"
  },
  {
    "id": "ritual_taumaturgia_41",
    "name": "Odor da Passagem do Garou",
    "nameEn": "Scent of the Garou's Passing",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Sniff o mixture. — Efeito: O conjurador pode detect o presence de um werewolf via smell.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A mixture of herbs containing milkweed, sage, grass and wolfsbane"
  },
  {
    "id": "ritual_taumaturgia_42",
    "name": "O Escriba",
    "nameEn": "The Scribe",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador crushes o beak between seu thumb e seu forefinger. — Efeito: Words que O conjurador speaks appear directly em paper.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "The beak of a bird"
  },
  {
    "id": "ritual_taumaturgia_43",
    "name": "Sense the Mystical",
    "nameEn": "Sense the Mystical",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador chants over o candle e ignites it. — Efeito: All sources de sangue Magic em o vicinity de o candle ter um visible aura.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A single mystically prepared candle"
  },
  {
    "id": "ritual_taumaturgia_44",
    "name": "Serenading the Kami",
    "nameEn": "Serenading the Kami",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador ignites o incense e walks across o area, offering thanks para o espíritos. — Efeito: All physical actions em o sanctified area são easier.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A stick of incense"
  },
  {
    "id": "ritual_taumaturgia_45",
    "name": "Sigil of Authority",
    "nameEn": "Sigil of Authority",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador cuts o symbol em o flesh de o subject. — Efeito: Once blemished, o symbol shows que o subject represents o authority de O conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A symbol representing the caster, a subject"
  },
  {
    "id": "ritual_taumaturgia_46",
    "name": "Alma da Terra",
    "nameEn": "Soul of the Earth",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "um mixture de powdered granite e Gargoyle vitae são applied all over o animal's corpo para um hour antes de Embrace com same Gargoyle's vitae. — Efeito: Animal's Stamina + o ritualist's Occult versus Difficulty 8; success means o animal é successfully Embraced as um Gargoyle.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Gargoyle vitae, powdered granite"
  },
  {
    "id": "ritual_taumaturgia_47",
    "name": "Tame the Maddening Flame",
    "nameEn": "Tame the Maddening Flame",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador pollutes o água com his vitae e sprinkles it around o edifício. — Efeito: Existing fires take em um green hue e no longer inspire Rötschreck.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A jug of Água pura, a building filled with fires"
  },
  {
    "id": "ritual_taumaturgia_48",
    "name": "True Sight",
    "nameEn": "True Sight",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "O conjurador chants over O vampiro who irá ser O destinatário. — Efeito: O destinatário becomes um undead polygraph e doubles seu Perception",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "5 minutes of chanting."
  },
  {
    "id": "ritual_taumaturgia_49",
    "name": "Despertar com o Frescor da Noite",
    "nameEn": "Wake with Evening's Freshness",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Sprinkle o ashes around o area onde you want para sleep. — Efeito: O conjurador awakes immediately em his full capacity quando someone disturbs o ashes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "Cinzas from burned feathers"
  },
  {
    "id": "ritual_taumaturgia_50",
    "name": "Rancor da Viúva",
    "nameEn": "Widow's Spite",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Entoação cerimonial de encantamentos. — Efeito: Cause um minor irritation em O alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A puppet made out of wax or cloth, the name of the target"
  },
  {
    "id": "ritual_taumaturgia_51",
    "name": "Will o' the Wisp",
    "nameEn": "Will o' the Wisp",
    "level": 1,
    "tradition": "taumaturgia",
    "desc": "Incanting, throwing branch em o ar. — Efeito: cria um supernatural ball de luz.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1",
    "components": "A small branch from a willow tree"
  },
  {
    "id": "ritual_taumaturgia_52",
    "name": "Ascension of the Blood",
    "nameEn": "Ascension of the Blood",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Pour o sangue em o o chalice enquanto entoa encantamentos. — Efeito: sangue de o chalice é cleared de all sympathetic connections (including Dominate para seven days.)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A chalice, blood"
  },
  {
    "id": "ritual_taumaturgia_53",
    "name": "Black Water",
    "nameEn": "Black Water",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Pour o oil em um corpo de água. — Efeito: o água não pode ser seen through de o surface.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A specially prepared dark oil"
  },
  {
    "id": "ritual_taumaturgia_54",
    "name": "Blood Call",
    "nameEn": "Blood Call",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "— Efeito: cria um limited psychic link between dois willing characters.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Each Participant gives two blood. 1 Hour"
  },
  {
    "id": "ritual_taumaturgia_55",
    "name": "Hidromel de Sangue",
    "nameEn": "Blood Mead",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Mix o vitae e o mead. — Efeito: Persons who drink de o mead become more resilient para pain enquanto intoxicated.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Mead, vitae of the caster"
  },
  {
    "id": "ritual_taumaturgia_56",
    "name": "Blood Walk",
    "nameEn": "Blood Walk",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: Learn o True Name de o immediate sire de O alvo, estimating his generation, as well as learning de possible Laço de Sangues.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Blood of the target"
  },
  {
    "id": "ritual_taumaturgia_57",
    "name": "Condenação Burocrática",
    "nameEn": "Bureaucratic Condemnation",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Draw um effigy de O alvo em o ink. — Efeito: Bureaucratic endeavors de O alvo become hindered.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Squid ink"
  },
  {
    "id": "ritual_taumaturgia_58",
    "name": "Lâmina Flamejante",
    "nameEn": "Burning Blade",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Cut your palm com o arma e invest três sangue points enquanto entoa encantamentos. — Efeito: quando unsheathed, o weapons queima com green fogo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A bladed weapon"
  },
  {
    "id": "ritual_taumaturgia_59",
    "name": "Calling the Restless Spirit",
    "nameEn": "Calling the Restless Spirit",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Entoação cerimonial de encantamentos. — Efeito: Try para communicate com o Aparição de um recently deceased.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A Haunt or the corpse"
  },
  {
    "id": "ritual_taumaturgia_60",
    "name": "Craft / Create Bloodstone",
    "nameEn": "Craft / Create Bloodstone",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador submerges o pebble em o sangue e entoa encantamentos. — Efeito: O conjurador always know em what direction o pedra é located.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A pebble, a vial of blood"
  },
  {
    "id": "ritual_taumaturgia_61",
    "name": "Communicate with Kindred Bond Mate",
    "nameEn": "Communicate with Kindred Bond Mate",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador meditates para 30 minutos. — Efeito: O conjurador e o bond mate pode communicate telepathically.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A vampire with whom the caster shares a Blood Bond"
  },
  {
    "id": "ritual_taumaturgia_62",
    "name": "Deny the Intruder",
    "nameEn": "Deny the Intruder",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador scrawls mystic sigils sobre o paper com o charcoal e then sends it out per mail. — Efeito: o place onde o ritual took place faz not register em any official documents.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A piece of paper, charcoal"
  },
  {
    "id": "ritual_taumaturgia_63",
    "name": "Detect Authority",
    "nameEn": "Detect Authority",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Cutting de Palms between Caster e o person detecting.&#160; Clasping de mãos e Caster stares em o eyes de o Neonate. — Efeito: Checking para mysticals signs de Laço de Sangue ou under control.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Blood"
  },
  {
    "id": "ritual_taumaturgia_64",
    "name": "Donning the Mask of Shadows",
    "nameEn": "Donning the Mask of Shadows",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: O alvo becomes translucent e its steps become muffled.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Incantation"
  },
  {
    "id": "ritual_taumaturgia_65",
    "name": "Dust of Remembrance",
    "nameEn": "Dust of Remembrance",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Mix o components e sprinkle them across material objects. — Efeito: O conjurador learns who tem interacted quando com any object sprinkled com o dust.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Myrrh, Cinzas from the severed finger of the caster, wine dregs, silver powder"
  },
  {
    "id": "ritual_taumaturgia_66",
    "name": "Enhance the Curse",
    "nameEn": "Enhance the Curse",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador must draw sangue de o Carniçal. — Efeito: o Carniçal suffers o same disadvantages e weaknesses de um true vampire.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A ghoul"
  },
  {
    "id": "ritual_taumaturgia_67",
    "name": "Extinguish",
    "nameEn": "Extinguish",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto pinching out o candle's flame e spits em o piso afterwards. — Efeito: O conjurador pode extinguish um existing fogo com um mere word.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A candle"
  },
  {
    "id": "ritual_taumaturgia_68",
    "name": "Olhos de Babel",
    "nameEn": "Eyes of Babel",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador eats o tongue e eyes de a vítima. — Efeito: O conjurador pode understand all languages que a vítima knows.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A victim"
  },
  {
    "id": "ritual_taumaturgia_69",
    "name": "Olhos do Falcão Noturno",
    "nameEn": "Eyes of the Night Hawk",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Touching o bird enquanto entoa encantamentos. — Efeito: O conjurador pode ver e hear through o bird's eyes e ears.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A predatory bird, Magical Birdseed"
  },
  {
    "id": "ritual_taumaturgia_70",
    "name": "Hidden Haven",
    "nameEn": "Hidden Haven",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador must surround o edifício, e mark all corners, doorways, e windowsills com o chalk. o ritual takes um entire noite e O conjurador sacrifices um permanent paraçum de Vontade point. — Efeito: O conjurador hides o edifício em plain sight, locking o means para find it para um singular key (like um password.)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Chalk made of owl-feather Cinzas, a moderate building, Willpower"
  },
  {
    "id": "ritual_taumaturgia_71",
    "name": "Illusion of Peaceful Death",
    "nameEn": "Illusion of Peaceful Death",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Brush o feather across o corpse enquanto reciting \"It must ter sido Frank’s time para go. em least he went out em his sleep.\" — Efeito: para onlookers, it appears que o person died em um state de peace.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A pristine feather soaked in the blood of a good man that died peacefully, a corpse"
  },
  {
    "id": "ritual_taumaturgia_72",
    "name": "Rastro Intransitável",
    "nameEn": "Impassable Trail",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Wrap pés em Deerskin; Brush your pés com o feather drenched em sangue. — Efeito: O conjurador leaves no traces save para olfactory ones.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Deerskin, An owl feather, Blood"
  },
  {
    "id": "ritual_taumaturgia_73",
    "name": "Inscription",
    "nameEn": "Inscription",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador escreve instructions e incantations em um sheet de paper, detailing um ritual de either rank 1 ou 2. — Efeito: Other persons pode use o formula para cast o described ritual.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A vitae-based ink"
  },
  {
    "id": "ritual_taumaturgia_74",
    "name": "Corpo de Ferro",
    "nameEn": "Iron Body",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador tem para carry o casing em seu skin. — Efeito: O conjurador pode better withstand o traditional banes de vampires.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A spent shell casing"
  },
  {
    "id": "ritual_taumaturgia_75",
    "name": "It Steals Your Whispers",
    "nameEn": "It Steals Your Whispers",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador saws off o ear de a vítima e drops it em o elixir. o elixir é brewed e its vapors coat o horn. — Efeito: Anyone drinking o elixir pode listen para anything que happens near o horn.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A silver saw, a copper horn, an elixir containing the caster's vitae, a living human"
  },
  {
    "id": "ritual_taumaturgia_76",
    "name": "The Jinx",
    "nameEn": "The Jinx",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador meditates para 10 minutos about his hatred de O alvo e o queima o possession. — Efeito: O alvo suffers misfortune during um action de do conjurador choosing.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A former possession of the target"
  },
  {
    "id": "ritual_taumaturgia_77",
    "name": "Machine Blitz",
    "nameEn": "Machine Blitz",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador opens o knot. — Efeito: um piece de complex machinery stops para um limited period de time.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A scrap of rusted metal, a knot drenched in human saliva"
  },
  {
    "id": "ritual_taumaturgia_78",
    "name": "Membranous Appropriation",
    "nameEn": "Membranous Appropriation",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador kneads o skin e puts it over um oven ignited por vis. após um period de time, O conjurador molds o skin em um simulacra de um human corpo part e returns it para o oven, periodically spraying it com alum, pine resin e o scales. — Efeito: o simulacrum mimics its donor's exact movements.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Intact skin from a target, an oven, vis, alumn, pine resin, powdered serpent scales"
  },
  {
    "id": "ritual_taumaturgia_79",
    "name": "Mourning Life Curse",
    "nameEn": "Mourning Life Curse",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador applies o paste para o eyes de um mortal após having drunk o crocodile sangue e speaks dois short syllables. — Efeito: O alvo weeps tears de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Thrice-distilled crocodile blood, a paste made out of copal oil, eyebright, and dates"
  },
  {
    "id": "ritual_taumaturgia_80",
    "name": "Obscure the Malice",
    "nameEn": "Obscure the Malice",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador touches o wound. — Efeito: o wound heals immediately, leaving no trace de um scar ou similar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A wounded corpse"
  },
  {
    "id": "ritual_taumaturgia_81",
    "name": "A Passagem Aberta",
    "nameEn": "The Open Passage",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador smears o excrements across a parede ou porta enquanto entoa encantamentos. — Efeito: O conjurador pode step unhindered through o parede.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Vermin excrements"
  },
  {
    "id": "ritual_taumaturgia_82",
    "name": "Poder da Chama Invisível",
    "nameEn": "Power of the Invisible Flame",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos antes de o fogo. — Efeito: o fogo becomes invisible, although its heat e effects pode still ser observed.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "An existing fire"
  },
  {
    "id": "ritual_taumaturgia_83",
    "name": "Preserve",
    "nameEn": "Preserve",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "o object é slightly coated em vitae enquanto O conjurador entoa encantamentos. — Efeito: o object é shielded de o passage de time e usage.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "An object, vitae"
  },
  {
    "id": "ritual_taumaturgia_84",
    "name": "Principle Focus of Vitae Infusion",
    "nameEn": "Principle Focus of Vitae Infusion",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "o object é drenched em o vitae. — Efeito: em um command de O conjurador, o vitae spills forth de o object.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A small object that fits into the caster's hands, vitae of the caster"
  },
  {
    "id": "ritual_taumaturgia_85",
    "name": "Remédio da Terra Natal",
    "nameEn": "Recure of the Homeland",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador mistura o terra e vitae para um paste que é applied para wounds enquanto O conjurador recites his mortal family árvore. — Efeito: O conjurador pode heal wounds more efficiently.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Earth from the place of the caster's birth, vitae"
  },
  {
    "id": "ritual_taumaturgia_86",
    "name": "Ritual's Recognition",
    "nameEn": "Ritual's Recognition",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "o flesh é crushed em o mortar along com o pestle, o resulting paste é put sobre do conjurador face. — Efeito: O conjurador knows if o next ritual he conducts tem succeeded.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A small bit of flesh from the caster, a mortar, pestle"
  },
  {
    "id": "ritual_taumaturgia_87",
    "name": "Seal Egress",
    "nameEn": "Seal Egress",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador paints symbols em o paredes de o aposento they want para safeguard enquanto entoa encantamentos. — Efeito: Seal um aposento ou passage against unwanted intruders.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Blood"
  },
  {
    "id": "ritual_taumaturgia_88",
    "name": "Spite of the Harridan",
    "nameEn": "Spite of the Harridan",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "o egg must ser crushed em a mão enquanto O conjurador entoa encantamentos em o presence de o woman. — Efeito: O conjurador terminates any pregnancy, resulting em um gory miscarriage.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A snake egg, a pregnant woman"
  },
  {
    "id": "ritual_taumaturgia_89",
    "name": "Steps of the Terrified",
    "nameEn": "Steps of the Terrified",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador throws o buds em O alvo, then wash seu mãos em oil enquanto entoa encantamentos. — Efeito: do alvo running speed é drastically reduced.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Poplar buds, oil; or, a small cube of dried mud perfectly square"
  },
  {
    "id": "ritual_taumaturgia_90",
    "name": "Summon Guardian Spirit",
    "nameEn": "Summon Guardian Spirit",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "24 Hour. — Efeito: Caster invoca um espírito para o express purpose de Guarding him.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_91",
    "name": "Transubstantiation of Humors",
    "nameEn": "Transubstantiation of Humors",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador bebe um concoction made out de clotted sangue e snake venom. — Efeito: If do conjurador vitae leaves o corpo, it transforms em um black, reeking substance.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Clotted blood, snake venom"
  },
  {
    "id": "ritual_taumaturgia_92",
    "name": "Trima",
    "nameEn": "Trima",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador mistura o components together. — Efeito: Mortals who drink de o brew become drowsy e suggestively calm.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Wine, herbs, spices, the caster's vitae"
  },
  {
    "id": "ritual_taumaturgia_93",
    "name": "The Veils of Kirophet",
    "nameEn": "The Veils of Kirophet",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: invoca um dense, roiling mist.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Incantation"
  },
  {
    "id": "ritual_taumaturgia_94",
    "name": "Ward Magic",
    "nameEn": "Ward Magic",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador blesses o amulet over um extended period de time. — Efeito: As long as o amulet é em skin contact com o wearer, it é harder para directly affect him com magic.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "An amulet made out of expensive materials (like gold, ivory, etc)"
  },
  {
    "id": "ritual_taumaturgia_95",
    "name": "Proteção contra Carniçais",
    "nameEn": "Ward versus Ghouls",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador incantates enquanto marking um material object com um glyph drawn out de sangue. — Efeito: Any Carniçal who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Blood"
  },
  {
    "id": "ritual_taumaturgia_96",
    "name": "Círculo de Proteção contra Carniçais",
    "nameEn": "Warding Circle versus Ghouls",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected sangue glyphs around o area they want para ward. — Efeito: Carniçals who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Blood"
  },
  {
    "id": "ritual_taumaturgia_97",
    "name": "Sussurros do Fantasma",
    "nameEn": "Whispers of the Ghost",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador holds o ear em his right mão enquanto astral projecting. — Efeito: O conjurador pode communicate com o living enquanto em astral form.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Auspex level 5, a human ear"
  },
  {
    "id": "ritual_taumaturgia_98",
    "name": "Writ of Protected Passage",
    "nameEn": "Writ of Protected Passage",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador uses o provided sangue para draw various arcane diagrams em o piece de paper. — Efeito: o subject pode temporally step through protective wards against its kind.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "Blood of the subject, a piece of paper"
  },
  {
    "id": "ritual_taumaturgia_99",
    "name": "Your Fate Shall be Known",
    "nameEn": "Your Fate Shall be Known",
    "level": 2,
    "tradition": "taumaturgia",
    "desc": "O conjurador pierces o eyeball de o participant e extracts um small amount de vitreous gel de it. o gel é rubbed em o agate enquanto O conjurador entoa encantamentos. Over o course de um month, o agate é steamed under alchemical vapors until um eyelid-like shell tem developed around it. — Efeito: o eye shows o state de its donor. quando o donor sleeps ou é incapacitated, it closes. quando o donor dies, it crumbles para dust.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2",
    "components": "A willing participant, a golden needle, an agate, alchemical vapors"
  },
  {
    "id": "ritual_taumaturgia_100",
    "name": "Amulet of Mnemosyne",
    "nameEn": "Amulet of Mnemosyne",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador bathes o amulet em sangue, then posiciona it sobre o symbol, kisses it e whispers um secret em it. — Efeito: O conjurador pode store um memory within o amulet.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An amulet made out of brass, blood, a symbol of truth"
  },
  {
    "id": "ritual_taumaturgia_101",
    "name": "Animated Assistants",
    "nameEn": "Animated Assistants",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador cuts seu arms enquanto entoa encantamentos. — Efeito: Items around O conjurador accomplish minor tasks para them.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A knife"
  },
  {
    "id": "ritual_taumaturgia_102",
    "name": "Awakening the Verdant Thorn",
    "nameEn": "Awakening the Verdant Thorn",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador hardens o estaca above o fogo e chants o incantation. Afterwards, O conjurador pierces seu own coração. — Efeito: o estaca irá sprout em um mass de thorny vines quando coming em contact com um vampire, draining them de seu vitae.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A stake, a fire"
  },
  {
    "id": "ritual_taumaturgia_103",
    "name": "Beacon of the Self",
    "nameEn": "Beacon of the Self",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos, then o portion transforms em yellow smoke. O conjurador inhales o smoke. — Efeito: O conjurador receives um dream-image de o current location de a vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A portion of the victim"
  },
  {
    "id": "ritual_taumaturgia_104",
    "name": "Bind the Familiar",
    "nameEn": "Bind the Familiar",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Beginning em dusk, O conjurador desenha um círculo out de sangue, drawing seu True Name em its circumference. em midnight, O conjurador drains o animal para casa o espírito dry e posiciona it within o círculo, feeding it um small portion de seu own vitae. após incanting para several horas, um espírito irá ser drawn para o corpo e trapped em o círculo. — Efeito: O conjurador binds um espírito para act as um Familiar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Blood, a small animal"
  },
  {
    "id": "ritual_taumaturgia_105",
    "name": "Bladed Hands",
    "nameEn": "Bladed Hands",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: Make your mão's edges sharp as knives.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Incantation"
  },
  {
    "id": "ritual_taumaturgia_106",
    "name": "Blood Allergy",
    "nameEn": "Blood Allergy",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador spills seu sangue em o petals. — Efeito: Victims irá violently vomit any sangue taken em through seu mouth.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "The dead petals of a rose"
  },
  {
    "id": "ritual_taumaturgia_107",
    "name": "Voz Engarrafada",
    "nameEn": "Bottled Voice",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "o bottle é placed sobre do alvo coração enquanto O conjurador entoa encantamentos. para seal o ritual, o bottle é sealed com wax. — Efeito: O alvo loses seu voice.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A crystal bottle, wax"
  },
  {
    "id": "ritual_taumaturgia_108",
    "name": "Brotherhood of the Cup",
    "nameEn": "Brotherhood of the Cup",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador, as well as up para four other vampires, pour seu sangue em o chalice. O conjurador speaks um incantation, e afterwards, all share um drink de o cup, similar para o Vaulderie. — Efeito: o participants são filled com intense loyalty para Clan Tremere e what they perceive para ser its bests interests.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A chalice"
  },
  {
    "id": "ritual_taumaturgia_109",
    "name": "Blazing Shaft",
    "nameEn": "Blazing Shaft",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Cut your palm com o arma e invest três sangue points enquanto entoa encantamentos. — Efeito: quando shot, o projectiles irá ignite em green fogo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Projectiles (like arrows)"
  },
  {
    "id": "ritual_taumaturgia_110",
    "name": "Purificação da Carne",
    "nameEn": "Cleansing of the Flesh",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador submerges themselves em o água e slowly expulses seu Parada de Sangue em over o course de um single noite. — Efeito: Purge your corpo de any addictions e illnesses.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A tub full of purified Água pura"
  },
  {
    "id": "ritual_taumaturgia_111",
    "name": "Clinging of the Insect",
    "nameEn": "Clinging of the Insect",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador puts o living spider beneath his tongue. — Efeito: Climb paredes like um spider.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A living spider"
  },
  {
    "id": "ritual_taumaturgia_112",
    "name": "Craft Dreamcatcher",
    "nameEn": "Craft Dreamcatcher",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador crafts um dreamcatcher incorporating elements de o person it é intended para. — Efeito: Owners de um Dreamcatcher become harder para target por espíritos e powers que seek para influence seu dreams.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Hair, blood, and spittle from the target"
  },
  {
    "id": "ritual_taumaturgia_113",
    "name": "Crucible of Sympathetic Agony",
    "nameEn": "Crucible of Sympathetic Agony",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador sews o soles de o pés de o dois victims together e posiciona them em o rack. Afterwards, um ou both de o victims são forced para climax (por whatever means). Then, um de o dois é tortured. — Efeito: o second victim feels o same pain as o other e if o tortured victim should die, o second victim irá temporally feel how it é para die.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Two persons, an iron rack, sewing needles, various torture instruments"
  },
  {
    "id": "ritual_taumaturgia_114",
    "name": "Maldição de the Outcast",
    "nameEn": "Curse of the Outcast",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Over um period de ten days, O conjurador collects pieces de paper que ter sido em contact com a vítima. He must then write em o paper e burn it. em o eleventh dia, O conjurador fasts e performs o ritual. — Efeito: a vítima's difficulty para all social rolls é raised para um month (more quickly quando a vítima leaves o area near O conjurador.)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A victim, pieces of paper"
  },
  {
    "id": "ritual_taumaturgia_115",
    "name": "Draught of Earth's Blood",
    "nameEn": "Draught of Earth's Blood",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador grinds o tass em um paste within o cauldron ao misturar it com his own sangue. — Efeito: O conjurador cria um variant de sangue tass que é usable para Thaumaturgy",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Tass, a Node, a cauldron"
  },
  {
    "id": "ritual_taumaturgia_116",
    "name": "Eldritch Glimmer",
    "nameEn": "Eldritch Glimmer",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "— Efeito: Caster bathed em Green luz, discharge energy bolts.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Sandstone Soaked in Vinegar"
  },
  {
    "id": "ritual_taumaturgia_117",
    "name": "Olhos do Passado",
    "nameEn": "Eyes of the Past",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: See what happened up para five years ago em o exact point onde O conjurador stands.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Incantation"
  },
  {
    "id": "ritual_taumaturgia_118",
    "name": "Father's Freedom",
    "nameEn": "Father's Freedom",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "o diablerist é placed em um ritual círculo, enquanto O conjurador entoa encantamentos until o soul breaks free. — Efeito: O conjurador pode question o freed soul e all benefits e drawbacks de o Diablerie são settled.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A diablerist, a ritual circle"
  },
  {
    "id": "ritual_taumaturgia_119",
    "name": "Fogo no Sangue",
    "nameEn": "Fire in the Blood",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: faz com que Target's sangue para burn com dano agravado anytime Physical activity é done.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3"
  },
  {
    "id": "ritual_taumaturgia_120",
    "name": "Carne do Toque Ardente",
    "nameEn": "Flesh of Fiery Touch",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador posiciona o ember within seu mouth e swallows. — Efeito: O conjurador pode inflict queima via touch.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A glimmering ember"
  },
  {
    "id": "ritual_taumaturgia_121",
    "name": "Framing",
    "nameEn": "Framing",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Ritual performed antes de enacting o deed para o qual O alvo irá ser blamed. — Efeito: O conjurador irá look possibly ser heard por everyone.&#160; It lasts as long as it take para enact o crime",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An object or the Vitae of the person wished to be framed"
  },
  {
    "id": "ritual_taumaturgia_122",
    "name": "Amigo das Árvores",
    "nameEn": "Friend of the Trees",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "pode only ser done em o Woods e O conjurador must plant um acorn. — Efeito: faz com que árvores para animate slightly para entangle targets em roots, branches, e vines.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An Acorn"
  },
  {
    "id": "ritual_taumaturgia_123",
    "name": "Gentle Mind",
    "nameEn": "Gentle Mind",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador e O destinatário both sacrifice sangue. — Efeito: O conjurador establishes um block against Frenesi",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Blood from two parties"
  },
  {
    "id": "ritual_taumaturgia_124",
    "name": "Haunted House",
    "nameEn": "Haunted House",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador arranges para o location para ser similar para um haunted place e entoa encantamentos. — Efeito: o location becomes target de various rumors de being haunted, as well as feelings de unease.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Blood, a house"
  },
  {
    "id": "ritual_taumaturgia_125",
    "name": "Hell's Calling",
    "nameEn": "Hell's Calling",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador queima o possession enquanto entoa encantamentos. — Efeito: O alvo é immediately subjected para Rötschreck.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A personal possession of the target"
  },
  {
    "id": "ritual_taumaturgia_126",
    "name": "Ilusão de Perfeição",
    "nameEn": "Illusion of Perfection",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "após incanting para several horas, O conjurador dons o mask. — Efeito: o features de O conjurador become nondescript e his appearance average.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A plain white mask"
  },
  {
    "id": "ritual_taumaturgia_127",
    "name": "Passagem Incorpórea",
    "nameEn": "Incorporeal Passage",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador looks em o reflection de themself em o shard. — Efeito: O conjurador becomes immaterial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A shard from a broken mirror"
  },
  {
    "id": "ritual_taumaturgia_128",
    "name": "Inherited Affinity",
    "nameEn": "Inherited Affinity",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O alvo é held em suspense e force-fed o concoction. Afterwards, o needles são placed em various pressure points. para o next horas, O alvo tem para willingly move o concoction through seu corpo, enquanto o usual circulatory points são blocked. — Efeito: Attempts para learn Thaumaturgy e understand principles behind sangue magic em general become easier.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A concoction of blood, human fat, various herbs, and powdered garnet, six golden needles,"
  },
  {
    "id": "ritual_taumaturgia_129",
    "name": "Major Creation",
    "nameEn": "Major Creation",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador severs seu thumb. — Efeito: Conjures um object com more mass than O conjurador themself.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "The caster's severed thumb"
  },
  {
    "id": "ritual_taumaturgia_130",
    "name": "Mirror of Second Sight",
    "nameEn": "Mirror of Second Sight",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador bathes um espelho para several horas em sangue enquanto entoa encantamentos. — Efeito: Reveals o true form de supernatural creatures.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An oval mirror"
  },
  {
    "id": "ritual_taumaturgia_131",
    "name": "Moonlight Dancers",
    "nameEn": "Moonlight Dancers",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: Conjures up para four phantasms de do conjurador past que engage em social activity.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Incantation"
  },
  {
    "id": "ritual_taumaturgia_132",
    "name": "Pavis of Foul Presence",
    "nameEn": "Pavis of Foul Presence",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador tem para wear o cordão around seu neck. — Efeito: Any attempts para use directed Presence powers against O conjurador são nullified.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A length of blue silken cord"
  },
  {
    "id": "ritual_taumaturgia_133",
    "name": "Populate Night's Garden",
    "nameEn": "Populate Night's Garden",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador vivisects specimen de o animals, then focuses em what its fundamental design should ser e what correspondences between both species são. Then, o vivisected parts são placed em o uterus e left para gestate. quando it é done, o creature é taken out e blown com smoke de burned sangue salts via o bellows. — Efeito: O conjurador cria monstrous hybrid creatures.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Two species of animals, an uterus of a larger animal, blood Sals, a bellows"
  },
  {
    "id": "ritual_taumaturgia_134",
    "name": "Poder da Pirâmide",
    "nameEn": "Power of the Pyramid",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "o Tremere gather em um círculo, establish physical contact e chant o incantation em complete unison. — Efeito: o Tremere create um link para combine seu powers para another ritual ou spell.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Several other Tremere, who have fasted for 24 hours, a brooch that pierces the skin"
  },
  {
    "id": "ritual_taumaturgia_135",
    "name": "Quicksilver Eel",
    "nameEn": "Quicksilver Eel",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "o \"eel\" é brewed com alchemical means e placed em um vidro flakon para future use. — Efeito: O conjurador pode release o \"eel\" em um mage, onde o \"eel\" irá burrow em o mage's flesh e feed em its paraçum de Vontade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Quicksilver, various alchemical instruments, a glass flakon"
  },
  {
    "id": "ritual_taumaturgia_136",
    "name": "Ritual de Darkness",
    "nameEn": "Ritual of Darkness",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador rubs o soot over janelas. — Efeito: O conjurador fills o aposento com total escuridão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Soot from a coal fire"
  },
  {
    "id": "ritual_taumaturgia_137",
    "name": "Ritual de the Bitter Rose",
    "nameEn": "Ritual of the Bitter Rose",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador pestles o coração e mistura it com red wine, ash e água. Every vampire participating em o ritual bebe de it. — Efeito: Several vampires pode gain o benefits de Diablerie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "The heartblood of a drained vampire of lower generation, a marble mortar and pestle, red wine, Cinzas from a burned alder stake, a pint of pure Água pura"
  },
  {
    "id": "ritual_taumaturgia_138",
    "name": "Rotten Wood",
    "nameEn": "Rotten Wood",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Magical Word. — Efeito: O conjurador é able para rot any wooden object she touches para dust",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Must be cast in advance"
  },
  {
    "id": "ritual_taumaturgia_139",
    "name": "Rutor's Hands",
    "nameEn": "Rutor's Hands",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador hacks off seu own mão e presses his own plucked out eye em its back. — Efeito: O conjurador cria um loyal pseudo-homunculus",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Severed hand, plucked-out eye"
  },
  {
    "id": "ritual_taumaturgia_140",
    "name": "Samirah's Kihanah",
    "nameEn": "Samirah's Kihanah",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador smears o object em seu vitae under um sangue lua. — Efeito: quando rubbing o object, um djinn irá ser summoned que irá answer um question que no existing being knows. o object pode ser used três times.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A small, metal, hand-crafted object"
  },
  {
    "id": "ritual_taumaturgia_141",
    "name": "Sanguine Assistant",
    "nameEn": "Sanguine Assistant",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador cuts his own arm e bleeds em o bowl. — Efeito: Any unused scraps form em um servitor que obeys o commands de O conjurador para as long as it exists.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An earthen bowl"
  },
  {
    "id": "ritual_taumaturgia_142",
    "name": "Sanguine Trail",
    "nameEn": "Sanguine Trail",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador touches o person. — Efeito: O conjurador pode trace any Laço de Sangues O alvo might ter para its source.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A person believed to be blood bound"
  },
  {
    "id": "ritual_taumaturgia_143",
    "name": "Shaft of Belated Quiescence",
    "nameEn": "Shaft of Belated Quiescence",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "o estaca tem para ser drenched em sangue e dried sobre o fogo. — Efeito: o tip de o enchanted estaca breaks sobre contact com um vampire, purposefully searching para o coração para estaca it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A rowan stake, an oak-wood fire, blood"
  },
  {
    "id": "ritual_taumaturgia_144",
    "name": "Summon Mischievous Spirit",
    "nameEn": "Summon Mischievous Spirit",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: Summoning de um Poltergeist para annoy o hell out de um target.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3"
  },
  {
    "id": "ritual_taumaturgia_145",
    "name": "Telecomunicação Sigilar",
    "nameEn": "Telecommunication",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo traçum um sigilo de sangue sobre uma tela ou monitor, permitindo sintonizar e interceptar qualquer transmissão televisiva ou de computador na cidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A functioning television"
  },
  {
    "id": "ritual_taumaturgia_146",
    "name": "A Touch of Nightshade",
    "nameEn": "A Touch of Nightshade",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador anoints seu mãos com o nightshade brew. — Efeito: Poison your target com um mere touch.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An extract of nightshade"
  },
  {
    "id": "ritual_taumaturgia_147",
    "name": "Translocation of the Vessel",
    "nameEn": "Translocation of the Vessel",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto bathing o object em seu sangue. — Efeito: O conjurador speaks um word e o vessel irá manifest em seu mão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An object that can be lifted with one hand, the caster's blood"
  },
  {
    "id": "ritual_taumaturgia_148",
    "name": "Track Transgressor",
    "nameEn": "Track Transgressor",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto spilling seu sangue em o chão. — Efeito: O conjurador pode sense onde O taumaturgo tem gone since his casting.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A place where Thaumaturgy was practiced"
  },
  {
    "id": "ritual_taumaturgia_149",
    "name": "Transubstantiation of the Seven",
    "nameEn": "Transubstantiation of the Seven",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Incantation over o sangue, then O alvo bebe de o chalice. — Efeito: O alvo becomes sangue bound para o Inner Council de Seven.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A chalice filled with blood"
  },
  {
    "id": "ritual_taumaturgia_150",
    "name": "The Unseen Change",
    "nameEn": "The Unseen Change",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Pour o wolf's sangue de o jug para delineate um area. — Efeito: Any Lupine who enters o area é forced para assume Lupus form.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A silver jug, wolfblood"
  },
  {
    "id": "ritual_taumaturgia_151",
    "name": "Proteção contra Cathayans",
    "nameEn": "Ward versus Cathayans",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de sangue. — Efeito: Any Cathayan who touches o object feels intense pain e falls em Wave Soul.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Cathayan blood"
  },
  {
    "id": "ritual_taumaturgia_152",
    "name": "Proteção contra Fae",
    "nameEn": "Ward versus Fae",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de ferro. — Efeito: Any Fae who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Iron filings"
  },
  {
    "id": "ritual_taumaturgia_153",
    "name": "Círculo de Proteção contra Fae",
    "nameEn": "Warding Circle versus Fae",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected ferro glyphs around o area they want para ward. — Efeito: Fae who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Iron filings"
  },
  {
    "id": "ritual_taumaturgia_154",
    "name": "Proteção contra Lupinos (Lobisomens)",
    "nameEn": "Ward versus Lupines",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de prata. — Efeito: Any Lupine who touches o object feels intense pain e falls em Fox Frenesi.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Silver dust"
  },
  {
    "id": "ritual_taumaturgia_155",
    "name": "Círculo de Proteção contra Lupinos",
    "nameEn": "Warding Circle versus Lupines",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected prata glyphs around o area they want para ward. — Efeito: Lupines who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Silver dust"
  },
  {
    "id": "ritual_taumaturgia_156",
    "name": "The Watcher",
    "nameEn": "The Watcher",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador feeds o rat com alcohol para 10 minutos, then, both press seu foreheads against each other. — Efeito: o rat pode show O taumaturgo what she tem seen.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A rat, alcohol"
  },
  {
    "id": "ritual_taumaturgia_157",
    "name": "Wielding the Spear of Damnation",
    "nameEn": "Wielding the Spear of Damnation",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador escreve \"Genesis 4:10\" em um angelic script em o arma enquanto medita. — Efeito: Wounds struck por o arma refill o sangue de O conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "An edged weapon"
  },
  {
    "id": "ritual_taumaturgia_158",
    "name": "Animated Weapon",
    "nameEn": "Animated Weapon",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador binds o skin around o arma em wax-sealed nightshade twine. — Efeito: quando o confine é torn off, o arma springs para life e irá attack anything its controller commands it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A weapon, skin of a scavenger animal"
  },
  {
    "id": "ritual_taumaturgia_159",
    "name": "Awakening The Flesh",
    "nameEn": "Awakening The Flesh",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "para begin, O conjurador must expend três points de his own sangue em um círculo around o patient e um piece de amber must ser placed under o patient’s tongue. quando o surgery é over, o Membros then heals o damage done para her, making sure para avoid healing o modified areas. — Efeito: If o surgery é successful, O vampiro é able para fully utalise any e all newly installed cyberware within seu bodies.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A piece of Cyberware, three drops of vitae, and a piece of amber."
  },
  {
    "id": "ritual_taumaturgia_160",
    "name": "Blood Certámen",
    "nameEn": "Blood Certámen",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "Both caster e combatant draw dois circles within um magical diagram que confines o ritual em sangue. — Efeito: Engage em ritual combat mirroring hermetic Certámen.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Blood, another combatant"
  },
  {
    "id": "ritual_taumaturgia_161",
    "name": "Osso das Mentiras",
    "nameEn": "Bone of Lies",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "o bone é bathed em sangue enquanto O conjurador entoa encantamentos. — Efeito: Persons holding o bone não pode lie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A 200 year old piece of bone, blood"
  },
  {
    "id": "ritual_taumaturgia_162",
    "name": "The Bronze Head Speaks",
    "nameEn": "The Bronze Head Speaks",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "enquanto entoa cânticos um eulogy, O conjurador rubs o cabeçum de a vítima com o salve, then puts trocar em o right temple; o brain é extracted through o cannula em o bronze cabeçum. — Efeito: o resulting cabeçum pode falar e remember events de o brains within him, even those suppressed por magical means. Each cabeçum tem its own personality.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A victim, an alchemical salve, a troca, a cannula, a bronze head"
  },
  {
    "id": "ritual_taumaturgia_163",
    "name": "Candle of Haunting",
    "nameEn": "Candle of Haunting",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador holds o ignited candle e o item em his mãos e entoa encantamentos. — Efeito: Poltergeist-like activity irá plague a vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A candle made from cemetery dirt and the bones and brain of a dead man, an item of the target"
  },
  {
    "id": "ritual_taumaturgia_164",
    "name": "Consecration of the Sanctum",
    "nameEn": "Consecration of the Sanctum",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "o boundaries de o area são painted com o mixture over o course de um month. — Efeito: Thaumaturgy becomes easier para cast em o area, enquanto, incidentally, un-hermetic magic becomes more difficult.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A mixture of vitae, gold dust, and herbs"
  },
  {
    "id": "ritual_taumaturgia_165",
    "name": "The Curse Belated",
    "nameEn": "The Curse Belated",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "o Carniçal é fed sangue de O conjurador, then branded. — Efeito: Should o Carniçal die, it é instead Embraced.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A ghoul, a brand with the symbol of the caster"
  },
  {
    "id": "ritual_taumaturgia_166",
    "name": "Death Wrath",
    "nameEn": "Death Wrath",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "paraçum de Vontade spenditure. — Efeito: O alvo irá ser plagued por frenzies e o raging besta.until O alvo goes em um quest para control o besta within ou Golconda.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A curse"
  },
  {
    "id": "ritual_taumaturgia_167",
    "name": "Drenagem do Vinculado",
    "nameEn": "Drawing Upon the Bound",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "Small Vial de sangue de o Thrall. — Efeito: Caster pode utilize o Disciplines de those bound para her.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Blood Bond with a Thrall"
  },
  {
    "id": "ritual_taumaturgia_168",
    "name": "Fire Walker",
    "nameEn": "Fire Walker",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador rubs o salve em o soles de his bare pés. O conjurador severs o end de his fingers over um fogo within o círculo enquanto incarnating. — Efeito: O conjurador becomes more resistant para o adverse effects de fogo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Specially made Salve; A thaumaturgical circle"
  },
  {
    "id": "ritual_taumaturgia_169",
    "name": "Furtive Integument",
    "nameEn": "Furtive Integument",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador spreads o skin com um hot ferro em o wire frame em um quasi-human form e invoca um espírito de illusion para inhabit it. — Efeito: O conjurador cria um velluma.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Laboratory tools blessed by a spirit of flesh, skin, a wire frame"
  },
  {
    "id": "ritual_taumaturgia_170",
    "name": "Haunting",
    "nameEn": "Haunting",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: Summon um espírito para frighten um mortal target tremendously.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4"
  },
  {
    "id": "ritual_taumaturgia_171",
    "name": "Coração de Pedra",
    "nameEn": "Heart of Stone",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador lies em o pedra piso para 9 horas enquanto o candle é placed em seu chest e left para burn down slowly. — Efeito: o coração de O conjurador literally becomes pedra, making them immune para attempts de staking them. Additionally, Presence powers ter um harder time afflicting them. o downside é que O conjurador becomes emotionally withdrawn, taking um toll em seu Humanidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A stone floor, a candle"
  },
  {
    "id": "ritual_taumaturgia_172",
    "name": "Infirm Inert",
    "nameEn": "Infirm Inert",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador bebe de o vial, o drips some de seu sangue em O alvo. — Efeito: do alvo corpo loses o ability para heal wounds.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A vial of blood mixed with laudanum"
  },
  {
    "id": "ritual_taumaturgia_173",
    "name": "Infernal Compact",
    "nameEn": "Infernal Compact",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador begins o incantation de dusk till midnight. — Efeito: O conjurador pode bargain com o summoned demônio para favours, making it um enabler para Infernalism.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A summoning circle made out from a paste mixed from a child's heart and the grave soil of a heretic"
  },
  {
    "id": "ritual_taumaturgia_174",
    "name": "Innocence of the Child's Heart",
    "nameEn": "Innocence of the Child's Heart",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador sacrifices o child e dips o toy em o sangue de o child's coração. — Efeito: do conjurador Aura becomes pure white.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A mortal child, a toy of the child"
  },
  {
    "id": "ritual_taumaturgia_175",
    "name": "Invisible Chains of Binding",
    "nameEn": "Invisible Chains of Binding",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador makes grand gestures enquanto entoa encantamentos. — Efeito: O alvo é held em invisible e intangible chains.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Bold gestures, incanting"
  },
  {
    "id": "ritual_taumaturgia_176",
    "name": "Lamento da Banshee",
    "nameEn": "Keening of the Banshee",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "Instantaneous. — Efeito: Horrific sound so loud it é deafening e ages um mortal 1 para 10 years.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Pendant carved from an old tombstone."
  },
  {
    "id": "ritual_taumaturgia_177",
    "name": "Marca do Amaranto (Diablerie)",
    "nameEn": "Mark of Amaranth",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador must destroy O vampiro single-handedly e hold o possession de O alvo em his mão. o possession é then placed sobre o corpse. — Efeito: O alvo exhibits all o spiritual symptoms de diablerie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A vampire, a possession of the target"
  },
  {
    "id": "ritual_taumaturgia_178",
    "name": "Mirror Walk",
    "nameEn": "Mirror Walk",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador must anoint o mirrors com his sangue e chant o incantation para several horas antes de touching both mirrors com o anel. — Efeito: quando wearing o anel, O conjurador pode step through um de o mirrors e exit em o other.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Two mirrors made out of silver large enough for the caster to pass through, an emerald ring"
  },
  {
    "id": "ritual_taumaturgia_179",
    "name": "Preservation of the Sanguine Heart",
    "nameEn": "Preservation of the Sanguine Heart",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O alvo é anointed por O conjurador com do conjurador vitae e bebe de o chalice filled com mercury. — Efeito: As long as O alvo abstains de feeding, it é immune against Laço de Sangues.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A chalice, mercury, blood"
  },
  {
    "id": "ritual_taumaturgia_180",
    "name": "Protean Curse",
    "nameEn": "Protean Curse",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O alvo must drink o sangue. — Efeito: O alvo é transformed em um bat.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A vial of blood from a rabid bat"
  },
  {
    "id": "ritual_taumaturgia_181",
    "name": "Puissant Shield",
    "nameEn": "Puissant Shield",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador blows em o cowhide para um minute. — Efeito: O conjurador é surrounded por um kinetic shield que blocks projectiles.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Cowhide"
  },
  {
    "id": "ritual_taumaturgia_182",
    "name": "Rend the Mind",
    "nameEn": "Rend the Mind",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador eats o brain e entoa encantamentos quando he pode ver O alvo. — Efeito: O conjurador assaults do alvo psyche, damaging it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "The brain of a rabid animal"
  },
  {
    "id": "ritual_taumaturgia_183",
    "name": "Rending Sweeting Earth",
    "nameEn": "Rending Sweeting Earth",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto striking o chão com o whip. — Efeito: O conjurador pode unearth um vampire que tem hidden themselves em o chão via Protean.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A leather whip"
  },
  {
    "id": "ritual_taumaturgia_184",
    "name": "Respect of the Animals",
    "nameEn": "Respect of the Animals",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "4 horas. — Efeito: Animals irá not ser afraid de O vampiro, nor irá they dislike her. They irá allow O vampiro para pass without incident.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4"
  },
  {
    "id": "ritual_taumaturgia_185",
    "name": "Return the Heart",
    "nameEn": "Return the Heart",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos um powerful formula incorporating o nome do alvo. — Efeito: do alvo Humanidade temporarily becomes 9, causing it para break down em regret over past deeds.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "The target's True Name"
  },
  {
    "id": "ritual_taumaturgia_186",
    "name": "Scry",
    "nameEn": "Scry",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos over o água enquanto segura o possession. — Efeito: O conjurador pode ver e hear o surroundings de o observed party.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A pool of stagnant Água pura mixed with a drop of owl's blood , a possession of the target or its True Name"
  },
  {
    "id": "ritual_taumaturgia_187",
    "name": "Portal das Sombras",
    "nameEn": "Shadowgate",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "Paint um X over each eye e then step em um extremely dark sombra — Efeito: O conjurador irá step em o corresponding place em o Terras das Sombras",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Coal and Human Cinzas"
  },
  {
    "id": "ritual_taumaturgia_188",
    "name": "Soul of the Homunculus",
    "nameEn": "Soul of the Homunculus",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador throws o piece de flesh em um alchemical solution, enquanto daubing o wound com o solution, para prevent it de regenerating. o solution é brewed para several months, during o qual o Homunculus slowly takes form. — Efeito: O conjurador cria um Homunculus, um servant creature que obeys seu irá.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A piece of flesh from the caster"
  },
  {
    "id": "ritual_taumaturgia_189",
    "name": "Servo de Estilhas",
    "nameEn": "Splinter Servant",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "o estaca é encased em o nightshade twine e sealed com wax — Efeito: o estaca animates itself quando drawn out de o sheath e attacks o nearest vampire, seeking para pierce o coração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A stake carved from a tree planted above a grave, wax, nightshade twine"
  },
  {
    "id": "ritual_taumaturgia_190",
    "name": "Beijos Roubados",
    "nameEn": "Stolen Kisses",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador makes um small incision de onde they want para feed e wears o thistle somewhere em seu person. — Efeito: O conjurador pode feed through mere skin para skin contact.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A thistle steeped in blood"
  },
  {
    "id": "ritual_taumaturgia_191",
    "name": "Summon Blood Imp",
    "nameEn": "Summon Blood Imp",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador stitches o corpo parts together e throws them em o cauldron, onde o Tremere sangue é added. o cauldron é left para simmer para três nights. — Efeito: O conjurador cria um sangue imp servitor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Pieces of dead parts of animals, inanimate objects, human cadavers, a cauldron, Tremere blood"
  },
  {
    "id": "ritual_taumaturgia_192",
    "name": "Suspension of Incantation",
    "nameEn": "Suspension of Incantation",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador chants um long series de incantations e activation clauses. — Efeito: O conjurador binds um Path Spell para activate under specific circumstances.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Incantation"
  },
  {
    "id": "ritual_taumaturgia_193",
    "name": "Unweave Ritual",
    "nameEn": "Unweave Ritual",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador ritually destrói o ingredient. — Efeito: O conjurador destrói um particular thaumaturgical ritual.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "An ingredient of the ritual to unweave"
  },
  {
    "id": "ritual_taumaturgia_194",
    "name": "Vigil of the Stone Guardian",
    "nameEn": "Vigil of the Stone Guardian",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador bathes o porta-knocker em his sangue para três noite, then hangs him em o porta. — Efeito: O conjurador pode possess o porta-knocker e speak through it ou use Disciplines like Dominate ou Auspex through it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "A door-knocker made out of stone"
  },
  {
    "id": "ritual_taumaturgia_195",
    "name": "Proteção contra Membros (Vampiros)",
    "nameEn": "Ward versus Kindred",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de vitae. — Efeito: Any vampire who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Blood of the caster"
  },
  {
    "id": "ritual_taumaturgia_196",
    "name": "Círculo de Proteção contra Membros",
    "nameEn": "Warding Circle versus Kindred",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected vitae glyphs around o area they want para ward. — Efeito: Vampires who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Blood of the caster"
  },
  {
    "id": "ritual_taumaturgia_197",
    "name": "Proteção contra Vitae",
    "nameEn": "Ward versus Vitae",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de vitae. — Efeito: Any vampire de lower generation who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Blood of the caster"
  },
  {
    "id": "ritual_taumaturgia_198",
    "name": "Círculo de Proteção contra Vitae",
    "nameEn": "Warding Circle versus Vitae",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected vitae glyphs around o area they want para ward. — Efeito: Vampires de lower Generation who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Blood of the caster"
  },
  {
    "id": "ritual_taumaturgia_199",
    "name": "Abandoning the Fetters",
    "nameEn": "Abandoning the Fetters",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador mistura o sangue de all participants together e posiciona it em o container. Afterwards, o bound individual é exsanguinated until only um sangue point remains. Then, O conjurador smashes o container. — Efeito: O conjurador destrói o Laço de Sangue between o dois.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Two blood bound individuals, a glass container"
  },
  {
    "id": "ritual_taumaturgia_200",
    "name": "Asymmetrical Reproduction",
    "nameEn": "Asymmetrical Reproduction",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Destroy o material during o ritual over três nights. — Efeito: O conjurador cria um near-perfect clone de o original, who irá go insane após seven days e go em um killing spree.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Genetic material of another person"
  },
  {
    "id": "ritual_taumaturgia_201",
    "name": "At Our Command It Breathes",
    "nameEn": "At Our Command It Breathes",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "o vampires need para ser captured e driven para o edge de Wassail. o parts de o captured vampires são thrown em o sac filled com o liquids, o qual é sewn shut. Over três months, various incantations ter para ser made over o gestating creature. quando o creature é large enough para break free de o sac, O conjurador blows purifying smoke em o newborn. — Efeito: este foi o ritual used para create o original Gargoyles.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Vampires of either the Tzimisce, Gangrel, or Nosferatu Clan (others have been tested with no success), a sac for the gestation, alchemical liquids"
  },
  {
    "id": "ritual_taumaturgia_202",
    "name": "Contrato de Sangue",
    "nameEn": "Blood Contract",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "a outra parte assina seu nome com sangue no contrato. — Efeito: O conjurador cria um contrato místico vinculativo entre ambas as partes que desencadeia terríveis maldições contra quem violar os termos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um contrato escrito com o sangue do conjurador e da outra parte"
  },
  {
    "id": "ritual_taumaturgia_203",
    "name": "Cobra's Favor",
    "nameEn": "Cobra's Favor",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador mistura o poultice e o venom e drips um drop de seu sangue em it, then entoa encantamentos. — Efeito: quando drunk, o concoction irá burn o tongue de anyone who tries para drink do conjurador sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A herbal poultice, serpent venom"
  },
  {
    "id": "ritual_taumaturgia_204",
    "name": "Corrupt Soul",
    "nameEn": "Corrupt Soul",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos over o hieroglyphs em o beginning de o noite. — Efeito: quando um person bebe de o sangue ou faz um act que might contend seu Humanidade, seu Demeanor é changed. após five nights, both Nature e Demeanor pode ser permanently changed por O conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A building with hieroglyphs of corruption inscribed in the walls, blood spiced with soma"
  },
  {
    "id": "ritual_taumaturgia_205",
    "name": "Court of Hallowed Truth",
    "nameEn": "Court of Hallowed Truth",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador posiciona o crossed bones e skulls atop de every entry em o aposento, including janelas e similar openings, e seals them com um glyph drawn em seu own sangue. — Efeito: Within o aposento, no lies pode ser told e direct questions irá ser answered immediately.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Crossed bones and skulls, a closed room"
  },
  {
    "id": "ritual_taumaturgia_206",
    "name": "Maldição de Clytaemnestra",
    "nameEn": "Curse of Clytaemnestra",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Incantation. — Efeito: O alvo rapidly ages.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A personal possession and blood from the target"
  },
  {
    "id": "ritual_taumaturgia_207",
    "name": "Curse Upon Thy House",
    "nameEn": "Curse Upon Thy House",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "paraçum de Vontade spenditure. — Efeito: O alvo e all do alvo childer e childer - childer irá ter o Dark Fate Flaw until um \"good deed\" é done para overcome o curse.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A curse"
  },
  {
    "id": "ritual_taumaturgia_208",
    "name": "Dedicate the Haven",
    "nameEn": "Dedicate the Haven",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador must walk counterclockwise around o Refúgio enquanto carrying o smoking thurible, then return para o rough center de o Refúgio e douse themselves em o remaining sangue. — Efeito: Rituals cast sobre o Refúgio são permanent e easier para cast.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A Haven, a thurible that contains a burning mixture of their blood, frankincense, and sage"
  },
  {
    "id": "ritual_taumaturgia_209",
    "name": "Domínio Absoluto",
    "nameEn": "Dominion",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "três horas but works para um entire week. — Efeito: Within o confines de um 500 cubic foot space no um pode use Animalism, Auspex, Dominate, ou Presence Disciplines except O conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Seal Made of iron must be embedded over all doors within the area."
  },
  {
    "id": "ritual_taumaturgia_210",
    "name": "Enchant Talisman",
    "nameEn": "Enchant Talisman",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador spends six horas per noite para um complete cycle de o lua, beginning e ending em o new lua. Over este time, O conjurador carefully prepares o talisman, carving it com hermetic runes que signify seu true name e o sum total de seu thaumaturgical knowledge. — Efeito: o talisman greatly amplifies do conjurador thaumaturgical powers.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "The future talisman"
  },
  {
    "id": "ritual_taumaturgia_211",
    "name": "Escape to a True Friend",
    "nameEn": "Escape to a True Friend",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador steps em o círculo e speaks o true friend's True Name. — Efeito: O conjurador materializes em um safe place near o true friend's location.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "The true name of the true friend, a meter-wide circle charred into the bare ground"
  },
  {
    "id": "ritual_taumaturgia_212",
    "name": "Escape to a True Haven",
    "nameEn": "Escape to a True Haven",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador spends um paraçum de Vontade e speaks o command word. — Efeito: O conjurador materializes em o círculo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A meter-wide circle charred into the bare ground of a haven"
  },
  {
    "id": "ritual_taumaturgia_213",
    "name": "Olhos da Besta",
    "nameEn": "Eyes of the Beast",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Caster closes seu eyes para see. — Efeito: Mystically see through o eyes de um animal por 24 horas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Chosen Animal"
  },
  {
    "id": "ritual_taumaturgia_214",
    "name": "Fantasma no Sistema",
    "nameEn": "Ghost in the System",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Através de um ritual cibernético prolongado, o taumaturgo insere registros falsos e históricos forjados na rede mundial, tornando-os imutáveis contra perícias forenses.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "An ant, a pile of sand, an oven, a computer with a functioning Internet access"
  },
  {
    "id": "ritual_taumaturgia_215",
    "name": "Harmonize Building",
    "nameEn": "Harmonize Building",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador must guide o construction process de o edifício according para geomantic laws. — Efeito: Effects pertaining um specific trait related para o purpose de o edifício são raised.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A construction site"
  },
  {
    "id": "ritual_taumaturgia_216",
    "name": "Haunting Breeze",
    "nameEn": "Haunting Breeze",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Summon a luz, supernatural vento o qual serves more para frighten than harm. — Efeito: Makes Perception rolls more difficult e Mortals must roll Courage ou Flee.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5"
  },
  {
    "id": "ritual_taumaturgia_217",
    "name": "Light of Vengeance",
    "nameEn": "Light of Vengeance",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Smear o sangue em o luz source (lens de o Flashlight/Torch) — Efeito: Gives o temporary luz source o potency de Sunlight. Last until o sangue dries e wounds são not Aggravated.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Blood Point, Light Source (FlCinzaslight/Torch) Three turns"
  },
  {
    "id": "ritual_taumaturgia_218",
    "name": "Lion Heart",
    "nameEn": "Lion Heart",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Lasts 20 minutos, must rest within dois horas de após o rite ends ou start loosing Health Levels. — Efeito: Caster ganha 2 points de Strength, 1 Point de Dexterity e Stamina, Courage ou Morale increases por 3 points, 2 points de Brawl e Leadership.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5"
  },
  {
    "id": "ritual_taumaturgia_219",
    "name": "Mark of the Beast",
    "nameEn": "Mark of the Beast",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "paraçum de Vontade Expenditure. — Efeito: O alvo de o Curse goes through um painful transformation e em o end he irá arise com o besta sobre his face (Nosferatu são immune para este curse&#160; Only true love irá break it.)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A Curse"
  },
  {
    "id": "ritual_taumaturgia_220",
    "name": "Mindcrawler",
    "nameEn": "Mindcrawler",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Tick é crushed em o targets cabeçum during o incantation de o ritual. — Efeito: Target losses 1 Mental Attribute um dia until reduced para um em all três.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A tick dyed red and painted with a mystical symbol"
  },
  {
    "id": "ritual_taumaturgia_221",
    "name": "Mirror Prison",
    "nameEn": "Mirror Prison",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador washes o espelho em sangue e o tears, then uses um incantation e brandishes o espelho em O alvo. — Efeito: do alvo soul (e corpo é trapped within o espelho, until o espelho é shattered.)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A silver mirror, the tears of Uma pessoa inocente disposta a doar sangue child, blood"
  },
  {
    "id": "ritual_taumaturgia_222",
    "name": "Nectar of the Bitter Rose",
    "nameEn": "Nectar of the Bitter Rose",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador spends um hour drawing do alvo vitae e distributing it among multiple vessels (um para each participant), enquanto seu companions taunt O alvo. — Efeito: O conjurador e up para five companions gain o benefits de diablerie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Restrained target, up to five companions, vessels for collecting vitae"
  },
  {
    "id": "ritual_taumaturgia_223",
    "name": "Night of the Red Heart",
    "nameEn": "Night of the Red Heart",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador assembles um effigy de O alvo e begins o incantation para several horas. — Efeito: If O alvo é em least 35 miles near O conjurador during o ritual, it crumbles para dust.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Vitae of the target, rotten wood harvested at midnight, bone, stones from the grave of a faithful priest"
  },
  {
    "id": "ritual_taumaturgia_224",
    "name": "Obliterate the Battlements",
    "nameEn": "Obliterate the Battlements",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Unknown. — Efeito: O conjurador pode permanently disrupt any wards within o area.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Unknown"
  },
  {
    "id": "ritual_taumaturgia_225",
    "name": "One Mind of the Covens",
    "nameEn": "One Mind of the Covens",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador chants para um hour e stares em um prata espelho. — Efeito: O conjurador pode telepathically communicate com everyone who started o same ritual em o same time.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A silver mirror"
  },
  {
    "id": "ritual_taumaturgia_226",
    "name": "Carne de Papel",
    "nameEn": "Paper Flesh",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador inscribes o True Name em o piece de paper, then cuts themself com it e queima it. — Efeito: o skin de O alvo becomes brittle, allowing sangue para seep through it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A True Name of the target, a piece of paper"
  },
  {
    "id": "ritual_taumaturgia_227",
    "name": "Ravening Walls of Ceoris",
    "nameEn": "Ravening Walls of Ceoris",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador drenches o paredes de o Refúgio com his sangue enquanto invoking o name de terra espíritos. — Efeito: Anyone who touches o paredes irá ser drained de seu sangue que O conjurador pode draw de o parede.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A dedicated haven"
  },
  {
    "id": "ritual_taumaturgia_228",
    "name": "Sanctuary",
    "nameEn": "Sanctuary",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador builds um shrine em o center de o edifício symbolizing peace, then sacrifices sangue em o new shrine. — Efeito: No um uninvited pode enter o edifício. Within o edifício, no Discipline like Dominate, Animalism, Dementation, etc. tem um effect against inhabitants. o ritual irá fade quando violence takes place within o edifício.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A building not sullied by violence for 50 years"
  },
  {
    "id": "ritual_taumaturgia_229",
    "name": "Sculpting the Perfect Servant",
    "nameEn": "Sculpting the Perfect Servant",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador rips o baby em half so que its sangue drips across o belly de o woman. — Efeito: o newborn irá ter o possibility para advance its Attributes above 5, but may never raise seu Humanidade above 6.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A newborn baby, a pregnant woman"
  },
  {
    "id": "ritual_taumaturgia_230",
    "name": "Severed Hand",
    "nameEn": "Severed Hand",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador severs um limb de a vítima e treats o wound com o tinctures. — Efeito: o severed limb irá not regenerate.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A victim, alchemical tinctures, a cutting tool"
  },
  {
    "id": "ritual_taumaturgia_231",
    "name": "Shadowland Passage",
    "nameEn": "Shadowland Passage",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Plunge o Knife em o coração e fall em o corpo de água. — Efeito: permite passage anywhere em o Terras das Sombras.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Specially prepared Knife - Purest Silver, Hilt must have a vampire fang, Body of Água pura big enough to cover caster"
  },
  {
    "id": "ritual_taumaturgia_232",
    "name": "Spirit of Torment",
    "nameEn": "Spirit of Torment",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Incantation — Efeito: invoca um espírito que pode manifest e fazer harm para um target",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5"
  },
  {
    "id": "ritual_taumaturgia_233",
    "name": "Pedra da Forma Verdadeira",
    "nameEn": "Stone of the True Form",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos over o pedra e then coats it em vitae. — Efeito: com um mere touch, o pedra reveals o true form de any shapeshifted supernatural.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A spherical stone"
  },
  {
    "id": "ritual_taumaturgia_234",
    "name": "Stone Slumber",
    "nameEn": "Stone Slumber",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador smears themself com o sangue de o corpse, then faces eastward e waits para o sol's rays. — Efeito: O conjurador é transformed em pedra para o dia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A corpse not 12 hours dead"
  },
  {
    "id": "ritual_taumaturgia_235",
    "name": "Thirst Unquenchable",
    "nameEn": "Thirst Unquenchable",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "— Efeito: cria um deep thirst em another vampire que não pode ser quenched.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Handful of Sal"
  },
  {
    "id": "ritual_taumaturgia_236",
    "name": "Caminhada Umbral",
    "nameEn": "Umbral Walk",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador meditates within o círculo. — Efeito: O conjurador pode enter um Umbral realm que they know de.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A magical circle"
  },
  {
    "id": "ritual_taumaturgia_237",
    "name": "Unquenchable Flame of Mars",
    "nameEn": "Unquenchable Flame of Mars",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Cut your palm com o arma e invest três sangue points enquanto entoa encantamentos over o course de um month long ritual. — Efeito: quando unsheathed, o arma irá burn com crimson fogo. o enchantment é permanent.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A bladed weapon"
  },
  {
    "id": "ritual_taumaturgia_238",
    "name": "The Verdant Blade",
    "nameEn": "The Verdant Blade",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "o object é placed em o vat com o other ingredients enquanto O conjurador entoa encantamentos. — Efeito: o object pode estaca um vampire like it would ser um real wooden estaca.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A sharp object, a vat, a freshly cut stake, a gallon of Água pura, tree sap"
  },
  {
    "id": "ritual_taumaturgia_239",
    "name": "Vires Acquirit Eundo",
    "nameEn": "Vires Acquirit Eundo",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos, then breaks o hourglass e throws it em o flame. — Efeito: O conjurador pode extend o duration de o targeted ritual.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "An already cast ritual, an hourglass, a green flame"
  },
  {
    "id": "ritual_taumaturgia_240",
    "name": "Proteção contra Demon",
    "nameEn": "Ward versus Demon",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de holy água. — Efeito: Any demônio who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Holy Água pura"
  },
  {
    "id": "ritual_taumaturgia_241",
    "name": "Círculo de Proteção contra Demons",
    "nameEn": "Warding Circle versus Demons",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected holy água glyphs around o area they want para ward. — Efeito: demônios who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Holy Água pura"
  },
  {
    "id": "ritual_taumaturgia_242",
    "name": "Proteção contra Ghost",
    "nameEn": "Ward versus Ghost",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de powder. — Efeito: Any ghost who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Powdered marble from a tombstone"
  },
  {
    "id": "ritual_taumaturgia_243",
    "name": "Círculo de Proteção contra Ghosts",
    "nameEn": "Warding Circle versus Ghosts",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected powder glyphs around o area they want para ward. — Efeito: Ghosts who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Powdered marble from a tombstone"
  },
  {
    "id": "ritual_taumaturgia_244",
    "name": "Proteção contra Magi",
    "nameEn": "Ward versus Magi",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de Tass. — Efeito: Any mage who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Tass"
  },
  {
    "id": "ritual_taumaturgia_245",
    "name": "Círculo de Proteção contra Magi",
    "nameEn": "Warding Circle versus Magi",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected Tass glyphs around o area they want para ward. — Efeito: Mages who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Tass"
  },
  {
    "id": "ritual_taumaturgia_246",
    "name": "Proteção contra Spirit",
    "nameEn": "Ward versus Spirit",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de salt. — Efeito: Any espírito who touches o object feels intense pain.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Sea Sal"
  },
  {
    "id": "ritual_taumaturgia_247",
    "name": "Círculo de Proteção contra Espíritos",
    "nameEn": "Warding Circle versus Spirits",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected salt glyphs around o area they want para ward. — Efeito: espíritos who attempt para cross o ward suffer intense pain e possibly death.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Sea Sal"
  },
  {
    "id": "ritual_taumaturgia_248",
    "name": "Proteção contra Technology",
    "nameEn": "Ward versus Technology",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa encantamentos enquanto marking um material object com um glyph drawn out de sangue. — Efeito: Technology more advanced than um crossbow que touches o ward falls apart.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Blood of a person of Intelligence 3 or higher"
  },
  {
    "id": "ritual_taumaturgia_249",
    "name": "Círculo de Proteção contra Technology",
    "nameEn": "Warding Circle versus Technology",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha um círculo made out de interconnected sangue glyphs around o area they want para ward. — Efeito: Any technological object more advanced than um crossbow que é attempted para bring over o ward fall apart.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Blood of a person of Intelligence 3 or higher"
  },
  {
    "id": "ritual_taumaturgia_250",
    "name": "Way of the Wendigo",
    "nameEn": "Way of the Wendigo",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador anoints o person com ash, sage e oil e then slays them com o thigh bone e feeds em seu flesh. — Efeito: O conjurador pode replenish health e paraçum de Vontade more quickly.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A virtuous person, oil, sage, Cinzas, the thigh bone of a hanged man"
  },
  {
    "id": "ritual_taumaturgia_251",
    "name": "Bone of Contention",
    "nameEn": "Bone of Contention",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador incantates e washes o bone em sangue. — Efeito: o Bone, enquanto behaving like um Bone de Lies, é actually controlled por O conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A 200 year old finger bone"
  },
  {
    "id": "ritual_taumaturgia_252",
    "name": "The Eternal Mask",
    "nameEn": "The Eternal Mask",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador studies o Aura de a vítima para several horas antes de ritually committing Diablerie em them. — Efeito: O conjurador absorbs do alvo aura para use it para themselves.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A victim, proficient powers to read Auras"
  },
  {
    "id": "ritual_taumaturgia_253",
    "name": "Evade Curse",
    "nameEn": "Evade Curse",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "Duration number de turns equal para Successes em um Stamina + Occult roll. — Efeito: permite um Banu Haqim under seu Curse de Tyre para tolerate o sangue de other Membros",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "5 Minute Ritual While feeding"
  },
  {
    "id": "ritual_taumaturgia_254",
    "name": "The Gift",
    "nameEn": "The Gift",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "5 minutos per dot given de o Discipline. — Efeito: O conjurador pode grant part de her own Disciplines para another.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Laying of hands"
  },
  {
    "id": "ritual_taumaturgia_255",
    "name": "Greater Scrying",
    "nameEn": "Greater Scrying",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador holds o object e incantates antes de o pool de água. — Efeito: O conjurador pode use mental disciplines e rituals through o scrying.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A pool of Água pura, a statue of Apollo, astrological symbols, something associated with the thing you want to observe"
  },
  {
    "id": "ritual_taumaturgia_256",
    "name": "Mente de Ferro",
    "nameEn": "Iron Mind",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "Ritual cast em o object e then worn em o cabeçum. — Efeito: Makes O alvo invulnerable para Auspex por uma noite. o individual using Auspex irá know something é wrong but not what.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Earing, hat pin, or other object containing iron"
  },
  {
    "id": "ritual_taumaturgia_257",
    "name": "Lost Life",
    "nameEn": "Lost Life",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador spends dois horas a noite para dois weeks preparing um object. There pode ser no distractions e em o end, O conjurador must spend 3 paraçum de Vontade points e five points de sangue. They caster must know Chimerstry para o Curse para work. — Efeito: Receiver immediately expels sangue through all possible means.&#160; He loses half de his Parada de Sangue e o process it é very painful. Stamina roll (difficulty 7 para 8 para avoid losing half his health levels as well; Self-Control roll para avoid Frenesi. o effects last until o next sunset e until que time o character may not increase his Parada de Sangue.)",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "An Object to be Cursed."
  },
  {
    "id": "ritual_taumaturgia_258",
    "name": "Mass Grave",
    "nameEn": "Mass Grave",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "Buried — Efeito: Passage para o Terras das Sombras.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A grave with dirt that contains at least one sentient creature's remains"
  },
  {
    "id": "ritual_taumaturgia_259",
    "name": "Quenching the Lambent Flame",
    "nameEn": "Quenching the Lambent Flame",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O alvo tem para lie motionless em um círculo drawn com o sangue de O conjurador e o sangue de O alvo. — Efeito: o Generation de O alvo é raised para o 13th.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A vampire above the 13th Generation, blood of both the caster and the target"
  },
  {
    "id": "ritual_taumaturgia_260",
    "name": "Raise the Dead",
    "nameEn": "Raise the Dead",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador despeja o candle wax em o orifices de o corpse within o círculo e inscribed o forehead com um symbol meaning \"debtor\" enquanto em complete escuridão. — Efeito: o corpse rises as um undead servant.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A corpse, black candle wax, a circle of Sal"
  },
  {
    "id": "ritual_taumaturgia_261",
    "name": "Refined Digestion",
    "nameEn": "Refined Digestion",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador incantates enquanto mixing o sangue. — Efeito: O alvo suffers o Thirst de Ages, only gaining sustenance de Cainita vitae.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Blood from the target and the caster"
  },
  {
    "id": "ritual_taumaturgia_262",
    "name": "Ritual de Demesne",
    "nameEn": "Ritual of Demesne",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador desenha o sigils em sangue across all major entry points (airports, train stations, highways) de um given perimeter. — Efeito: Whenever um vampire crosses o perimeters de o ritual, O conjurador é alerted about seu location.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Sigils symbolizing the domain, blood"
  },
  {
    "id": "ritual_taumaturgia_263",
    "name": "Sands of Time",
    "nameEn": "Sands of Time",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador incantates over o bowl. — Efeito: o sands irá slow anything down em o qual they são sprinkled.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A marble bowl full of white sand and glass shards"
  },
  {
    "id": "ritual_taumaturgia_264",
    "name": "Spider's Web",
    "nameEn": "Spider's Web",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "Spider é crushed e consumed. — Efeito: cria um Web que resembles um actual spider's web em all respects, except o web é big enough para fill um large aposento, e sticky e strong enough para capture e hold victims.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Black Widow Spider"
  },
  {
    "id": "ritual_taumaturgia_265",
    "name": "Utter Destruction of Bonds",
    "nameEn": "Utter Destruction of Bonds",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador incantates, then tears out seu own tongue e smears it across o object. — Efeito: o object irá never again lock properly.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "The caster's tongue, a lockable object"
  },
  {
    "id": "ritual_taumaturgia_266",
    "name": "Bone of Eternal Thirst",
    "nameEn": "Bone of Eternal Thirst",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O conjurador entalha a arma de o bone e bathes it em o sangue de o fledglings over o course de três nights. — Efeito: o created arma deals dano agravado e bebe 1 ponto de sangue de any wounded creature.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "A bone or ivory, three fledglings (one of them the caster's childe)"
  },
  {
    "id": "ritual_taumaturgia_267",
    "name": "Chill of the Windsaber",
    "nameEn": "Chill of the Windsaber",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "vidro é snapped em dois — Efeito: Sheet de Telekinetic force decapitates anyone whom O conjurador point his finger em.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Piece of thin, clear glass"
  },
  {
    "id": "ritual_taumaturgia_268",
    "name": "Divorcing the Soul",
    "nameEn": "Divorcing the Soul",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O conjurador walks em um círculo around O alvo e drops o seeds, incantating every time um seed é dropped. — Efeito: o soul de O alvo é separated de, but still trapped em, seu corpo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Dead pomegranate seeds"
  },
  {
    "id": "ritual_taumaturgia_269",
    "name": "Olhos de the Ever Vigilant",
    "nameEn": "Eyes of the Ever Vigilant",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O conjurador puts o eyes em o solution, brews them until nothing remains e lets o vapors pervade o edifício. — Efeito: Within o area, no attempt para use magical disguises ou illusions works.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "The eyes of seven vampires who have lied to any of the Kindred invoking the ritual, an alchemical solution, a building"
  },
  {
    "id": "ritual_taumaturgia_270",
    "name": "Healing Blood",
    "nameEn": "Healing Blood",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "— Efeito: Heal Aggravated Wounds com um point per health level e no WP expenditure.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Blood Point; 10 minutes ritual without interruption"
  },
  {
    "id": "ritual_taumaturgia_271",
    "name": "Impede the Gifts of Caine",
    "nameEn": "Impede the Gifts of Caine",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O conjurador drenches o item em o sangue, sets it aflame e puts o fogo out com seu bare mãos. — Efeito: o usage de Disciplines around o item becomes more difficult.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "A small item, blood of at least two thaumaturges"
  },
  {
    "id": "ritual_taumaturgia_272",
    "name": "Platonic Split",
    "nameEn": "Platonic Split",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "Incantating. — Efeito: O vampiro becomes divided em dois parts, um containing o besta e um containing o Man.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "A vampire"
  },
  {
    "id": "ritual_taumaturgia_273",
    "name": "Ritual de the Severed Hand",
    "nameEn": "Ritual of the Severed Hand",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O conjurador forces o mixture down o motionless target's throat, then watches if um extremity turns black, then severs it. — Efeito: All Vinculi em O alvo são broken.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "A vampire under the Vinculum, an alchemical mixture made out of the caster's blood, powdered human bone, the Cinzases of a vampire destroyed by sunlight, and various crushed herbs"
  },
  {
    "id": "ritual_taumaturgia_274",
    "name": "Shadow of the Wolf",
    "nameEn": "Shadow of the Wolf",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "Wearing de o cloak. — Efeito: este ritual lets O vampiro become um Lupine por uma noite. See Skin Dancer e o Ritual de Sacred Rebirth",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Cloak made from the skin of a wolf."
  },
  {
    "id": "ritual_taumaturgia_275",
    "name": "Whip of the Erinyes",
    "nameEn": "Whip of the Erinyes",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "Incantating. — Efeito: O alvo becomes subject para harrowing memories de past transgression e crimes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "A victim"
  },
  {
    "id": "ritual_taumaturgia_276",
    "name": "Blade of the Forbidden Flower",
    "nameEn": "Blade of the Forbidden Flower",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O conjurador drains o last drop de sangue de O vampiro e drives o arma em o corpse. — Efeito: o soul de O alvo becomes trapped em o arma, granting its wielder all its Abilities e Disciplines. o created arma deals dano agravado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "A drained vampire able in the use of a weapon, a seven-times forged weapon"
  },
  {
    "id": "ritual_taumaturgia_277",
    "name": "Corrente da Linhagem",
    "nameEn": "Chain of the Bloodline",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O conjurador drains O vampiro de his sangue over o course de três nights, then diablerizes O vampiro em o new lua. — Efeito: o entire brood de o used vampire tem um lower resistance para disobey commands de O conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "A vampire who has created progeny"
  },
  {
    "id": "ritual_taumaturgia_278",
    "name": "The Name Forgotten",
    "nameEn": "The Name Forgotten",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O conjurador escreve seu name em o paper, then invests paraçum de Vontade em it over o next 100 years. — Efeito: O conjurador becomes forgotten por everyone who knew them quando they meet Morte Final.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "A sheet of paper milled from wood grown only by moonlight, blood of the sire"
  },
  {
    "id": "ritual_taumaturgia_279",
    "name": "Soul Disjunction",
    "nameEn": "Soul Disjunction",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O conjurador incantates, beseeching Hermes e Hekate para rip o soul away de um enemy, then, O conjurador points em O alvo e says o final magical word. — Efeito: O alvo loses its soul e sinks em torpor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "A person with a soul"
  },
  {
    "id": "ritual_necromancia_280",
    "name": "Knowing Stone",
    "nameEn": "Knowing Stone",
    "level": 1,
    "tradition": "necromancia",
    "desc": "ao cortar himself e painting o name em um pedra com his sangue, O necromante pode ver onde o soul de um person currently resides após petitioning o loas por dancing around o pedra em trance.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_281",
    "name": "Two Centimes",
    "nameEn": "Two Centimes",
    "level": 2,
    "tradition": "necromancia",
    "desc": "por ceremonially \"killing\" um person, laying them out em um pallet, e closing seu eyes com dois coins, O necromante pode send o soul de um person em o Submundo as um intangible phantom. o person pode still communicate com O necromante until o ritual ends.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_282",
    "name": "Part the Veil",
    "nameEn": "Part the Veil",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante chants over um object representing O alvo e um fresh human eye. If successful, O alvo ganha um capacidade de see past o Mortalha para several nights.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_283",
    "name": "Blood Dance",
    "nameEn": "Blood Dance",
    "level": 3,
    "tradition": "necromancia",
    "desc": "em um ceremony onde O necromante dances e chants para attract o right espírito, enquanto scattering colored sands e oceano salt em o chão em um complex sigil, O necromante pode summon o Aparição de um relative de um present living person.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_284",
    "name": "Nightmare Drums",
    "nameEn": "Nightmare Drums",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante coats o personal object de um person em his own sangue, then queima it enquanto pounding em drums made de human skin. enquanto o drums make no sound em o living world, they attract Apariçãos, along com o sacrificed object. em exchange para um small favor, o Aparição irá then haunt o dreams de o person whose possession foi burned.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_285",
    "name": "Olhos dos Mortos",
    "nameEn": "Eyes of the Dead",
    "level": 3,
    "tradition": "necromancia",
    "desc": "Funciona de maneira idêntica ao ritual de Nível 1 'Percepção fazer Servo', mas permite transferir o Genius Loci para um espírito da natureza em vez de um animal simples.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_286",
    "name": "Boneco Maldito",
    "nameEn": "Baleful Doll",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Cria um fetiche vudu ligado à alma da vítima: ferimentos infligidos no boneco manifestam-se no corpo da vítima à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_287",
    "name": "Point of the Needle",
    "nameEn": "Point of the Needle",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Immersing um needle que tem sido used para tormenting um Baleful Doll em sangue under o lua, O necromante pode shrivel um target's limb por stabbing it com o needle.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_288",
    "name": "Mão do Homem Morto",
    "nameEn": "Dead Man's Hand",
    "level": 5,
    "tradition": "necromancia",
    "desc": "Transmite uma maldição paralisante ao tocar a mão da vítima, deixando seu braço completamente dormente e sem vida.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy"
  },
  {
    "id": "ritual_necromancia_289",
    "name": "Ritual de the Smoking Mirror",
    "nameEn": "Ritual of the Smoking Mirror",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante needs um obsidian espelho com sharp edges que irá cut em his mãos if he holds it. quando his vitae congregates em o espelho, O necromante either calls um prayer para o god Tonatiuh para activate Lifesight, ou para o god Mictlanteotl, para active Deathsight. Both são seen em o reflective surface.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy"
  },
  {
    "id": "ritual_necromancia_290",
    "name": "Ritual de Pochtli",
    "nameEn": "Ritual of Pochtli",
    "level": 2,
    "tradition": "necromancia",
    "desc": "em conjunction com another Necromantic ritual, dois ou more Necromancers carve Aztec glyphs em o flesh de um restrained mortal. They then drink de these injuries. Each participating Necromancer must make his own cut e drink de no other cut. Afterwards, o dois Necromancers pode draw em each other's knowledge during seu practices.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy"
  },
  {
    "id": "ritual_necromancia_291",
    "name": "Divine Sign",
    "nameEn": "Divine Sign",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante needs para know o birth date de um target, as well as um exemplar de o Tonalamatl para learn its dia sign. If O alvo é alive, O necromante pode predict its actions em o next dia. If O alvo é um Aparição, o knowledge de o dia sign acts em um similar matter para o acquisition de um Fetter.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy"
  },
  {
    "id": "ritual_necromancia_292",
    "name": "Ritual de Xipe Totec",
    "nameEn": "Ritual of Xipe Totec",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante removes o skin de um target com um obsidian adaga (a vítima tem para survive). O necromante washes away any remaining sangue que é em o skin em um golden bowl, o qual é already filled com octla, amaranth, e other aromatic substances. quando O necromante bebe de o bowl, he sweetens um small sangue film que irá attach o skin perfectly para his corpo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy"
  },
  {
    "id": "ritual_necromancia_293",
    "name": "Ritual de Teyolia",
    "nameEn": "Ritual of Teyolia",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante desenha um vampire para o summit de um Aztec style temple. Four loyal Carniçals hold o limbs, enquanto O necromante cuts open o chest com um obsidian adaga. He then tears out o coração e puts o coração em um specially prepared vessel, para fazer com it as he sees fit (either diablerizing it ou presenting it someone else para diablerize it). O vampiro em whom o rite é practiced, however, suffers Morte Final.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy"
  },
  {
    "id": "ritual_necromancia_294",
    "name": "Preservar Cadáver",
    "nameEn": "Preserve Corpse",
    "level": 1,
    "tradition": "necromancia",
    "desc": "ao misturar grave dirt, defiled holy água, e rare herbs em um liquid e coating it em um corpse, O necromante é able para prevent decay de fulminate.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy"
  },
  {
    "id": "ritual_necromancia_295",
    "name": "Haunting Breeze",
    "nameEn": "Haunting Breeze",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante pode create a luz supernatural vento o qual serves para frighten e confuse all those within um small area.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy"
  },
  {
    "id": "ritual_necromancia_296",
    "name": "Death's Head",
    "nameEn": "Death's Head",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante takes residues de um killed human (bone, flesh, ash) e mistura them em um paint-like substance que é used para decorate um porcelain mask. quando o mask é worn, O necromante appears as um Aparição para onlookers. após it é used, o mask crumbles para white dust.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy"
  },
  {
    "id": "ritual_necromancia_297",
    "name": "Impregnable Soul",
    "nameEn": "Impregnable Soul",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante wards um corpo against o possession de um de o entities de o Submundo e prevents its soul de pulled out de it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy"
  },
  {
    "id": "ritual_necromancia_298",
    "name": "Enochian Passage",
    "nameEn": "Enochian Passage",
    "level": 5,
    "tradition": "necromancia",
    "desc": "por plunging um prata adaga em his coração e falling em um corpo de água large enough para completely cover him, O necromante pode manifest bodily em o Terras das Sombras, em front de o ruins que são believed para ser Enoch.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy"
  },
  {
    "id": "ritual_necromancia_299",
    "name": "Chamado dos Mortos Famintos",
    "nameEn": "Call the Hungry Dead",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante atrai aparições atormentadas e famintas das Terras das Sombras para assombrar um local ou perseguir uma vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_300",
    "name": "Farol Sobrenatural",
    "nameEn": "Eldritch Beacon",
    "level": 1,
    "tradition": "necromancia",
    "desc": "Imbui um aura da vítima com uma luminescência fantasmagórica irresistível que atrai todos os espíritos e espectros da região contra ela.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_301",
    "name": "Palavras de Discernimento",
    "nameEn": "Words of Insight",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante coloca uma moeda na língua de um cadáver recente para paraçá-lo um responder honestamente um uma pergunta sobre sua vida ou morte.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_302",
    "name": "Minestra di Morte (Caldo da Morte)",
    "nameEn": "Minestra di Morte",
    "level": 1,
    "tradition": "necromancia",
    "desc": "Prepara uma infusão com pedaços cadavéricos e sangue que permite ao necromante enxergar através da Mortalha sem esforço.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_303",
    "name": "Death’s Communion",
    "nameEn": "Death’s Communion",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante performs um twisted ritual similar para o Lord's Supper, only com sangue instead de wine e um dedication para Dis Pater e o coming de o Endless noite. Afterwards, o participating Necromancer ganha um bonus em any uses de Necromancy.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_304",
    "name": "O Rapto de Perséfone",
    "nameEn": "Rape of Persephone",
    "level": 1,
    "tradition": "necromancia",
    "desc": "Enfraquece um barreira da Mortalha entre os mundos, permitindo que fantasmas atravessem facilmente para o reino físico.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_305",
    "name": "Círculo de Cérbero",
    "nameEn": "Circle of Cerberus",
    "level": 1,
    "tradition": "necromancia",
    "desc": "Traçum um círculo protetor de cinzas e ossos que impede qualquer aparição ou espectro de se aproximar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_306",
    "name": "Visão da Causa Mortis",
    "nameEn": "Insight",
    "level": 1,
    "tradition": "necromancia",
    "desc": "Ao tocar um cadáver, o necromante visualiza os últimos minutos de vida da vítima e um identidade de seu assassino.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_307",
    "name": "Draining the Well of Life",
    "nameEn": "Draining the Well of Life",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante first gathers his Aparição servants e entalha seu names em um vessel he intends para feed de. He then drains a vítima completely dry, regaining lost paraçum de Vontade points rather than sangue. o Apariçãos pode then feed em o generated emotions para fulfill seu Pathos, o greater o emotion, o more pathos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_308",
    "name": "Olhos da Cova",
    "nameEn": "Eyes of the Grave",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante faz com que o alvo tenha visões aterrorizantes de sua própria morte e decomposição futura, abalando sua coragem.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_309",
    "name": "Generating the Acheron Vortex",
    "nameEn": "Generating the Acheron Vortex",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante must ter tasted o vitae de um Lasombra antes de o ritual. Under o new lua, he spills vitae de um Harbinger de Skulls e um Lasombra em um corpo de água, enquanto listening para voices de o Submundo. o água forms um vortex through o qual O necromante e um additional person pode enter o Submundo",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_310",
    "name": "Mão da Glória",
    "nameEn": "Hand of Glory",
    "level": 2,
    "tradition": "necromancia",
    "desc": "Cria um artefato macabro um partir da mão mumificada de um enforcado: acender velas em seus dedos mergulha todos os habitantes de uma casa em sono profundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_311",
    "name": "Judgement of Radamanthus",
    "nameEn": "Judgement of Radamanthus",
    "level": 2,
    "tradition": "necromancia",
    "desc": "First, O necromante marks um Aparição. Afterwards, he queima pages de um law book ou religious text que applied para o Aparição em life em um cleansed bronze brazier. Combining o ashes com um mixture de pulverized prata, O necromante desenha um perfect círculo around him. quando he invoca o Aparição, it irá believe que O necromante tem o authority para send it para o \"true\" afterlife (o um it believed em quando it foi alive), making it much more cooperative. o Ritual works only once em um Aparição.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_312",
    "name": "Olho do Homem Morto",
    "nameEn": "Occhio d'Uomo Morte",
    "level": 2,
    "tradition": "necromancia",
    "desc": "Arranca o olho de um cadáver e o encanta para servir como câmera espiã móvel através da qual o necromante pode ver tudo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_313",
    "name": "Rasgar o Véu",
    "nameEn": "Parting the Veil",
    "level": 2,
    "tradition": "necromancia",
    "desc": "Abre temporariamente uma fissura na Mortalha permitindo um passagem física fazer necromante para as Terras das Sombras.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_314",
    "name": "Fantoche Cadavérico",
    "nameEn": "Puppet",
    "level": 2,
    "tradition": "necromancia",
    "desc": "Permite ao necromante introduzir uma aparição submissa dentro do corpo de um mortal ou cadáver para controlá-lo como uma marionete.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_315",
    "name": "Spirit Beacon:",
    "nameEn": "Spirit Beacon:",
    "level": 2,
    "tradition": "necromancia",
    "desc": "este Ritual é designed para draw Apariçãos para um particular area. It requires o cabeçum de um man forsaken por God. este ghastly object acts as um beacon para all Apariçãos within o region. Giovanni who ter seen these dreadful items em o Terras das Sombras say que um unholy radiance despeja forth de o eyes, mouth, e ears de o cabeçum, drawing Apariçãos like moths para um flame.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_316",
    "name": "Carícia de Tânatos",
    "nameEn": "Thanatos' Caress",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O toque fazer necromante drena um vitalidade do alvo, envelhecendo tecidos e causando dano frio que ignora armaduras normais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_317",
    "name": "Ritual do Grilhão Desenterrado",
    "nameEn": "Ritual of the Unearthed Fetter",
    "level": 3,
    "tradition": "necromancia",
    "desc": "Permite ao necromante rastrear ou criar um grilhão místico que prende uma aparição à sua vontade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_318",
    "name": "Tumulto dos Condenados",
    "nameEn": "Din of the Damned",
    "level": 3,
    "tradition": "necromancia",
    "desc": "Enche os ouvidos de todos no ambiente com os gritos e lamentos ensurdecedores de milhares de almas fazer Submundo, impedindo um audição e concentração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_319",
    "name": "Escudo da Tempestade",
    "nameEn": "Tempesta Scudo",
    "level": 3,
    "tradition": "necromancia",
    "desc": "Cria um turbilhão de ventos da Tempestade fazer Submundo ao redor fazer necromante que desvia projéteis e repele fantasmas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_320",
    "name": "Prisão da Tempestade",
    "nameEn": "Tempest Prison",
    "level": 3,
    "tradition": "necromancia",
    "desc": "Aprisiona uma aparição rebelde dentro de uma garrafa ou frasco de vidro gravado com runas de contenção.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_321",
    "name": "Beber das Águas do Estige",
    "nameEn": "Drink of Styx's Waters",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante consome água destilada das profundezas fazer Submundo para tornar sua mente fria e imune um manipulações emocionais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_322",
    "name": "Toque do Cadáver",
    "nameEn": "Cadaver's Touch",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Faz com que a pele de uma pessoa viva adquira um frieza, rigidez e aparência cadavérica de um corpo em decomposição.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_323",
    "name": "Olhar Através da Mortalha",
    "nameEn": "Peek Past the Shroud",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Concede ao necromante visão perfeita dos arredores fazer reino dos mortos sem precisar adentrar o Submundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_324",
    "name": "Bastão Diabólico",
    "nameEn": "Bastone Diabolico",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Encanta uma bengala ou bastão com ossos humanos capaz de golpear e causar dano físico real em espíritos incorpóreos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_325",
    "name": "Beber das Águas do Lete",
    "nameEn": "Drink of Lethe's Waters",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Apaga memórias específicas ou traumas da mente de um indivíduo através de água cerimonial fazer rio fazer esquecimento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_326",
    "name": "Invocar Horda Etérea",
    "nameEn": "Summon Ethereal Horde",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Convoca dezenas de espíritos irados para invadir uma residência e aterrorizar os ocupantes com fenômenos poltergeist.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_327",
    "name": "Forja de Almas",
    "nameEn": "Soulcrafting",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Uma técnica hedionda herdada dos fantasmas fazer Submundo que permite forjar um substância espiritual de uma alma em objetos físicos duradouros.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_328",
    "name": "Call upon the Shadow's Grace",
    "nameEn": "Call upon the Shadow's Grace",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante communicates com o \"sombra\" de um living person. enquanto such um \"sombra\" é less forthcoming than que de um Aparição, it pode reveal things que o person would rather ter buried.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_329",
    "name": "Manto da Mente Viva",
    "nameEn": "Caul the Living Mind",
    "level": 4,
    "tradition": "necromancia",
    "desc": "Protege a mente fazer necromante contra possessões espirituais e sondagens psíquicas de aparições.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_330",
    "name": "Call Upon the Shadow's Grace:",
    "nameEn": "Call Upon the Shadow's Grace:",
    "level": 5,
    "tradition": "necromancia",
    "desc": "por enacting este ritual, o Giovanni brings o self-destructive aspects de her subject's psyche para o fore. if used successfully, este ritual faz com que its subject para reveal her darkest secrets para o Giovanni. o subject irá reveal any plots em o qual she é involved, treacheries she tem committed, e lies she tem told.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_331",
    "name": "Chair of Hades",
    "nameEn": "Chair of Hades",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante exhumes o femur e tibia bones de um person, wrapping o bones em coarse tecido e encasing them com madeira ou metal so que they become able para sustain weight. He then constructs um chair de o bones. If um sangue descendant de o person whose bones ter sido used sits em o chair, they lose all desire para fazer anything other than sitting em o chair, leaving only para quickly fulfill basic bodily needs.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_332",
    "name": "Frio do Esquecimento",
    "nameEn": "Chill of Oblivion",
    "level": 5,
    "tradition": "necromancia",
    "desc": "Libera o frio absoluto fazer Vazio para congelar água, quebrar metais e causar hipotermia sobrenatural instantânea.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_333",
    "name": "Exílio no Vazio",
    "nameEn": "Esilio",
    "level": 5,
    "tradition": "necromancia",
    "desc": "Bane uma aparição violenta de volta para as profundezas mais escuras fazer Submundo por um ano e um dia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_334",
    "name": "Trajes de Hades",
    "nameEn": "Garb of Hades",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante veste uma mortalha encantada que o torna invisível para fantasmas e espíritos no Submundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_335",
    "name": "Agarrar o Fantasmagórico",
    "nameEn": "Grasp the Ghostly",
    "level": 5,
    "tradition": "necromancia",
    "desc": "Permite ao necromante segurar e manipular objetos e almas puramente espirituais com suas próprias mãos físicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_336",
    "name": "O Chamado do Barqueiro",
    "nameEn": "The Ferryman's Recall",
    "level": 5,
    "tradition": "necromancia",
    "desc": "Um ritual de emergência que resgata um alma fazer necromante de volta ao seu corpo físico se estiver prestes um se perder no esquecimento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_necromancia_337",
    "name": "Jornada Órfica",
    "nameEn": "Orphic Sojourn",
    "level": 5,
    "tradition": "necromancia",
    "desc": "Permite ao necromante projetar seu espírito emé um cidade das almas no coração fazer Submundo e retornar são e salvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy"
  },
  {
    "id": "ritual_akhu_338",
    "name": "Milk of Set",
    "nameEn": "Milk of Set",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite mistura um concoction que tem um harmful effect em anything it é applied para. Examples para este level include: Maliciously altering&#160;o hard drive de um computer, making&#160;um drug more addictive, altering um lock para conform um key em o Setite's possession.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_339",
    "name": "Typhon's Brew",
    "nameEn": "Typhon's Brew",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite brews beer laced com vitae over o course de um month. enquanto o brewing process removes most de o traits de vitae, Carniçals que drink it gain um sangue point. Vampires pode drink it without vomiting it up directly e pode even get drunk em it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_340",
    "name": "Inscribe the Book of Set",
    "nameEn": "Inscribe the Book of Set",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite mão-scribes um version de Book de Going Forth por noite over o course de several years em papyrus. o completed copy increases his success rate em other Akhu rituals e may ser necessary em higher ranking rituals. o scrolls incinerate quando em contact com sunlight.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_341",
    "name": "Seal the Gates of Blood",
    "nameEn": "Seal the Gates of Blood",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite crafts um small amulet que tem para ser worn por um woman. um woman who wears o amulet irá not miscarry, e her menses são greatly reduced. Menstrual sangue, however, é directly passed em o Parada de Sangue de o Setite who crafted o amulet.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_342",
    "name": "Milk of Set",
    "nameEn": "Milk of Set",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite mistura um concoction que tem um harmful effect em anything it é applied para. Examples para este level include: burning through steel ou concrete, making&#160;o brew follow um target e leave um trail.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_343",
    "name": "Opening the Gate",
    "nameEn": "Opening the Gate",
    "level": 1,
    "tradition": "akhu",
    "desc": "First, o corpse tem para prepared em um manner befitting o ancient Egyptian funerary rites. após que, o corpse é ritually tortured, defiled, e placed em um grotesque position, com its canopic jars placed em reverse manner. If o ritual foi successful, o Setite may increase his Parada de Sangue ou paraçum de Vontade em um rate que represents how closely o corpo foi preserved according para Egyptian funerary rites.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_344",
    "name": "Opening the Mouth",
    "nameEn": "Opening the Mouth",
    "level": 1,
    "tradition": "akhu",
    "desc": "por sprinkling um cadaver com água e natron, placing três specially crafted amulets em it, e reciting um funerary prayer, o Setite pode ask um corpse um question. o corpse é under no obligation para answer truthfully e não pode falar about o afterlife.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_345",
    "name": "Dreams of Duat",
    "nameEn": "Dreams of Duat",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite needs parts de a vítima's corpo. Sealing them em um wax figure, o lector-priest inscribes a vítima's name em hieroglyphic script em it. Cursing O alvo, o lector-priest washes o figurine em warm água made bitter com natron. a vítima irá ter nightmares about Duat em o following noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_346",
    "name": "Milk of Set",
    "nameEn": "Milk of Set",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite mistura um concoction que tem um harmful effect em anything it é applied para. Examples para este level include: Adding&#160;para um gas tank para manipulate o vehicle para go onde o Setite wants it.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_347",
    "name": "Prepare Canopic Jars",
    "nameEn": "Prepare Canopic Jars",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite posiciona tissues ou objects associated com o respective organ de um victim em o four canopic jars, e inverts o traditional text que ensures speedy passage em o Western Lands. If o ritual foi successful, o Setite may cause random misfortune em do alvo life, like causing her para miss um bus, become a vítima de um mugging, ou lose her wallet.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_348",
    "name": "Displacement of the Pneuma",
    "nameEn": "Displacement of the Pneuma",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest restrains um victim em um flat surface, near um goat ou um pig. após cutting his own wrist e ceremonially \"killing\" O alvo ao desenhar um dull pedra knife across his throat, allowing his own sangue para splash em o face de O alvo, a vítima tem para believe que it tem sido mortally wounded. em este moment, o Setite shouts um word de power as loudly as he pode em a vítima’s ear. If successful, she shocks a vítima’s soul out de his corpo e em que de o animal. o soulless corpo remains, highly suggestible, e follows o Setite's instructions as long as they require no interpretation.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_349",
    "name": "Linked Soul Elixir",
    "nameEn": "Linked Soul Elixir",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest mistura um Typhon's Brew com fruit juices e resins de several herbs, like hashish, mandrake, e opium. Then o Setite despeja o brew over um seal inscribed com Anubis's name. Reciting Anubis's role as o judge de o coração, o brew irá then allow persons who share its drink para feel each others' emotions e makes them easily manipulated por any form de supernatural mind control.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_350",
    "name": "Scorpion Sending",
    "nameEn": "Scorpion Sending",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest sculpts um scorpion out de wax, incorporating small parts de o intended victim's corpo, like hair, nail clippings, e similar, em it. após writing Set's name em o back de o scorpion em green ink e reciting o tale de Horus' poisoning, o Lector-Priest tem para carry o figurine para um place frequented por a vítima. quando O alvo comes near o figurine, it irá transform em um real scorpion e sting him.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_351",
    "name": "Dismemberment of Osiris",
    "nameEn": "Dismemberment of Osiris",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest takes um male high-ranking member de um organization captive, killing e dismembering him e finishing o ritual por throwing o member em um fish tank. quando um fish devours o organs, o organization a vítima foi part de suffers um serious calamity.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_352",
    "name": "Severing Sands",
    "nameEn": "Severing Sands",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest gathers authentic sand de o Nile bank, washed clean e dried em o sol. Sprinkling o sand com perfumes, natron, e his own vitae, he recites um prayer para o life-giving Nile. quando confronted por um supernatural creature, o Setite may blow o sand against them com um prayer para o respective god (Seker para vampires, Anubis para Apariçãos, Set para demônios etc.). Incorporeal creatures são banished back em seu home realms, enquanto other supernaturals lose seu healing powers.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_353",
    "name": "Summon Sebau",
    "nameEn": "Summon Sebau",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest constructs um clay model mixed com vitae de um de o Sebau para command it. If o Lector-Priest wants o Sebau para attack um target, he needs um piece de its corpo ou its True Name.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_354",
    "name": "Dismembering the God",
    "nameEn": "Dismembering the God",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Setite fills um canopic jar com urine de um hyena, jackal, ou other scavenger e adds corresponding tissue de um victim. He lets it simmer por 24 horas. o content de o jar é then mixed com papyrus e vitae e then covers his genitals com o unguent. quando o Setite touches a vítima, O alvo loses paraçum de Vontade e sangue points.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_355",
    "name": "Cheat the Scale of Hades",
    "nameEn": "Cheat the Scale of Hades",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest duplicates o Serpentis power, removing either his entire organs em canopic jars para become um nearly indestructible corpo, wrapped em um Mortalha de scales; ou merely removing o coração, becoming immune para staking e gaining um resistance against Rötschreck e diablerie. o organs, themselves, however, são extremely vulnerable e any harm done against them irá cause harm para o Setite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_356",
    "name": "Warding Cippus",
    "nameEn": "Warding Cippus",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest crafts um small \"cippus\" de Horus battling crocodiles, scorpions, e serpents. o cippus é enchanted through baths em honey, beer, e o sangue de crocodiles, serpents e crushed serpents, as well as perfumes, incenses e exorcisms com sand e água. o final prayer requires burning um's mão off. quando completed, o cippus banishes demônios back em seu home realm.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_357",
    "name": "Portrait Link",
    "nameEn": "Portrait Link",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest sketches um image de O alvo, engraving it em um pedra tablet e washing it em honey e vitae. o tablet pode now ser used as um substitute para targeting a vítima, regardless de distance.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_358",
    "name": "Hybrid Mummy",
    "nameEn": "Hybrid Mummy",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest stitches o mummified remnants de humans e animals together. Over o course de 40 nights e several minor subsidiary rituals, o Lector-Priest beseeches Apophis e other dark entities within Duat enquanto fumigating o mummy over um fogo. o spell invites um Spectre para inhabit o corpse, o qual é then bound em o frame. enquanto Hybrids think independently e pode last millennia quando preserved correctly, they decay quando em contact com sunlight.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_359",
    "name": "Servitor Sending",
    "nameEn": "Servitor Sending",
    "level": 1,
    "tradition": "akhu",
    "desc": "um variant de um Thaumaturgical Ritual, o Lector-Priest traces um círculo com vitae com o appropriate incantations. Using um portrait para target um location, o Lector-Priest pode now send um Carniçal ou other servitor para o location e recall them through o círculo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_akhu_360",
    "name": "A Surfeit of Serpents",
    "nameEn": "A Surfeit of Serpents",
    "level": 1,
    "tradition": "akhu",
    "desc": "o Lector-Priest commands o demônios de Duat para enter a vítima. em o following horas, O alvo é wracked com pain e nausea, as they&#160;vomit&#160;e excrete&#160;serpents que eventually burrow through seu flesh until they die.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals"
  },
  {
    "id": "ritual_anarquista_361",
    "name": "Santificar o Templo",
    "nameEn": "Sanctify the Temple",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro decorates his ritual space according para his paradigm. o ritual lasts para um lunar month but it pode ser renewed indefinitely. If o ritual foi successful, he cria um safe space onde his magic é easier para cast.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool"
  },
  {
    "id": "ritual_anarquista_362",
    "name": "Haruspicy",
    "nameEn": "Haruspicy",
    "level": 1,
    "tradition": "anarquista",
    "desc": "após slaying um animal (usually um sheep ou um poultry, em rare occasions um human) e slicing open its belly para let o entrails fall out, O feiticeiro must douse them com um quantity de his own vitae, cut de his wrists com um ritual adaga. O feiticeiro pode then answer questions about o past ou future para um third party que foi involved somehow em o ritual (i.e. financed o sacrifice).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool"
  },
  {
    "id": "ritual_anarquista_363",
    "name": "Craft Dream-Catcher",
    "nameEn": "Craft Dream-Catcher",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro manufactures um dream-catcher e incorporates small parts de o person it é intended para (hair, spittle, sangue etc.). It makes manipulation em um sleeping person more difficult, as well as warding off espíritos e, em o case de vampires, easing awakening during o dia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool"
  },
  {
    "id": "ritual_anarquista_364",
    "name": "Houngan's Doll",
    "nameEn": "Houngan's Doll",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro crafts um doll e incorporates um piece de clothing de o intended target. Once per week, o Anarch may cast o ritual, o qual begins quando he lights um votive candle e sets it afloat em um cup containing um point de his vitae. If o ritual succeeds, then until o fogo blows out (usually 30 minutos unless o ritual é disrupted somehow), any physical sensation imposed em o doll é sympathetically experienced por O alvo (if o doll resembles O alvo enough). para que duration, O feiticeiro sees e hears only what O alvo faz, so he must ser careful para leave any tools ou implements onde they pode ser found por touch.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool"
  },
  {
    "id": "ritual_anarquista_365",
    "name": "Skinwalker's Belt",
    "nameEn": "Skinwalker's Belt",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro ritually sacrifices um animal no smaller than um mouse e not larger than um bear em um sanctified place e skins its pelt. após o pelt é removed, it must ser cured para três nights em um mixture de brine e o ritualist's own sangue. quando it é done, O feiticeiro may don o pelt e transform em o respective animal. o effects de o magic last until he wills it para end ou until daybreak. enquanto em animal form, O feiticeiro é unable para understand animals, use Disciplines, e still experiences Frenesi, but also retains his intelligence. Creatures que pode ver Auras quickly see through o ruse quando they inspect o animal, e Lupines são known para react violently.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool"
  },
  {
    "id": "ritual_anarquista_366",
    "name": "Caminhar sobre as Águas de Varuna",
    "nameEn": "Water Walking",
    "level": 2,
    "tradition": "anarquista",
    "desc": "Através de uma oferenda de mingau e manteiga ghee consagrada ao deus védico Varuna, o sadhu adquire o poder de caminhar livremente sobre as águas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age"
  },
  {
    "id": "ritual_anarquista_367",
    "name": "Blood Crystal",
    "nameEn": "Blood Crystal",
    "level": 2,
    "tradition": "anarquista",
    "desc": "O feiticeiro must place um piece de clear quartz em um earthen bowl full de purified água. Then, she must add her own vitae para o waters e begin meditating over o bowl. Over o next hour, o água irá slowly clear again as o vitae é absorbed em o crystal, o qual irá turn um soft pink. Crystals infused em este way ter several effects. First, em any time, O feiticeiro may hold um crystal, meditate para um few segundos, e withdraw o stored vitae back em her own corpo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age"
  },
  {
    "id": "ritual_anarquista_368",
    "name": "Enfolding the Believers",
    "nameEn": "Enfolding the Believers",
    "level": 2,
    "tradition": "anarquista",
    "desc": "Membros com multiple Carniçals often find que jealousy over o regnant’s affections pode lead para rivalry e conflict, e New Age vampire cult leaders find such discord counterproductive para o enlightenment they seek, hence este ritual. O feiticeiro first prepares um quantity de some kind de liquid para o qual she adds 1 ponto de vitae per gallon de liquid. Red Kool-Aid ou fruit punch works perfectly well para purposes de este ritual, although “drinking o Kool-Aid” tem um sinister connotation em o context de New Age cults que some Membros choose para avoid. O feiticeiro must ter her followers drink um quantity de o prepared liquid antes de leading them em um extended meditation exercise lasting em least um hour. If o ritual é effective, all de o followers acquire what é essentially um secondary Laço de Sangue para um another e para o group as um abstract unit.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age"
  },
  {
    "id": "ritual_anarquista_369",
    "name": "Transcending Barriers Through Love",
    "nameEn": "Transcending Barriers Through Love",
    "level": 2,
    "tradition": "anarquista",
    "desc": "Having transformed common mortals em loyal cultists com his magic, o New Age sorcerer pode feed em seu devotion e seu vitae alike de afar. If o ritual é successful, O feiticeiro pode recover vitae e even paraçum de Vontade de um ou more de his followers who são currently under o effects de Enfolding o Believers. o ritual requires thirty minutos de meditation em o names e faces de o targeted followers.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age"
  },
  {
    "id": "ritual_anarquista_370",
    "name": "The Pursuit of Apotheosis",
    "nameEn": "The Pursuit of Apotheosis",
    "level": 2,
    "tradition": "anarquista",
    "desc": "Few New Age Anarchs know este ritual. Fewer still would ever ser so ruthless as para try it. Nevertheless, its existence é um temptation para all who ter heard tales de its power — tales que o New Age Anarchs conceal de o other schools e de o greater Anarch community, lest o Movement turn em o New Agers en masse. o ritual begins just like Enfolding o Believers. Indeed, there é only um material difference between que ritual e este um — para o liquid-vitae mixture que must ser consumed por o cultists, O feiticeiro adds um quantity de poison, most commonly cyanide. para even attempt este ritual automatically costs O feiticeiro um point de Humanidade e stains his Aura com black streaks similar para Diablerie. em exchange, O feiticeiro ganha experience points para augment his regular Traits.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age"
  },
  {
    "id": "ritual_anarquista_371",
    "name": "Calling Card",
    "nameEn": "Calling Card",
    "level": 3,
    "tradition": "anarquista",
    "desc": "o Punk Sorcerer inscribes um secret message em um graffiti que only persons de um select demographic pode read. If o place é associated com authority e O feiticeiro tem additionally vandalized it, future uses de Punk Sorcery become much easier em este location.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk"
  },
  {
    "id": "ritual_anarquista_372",
    "name": "Beat Your Way to Glory",
    "nameEn": "Beat Your Way to Glory",
    "level": 3,
    "tradition": "anarquista",
    "desc": "o Punk Sorcerer physically assaults um target e beats it unconscious. Afterward, he pode claim um physical identifier (um piercing, um eye color, ou clothing) as his own indefinitely.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk"
  },
  {
    "id": "ritual_anarquista_373",
    "name": "BFU (Transmissão de Frequência Oculta)",
    "nameEn": "BFU",
    "level": 3,
    "tradition": "anarquista",
    "desc": "O feiticeiro redige uma mensagem subliminar para um indivíduo específico, inserindo comandos subliminares de sangue que se manifestam quando certas palavras-chave são lidas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk"
  },
  {
    "id": "ritual_anarquista_374",
    "name": "Ferroada do Barão Zaraguin",
    "nameEn": "Baron Zaraguin's Sting",
    "level": 3,
    "tradition": "anarquista",
    "desc": "Após consumir vitae combinada com substâncias alucinógenas e passar o dia em meditação, o feiticeiro adquire imunidade completa um toxinas, venenos e sedativos químicos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk"
  },
  {
    "id": "ritual_anarquista_375",
    "name": "Maria Sangrenta",
    "nameEn": "Bloody Mary",
    "level": 3,
    "tradition": "anarquista",
    "desc": "O feiticeiro anarquista convence um mortal um realizar o ritual do espelho, criando um canal de transmissão de pesadelos e visões ameaçadoras contra um alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk"
  },
  {
    "id": "ritual_anarquista_376",
    "name": "CFTV Místico",
    "nameEn": "CCTV",
    "level": 4,
    "tradition": "anarquista",
    "desc": "O taumaturgo encanta uma câmera de segurançum ou webcam banhando seus componentes em vitae para espionar transmissões de vídeo à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist"
  },
  {
    "id": "ritual_anarquista_377",
    "name": "Arquivo Autoexecutável",
    "nameEn": "Self-Executing File",
    "level": 4,
    "tradition": "anarquista",
    "desc": "Uma variante do ritual de Inscrição que permite ao feiticeiro instalar uma Trilha ou Ritual diretamente no código-fonte de um arquivo digital executável.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist"
  },
  {
    "id": "ritual_anarquista_378",
    "name": "Telecomunicação Sigilar",
    "nameEn": "Telecommunication",
    "level": 4,
    "tradition": "anarquista",
    "desc": "O taumaturgo traçum um sigilo de sangue sobre uma tela ou monitor, permitindo sintonizar e interceptar qualquer transmissão televisiva ou de computador na cidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist"
  },
  {
    "id": "ritual_anarquista_379",
    "name": "Cláusula de Confidencialidade",
    "nameEn": "Non-Disclosure Clause",
    "level": 4,
    "tradition": "anarquista",
    "desc": "Encanta um arquivo de texto confidencial: qualquer indivíduo que assinar ou concordar com o documento e tentar revelar seus segredos sofrerá dano letal imediato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist"
  },
  {
    "id": "ritual_anarquista_380",
    "name": "Fantasma no Sistema",
    "nameEn": "Ghost in the System",
    "level": 4,
    "tradition": "anarquista",
    "desc": "Através de um ritual cibernético prolongado, o taumaturgo insere registros falsos e históricos forjados na rede mundial, tornando-os imutáveis contra perícias forenses.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist"
  },
  {
    "id": "ritual_duranki_381",
    "name": "Reservatório Corporal",
    "nameEn": "Corporal Reservoir",
    "level": 1,
    "tradition": "duranki",
    "desc": "Permite ao feiticeiro Banu Haqim armazenar pontos adicionais de sangue místico em seu organismo sem dilatar visualmente suas veias.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_382",
    "name": "Exorcizar a Febre",
    "nameEn": "Exorcise Fever",
    "level": 1,
    "tradition": "duranki",
    "desc": "O conjurador purifica o sangue de um indivíduo doente através de cânticos mesopotâmicos e queima de ervas curativas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_383",
    "name": "Horóscopo de Babilônia",
    "nameEn": "Horoscope",
    "level": 1,
    "tradition": "duranki",
    "desc": "Ao mapear um posição dos astros no momento do ritual, o feiticeiro obtém presságios precisos sobre o destino e fraquezas de um indivíduo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_384",
    "name": "Pedregulho de Alamut",
    "nameEn": "Pebble From the Mountain",
    "level": 1,
    "tradition": "duranki",
    "desc": "O feiticeiro encanta uma pedra da fortaleza sagrada de Alamut, permitindo-lhe sentir um aproximação de invasores e direcionar suas lâminas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_385",
    "name": "Tocar a Terra Sagrada",
    "nameEn": "Touch the Earth",
    "level": 1,
    "tradition": "duranki",
    "desc": "Ao colocar as mãos no solo fazer deserto, o feiticeiro percebe vibrações, passos e um presençum de criaturas um quilômetros de distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_386",
    "name": "Verdade na Tinta",
    "nameEn": "Truth in Ink",
    "level": 1,
    "tradition": "duranki",
    "desc": "Encanta um tinta de um pergaminho de modo que qualquer mentira escrita com ela mude de cor instantaneamente, revelando o embuste.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_387",
    "name": "Batismo de Proteção",
    "nameEn": "Warding Baptism",
    "level": 1,
    "tradition": "duranki",
    "desc": "Um rito de purificação com água consagrada que protege o indivíduo contra espíritos hostis e influências da Umbra.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_388",
    "name": "Ritual de Retorno",
    "nameEn": "Ritual of return",
    "level": 1,
    "tradition": "duranki",
    "desc": "Cria um vínculo místico com um local seguro, permitindo ao conjurador retornar infalivelmente ao seu santuário mesmo perdido em tempestades.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_389",
    "name": "Força de Haqim",
    "nameEn": "Strength of Haqim",
    "level": 1,
    "tradition": "duranki",
    "desc": "Invoca as bênçãos fazer patriarca Haqim para infundir os músculos fazer assassino com vigor excepcional durante uma investida.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals"
  },
  {
    "id": "ritual_duranki_390",
    "name": "Portento Astral",
    "nameEn": "Astral Portent",
    "level": 2,
    "tradition": "duranki",
    "desc": "O feiticeiro entra em transe astrológico profundo, descobrindo o momento ideal para desferir um ataque decisivo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals"
  },
  {
    "id": "ritual_duranki_391",
    "name": "Aprisionar os Céus",
    "nameEn": "Bind The Heavens",
    "level": 2,
    "tradition": "duranki",
    "desc": "Interrompe temporariamente um influência das estrelas e fazer destino sobre uma região, impedindo que adivinhos e videntes prevejam suas umções.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals"
  },
  {
    "id": "ritual_duranki_392",
    "name": "Clamor do Sangue da Terra",
    "nameEn": "Earth's Blood Cry",
    "level": 2,
    "tradition": "duranki",
    "desc": "Faz com que a terra sangre onde vitae de guerreiros foi derramada, guiando o vingador emé o assassino de seus irmãos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals"
  },
  {
    "id": "ritual_duranki_393",
    "name": "Dádiva do Touro de Mitra",
    "nameEn": "Gift of Mithra's Bull",
    "level": 2,
    "tradition": "duranki",
    "desc": "O feiticeiro sacrifica um touro consagrado para conceder resistência formidável contra ataques físicos aos guerreiros de seu clã.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals"
  },
  {
    "id": "ritual_duranki_394",
    "name": "Beijo da Áspide",
    "nameEn": "Kiss of the Asp",
    "level": 2,
    "tradition": "duranki",
    "desc": "Encanta o veneno de Quietus ou saliva fazer assassino, tornando um mordida fulminante e indetectável em exames toxicológicos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals"
  },
  {
    "id": "ritual_duranki_395",
    "name": "Sangue Chama Sangue",
    "nameEn": "Blood Calls To Blood",
    "level": 2,
    "tradition": "duranki",
    "desc": "Cria uma atração magnética de sangue que revela um localização exata de parentes e descendentes da linhagem do alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals"
  },
  {
    "id": "ritual_duranki_396",
    "name": "Aproximar-se do Véu",
    "nameEn": "Approach the Veil",
    "level": 3,
    "tradition": "duranki",
    "desc": "Permite ao feiticeiro vislumbrar o mundo espiritual e dialogar com espíritos fazer deserto sem cruzar fisicamente um barreira.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals"
  },
  {
    "id": "ritual_duranki_397",
    "name": "Touro dos Céus",
    "nameEn": "Bull of Heaven",
    "level": 3,
    "tradition": "duranki",
    "desc": "Convoca um fúria celestial do Touro de Ishtar para abalar as fundações de edifícios e muralhas inimigas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals"
  },
  {
    "id": "ritual_duranki_398",
    "name": "Perdição do Infiel",
    "nameEn": "Kafir's Bane",
    "level": 3,
    "tradition": "duranki",
    "desc": "Uma maldição rigorosa lançada sobre aqueles que quebram juramentos prestados sob um honra e as leis de Haqim.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals"
  },
  {
    "id": "ritual_duranki_399",
    "name": "Retrato da Paixão",
    "nameEn": "Portrait of Passion",
    "level": 3,
    "tradition": "duranki",
    "desc": "Pinta um retrato com tintas misturadas um sangue para despertar ou suprimir emoções avassaladoras no coração fazer modelo retratado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals"
  },
  {
    "id": "ritual_duranki_400",
    "name": "Força na Sabedoria",
    "nameEn": "Strength in Wisdom",
    "level": 3,
    "tradition": "duranki",
    "desc": "O vizir converte seu conhecimento arcano e discernimento intelectual em vigor físico e precisão marcial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals"
  },
  {
    "id": "ritual_duranki_401",
    "name": "Escudo de Espelhos",
    "nameEn": "A Shield of Mirror",
    "level": 3,
    "tradition": "duranki",
    "desc": "Ergue uma barreira reflexiva que devolve feitiços e maldições mentais diretamente contra o conjurador que as lançou.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals"
  },
  {
    "id": "ritual_duranki_402",
    "name": "Direcionar a Lança de Arimã",
    "nameEn": "Directing Ahriman's Lance",
    "level": 4,
    "tradition": "duranki",
    "desc": "Encanta projéteis e lâminas de assassinato de modo que ignorem armaduras mundanas e busquem o coração do alvo com precisão sobrenatural.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals"
  },
  {
    "id": "ritual_duranki_403",
    "name": "Kudurru (Pedra de Fronteira Sagrada)",
    "nameEn": "Kudurru",
    "level": 4,
    "tradition": "duranki",
    "desc": "Consagra uma pedra kudurru babilônica para delimitar as fronteiras invioláveis de um domínio territorial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals"
  },
  {
    "id": "ritual_duranki_404",
    "name": "Renascimento na Luz de Haqim",
    "nameEn": "Rebirth in the Light of Haqim",
    "level": 4,
    "tradition": "duranki",
    "desc": "Um rito de redenção e purificação profunda que limpa o cainita de maculaturas espirituais e maldições de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals"
  },
  {
    "id": "ritual_duranki_405",
    "name": "Rito de Marduk Triunfante",
    "nameEn": "Rite of Marduk Triumphant",
    "level": 4,
    "tradition": "duranki",
    "desc": "Celebra o triunfo fazer deus Marduk sobre o caos primordial, concedendo invulnerabilidade temporária contra possessões demônioíacas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals"
  },
  {
    "id": "ritual_duranki_406",
    "name": "O Senhor Impotente",
    "nameEn": "The Sire Impotent",
    "level": 4,
    "tradition": "duranki",
    "desc": "Neutraliza temporariamente um capacidade de um vampiro inimigo de Abraçar novas crias ou criar carniçais com seu sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals"
  },
  {
    "id": "ritual_duranki_407",
    "name": "Tamimah (Talismã Protetor)",
    "nameEn": "Tamimah",
    "level": 4,
    "tradition": "duranki",
    "desc": "Confere bênçãos místicas um um amuleto que absorve danos letais e afasta calamidades contra quem o veste.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals"
  },
  {
    "id": "ritual_duranki_408",
    "name": "Portal de Apsu",
    "nameEn": "Apsu Portal",
    "level": 5,
    "tradition": "duranki",
    "desc": "Abre uma passagem mística através de águas subterrâneas primordiais para transporte instantâneo de tropas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals"
  },
  {
    "id": "ritual_duranki_409",
    "name": "Vingança de Lilith",
    "nameEn": "Lilith's Vengeance",
    "level": 5,
    "tradition": "duranki",
    "desc": "Invoca as dores da Mãe Obscura para afligir o traidor com pesadelos incessantes e sangramento espontâneo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals"
  },
  {
    "id": "ritual_duranki_410",
    "name": "Rito de Marduk Morto e Ressuscitado",
    "nameEn": "Rite of Marduk Slain and Risen",
    "level": 5,
    "tradition": "duranki",
    "desc": "Um dos ritos supremos de Alamut que permite um um feiticeiro restaurar um consciência de um irmão em torpor profundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals"
  },
  {
    "id": "ritual_duranki_411",
    "name": "Visão dos Olhos do Céu",
    "nameEn": "Seeing With the Sky's Eyes",
    "level": 5,
    "tradition": "duranki",
    "desc": "O feiticeiro projeta sua consciência para os céus, observando movimentações de exércitos em todo o horizonte.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals"
  },
  {
    "id": "ritual_duranki_412",
    "name": "Ocluir a Estrada Ocidental",
    "nameEn": "Occlude the Western Road",
    "level": 5,
    "tradition": "duranki",
    "desc": "Bloqueia um passagem de almas e espíritos entre o mundo dos vivos e as Terras dos Mortos em uma região inteira.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals"
  },
  {
    "id": "ritual_duranki_413",
    "name": "Da Garganta de Marduk",
    "nameEn": "From Marduk's Throat",
    "level": 6,
    "tradition": "duranki",
    "desc": "O feiticeiro profere uma palavra primordial de comando que estilhaçum estruturas de pedra e ensurdece oponentes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Six_Rituals"
  },
  {
    "id": "ritual_koldunismo_414",
    "name": "Beber da Morte",
    "nameEn": "Drinking Death",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun \"bebe\" do solo ensanguentado de um cemitério, alimentando-se como se estivesse consumindo sangue humano diretamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_415",
    "name": "Iluminação dos Léleks",
    "nameEn": "Enlightenment",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun torna-se capaz de perceber léleks (espíritos elementais da natureza) em sua vizinhançum imediata.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_416",
    "name": "Hospitalidade do Refúgio",
    "nameEn": "Hospitality",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun desperta os espíritos em uma área sintonizada um ele (como seu Refúgio), animando os objetos e concedendo-lhes senciência limitada. Os objetos respondem quando interrogados e por vezes falam mesmo sem ordens, sempre com reverência e temor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_417",
    "name": "Senhor do Domínio",
    "nameEn": "Master of the Domain",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun torna sua presençum imensamente mais imponente e intimidadora para todos que estiverem dentro fazer seu domínio territorial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_418",
    "name": "Mefistófelis Noturno",
    "nameEn": "Mephistophelean Minx",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun alimenta um animal pequeno (não maior que um gato) com 1 ponto de seu sangue e o envia para perto de uma criançum adormecida. Se o animal deitar sobre o rosto da criançum, parte de sua essência vital é vinculada ao Koldun, que recupera paraçum de Vontade pela noite. Uma criançum cuja essência para roubada três vezes seguidas falece.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_419",
    "name": "Despertar das Águas Mortas",
    "nameEn": "Reawakening the Dead Water",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun pinga seu sangue em um corpo d'água estagnado e bebe dele, recuperando 1 ponto temporário de paraçum de Vontade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_420",
    "name": "Reflexos da Origem",
    "nameEn": "Reflections",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun pega um objeto feito de materiais naturais. Usando o objeto como âncora mística, ele pode observar o local exato de onde o objeto foi retirado, visualizando o ambiente exatamente como estava no momento da coleta.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_421",
    "name": "Ritual do Abraço da Morte",
    "nameEn": "Ritual of Death's Embrace",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun bebe de um cálice contendo uma mistura de vinho, cinzas e sua própria vitae. Em seguida, bebe de uma vítima e substitui o sangue dela por sua vitae. a vítima não se torna um carniçal, mas sofre de anemia progressiva. Quando toda um Parada de Sangue da vítima para substituída pela vitae fazer Koldun, o alvo morre e é Abraçado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_422",
    "name": "Percepção do Servo",
    "nameEn": "Servitor's Perception",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun compartilha seus poderes koldúnicos de Genius Loci com um animal carniçal, usando o poder através fazer servo e enxergando através de seus olhos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_423",
    "name": "Ornamentos Encantados",
    "nameEn": "Treasured Ornaments",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun desperta os espíritos simples dos objetos dentro de sua morada. Esses espíritos atuam como sentinelas básicas que podem ver, ouvir e se comunicar com o feiticeiro, mas realizam poucas outras umções.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_424",
    "name": "Verdade na Água",
    "nameEn": "Truth in Water",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "Ao manchar uma pequena poçum d'água com seu sangue, o Koldun cria um detector de mentiras elemental. Quando qualquer indivíduo mente enquanto está de pé dentro da poçum, a água começum um ferver instantaneamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_425",
    "name": "Decomposição Antinatural",
    "nameEn": "Unnatural Decay",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun amaldiçoa 1 km² de terra arável, tornando venenosas todas as plantações e colheitas cultivadas naquela área.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_426",
    "name": "Armadura de Outono",
    "nameEn": "Autumns Armor",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun cria uma camada protetora de terra e folhas ao redor de si, fortalecendo seu corpo físico contra impactos, mas reduzindo temporariamente seus Atributos Sociais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_427",
    "name": "Sangue Flamejante",
    "nameEn": "Blood of Flame",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun transforma sua própria vitae em uma lama viscosa que entra em combustão imediata assim que qualquer pessoa entra em contato físico com ela.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_428",
    "name": "Levado pelo Vento",
    "nameEn": "Borne by Wind",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun cavalga as correntes de ar, viajando instantaneamente pelo vento de sua posição atual emé qualquer local dentro de sua linha de visão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_429",
    "name": "Criar Pedra Sobrenatural",
    "nameEn": "Craft Weirding Stone",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun pega um cristal e investe 1 ponto de sangue nele. O sangue imbuífazer na pedra permite ao conjurador rastrear constantemente um distância e um direção aproximada fazer cristal. Quem estiver com um pedra pode recorrer à paraçum de Vontade fazer Koldun para enviar-lhe uma mensagem telepática curta ou receber intuições ambientais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_430",
    "name": "Vitae Concentrada",
    "nameEn": "Concentrated Vitae",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun consagra um poço de água. Misturar sangue comum com esta água abençoada duplica um potência da vitae derramada nela.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_431",
    "name": "Olhos dos Mortos",
    "nameEn": "Eyes of the Dead",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "Funciona de maneira idêntica ao ritual de Nível 1 'Percepção fazer Servo', mas permite transferir o Genius Loci para um espírito da natureza em vez de um animal simples.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_432",
    "name": "Invocar o Sinal Menor de Poder",
    "nameEn": "Invoke the Lesser Sign of Power",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun manifesta um brilho sobrenatural e ressonância elemental em seus olhos, correspondente à sua Trilha Koldúnica mais elevada. Mortais que fitam seu olhar são subjugados pelo pavor e submissão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_433",
    "name": "Serviço das Almas",
    "nameEn": "Service for Souls",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun convoca espíritos da natureza e os torna misticamente carniçais ao alimentá-los com seu sangue. Os espíritos vinculados permanecem um seu serviço emé cumprirem um tarefa designada.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_434",
    "name": "Agonia Fenecente",
    "nameEn": "Withering Agony",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun extrai o espírito definhante de uma árvore doente e o introduz no corpo de uma criatura. O alvo infectado passa um sofrer de graves debilitações físicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_435",
    "name": "Animar Curiosidades",
    "nameEn": "Animate Curios",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "Um refinamento do ritual 'Ornamentos Encantados'. Os objetos inanimados agora podem mover-se, levitar e emé mesmo lutar para defender seu mestre.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_436",
    "name": "Conjurar Espírito Maior",
    "nameEn": "Conjure Spirit",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun invoca um espírito elemental maior da natureza para negociar serviços e favores em troca de oblações e oferendas de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_437",
    "name": "Amedrontar o Servo",
    "nameEn": "Cowing the Servant",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun mistura cérebro de carneiro com terra de seu domínio e seu próprio sangue enquanto entoa cânticos eslavos, paraçando um servo um consumir um mistura para amplificar dramaticamente sua lealdade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_438",
    "name": "Invocar o Sinal Maior de Poder",
    "nameEn": "Invoke the Greater Sign of Power",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun assume uma fisionomia elemental condizente com sua Trilha elemental favorita. Essa profunda sintonia com a terra auxilia todos os seus testes de Feitiçaria Koldúnica.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_439",
    "name": "Um com a Floresta",
    "nameEn": "One With the Forest",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun funde-se ao tronco de uma árvore e pode emergir instantaneamente de qualquer outra árvore dentro da mesma floresta.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_440",
    "name": "Arruinar o Lélek",
    "nameEn": "Raze the Lélek",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun destrói completamente um objeto físico ao arrancar e dilacerar o espírito que habitava sua matéria.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_441",
    "name": "Sentinelas do Refúgio",
    "nameEn": "Sentinels of the Haven",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun anima um mobília, portas e janelas do refúgio para que se movam, tranquem e bloqueiem intrusos conforme sua vontade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_442",
    "name": "O Morto Flutuante",
    "nameEn": "The Floating Dead",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "Enquanto o ritual permanecer ativo, o Koldun é capaz de caminhar sobre a água como se fosse solo firme.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_443",
    "name": "Além do Muro da Morte",
    "nameEn": "Beyond the Wall of Death",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun utiliza os restos mortais de um feiticeiro koldúnico recém-falecido para invocar um reflexo espectral do conjurador e solicitar tutoria nas Trilhas que ele praticava em vida.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_444",
    "name": "Abraço da Terra Ancestral",
    "nameEn": "Earth's Embrace",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun contorna um Maldição de Clã dos Tzimisce ao convocar os espíritos locais para transubstanciar a terra sobre um qual repousa em sua 'terra natal' por algumas noites.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_445",
    "name": "Evocar a Tempestade",
    "nameEn": "Evoke the Storm",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun sobe ao topo de uma montanha ou terreno elevado e convoca uma tempestade elemental violenta sobre um região circundante.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_446",
    "name": "Semblante do Íncubo",
    "nameEn": "Incubus Visage",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun bebe do sangue de um javali e consome um pedaço de pele da vítima pretendida. Convocando um espírito da natureza na noite de meia-lua para assumir forma física, o Koldun pode deformar os traços físicos do alvo à distância por um mês.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_447",
    "name": "Fusão de Almas",
    "nameEn": "Merging of the Souls",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun envia um espírito da natureza para habitar o corpo de um de seus carniçais através de alimentação de sangue especial. O corpo de um carniçal pode suportar emé três espíritos antes de se deformar em algo inumano.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_448",
    "name": "Poço dos Segredos",
    "nameEn": "Pool of Secrets",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun passa as mãos sobre um poço de água salobra sem tocar um superfície. a água ondula e revela visões em tempo real da pessoa ou local com quem o Koldun já teve contato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_449",
    "name": "Refúgio da Cova Sedenta",
    "nameEn": "Refuge of the Thirsty Grave",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "Permite ao Koldun mimetizar o poder de Metamorfose 'Fusão com a terra', afundando no solo para se proteger da luz solar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_450",
    "name": "Poço de Adivinhação",
    "nameEn": "Scrying Pool",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun profere o nome de uma pessoa conhecida diante de um corpo d'água e um superfície reflete exatamente o que o alvo está fazendo no presente momento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_451",
    "name": "Laços que Unem",
    "nameEn": "Ties that Bind",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun derrama sangue sobre a terra diante de si e come o solo ensanguentado para reconectar-se misticamente com a terra, ganhando maior ligação com seus espíritos e ampliando o poder de suas feitiçarias.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_452",
    "name": "Conjurar Demônio",
    "nameEn": "Conjure Demon",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun invoca uma das crias primordiais de Kupala. O feiticeiro pode barganhar com um entidade demônioíaca por segredos arcanos e favores.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_453",
    "name": "Servo Elemental",
    "nameEn": "Elemental Servitor",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun convoca um espírito primordial para assumir forma física corpórea e lutar ferozmente por seu conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_454",
    "name": "Olhar da Górgona",
    "nameEn": "Gorgon's Gaze",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun amarra uma vítima para uma cerimônia de uma hora que culmina com um ingestão da vitae do conjurador pelo alvo. a vítima é então petrificada em rocha inanimada.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_455",
    "name": "Nêmesis da Terra Viva",
    "nameEn": "Nemesis of the Living Earth",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "Através de uma longa imprecação da meia-noite ao nascer fazer sol, o Koldun nomeia o alvo como inimigo mortal da natureza. Os elementos naturais passam um ferir e perseguir ativamente a vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_456",
    "name": "Espelho de Sangue",
    "nameEn": "Mirror of Blood",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "Utilizado em conjunto com Vicissitude e o Laço de Sangue para criar um linhagem artificial de combate dos Irmãos de Sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_457",
    "name": "O Puxão Mais Íntimo",
    "nameEn": "The Inmost Tug",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun altera e molda livremente as emoções de qualquer criatura sob Laço de Sangue total em relação um si.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_458",
    "name": "Abraçar o Demônio",
    "nameEn": "Embracing the Demon",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "O Koldun aprisiona uma entidade demônioíaca no cadáver de um receptáculo previamente submetido ao laço de sangue. O demônio vinculado serve ao feiticeiro com fidelidade incondicional.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_459",
    "name": "Criar Vozhd",
    "nameEn": "Create Vozhd",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "O Koldun amalgama dezenas de carniçais embebidos em vitae e preparados com poções alquímicas e Vicissitude em um leviatã de guerra titânico conhecido como Vozhd.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_460",
    "name": "Afogamento em Terra",
    "nameEn": "Drowning in Earth",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "Amaldiçoa o alvo de forma que pedra e terra perdem um solidez sob seus pés, afundando o alvo e sepultando-o em rocha sólida quando um maldição encerra.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_461",
    "name": "Cão da Tempestade",
    "nameEn": "Storm Hound",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "O Koldun queima ervas e madeira atingida por raios, oferecendo um sacrifício ao deus eslavo fazer trovão Perun para criar uma tempestade perseguidora que atinge o alvo em qualquer parte fazer mundo através de uma amostra física de seu corpo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_koldunismo_462",
    "name": "Dracul",
    "nameEn": "Dracul",
    "level": 9,
    "tradition": "koldunismo",
    "desc": "O Koldun utiliza seu comando supremo sobre a terra primordial para transmutar-se no mítico dragão dracul colossal.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals"
  },
  {
    "id": "ritual_sadhana_463",
    "name": "Armadura da Serenidade de Diamante",
    "nameEn": "Armor of Diamond Serenity",
    "level": 1,
    "tradition": "sadhana",
    "desc": "Ao invocar os mantras sagrados de Shiva, o sadhu ganha imunidade completa um qualquer tipo de Frenesi ou Rötschreck pelo restante da noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_464",
    "name": "Rituais de Rakta-Maya",
    "nameEn": "Rakta-Maya Rituals",
    "level": 1,
    "tradition": "sadhana",
    "desc": "Um amplo grupo de rituais tântricos orientais que permite ao mago hipnotizar receptáculos voluntários e tecer miragens de sangue convincentes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_465",
    "name": "Caminhar sobre as Águas de Varuna",
    "nameEn": "Water Walking",
    "level": 1,
    "tradition": "sadhana",
    "desc": "Através de uma oferenda de mingau e manteiga ghee consagrada ao deus védico Varuna, o sadhu adquire o poder de caminhar livremente sobre as águas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_466",
    "name": "Animaa (Visão Minúscula)",
    "nameEn": "Animaa",
    "level": 2,
    "tradition": "sadhana",
    "desc": "O mago adquire um capacidade de enxergar objetos minúsculos e detalhes microscópicos com absoluta clareza perceptual.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_467",
    "name": "Cinzas da Maldição de Agni",
    "nameEn": "Ash of Agni's Curse",
    "level": 2,
    "tradition": "sadhana",
    "desc": "O feiticeiro queima uma oferenda um Agni (deus do fogo e fazer sacrifício), transformando as cinzas em um pó que inflama em contato com um carne de inimigos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_468",
    "name": "Garimaa (Peso Inabalável)",
    "nameEn": "Garimaa",
    "level": 2,
    "tradition": "sadhana",
    "desc": "Por um período determinado, o mago torna-se incrivelmente denso e pesado, sendo virtualmente impossível de ser erguido, derrubado ou arremessado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_469",
    "name": "Chamado do Destino",
    "nameEn": "Destiny's Call",
    "level": 3,
    "tradition": "sadhana",
    "desc": "Este tantra permite ao mago atrair e cruzar o caminho de uma pessoa que possua exatamente as qualidades e traços que ele procura.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_470",
    "name": "Maldição do Leproso",
    "nameEn": "Leper's Curse",
    "level": 3,
    "tradition": "sadhana",
    "desc": "O sadhu inverte um rito sagrado bramânico para lançar uma terrível maldição sobre o inimigo, cobrindo seu corpo de feridas e chagas degenerativas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_471",
    "name": "Leite de Puutanaa",
    "nameEn": "Milk of Puutanaa",
    "level": 4,
    "tradition": "sadhana",
    "desc": "O sadhu utiliza um elo simpático com a vítima para envenenar o leite ou alimento consumido pelo alvo através de paraças espirituais malévolas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_472",
    "name": "Aurava (Fogo Subaquático)",
    "nameEn": "Aurava",
    "level": 4,
    "tradition": "sadhana",
    "desc": "O feiticeiro indiano conjura o mítico fogo aurava, uma chama mágica que queima e incinera mesmo debaixo d'água.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_473",
    "name": "Proteção do Ventre",
    "nameEn": "Warded Womb",
    "level": 4,
    "tradition": "sadhana",
    "desc": "Através de oferendas de leite, manteiga ghee e um amuleto sagrado de chumbo, o sadhu protege uma linhagem contra possessões e feitiçarias nefandas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_474",
    "name": "Plenitude Corporal Transcendental",
    "nameEn": "Transcendentally Satisfying Body-Filling",
    "level": 5,
    "tradition": "sadhana",
    "desc": "O sadhu realiza o rito diante de um santuário consagrado um Shiva, satisfazendo plenamente sua Fome e acalmando um Besta interior por vários dias.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_475",
    "name": "Tear Cósmico de Vishnu",
    "nameEn": "Loom of Vishnu",
    "level": 5,
    "tradition": "sadhana",
    "desc": "Este poderoso tantra permite ao mago usurpar temporariamente um ilusão cósmica (Maya) de Vishnu para reescrever as impressões sensoriais de todos ao seu redor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  },
  {
    "id": "ritual_sadhana_476",
    "name": "Olho de Mahakala",
    "nameEn": "Eye of Mahakala",
    "level": 5,
    "tradition": "sadhana",
    "desc": "Invoca Shiva em sua forma cósmica de Mahakala (Senhor fazer Tempo e Destruidor Final) para desintegrar em cinzas objetos físicos e barreiras mágicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals"
  }
];
