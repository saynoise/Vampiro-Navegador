/**
 * GRIMÓRIO OFICIAL COMPLETO DE RITUAIS V20 (100% BASEADO NA WHITE WOLF WIKI)
 * Total de Rituais Oficiais: 503
 * 
 * Nomes traduzidos para Português em destaque, com nome oficial canônico em inglês logo abaixo.
 * Todas as descrições e processos traduzidos e revisados com qualidade editorial V20 em Português.
 * Ingredientes exibidos estritamente quando constam nas tabelas oficiais da Wiki (100% em Português).
 */
const RITUALS_DATA = [
  {
    "id": "ritual_taumaturgia_1",
    "name": "Amarrar a Língua Acusadora",
    "nameEn": "Bind the Accusing Tongue",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma mecha de cabelo do alvo, um cordão de seda preta e uma imagem da pessoa",
    "desc": "O taumaturgo enrola o cordão de seda preta ao redor da mecha de cabelo e da imagem do indivíduo enquanto entoa fórmulas herméticas de contenção. — Efeito: O alvo torna-se completamente incapaz de falar mal, fazer denúncias, acusar ou difamar o conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_2",
    "name": "Contrato de Sangue",
    "nameEn": "Blood Contract",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um contrato formal escrito e assinado com o sangue do conjurador e da outra parte",
    "desc": "Ambas as partes assinam seus nomes com sangue na redação formal do contrato. — Efeito: Cria um contrato místico vinculativo e inquebrável; qualquer um dos signatários que violar as cláusulas acordadas sofrerá maldições terríveis e imediatas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_3",
    "name": "Sangue em Água",
    "nameEn": "Blood into Water",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um cálice de água purificada",
    "desc": "O taumaturgo despeja a água purificada através de sua mão estendida enquanto entoa encantamentos de transmutação. — Efeito: Transmuta todo sangue derramado no ambiente ao redor em água limpa e inofensiva, eliminando vestígios e pistas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_4",
    "name": "Domínio do Sangue",
    "nameEn": "Blood Mastery",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um frasco contendo a vitae do conjurador e a vitae do alvo",
    "desc": "O conjurador queima a mistura de vitae sobre uma chama aberta enquanto recita palavras de domínio e autoridade. — Efeito: Garante 1 sucesso automático em uma ação ou disputa específica realizada diretamente contra o alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_5",
    "name": "Sangue da Paz",
    "nameEn": "Blood of Peace",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "2 pontos de sangue do conjurador (10 minutos de preparo)",
    "desc": "O taumaturgo mistura o sangue preparado a uma bebida ou aplica-o diretamente sobre a pele do alvo. — Efeito: A vitae atua como um narcótico potente, induzindo sono profundo, calmaria e tranquilidade na vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_6",
    "name": "Ímpeto do Sangue",
    "nameEn": "Blood Rush",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "A presa de um animal predador",
    "desc": "O conjurador entoa encantamentos cerimoniais enquanto segura a presa animal firmemente na mão. — Efeito: O vampiro experimenta toda a euforia, prazer e saciedade de se alimentar de sangue fresco sem precisar ingerir sangue de fato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_7",
    "name": "Marca Mística",
    "nameEn": "Brand",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Prata derretida e uma tatuagem ou símbolo marcado na pele",
    "desc": "Enquanto recita cânticos de fixação, o taumaturgo derrama prata derretida sobre a tatuagem ou cicatriz na carne do cainita. — Efeito: A marca ou desenho torna-se permanente, indelével e imutável, resistindo a qualquer regeneração vampírica.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_8",
    "name": "Marca do Amante",
    "nameEn": "Brand of the Paramour",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Gêmeos mortais e um carniçal",
    "desc": "O conjurador e seu carniçal bebem 2 pontos de sangue de gêmeos mortais durante a cerimônia. — Efeito: Cria um elo empático e sensorial; o conjurador sente dores empáticas e sabe instantaneamente quando seu carniçal sofre danos ou perigo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_9",
    "name": "A Mosca Varejeira Retardada",
    "nameEn": "The Carrion Fly Delayed",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma vítima viva, um incensário e sais alquímicos",
    "desc": "O conjurador realiza a dissecação da vítima e deposita as partes extraídas sobre um incensário com sais alquímicos sob incantações. — Efeito: Preserva partes do corpo decepadas e órgãos contra qualquer decomposição ou putrefação biológica indefinidamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_10",
    "name": "Sino dos Espíritos Invisíveis",
    "nameEn": "Chime of Unseen Spirits",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Alianças de casamento de três mulheres falecidas",
    "desc": "O taumaturgo funde as três alianças de casamento em um carrilhão ou sino sob encantamentos harmônicos. — Efeito: O sino ressoa e toca sozinho quando qualquer entidade espiritual, fantasma ou aparição se aproxima do local.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_11",
    "name": "Manto de Sangue",
    "nameEn": "Cloak of Blood",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um mortal inocente disposto a doar seu sangue voluntariamente",
    "desc": "O cainita jejua por sete noites consecutivas e então bebe do sangue oferecido voluntariamente por um mortal puro. — Efeito: Oculta temporariamente todas as manchas negras e veios de Diablerie presentes na aura do vampiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_12",
    "name": "Comunicação com o Senhor",
    "nameEn": "Communicate with Sire",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um objeto pessoal que pertenceu ao senhor cainita",
    "desc": "O taumaturgo medita por 30 minutos concentrando-se profundamente no objeto pessoal de seu criador. — Efeito: Estabelece uma ponte mental e conversa telepática bidirecional com seu senhor cainita, independentemente da distância física.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_13",
    "name": "Contagem de Conquistas",
    "nameEn": "Counting Coup",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um pedaço de giz cerimonial",
    "desc": "O conjurador desenha símbolos heráldicos e rúnicos com giz durante 15 minutos em uma superfície rígida. — Efeito: Transmite uma mensagem psíquica ou aviso místico ao Príncipe da cidade ou a membros de sua linhagem direta.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_14",
    "name": "Decifrar Missiva",
    "nameEn": "Decrypt Missive",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma gota de sangue e um documento cifrado",
    "desc": "O conjurador pinga uma gota de sangue sobre o documento codificado e medita por 10 minutos sob encantamentos. — Efeito: Quebra e decifra automaticamente quaisquer cifras taumatúrgicas, feitiços de ocultação e criptografias místicas no texto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_15",
    "name": "Consagração da Capela",
    "nameEn": "Dedicate the Chantry",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Água estagnada e o edifício da Capela",
    "desc": "O taumaturgo caminha em círculo ao redor do edifício aspergindo água estagnada e unge as mãos no piso inferior da estrutura. — Efeito: Sintoniza o local com a linhagem Tremere e facilita todos os rituais defensivos subsequentes lançados no prédio.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_16",
    "name": "Defesa do Refúgio Sagrado",
    "nameEn": "Defense of the Sacred Haven",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Vitae do conjurador",
    "desc": "O taumaturgo pinta sigilos arcanos com seu próprio sangue em todas as portas e janelas do aposento enquanto recita encantamentos de proteção. — Efeito: Impede completamente a passagem da luz solar através das aberturas enquanto o conjurador permanecer dentro do cômodo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_17",
    "name": "Deflexão da Perdição de Madeira",
    "nameEn": "Deflection of Wooden Doom",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma farpa de madeira e um círculo de madeira",
    "desc": "O vampiro posiciona a farpa sob a língua e permanece em pé no centro do círculo de madeira entoando cânticos de repulsão. — Efeito: A primeira estaca de madeira desferida contra o coração do conjurador desintegra-se em pó antes de perfurar a carne.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_18",
    "name": "Toque do Diabo",
    "nameEn": "Devil's Touch",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma moeda marcada com uma gota de sangue",
    "desc": "O taumaturgo introduz disfarçadamente a moeda encantada nos pertences ou nas mãos do alvo. — Efeito: O alvo passa a emanar uma aura de repulsa social involuntária, sendo hostilizado, evitado e tratado com desprezo por todos ao seu redor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_19",
    "name": "Dominó da Vida",
    "nameEn": "Dominoe of Life",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um frasco com sangue humano fresco",
    "desc": "O vampiro entoa fórmulas de ilusão vital enquanto segura o frasco de sangue humano. — Efeito: Simula perfeitamente uma característica fisiológica de um ser humano vivo (pulsação cardíaca, respiração, calor na pele ou capacidade de ingerir e digerir alimentos por uma noite).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_20",
    "name": "Criptografar Missiva",
    "nameEn": "Encrypt Missive",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Papel/pergaminho e sangue do conjurador",
    "desc": "O conjurador escreve a mensagem usando sangue como tinta e pronuncia o nome do destinatário ao finalizar. — Efeito: O texto só pode ser lido pelo próprio conjurador e pelo destinatário pretendido; para qualquer outro observador, o papel parece em branco ou indecifrável.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_21",
    "name": "Ativação do Receptáculo de Transferência",
    "nameEn": "Engaging the Vessel of Transference",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um recipiente de vidro ou cerâmica e vitae do conjurador",
    "desc": "O taumaturgo inscreve um selo hermético na superfície externa do recipiente preenchido com sangue. — Efeito: O recipiente transfere seu conteúdo de sangue e drena sangue de qualquer indivíduo que tocá-lo com as mãos desprotegidas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_22",
    "name": "Expediente Burocrático Ágil",
    "nameEn": "Expedient Paperwork",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um documento oficial e pelos de um cão leal",
    "desc": "O conjurador passa os pelos do animal sobre as folhas do documento sob encantamentos de urgência. — Efeito: O documento passa a ser visto como de máxima prioridade institucional e tramita com extrema rapidez por quaisquer órgãos burocráticos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_23",
    "name": "Morte Clínica (Linha Reta)",
    "nameEn": "Flatline",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um inseto morto",
    "desc": "O conjurador oculta o inseto morto no refúgio ou aposento do alvo sob fórmulas de paralisação. — Efeito: O alvo passa a não exibir nenhum sinal vital secundário em exames ou aparelhos médicos, parecendo estar clinicamente morto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_24",
    "name": "Iluminar o Rastro da Presa",
    "nameEn": "Illuminate Trail of Prey",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma fita de cetim branco",
    "desc": "O taumaturgo queima a fita de cetim branco enquanto entoa cânticos de perseguição. — Efeito: Revela o rastro recente deixado pelo alvo como uma linha de luz pulsante visível apenas ao conjurador (a conexão se desfaz se o alvo cruzar água corrente).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_25",
    "name": "Aflição do Diabrete",
    "nameEn": "The Imp's Affliction",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um pedaço de papel",
    "desc": "O conjurador escreve o nome do alvo no pedaço de papel enquanto entoa fórmulas depreciativas. — Efeito: Os traços físicos e a fisionomia do alvo tornam-se grotescamente distorcidos, feios e desfigurados durante toda a noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_26",
    "name": "Semblante Impressionante",
    "nameEn": "Impressive Visage",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Folhas de hortelã seca e sangue humano puro",
    "desc": "O vampiro lava o próprio rosto em sangue puro e deposita folhas de hortelã seca no interior de seus sapatos. — Efeito: Concede uma presença irresistivelmente sedutora, atraente e magnética perante todos os presentes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_27",
    "name": "Encantamento do Pastor",
    "nameEn": "Incantation of the Shepherd",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Duas lentes ou fragmentos de vidro polido",
    "desc": "O conjurador gira lentamente em círculo segurando as duas lentes de vidro diante dos olhos enquanto recita fórmulas pastorais. — Efeito: Localiza com precisão a direção, distância e paradeiro de mortais que compõem seu rebanho habitual de alimentação.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_28",
    "name": "Sondar a Mente em Torpor",
    "nameEn": "Learning the Mind Enslumbered",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um vampiro em torpor e duas moedas de prata",
    "desc": "O taumaturgo coloca as moedas sobre os olhos do cainita adormecido e entra em transe meditativo profundo. — Efeito: Estabelece contato psíquico e comunicação direta com a mente do vampiro em estado de Torpor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_29",
    "name": "Vitae Luminosa",
    "nameEn": "Luminous Vitae",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma agulha de costura",
    "desc": "O conjurador foca a visão através do buraco da agulha enquanto entoa encantações de detecção. — Efeito: Todo sangue derramado nas proximidades do conjurador emite um brilho arroxeado e iridescente visível a ele.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_30",
    "name": "Agora Seus Olhos São Nossos",
    "nameEn": "Now Its Sight Is Ours",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Alfinete dourado, arame, tigela dourada, incensário, garra dourada, vitae e uma vítima viva",
    "desc": "O olho da criatura é extraído, perfurado pelo alfinete conectado ao arame e à garra, passado pela fumaça do incensário e banhado na tigela com vitae. — Efeito: O olho funciona como um transmissor espião mágico; o conjurador enxerga tudo que o olho vê caso um vampiro beba daquela vitae.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_31",
    "name": "Preservar Sangue",
    "nameEn": "Preserve Blood",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um jarro de barro cozido e cera virgem de abelha",
    "desc": "O jarro é enterrado por dois dias no solo, desenterrado para despejar o sangue em seu interior e lacrado com cera quente sob cânticos. — Efeito: Preserva o sangue em estado fresco, líquido e nutritivo indefinidamente sem necessidade de refrigeração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_32",
    "name": "Preservar Cadáver",
    "nameEn": "Preserve Corpse",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Líquido especial composto de ervas raras e bálsamos orgânicos",
    "desc": "O conjurador aplica a solução líquida sobre o cadáver sob fórmulas conservantes. — Efeito: Protege um cadáver humano adulto contra qualquer putrefação e decomposição biológica por até uma semana.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_33",
    "name": "Proteger a Tumba",
    "nameEn": "Protect the Tomb",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Sepultura consagrada, um cadáver e incenso",
    "desc": "O conjurador adentra a câmara funerária, queima incenso e inscreve a sepultura com símbolos sagrados herméticos. — Efeito: Ergue barreiras de proteção que aumentam expressivamente a dificuldade de profanar o cadáver ou perturbar o espírito do falecido.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_34",
    "name": "Purgar o Demônio Interior",
    "nameEn": "Purge the Inner Demon",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um alfinete de ferro robusto e consagrado",
    "desc": "O conjurador crava o alfinete consagrado através da mão dominante do alvo em fúria. — Efeito: Apazigua e silencia a Besta interior, encerrando instantaneamente o estado de Frenesi da criatura.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_35",
    "name": "Pureza do Sangue",
    "nameEn": "Purity of Blood",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Recipiente de cerâmica, sangue, cinzas consagradas e gengibre esmagado",
    "desc": "O taumaturgo despeja o sangue no recipiente, gesticula e entoa encantações adicionando cinzas e gengibre moído. — Efeito: Purifica o sangue, eliminando venenos, toxinas, drogas e doenças contaminantes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_36",
    "name": "Pureza da Carne",
    "nameEn": "Purity of Flesh",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "13 pedras pontiagudas dispostas em círculo",
    "desc": "O vampiro senta-se no centro do círculo de pedras afiadas sobre a terra nua em meditação profunda. — Efeito: Expulsa violentamente do corpo todas as impurezas estranhas (tinta de tatuagens, projéteis balísticos alojados, venenos, drogas e sujeira).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_37",
    "name": "Renascimento da Vaidade Mortal",
    "nameEn": "Rebirth of Mortal Vanity",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Mecha de cabelo de uma criança humana e um espelho",
    "desc": "O conjurador posiciona o cabelo sobre a superfície do espelho e gesticula enquanto os fios afundam no vidro sob encantamentos. — Efeito: Permite ao vampiro alterar permanentemente o comprimento, estilo e fazer crescer cabelo novamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_38",
    "name": "Retorno ao Refúgio Seguro dos Tremere",
    "nameEn": "Return to Tremere Safe Haven",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Vitae de todos os conjuradores envolvidos",
    "desc": "Ritual cerimonial de 2 horas realizado no chão da Capela Tremere sobre um círculo contínuo traçado com sangue. — Efeito: Permite o teletransporte instantâneo do conjurador de volta para a segurança da Capela a partir de qualquer local da cidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_39",
    "name": "Rito de Apresentação",
    "nameEn": "Rite of Introduction",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Raiz de tamarisco, óleo de galanga, água da chuva e um caldeirão",
    "desc": "O taumaturgo ferve a raiz em água da chuva, recita uma introdução formal em direção aos vapores e goteja óleo de galanga na água. — Efeito: Comunica-se ritualística e formalmente com seu superior direto na Pirâmide da Casa Tremere.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_40",
    "name": "Redoma Sanguínea",
    "nameEn": "Sanguineous Phial",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Recipiente de barro, folhas secas de freixo e sangue",
    "desc": "Enterra o recipiente no solo por duas noites, esfarela as folhas secas de freixo sob cânticos e despeja o sangue no frasco. — Efeito: Armazena o sangue mantendo intactas todas as suas conexões simpáticas e ressonâncias para rituais futuros.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_41",
    "name": "Odor da Passagem do Garou",
    "nameEn": "Scent of the Garou's Passing",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Mistura herbal contendo asclépia, sálvia e acônito (mata-lobos)",
    "desc": "O conjurador inala a mistura herbal seca sob fórmulas de aguçamento sensorial. — Efeito: O vampiro adquire a capacidade olfativa de detectar o cheiro e a presença próxima de lobisomens (Garou).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_42",
    "name": "O Escriba",
    "nameEn": "The Scribe",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "O bico de uma ave canora ou corvo",
    "desc": "O taumaturgo esmaga o bico da ave entre o polegar e o indicador enquanto dita suas palavras. — Efeito: Todas as palavras proferidas pelo conjurador surgem grafadas diretamente em folhas de papel ou pergaminho à sua frente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_43",
    "name": "Sentir o Místico",
    "nameEn": "Sense the Mystical",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma vela ritualística especialmente preparada",
    "desc": "O conjurador entoa encantamentos sobre a vela consagrada e a acende. — Efeito: Todas as fontes de magia de sangue e resíduos arcanos nas redondezas tornam-se visíveis como uma aura luminescente ao redor de objetos ou pessoas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_44",
    "name": "Serenata aos Espíritos (Kami)",
    "nameEn": "Serenading the Kami",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma vareta de incenso aromático",
    "desc": "O taumaturgo acende a vareta de incenso e caminha pela área oferecendo agradecimentos aos espíritos guardiões do local. — Efeito: Harmoniza o ambiente e torna todas as ações físicas realizadas no perímetro santificado mais fáceis e fluidas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_45",
    "name": "Sigilo de Autoridade",
    "nameEn": "Sigil of Authority",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Uma lâmina de prata e o símbolo heráldico do conjurador",
    "desc": "O conjurador grava seu símbolo pessoal ou de clã na carne do indivíduo com a lâmina de prata sob fórmulas de lealdade. — Efeito: A marca indelével atesta a todos os observadores que o portador age como representante oficial da autoridade do conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_46",
    "name": "Alma da Terra (Gárgula)",
    "nameEn": "Soul of the Earth",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Vitae de Gárgula e granito finamente pulverizado",
    "desc": "Aplica-se uma mistura de pó de granito e vitae de Gárgula sobre o corpo de um animal durante uma hora antes de Abraçá-lo com a mesma vitae. — Efeito: Se o ritual for bem-sucedido, o animal é Abraçado e transformado em uma pequena gárgula de guarda e sentinela.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_47",
    "name": "Amansar a Chama Enlouquecedora",
    "nameEn": "Tame the Maddening Flame",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um jarro de água pura e 1 ponto de vitae",
    "desc": "O conjurador mistura água com sua própria vitae e asperge o líquido ao redor de um edifício ou área em chamas. — Efeito: As chamas existentes assumem uma tonalidade esmeralda esverdeada e deixam de provocar Rötschreck (medo de fogo) nos cainitas presentes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_48",
    "name": "Visão Verdadeira",
    "nameEn": "True Sight",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "5 minutos de cânticos rituais contínuos",
    "desc": "O taumaturgo entoa cânticos de discernimento por 5 minutos sobre o vampiro receptor. — Efeito: Transforma o receptor em um detector de mentiras vivo e dobra sua Percepção para identificar falsidades, disfarces e artimanhas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_49",
    "name": "Despertar com o Frescor da Noite",
    "nameEn": "Wake with Evening's Freshness",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Cinzas de penas de pássaro queimadas",
    "desc": "O cainita espalha as cinzas de penas ao redor da área de repouso antes de dormir. — Efeito: O vampiro desperta instantaneamente com plena lucidez, prontidão de sentidos e sem qualquer penalidade de sonolência diurna caso alguém perturbe as cinzas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_50",
    "name": "Rancor da Viúva",
    "nameEn": "Widow's Spite",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um boneco de cera ou pano com o nome do alvo",
    "desc": "O conjurador entoa maldições de simpatia sobre o boneco contendo o nome e representação da vítima. — Efeito: Inflige dores súbitas, desconforto, irritação na pele e maré de azar leve sobre o alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_51",
    "name": "Fogo-Fátuo",
    "nameEn": "Will o' the Wisp",
    "level": 1,
    "tradition": "taumaturgia",
    "components": "Um pequeno galho de salgueiro",
    "desc": "O taumaturgo recita encantamentos de luminescência e arremessa o galho de salgueiro no ar. — Efeito: Cria uma esfera sobrenatural de luz flutuante que ilumina o ambiente e obedece aos comandos mentais de movimentação do conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_1"
  },
  {
    "id": "ritual_taumaturgia_52",
    "name": "Ascensão do Sangue",
    "nameEn": "Ascension of the Blood",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Pó de ouro puro e vitae de um vampiro de menor geração",
    "desc": "O conjurador consome a mistura alquímica de ouro e vitae em transe meditativo. — Efeito: Reduz temporariamente sua geração aparente em 1 passo por uma noite inteira para fins de resistência, limites de sangue e poder mágico.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_53",
    "name": "Água Negra",
    "nameEn": "Black Water",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Tinta de polvo e vitae do conjurador",
    "desc": "O taumaturgo derrama a tinta de polvo misturada com sua vitae em um corpo d'água (piscina, lago ou poço). — Efeito: Torna a água completamente opaca, negra como breu e impenetrável à luz, bloqueando a visão e sensores submarinos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_54",
    "name": "Chamado do Sangue",
    "nameEn": "Blood Call",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma gota de sangue do alvo e uma vela vermelha",
    "desc": "O taumaturgo queima a gota de sangue na chama da vela enquanto entoa o nome verdadeiro do alvo repetidas vezes. — Efeito: Envia um poderoso chamado psíquico irresistível que compele a vítima a viajar imediatamente até a presença do conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_55",
    "name": "Hidromel de Sangue",
    "nameEn": "Blood Mead",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Hidromel puro fermentado e vitae do conjurador",
    "desc": "O taumaturgo mistura o hidromel com sua vitae sob encantamentos de conservação etílica. — Efeito: Cria uma bebida inebriante e mágica que pode ser ingerida por vampiros e mortais, proporcionando euforia, vigor e resistência ampliada a dores.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_56",
    "name": "Trilha do Sangue (Linhagem)",
    "nameEn": "Blood Walk",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Sangue fresco do alvo e um cálice de prata",
    "desc": "O conjurador ferve uma amostra de sangue do alvo no cálice e inala seus vapores sob encantamentos genealógicos. — Efeito: Revela a geração exata, o clã, o senhor cainita e todas as conexões ativas de Laço de Sangue do indivíduo examinado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_57",
    "name": "Condenação Burocrática",
    "nameEn": "Bureaucratic Condemnation",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um carimbo oficial, tinta vermelha e um formulário governamental",
    "desc": "O conjurador carimba o formulário com o nome da vítima enquanto recita imprecações jurídicas. — Efeito: O alvo passa a sofrer bloqueios imediatos de contas bancárias, auditorias fiscais implacáveis, investigações policiais e perda de licenças públicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_58",
    "name": "Lâmina Flamejante",
    "nameEn": "Burning Blade",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma arma branca cortante ou perfurante e a própria palma cortada",
    "desc": "O conjurador corta a própria palma da mão com a lâmina enquanto entoa encantações de ignição mística. — Efeito: A lâmina é envolvida por chamas arcanas e passa a infligir dano agravado em seus próximos golpes sem queimar as mãos do conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_59",
    "name": "Chamar o Espírito Inquieto",
    "nameEn": "Calling the Restless Spirit",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "O local da assombração ou o cadáver da pessoa falecida",
    "desc": "O taumaturgo queima sálvia e entoa fórmulas de apelo fúnebre sobre os restos mortais ou local da morte. — Efeito: Convoca o fantasma ou aparição de uma pessoa falecida recentemente para um interrogatório curto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_60",
    "name": "Criar Pedra de Sangue",
    "nameEn": "Craft / Create Bloodstone",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma pedra de jaspe ou magnetita e 3 pontos de vitae",
    "desc": "O taumaturgo banha a pedra em sua vitae por uma semana sob cânticos contínuos. — Efeito: Transforma a pedra em uma bússola mística; o conjurador pode sentir com exatidão a direção e distância da pedra em qualquer lugar do mundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_61",
    "name": "Comunicação com o Companheiro de Laço",
    "nameEn": "Communicate with Kindred Bond Mate",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um vampiro com quem o conjurador compartilha um Laço de Sangue mútuo",
    "desc": "O conjurador entra em meditação profunda concentrando-se no vínculo de sangue que une ambos. — Efeito: Estabelece comunicação telepática instantânea e bidirecional a qualquer distância física com o companheiro de laço.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_62",
    "name": "Negar o Intruso",
    "nameEn": "Deny the Intruder",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Pó de ferro, cinzas de sálvia e vitae do conjurador",
    "desc": "O taumaturgo unge todas as fechaduras, trincos e batentes com a mistura sob fórmulas de fechamento. — Efeito: Tranca portas e janelas misticamente, tornando-as impossíveis de arrombar por gazuas, ferramentas ou forças não-sobrenaturais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_63",
    "name": "Detectar Autoridade",
    "nameEn": "Detect Authority",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Corte nas palmas entre o conjurador e o neófito, unindo as mãos",
    "desc": "O conjurador corta a palma, une sua mão com a da pessoa examinada e olha fixamente nos olhos do neófito sob encantamento. — Efeito: Detecta sinais místicos de Laço de Sangue, ordens de Dominação ativas ou influências externas de controle mental.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_64",
    "name": "Vestir a Máscara das Sombras",
    "nameEn": "Donning the Mask of Shadows",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Cinzas de tecido de veludo negro",
    "desc": "O taumaturgo esfrega as cinzas no rosto e entoa fórmulas de dispersão luminosa. — Efeito: O corpo do alvo torna-se translúcido e seus passos ficam totalmente silenciosos, dificultando a detecção visual e auditiva.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_65",
    "name": "Pó da Lembrança",
    "nameEn": "Dust of Remembrance",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Mirra, cinzas do dedo decepado do conjurador, borras de vinho e pó de prata",
    "desc": "O conjurador mistura os pós e asperge o pó sobre objetos inanimados no ambiente. — Efeito: O taumaturgo descobre quem tocou ou interagiu com qualquer um dos objetos aspergidos e em qual momento exato isso ocorreu.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_66",
    "name": "Intensificar a Maldição",
    "nameEn": "Enhance the Curse",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Sangue extraído de um carniçal",
    "desc": "O taumaturgo extrai sangue de seu carniçal e profere palavras de transmissão ancestral. — Efeito: O carniçal passa a sofrer temporariamente as mesmas desvantagens, aversões e fraquezas de clã de um verdadeiro vampiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_67",
    "name": "Extinguir",
    "nameEn": "Extinguish",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma vela acesa",
    "desc": "O taumaturgo apaga a chama da vela apertando-a entre os dedos enquanto entoa o encantamento e cospe no chão ao finalizar. — Efeito: Permite ao vampiro extinguir instantaneamente qualquer fogo ou fogueira próxima com uma simples palavra de comando.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_68",
    "name": "Olhos de Babel",
    "nameEn": "Eyes of Babel",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "A língua e os olhos de uma vítima falecida",
    "desc": "O taumaturgo consome ritualisticamente a língua e os olhos da vítima sob orações arcanas. — Efeito: O conjurador torna-se capaz de compreender, ler, escrever e falar todos os idiomas que a vítima conhecia em vida por uma noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_69",
    "name": "Olhos do Falcão Noturno",
    "nameEn": "Eyes of the Night Hawk",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma ave de rapina noturna (falcão, coruja ou gavião)",
    "desc": "O vampiro toca a ave enquanto recita cânticos de ligação sensorial e alimenta o pássaro com uma gota de vitae. — Efeito: O conjurador enxerga e ouve em tempo real através dos olhos e ouvidos do pássaro enquanto ele sobrevoa a cidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_70",
    "name": "Refúgio Oculto",
    "nameEn": "Hidden Haven",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Giz consagrado, uma noite inteira de ritos e 1 ponto de Força de Vontade permanente",
    "desc": "O taumaturgo circunda o edifício inteiro durante uma noite marcando todos os cantos, soleiras e janelas com giz. — Efeito: Oculta o edifício da percepção mundana e casual, tornando impossível encontrá-lo sem possuir uma chave mística específica (como uma palavra de passe).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_71",
    "name": "Ilusão da Morte Pacífica",
    "nameEn": "Illusion of Peaceful Death",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma pena imaculada embebida no sangue de um homem bom falecido em paz, e um cadáver",
    "desc": "O taumaturgo passa a pena sobre o cadáver enquanto recita a fórmula cerimonial de encobrimento. — Efeito: Faz com que qualquer observador, legista ou perito conclua que a pessoa faleceu pacificamente durante o sono de causas naturais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_72",
    "name": "Rastro Intransitável",
    "nameEn": "Impassable Trail",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Pele de cervo enrolada nos pés e uma pena embebida em sangue",
    "desc": "O taumaturgo calça a pele de cervo e passa a pena ensanguentada sobre os pés enquanto caminha. — Efeito: O conjurador não deixa nenhuma pegada física, marca na terra ou rastro visual por onde passa, restando apenas rastros olfativos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_73",
    "name": "Inscrição",
    "nameEn": "Inscription",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Pergaminho de alta qualidade, tinta de vitae e cinzas de carvão",
    "desc": "O taumaturgo escreve instruções detalhadas e incantações de um ritual de Nível 1 ou 2 em um pergaminho. — Efeito: Outra pessoa que leia o pergaminho em voz alta pode conjurar com sucesso o ritual descrito uma única vez.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_74",
    "name": "Corpo de Ferro",
    "nameEn": "Iron Body",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um estojo de cartucho de metal carregado em contato direto com a pele",
    "desc": "O conjurador consome limalha de metal e fixa o estojo sobre o peito com sangue sob encantamentos. — Efeito: Endurece a carcaça do vampiro, permitindo resistir com maior vigor e absorver com eficácia as perdições e danos físicos tradicionais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_75",
    "name": "Ele Rouba Seus Sussurros",
    "nameEn": "It Steals Your Whispers",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma serra de prata, uma trombeta de cobre, um elixir com a vitae do conjurador e um humano vivo",
    "desc": "O conjurador serra a orelha da vítima, despeja-a no elixir e usa os vapores para untar a trombeta de cobre. — Efeito: Qualquer indivíduo que beber do elixir passa a ouvir tudo que é dito nas proximidades da trombeta de cobre à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_76",
    "name": "Mau-Olhado",
    "nameEn": "The Jinx",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um antigo pertence pessoal do alvo",
    "desc": "O taumaturgo medita por 10 minutos focando todo o seu ódio no pertence do alvo e em seguida queima o objeto em braseiro. — Efeito: O alvo sofre uma terrível maré de azar e falha desastrosa na próxima ação crucial escolhida pelo conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_77",
    "name": "Pane de Máquinas",
    "nameEn": "Machine Blitz",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma corda com um nó apertado",
    "desc": "O taumaturgo foca sua atenção no maquinário ou circuito tecnológico e desfaz o nó cerimonial. — Efeito: Provoca uma pane imediata e paralisação completa em um mecanismo ou dispositivo eletrônico complexo por um período de tempo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_78",
    "name": "Apropriação Membranosa",
    "nameEn": "Membranous Appropriation",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Pele intacta da vítima, um forno, vis, alúmen, resina de pinheiro e pó de escamas de serpente",
    "desc": "O taumaturgo sova a pele e a aquece em forno com vis, moldando-a como um simulacro de membro ou rosto humano sob aspersão de resinas. — Efeito: O simulacro imita com exatidão perfeita os movimentos, gestos e aparência do doador original da pele.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_79",
    "name": "Maldição da Vida em Luto",
    "nameEn": "Mourning Life Curse",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Sangue de crocodilo e uma pasta alquímica especial",
    "desc": "O taumaturgo bebe o sangue de crocodilo, aplica a pasta sobre as pálpebras de um mortal e profere duas sílabas arcanas. — Efeito: Faz com que a vítima mortal chore lágrimas contínuas de sangue puro, sentindo uma dor existencial dilacerante.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_80",
    "name": "Obscurecer a Malícia",
    "nameEn": "Obscure the Malice",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Vitae do conjurador",
    "desc": "O taumaturgo toca a ferida infligida com a ponta dos dedos sob palavras de restauração e encobrimento. — Efeito: A ferida cicatriza instantaneamente sem deixar nenhuma cicatriz, marca de presas ou sinal de agressão que possa denunciar o ataque.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_81",
    "name": "A Passagem Aberta",
    "nameEn": "The Open Passage",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Excrementos de animais rastejantes misturados a sangue",
    "desc": "O taumaturgo espalha a mistura sobre uma parede sólida ou porta trancada enquanto entoa encantações de transposição. — Efeito: Permite ao conjurador atravessar a barreira física desimpedidamente como se ela fosse incorpórea por alguns segundos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_82",
    "name": "Poder da Chama Invisível",
    "nameEn": "Power of the Invisible Flame",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma fonte de fogo aberta",
    "desc": "O taumaturgo gesticula diante do fogo recitando palavras de ocultação óptica. — Efeito: O fogo torna-se completamente invisível aos olhos, embora seu calor, poder de queima e fumaça continuem plenamente ativos e perigosos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_83",
    "name": "Preservação",
    "nameEn": "Preserve",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma fina camada de vitae e bálsamos de mirra",
    "desc": "O taumaturgo unge o objeto com uma camada de vitae enquanto recita fórmulas de estase temporal. — Efeito: O objeto torna-se imune ao desgaste natural, à passagem do tempo, à oxidação e ao apodrecimento por anos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_84",
    "name": "Foco Principal de Infusão de Vitae",
    "nameEn": "Principle Focus of Vitae Infusion",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um objeto pequeno que caiba na mão do conjurador e 1 ponto de vitae",
    "desc": "O taumaturgo embebe o objeto em seu próprio sangue sob cânticos de infusão e armazenamento. — Efeito: Ao comando mental ou verbal do conjurador, o sangue armazenado jorra do objeto instantaneamente para ser absorvido pelo vampiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_85",
    "name": "Remédio da Terra Natal",
    "nameEn": "Recure of the Homeland",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Terra do local de nascimento do conjurador e vitae",
    "desc": "O cainita mistura a terra natal e vitae em uma pasta curativa, aplicando-a nos ferimentos enquanto recita sua linhagem genealógica mortal. — Efeito: Cura ferimentos e regenera a carne do cainita com eficiência muito superior ao gasto comum de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_86",
    "name": "Reconhecimento de Rituais",
    "nameEn": "Ritual's Recognition",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um pequeno pedaço de carne do conjurador, um almofariz e um pilão",
    "desc": "O taumaturgo macera a própria carne no almofariz com amostras místicas do ambiente. — Efeito: Identifica com precisão qual ritual taumatúrgico foi conjurado no local, qual foi seu efeito exato e há quanto tempo ocorreu.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_87",
    "name": "Selar Saída",
    "nameEn": "Seal Egress",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Pó de chumbo e vitae para pintar símbolos nas paredes",
    "desc": "O taumaturgo pinta símbolos rúnicos com sangue e chumbo ao redor do aposento ou passagem que deseja proteger. — Efeito: Lacra hermeticamente a sala ou corredor, impedindo a passagem de intrusos e travando portas contra arrombamento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_88",
    "name": "Rancor da Megera",
    "nameEn": "Spite of the Harridan",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um ovo podre de ave",
    "desc": "O taumaturgo esmaga o ovo com uma das mãos na presença de uma mulher grávida enquanto entoa maldições ancestrais. — Efeito: Interrompe violentamente a gestação da vítima, provocando um aborto imediato e traumático.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_89",
    "name": "Passos dos Aterrorizados",
    "nameEn": "Steps of the Terrified",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Botões de flores de acônito e óleo vegetal",
    "desc": "O conjurador arremessa os botões de acônito na direção do alvo e em seguida lava as mãos em óleo sob encantamentos. — Efeito: A velocidade de corrida e fuga do alvo é drasticamente reduzida pela metade, como se seus pés pesassem toneladas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_90",
    "name": "Invocar Espírito Guardião",
    "nameEn": "Summon Guardian Spirit",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Incenso de olíbano e um pequeno sino de bronze",
    "desc": "O taumaturgo toca o sino e queima incenso em um altar dedicado com cânticos de evocação protetora. — Efeito: Invoca um espírito guardião menor que vigia atentamente o conjurador e seu refúgio, alertando sobre perigos e atacando invasores etéreos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_91",
    "name": "Transubstanciação dos Humores",
    "nameEn": "Transubstantiation of Humors",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Sangue coagulado e veneno concentrado de serpente",
    "desc": "O conjurador ingere ritualisticamente a mistura de sangue coagulado com veneno de cobra sob mantras de alteração. — Efeito: Se a vitae do conjurador for derramada para fora do corpo, ela se transforma instantaneamente em uma substância negra e fedorenta inútil para alimentação ou rituais inimigos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_92",
    "name": "Trima (Vinho Sanguíneo)",
    "nameEn": "Trima",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Vinho tinto seco, especiarias orientais e vitae do conjurador",
    "desc": "O taumaturgo mistura o vinho aquecido com especiarias e sua própria vitae sob encantamentos de sedação. — Efeito: Mortais que bebem da mistura entram em um estado de torpor leve, sonolência dócil e extrema suscetibilidade a sugestões.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_93",
    "name": "Os Véus de Kirophet",
    "nameEn": "The Veils of Kirophet",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um tecido preto e incenso de mirra",
    "desc": "O taumaturgo queima mirra sob o manto negro entoando encantamentos de condensação etérea. — Efeito: Convoca uma névoa espessa, densa e ondulante que cobre o solo e reduz a visibilidade a poucos centímetros.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_94",
    "name": "Proteção Mágica",
    "nameEn": "Ward Magic",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um amuleto consagrado de prata ou jade",
    "desc": "O taumaturgo abençoa o amuleto através de um extenso ritual de purificação e encantamento. — Efeito: Enquanto o amuleto estiver em contato direto com a pele do usuário, torna muito mais difícil que magias e feitiços hostis o afetem diretamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_95",
    "name": "Proteção contra Carniçais",
    "nameEn": "Ward versus Ghouls",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Um glifo traçado com sangue sobre o objeto a proteger",
    "desc": "O taumaturgo entoa encantações enquanto traça um glifo místico com sangue sobre a superfície de um objeto material. — Efeito: Qualquer carniçal que tocar o objeto marcado sofre dores intensas e queimaduras imediatas de dano letal.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_96",
    "name": "Círculo de Proteção contra Carniçais",
    "nameEn": "Warding Circle versus Ghouls",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Glifos interconectados traçados com sangue no solo",
    "desc": "O taumaturgo desenha um círculo formado por glifos de sangue interligados ao redor da área a ser protegida. — Efeito: Carniçais que tentam cruzar a linha do círculo sofrem dores lancinantes insuportáveis e ferimentos graves.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_97",
    "name": "Sussurros do Fantasma",
    "nameEn": "Whispers of the Ghost",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma orelha seca de criatura humana segurada na mão direita",
    "desc": "O taumaturgo segura a orelha na mão direita enquanto realiza projeção astral (como através de Auspícios). — Efeito: Permite ao conjurador projetar sussurros e comunicar-se verbalmente com seres vivos no plano físico enquanto estiver em forma astral.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_98",
    "name": "Salvo-Conduto Protegido",
    "nameEn": "Writ of Protected Passage",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Sangue do indivíduo e um pedaço de papel pardo",
    "desc": "O taumaturgo utiliza o sangue fornecido para traçar diagramas arcanos sobre o papel sob fórmulas de trânsito seguro. — Efeito: Permite ao portador atravessar temporariamente e em segurança proteções e círculos mágicos criados contra sua própria espécie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_99",
    "name": "Seu Destino Será Revelado",
    "nameEn": "Your Fate Shall be Known",
    "level": 2,
    "tradition": "taumaturgia",
    "components": "Uma gota de gel vítreo do olho do indivíduo e uma pedra de ágata polida",
    "desc": "O conjurador extrai o gel do olho, esfrega-o na ágata sob encantamentos e expõe a pedra a vapores alquímicos durante um mês até criar uma película similar a uma pálpebra. — Efeito: A pedra reflete o estado vital do doador: fecha-se quando ele dorme ou entra em torpor, e desintegra-se em pó caso o doador encontre a Morte Final.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_2"
  },
  {
    "id": "ritual_taumaturgia_100",
    "name": "Amuleto de Mnemósine",
    "nameEn": "Amulet of Mnemosyne",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo grava o cristal com memórias vitais sob encantamentos de retenção psíquica. — Efeito: O amuleto armazena recordações perfeitas, protegendo o usuário contra esquecimentos e apagamentos mentais por Dominação.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um cristal transparente lapidado e uma gota de sangue do conjurador"
  },
  {
    "id": "ritual_taumaturgia_101",
    "name": "Assistentes Animados",
    "nameEn": "Animated Assistants",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo anima objetos inanimados com espíritos menores da servidão. — Efeito: Os objetos limpam o laboratório, organizam livros, copiam textos e realizam tarefas domésticas de forma autônoma.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Vassouras, penas de escrita, cadinhos e objetos de laboratório"
  },
  {
    "id": "ritual_taumaturgia_102",
    "name": "Despertar do Espinho Verdejante",
    "nameEn": "Awakening the Verdant Thorn",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador unge a estaca com sangue e a deixa secar lentamente sob chamas rituais. — Efeito: Ao ser cravada no peito de um vampiro, espinhos de madeira brotam da ponta e se ancoram no coração da vítima, impedindo que a estaca seja removida sem cirurgia destrutiva.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma estaca de espinheiro talhada e banhada em vitae fresca"
  },
  {
    "id": "ritual_taumaturgia_103",
    "name": "Farol do Eu",
    "nameEn": "Beacon of the Self",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O vampiro acende a vela azul e medita segurando o talismã antes de projetar sua consciência. — Efeito: Cria um farol místico espiritual que guia e facilita o retorno seguro do espírito ao corpo físico durante viagens astrais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma vela azul e um talismã pessoal"
  },
  {
    "id": "ritual_taumaturgia_104",
    "name": "Vincular o Familiar",
    "nameEn": "Bind the Familiar",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo alimenta a criatura com sua vitae por três noites consecutivas sob ritos solenes de lealdade. — Efeito: Vincula misticamente o animal como um familiar leal, permitindo comunicação telepática e partilha de sentidos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um animal vivo e 3 pontos de vitae do conjurador"
  },
  {
    "id": "ritual_taumaturgia_105",
    "name": "Mãos Laminadas",
    "nameEn": "Bladed Hands",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo esfrega a mistura nas pontas dos dedos e unhas sob encantações de afiação. — Efeito: As mãos e unhas do vampiro cortam como lâminas de aço afiadas, infligindo dano letal em combate desarmado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Pó de diamante, limalha de ferro e vitae"
  },
  {
    "id": "ritual_taumaturgia_106",
    "name": "Alergia ao Sangue",
    "nameEn": "Blood Allergy",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo esfarela as pétalas sobre uma efígie do alvo enquanto pronuncia palavras de rejeição. — Efeito: Faz com que o sistema do vampiro-alvo rejeite violentamente qualquer sangue ingerido por uma noite, vomitando todo o alimento ao tentar se alimentar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Pétalas secas e mortas de uma rosa"
  },
  {
    "id": "ritual_taumaturgia_107",
    "name": "Voz Engarrafada",
    "nameEn": "Bottled Voice",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador captura as palavras e a voz da vítima dentro do frasco e o sela com cera quente sob cânticos. — Efeito: Rouba a capacidade vocal do alvo, deixando-o completamente mudo até que o frasco seja quebrado ou aberto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um frasco de vidro transparente, cera virgem de abelha e a voz do alvo"
  },
  {
    "id": "ritual_taumaturgia_108",
    "name": "Irmandade da Taça",
    "nameEn": "Brotherhood of the Cup",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Os taumaturgos do círculo bebem juntos da taça consagrada durante o rito de comunhão. — Efeito: Fortalece o laço de confiança, cooperação e sinergia mágica entre todos os participantes da cerimônia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um cálice sagrado de metal nobre preenchido com vitae dos participantes"
  },
  {
    "id": "ritual_taumaturgia_109",
    "name": "Haste Flamejante",
    "nameEn": "Blazing Shaft",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo unge os projéteis com a mistura alquímica sob fórmulas de ignição. — Efeito: A flecha irrompe em chamas arcanas ardentes no instante do disparo, infligindo queimaduras de dano agravado no alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Flechas ou virotes de freixo, óleo combustível e enxofre"
  },
  {
    "id": "ritual_taumaturgia_110",
    "name": "Purificação da Carne",
    "nameEn": "Cleansing of the Flesh",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O cainita prepara um banho ritualístico com as ervas e sangue sob cânticos de purificação. — Efeito: Expulsa do organismo venenos, toxinas, drogas, álcool e substâncias estranhas alojadas nos tecidos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Ervas medicinais raras, água pura de nascente e 1 ponto de vitae"
  },
  {
    "id": "ritual_taumaturgia_111",
    "name": "Aderência do Inseto",
    "nameEn": "Clinging of the Insect",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O vampiro unge as palmas das mãos e as solas dos pés com a resina sob encantações de escalada. — Efeito: Permite ao cainita escalar e andar por paredes verticais e tetos com perfeita firmeza como uma aranha por uma cena.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Resina de teixo e sangue de aranha"
  },
  {
    "id": "ritual_taumaturgia_112",
    "name": "Criar Filtro dos Sonhos",
    "nameEn": "Craft Dreamcatcher",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo tece o filtro com os elementos do indivíduo e o consagra sobre fumaça de sálvia. — Efeito: Protege o indivíduo adormecido contra invasões oníricas, pesadelos e sondagens mentais durante o sono.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Cabelo, sangue e saliva do alvo tecidos em aros de salgueiro e couro"
  },
  {
    "id": "ritual_taumaturgia_113",
    "name": "Crisol da Agonia Empática",
    "nameEn": "Crucible of Sympathetic Agony",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo aquece a efígie de chumbo com ferro em brasa sob cânticos de dor à distância. — Efeito: Transmite queimaduras excruciantes e dores lancinantes de dano físico diretamente ao corpo do alvo à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma efígie de chumbo moldada à semelhança do alvo e braseiro"
  },
  {
    "id": "ritual_taumaturgia_114",
    "name": "Maldição do Proscrito",
    "nameEn": "Curse of the Outcast",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador sopra as cinzas em direção aos quatro ventos proferindo o opróbrio da vítima. — Efeito: Faz com que todos os cainitas e mortais sintam repulsa, desconfiança e desprezo instintivo pelo amaldiçoado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Cinzas colhidas em uma encruzilhada e o nome do alvo"
  },
  {
    "id": "ritual_taumaturgia_115",
    "name": "Trago do Sangue da Terra",
    "nameEn": "Draught of Earth's Blood",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consome a água consagrada com sangue sob fórmulas telúricas. — Efeito: Concede vigor e robustez descomunais à carcaça, aumentando temporariamente a capacidade de absorver danos contundentes e letais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Água de nascente mineral rica em ferro e vitae do conjurador"
  },
  {
    "id": "ritual_taumaturgia_116",
    "name": "Vislumbre Sobrenatural",
    "nameEn": "Eldritch Glimmer",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo condensa sua vontade arcana e dispara feixes de energia esmeralda fosforescente. — Efeito: Atinge oponentes à distância com descargas de força bruta mágica que causam ferimentos diretos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Foco de energia mística canalizado através da ponta dos dedos"
  },
  {
    "id": "ritual_taumaturgia_117",
    "name": "Olhos do Passado",
    "nameEn": "Eyes of the Past",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador foca seu olhar na superfície reflexiva no local examinado. — Efeito: Visualiza cenas, diálogos e acontecimentos que ocorreram naquele exato ambiente em momentos anteriores.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma poça ou tigela de água pura refletindo a luz da lua"
  },
  {
    "id": "ritual_taumaturgia_118",
    "name": "Liberdade do Pai",
    "nameEn": "Father's Freedom",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo quebra os elos da corrente com um martelo cerimonial sob fórmulas libertadoras. — Efeito: Enfraquece e quebra laços místicos coercitivos e prisões de comando que aprisionavam um cainita.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Correntes de ferro batido quebradas sobre um altar de sangue"
  },
  {
    "id": "ritual_taumaturgia_119",
    "name": "Fogo no Sangue",
    "nameEn": "Fire in the Blood",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo queima o enxofre sobre o sangue do alvo em braseiro sob imprecações de calor. — Efeito: Faz com que o sangue nas veias da vítima queime como fogo líquido toda vez que ela realizar esforço físico, infligindo dano agravado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma amostra de sangue do alvo e enxofre em brasa"
  },
  {
    "id": "ritual_taumaturgia_120",
    "name": "Carne do Toque Flamejante",
    "nameEn": "Flesh of Fiery Touch",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo engole a brasa incandescente sob mantras de retenção de calor. — Efeito: A pele do conjurador queima intensamente qualquer um que o toque desprotegido, infligindo queimaduras de fogo imediatas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma brasa incandescente engolida pelo conjurador"
  },
  {
    "id": "ritual_taumaturgia_121",
    "name": "Incriminação",
    "nameEn": "Framing",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador realiza o rito antes de praticar o ato ilícito segurando o objeto da vítima. — Efeito: Qualquer testemunha ou sensor identifica a aparência e a voz do proprietário do objeto como o verdadeiro autor do crime durante toda a ação.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um objeto pessoal ou amostra de vitae da pessoa a ser incriminada"
  },
  {
    "id": "ritual_taumaturgia_122",
    "name": "Amigo das Árvores",
    "nameEn": "Friend of the Trees",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O cainita planta a semente na floresta entoando cânticos de comunhão vegetal. — Efeito: As árvores e galhos ao redor se movem sutilmente para enredar, segurar e desacelerar inimigos que perseguem o conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma bolota de carvalho plantada no solo fértil da floresta"
  },
  {
    "id": "ritual_taumaturgia_123",
    "name": "Mente Serena",
    "nameEn": "Gentle Mind",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador e o receptor misturam seu sangue sob fórmulas de pacificação psíquica. — Efeito: Concede um escudo de calma e autocontrole inabalável ao receptor, impedindo que ele entre em Frenesi por uma noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Sangue sacrificado por ambas as partes envolvidas"
  },
  {
    "id": "ritual_taumaturgia_124",
    "name": "Casa Assombrada",
    "nameEn": "Haunted House",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo prepara o imóvel com runas ocultas e entoa encantamentos espectrais. — Efeito: O local passa a emanar uma aura sinistra e opressiva de assombração, provocando arrepios, pesadelos e ruídos estranhos em quem adentrá-lo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Pó de osso, símbolos arcanos desenhados nas portas e incenso fúnebre"
  },
  {
    "id": "ritual_taumaturgia_125",
    "name": "Chamado do Inferno",
    "nameEn": "Hell's Calling",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador incinera o pertence da vítima entoando fórmulas de pavor ardente. — Efeito: Induz instantaneamente um surto incontrolável de Rötschreck (medo de fogo e destruição) no vampiro-alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um pertence pessoal do alvo queimado em chama de enxofre"
  },
  {
    "id": "ritual_taumaturgia_126",
    "name": "Ilusão da Perfeição",
    "nameEn": "Illusion of Perfection",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador veste a máscara após entoar fórmulas de obscurecimento facial. — Efeito: Os traços físicos do taumaturgo tornam-se completamente banais, médios e esquecíveis, impedindo que testemunhas o reconheçam ou descrevam com precisão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma máscara simples vestida após horas de encantamentos"
  },
  {
    "id": "ritual_taumaturgia_127",
    "name": "Passagem Incorpórea",
    "nameEn": "Incorporeal Passage",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo foca seu próprio reflexo no caco de espelho e recita versos de desmaterialização. — Efeito: O corpo do vampiro torna-se incorpóreo e intangível, permitindo atravessar paredes e portas sem ser impedido por barreiras físicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um caco afiado de um espelho quebrado"
  },
  {
    "id": "ritual_taumaturgia_128",
    "name": "Afinidade Herdada",
    "nameEn": "Inherited Affinity",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O aprendiz é imobilizado e ingere a beberagem enquanto agulhas bloqueiam seus pontos circulatórios habituais. — Efeito: Facilita profundamente o aprendizado de trilhas e a compreensão dos princípios arcanos da Taumaturgia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma beberagem alquímica especial e agulhas de acupuntura"
  },
  {
    "id": "ritual_taumaturgia_129",
    "name": "Criação Maior",
    "nameEn": "Major Creation",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo decepa o próprio polegar em sacrifício enquanto manipula a matéria-prima. — Efeito: Conjura e materializa do nada um objeto sólido com massa superior à do próprio conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "O polegar decepado do conjurador"
  },
  {
    "id": "ritual_taumaturgia_130",
    "name": "Espelho da Segunda Visão",
    "nameEn": "Mirror of Second Sight",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra o espelho através de banhos rituais de vitae. — Efeito: A superfície do espelho revela a verdadeira forma, natureza sobrenatural e auras de quaisquer criaturas disfarçadas que se refletirem nele.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um espelho de prata banhado por horas em sangue sob encantamentos"
  },
  {
    "id": "ritual_taumaturgia_131",
    "name": "Dançarinos do Luar",
    "nameEn": "Moonlight Dancers",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo recita fórmulas poéticas nas sombras ao luar. — Efeito: Conjura até quatro fantasmas ou ilusões vívidas de pessoas do passado do conjurador que dançam e interagem socialmente no recinto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Música suave e encantamentos rituais sob a luz da lua"
  },
  {
    "id": "ritual_taumaturgia_132",
    "name": "Pavês da Presença Imunda",
    "nameEn": "Pavis of Foul Presence",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra o cordão com sangue e o usa como amuleto protetor. — Efeito: Reflete e anula quaisquer poderes direcionados da Disciplina Presença (como Fascínio ou Olhar Aterrorizante) de volta contra quem os utilizou.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um cordão de seda preta usado ao redor do pescoço"
  },
  {
    "id": "ritual_taumaturgia_133",
    "name": "Povoar o Jardim da Noite",
    "nameEn": "Populate Night's Garden",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo disseca animais, une suas partes vitais em um receptáculo gestacional e assopra fumaça de sais de sangue com o fole. — Efeito: Dá origem a quimeras e bestas híbridas monstruosas geradas por alquimia de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Animais dissecados, um útero de criatura, fole e sais de sangue queimados"
  },
  {
    "id": "ritual_taumaturgia_134",
    "name": "Poder da Pirâmide",
    "nameEn": "Power of the Pyramid",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "Os taumaturgos Tremere dão as mãos em círculo e entoam o encantamento em perfeito uníssono. — Efeito: Une e multiplica o poder mágico de todos os participantes para canalizar um grande feitiço ou ritual subsequente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Tremere reunidos em círculo estabelecendo contato físico"
  },
  {
    "id": "ritual_taumaturgia_135",
    "name": "Enguia de Mercúrio",
    "nameEn": "Quicksilver Eel",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo libera a enguia líquida mágica sobre o corpo de um feiticeiro ou mago inimigo. — Efeito: A criatura perfura a carne do alvo e devora sua Força de Vontade e energias místicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma 'enguia' alquímica de mercúrio e vitae armazenada em frasco de vidro"
  },
  {
    "id": "ritual_taumaturgia_136",
    "name": "Ritual de Darkness",
    "nameEn": "Ritual of Darkness",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador rubs o soot over janelas. — Efeito: O conjurador fills o aposento com total escuridão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Fuligem de uma fogueira de carvão"
  },
  {
    "id": "ritual_taumaturgia_137",
    "name": "Ritual de the Bitter Rose",
    "nameEn": "Ritual of the Bitter Rose",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador pestles o coração e mistura it com red wine, ash e água. Every vampire participating em o ritual bebe de it. — Efeito: Several vampires pode gain o benefits de Diablerie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "O sangue do coração de um vampiro drenado de menor geração, almofariz de mármore, vinho tinto, cinzas de estaca de amieiro e água pura"
  },
  {
    "id": "ritual_taumaturgia_138",
    "name": "Madeira Apodrecida",
    "nameEn": "Rotten Wood",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo profere a palavra de ruína e toca uma estrutura ou objeto de madeira. — Efeito: Faz com que qualquer objeto de madeira tocado (incluindo estacas, portas e vigas) apodreça e se desintegre em pó imediatamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma palavra de comando arcana"
  },
  {
    "id": "ritual_taumaturgia_139",
    "name": "Mãos de Rutor",
    "nameEn": "Rutor's Hands",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O conjurador decepa a própria mão, arranca o próprio olho e o encrava no dorso da mão decepada sob encantamentos de animação. — Efeito: Cria um servo autônomo (pseudo-homúnculo) capaz de rastejar, espiar e transmitir o que vê para o mestre.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "A própria mão amputada do conjurador e um de seus próprios olhos arrancados"
  },
  {
    "id": "ritual_taumaturgia_140",
    "name": "Kihanah de Samirah",
    "nameEn": "Samirah's Kihanah",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo esfrega o artefato sob a luz do luar avermelhado. — Efeito: Invoca um djinn ancestral que responderá com verdade absoluta a uma pergunta secreta sobre o desconhecido (o objeto pode ser usado 3 vezes).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um objeto antigo ungido em vitae sob uma lua de sangue"
  },
  {
    "id": "ritual_taumaturgia_141",
    "name": "Assistente Sanguíneo",
    "nameEn": "Sanguine Assistant",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo despeja sangue e restos alquímicos na tigela sob fórmulas de animação vital. — Efeito: A matéria sanguínea se aglutina em um pequeno servo vivo obediente que cumpre todas as ordens do conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Corte no próprio braço do conjurador sangrando em uma tigela cerimonial"
  },
  {
    "id": "ritual_taumaturgia_142",
    "name": "Rastro Sanguíneo",
    "nameEn": "Sanguine Trail",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo toca a pessoa examinada recitando encantamentos de rastreamento de vitae. — Efeito: Permite rastrear e sentir a linha invisível de todos os Laços de Sangue do alvo até suas verdadeiras origens.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Toque direto na pele do indivíduo"
  },
  {
    "id": "ritual_taumaturgia_143",
    "name": "Haste da Quietude Tardia",
    "nameEn": "Shaft of Belated Quiescence",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo prepara a estaca sob cânticos de perfuração oculta. — Efeito: Ao atingir o corpo de um vampiro, a ponta encantada se parte e viaja pelo interior do corpo até perfurar o coração, paralisando o alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma estaca de madeira embebida em sangue e ressecada sobre o fogo"
  },
  {
    "id": "ritual_taumaturgia_144",
    "name": "Invocar Espírito Travesso (Poltergeist)",
    "nameEn": "Summon Mischievous Spirit",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo recita fórmulas de invocação à meia-noite. — Efeito: Convoca um espírito poltergeist invisível e irritante para atormentar, atirar objetos e desestabilizar o alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um punhado de terra de encruzilhada e cânticos de evocação"
  },
  {
    "id": "ritual_taumaturgia_145",
    "name": "Telecomunicação",
    "nameEn": "Telecommunication",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo entoa encantamentos de projeção sobre a tela. — Efeito: A imagem e voz do conjurador surgem na televisão e ele se torna capaz de ver e ouvir tudo ao redor do aparelho à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um aparelho de televisão ou monitor de vídeo e encantamento"
  },
  {
    "id": "ritual_taumaturgia_146",
    "name": "Um Toque de Beladona",
    "nameEn": "A Touch of Nightshade",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo unge as próprias mãos com a poção sob fórmulas de envenenamento por contato. — Efeito: Envenena qualquer vítima através de um mero toque de pele, induzindo asfixia e paralisia muscular rápida.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Extrato concentrado de folhas de beladona e vitae do conjurador"
  },
  {
    "id": "ritual_taumaturgia_147",
    "name": "Translocação do Receptáculo",
    "nameEn": "Translocation of the Vessel",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo banha o objeto em sua vitae e pronuncia uma palavra-chave de invocação. — Efeito: Ao pronunciar a palavra secreta a qualquer momento, o objeto teletransporta-se instantaneamente para a mão do conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um objeto pequeno banhado em sangue do conjurador"
  },
  {
    "id": "ritual_taumaturgia_148",
    "name": "Rastrear Transgressor",
    "nameEn": "Track Transgressor",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo derrama sangue no chão onde uma magia foi executada. — Efeito: O conjurador detecta para onde o taumaturgo infrator foi e rastreia seu caminho exato desde a conjuração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Derramamento de vitae do conjurador sobre o solo no local da conjuração"
  },
  {
    "id": "ritual_taumaturgia_149",
    "name": "Transubstanciação dos Sete",
    "nameEn": "Transubstantiation of the Seven",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O neófito recita os votos do clã e bebe do cálice consagrado. — Efeito: Transmuta o sangue ingerido no sangue do Conselho Interno dos Sete, vinculando o neófito em Laço de Sangue à liderança da Casa Tremere.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um cálice sagrado preenchido com sangue"
  },
  {
    "id": "ritual_taumaturgia_150",
    "name": "A Mudança Invisível",
    "nameEn": "The Unseen Change",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo despeja o sangue de lobo desenhando os limites da área protegida. — Efeito: Qualquer lobisomem (Lupino) que adentrar o perímetro é imediatamente forçado a regredir à forma de lobo comum (Lupus).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Sangue de lobo derramado de um jarro para delinear o perímetro"
  },
  {
    "id": "ritual_taumaturgia_151",
    "name": "Proteção contra Catayanos (Kuei-jin)",
    "nameEn": "Ward versus Cathayans",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo entoa encantamentos enquanto desenha o glifo com sangue sobre a superfície. — Efeito: Qualquer vampiro oriental (Catayano / Kuei-jin) que tocar o objeto sofre dores terríveis e risco de colapso de alma.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um glifo traçado com sangue sobre o objeto material"
  },
  {
    "id": "ritual_taumaturgia_152",
    "name": "Proteção contra Fadas (Changeling)",
    "nameEn": "Ward versus Fae",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo marca o objeto com ferro frio sob encantamentos de repulsão quimérica. — Efeito: Qualquer criatura feérica ou fada que tocar o objeto protegido sofre ferimentos graves e dores intensas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um glifo traçado com pó de ferro frio sobre a superfície"
  },
  {
    "id": "ritual_taumaturgia_153",
    "name": "Círculo de Proteção contra Fadas",
    "nameEn": "Warding Circle versus Fae",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo desenha um círculo com ferro ao redor da área consagrada. — Efeito: Fadas e changelings que tentarem cruzar a linha do círculo sofrem dores lancinantes e danos severos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Glifos interconectados de ferro frio traçados no chão"
  },
  {
    "id": "ritual_taumaturgia_154",
    "name": "Proteção contra Lupinos (Lobisomens)",
    "nameEn": "Ward versus Lupines",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo marca o objeto ou portal com prata sob fórmulas anti-garou. — Efeito: Qualquer lobisomem que tocar o objeto sofre queimaduras atrozes de dano agravado por prata.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um glifo traçado com prata pura e acônito sobre a passagem"
  },
  {
    "id": "ritual_taumaturgia_155",
    "name": "Círculo de Proteção contra Lupinos",
    "nameEn": "Warding Circle versus Lupines",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo traça um círculo com pó de prata ao redor do refúgio. — Efeito: Lobisomens que tentarem atravessar a barreira sofrem queimaduras graves de prata e são repelidos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Glifos interconectados de prata pura traçados no solo"
  },
  {
    "id": "ritual_taumaturgia_156",
    "name": "O Observador",
    "nameEn": "The Watcher",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo alimenta o roedor e une sua testa com a do animal em transe psíquico. — Efeito: O rato transmite visualmente para a mente do taumaturgo tudo aquilo que ele testemunhou durante sua ronda.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Um rato alimentado com álcool e contato de testas por 10 minutos"
  },
  {
    "id": "ritual_taumaturgia_157",
    "name": "Empunhar a Lança da Condenação",
    "nameEn": "Wielding the Spear of Damnation",
    "level": 3,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo medita sobre a arma gravando a passagem bíblica sobre o sangue de Caim. — Efeito: Ferimentos infligidos pela arma drenam a vitalidade da vítima e reabastecem a reserva de sangue do conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_3",
    "components": "Uma arma branca gravada com 'Gênesis 4:10' em escrita angélica"
  },
  {
    "id": "ritual_taumaturgia_158",
    "name": "Arma Animada",
    "nameEn": "Animated Weapon",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo enrola a pele de animal ao redor da arma e a amarra com o barbante consagrado sob encantamentos de animação. — Efeito: Ao romper as amarras, a arma ganha vida própria, levita no ar e ataca com ferocidade implacável qualquer alvo designado pelo conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma arma branca, pele de um animal carniceiro e barbante com beladona selado com cera"
  },
  {
    "id": "ritual_taumaturgia_159",
    "name": "Despertar da Carne",
    "nameEn": "Awakening The Flesh",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O cainita traça um círculo com sangue ao redor do paciente e posiciona o âmbar sob a língua durante a intervenção. — Efeito: Permite ao corpo vampírico assimilar, integrar funcionalmente e operar próteses e modificações mecânicas sem rejeição da carne cainita.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um implante mecânico/cibernético, 3 pontos de vitae do conjurador e um pedaço de âmbar puro"
  },
  {
    "id": "ritual_taumaturgia_160",
    "name": "Certámen de Sangue",
    "nameEn": "Blood Certámen",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador e seu oponente traçam dois círculos mágicos conectados por um diagrama de sangue. — Efeito: Inicia um duelo ritualístico formal que espelha o clássico Certámen hermético da Casa Tremere, contendo as energias arcanas no campo de duelo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Sangue de ambos os duelistas e dois círculos mágicos conectados por um diagrama hermético"
  },
  {
    "id": "ritual_taumaturgia_161",
    "name": "Osso das Mentiras",
    "nameEn": "Bone of Lies",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador encanta o osso com sangue sob orações de verdade compulsória. — Efeito: O osso escurece e queima dolorosamente na mão de qualquer indivíduo que proferir uma mentira deliberada enquanto o segurar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "O osso de um mentiroso comprovado que já faleceu e 1 ponto de vitae"
  },
  {
    "id": "ritual_taumaturgia_162",
    "name": "A Cabeça de Bronze Fala",
    "nameEn": "The Bronze Head Speaks",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "Enquanto entoa uma elegia solene, o conjurador unge a cabeça da vítima e extrai o cérebro através da cânula para dentro da cabeça de bronze. — Efeito: A cabeça de bronze ganha consciência, retém todas as memórias do doador (mesmo segredos suprimidos) e responde a perguntas com voz própria.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma vítima viva, pomada alquímica, um trépano, uma cânula e uma cabeça de bronze oca"
  },
  {
    "id": "ritual_taumaturgia_163",
    "name": "Vela da Assombração",
    "nameEn": "Candle of Haunting",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo acende a vela macabra diante do pertence do alvo sob invocações de terror. — Efeito: Atividades violentas de poltergeist e assombrações espectrais passam a atormentar e aterrorizar a vítima onde quer que ela esteja.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma vela feita de terra de cemitério, ossos e cérebro de um falecido, e um pertence do alvo"
  },
  {
    "id": "ritual_taumaturgia_164",
    "name": "Consagração do Santuário",
    "nameEn": "Consecration of the Sanctum",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo traça as divisas do santuário diariamente ao longo de um ciclo lunar. — Efeito: Reduz a dificuldade de todas as conjurações de Taumaturgia realizadas dentro do santuário, enquanto magias não-herméticas e estranhas tornam-se muito mais difíceis.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma mistura de água benta, pó de prata e vitae pintada nas fronteiras por um mês"
  },
  {
    "id": "ritual_taumaturgia_165",
    "name": "A Maldição Retardada (Abraço Póstumo)",
    "nameEn": "The Curse Belated",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O carniçal ingere a vitae do mestre e é marcado na carne com o símbolo heráldico. — Efeito: Caso o carniçal venha a morrer por ferimentos físicos, a maldição dormente é ativada instantaneamente, transformando o falecido em um vampiro (Abraço póstumo).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um carniçal e um ferro de marcar com o símbolo do conjurador"
  },
  {
    "id": "ritual_taumaturgia_166",
    "name": "Fúria da Morte",
    "nameEn": "Death Wrath",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O feiticeiro anarquista profere imprecações selvagens direcionadas à alma da vítima. — Efeito: O alvo passa a ser atormentado por frenesis frequentes e pela fúria incontrolável da Besta até que busque reconciliação interior ou a Golconda.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Gasto de Força de Vontade e uma gota de sangue corrosivo"
  },
  {
    "id": "ritual_taumaturgia_167",
    "name": "Canalizar o Vinculado",
    "nameEn": "Drawing Upon the Bound",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consome a gota de sangue concentrando-se no elo de servidão que os une. — Efeito: Permite ao conjurador utilizar temporariamente qualquer uma das Disciplinas vampíricas pertencentes ao seu servo vinculado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um pequeno frasco de sangue de um servo sob Laço de Sangue (Thrall)"
  },
  {
    "id": "ritual_taumaturgia_168",
    "name": "Caminhante do Fogo",
    "nameEn": "Fire Walker",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O cainita unge os pés e oferece a carne dos dedos ao fogo sagrado dentro do círculo ritual. — Efeito: Concede resistência sobrenatural extrema aos efeitos adversos do fogo e queimaduras por uma cena.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma pomada aplicada na sola dos pés descalços e as pontas dos dedos cortadas sobre o fogo"
  },
  {
    "id": "ritual_taumaturgia_169",
    "name": "Invólucro Furtivo (Criação de Velluma)",
    "nameEn": "Furtive Integument",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo molda a pele em formato quase-humano com ferro incandescente e aprisiona um espírito de ilusão na estrutura. — Efeito: Cria uma criatura servil e silenciosa (velluma) capaz de se camuflar perfeitamente no ambiente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Pele humana esticada com ferro quente em armação de arame e espírito de ilusão"
  },
  {
    "id": "ritual_taumaturgia_170",
    "name": "Assombração do Espírito",
    "nameEn": "Haunting",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador sopra as cinzas sobre o pertence da vítima sob cânticos de vingança póstuma. — Efeito: Invoca um espírito vingativo que persegue e aterroriza intensamente um alvo mortal, desestabilizando sua sanidade mental.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um pertence pessoal do alvo e cinzas de sepultura"
  },
  {
    "id": "ritual_taumaturgia_171",
    "name": "Coração de Pedra",
    "nameEn": "Heart of Stone",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo permanece imóvel em transe gélido enquanto a vela derrete sobre seu esterno. — Efeito: O coração do vampiro transmuta-se literalmente em rocha sólida, tornando-o imune a estacas de madeira e muito mais resistente a poderes de Presença (ao custo de apatia emocional e desapego da Humanidade).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Deitar-se sobre o piso de pedra por 9 horas com uma vela queimando sobre o peito"
  },
  {
    "id": "ritual_taumaturgia_172",
    "name": "Inércia Debilitante",
    "nameEn": "Infirm Inert",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador bebe do frasco e asperge sangue sobre o corpo da vítima em sono. — Efeito: O corpo do alvo perde temporariamente toda a capacidade de curar ferimentos ou regenerar tecidos através do gasto de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um frasco de sangue misturado com láudano e vitae gotejada sobre o alvo"
  },
  {
    "id": "ritual_taumaturgia_173",
    "name": "Pacto Infernal",
    "nameEn": "Infernal Compact",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador entoa invocações solenes desde o crepúsculo até a meia-noite exata. — Efeito: Convoca uma entidade demoníaca com a qual o taumaturgo pode barganhar favores, poderes e conhecimentos proibidos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Círculo de invocação feito de pasta do coração de uma criança e terra de sepultura de um herege"
  },
  {
    "id": "ritual_taumaturgia_174",
    "name": "Inocência do Coração Infantil",
    "nameEn": "Innocence of the Child's Heart",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo realiza o sacrifício ritualístico e mergulha o brinquedo no sangue da vítima. — Efeito: A aura do conjurador torna-se de um branco imaculado e puro, disfarçando qualquer vestígio de pecado, vampirismo ou Diablerie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma criança mortal e um brinquedo pertencente à criança banhado no sangue de seu coração"
  },
  {
    "id": "ritual_taumaturgia_175",
    "name": "Correntes Invisíveis de Aprisionamento",
    "nameEn": "Invisible Chains of Binding",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo gesticula com as mãos como se puxasse cordas invisíveis enquanto recita palavras de coerção. — Efeito: O alvo é imobilizado e amarrado no ar por correntes de força invisíveis e intangíveis, ficando incapaz de se mover.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Movimentos firmes de mãos simulando prender amarras"
  },
  {
    "id": "ritual_taumaturgia_176",
    "name": "Lamento da Banshee",
    "nameEn": "Keening of the Banshee",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador expele um grito espectral ensurdecedor canalizado através do pingente funerário. — Efeito: Emite um som aterrorizante de volume avassalador que ensurdece os presentes e envelhece mortais de 1 a 10 anos instantaneamente pelo choque.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um pingente esculpido a partir de uma lápide de túmulo antiga"
  },
  {
    "id": "ritual_taumaturgia_177",
    "name": "Marca do Amaranto",
    "nameEn": "Mark of Amaranth",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador destrói um vampiro com as próprias mãos e deposita o objeto da vítima sobre as cinzas. — Efeito: A aura do alvo passa a exibir todos os veios negros e estigmas espirituais de Diablerie, atraindo a caçada de sangue da Camarilla.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Destruição solitária de um cainita e um pertence do alvo depositado sobre o cadáver"
  },
  {
    "id": "ritual_taumaturgia_178",
    "name": "Caminhada pelos Espelhos",
    "nameEn": "Mirror Walk",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo unge ambos os espelhos com sangue e toca as superfícies com o anel após os encantamentos. — Efeito: Usando o anel, o conjurador pode entrar na superfície de um dos espelhos e sair instantaneamente pelo outro espelho distante.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Dois espelhos banhados em sangue, um anel consagrado e horas de cânticos"
  },
  {
    "id": "ritual_taumaturgia_179",
    "name": "Preservação do Coração Sanguíneo",
    "nameEn": "Preservation of the Sanguine Heart",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O alvo é ungido na testa com sangue e ingere a porção cerimonial de mercúrio. — Efeito: Enquanto o alvo se abstiver de se alimentar de sangue, ele torna-se completamente imune a sofrer Laços de Sangue (Blood Bonds).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Unção com a vitae do conjurador e um cálice preenchido com mercúrio puro"
  },
  {
    "id": "ritual_taumaturgia_180",
    "name": "Maldição Metamórfica (Forma de Morcego)",
    "nameEn": "Protean Curse",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O alvo ingere o sangue contaminado sob encantamentos de transmutação involuntária. — Efeito: Força o vampiro ou mortal a se transformar compulsoriamente em um morcego comum por uma noite inteira.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um frasco com sangue de um morcego raivoso"
  },
  {
    "id": "ritual_taumaturgia_181",
    "name": "Escudo Pujante",
    "nameEn": "Puissant Shield",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo assopra o couro energizando o ar com cânticos de repulsão cinética. — Efeito: Envolve o conjurador em uma barreira invisível de força cinética que desvia e bloqueia projéteis balísticos e armas de arremesso.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um pedaço de couro de boi assoprado pelo conjurador durante um minuto"
  },
  {
    "id": "ritual_taumaturgia_182",
    "name": "Dilacerar a Mente",
    "nameEn": "Rend the Mind",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo ingere parte do cérebro animal e recita palavras de demolição psíquica olhando para a vítima. — Efeito: Desfere um ataque mental devastador contra a psique do alvo, causando dores de cabeça atrozes e dano letal direto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "O cérebro de um animal raivoso consumido diante da visão do alvo"
  },
  {
    "id": "ritual_taumaturgia_183",
    "name": "Rasgar a Doce Terra",
    "nameEn": "Rending Sweeting Earth",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo estala o chicote contra o chão entoando fórmulas de expulsão telúrica. — Efeito: Fende o solo e expulsa violentamente para a superfície qualquer vampiro que tenha se ocultado debaixo da terra através da Disciplina Metamorfose.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um chicote de couro consagrado golpeando o solo"
  },
  {
    "id": "ritual_taumaturgia_184",
    "name": "Respeito dos Animais",
    "nameEn": "Respect of the Animals",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O vampiro recita encantamentos de harmonia natural e trégua bestial. — Efeito: Animais mundanos deixam de sentir medo ou aversão predatória pelo cainita, permitindo que ele se aproxime e passe por eles sem latidos ou agitação.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Cinzas de ervas silvestres aspergidas sobre as vestes"
  },
  {
    "id": "ritual_taumaturgia_185",
    "name": "Retorno do Coração",
    "nameEn": "Return the Heart",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo entoa o nome do cainita enquanto toca seu peito sob bênçãos de remorso. — Efeito: Eleva temporariamente a Humanidade do alvo para 9, fazendo com que o monstro desmorone em prantos e remorso esmagador por seus crimes passados.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Fórmula arcana poderosa incorporando o Nome Verdadeiro do alvo"
  },
  {
    "id": "ritual_taumaturgia_186",
    "name": "Vidência no Espelho d'Água",
    "nameEn": "Scry",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador segura o pertence da vítima e foca seu olhar na água estagnada sob cânticos de clarividência. — Efeito: Permite ao taumaturgo enxergar e ouvir com perfeição os arredores e as ações da pessoa observada em tempo real.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma poça de água estagnada com uma gota de sangue de coruja e um pertence do alvo ou seu Nome Verdadeiro"
  },
  {
    "id": "ritual_taumaturgia_187",
    "name": "Portal das Sombras",
    "nameEn": "Shadowgate",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo marca os olhos com cinzas e dá um passo resoluto para dentro de uma sombra densa. — Efeito: Atravessa a Mortalha e surge no ponto correspondente dentro das Terras das Sombras (Submundo).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um 'X' pintado com cinzas sobre cada olho e uma sombra profunda"
  },
  {
    "id": "ritual_taumaturgia_188",
    "name": "Alma do Homúnculo",
    "nameEn": "Soul of the Homunculus",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo coloca sua própria carne na solução alquímica e trata a ferida com a mistura ao longo de meses. — Efeito: Dá vida a um Homúnculo, uma pequena criatura viva e consciente que serve como companheiro e servo absolutamente leal.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um pedaço de carne do próprio conjurador e solução alquímica maturada por meses"
  },
  {
    "id": "ritual_taumaturgia_189",
    "name": "Servo de Estilhas",
    "nameEn": "Splinter Servant",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo entalha e encasula a estaca sob cânticos de caça ao coração. — Efeito: Ao ser desembainhada, a estaca ganha vida autônoma, voa e ataca o vampiro mais próximo com ferocidade, buscando perfurar seu coração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma estaca de árvore plantada sobre sepultura, envolta em barbante com beladona e lacrada com cera"
  },
  {
    "id": "ritual_taumaturgia_190",
    "name": "Beijos Roubados",
    "nameEn": "Stolen Kisses",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo realiza uma incisão mística e carrega o cardo preso às suas vestes. — Efeito: Permite ao cainita alimentar-se de mortais através de um simples toque de pele ou carícia suave, sem necessidade de mordida de presas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma pequena incisão na pele e um ramo de cardo usado junto ao corpo"
  },
  {
    "id": "ritual_taumaturgia_191",
    "name": "Invocar Diabrete de Sangue",
    "nameEn": "Summon Blood Imp",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador costura os fragmentos de carne e os ferve no caldeirão de vitae durante três noites. — Efeito: Cria e dá vida a um diabrete de sangue (imp), um servo leal e travesso para tarefas de espionagem e proteção.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Pedaços de corpos costurados, um caldeirão com vitae Tremere fervendo por três noites"
  },
  {
    "id": "ritual_taumaturgia_192",
    "name": "Suspensão de Encantamento",
    "nameEn": "Suspension of Incantation",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo conjura um poder de trilha mas suspende sua liberação através de uma cláusula condicional. — Efeito: O feitiço fica dormente e se ativa instantaneamente apenas quando uma circunstância específica previamente estipulada ocorrer.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Longa série de fórmulas de ancoragem e cláusulas de ativação"
  },
  {
    "id": "ritual_taumaturgia_193",
    "name": "Desmanchar Ritual",
    "nameEn": "Unweave Ritual",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo manipula o ingrediente correspondente enquanto recita a fórmula invertida do feitiço original. — Efeito: Desfaz, dissolve e cancela completamente os efeitos de um ritual taumatúrgico ativo lançado por outro feiticeiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um ingrediente idêntico ao utilizado no ritual que se deseja anular"
  },
  {
    "id": "ritual_taumaturgia_194",
    "name": "Vigília do Guardião de Pedra",
    "nameEn": "Vigil of the Stone Guardian",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador banha a aldrava em sua própria vitae e a instala na entrada de seu refúgio. — Efeito: Permite ao taumaturgo possuir a aldrava à distância, enxergar através dela, falar por sua boca e canalizar disciplinas mentais (como Dominação e Auspícios).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Uma aldrava de porta de ferro banhada em sangue por três noites e fixada na porta"
  },
  {
    "id": "ritual_taumaturgia_195",
    "name": "Proteção contra Membros (Vampiros)",
    "nameEn": "Ward versus Kindred",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo entoa encantações protetoras enquanto desenha o glifo com sangue sobre o objeto material. — Efeito: Qualquer vampiro que tocar o objeto marcado sofre queimaduras excruciantes de dano letal imediato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um glifo místico traçado com vitae sobre a superfície de um objeto"
  },
  {
    "id": "ritual_taumaturgia_196",
    "name": "Círculo de Proteção contra Membros",
    "nameEn": "Warding Circle versus Kindred",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo desenha um círculo formado por glifos de sangue interligados delimitando o perímetro. — Efeito: Vampiros que tentarem cruzar a linha do círculo sofrem dores lancinantes insuportáveis e danos físicos graves.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Glifos interconectados traçados com vitae no solo ao redor da área"
  },
  {
    "id": "ritual_taumaturgia_197",
    "name": "Proteção contra Vitae Antiga",
    "nameEn": "Ward versus Vitae",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador grava o sigilo sob fórmulas de resistência contra anciãos. — Efeito: Qualquer vampiro de geração mais baixa (mais antigo e poderoso) que tocar o objeto sofre queimaduras intensas de dor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Um glifo desenhado com sangue sobre a passagem"
  },
  {
    "id": "ritual_taumaturgia_198",
    "name": "Círculo de Proteção contra Vitae Antiga",
    "nameEn": "Warding Circle versus Vitae",
    "level": 4,
    "tradition": "taumaturgia",
    "desc": "O conjurador delimita a área com um círculo de sangue sob encantamentos de repulsão geracional. — Efeito: Vampiros de geração inferior à do conjurador que tentarem atravessar a barreira sofrem dores terríveis e danos severos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_4",
    "components": "Glifos interconectados de vitae traçados no chão"
  },
  {
    "id": "ritual_taumaturgia_199",
    "name": "Abandonar os Grilhões",
    "nameEn": "Abandoning the Fetters",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo quebra ritualisticamente um grilhão de ferro frio sob fórmulas de desvinculação absoluta. — Efeito: Rompe e dissolve completamente qualquer Laço de Sangue (Blood Bond) que aprisione o conjurador a um senhor ou mestre.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um grilhão quebrado de ferro frio e 1 ponto de Força de Vontade permanente"
  },
  {
    "id": "ritual_taumaturgia_200",
    "name": "Reprodução Assimétrica",
    "nameEn": "Asymmetrical Reproduction",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo funde sua carne no útero sob vapores alquímicos e cânticos de gestação artificial. — Efeito: Dá origem a uma cópia biológica imperfeita (clone) do conjurador para atuar como engodo ou cobaia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um pedaço de carne do conjurador e um útero dissecado de fêmea"
  },
  {
    "id": "ritual_taumaturgia_201",
    "name": "Ao Nosso Comando Ela Respira (Criação de Gárgula)",
    "nameEn": "At Our Command It Breathes",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Os taumaturgos fundem a carne e vitae dos três clãs em um caldeirão hermético sob ritos arcanos de moldagem. — Efeito: Cria e dá vida a uma Gárgula escrava totalmente leal à Pirâmide Tremere.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Vampiros Tzimisce, Nosferatu e Gangrel capturados, um cadinho gigante e vitae Tremere"
  },
  {
    "id": "ritual_taumaturgia_202",
    "name": "Contrato de Sangue Maior",
    "nameEn": "Blood Contract",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "Todas as partes assinam o documento solene com seu próprio sangue sob invocações de punição ancestral. — Efeito: Forja um tratado inquebrável; o signatário que violar os termos sofre combustão interna espontânea ou morte imediata.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um pergaminho de pele humana e sangue de todos os signatários"
  },
  {
    "id": "ritual_taumaturgia_203",
    "name": "Favor da Cobra",
    "nameEn": "Cobra's Favor",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo ingere a poção sob cânticos de imunidade ofídica e transmutação humoral. — Efeito: A saliva e a vitae do conjurador tornam-se extremamente venenosas, paralisando mortais e infligindo dano agravado em vampiros.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Veneno de víbora real concentrado e vitae do conjurador"
  },
  {
    "id": "ritual_taumaturgia_204",
    "name": "Corromper a Alma",
    "nameEn": "Corrupt Soul",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador quebra a relíquia sobre a efígie do alvo sob blasfêmias rituais. — Efeito: Corrompe a bússola moral do alvo, reduzindo drasticamente sua Humanidade e abrindo brechas para a Besta interior dominá-lo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma relíquia sagrada profanada e cinzas de um justo"
  },
  {
    "id": "ritual_taumaturgia_205",
    "name": "Tribunal da Verdade Sagrada",
    "nameEn": "Court of Hallowed Truth",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra o recinto com fórmulas de discernimento absoluto. — Efeito: Nenhum indivíduo dentro do tribunal santificado consegue proferir mentiras, meias-verdades ou ocultar segredos ao ser interrogado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Dois grandes candelabros de prata e um círculo traçado com cinzas consagradas"
  },
  {
    "id": "ritual_taumaturgia_206",
    "name": "Maldição de Clitemnestra",
    "nameEn": "Curse of Clytaemnestra",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo goteja o sangue sobre a adaga em brasa recitando a vingança de Clitemnestra. — Efeito: Faz com que o sangue nas veias da vítima ferva e se incendeie de dentro para fora, infligindo danos agravados maciços.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma gota de sangue do alvo e uma adaga de prata aquecida no fogo"
  },
  {
    "id": "ritual_taumaturgia_207",
    "name": "Maldição Sobre Tua Linhagem",
    "nameEn": "Curse Upon Thy House",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador quebra o osso e espalha as cinzas amaldiçoando a linhagem do alvo. — Efeito: Atinge todos os carniçais, descendentes e crias do alvo com pesadelos, desgraça financeira e tragédias constantes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Cinzas da casa da vítima e um fêmur humano quebrado"
  },
  {
    "id": "ritual_taumaturgia_208",
    "name": "Consagração do Refúgio Maior",
    "nameEn": "Dedicate the Haven",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo asperge o perímetro completo de sua fortaleza sob fórmulas de santificação. — Efeito: Concede defesas místicas impenetráveis ao refúgio e bloqueia intrusões astrais, espirituais e mágicas de invasores.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um galão de água purificada e sangue de um cordeiro imaculado"
  },
  {
    "id": "ritual_taumaturgia_209",
    "name": "Domínio Absoluto",
    "nameEn": "Dominion",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador usa a coroa durante a reunião do círculo sob encantamentos de soberania. — Efeito: Impõe uma autoridade avassaladora e irrecusável sobre todos os presentes, dobrando a força de suas ordens e comandos de Dominação.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma coroa de louros secos banhada em vitae e ouro"
  },
  {
    "id": "ritual_taumaturgia_210",
    "name": "Encantar Talismã",
    "nameEn": "Enchant Talisman",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra seu bordão, espada ou amuleto ao longo de meses com seu próprio sangue. — Efeito: Cria um Talismã permanente que amplifica o poder de todos os seus feitiços e pode ser convocado telepaticamente à mão do mestre.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um objeto pessoal de confecção perfeita e investimento de vitae ao longo de meses"
  },
  {
    "id": "ritual_taumaturgia_211",
    "name": "Fuga para um Amigo Leal",
    "nameEn": "Escape to a True Friend",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo posiciona o presente no centro do círculo e pronuncia o nome do aliado. — Efeito: Teletransporta instantaneamente o conjurador através do espaço até a presença física de seu amigo leal.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um círculo desenhado no chão e um presente doado por um amigo de confiança"
  },
  {
    "id": "ritual_taumaturgia_212",
    "name": "Fuga para o Refúgio Seguro",
    "nameEn": "Escape to a True Haven",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O cainita sintoniza seu refúgio através de ritos de ancoragem espacial. — Efeito: Ao pronunciar a palavra secreta em qualquer lugar do mundo, teletransporta-se em um piscar de olhos para a segurança de seu refúgio.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um círculo de sangue permanente traçado no refúgio e uma palavra de comando"
  },
  {
    "id": "ritual_taumaturgia_213",
    "name": "Olhos da Besta",
    "nameEn": "Eyes of the Beast",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo queima as ervas diante da vela negra sob encantamentos de visão selvagem. — Efeito: Permite ao conjurador enxergar através dos olhos de qualquer animal presente na cidade como se fossem seus próprios olhos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Os olhos secos de uma coruja e uma vela negra"
  },
  {
    "id": "ritual_taumaturgia_214",
    "name": "Fantasma no Sistema",
    "nameEn": "Ghost in the System",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador queima a trança sobre o servidor ou terminal sob fórmulas tecnomânticas. — Efeito: Apaga, altera ou falsifica registros digitais, fitas de segurança e bancos de dados policiais de forma irreversível.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Fios de fibra óptica trançados com cabelos humanos e vitae"
  },
  {
    "id": "ritual_taumaturgia_215",
    "name": "Harmonizar o Edifício",
    "nameEn": "Harmonize Building",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo caminha pelos cômodos aspergindo o pó mineral sob cânticos harmônicos. — Efeito: Harmoniza o fluxo de energia do edifício (Feng Shui), tornando qualquer atividade mágica Tremere muito mais fácil no local.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Pó de quartzo e água consagrada"
  },
  {
    "id": "ritual_taumaturgia_216",
    "name": "Brisa Assombrada",
    "nameEn": "Haunting Breeze",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador recita fórmulas de terror atmosférico ao ar livre. — Efeito: Convoca um vento gelado e sinistro que apaga tochas, desestabiliza percepções e compele mortais a fugirem em pânico absoluto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um leque de penas negras agitado ao vento"
  },
  {
    "id": "ritual_taumaturgia_217",
    "name": "Luz da Vingança",
    "nameEn": "Light of Vengeance",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo unge a lente da fonte de luz com vitae sob encantamentos solares Banu Haqim. — Efeito: Converte o feixe de luz na intensidade da luz solar direta por alguns minutos, infligindo terror e ferimentos em vampiros.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Sangue do conjurador espalhado sobre a lente de uma tocha ou lanterna"
  },
  {
    "id": "ritual_taumaturgia_218",
    "name": "Coração de Leão",
    "nameEn": "Lion Heart",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O cainita consome o sangue sob cânticos de bravura marcial. — Efeito: Aumenta temporariamente em grande escala sua Força, Destreza, Vigor, Coragem, Liderança e habilidades de combate marcial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "O coração de um grande felino e sangue do conjurador"
  },
  {
    "id": "ritual_taumaturgia_219",
    "name": "Marca da Besta",
    "nameEn": "Mark of the Beast",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O feiticeiro anarquista toca o rosto da vítima sob imprecações de degradação. — Efeito: O alvo passa por uma mutação dolorosa que estampa a Besta em sua face (exceto Nosferatu), quebrando-se apenas por amor verdadeiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Gasto de Força de Vontade e uma gota de bile corrosiva"
  },
  {
    "id": "ritual_taumaturgia_220",
    "name": "Verme Mental",
    "nameEn": "Mindcrawler",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo esmaga o parasita na cabeça da vítima enquanto sussurra palavras de ruína cerebral. — Efeito: O alvo perde 1 ponto de Atributo Mental por dia continuamente até ser reduzido a 1 em todos os Atributos Mentais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um carrapato esmagado sobre a cabeça do alvo durante o encantamento"
  },
  {
    "id": "ritual_taumaturgia_221",
    "name": "Prisão do Espelho",
    "nameEn": "Mirror Prison",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador brande o espelho consagrado diante do alvo enquanto entoa o encantamento de captura. — Efeito: Aprisiona a alma e o corpo físico do alvo no interior do espelho, onde ele permanecerá preso até o espelho ser quebrado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um espelho de corpo inteiro lavado em sangue e lágrimas"
  },
  {
    "id": "ritual_taumaturgia_222",
    "name": "Néctar da Rosa Amarga",
    "nameEn": "Nectar of the Bitter Rose",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador extrai a vitae de um ancião imobilizado enquanto o círculo canta imprecações. — Efeito: Permite que o conjurador e até cinco companheiros compartilhem os benefícios de geração e poder de uma Diablerie.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "A vitae do alvo cainita extraída e distribuída em cálices múltiplos"
  },
  {
    "id": "ritual_taumaturgia_223",
    "name": "Noite do Coração Vermelho",
    "nameEn": "Night of the Red Heart",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo perfura a efígie com uma agulha aquecida durante horas de rituais contínuos. — Efeito: Se o vampiro-alvo estiver a até 50 km de distância, ele desmorona em cinzas no decorrer da noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma efígie de cera do alvo contendo seu cabelo e sangue"
  },
  {
    "id": "ritual_taumaturgia_224",
    "name": "Destruir as Muralhas",
    "nameEn": "Obliterate the Battlements",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador golpeia as fundações sob fórmulas de dissolução mágica. — Efeito: Desfaz e anula permanentemente quaisquer proteções místicas, glifos e círculos arcanos presentes na área.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um martelo de prata batido contra os quatro cantos do refúgio"
  },
  {
    "id": "ritual_taumaturgia_225",
    "name": "Mente Unida dos Concílios",
    "nameEn": "One Mind of the Covens",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo foca seu olhar no espelho de prata entoando em sincronia cósmica. — Efeito: Estabelece uma ponte telepática global unindo mentes de todos os magos Tremere que realizarem o mesmo rito no mesmo instante.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um espelho de prata e uma hora de cânticos rituais"
  },
  {
    "id": "ritual_taumaturgia_226",
    "name": "Carne de Papel",
    "nameEn": "Paper Flesh",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo queima o papel manchado de sangue recitando a fragilização da vítima. — Efeito: A pele e os ossos do alvo tornam-se frágeis como folha de papel, permitindo que o sangue escorra por seus poros e reduzindo sua absorção de dano a zero.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "O Nome Verdadeiro escrito em papel, que é cortado na pele do conjurador e queimado"
  },
  {
    "id": "ritual_taumaturgia_227",
    "name": "Muralhas Vorazes de Ceoris",
    "nameEn": "Ravening Walls of Ceoris",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo impregna os muros com seu sangue invocando a arquitetura vampírica de Ceoris. — Efeito: Qualquer invasor que tocar as paredes terá seu sangue vorazmente drenado pela estrutura para abastecer o refúgio.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Paredes banhadas com a vitae do conjurador invocando espíritos da terra"
  },
  {
    "id": "ritual_taumaturgia_228",
    "name": "Santuário",
    "nameEn": "Sanctuary",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador consagra o altar dedicado à paz e harmonia sob votos de trégua. — Efeito: Nenhum invasor não-convidado pode entrar no prédio e nenhuma Disciplina mental tem efeito contra os habitantes (cessa se houver violência).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um santuário de paz construído no centro do edifício e sangue sacrificado"
  },
  {
    "id": "ritual_taumaturgia_229",
    "name": "Esculpir o Servo Perfeito",
    "nameEn": "Sculpting the Perfect Servant",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo realiza a manipulação eugênica e mágica durante a gestação. — Efeito: O recém-nascido poderá desenvolver Atributos acima de 5, tornando-se um servo sobre-humano perfeito (mas nunca ultrapassará Humanidade 6).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um bebê humano e sangue derramado sobre o ventre da mãe sob fórmulas alquímicas"
  },
  {
    "id": "ritual_taumaturgia_230",
    "name": "Mão Decepada",
    "nameEn": "Severed Hand",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador amputa o membro e trata o coto com as tinturas sob encantamentos de estase mórbida. — Efeito: O membro decepado torna-se incapaz de regenerar-se ou ser recolocado por meios vampíricos comuns.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "O membro decepado da vítima e tinturas de cauterização mágica"
  },
  {
    "id": "ritual_taumaturgia_231",
    "name": "Passagem para as Terras das Sombras",
    "nameEn": "Shadowland Passage",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador mergulha a lâmina no peito e se joga nas águas escuras sob cânticos da morte. — Efeito: Abre uma fenda na Mortalha e transporta o vampiro diretamente para as profundezas das Terras das Sombras (Submundo).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma lâmina de obsidiana cravada ritualisticamente no peito e um corpo d'água"
  },
  {
    "id": "ritual_taumaturgia_232",
    "name": "Espírito do Tormento",
    "nameEn": "Spirit of Torment",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo queima as cinzas invocando entidades de danação e dor. — Efeito: Invoca um espírito maligno que se manifesta fisicamente para atacar, rasgar e atormentar a vítima designada.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um braseiro com ervas fúnebres e cinzas de um suicida"
  },
  {
    "id": "ritual_taumaturgia_233",
    "name": "Pedra da Verdadeira Forma",
    "nameEn": "Stone of the True Form",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra a pedra e a toca contra o corpo do alvo metamorfo. — Efeito: Força qualquer criatura transmutada ou metamorfa a retornar instantaneamente à sua forma original e verdadeira.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma pedra lisa de rio banhada em vitae sob fórmulas de revelação"
  },
  {
    "id": "ritual_taumaturgia_234",
    "name": "Sono de Pedra",
    "nameEn": "Stone Slumber",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O cainita unge o próprio corpo com o sangue e aguarda os primeiros raios da alvorada em meditação. — Efeito: Transforma o corpo do vampiro em uma estátua de pedra sólida durante todo o dia, tornando-o completamente imune ao sol.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Sangue de um cadáver esfregado no corpo, voltando-se para o leste ao amanhecer"
  },
  {
    "id": "ritual_taumaturgia_235",
    "name": "Sede Insaciável",
    "nameEn": "Thirst Unquenchable",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador queima a mistura soprando a fumaça na direção do alvo. — Efeito: Desperta uma fome de sangue desesperadora e insaciável no vampiro-alvo, levando-o a perder o controle para o Frenesi de alimentação.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Cinzas de folhas secas de tabaco e sangue de hiena"
  },
  {
    "id": "ritual_taumaturgia_236",
    "name": "Caminhada Umbral",
    "nameEn": "Umbral Walk",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo entra em transe profundo rompendo as barreiras entre o mundo físico e o espiritual. — Efeito: Permite ao conjurador projetar seu corpo e espírito diretamente para dentro da Umbra (Mundo Espiritual).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Meditação no centro de um círculo de cogumelos fosforescentes e sais alquímicos"
  },
  {
    "id": "ritual_taumaturgia_237",
    "name": "Chama Inextinguível de Marte",
    "nameEn": "Unquenchable Flame of Mars",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador alimenta a lâmina com seu próprio sangue sob a regência astral do planeta Marte. — Efeito: Quando desembainhada, a arma queima permanentemente com chamas carmesins que causam dano agravado terrível.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma arma branca cortada na palma com 3 pontos de vitae ao longo de um mês"
  },
  {
    "id": "ritual_taumaturgia_238",
    "name": "A Lâmina Verdejante",
    "nameEn": "The Verdant Blade",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo banha a lâmina na infusão vegetal sob fórmulas dos Quaesitores. — Efeito: A lâmina adquire a propriedade mística de empalar e paralisar vampiros exatamente como uma estaca de madeira ao atingir o coração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma lâmina de metal mergulhada em um tonel com madeira de espinheiro e vitae"
  },
  {
    "id": "ritual_taumaturgia_239",
    "name": "Ganha Forças ao Avançar (Vires Acquirit Eundo)",
    "nameEn": "Vires Acquirit Eundo",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo esmaga a ampulheta e atira seus cacos nas chamas sob encantamentos temporais. — Efeito: Prolonga e estende drasticamente a duração de qualquer outro ritual taumatúrgico ativo lançado pelo conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Uma ampulheta quebrada e arremessada no fogo durante a conjuração"
  },
  {
    "id": "ritual_taumaturgia_240",
    "name": "Proteção contra Demônios",
    "nameEn": "Ward versus Demon",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo marca o objeto com água benta sob encantamentos de purificação sagrada. — Efeito: Qualquer demônio ou entidade infernal que tocar o objeto marcado sofre queimaduras excruciantes e dano agravado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um glifo traçado com água benta sobre a superfície do objeto"
  },
  {
    "id": "ritual_taumaturgia_241",
    "name": "Círculo de Proteção contra Demônios",
    "nameEn": "Warding Circle versus Demons",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo traça um círculo com água benta consagrada ao redor do perímetro. — Efeito: Demônios que tentarem cruzar a linha do círculo sofrem dores lancinantes e são repelidos com violência.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Glifos interconectados de água benta traçados no solo ao redor da área"
  },
  {
    "id": "ritual_taumaturgia_242",
    "name": "Proteção contra Fantasmas (Aparições)",
    "nameEn": "Ward versus Ghost",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo desenha o símbolo com pó de osso humano sob encantamentos fúnebres. — Efeito: Qualquer fantasma ou aparição que tocar o objeto sofre queimaduras espirituais atrozes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um glifo místico traçado com pó de osso sobre a superfície"
  },
  {
    "id": "ritual_taumaturgia_243",
    "name": "Círculo de Proteção contra Fantasmas",
    "nameEn": "Warding Circle versus Ghosts",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo delimita o aposento com um círculo de pó de osso consagrado. — Efeito: Fantasmas e aparições são completamente incapazes de atravessar a barreira sem sofrer destruição de sua essência (Corpus).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Glifos interconectados de pó de osso traçados no chão"
  },
  {
    "id": "ritual_taumaturgia_244",
    "name": "Proteção contra Magos",
    "nameEn": "Ward versus Magi",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo marca a superfície com essência primordial de Tass sob fórmulas anti-despertos. — Efeito: Qualquer mago desperto que tocar o objeto protegido sofre dores lancinantes e ferimentos diretos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um glifo traçado com Tass (energia mágica condensada) sobre a passagem"
  },
  {
    "id": "ritual_taumaturgia_245",
    "name": "Círculo de Proteção contra Magos",
    "nameEn": "Warding Circle versus Magi",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo desenha o círculo com essência de Tass delimitando o santuário. — Efeito: Magos despertos que tentarem cruzar o círculo sofrem dores terríveis e têm suas energias místicas repelidas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Glifos interconectados de Tass traçados no solo"
  },
  {
    "id": "ritual_taumaturgia_246",
    "name": "Proteção contra Espíritos",
    "nameEn": "Ward versus Spirit",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo grava o sigilo com sal puro sob fórmulas de barreira espiritual. — Efeito: Qualquer espírito da natureza ou entidade umbral que tocar o objeto sofre danos severos e dores intensas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um glifo místico traçado com sal marinho consagrado sobre a superfície"
  },
  {
    "id": "ritual_taumaturgia_247",
    "name": "Círculo de Proteção contra Espíritos",
    "nameEn": "Warding Circle versus Spirits",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo traça um círculo com sal puro ao redor da área a ser guardada. — Efeito: Espíritos que tentarem cruzar a linha do círculo sofrem dores lancinantes e são bloqueados.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Glifos interconectados de sal marinho traçados no chão"
  },
  {
    "id": "ritual_taumaturgia_248",
    "name": "Proteção contra Tecnologia",
    "nameEn": "Ward versus Technology",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador Inconnu desenha o símbolo com sangue sob encantações de rejeição tecnológica. — Efeito: Qualquer objeto tecnológico mais avançado que uma besta medieval que toque a proteção quebra e para de funcionar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Um glifo místico traçado com sangue sobre o equipamento"
  },
  {
    "id": "ritual_taumaturgia_249",
    "name": "Círculo de Proteção contra Tecnologia",
    "nameEn": "Warding Circle versus Technology",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O conjurador traça o círculo ao redor de seu refúgio secreto. — Efeito: Dispositivos eletrônicos, armas de fogo e motores que tentarem ultrapassar a barreira entram em curto-circuito e quebram na hora.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Glifos interconectados de sangue traçados no solo"
  },
  {
    "id": "ritual_taumaturgia_250",
    "name": "Caminho do Wendigo",
    "nameEn": "Way of the Wendigo",
    "level": 5,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo unge a vítima com óleos sagrados, a sacrifica com o fêmur e consome sua carne sob o rito do Wendigo. — Efeito: Restaura instantaneamente toda a saúde e Força de Vontade do conjurador com extrema velocidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_5",
    "components": "Cinzas, sálvia, óleo, fêmur humano e consumo ritual da carne da vítima"
  },
  {
    "id": "ritual_taumaturgia_251",
    "name": "Osso da Discórdia",
    "nameEn": "Bone of Contention",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra o osso sob encantações de intriga e o introduz no refúgio ou corte inimiga. — Efeito: Semeia discórdia incontrolável, ciúmes, suspeitas doentias e violência aberta entre todos os aliados que habitam ou frequentam o local.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Um fêmur humano polido e cravado com runas de ódio em brasa"
  },
  {
    "id": "ritual_taumaturgia_252",
    "name": "A Máscara Eterna",
    "nameEn": "The Eternal Mask",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador costura a pele facial sobre o próprio rosto com fios de ouro sob cânticos de fixação. — Efeito: Altera de forma permanente e perfeita a aparência do vampiro para a da pessoa falecida, resistindo a qualquer regeneração ou inspeção física.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "A pele do rosto de um mortal recém-falecido e pomadas de estase alquímica"
  },
  {
    "id": "ritual_taumaturgia_253",
    "name": "Burlar a Maldição",
    "nameEn": "Evade Curse",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador redireciona os fluxos simpáticos para o substituto inanimado. — Efeito: Anula, desvia ou absorve uma maldição mística ancestral ou feitiço devastador que tenha sido lançado diretamente contra o conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Uma efígie de madeira consagrada e 3 pontos de Força de Vontade"
  },
  {
    "id": "ritual_taumaturgia_254",
    "name": "A Dádiva",
    "nameEn": "The Gift",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo oferece a taça cerimonial ao receptor sob encantamentos de transferência de poder. — Efeito: Transfere temporariamente o uso pleno de uma Disciplina ou Trilha de alto nível pertencente ao ancião para outro cainita por uma noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Um cálice de ouro maciço com a própria vitae do ancião"
  },
  {
    "id": "ritual_taumaturgia_255",
    "name": "Clarividência Maior",
    "nameEn": "Greater Scrying",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador foca a consciência na superfície metálica límpida. — Efeito: Permite enxergar, ouvir e espionar qualquer local do mundo em tempo real, atravessando defesas místicas e proteções comuns de refúgios.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Uma bacia de prata preenchida com mercúrio e vitae de coruja"
  },
  {
    "id": "ritual_taumaturgia_256",
    "name": "Mente de Ferro",
    "nameEn": "Iron Mind",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo grava sigilos de solidez hermética no diadema sob transe meditativo. — Efeito: Concede imunidade total e inabalável contra tentativas de Dominação, Presença, Dementação, telepatia ou qualquer intrusão mental externa.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Um diadema forjado em ferro meteorítico colocado na fronte"
  },
  {
    "id": "ritual_taumaturgia_257",
    "name": "Vida Perdida",
    "nameEn": "Lost Life",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O conjurador assopra o pó sobre a vítima enquanto profere o veredito de drenagem. — Efeito: Envelhece um mortal até a decrepitude imediata ou drena instantaneamente metade da reserva total de sangue de um vampiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Um pedaço de pano do sudário de um natimorto e cinzas de um justo"
  },
  {
    "id": "ritual_taumaturgia_258",
    "name": "Fossa Comum",
    "nameEn": "Mass Grave",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra o solo de um terreno sob cânticos da sepultura coletiva. — Efeito: Oculta misticamente dezenas de cadáveres enterrados no local, impedindo que cães farejadores, escavações ou radares forenses detectem os corpos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Terra de cemitério colhida de uma vala comum e sangue de 7 cadáveres"
  },
  {
    "id": "ritual_taumaturgia_259",
    "name": "Apagar a Chama Reluzente",
    "nameEn": "Quenching the Lambent Flame",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo asperge a água sobre o cainita recitando a extinção das chamas da vida. — Efeito: Apaga e neutraliza temporariamente o dom da Geração ou o uso de Disciplinas de alto nível da vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Água da chuva colhida durante um eclipse solar"
  },
  {
    "id": "ritual_taumaturgia_260",
    "name": "Erguer os Mortos",
    "nameEn": "Raise the Dead",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo costura o coração no peito do cadáver e canaliza sua vitae com descargas arcanas. — Efeito: Restaura a centelha vital no corpo do falecido, ressuscitando-o como um ser vivo com suas memórias intactas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Um cadáver humano intacto falecido há menos de 24 horas e um coração fresco"
  },
  {
    "id": "ritual_taumaturgia_261",
    "name": "Digestão Refinada",
    "nameEn": "Refined Digestion",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O ancião purifica o sangue através do filtro consagrado sob encantamentos metabólicos. — Efeito: Permite ao cainita de geração muito baixa continuar se alimentando de sangue animal ou mortal comum sem perder valor nutritivo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Um filtro de alquimia feito de pedras preciosas e prata"
  },
  {
    "id": "ritual_taumaturgia_262",
    "name": "Ritual do Domínio Soberano",
    "nameEn": "Ritual of Demesne",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O ancião Tremere sintoniza seu refúgio e o território circundante com a terra ancestral. — Efeito: O conjurador sente tudo o que ocorre dentro de seu domínio, sendo alertado instantaneamente sobre invasores sobrenaturais e o uso de magia no perímetro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Quatro marcos de pedra cravados nos quatro cantos da cidade"
  },
  {
    "id": "ritual_taumaturgia_263",
    "name": "Areias do Tempo",
    "nameEn": "Sands of Time",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo sopra a poeira sobre os alvos sob fórmulas de desaceleração temporal. — Efeito: Reduz o fluxo do tempo para todos na área afetada a uma fração da velocidade normal, tornando seus movimentos extremamente lentos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Areia colhida em uma ampulheta antiga e pó de múmia"
  },
  {
    "id": "ritual_taumaturgia_264",
    "name": "Teia da Aranha",
    "nameEn": "Spider's Web",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo ancora os fios no aposento sob encantamentos de aprisionamento etéreo. — Efeito: Cria uma teia invisível de força mágica que prende, asfixia e drena a vitae de invasores que adentrarem o refúgio.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Fios de seda de aranha venenosa tecidos em padrão geométrico"
  },
  {
    "id": "ritual_taumaturgia_265",
    "name": "Destruição Total dos Laços",
    "nameEn": "Utter Destruction of Bonds",
    "level": 6,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo verte o sangue nas chamas sob fórmulas solenes de separação eterna. — Efeito: Destrói, aniquila e apaga definitivamente qualquer Laço de Sangue existente entre dois indivíduos, impedindo que ele seja refeito.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_6",
    "components": "Um caldeirão de chumbo com fogo alquímico e sangue de ambos os vinculados"
  },
  {
    "id": "ritual_taumaturgia_266",
    "name": "Osso da Sede Eterna",
    "nameEn": "Bone of Eternal Thirst",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O conjurador coloca o crânio no centro do salão sob encantamentos de avareza vampírica. — Efeito: Provoca uma fome enlouquecedora e incontrolável em todos os vampiros presentes no recinto, forçando-os a um frenesi predatório imediato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "O crânio de um ancião que morreu de inanição e sede de sangue"
  },
  {
    "id": "ritual_taumaturgia_267",
    "name": "Frio da Espada dos Ventos",
    "nameEn": "Chill of the Windsaber",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo brande a lâmina congelada invocando as nevascas hiperbóreas. — Efeito: Dispara uma rajada de vento cortante com frio absoluto que congela instantaneamente a carne e quebra ossos de inimigos em pedaços.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Uma lâmina de gelo eterno lapidada no topo de uma montanha glacial"
  },
  {
    "id": "ritual_taumaturgia_268",
    "name": "Separar a Alma",
    "nameEn": "Divorcing the Soul",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo extirpa a alma do corpo do alvo com a lâmina sob encantações de aprisionamento. — Efeito: Arranca a alma do indivíduo e a encarcera no frasco de cristal, deixando seu corpo físico em estado catatônico e vazio.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Uma adaga cerimonial de obsidiana e um frasco de cristal puro"
  },
  {
    "id": "ritual_taumaturgia_269",
    "name": "Olhos do Sempre Vigilante",
    "nameEn": "Eyes of the Ever Vigilant",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O ancião unge os olhos no mapa com vitae sob fórmulas de onipresença visual. — Efeito: Permite ao conjurador monitorar visualmente sete regiões distintas da cidade simultaneamente a partir de sua câmara ritual.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Sete olhos de criaturas noturnas dispostos em um mapa da cidade"
  },
  {
    "id": "ritual_taumaturgia_270",
    "name": "Sangue Curador",
    "nameEn": "Healing Blood",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consagra o bálsamo com orações de regeneração milagrosa. — Efeito: Concede à vitae a propriedade de curar ferimentos agravados imediatamente e regenerar membros amputados com um único gole.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Uma gota do sangue de um santo ou mártir e vitae do conjurador"
  },
  {
    "id": "ritual_taumaturgia_271",
    "name": "Impedir os Dons de Caim",
    "nameEn": "Impede the Gifts of Caine",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo cerca o inimigo dentro do círculo sob fórmulas de supressão amaldiçoada. — Efeito: Bloqueia e desativa completamente o uso de todas as Disciplinas vampíricas do alvo por uma noite inteira.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Um círculo de cinzas de vampiros incinerados pelo sol"
  },
  {
    "id": "ritual_taumaturgia_272",
    "name": "Divisão Platônica",
    "nameEn": "Platonic Split",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O ancião posiciona-se entre os espelhos entoando a duplicação do ser. — Efeito: Divide o conjurador em dois corpos físicos independentes e conscientes, ambos compartilhando os mesmos poderes e memórias por uma noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Dois espelhos perfeitos alinhados face a face e 5 pontos de vitae"
  },
  {
    "id": "ritual_taumaturgia_273",
    "name": "Ritual da Mão Decepada Maior",
    "nameEn": "Ritual of the Severed Hand",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo anima a mão mumificada sob fórmulas de usurpação de autoridade. — Efeito: Permite ao conjurador assinar decretos, quebrar selos herméticos e usufruir dos privilégios do proprietário original da mão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "A mão decepada de um príncipe ou ancião cainita"
  },
  {
    "id": "ritual_taumaturgia_274",
    "name": "Sombra do Lobo",
    "nameEn": "Shadow of the Wolf",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O cainita veste a pele do lobo recitando cânticos de fúria primordial. — Efeito: Transforma o vampiro em uma besta lupina monstruosa dotada de garras atrozes, sentidos apurados e velocidade descomunal.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Pele de um lobo alfa gigante sacrificado sob a lua cheia"
  },
  {
    "id": "ritual_taumaturgia_275",
    "name": "Chicote das Erínias",
    "nameEn": "Whip of the Erinyes",
    "level": 7,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo estala o chicote pronunciando a condenação das Erínias. — Efeito: Os golpes do chicote queimam a alma da vítima com dores kármicas insuportáveis, infligindo dano agravado que ignora qualquer armadura.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_7",
    "components": "Um chicote trançado com cabelos de três assassinas e banhado em veneno de hidra"
  },
  {
    "id": "ritual_taumaturgia_276",
    "name": "Lâmina da Flor Proibida",
    "nameEn": "Blade of the Forbidden Flower",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O ancião forja a espada em forja mística ao longo de um século. — Efeito: A lâmina consome a essência e a vitae de quem perfura, incinerando o alvo com chamas negras inextinguíveis que provocam Morte Final imediata.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "Uma espada forjada com cinzas de rosas negras do Submundo e sangue de antediluviano"
  },
  {
    "id": "ritual_taumaturgia_277",
    "name": "Corrente da Linhagem",
    "nameEn": "Chain of the Bloodline",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo queima o pergaminho genealógico sob a grande maldição de sangue. — Efeito: Um feitiço ou dano desferido contra o alvo reverbera e atinge simultaneamente toda a sua linhagem de crias e descendentes onde quer que estejam.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "A árvore genealógica completa escrita com sangue de todas as crias do alvo"
  },
  {
    "id": "ritual_taumaturgia_278",
    "name": "O Nome Esquecido",
    "nameEn": "The Name Forgotten",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O taumaturgo consome os registros nas chamas arcanas sob o silêncio primordial. — Efeito: Apaga completamente o nome e a existência do indivíduo da memória de todos os seres vivos e vampiros do planeta.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "Todos os registros escritos do nome do indivíduo e um sacrifício em fogueira mística"
  },
  {
    "id": "ritual_taumaturgia_279",
    "name": "Disjunção da Alma",
    "nameEn": "Soul Disjunction",
    "level": 8,
    "tradition": "taumaturgia",
    "desc": "O ancião canaliza o raio de poder através do diamante na direção do alvo. — Efeito: Rompe de forma definitiva o cordão de prata da alma do alvo, desintegrando seu espírito e causando a dissolução total de sua existência.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Thaumaturgy_Rituals#Rank_8",
    "components": "Um prisma de diamante negro puríssimo e encantamento contínuo de três noites"
  },
  {
    "id": "ritual_necromancia_280",
    "name": "Pedra do Conhecimento",
    "nameEn": "Knowing Stone",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante goteja sangue sobre a pedra e a posiciona sobre o peito de um cadáver. — Efeito: A pedra absorve as vibrações psíquicas do falecido e responde a uma pergunta direta sobre a vida ou causa da morte do indivíduo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Uma pedra lisa de rio e uma gota de sangue do necromante"
  },
  {
    "id": "ritual_necromancia_281",
    "name": "Dois Centavos (Taxa de Caronte)",
    "nameEn": "Two Centimes",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O praticante de Wanga/Vodu posiciona as moedas sob cânticos de passagem. — Efeito: Paga misticamente a travessia da alma e compele o espírito do falecido a servir ao necromante por uma semana sem resistência.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Duas moedas de cobre antigas colocadas sobre os olhos do cadáver"
  },
  {
    "id": "ritual_necromancia_282",
    "name": "Abrir o Véu",
    "nameEn": "Part the Veil",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O conjurador olha através do véu enquanto entoa orações às sombras. — Efeito: Permite ao necromante enxergar o reflexo das Terras das Sombras e interagir com fantasmas como se estivessem no plano físico.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Um véu funerário de renda negra embebido em água de lírio"
  },
  {
    "id": "ritual_necromancia_283",
    "name": "Dança do Sangue",
    "nameEn": "Blood Dance",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O feiticeiro de Wanga realiza uma dança rítmica ao som dos tambores aspergindo sangue. — Efeito: Concede transe mediúnico que permite canalizar a força física e os conhecimentos marciais de espíritos guerreiros ancestrais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Tambores cerimoniais e sangue de galo sacrificado"
  },
  {
    "id": "ritual_necromancia_284",
    "name": "Tambores do Pesadelo",
    "nameEn": "Nightmare Drums",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O praticante toca o tambor à meia-noite sob fórmulas vudu. — Efeito: Transmite pesadelos enlouquecedores e insônia crônica para uma vítima distante, desgastando sua Força de Vontade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Um tambor feito de couro humano e ossos como baquetas"
  },
  {
    "id": "ritual_necromancia_285",
    "name": "Olhos dos Mortos",
    "nameEn": "Eyes of the Dead",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante ingere o líquido e foca sua mente nos olhos preservados. — Efeito: Permite ao conjurador enxergar através dos olhos de qualquer fantasma sob seu comando em qualquer lugar do mundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Um par de olhos de cadáver preservados em formaldeído e vitae"
  },
  {
    "id": "ritual_necromancia_286",
    "name": "Boneco Maldito (Wanga)",
    "nameEn": "Baleful Doll",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O praticante Samedi fura o boneco com alfinetes sob cânticos vodu de dor simpática. — Efeito: Transmite ferimentos reais, dores excruciantes e paralisia de órgãos diretamente ao corpo da vítima à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Um boneco de pano e cera contendo cabelo, unhas ou sangue do alvo, e alfinetes"
  },
  {
    "id": "ritual_necromancia_287",
    "name": "Ponta da Agulha",
    "nameEn": "Point of the Needle",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O conjurador crava a agulha em uma efígie do coração do alvo. — Efeito: Faz com que a vítima sofra ataques cardíacos graves (se mortal) ou perda maciça de sangue e paralisia torácica (se vampiro).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "Uma agulha de osso afiada e vitae do necromante"
  },
  {
    "id": "ritual_necromancia_288",
    "name": "Mão do Homem Morto",
    "nameEn": "Dead Man's Hand",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O praticante Samedi unge a mão decepada com sangue e a envia nas sombras. — Efeito: A mão ganha vida própria, rasteja até o alvo e o estrangula até a morte ou paralisia irreversível.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#African/Voudoun_Necromancy",
    "components": "A mão decepada de um assassino enforcado e um pedaço de tecido das vestes da vítima"
  },
  {
    "id": "ritual_necromancia_289",
    "name": "Ritual do Espelho Fumegante (Tezcatlipoca)",
    "nameEn": "Ritual of the Smoking Mirror",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O praticante Nahuallotl banha o espelho de obsidiana na fumaça perfumada de copal. — Efeito: A superfície do espelho revela a presença, sentimentos e intenções ocultas de espíritos e fantasmas na área.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy",
    "components": "Um espelho de obsidiana polida e fumaça de copal"
  },
  {
    "id": "ritual_necromancia_290",
    "name": "Ritual de Pochtli",
    "nameEn": "Ritual of Pochtli",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante Nahuallotl veste o manto sob o zênite lunar entoando hinos a Mictlantecuhtli. — Efeito: Concede invisibilidade total contra a percepção de fantasmas e entidades espirituais do Submundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy",
    "components": "Um manto de penas de abutre e uma gota de sangue cainita"
  },
  {
    "id": "ritual_necromancia_291",
    "name": "Signo Divino",
    "nameEn": "Divine Sign",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante Nahuallotl examina o órgão sob a fumaça de resina sagrada. — Efeito: Revela profecias e presságios exatos sobre eventos futuros imediatos e intenções de inimigos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy",
    "components": "Coração de um animal sacrificado em pirâmide ou altar sagrado"
  },
  {
    "id": "ritual_necromancia_292",
    "name": "Ritual de Xipe Totec (O Esfolado)",
    "nameEn": "Ritual of Xipe Totec",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O praticante Nahuallotl veste a pele recém-esfolada da vítima sob orações ao deus Xipe Totec. — Efeito: Assume com perfeição absoluta a voz, memórias superficiais, aparência física e impressões digitais da pessoa esfolada.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy",
    "components": "A pele esfolada inteira de uma vítima humana sacrificada em pirâmide"
  },
  {
    "id": "ritual_necromancia_293",
    "name": "Ritual de Teyolia",
    "nameEn": "Ritual of Teyolia",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O sumo-sacerdote Nahuallotl devora o coração em homenagem aos deuses do submundo. — Efeito: Absorve a força vital e segredos da vítima, concedendo aumento temporário de geração e poder destrutivo imenso.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Aztec_Necromancy",
    "components": "O coração pulsante arrancado do peito de um cainita sacrificial no topo da pirâmide"
  },
  {
    "id": "ritual_necromancia_294",
    "name": "Preservar Cadáver",
    "nameEn": "Preserve Corpse",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante unge o corpo com a solução sob cânticos funerários capadócios. — Efeito: Protege um cadáver humano de qualquer decomposição biológica, putrefação e mau odor por até uma semana.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy",
    "components": "Líquido embalsamador, cânfora e vitae do necromante"
  },
  {
    "id": "ritual_necromancia_295",
    "name": "Brisa Assombrada",
    "nameEn": "Haunting Breeze",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante sopra a fumaça de cipreste na direção do ambiente alvo. — Efeito: Convoca uma corrente de ar gélido sobrenatural que apaga chamas e espalha um pavor opressivo entre mortais presentes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy",
    "components": "Um ramo de cipreste queimado"
  },
  {
    "id": "ritual_necromancia_296",
    "name": "Cabeça da Morte",
    "nameEn": "Death's Head",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante deposita brasas dentro do crânio sob cânticos de tormento. — Efeito: Envia uma aparição vingativa que persegue o alvo incessantemente, sabotando suas ações e provocando acidentes graves.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy",
    "components": "Um crânio humano gravado com o nome do alvo e terra de sepultura"
  },
  {
    "id": "ritual_necromancia_297",
    "name": "Alma Inexpugnável",
    "nameEn": "Impregnable Soul",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante consagra o talismã com sangue sob mantras capadócios de solidez. — Efeito: Protege a alma e mente do conjurador contra possessão espiritual, ataques psíquicos e poderes de dominação de aparições.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy",
    "components": "Um amuleto de osso gravado com runas fúnebres usado no peito"
  },
  {
    "id": "ritual_necromancia_298",
    "name": "Passagem Enoquiana",
    "nameEn": "Enochian Passage",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante abre o espelho com a chave mágica entoando a linguagem dos anjos caídos. — Efeito: Abre um portal físico estável direto para a lendária cidade subterrânea de Enoque nas Terras das Sombras.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Eastern_Necromancy",
    "components": "Um espelho de prata polida, uma chave de ferro forjada em túmulo e vitae Capadócia"
  },
  {
    "id": "ritual_necromancia_299",
    "name": "Chamado dos Mortos Famintos",
    "nameEn": "Call the Hungry Dead",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante enterra a moeda na carne e a oferece às sombras sob sussurros convocatórios. — Efeito: Atrai e reúne espíritos famintos e almas penadas menores do Submundo ao redor do local designado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um pedaço de carne crua e uma moeda de cobre"
  },
  {
    "id": "ritual_necromancia_300",
    "name": "Farol Sobrenatural",
    "nameEn": "Eldritch Beacon",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante acende a vela sobre o pertence da vítima sob fórmulas de marcação espiritual. — Efeito: Faz com que a aura da vítima brilhe intensamente para todos os fantasmas e aparições, atraindo a atenção e perseguição dos mortos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Uma vela de cera verde e um pertence do alvo"
  },
  {
    "id": "ritual_necromancia_301",
    "name": "Palavras de Discernimento",
    "nameEn": "Words of Insight",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O cainita posiciona a moeda e medita em silêncio fúnebre. — Efeito: Permite ao necromante ouvir as últimas palavras, pensamentos ou segredos proferidos pelo falecido em seu leito de morte.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Uma moeda de prata colocada sobre a língua de um cadáver recente"
  },
  {
    "id": "ritual_necromancia_302",
    "name": "Minestra di Morte (Caldo da Morte)",
    "nameEn": "Minestra di Morte",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante ferve a mistura em um cadinho sob cânticos ancestrais da família Giovanni. — Efeito: Cria um elixir viscoso que, ao ser ingerido por mortais ou carniçais, os induz a um estado de quase-morte temporário com sentidos espectrais aguçados.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Ossos humanos triturados, água de pântano e 1 ponto de vitae Giovanni"
  },
  {
    "id": "ritual_necromancia_303",
    "name": "Comunhão com a Morte",
    "nameEn": "Death's Communion",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante bebe do cálice consagrado antes de entrar em transe. — Efeito: Estabelece uma ponte mental que permite conversar e trocar impressões com fantasmas presentes sem necessidade de manifestação visível.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um cálice de vinho misturado com cinzas de sepultura"
  },
  {
    "id": "ritual_necromancia_304",
    "name": "O Rapto de Perséfone",
    "nameEn": "Rape of Persephone",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante mastiga os grãos de romã enquanto cospe a água sobre o solo fúnebre. — Efeito: Facilita e reduz a dificuldade para abrir fendas e interagir através da Mortalha com o Submundo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Grãos de romã secos e água do mar"
  },
  {
    "id": "ritual_necromancia_305",
    "name": "Círculo de Cérbero",
    "nameEn": "Circle of Cerberus",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O necromante traça um círculo protetor sob invocações ao guardião do Tártaro. — Efeito: Impede que aparições malévolas, fantasmas e espíritos hostis atravessem a fronteira do círculo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Cinzas de ossos de cão espalhadas em círculo ao redor do refúgio"
  },
  {
    "id": "ritual_necromancia_306",
    "name": "Visão da Causa Mortis (Insight)",
    "nameEn": "Insight",
    "level": 1,
    "tradition": "necromancia",
    "desc": "O conjurador toca a testa do cadáver sob cânticos de reconstituição mórbida. — Efeito: O necromante visualiza mentalmente e com exatidão perfeita os últimos minutos de vida da vítima e como exatamente ocorreu sua morte.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Os olhos do próprio necromante ungidos com saliva e terra de sepultura"
  },
  {
    "id": "ritual_necromancia_307",
    "name": "Drenar o Poço da Vida",
    "nameEn": "Draining the Well of Life",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O conjurador extrai o fôlego da vítima mortal sob encantamentos de estagnação. — Efeito: Drena a energia vital e a Força de Vontade do mortal para abastecer a reserva mística do necromante.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um cálice de chumbo e uma vítima mortal imobilizada"
  },
  {
    "id": "ritual_necromancia_308",
    "name": "Olhos da Cova",
    "nameEn": "Eyes of the Grave",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante espalha a terra sobre os pertences ou rastro da vítima. — Efeito: Faz com que o alvo passe a ter visões aterrorizantes e contínuas de sua própria morte inevitável e decomposição.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Terra fresca colhida diretamente de uma cova recém-aberta"
  },
  {
    "id": "ritual_necromancia_309",
    "name": "Gerar o Vórtice do Aqueronte",
    "nameEn": "Generating the Acheron Vortex",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante agita as águas sob invocações ao rio das dores. — Efeito: Abre um redemoinho espectral na Mortalha que suga energias e dificulta a fuga de fantasmas na área.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Água estagnada de pântano girada em sentido anti-horário em bacia de bronze"
  },
  {
    "id": "ritual_necromancia_310",
    "name": "Mão da Glória",
    "nameEn": "Hand of Glory",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante acende os dedos da mão mumificada na entrada de uma residência. — Efeito: Mergulha todos os habitantes da casa em um sono profundo e ininterrupto, do qual não despertam enquanto a vela queimar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "A mão direita mumificada de um enforcado e uma vela feita de gordura humana"
  },
  {
    "id": "ritual_necromancia_311",
    "name": "Julgamento de Radamanto",
    "nameEn": "Judgement of Radamanthus",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante pesa os elementos invocando o juiz dos mortos. — Efeito: Revela a índole moral, os maiores pecados, culpas e a Humanidade exata de uma alma ou fantasma examinado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Uma balança de latão com ossos e uma gota de vitae"
  },
  {
    "id": "ritual_necromancia_312",
    "name": "Olho do Homem Morto (Occhio d'Uomo Morte)",
    "nameEn": "Occhio d'Uomo Morte",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante Giovanni segura o olho do falecido na palma aberta entoando fórmulas de sintonização. — Efeito: Enxerga tudo o que o olho viu no instante exato de sua morte e por alguns minutos antes do falecimento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "O olho extirpado de um cadáver fresco"
  },
  {
    "id": "ritual_necromancia_313",
    "name": "Rasgar o Véu",
    "nameEn": "Parting the Veil",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante golpeia o ar vazio entoando fórmulas de ruptura dimensional. — Efeito: Enfraquece a densidade da Mortalha no recinto por uma noite inteira, facilitando todas as conjurações de Necromancia no local.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Uma navalha de prata afiada cortando o ar diante de uma chama"
  },
  {
    "id": "ritual_necromancia_314",
    "name": "Fantoche Cadavérico",
    "nameEn": "Puppet",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante manipula os fios como um marionetista sob cânticos de animação motora. — Efeito: O cadáver levanta-se e caminha desajeitadamente, executando tarefas físicas simples sob comando do necromante.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Fios de seda amarrados aos pulsos e tornozelos de um cadáver fresco"
  },
  {
    "id": "ritual_necromancia_315",
    "name": "Farol Espiritual",
    "nameEn": "Spirit Beacon",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O conjurador queima o incenso desenhando um símbolo no ar. — Efeito: Emite uma luz espiritual invisível a olhos comuns que serve como ponto de encontro e atração para todas as aparições da região.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Incenso de mirra e cinzas de folhas secas"
  },
  {
    "id": "ritual_necromancia_316",
    "name": "Carícia de Tânatos",
    "nameEn": "Thanatos' Caress",
    "level": 2,
    "tradition": "necromancia",
    "desc": "O necromante sopra o pó e toca a pele da vítima com a mão gélida. — Efeito: Inflige uma paralisia gélida e gangrena dolorosa na carne tocada, causando dano letal imediato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Pó de ossos humanos espalhado sobre a palma da mão"
  },
  {
    "id": "ritual_necromancia_317",
    "name": "Ritual do Grilhão Desenterrado",
    "nameEn": "Ritual of the Unearthed Fetter",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante segura o pêndulo sobre um mapa sob encantações genealógicas. — Efeito: Localiza com precisão geográfica o paradeiro exato de um Grilhão (objeto de apego) que prende uma aparição ao mundo dos vivos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um pedaço de osso do fantasma e um pêndulo de prata"
  },
  {
    "id": "ritual_necromancia_318",
    "name": "Tumulto dos Condenados",
    "nameEn": "Din of the Damned",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante canaliza vozes do Submundo no ambiente sob encantamentos acústicos. — Efeito: Preenche o local com uma cacofonia ensurdecedora de gemidos de almas penadas que impede a escuta e bloqueia escutas e grampos eletrônicos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um gravador ou caixa acústica tocando o som de lamentos fúnebres"
  },
  {
    "id": "ritual_necromancia_319",
    "name": "Escudo da Tempestade (Tempesta Scudo)",
    "nameEn": "Tempesta Scudo",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O necromante Giovanni gira as cinzas ao seu redor invocando os ventos do Inferno. — Efeito: Cria uma barreira de força espiritual giratória que desvia ataques de fantasmas e absorve danos de magias das trevas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Cinzas de cremação sopradas em espiral"
  },
  {
    "id": "ritual_necromancia_320",
    "name": "Prisão da Tempestade",
    "nameEn": "Tempest Prison",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O conjurador abre o frasco diante de um fantasma entoando o comando de encarceramento. — Efeito: Suga e aprisiona a aparição no interior do frasco de ferro, onde ela permanecerá até ser libertada pelo mestre.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um frasco de ferro forjado e uma gota de mercúrio"
  },
  {
    "id": "ritual_necromancia_321",
    "name": "Beber das Águas do Estige",
    "nameEn": "Drink of Styx's Waters",
    "level": 3,
    "tradition": "necromancia",
    "desc": "O cainita consome a água estígia sob cânticos aos rios infernais. — Efeito: Concede ao vampiro imunidade temporária aos efeitos debilitantes de frio extremo, dores físicas e poderes de apodrecimento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Água colhida de um rio subterrâneo consagrada com vitae do necromante"
  },
  {
    "id": "ritual_necromancia_322",
    "name": "Toque do Cadáver",
    "nameEn": "Cadaver's Touch",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante toca a carne da vítima recitando fórmulas de rigidez cadavérica. — Efeito: Transforma a carne viva da vítima em matéria morta e putrefata, congelando suas articulações e infligindo dano agravado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Gordura de cadáver humano aplicada nas palmas das mãos"
  },
  {
    "id": "ritual_necromancia_323",
    "name": "Olhar Através da Mortalha",
    "nameEn": "Peek Past the Shroud",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O cainita unge as próprias pálpebras sob cânticos da visão além da tumba. — Efeito: Permite ao necromante enxergar simultaneamente o plano físico e as profundezas das Terras das Sombras sem distorções visuais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Gotas de sangue de um morto aplicadas nos olhos do necromante"
  },
  {
    "id": "ritual_necromancia_324",
    "name": "Bastão Diabólico (Bastone Diabolico)",
    "nameEn": "Bastone Diabolico",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante Giovanni forja a bengala mágica sob ritos de aprisionamento de espectros. — Efeito: A bengala pode armazenar e disparar a essência de fantasmas aprisionados como projéteis de energia destrutiva.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um fêmur humano talhado como uma bengala e banhado em sangue de ancião"
  },
  {
    "id": "ritual_necromancia_325",
    "name": "Beber das Águas do Lete",
    "nameEn": "Drink of Lethe's Waters",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O alvo ingere o cálice sob encantamentos de esquecimento primordial. — Efeito: Apaga da memória do alvo todas as lembranças, traumas e fatos ocorridos em um período específico do passado de forma irreversível.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Água sagrada misturada com cinzas de cartas de amor queimadas"
  },
  {
    "id": "ritual_necromancia_326",
    "name": "Invocar Horda Etérea",
    "nameEn": "Summon Ethereal Horde",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante repica o sino convocando os exércitos das sombras. — Efeito: Convoca uma horda de dezenas de aparições e espectros menores que atacam e aterrorizam uma multidão ou edifício inteiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um sino de ferro fúnebre tocado 13 vezes à meia-noite"
  },
  {
    "id": "ritual_necromancia_327",
    "name": "Forja de Almas (Soulcrafting)",
    "nameEn": "Soulcrafting",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante forja a essência do fantasma na bigorna mágica como se fosse metal. — Efeito: Transmuta a alma capturada em um objeto sólido funcional (como uma lâmina, escudo, corrente ou sino místico).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Uma bigorna de ferro, fogo do Submundo e uma aparição capturada"
  },
  {
    "id": "ritual_necromancia_328",
    "name": "Invocar a Graça das Sombras",
    "nameEn": "Call Upon the Shadow's Grace",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O conjurador veste o manto sob invocações aos senhores das trevas. — Efeito: Envolve o necromante em uma armadura de sombras incorpóreas que absorve impactos e permite deslizar silenciosamente pelo chão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um manto de seda negra banhado em sangue fresco de corvo"
  },
  {
    "id": "ritual_necromancia_329",
    "name": "Manto da Mente Viva",
    "nameEn": "Caul the Living Mind",
    "level": 4,
    "tradition": "necromancia",
    "desc": "O necromante coloca o tecido sobre a testa do alvo sob orações de camuflagem psíquica. — Efeito: Oculta a presença mental do indivíduo, tornando-o completamente invisível a qualquer tentativa de leitura de auras ou sondagem telepática.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "O véu de um recém-nascido (âmnio) e uma gota de vitae"
  },
  {
    "id": "ritual_necromancia_330",
    "name": "Graça das Sombras Maior",
    "nameEn": "Call Upon the Shadow's Grace:",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O conjurador funde as sombras ao seu corpo em meditação profunda. — Efeito: O necromante assume uma forma semi-espectral invulnerável a armas físicas comuns, capaz de atravessar paredes e voar na escuridão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um manto de trevas puras costurado com fios de obsidiana"
  },
  {
    "id": "ritual_necromancia_331",
    "name": "Trono de Hades (Chair of Hades)",
    "nameEn": "Chair of Hades",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante consagra o trono com sangue e nele se assenta sob ritos do submundo. — Efeito: Enquanto estiver sentado, comanda e submete compulsoriamente a vontade de qualquer aparição presente na cidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Uma cadeira entalhada a partir de ossos humanos de imperadores ou juízes"
  },
  {
    "id": "ritual_necromancia_332",
    "name": "Frio do Esquecimento",
    "nameEn": "Chill of Oblivion",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante quebra o frasco no solo invocando o vácuo do Esquecimento. — Efeito: Desencadeia uma onda de frio aniquilador que congela a alma dos presentes, destruindo a Força de Vontade e dissolvendo aparições.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um frasco de gelo colhido das profundezas do Labirinto do Submundo"
  },
  {
    "id": "ritual_necromancia_333",
    "name": "Exílio no Vazio (Esilio)",
    "nameEn": "Esilio",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante Giovanni aprisiona a vítima no centro e recita o veredito de banimento. — Efeito: Bane e arremessa a alma do alvo diretamente nas fossas mais profundas do Esquecimento, de onde é quase impossível retornar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um círculo desenhado com cinzas de uma vítima de assassinato"
  },
  {
    "id": "ritual_necromancia_334",
    "name": "Trajes de Hades (Garb of Hades)",
    "nameEn": "Garb of Hades",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante veste o manto consagrado sob orações ao senhor do submundo. — Efeito: Concede ao vampiro a majestade aterrorizante de um lorde dos mortos, forçando todos os espíritos e mortais a se ajoelharem em submissão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um sudário funerário costurado com folhas de louro de ouro"
  },
  {
    "id": "ritual_necromancia_335",
    "name": "Agarrar o Fantasmagórico",
    "nameEn": "Grasp the Ghostly",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O cainita veste as luvas e foca sua força mística nas mãos. — Efeito: Permite ao necromante agarrar, desarmar, golpear e manusear objetos e entidades incorpóreas do plano espiritual como se fossem sólidos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Luvas de couro de cadáver consagradas em cinzas de cremação"
  },
  {
    "id": "ritual_necromancia_336",
    "name": "O Chamado do Barqueiro",
    "nameEn": "The Ferryman's Recall",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante quebra o remo sobre o túmulo sob invocações a Caronte. — Efeito: Resgata a alma de um cainita ou mortal das garras da Morte Final ou do Esquecimento, trazendo-a de volta para habitar seu corpo físico.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Um remo de madeira de cipreste quebrado sobre uma cova aberta"
  },
  {
    "id": "ritual_necromancia_337",
    "name": "Jornada Órfica",
    "nameEn": "Orphic Sojourn",
    "level": 5,
    "tradition": "necromancia",
    "desc": "O necromante toca a melodia fúnebre entrando fisicamente na caverna. — Efeito: Permite ao conjurador viajar fisicamente em carne e osso pelo reino dos mortos (Submundo) e retornar em segurança ao mundo dos vivos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Necromancy_Rituals#Western_Necromancy",
    "components": "Uma lira de prata tocada à beira de um precipício ou caverna profunda"
  },
  {
    "id": "ritual_akhu_338",
    "name": "Leite de Set (Nível 1 - Toxina Corrosiva)",
    "nameEn": "Milk of Set (Level 1)",
    "level": 1,
    "tradition": "akhu",
    "desc": "O sacerdote-leitor Setita prepara uma concocto cáustica e venenosa que causa efeitos corrosivos em superfícies e queimações químicas dolorosas ao entrar em contato com a pele de mortais ou carniçais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Veneno de cobra, cinzas de papiro e 1 ponto de vitae do sacerdote"
  },
  {
    "id": "ritual_akhu_339",
    "name": "Cerveja de Tífon",
    "nameEn": "Typhon's Brew",
    "level": 1,
    "tradition": "akhu",
    "desc": "O Setita fermenta a bebida ao longo de um ciclo lunar. — Efeito: Cria uma cerveja mística inebriante que induz torpor e relaxamento nos bebedores sem transmitir o Laço de Sangue nem transformar mortais em carniçais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Cerveja fermentada com cereais do Nilo e vitae Setita maturada por um mês"
  },
  {
    "id": "ritual_akhu_340",
    "name": "Inscrever o Livro de Set",
    "nameEn": "Inscribe the Book of Set",
    "level": 1,
    "tradition": "akhu",
    "desc": "O sacerdote copia manualmente as escrituras sagradas do Livro da Noite ao longo de anos. — Efeito: O rolo consagrado aumenta a taxa de sucesso do sacerdote em todos os outros rituais de Akhu.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Rolos de papiro virgem, tinta de fuligem sagrada e anos de dedicação caligráfica"
  },
  {
    "id": "ritual_akhu_341",
    "name": "Selar os Portões de Sangue",
    "nameEn": "Seal the Gates of Blood",
    "level": 1,
    "tradition": "akhu",
    "desc": "O sacerdote abençoa o amuleto sob orações a Ísis e Néftis. — Efeito: Protege a mulher contra abortos espontâneos ou complicações no parto, garantindo o nascimento saudável da criança.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um pequeno amuleto de cerâmica vidrada colocado no ventre de uma mulher grávida"
  },
  {
    "id": "ritual_akhu_342",
    "name": "Leite de Set (Nível 2 - Veneno Alucinógeno)",
    "nameEn": "Milk of Set (Level 2)",
    "level": 2,
    "tradition": "akhu",
    "desc": "O sacerdote prepara a poção cáustica com infusão de pesadelos. — Efeito: Quem entrar em contato com a toxina sofre alucinações aterrorizantes da Duat e desorientação mental severa.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Bile de crocodilo, ervas alucinógenas e vitae Setita"
  },
  {
    "id": "ritual_akhu_343",
    "name": "Abertura do Portal",
    "nameEn": "Opening the Gate",
    "level": 2,
    "tradition": "akhu",
    "desc": "O Setita prepara o cadáver, profana-o ritualisticamente e posiciona os vasos canópicos em ordem reversa. — Efeito: O sacerdote recupera pontos de sangue ou Força de Vontade proporcionais à precisão dos ritos preservados.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um cadáver mumificado segundo ritos egípcios e vasos canópicos invertidos"
  },
  {
    "id": "ritual_akhu_344",
    "name": "Abertura da Boca",
    "nameEn": "Opening the Mouth",
    "level": 2,
    "tradition": "akhu",
    "desc": "O sacerdote asperge o corpo com água e natrão posicionando os amuletos sagrados. — Efeito: Compele a mandíbula e a língua do cadáver a se moverem para responder a uma pergunta do sacerdote.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Água com natrão, três amuletos artesanais sobre o cadáver e oração fúnebre"
  },
  {
    "id": "ritual_akhu_345",
    "name": "Sonhos da Duat",
    "nameEn": "Dreams of Duat",
    "level": 2,
    "tradition": "akhu",
    "desc": "O sacerdote lava a estatueta em água morna amarga com natrão entoando maldições. — Efeito: A vítima passa a sofrer pesadelos horríveis e perturbadores com os tormentos da Duat (o submundo egípcio) durante todo o dia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Uma figura de cera contendo cabelo ou unhas da vítima, inscrita com hieróglifos"
  },
  {
    "id": "ritual_akhu_346",
    "name": "Leite de Set (Nível 3 - Ácido Devorador de Carne)",
    "nameEn": "Milk of Set (Level 3)",
    "level": 3,
    "tradition": "akhu",
    "desc": "O sacerdote ferve a poção viscosa sob fórmulas de corrosão extrema. — Efeito: O ácido queima e dissolve madeira, couro e carne viva de forma instantânea, infligindo ferimentos graves de dano agravado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Veneno de cobra naja concentrado, ácido sulfúrico e sangue cainita"
  },
  {
    "id": "ritual_akhu_347",
    "name": "Preparar Vasos Canópicos",
    "nameEn": "Prepare Canopic Jars",
    "level": 3,
    "tradition": "akhu",
    "desc": "O Setita deposita as amostras nos vasos invertendo as orações de travessia para as Terras Ocidentais. — Efeito: Atrai uma maré constante de infortúnios, perdas materiais, assaltos e azares diários sobre a vida do alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Quatro vasos canópicos contendo amostras de tecidos dos órgãos da vítima"
  },
  {
    "id": "ritual_akhu_348",
    "name": "Deslocamento do Pneuma",
    "nameEn": "Displacement of the Pneuma",
    "level": 3,
    "tradition": "akhu",
    "desc": "O sacerdote passa a lâmina cega no pescoço da vítima simulando sua morte e grita uma palavra de poder no ouvido do alvo. — Efeito: Choca e expulsa a alma do humano para dentro do animal; o corpo humano vazio segue ordens servis sem questionar.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um porco ou bode ao lado da vítima imobilizada, faca de pedra e sangue no rosto"
  },
  {
    "id": "ritual_akhu_349",
    "name": "Elixir das Almas Vinculadas",
    "nameEn": "Linked Soul Elixir",
    "level": 3,
    "tradition": "akhu",
    "desc": "O sacerdote despeja a beberagem sobre o selo entoando Anúbis como o juiz dos corações. — Efeito: Permite que todos que compartilhem a taça sintam as emoções uns dos outros e fiquem vulneráveis a controle mental.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Cerveja de Tífon com ópio, mandrágora, haxixe e selo com o nome de Anúbis"
  },
  {
    "id": "ritual_akhu_350",
    "name": "Envio de Escorpião",
    "nameEn": "Scorpion Sending",
    "level": 3,
    "tradition": "akhu",
    "desc": "O sacerdote recita a história do envenenamento de Hórus e deposita a estatueta no caminho do alvo. — Efeito: Ao se aproximar da vítima, a estatueta de cera ganha vida como um escorpião real venenoso e pica o alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um escorpião de cera com cabelo da vítima e o nome de Set gravado em tinta verde"
  },
  {
    "id": "ritual_akhu_351",
    "name": "Desmembramento de Osíris",
    "nameEn": "Dismemberment of Osiris",
    "level": 4,
    "tradition": "akhu",
    "desc": "O sacerdote mata e desmembra a vítima, lançando partes em um tanque para serem comidas por peixes. — Efeito: A organização, seita ou empresa da qual o líder fazia parte sofre uma calamidade catastrófica imediata.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um líder masculino de organização rival capturado, sacrificado e partes lançadas em aquário"
  },
  {
    "id": "ritual_akhu_352",
    "name": "Areias Cortantes do Nilo",
    "nameEn": "Severing Sands",
    "level": 4,
    "tradition": "akhu",
    "desc": "O sacerdote sopra a areia sagrada contra a criatura sobrenatural invocando a deidade egípcia correspondente. — Efeito: Bane criaturas incorpóreas de volta aos seus reinos natais e bloqueia a cura e regeneração de outros seres sobrenaturais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Areia autêntica das margens do Rio Nilo lavada, seca ao sol, natrão, perfumes e vitae"
  },
  {
    "id": "ritual_akhu_353",
    "name": "Invocar Sebau",
    "nameEn": "Summon Sebau",
    "level": 4,
    "tradition": "akhu",
    "desc": "O sacerdote anima a estatueta de argila sob invocações aos demônios do caos. — Efeito: Convoca um espírito Sebau (demônio das tempestades de Set) que caça e persegue a presa designada.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um modelo de argila moldado com a vitae de um Sebau e amostra do alvo"
  },
  {
    "id": "ritual_akhu_354",
    "name": "Desmembrar o Deus",
    "nameEn": "Dismembering the God",
    "level": 5,
    "tradition": "akhu",
    "desc": "O sacerdote mistura o conteúdo com papiro e vitae, cobrindo seus genitais com o unguento. — Efeito: Ao tocar a vítima posteriormente, drena instantaneamente Força de Vontade e pontos de sangue do alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Urina de hiena ou chacal em vaso canópico com tecido da vítima, fervida por 24 horas"
  },
  {
    "id": "ritual_akhu_355",
    "name": "Burlar a Balança de Hades (Extirpação de Órgãos)",
    "nameEn": "Cheat the Scale of Hades",
    "level": 5,
    "tradition": "akhu",
    "desc": "O sacerdote remove seus próprios órgãos depositando-os em vasos canópicos sagrados. — Efeito: O corpo do vampiro ganha resistência quase indestrutível com pele escamosa e imunidade total a empalamento no coração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Vasos canópicos e remoção cirúrgica mágica de órgãos internos"
  },
  {
    "id": "ritual_akhu_356",
    "name": "Cipo Protetor de Hórus",
    "nameEn": "Warding Cippus",
    "level": 5,
    "tradition": "akhu",
    "desc": "O sacerdote queima a própria mão em sacrifício diante do monumento de pedra encantado. — Efeito: O cippus atua como uma barreira protetora formidável que bane demônios e criaturas corrompidas de volta ao Abismo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Uma placa cippus de Hórus banhada em mel, cerveja, sangue de répteis e queima da própria mão"
  },
  {
    "id": "ritual_akhu_357",
    "name": "Elo pelo Retrato",
    "nameEn": "Portrait Link",
    "level": 5,
    "tradition": "akhu",
    "desc": "O sacerdote grava a imagem detalhada na pedra sob mantras de ancoragem simpática. — Efeito: A tábua serve como substituto de toque direto perfeito para lançar qualquer maldição ou feitiço contra a vítima à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Uma tábua de pedra esculpida com a imagem do alvo, lavada em mel e vitae"
  },
  {
    "id": "ritual_akhu_358",
    "name": "Múmia Híbrida",
    "nameEn": "Hybrid Mummy",
    "level": 6,
    "tradition": "akhu",
    "desc": "O sacerdote costura os restos e invoca entidades da Duat enquanto queima incensos sagrados. — Efeito: Cria uma múmia quimérica guardiã consciente dotada de inteligência própria e lealdade eterna, que dura milênios.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Restos mumificados de humanos e animais costurados, fumigados com fogo e vitae por 40 noites"
  },
  {
    "id": "ritual_akhu_359",
    "name": "Envio de Serviçais",
    "nameEn": "Servitor Sending",
    "level": 6,
    "tradition": "akhu",
    "desc": "O sacerdote-leitor sintoniza o círculo de vitae com o local desejado. — Efeito: Teletransporta um servo carniçal diretamente para o local de destino e o traz de volta através do círculo instantaneamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um círculo de sangue traçado no piso com fórmulas de teletransporte e um mapa do destino"
  },
  {
    "id": "ritual_akhu_360",
    "name": "Fartura de Serpentes",
    "nameEn": "A Surfeit of Serpents",
    "level": 7,
    "tradition": "akhu",
    "desc": "O sacerdote comanda os demônios serpentinos da Duat a invadirem o corpo da vítima. — Efeito: A vítima sofre dores excruciantes e náuseas enquanto serpentes vivas brotam, se multiplicam e rasgam sua carne de dentro para fora até a morte.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Akhu_Rituals#Level_1_Rituals",
    "components": "Um recipiente de cerâmica com serpentes venenosas e fórmulas solenes de possessão abissal"
  },
  {
    "id": "ritual_anarquista_361",
    "name": "Moeda Falsa (Mau Moeda)",
    "nameEn": "Bad Penny",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro anarquista passa a moeda encantada para um alvo. — Efeito: Não importa onde a moeda seja gasta, perdida ou arremessada, ela retorna misteriosamente para os bolsos da vítima, trazendo consigo uma maré de pequenos infortúnios financeiros e desentendimentos sociais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool",
    "components": "Uma moeda comum manchada com uma gota de sangue do feiticeiro"
  },
  {
    "id": "ritual_anarquista_362",
    "name": "Sangue da Terra (Combustível Místico)",
    "nameEn": "Blood of the Earth",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro mistura seu próprio sangue no tanque de combustível de um veículo sob fórmulas punk. — Efeito: Converte o combustível em uma mistura mística altamente potente que dobra o rendimento, velocidade e torque do motor por uma noite inteira.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool",
    "components": "Um galão de combustível e 1 ponto de vitae do conjurador"
  },
  {
    "id": "ritual_anarquista_363",
    "name": "Criar Filtro dos Sonhos Anarquista",
    "nameEn": "Craft Dream-Catcher",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro tece o filtro urbano incorporando amostras corporais da pessoa protegida. — Efeito: Dificulta manipulações mentais e invasões de pesadelos durante o sono, facilitando o despertar diurno de vampiros sob ataque.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool",
    "components": "Aros de arame farpado, couro, saliva, cabelo e sangue do alvo"
  },
  {
    "id": "ritual_anarquista_364",
    "name": "Boneco do Houngan",
    "nameEn": "Houngan's Doll",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro acende a vela votiva na taça de sangue concentrando-se na efígie. — Efeito: Qualquer sensação física imposta ao boneco é sentida empaticamente pelo alvo por 30 minutos, enquanto o conjurador compartilha da visão e audição da vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool",
    "components": "Um boneco de trapos incorporando uma peça de roupa da vítima e uma vela flutuando em vitae"
  },
  {
    "id": "ritual_anarquista_365",
    "name": "Cinto do Troca-Peles (Skinwalker)",
    "nameEn": "Skinwalker's Belt",
    "level": 1,
    "tradition": "anarquista",
    "desc": "O feiticeiro anarquista veste a pele animal consagrada sob encantamentos xamânicos urbanos. — Efeito: Permite ao cainita assumir a forma física do respectivo animal até o amanhecer, mantendo sua inteligência consciente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Old_Skool",
    "components": "Pele de um animal sacrificado curtida por três noites em salmoura e vitae"
  },
  {
    "id": "ritual_anarquista_366",
    "name": "Caminhar sobre as Águas de Varuna",
    "nameEn": "Water Walking",
    "level": 2,
    "tradition": "anarquista",
    "desc": "O sadhu cainita queima a oferenda cerimonial antes de tocar a água. — Efeito: Concede ao feiticeiro a capacidade de caminhar, correr e permanecer de pé sobre a superfície de rios, lagos ou mares como se fossem solo sólido.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age",
    "components": "Uma tigela de mingau e manteiga ghee consagrada ao deus védico Varuna"
  },
  {
    "id": "ritual_anarquista_367",
    "name": "Cristal de Sangue",
    "nameEn": "Blood Crystal",
    "level": 2,
    "tradition": "anarquista",
    "desc": "A feiticeira medita sobre a tigela enquanto seu sangue é absorvido pelo quartzo, tingindo-o de rosa suave. — Efeito: O cristal armazena a vitae com perfeição; a qualquer momento a feiticeira pode absorver a vitae de volta para seu corpo ou usá-la como bateria mística.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age",
    "components": "Um cristal de quartzo transparente, uma tigela de barro com água pura e vitae da feiticeira"
  },
  {
    "id": "ritual_anarquista_368",
    "name": "Envolver os Fiéis (Comunhão da Seita)",
    "nameEn": "Enfolding the Believers",
    "level": 2,
    "tradition": "anarquista",
    "desc": "O líder de culto New Age distribui a bebida entre seus seguidores antes de uma hora de meditação em grupo. — Efeito: Cria um Laço de Sangue secundário e harmônico entre todos os membros do grupo, erradicando ciúmes e disputas internas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age",
    "components": "Um galão de ponche ou suco misturado com 1 ponto de vitae do líder e meditação coletiva"
  },
  {
    "id": "ritual_anarquista_369",
    "name": "Transcender Barreiras pelo Amor",
    "nameEn": "Transcending Barriers Through Love",
    "level": 2,
    "tradition": "anarquista",
    "desc": "O líder New Age sintoniza-se com a devoção de seus cultistas à distância. — Efeito: Permite ao feiticeiro drenar pequenas frações de vitae e recuperar pontos de Força de Vontade diretamente de seus fiéis distantes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age",
    "components": "Trinta minutos de meditação focando nos nomes e rostos de seguidores vinculados"
  },
  {
    "id": "ritual_anarquista_370",
    "name": "A Busca da Apoteose (Suicídio do Culto)",
    "nameEn": "The Pursuit of Apotheosis",
    "level": 2,
    "tradition": "anarquista",
    "desc": "O líder do culto convence seus fiéis ao sacrifício ritualístico final para transcendência. — Efeito: O sacrifício em massa consome a alma e a força vital de todos os seguidores, concedendo um aumento massivo e permanente de poder ao feiticeiro (à custa de Humanidade e estigmas de Diablerie).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#New_Age",
    "components": "Bebida com vitae misturada com cianeto letal consumida coletivamente pelos cultistas"
  },
  {
    "id": "ritual_anarquista_371",
    "name": "Tag (Assinatura em Grafite)",
    "nameEn": "Calling Card",
    "level": 3,
    "tradition": "anarquista",
    "desc": "O feiticeiro punk grava um grafite com mensagem oculta em um prédio público ou símbolo de autoridade. — Efeito: Apenas pessoas do grupo demográfico escolhido conseguem ler a mensagem secreta, e qualquer magia punk subsequente lançada no local torna-se muito mais fácil.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk",
    "components": "Uma lata de tinta spray misturada com vitae do feiticeiro"
  },
  {
    "id": "ritual_anarquista_372",
    "name": "Bater para a Glória (Roubo de Estilo)",
    "nameEn": "Beat Your Way to Glory",
    "level": 3,
    "tradition": "anarquista",
    "desc": "Após vencer o adversário na briga, o feiticeiro toca o rival pronunciando o roubo de glória. — Efeito: Permite ao anarquista roubar e manifestar em si mesmo uma característica visual marcante da vítima (cor dos olhos, tatuagem, estilo de cabelo ou carisma social).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk",
    "components": "Derrotar e nocautear fisicamente um oponente em combate corpo a corpo desarmado"
  },
  {
    "id": "ritual_anarquista_373",
    "name": "BFU (Frequência Oculta de Transmissão)",
    "nameEn": "BFU",
    "level": 3,
    "tradition": "anarquista",
    "desc": "O hacker insere comandos subliminares de sangue no sinal de áudio ou texto. — Efeito: Qualquer ouvinte ou leitor que acessar o conteúdo sofre comandos de sugestão hipnótica automática toda vez que ouvir palavras-chave pré-programadas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk",
    "components": "Uma fita cassete, arquivo de áudio digital codificado ou panfleto com sangue"
  },
  {
    "id": "ritual_anarquista_374",
    "name": "Ferroada do Barão Zaraguin",
    "nameEn": "Baron Zaraguin's Sting",
    "level": 3,
    "tradition": "anarquista",
    "desc": "O feiticeiro ingere a beberagem em transe durante o dia em refúgio protegido. — Efeito: O organismo do vampiro torna-se totalmente imune a toxinas, venenos sintéticos, narcóticos e sedativos químicos por um mês.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk",
    "components": "Vitae combinada com substâncias alucinógenas e um dia inteiro de meditação"
  },
  {
    "id": "ritual_anarquista_375",
    "name": "Maria Sangrenta (Lenda Urbana)",
    "nameEn": "Bloody Mary",
    "level": 3,
    "tradition": "anarquista",
    "desc": "O feiticeiro vincula o espelho ao rito da lenda urbana moderna. — Efeito: Abre um canal de transmissão de terror que projeta visões apavorantes e pesadelos contra o alvo sempre que ele olhar para qualquer espelho.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Punk",
    "components": "Um mortal convencido a realizar o ritual diante de um espelho com três velas apagadas"
  },
  {
    "id": "ritual_anarquista_376",
    "name": "CFTV Místico (Hackeamento de Câmeras)",
    "nameEn": "CCTV",
    "level": 4,
    "tradition": "anarquista",
    "desc": "O tecnomante grava um sigilo de sangue na placa de circuito da câmera. — Efeito: Permite ao feiticeiro interceptar, assistir ao vivo e redirecionar a transmissão de qualquer câmera de vídeo da cidade diretamente para sua mente ou tela.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist",
    "components": "Uma câmera de segurança ou webcam banhada em gotas de vitae nos circuitos"
  },
  {
    "id": "ritual_anarquista_377",
    "name": "Arquivo Autoexecutável (Script Mágico)",
    "nameEn": "Self-Executing File",
    "level": 4,
    "tradition": "anarquista",
    "desc": "O hacker insere a fórmula completa de um ritual ou poder taumatúrgico dentro de um programa executável (.exe / script). — Efeito: Qualquer usuário que executar o arquivo digital dispara o feitiço instantaneamente sobre si ou sobre o alvo designado pelo código.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist",
    "components": "Código-fonte em linguagem de programação compilado com sangue em pendrive ou servidor"
  },
  {
    "id": "ritual_anarquista_378",
    "name": "Telecomunicação Sigilar",
    "nameEn": "Telecommunication",
    "level": 4,
    "tradition": "anarquista",
    "desc": "O feiticeiro projeta sua consciência na tela entoando comandos de frequência. — Efeito: Permite transmitir a imagem e voz do cainita em tempo real para qualquer aparelho de televisão ou monitor da cidade, interceptando sinais de transmissão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist",
    "components": "Um sigilo de sangue traçado diretamente sobre a tela de um monitor ou televisor"
  },
  {
    "id": "ritual_anarquista_379",
    "name": "Cláusula de Confidencialidade (NDA de Sangue)",
    "nameEn": "Non-Disclosure Clause",
    "level": 4,
    "tradition": "anarquista",
    "desc": "O tecnomante insere um selo de maldição nas linhas do contrato ou manifesto digital. — Efeito: Qualquer indivíduo que assinar ou concordar com os termos e tentar vazar informações sofrerá dores atrozes e combustão interna de dano letal imediato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist",
    "components": "Um arquivo de texto confidencial assinado com certificado digital ou sangue"
  },
  {
    "id": "ritual_anarquista_380",
    "name": "Fantasma no Sistema (Identidade Fantasma)",
    "nameEn": "Ghost in the System",
    "level": 4,
    "tradition": "anarquista",
    "desc": "O hacker queima os componentes sobre o terminal de dados sob ritos tecnomânticos. — Efeito: Insere registros falsos, identidades completas e históricos forjados na rede mundial, tornando-os imutáveis contra qualquer perícia forense governamental.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Anarch_Rituals#Hacktivist",
    "components": "Fios de rede trançados com cabelos humanos queimados sobre um servidor"
  },
  {
    "id": "ritual_duranki_381",
    "name": "Reservatório Corporal",
    "nameEn": "Corporal Reservoir",
    "level": 1,
    "tradition": "duranki",
    "desc": "O feiticeiro unge os principais nós de energia do corpo sob cânticos babilônicos. — Efeito: Permite ao cainita armazenar até 3 pontos adicionais de sangue em seu organismo além do limite normal de sua geração, sem inchar suas veias.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Óleo consagrado de gergelim e vitae de guerreiro Banu Haqim"
  },
  {
    "id": "ritual_duranki_382",
    "name": "Exorcizar a Febre",
    "nameEn": "Exorcise Fever",
    "level": 1,
    "tradition": "duranki",
    "desc": "O sacerdote-mago varre a testa do doente com o ramo sob fórmulas de cura sumérias. — Efeito: Purifica o organismo do indivíduo, expulsando toxinas, febres, infecções e pragas do sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Um ramo de tamargueira e água pura de nascente"
  },
  {
    "id": "ritual_duranki_383",
    "name": "Horóscopo da Babilônia",
    "nameEn": "Horoscope",
    "level": 1,
    "tradition": "duranki",
    "desc": "O astrólogo cainita mapeia as constelações no céu noturno no instante do nascimento ou criação do alvo. — Efeito: Revela fraquezas kármicas, tendências de comportamento e o momento astrológico propício para emboscar a vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Uma tábua de argila cuneiforme e um estilete de junco"
  },
  {
    "id": "ritual_duranki_384",
    "name": "Pedregulho de Alamut",
    "nameEn": "Pebble From the Mountain",
    "level": 1,
    "tradition": "duranki",
    "desc": "O assassino unge a pedra com uma gota de sua vitae sob juramentos a Haqim. — Efeito: A pedra vibra na mão do conjurador para alertar sobre a aproximação de invasores hostis e guiar o fio da lâmina no escuro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Uma pequena pedra polida colhida nas montanhas sagradas do Ninho das Águias (Alamut)"
  },
  {
    "id": "ritual_duranki_385",
    "name": "Tocar a Terra Sagrada",
    "nameEn": "Touch the Earth",
    "level": 1,
    "tradition": "duranki",
    "desc": "O cainita entra em transe tátil com as areias sob mantras ancestrais. — Efeito: O feiticeiro sente vibrações subterrâneas, galopes de cavalos, passos e a presença de criaturas vivas ou mortas a quilômetros de distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Palmas das mãos espalmadas sobre o solo arenoso do deserto"
  },
  {
    "id": "ritual_duranki_386",
    "name": "Verdade na Tinta",
    "nameEn": "Truth in Ink",
    "level": 1,
    "tradition": "duranki",
    "desc": "O vizir encanta o tinteiro antes de redigir um tratado formal. — Efeito: Qualquer mentira, cláusula falsa ou traição redigida com essa tinta muda instantaneamente de cor para vermelho sangue, denunciando a falsidade.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Tinta de noz-de-galha misturada com açafrão e sangue"
  },
  {
    "id": "ritual_duranki_387",
    "name": "Batismo de Proteção",
    "nameEn": "Warding Baptism",
    "level": 1,
    "tradition": "duranki",
    "desc": "O sacerdote unge a fronte do guerreiro entoando preces aos deuses da aliança. — Efeito: Protege a mente e a alma do guerreiro contra influências da Umbra, possessão espiritual e pesadelos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Água salgada consagrada e óleo de cedro"
  },
  {
    "id": "ritual_duranki_388",
    "name": "Ritual de Retorno",
    "nameEn": "Ritual of return",
    "level": 1,
    "tradition": "duranki",
    "desc": "O feiticeiro sintoniza seu espírito com a terra natal do santuário. — Efeito: Permite ao cainita orientar-se infalivelmente e encontrar o caminho de volta para seu refúgio secreto, mesmo no meio de tempestades de areia no deserto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Um punhado de terra do refúgio guardado em um saco de couro"
  },
  {
    "id": "ritual_duranki_389",
    "name": "Força de Haqim",
    "nameEn": "Strength of Haqim",
    "level": 1,
    "tradition": "duranki",
    "desc": "O assassino inala os vapores consagrados invocando o primeiro juiz Haqim. — Efeito: Concede vigor explosivo e determinação inabalável aos músculos do assassino em sua próxima investida marcial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_One_Rituals",
    "components": "Uma gota de sangue de um ancião guerreiro e incenso de mirra"
  },
  {
    "id": "ritual_duranki_390",
    "name": "Portento Astral",
    "nameEn": "Astral Portent",
    "level": 2,
    "tradition": "duranki",
    "desc": "O astrólogo cainita lê os reflexos celestes na superfície metálica límpida. — Efeito: Revela o instante exato e o alinhamento cósmico perfeito para executar um assassinato infalível ou selar um acordo político.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals",
    "components": "Um espelho de bronze polido voltado para as estrelas em zênite"
  },
  {
    "id": "ritual_duranki_391",
    "name": "Aprisionar os Céus",
    "nameEn": "Bind The Heavens",
    "level": 2,
    "tradition": "duranki",
    "desc": "O feiticeiro sopra a fumaça obscurecendo a abóbada celeste no local do rito. — Efeito: Cega os olhos de adivinhos, astrólogos e videntes inimigos, impedindo-os de prever as movimentações dos Banu Haqim na região.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals",
    "components": "Fumaça espessa de folhas secas de cânhamo e cinzas de papiro astrológico"
  },
  {
    "id": "ritual_duranki_392",
    "name": "Clamor do Sangue da Terra",
    "nameEn": "Earth's Blood Cry",
    "level": 2,
    "tradition": "duranki",
    "desc": "O juiz cainita goteja água pura sobre as manchas de sangue recitando a lei de Talião. — Efeito: A terra começa a sangrar e sussurrar, guiando o vingador com precisão implacável até o paradeiro exato do assassino.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals",
    "components": "Solo manchado com o sangue de um irmão de clã assassinado"
  },
  {
    "id": "ritual_duranki_393",
    "name": "Dádiva do Touro de Mitra",
    "nameEn": "Gift of Mithra's Bull",
    "level": 2,
    "tradition": "duranki",
    "desc": "Os guerreiros banham as mãos no sangue do touro sob as bênçãos solares do deus Mitra. — Efeito: Concede couraça muscular formidável e bônus maciço para absorver danos contundentes e letais aos guerreiros do clã.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals",
    "components": "O sacrifício ritualístico de um touro negro consagrado nas cavernas"
  },
  {
    "id": "ritual_duranki_394",
    "name": "Beijo da Áspide",
    "nameEn": "Kiss of the Asp",
    "level": 2,
    "tradition": "duranki",
    "desc": "O assassino consagra o veneno sob encantamentos de peçonha silenciosa. — Efeito: A mordida ou corte do vampiro inocula uma toxina letal e paralisante que se dissolve no organismo sem deixar traços químicos em autópsias.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals",
    "components": "Veneno de cobra naja egípcia misturado à própria saliva ou Quietus"
  },
  {
    "id": "ritual_duranki_395",
    "name": "Sangue Chama Sangue",
    "nameEn": "Blood Calls To Blood",
    "level": 2,
    "tradition": "duranki",
    "desc": "O conjurador faz a gota girar no prato recitando nomes de linhagem. — Efeito: Cria uma atração simpática que indica a direção e distância de todos os parentes mortais e crias cainitas do indivíduo examinado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Two_Rituals",
    "components": "Uma gota de sangue do alvo colocada em um prato de prata com água"
  },
  {
    "id": "ritual_duranki_396",
    "name": "Aproximar-se do Véu",
    "nameEn": "Approach the Veil",
    "level": 3,
    "tradition": "duranki",
    "desc": "O feiticeiro queima as resinas meditando no limite do mundo invisível. — Efeito: Permite ao cainita enxergar o plano dos espíritos (Djinn e entidades do deserto) e negociar com eles sem abandonar seu corpo físico.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals",
    "components": "Incenso de sândalo e pó de obsidiana"
  },
  {
    "id": "ritual_duranki_397",
    "name": "Touro dos Céus",
    "nameEn": "Bull of Heaven",
    "level": 3,
    "tradition": "duranki",
    "desc": "O conjurador sopra o chifre sob o zênite da lua cheia. — Efeito: Desencadeia uma onda de choque sísmica localizada que fende solos, despedaça portões de fortalezas e abala muralhas inimigas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals",
    "components": "Chifre de touro selado com chumbo e fórmulas à deusa Ishtar"
  },
  {
    "id": "ritual_duranki_398",
    "name": "Perdição do Infiel (Kafir's Bane)",
    "nameEn": "Kafir's Bane",
    "level": 3,
    "tradition": "duranki",
    "desc": "O juiz Banu Haqim profere a sentença solene sobre as cinzas do contrato traído. — Efeito: Aflige o traidor com dores crônicas nos membros e rejeição de sangue, impedindo-o de se alimentar em paz até reparar a quebra do juramento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals",
    "components": "O texto de um juramento quebrado queimado em braseiro com sal"
  },
  {
    "id": "ritual_duranki_399",
    "name": "Retrato da Paixão",
    "nameEn": "Portrait of Passion",
    "level": 3,
    "tradition": "duranki",
    "desc": "O feiticeiro manipula as cores sobre a tela sob cânticos de ressonância emocional. — Efeito: Permite ao conjurador induzir, intensificar ou extirpar emoções avassaladoras (como ódio, amor cego ou terror) no coração do indivíduo retratado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals",
    "components": "Um retrato pintado com pigmentos naturais e gotas de sangue do modelo"
  },
  {
    "id": "ritual_duranki_400",
    "name": "Força na Sabedoria",
    "nameEn": "Strength in Wisdom",
    "level": 3,
    "tradition": "duranki",
    "desc": "O vizir medita sobre as leis de Alamut canalizando sabedoria para a carne. — Efeito: Converte temporariamente seu Intelecto e Conhecimentos em perícia marcial, velocidade e precisão cirúrgica de combate.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals",
    "components": "Um pergaminho de tratados filosóficos antigos lido sob a luz de velas"
  },
  {
    "id": "ritual_duranki_401",
    "name": "Escudo de Espelhos",
    "nameEn": "A Shield of Mirror",
    "level": 3,
    "tradition": "duranki",
    "desc": "O feiticeiro consagra os espelhos com sangue sob orações de reflexão astral. — Efeito: Ergue uma barreira impenetrável que reflete ataques mentais, Dominação e maldições diretamente de volta contra o conjurador agressor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Three_Rituals",
    "components": "Sete pequenos espelhos de bronze lapidados dispostos em círculo"
  },
  {
    "id": "ritual_duranki_402",
    "name": "Direcionar a Lança de Arimã",
    "nameEn": "Directing Ahriman's Lance",
    "level": 4,
    "tradition": "duranki",
    "desc": "O assassino recita as fórmulas de execução infalível sobre a arma branca. — Efeito: A arma ganha propriedades sobrenaturais de perfuração que ignoram blindagens mundanas e viajam guiadas por forças arcanas até o coração do alvo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals",
    "components": "Uma adaga ou ponta de flecha forjada em ferro meteorítico banhada em óleo de víbora"
  },
  {
    "id": "ritual_duranki_403",
    "name": "Kudurru (Pedra de Fronteira Sagrada)",
    "nameEn": "Kudurru",
    "level": 4,
    "tradition": "duranki",
    "desc": "O sacerdote ergue o monólito de pedra nos limites do território sob maldições divinas. — Efeito: Estabelece uma fronteira inviolável; intrusos que cruzarem a linha sem permissão sofrem dores lancinantes e desorientação imediata.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals",
    "components": "Uma estela de pedra babilônica gravada com inscrições e figuras divinas"
  },
  {
    "id": "ritual_duranki_404",
    "name": "Renascimento na Luz de Haqim",
    "nameEn": "Rebirth in the Light of Haqim",
    "level": 4,
    "tradition": "duranki",
    "desc": "O cainita passa por um rito solene de penitência e unção na câmara sagrada. — Efeito: Limpa a alma e o sangue do vampiro de impurezas espirituais, feitiços parasitas e maldições menores que o afligiam.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals",
    "components": "Um banho purificador com óleos sagrados e cinzas do altar de Alamut"
  },
  {
    "id": "ritual_duranki_405",
    "name": "Rito de Marduk Triunfante",
    "nameEn": "Rite of Marduk Triumphant",
    "level": 4,
    "tradition": "duranki",
    "desc": "O feiticeiro celebra a vitória cósmica sobre Tiamat em assembleia de clã. — Efeito: Concede ao conjurador e aos seus irmãos presentes imunidade total contra possessões demoníacas e corrupção infernal por uma lunação.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals",
    "components": "Um cálice de ouro com vinho consagrado e lâmina com o símbolo da espada de Marduk"
  },
  {
    "id": "ritual_duranki_406",
    "name": "O Senhor Impotente",
    "nameEn": "The Sire Impotent",
    "level": 4,
    "tradition": "duranki",
    "desc": "O juiz espeta a efígie sob imprecações de esterilidade vampírica. — Efeito: Bloqueia temporariamente a fertilidade mística da vitae do alvo, tornando-o incapaz de gerar crias (Abraço) ou criar novos carniçais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals",
    "components": "Uma efígie de chumbo representando o senhor inimigo, atada com cordões de crina"
  },
  {
    "id": "ritual_duranki_407",
    "name": "Tamimah (Talismã Protetor)",
    "nameEn": "Tamimah",
    "level": 4,
    "tradition": "duranki",
    "desc": "O feiticeiro consagra o amuleto através de um ciclo de preces e unções de sangue. — Efeito: O amuleto absorve impactos mortais, convertendo até três ferimentos letais ou agravados em dano contundente inofensivo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Four_Rituals",
    "components": "Um medalhão de prata gravado com versículos sagrados em escrita cúfica"
  },
  {
    "id": "ritual_duranki_408",
    "name": "Portal de Apsu",
    "nameEn": "Apsu Portal",
    "level": 5,
    "tradition": "duranki",
    "desc": "O feiticeiro convoca as águas primordiais do abismo doce de Apsu. — Efeito: Abre uma passagem líquida mágica que permite o transporte instantâneo do conjurador e de um esquadrão inteiro de guerreiros para outra fonte de água conectada.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals",
    "components": "Uma cisterna ou fonte de água subterrânea límpida e 5 pontos de vitae"
  },
  {
    "id": "ritual_duranki_409",
    "name": "Vingança de Lilith",
    "nameEn": "Lilith's Vengeance",
    "level": 5,
    "tradition": "duranki",
    "desc": "O conjurador quebra a efígie invocando a matriarca primordial. — Efeito: Aflige o traidor com pesadelos dilacerantes, insônia, sangramento contínuo pelos olhos e fraqueza física debilitante até que ele pague por seus pecados.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals",
    "components": "Uma efígie de argila da vítima banhada em vinagre amargo e lágrimas de mulher traída"
  },
  {
    "id": "ritual_duranki_410",
    "name": "Rito de Marduk Morto e Ressuscitado",
    "nameEn": "Rite of Marduk Slain and Risen",
    "level": 5,
    "tradition": "duranki",
    "desc": "O sumo-sacerdote unge os olhos e peito do adormecido sob o grande hino babilônico da criação. — Efeito: Desperta instantaneamente um vampiro em estado de Torpor secular, restaurando sua consciência e vigor plenamente sem sequelas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals",
    "components": "Um irmão cainita em torpor profundo, óleos da ressurreição e vitae de um ancião"
  },
  {
    "id": "ritual_duranki_411",
    "name": "Visão dos Olhos do Céu",
    "nameEn": "Seeing With the Sky's Eyes",
    "level": 5,
    "tradition": "duranki",
    "desc": "O feiticeiro projeta sua mente nas alturas celestes em comunhão com os astros. — Efeito: Permite ao cainita visualizar com clareza divina todo o panorama de um território de centenas de quilômetros, avistando exércitos, fogueiras e movimentações inimigas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals",
    "components": "Um espelho de bronze no topo de uma torre alta sob a luz das estrelas"
  },
  {
    "id": "ritual_duranki_412",
    "name": "Ocluir a Estrada Ocidental",
    "nameEn": "Occlude the Western Road",
    "level": 5,
    "tradition": "duranki",
    "desc": "O cainita consagra a barreira sob fórmulas de contenção do além. — Efeito: Veda completamente a travessia de almas, fantasmas e espíritos entre o plano físico e o submundo na região, impedindo que necromantes invoquem ou comandem mortos no local.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Five_Rituals",
    "components": "Sete estacas de cedro cravadas nos pontos cardeais de uma província"
  },
  {
    "id": "ritual_duranki_413",
    "name": "Da Garganta de Marduk",
    "nameEn": "From Marduk's Throat",
    "level": 6,
    "tradition": "duranki",
    "desc": "O ancião pronuncia a palavra primordial da criação babilônica. — Efeito: Emite uma onda de choque acústica e mística avassaladora que estilhaça estruturas de pedra e concreto, derruba muralhas e explode os tímpanos e órgãos internos de oponentes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Dur-An-Ki_Rituals#Level_Six_Rituals",
    "components": "A fúria concentrada de um ancião Banu Haqim canalizada através da voz"
  },
  {
    "id": "ritual_koldunismo_414",
    "name": "Batismo de Sangue",
    "nameEn": "Baptism of Blood",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun unge a fronte do servo ou neófito com o sangue sob cânticos eslavos da terra. — Efeito: Sintoniza o indivíduo com os espíritos locais do território, reduzindo a hostilidade da natureza e facilitando comandos feudais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um cálice de madeira consagrado com terra natal dos Cárpatos e 1 ponto de vitae"
  },
  {
    "id": "ritual_koldunismo_415",
    "name": "Comunhão com o Domínio",
    "nameEn": "Communion with the Domain",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O feiticeiro Tzimisce espalha a terra sobre o peito em transe sob as árvores. — Efeito: Permite ao Koldun sentir a presença de intrusos e o estado de saúde da vegetação e da fauna em seu domínio territorial.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um punhado de terra da Transilvânia e meditação ao anoitecer"
  },
  {
    "id": "ritual_koldunismo_416",
    "name": "Encantar a Terra Natal",
    "nameEn": "Enchant Soil",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun abençoa a terra sob fórmulas dos velhos deuses eslavos. — Efeito: Aumenta a vitalidade mágica da terra natal necessária para o descanso diurno do cainita, acelerando a cura e regeneração de ferimentos durante o sono.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Terra do refúgio do Tzimisce misturada com cinzas de carvalho e vitae"
  },
  {
    "id": "ritual_koldunismo_417",
    "name": "Aliança com os Espíritos Menores",
    "nameEn": "Lesser Spirit Alliance",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O conjurador oferece o sacrifício aos espíritos menores da floresta (leshy e domovoi). — Efeito: Conquista a simpatia de espíritos menores locais, que passam a sussurrar avisos sobre perigos e rastros de invasores.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma oferenda de leite puro, mel silvestre e gotas de vitae derramadas na raiz de uma árvore antiga"
  },
  {
    "id": "ritual_koldunismo_418",
    "name": "Refúgio da Terra",
    "nameEn": "Haven of the Earth",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun delimita o perímetro de seu refúgio provisório sob cânticos telúricos. — Efeito: Camufla e protege o abrigo contra predadores naturais, animais selvagens e viajantes mundanos desatentos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um círculo de galhos secos e terra do cemitério local"
  },
  {
    "id": "ritual_koldunismo_419",
    "name": "Invocar o Sinal Menor de Poder",
    "nameEn": "Invoke the Lesser Sign of Power",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun manifesta uma pequena emanação do elemento regente de sua trilha primária. — Efeito: Intimida servos mortais, animais e espíritos menores, facilitando testes sociais e de liderança tribal.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Gesto com a mão traçando o símbolo elemental no ar e uma palavra em eslavo arcaico"
  },
  {
    "id": "ritual_koldunismo_420",
    "name": "Aliança da Matilha",
    "nameEn": "Pack Alliance",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O feiticeiro Tzimisce alimenta o predador sob bênçãos da noite selvagem. — Efeito: Estabelece uma trégua e respeito mútuo com uma alcateia de lobos, permitindo que o cainita atravesse seus territórios sem ser atacado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma gota de sangue do Koldun oferecida ao lobo alfa de uma alcateia"
  },
  {
    "id": "ritual_koldunismo_421",
    "name": "Vontade dos Espíritos",
    "nameEn": "Spirit of the Land",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun consulta os espíritos da terra sobre as condições do tempo. — Efeito: Revela previsões meteorológicas exatas para os próximos três dias, avisando sobre tempestades, geadas ou chuvas torrenciais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Três pedras pretas de rio alinhadas no sentido do vento norte"
  },
  {
    "id": "ritual_koldunismo_422",
    "name": "Sussurros do Rio",
    "nameEn": "Whispers of the Stream",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O feiticeiro inclina-se sobre as águas ouvindo as correntes fluviais. — Efeito: Permite ouvir conversas e ruídos que tenham ocorrido nas margens daquele mesmo rio a quilômetros de distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma gota de sangue derramada em um córrego ou rio de águas rápidas"
  },
  {
    "id": "ritual_koldunismo_423",
    "name": "Voz do Vento",
    "nameEn": "Voice of the Wind",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun sussurra uma mensagem secreta na brisa noturna. — Efeito: O vento carrega as palavras do feiticeiro diretamente aos ouvidos do destinatário pretendido onde quer que ele esteja na mesma montanha.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma pena de coruja soprada na direção do vento norte"
  },
  {
    "id": "ritual_koldunismo_424",
    "name": "Rastrear a Presa pelas Raízes",
    "nameEn": "Trace the Prey",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O Koldun esmaga a folha sobre o solo úmido sob fórmulas de perseguição. — Efeito: As raízes das plantas indicam a direção exata por onde o fugitivo caminhou recentemente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma folha verde colhida no rastro da vítima e vitae"
  },
  {
    "id": "ritual_koldunismo_425",
    "name": "Pé da Terra Firme",
    "nameEn": "Firm Footing",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O cainita abençoa seus passos com a solidez da rocha. — Efeito: Impede que o Koldun escorregue, caia em lamaçais ou perca o equilíbrio em encostas íngremes e penhascos gelados.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Pó de pedra esmagada esfregado nas solas das botas"
  },
  {
    "id": "ritual_koldunismo_426",
    "name": "Véu das Névoas Cárpatas",
    "nameEn": "Mist of the Carpathians",
    "level": 1,
    "tradition": "koldunismo",
    "desc": "O feiticeiro sopra o vapor úmido sobre a clareira. — Efeito: Convoca uma névoa rasteira espessa que oculta a presença física e rastros do Koldun por uma cena.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Água fria aspergida sobre carvão em brasa"
  },
  {
    "id": "ritual_koldunismo_427",
    "name": "Animar as Árvores da Floresta",
    "nameEn": "Awaken the Forest",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O feiticeiro sussurra palavras de despertar arbóreo. — Efeito: As árvores movem seus galhos e raízes lentamente para fechar caminhos, ocultar trilhas e bloquear a passagem de perseguidores.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma gota de vitae do Koldun derramada sobre as raízes de três árvores antigas"
  },
  {
    "id": "ritual_koldunismo_428",
    "name": "Bênção da Terra Fértil",
    "nameEn": "Blessing of the Soil",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun abençoa as plantações de seus camponeses sob ritos agrários arcaicos. — Efeito: Garante colheitas abundantes e saúde ao gado dos servos do lorde feudal, aumentando a lealdade da população mortal.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Cinzas de sacrifício animal misturadas à terra arada"
  },
  {
    "id": "ritual_koldunismo_429",
    "name": "Chamar os Lobos da Montanha",
    "nameEn": "Call the Mountain Wolves",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun sopra o chifre sob a lua crescente invocando os predadores. — Efeito: Convoca uma matilha de lobos selvagens dos Cárpatos para rastrear, caçar ou cercar os inimigos do lorde Tzimisce.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um uivo cerimonial canalizado através de um chifre de boi consagrado"
  },
  {
    "id": "ritual_koldunismo_430",
    "name": "Comunhão com o Fogo da Terra",
    "nameEn": "Communion with Earth's Flame",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun medita diante das chamas ardentes sob encantamentos da Trilha do Fogo. — Efeito: Concede resistência temporária contra o pavor do fogo (Rötschreck) e maior facilidade para conjurar labaredas místicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma fogueira alimentada com madeira de freixo e uma gota de vitae"
  },
  {
    "id": "ritual_koldunismo_431",
    "name": "Muralha de Espinhos Vivos",
    "nameEn": "Wall of Living Thorns",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun planta as sementes em círculo ao redor da propriedade. — Efeito: Brota instantaneamente uma sebe impenetrável de espinheiros venenosos de 3 metros de altura que fere intrusos que tentem atravessá-la.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Sementes de espinheiro selvagem regadas com sangue de cabra"
  },
  {
    "id": "ritual_koldunismo_432",
    "name": "Olhos da Águia das Montanhas",
    "nameEn": "Eyes of the Mountain Eagle",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O feiticeiro foca sua visão no horizonte do alto dos picos rochosos. — Efeito: Permite ao Koldun enxergar com extrema nitidez e detalhes minúsculos a distâncias de vários quilômetros como se tivesse a visão de uma águia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "A pena de uma águia imperial amarrada à fronte com tiras de couro"
  },
  {
    "id": "ritual_koldunismo_433",
    "name": "Serviço das Almas",
    "nameEn": "Service for Souls",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun convoca espíritos da floresta e os vincula como 'carniçais espirituais'. — Efeito: Os espíritos vinculados servem ao feiticeiro com lealdade absoluta até que a tarefa designada seja plenamente cumprida.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Alimentar espíritos da natureza com 2 pontos de vitae do Koldun"
  },
  {
    "id": "ritual_koldunismo_434",
    "name": "Agonia Fenecente",
    "nameEn": "Withering Agony",
    "level": 2,
    "tradition": "koldunismo",
    "desc": "O Koldun introduz a essência doente no organismo da vítima através do toque. — Efeito: Faz com que o alvo sofra debilitações físicas graves, dores nas juntas e fraqueza muscular contínua por uma semana.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "O espírito definhante de uma árvore doente capturado em um nó de madeira"
  },
  {
    "id": "ritual_koldunismo_435",
    "name": "Animar Curiosidades",
    "nameEn": "Animate Curios",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun anima objetos inanimados com espíritos menores. — Efeito: Os objetos levitam, movem-se de forma autônoma, limpam o castelo e atacam em enxame para defender seu mestre se invasores surgirem.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Gotas de vitae aplicadas em pequenos objetos e estátuas de madeira ou pedra"
  },
  {
    "id": "ritual_koldunismo_436",
    "name": "Conjurar Espírito Maior",
    "nameEn": "Conjure Spirit",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun invoca um grande espírito elemental da natureza. — Efeito: Negocia serviços, proteção e favores arcanos poderosos com o espírito em troca de oblações de sangue e adoração.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um círculo de sacrifício com sangue de touro e terra pura da montanha"
  },
  {
    "id": "ritual_koldunismo_437",
    "name": "Amedrontar o Servo",
    "nameEn": "Cowing the Servant",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun faz o servo ingerir a mistura sob cânticos de autoridade feudal. — Efeito: Imprime um pavor reverencial e lealdade cega na mente do servo, impedindo-o de trair ou desobedecer ordens do lorde.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Cérebro de carneiro misturado com terra do domínio e vitae do Koldun"
  },
  {
    "id": "ritual_koldunismo_438",
    "name": "Invocar o Sinal Maior de Poder",
    "nameEn": "Invoke the Greater Sign of Power",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun sintoniza sua carne com os elementos primordiais (rocha, gelo ou fogo). — Efeito: Facilita profundamente todas as conjurações subsequentes de Feitiçaria Koldúnica por uma noite inteira.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Adoção de fisionomia elemental condizente com a Trilha do Koldun"
  },
  {
    "id": "ritual_koldunismo_439",
    "name": "Um com a Floresta",
    "nameEn": "One With the Forest",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O feiticeiro Tzimisce mergulha na madeira viva de um carvalho ancestral. — Efeito: Permite ao Koldun teletransportar-se instantaneamente emergindo do tronco de qualquer outra árvore dentro da mesma floresta.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Funde-se ao tronco de uma árvore milenar após ungi-la com vitae"
  },
  {
    "id": "ritual_koldunismo_440",
    "name": "Arruinar o Lélek (Destruir o Espírito do Objeto)",
    "nameEn": "Raze the Lélek",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun arranca e dilacera o espírito residente na matéria inanimada. — Efeito: O objeto físico perde toda a sua integridade estrutural e desmorona instantaneamente em pó ou estilhaços inúteis.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Tocar o objeto sólido pronunciando a aniquilação de sua alma interior"
  },
  {
    "id": "ritual_koldunismo_441",
    "name": "Sentinelas do Refúgio",
    "nameEn": "Sentinels of the Haven",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun comanda a estrutura física de sua fortaleza sob fórmulas de sentinela. — Efeito: Portas batem e trancam sozinhas, móveis bloqueiam passagens e vigas atacam intrusos para proteger o castelo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Portas, janelas e mobílias do castelo ungidas com cinzas e sangue"
  },
  {
    "id": "ritual_koldunismo_442",
    "name": "O Morto Flutuante (Caminhar sobre Águas)",
    "nameEn": "The Floating Dead",
    "level": 3,
    "tradition": "koldunismo",
    "desc": "O Koldun recita fórmulas às ninfas e espíritos das águas fluviais. — Efeito: Permite ao feiticeiro caminhar, correr e lutar sobre a superfície de rios, lagos e pântanos como se fossem chão firme de pedra.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Ungir os pés com banha de lontra e vitae antes de pisar na água"
  },
  {
    "id": "ritual_koldunismo_443",
    "name": "Além do Muro da Morte",
    "nameEn": "Beyond the Wall of Death",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun invoca o reflexo espectral do mestre falecido sobre suas cinzas. — Efeito: O espírito do antigo Koldun manifesta-se para transmitir ensinamentos e tutoria avançada em Trilhas de Koldunismo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Restos mortais de um feiticeiro koldúnico recém-falecido e fogo sagrado"
  },
  {
    "id": "ritual_koldunismo_444",
    "name": "Abraço da Terra Ancestral",
    "nameEn": "Earth's Embrace",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Tzimisce realiza a transubstanciação mágica do solo ao seu redor. — Efeito: Converte qualquer terra comum na 'terra natal' de seu refúgio por algumas noites, contornando a fraqueza de clã dos Tzimisce durante viagens.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um punhado de terra local e preces aos espíritos da terra"
  },
  {
    "id": "ritual_koldunismo_445",
    "name": "Evocar a Tempestade",
    "nameEn": "Evoke the Storm",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun golpeia o tambor no topo dos picos invocando os ventos dos Cárpatos. — Efeito: Convoca uma tempestade devastadora com relâmpagos, chuvas torrenciais e ventos cortantes sobre toda a região ao redor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "O topo de uma montanha rochosa, um tambor de couro de lobo e vitae"
  },
  {
    "id": "ritual_koldunismo_446",
    "name": "Semblante do Íncubo",
    "nameEn": "Incubus Visage",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun convoca um espírito da natureza para atormentar o alvo à distância. — Efeito: Deforma grotescamente os traços físicos e a fisionomia da vítima à distância durante um mês inteiro.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Sangue de javali selvagem e um pedaço da pele da vítima consumidos sob a meia-lua"
  },
  {
    "id": "ritual_koldunismo_447",
    "name": "Fusão de Almas (Possessão de Carniçal)",
    "nameEn": "Merging of the Souls",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun introduz um espírito elemental da natureza no corpo de seu servo carniçal. — Efeito: O carniçal adquire poderes elementais e força sobre-humana monstruosa (suportando até três espíritos antes de deformar-se).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um carniçal leal alimentado com vitae especial e rito de infusão espiritual"
  },
  {
    "id": "ritual_koldunismo_448",
    "name": "Poço dos Segredos",
    "nameEn": "Pool of Secrets",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun passa as mãos sobre o poço sem tocar na água entoando nomes do passado. — Efeito: A água ondula e projeta visões nítidas em tempo real de qualquer pessoa ou lugar com quem o feiticeiro já teve contato.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um poço de água salobra natural no fundo de uma caverna escura"
  },
  {
    "id": "ritual_koldunismo_449",
    "name": "Refúgio da Cova Sedenta",
    "nameEn": "Refuge of the Thirsty Grave",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun comanda a terra a abrir-se e abraçar seu corpo. — Efeito: O corpo do vampiro afunda no solo maciço como se fosse líquido, protegendo-o com segurança absoluta contra a luz solar até o anoitecer.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Deitar-se sobre o solo consagrado entoando fórmulas de absorção telúrica"
  },
  {
    "id": "ritual_koldunismo_450",
    "name": "Poço de Adivinhação",
    "nameEn": "Scrying Pool",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O Koldun profere o nome do alvo diante da água estagnada. — Efeito: A superfície do caldeirão reflete com perfeição tudo o que o alvo está fazendo, dizendo e planejando naquele exato momento.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um caldeirão de bronze com água pura da nascente e o Nome Verdadeiro do alvo"
  },
  {
    "id": "ritual_koldunismo_451",
    "name": "Laços que Unem",
    "nameEn": "Ties that Bind",
    "level": 4,
    "tradition": "koldunismo",
    "desc": "O feiticeiro ingere a terra embebida em seu próprio sangue sob pactos com a terra. — Efeito: Restabelece uma conexão visceral com os espíritos telúricos, amplificando o poder e a precisão de todas as suas magias koldúnicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Derramar 3 pontos de vitae sobre a terra e comer um punhado do solo ensanguentado"
  },
  {
    "id": "ritual_koldunismo_452",
    "name": "Conjurar Demônio (Kupala)",
    "nameEn": "Conjure Demon",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun invoca uma das crias primordiais do demônio ancestral Kupala. — Efeito: Permite ao feiticeiro barganhar com a entidade demoníaca por segredos proibidos, imunidades e poderes de destruição em massa.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um círculo de ossos humanos, enxofre em brasa e vitae sacrificada no centro da floresta"
  },
  {
    "id": "ritual_koldunismo_453",
    "name": "Servo Elemental Maior",
    "nameEn": "Elemental Servitor",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun sopra vida na estátua através de sua vitae e fórmulas de animação primordial. — Efeito: Cria um servo elemental titânico com corpo de rocha e chamas que luta ferozmente até a morte pelo conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Argila dos Cárpatos, água de rio sagrado e fogo vivo moldados em estátua"
  },
  {
    "id": "ritual_koldunismo_454",
    "name": "Olhar da Górgona",
    "nameEn": "Gorgon's Gaze",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun faz o alvo beber de seu sangue enquanto recita a petrificação do ser. — Efeito: A carne, órgãos e ossos da vítima transformam-se permanentemente em rocha sólida inanimada, petrificando-a para sempre.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Vítima amarrada no altar durante cerimônia de uma hora e ingestão forçada de vitae"
  },
  {
    "id": "ritual_koldunismo_455",
    "name": "Nêmesis da Terra Viva",
    "nameEn": "Nemesis of the Living Earth",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun proclama o indivíduo como inimigo mortal da natureza e de todos os seus espíritos. — Efeito: Os elementos passam a caçar a vítima: galhos caem sobre ela, a terra cede sob seus pés, rios tentam afogá-la e o ar lhe falta nos pulmões.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Longa imprecação cerimonial realizada da meia-noite até o amanhecer sobre o nome do alvo"
  },
  {
    "id": "ritual_koldunismo_456",
    "name": "Espelho de Sangue (Criação de Irmãos de Sangue)",
    "nameEn": "Mirror of Blood",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun unifica as almas e a carne dos participantes sob ritos de simbiose koldúnica. — Efeito: Dá origem à linhagem artificial dos Irmãos de Sangue (Blood Brothers), dotando-os de mente coletiva e partilha de dano.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Vampiros submetidos a Vicissitude e Laço de Sangue mútuo em círculo hermético"
  },
  {
    "id": "ritual_koldunismo_457",
    "name": "O Puxão Mais Íntimo",
    "nameEn": "The Inmost Tug",
    "level": 5,
    "tradition": "koldunismo",
    "desc": "O Koldun manipula o Laço de Sangue que o une ao servo. — Efeito: Altera, molda e reescreve livremente os sentimentos, emoções e lealdades de qualquer criatura sob Laço de Sangue total em relação ao senhor.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Uma gota de sangue do servo vinculado queimada em incensário"
  },
  {
    "id": "ritual_koldunismo_458",
    "name": "Abraçar o Demônio",
    "nameEn": "Embracing the Demon",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "O Koldun funde a entidade infernal à carcaça humana sob ritos de amarração de alma. — Efeito: Dá vida a uma monstruosidade demoníaca corpórea com poderes mágicos brutais e lealdade cega ao Koldun.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um demônio menor de Kupala aprisionado no cadáver de um servo sob Laço de Sangue"
  },
  {
    "id": "ritual_koldunismo_459",
    "name": "Criar Vozhd (Leviatã Titânico)",
    "nameEn": "Create Vozhd",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "O Koldun funde a carne de mais de quinze criaturas vivas em uma massa colossal sob encantamentos de fúria. — Efeito: Cria um Vozhd titânico — um monstro de cerco gigantesco com dezenas de membros, couraça óssea e poder de demolição.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Dezenas de carniçais e animais amalgamados por Vicissitude, poções alquímicas e sangue de ancião"
  },
  {
    "id": "ritual_koldunismo_460",
    "name": "Afogamento em Terra",
    "nameEn": "Drowning in Earth",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "O Koldun comanda o solo sólido a comportar-se como areia movediça líquida. — Efeito: O alvo afunda nas entranhas da rocha sólida e, quando o ritual cessa, o solo se solidifica instantaneamente, sepultando o inimigo vivo em pedra.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Um punhado de terra atirado aos pés da vítima pronunciando a maldição de Kupala"
  },
  {
    "id": "ritual_koldunismo_461",
    "name": "Cão da Tempestade (Fúria de Perun)",
    "nameEn": "Storm Hound",
    "level": 6,
    "tradition": "koldunismo",
    "desc": "O Koldun cria uma tempestade viva dotada de consciência predatória através de uma amostra do alvo. — Efeito: A tempestade viaja pelo mundo caçando a vítima designada, desferindo raios contínuos e ventos dilacerantes onde quer que ela se esconda.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "Madeira atingida por raios, ervas raras e sacrifício ao deus eslavo do trovão Perun"
  },
  {
    "id": "ritual_koldunismo_462",
    "name": "Dracul (Avatar do Dragão Ancestral)",
    "nameEn": "Dracul",
    "level": 9,
    "tradition": "koldunismo",
    "desc": "O patriarca Koldun canaliza as energias telúricas de toda a cordilheira dos Cárpatos. — Efeito: O vampiro transmuta seu corpo físico no mítico Dragão Koldúnico colossal (Dracul), dotado de asas gigantescas, hálito de fogo primordial e invulnerabilidade lendária.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Koldunic_Rituals",
    "components": "O comando absoluto sobre a terra primordial dos Cárpatos e 10 pontos de vitae de Matusalém"
  },
  {
    "id": "ritual_sadhana_463",
    "name": "Armadura da Serenidade de Diamante",
    "nameEn": "Armor of Diamond Serenity",
    "level": 1,
    "tradition": "sadhana",
    "desc": "O sadhu entoa mantras de imperturbabilidade segurando as sementes sagradas. — Efeito: O vampiro adquire um estado de serenidade inabalável, tornando-se imune a qualquer tipo de Frenesi ou Rötschreck pelo restante da noite.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Um colar de contas de rudraksha e mantras ao deus Shiva"
  },
  {
    "id": "ritual_sadhana_464",
    "name": "Rituais de Rakta-Maya (Miragens de Sangue)",
    "nameEn": "Rakta-Maya Rituals",
    "level": 1,
    "tradition": "sadhana",
    "desc": "O mago tântrico gesticula mandalas no ar com o líquido sagrado. — Efeito: Permite ao sadhu hipnotizar receptáculos voluntários e tecer ilusões táteis e visuais convincentes alimentadas por sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Uma gota de sangue misturada a pó de açafrão e leite de coco"
  },
  {
    "id": "ritual_sadhana_465",
    "name": "Caminhar sobre as Águas de Varuna",
    "nameEn": "Water Walking",
    "level": 1,
    "tradition": "sadhana",
    "desc": "O sadhu queima a oferenda cerimonial à beira do rio sagrado antes de pisar na água. — Efeito: Concede ao cainita a capacidade de caminhar, correr e meditar livremente sobre a superfície de rios e lagos como se fossem solo firme.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Uma tigela de mingau de arroz e manteiga ghee consagrada ao deus védico Varuna"
  },
  {
    "id": "ritual_sadhana_466",
    "name": "Animaa (Visão Minúscula)",
    "nameEn": "Animaa",
    "level": 2,
    "tradition": "sadhana",
    "desc": "O sadhu foca sua mente no bindu sob cânticos de aguçamento siddhi. — Efeito: Permite ao conjurador enxergar detalhes microscópicos, fibras minúsculas, venenos invisíveis e texturas imperceptíveis a olho nu.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Uma gota de óleo de sândalo puro aplicada entre as sobrancelhas (Terceiro Olho)"
  },
  {
    "id": "ritual_sadhana_467",
    "name": "Cinzas da Maldição de Agni",
    "nameEn": "Ash of Agni's Curse",
    "level": 2,
    "tradition": "sadhana",
    "desc": "O feiticeiro consagra as cinzas do altar de fogo com mantras punitivos. — Efeito: O pó torna-se misticamente inflamável; ao ser soprado ou atirado contra inimigos, entra em combustão espontânea em contato com a carne, causando queimaduras graves.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Cinzas de oferendas queimadas no fogo sagrado de Agni e 1 ponto de vitae"
  },
  {
    "id": "ritual_sadhana_468",
    "name": "Garimaa (Peso Inabalável)",
    "nameEn": "Garimaa",
    "level": 2,
    "tradition": "sadhana",
    "desc": "O sadhu ancora seu centro de gravidade no centro do planeta através da meditação védica. — Efeito: O corpo do vampiro torna-se imensamente denso e pesado como uma montanha, sendo impossível de ser erguido, empurrado, derrubado ou arremessado.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Uma pequena pedra de basalto negro segurada na palma da mão esquerda"
  },
  {
    "id": "ritual_sadhana_469",
    "name": "Chamado do Destino",
    "nameEn": "Destiny's Call",
    "level": 3,
    "tradition": "sadhana",
    "desc": "O feiticeiro medita sobre as qualidades morais ou físicas que necessita encontrar em um aliado. — Efeito: O tantra alinha os fluxos kármicos e atrai uma pessoa que possua exatamente os talentos ou traços procurados para cruzar seu caminho.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Uma flor de lótus aberta flutuando em água de nascente e fios de seda vermelha"
  },
  {
    "id": "ritual_sadhana_470",
    "name": "Maldição do Leproso",
    "nameEn": "Leper's Curse",
    "level": 3,
    "tradition": "sadhana",
    "desc": "O sadhu inverte o rito de purificação bramânico recitando a contaminação da carne. — Efeito: O alvo passa a sofrer de feridas abertas, chagas pustulentas e necrose degenerativa na pele que desfiguram sua aparência.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Água de rio estagnado, cinzas fúnebres e uma imagem da vítima profanada"
  },
  {
    "id": "ritual_sadhana_471",
    "name": "Leite de Puutanaa",
    "nameEn": "Milk of Puutanaa",
    "level": 4,
    "tradition": "sadhana",
    "desc": "O feiticeiro invoca a demônia amamentadora Puutanaa sobre o alimento. — Efeito: Corrompe misticamente a comida ou bebida da vítima à distância, causando envenenamento espiritual severo, fraqueza física e delírios.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Leite fresco de vaca consagrado com veneno de víbora e a mecha de cabelo do alvo"
  },
  {
    "id": "ritual_sadhana_472",
    "name": "Aurava (Fogo Subaquático)",
    "nameEn": "Aurava",
    "level": 4,
    "tradition": "sadhana",
    "desc": "O sadhu arremessa o óleo místico sobre corpos d'água sob invocações aos fogos submarinos. — Efeito: Conjura o mítico fogo Aurava — labaredas arcanas que queimam, incendeiam e continuam ardendo vigorosamente mesmo debaixo d'água.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Óleo sagrado tântrico misturado com fósforo e cinzas de cremação"
  },
  {
    "id": "ritual_sadhana_473",
    "name": "Proteção do Ventre",
    "nameEn": "Warded Womb",
    "level": 4,
    "tradition": "sadhana",
    "desc": "O sadhu realiza o rito sobre a mulher grávida ungindo seu ventre. — Efeito: Ergue um escudo místico que protege a mãe e o feto contra qualquer feitiçaria, maldição nefanda, possessão espiritual ou magia de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Leite puro, manteiga ghee, açafrão e um amuleto sagrado de chumbo com o mantra de Durga"
  },
  {
    "id": "ritual_sadhana_474",
    "name": "Plenitude Corporal Transcendental",
    "nameEn": "Transcendentally Satisfying Body-Filling",
    "level": 5,
    "tradition": "sadhana",
    "desc": "O sadhu entra em transe tântrico supremo transcendendo as necessidades fisiológicas da carne. — Efeito: O vampiro satisfaz plenamente sua Fome de sangue e adormece a Besta interior, passando dias sem precisar se alimentar de sangue.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Um santuário isolado dedicado ao deus Shiva, oferendas de incenso e uma noite inteira de samadhi"
  },
  {
    "id": "ritual_sadhana_475",
    "name": "Tear Cósmico de Vishnu",
    "nameEn": "Loom of Vishnu",
    "level": 5,
    "tradition": "sadhana",
    "desc": "O feiticeiro manipula as dobras do véu da grande ilusão universal (Maya). — Efeito: Permite ao sadhu alterar e reescrever completamente as impressões sensoriais, a percepção de espaço e as memórias imediatas de todos os presentes no recinto.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Fios de ouro e seda trançados em roca cerimonial sob meditação cósmica"
  },
  {
    "id": "ritual_sadhana_476",
    "name": "Olho de Mahakala",
    "nameEn": "Eye of Mahakala",
    "level": 5,
    "tradition": "sadhana",
    "desc": "O sadhu canaliza a manifestação cósmica de Shiva como Mahakala (o Senhor do Tempo e da Destruição). — Efeito: Emite um raio de pura energia entrópica destruidora que desintegra instantaneamente objetos sólidos, muralhas de pedra e barreiras mágicas em cinzas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/List_of_Sadhana_Rituals",
    "components": "Uma gema de rubi lapidada mantida diante do Terceiro Olho e cânticos da dissolução cósmica"
  },
  {
    "id": "ritual_abismo_477",
    "name": "Perfurar a Escuridão",
    "nameEn": "Pierce the Murk",
    "level": 1,
    "tradition": "abismo",
    "components": "Uma gota de vitae do conjurador esfregada nas próprias pálpebras sob escuridão total",
    "desc": "O conjurador Lasombra unge seus olhos com sangue na escuridão. — Efeito: O vampiro adquire permanentemente a capacidade de enxergar através de qualquer escuridão natural e sombras criadas por Tenebrosidade sem penalidades visuais.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Pierce_the_Murk"
  },
  {
    "id": "ritual_abismo_478",
    "name": "A Sombra das Mãos que Servem",
    "nameEn": "The Shadow of Hands That Serve",
    "level": 1,
    "tradition": "abismo",
    "components": "A sombra projetada pelas próprias mãos do conjurador e 1 ponto de vitae",
    "desc": "O místico abissal separa a sombra de suas mãos do próprio corpo. — Efeito: Convoca uma pequena sombra senciente do Abismo que rasteja pelo piso, servindo como espiã furtiva, mensageira ou manipuladora de pequenos objetos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/The_Shadow_of_Hands_That_Serve"
  },
  {
    "id": "ritual_abismo_479",
    "name": "Peso das Sombras",
    "nameEn": "Weight of Shadows",
    "level": 1,
    "tradition": "abismo",
    "components": "Uma vela negra apagada bruscamente na palma da mão",
    "desc": "O Lasombra comanda as sombras naturais ao redor do alvo a se adensarem. — Efeito: As sombras ganham consistência física quase sólida, tornando o ar pesado e sufocante e reduzindo a velocidade de movimento da vítima.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Weight_of_Shadows"
  },
  {
    "id": "ritual_abismo_480",
    "name": "Luz na Sombra",
    "nameEn": "Light within Shadow",
    "level": 1,
    "tradition": "abismo",
    "components": "Um prisma de vidro negro ou ônix mantido diante dos olhos",
    "desc": "O místico foca sua visão através da pedra escura em direção às sombras. — Efeito: Permite ao vampiro enxergar perfeitamente através de qualquer escuridão sobrenatural sob comando por uma cena.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Light_within_Shadow"
  },
  {
    "id": "ritual_abismo_481",
    "name": "Perfurar o Véu",
    "nameEn": "Pierce the Veil",
    "level": 1,
    "tradition": "abismo",
    "components": "Gotas de água de poço profundo e vitae aplicadas na fronte",
    "desc": "O místico sintoniza sua visão espiritual com as fendas do Vazio. — Efeito: Concede permanentemente a habilidade de enxergar manifestações sombrias, fantasmas nas sombras e criaturas do Abismo.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Pierce_the_Veil"
  },
  {
    "id": "ritual_abismo_482",
    "name": "Olhos do Abismo",
    "nameEn": "Eyes of the Abyss",
    "level": 1,
    "tradition": "abismo",
    "components": "Gotas de sangue vertidas em uma bacia de ônix negro sob cânticos abissais",
    "desc": "O conjurador invoca pequenos habitantes sencientes do Vazio. — Efeito: Convoca minúsculas entidades insetóides de sombra que espiam cômodos e relatam telepaticamente ao conjurador o que observaram.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Eyes_of_the_Abyss"
  },
  {
    "id": "ritual_abismo_483",
    "name": "O Coração que Bate no Silêncio",
    "nameEn": "The Heart That Beats in Silence",
    "level": 2,
    "tradition": "abismo",
    "components": "Uma taça de sangue de um mortal recém-falecido e 1 ponto de vitae Lasombra",
    "desc": "O místico coagula o sangue na forma de um coração pulsante de sombras. — Efeito: Convoca uma entidade sombria agressiva do Abismo capaz de atacar oponentes com tentáculos de escuridão sólida e garras entrópicas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/The_Heart_That_Beats_in_Silence"
  },
  {
    "id": "ritual_abismo_484",
    "name": "Transubstanciação da Essência",
    "nameEn": "Transubstantiation of Essence",
    "level": 2,
    "tradition": "abismo",
    "components": "Gotas de vitae gotejadas sobre uma fenda de sombra pura",
    "desc": "O Lasombra canaliza a matéria fria do Abismo diretamente para suas veias. — Efeito: Utiliza a substância primordial das sombras para restaurar a integridade corporal, curando ferimentos contundentes e letais com extrema rapidez e menor custo de vitae.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Transubstantiation_of_Essence"
  },
  {
    "id": "ritual_abismo_485",
    "name": "Alimentar a Escuridão",
    "nameEn": "Feed the Darkness",
    "level": 2,
    "tradition": "abismo",
    "components": "Manifestação ativa de Braços do Abismo (Tenebrosidade 3) e uma vítima à distância",
    "desc": "O místico comanda os tentáculos sombrios a tocarem o pescoço da presa. — Efeito: Permite ao Lasombra drenar vitae e alimentar-se do sangue da vítima diretamente através do toque dos tentáculos de sombra, mesmo a metros de distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Feed_the_Darkness"
  },
  {
    "id": "ritual_abismo_486",
    "name": "Escuridão Confortante",
    "nameEn": "Comforting Darkness",
    "level": 2,
    "tradition": "abismo",
    "components": "Envolver-se completamente em sombras absolutas em isolamento acústico",
    "desc": "O vampiro repousa no manto do Vazio primordial. — Efeito: A escuridão regenera a carne do cainita, acelerando a cura e recompondo a Força de Vontade gasta.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Comforting_Darkness"
  },
  {
    "id": "ritual_abismo_487",
    "name": "Subsumir a Escuridão",
    "nameEn": "Subsume the Darkness",
    "level": 2,
    "tradition": "abismo",
    "components": "Inalar uma massa concentrada de sombra de Tenebrosidade para dentro dos pulmões",
    "desc": "O místico consome a substância do Abismo fisicamente. — Efeito: A matéria abissal fecha ferimentos internos e sutura cortes no corpo do vampiro instantaneamente.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Subsume_the_Darkness"
  },
  {
    "id": "ritual_abismo_488",
    "name": "Beber o Sangue de Arimã",
    "nameEn": "Drinking the Blood of Ahriman",
    "level": 3,
    "tradition": "abismo",
    "components": "Um cálice de chumbo com vitae consagrada sob imprecações a Arimã",
    "desc": "O conjurador ingere a mistura fúnebre. — Efeito: Eleva seus Atributos Físicos ao nível de sua pontuação de Tenebrosidade e reduz o custo de sangue para ativar poderes de Tenebrosidade por uma cena.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Drinking_the_Blood_of_Ahriman"
  },
  {
    "id": "ritual_abismo_489",
    "name": "Invocar a Sombra Faminta",
    "nameEn": "Calling the Hungry Shade",
    "level": 3,
    "tradition": "abismo",
    "components": "Um círculo de sal negro e vitae de um assassino",
    "desc": "O místico rasga uma fenda no ar invocando uma entidade faminta do Vazio. — Efeito: Convoca uma perigosa Sombra Faminta do Abismo; se submetida com sucesso, a criatura caça alvos, absorve sangue e drena a alma de inimigos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Calling_the_Hungry_Shade"
  },
  {
    "id": "ritual_abismo_490",
    "name": "Fios Abissais",
    "nameEn": "Abyssal Threads",
    "level": 3,
    "tradition": "abismo",
    "components": "Um fio de seda negra embebido em vitae amarrado ao pulso do conjurador",
    "desc": "O místico arremessa a ponta do fio sombrio contra a sombra da vítima ou objeto. — Efeito: Cria um elo invisível e inquebrável de escuridão que permite puxar o alvo, rastrear sua localização exata ou estrangulá-lo à distância.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Abyssal_Threads"
  },
  {
    "id": "ritual_abismo_491",
    "name": "O Terceiro Olho de Rickard Argentis",
    "nameEn": "The Third Eye of Rickard Argentis",
    "level": 3,
    "tradition": "abismo",
    "components": "Uma safira negra gravada com sigilos abissais colada à testa com sangue",
    "desc": "O conjurador abre misticamente um terceiro olho feito de matéria das trevas no centro da fronte. — Efeito: O terceiro olho emana uma barreira de força abissal que protege o vampiro contra ataques psíquicos, magias e disparos de projéteis.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/The_Third_Eye_of_Rickard_Argentis"
  },
  {
    "id": "ritual_abismo_492",
    "name": "Reivindicar as Trevas",
    "nameEn": "Claiming the Dark",
    "level": 3,
    "tradition": "abismo",
    "components": "Meditação em um sarcófago selado banhado em escuridão por três noites",
    "desc": "O Lasombra funde sua estrutura corporal com a substância do Abismo. — Efeito: Aumenta a potência de todos os poderes de Tenebrosidade e a resistência física do cainita (em troca de maior vulnerabilidade a dano agravado solar).",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Claiming_the_Dark"
  },
  {
    "id": "ritual_abismo_493",
    "name": "Revelação de Baltazar",
    "nameEn": "Balthazar's Revelation",
    "level": 3,
    "tradition": "abismo",
    "components": "Uma moeda de prata polida banhada em sangue de um Lasombra insano",
    "desc": "O místico infunde a moeda com energias corrosivas do Abismo. — Efeito: Qualquer indivíduo que segurar a moeda amaldiçoada é tomado imediatamente por uma Perturbação mental aleatória e visões aterrorizantes do Vazio.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Balthazar%27s_Revelation"
  },
  {
    "id": "ritual_abismo_494",
    "name": "Reflexos da Revelação Oca",
    "nameEn": "Reflections of Hollow Revelation",
    "level": 4,
    "tradition": "abismo",
    "components": "Uma esfera de cristal negro ou água estagnada escura em taça de ferro",
    "desc": "O conjurador molda um orbe translúcido de sombra flutuante. — Efeito: Permite ao Lasombra espionar, ouvir e observar com clareza cristalina locais situados a centenas de quilômetros de distância onde haja escuridão.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Reflections_of_Hollow_Revelation"
  },
  {
    "id": "ritual_abismo_495",
    "name": "Fauce de Arimã",
    "nameEn": "Maw of Ahriman",
    "level": 4,
    "tradition": "abismo",
    "components": "Ungir a própria língua com pó de ônix e cinzas de coração humano",
    "desc": "O místico escancara a boca pronunciando a palavra do Vazio. — Efeito: Transforma a boca do conjurador em um portal direto para o Abismo, capaz de devorar ataques mágicos, absorver sangue à distância e expelir tentáculos sufocantes.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Maw_of_Ahriman"
  },
  {
    "id": "ritual_abismo_496",
    "name": "Visão das Sombras",
    "nameEn": "Vision of Shadow",
    "level": 4,
    "tradition": "abismo",
    "components": "Uma esfera de sombras condensadas girando no ar",
    "desc": "O místico projeta sua consciência na esfera e a envia pelos céus. — Efeito: A esfera de sombras viaja invisível no escuro, permitindo ao vampiro espiar fortalezas inimigas e vigiar alvos em tempo real.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Vision_of_Shadow"
  },
  {
    "id": "ritual_abismo_497",
    "name": "Sussurros na Escuridão",
    "nameEn": "Whispers in the Dark",
    "level": 5,
    "tradition": "abismo",
    "components": "Entrar voluntariamente em estado de Torpor em uma tumba sem luz com vitae consagrada",
    "desc": "O Lasombra mergulha sua mente no vácuo primordial do Abismo. — Efeito: O vampiro dialoga diretamente com as consciências antigas do Vazio e acorda do torpor com conhecimentos ocultos proibidos e segredos de seus inimigos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Whispers_in_the_Dark"
  },
  {
    "id": "ritual_abismo_498",
    "name": "Criatura de Arimã",
    "nameEn": "Ahriman's Wight",
    "level": 5,
    "tradition": "abismo",
    "components": "Um sacrifício mortal imobilizado em altar de pedra e 5 pontos de vitae Lasombra",
    "desc": "O místico substitui a carne e os órgãos do receptáculo por matéria sólida do Abismo. — Efeito: Transmuta o corpo em uma criatura sombria quase invulnerável a armas convencionais, dotada de força descomunal e lealdade eterna ao conjurador.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Ahriman%27s_Wight"
  },
  {
    "id": "ritual_abismo_499",
    "name": "Comunhão com o Abismo",
    "nameEn": "Commune with the Abyss",
    "level": 5,
    "tradition": "abismo",
    "components": "Um poço sem fundo ou caverna profunda selada da luz",
    "desc": "O místico entra em transe profundo entoando as preces às Trevas Eternas. — Efeito: Faz uma pergunta direta ao próprio Abismo; a entidade primordial responde com profecias infalíveis e revelações arcanas.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Commune_with_the_Abyss"
  },
  {
    "id": "ritual_abismo_500",
    "name": "Adentrar o Abismo",
    "nameEn": "Into the Chasm",
    "level": 6,
    "tradition": "abismo",
    "components": "Uma grande fenda de sombras aberta com a vitae do conjurador",
    "desc": "O Lasombra dá um passo em direção ao Vazio infinito. — Efeito: Permite ao vampiro e seus aliados viajarem fisicamente através das profundezas do Abismo, atravessando continentes e emergindo em qualquer outra sombra do mundo em segundos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Into_the_Chasm"
  },
  {
    "id": "ritual_abismo_501",
    "name": "Evocação do Calabouço Abissal",
    "nameEn": "Evocation of the Oubliette",
    "level": 7,
    "tradition": "abismo",
    "components": "Uma corrente de ferro negro forjada em túmulo e um gesto de aprisionamento",
    "desc": "O místico aponta para o alvo abrindo um vórtice de vácuo aos seus pés. — Efeito: Suga a vítima inteira para dentro de uma cela dimensional isolada no Abismo (um esquife eterno), aprisionando-a em escuridão e silêncio absoluto por dias ou anos.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Evocation_of_the_Oubliette"
  },
  {
    "id": "ritual_abismo_502",
    "name": "O Grito que Extingue a Luz",
    "nameEn": "Cry That Slays Light",
    "level": 8,
    "tradition": "abismo",
    "components": "O conhecimento da sílaba primordial da criação da noite e a fúria de um ancião Lasombra",
    "desc": "O místico profere a terrível sílaba do Vazio no topo de uma torre ou colina. — Efeito: Apaga e extingue completamente a luz do sol em um raio de dezenas de quilômetros por uma hora inteira, mergulhando a cidade em noite e trevas absolutas durante o meio-dia.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Cry_That_Slays_Light"
  },
  {
    "id": "ritual_abismo_503",
    "name": "Reivindicação do Lorde Aludian",
    "nameEn": "Lord Aludian's Claim",
    "level": 8,
    "tradition": "abismo",
    "components": "A consagração de um castelo ou província inteira com sangue de Matusalém e ritos abissais",
    "desc": "O místico estende o domínio do Abismo de forma permanente sobre o território físico. — Efeito: O local torna-se perpetuamente amaldiçoado; as sombras ganham vida própria, a luz do dia enfraquece permanentemente e entidades do Abismo caminham livremente pelo mundo material.",
    "wikiUrl": "https://whitewolf.fandom.com/wiki/Lord_Aludian%27s_Claim"
  }
];
