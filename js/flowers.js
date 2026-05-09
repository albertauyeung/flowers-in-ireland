/* Flower data for "Flowers in Ireland" kids app.
 * Photos load live from Wikipedia REST API (Wikimedia Commons, CC-licensed).
 * Descriptions are written for kids aged 5-12 in 6 languages.
 * Pronunciations: pinyin (for Mandarin/Trad+Simp Chinese) and jyutping (for Cantonese).
 */
window.FLOWERS = [
  {
    id: "gorse",
    wiki: "Ulex_europaeus",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 200,
    family: "Pea",
    familyLatin: "Fabaceae",
    blooms: "All year (peak Mar–Jun)",
    where: ["Heaths and hillsides everywhere", "Coastal cliffs", "Roadside hedges"],
    names: {
      "en": "Gorse",
      "zh-Hant": "荊豆",
      "zh-Hans": "荆豆",
      "yue": "荊豆",
      "fr": "Ajonc d'Europe",
      "es": "Tojo"
    },
    pronunciation: { pinyin: "jīng dòu", jyutping: "ging1 dau6" },
    latin: "Ulex europaeus",
    description: {
      "en": "A spiky golden bush that smells like coconut on warm days. There's an old Irish saying: \"When gorse is out of bloom, kissing's out of season\" — meaning it's almost never out of bloom!",
      "zh-Hant": "一種金黃色的多刺灌木，溫暖天氣時聞起來像椰子。愛爾蘭有句老話：「當荊豆不開花時，親吻就過季了」——意思是荊豆幾乎一年到頭都在開花！",
      "zh-Hans": "一种金黄色的多刺灌木，温暖天气时闻起来像椰子。爱尔兰有句老话：「当荆豆不开花时，亲吻就过季了」——意思是荆豆几乎一年到头都在开花！",
      "yue": "一種金黃色嘅多刺灌木，天氣暖嗰時聞起嚟好似椰子咁。愛爾蘭有句老話：「荊豆冇開花嘅時候，親親都過咗季」——即係話荊豆成年都喺度開花！",
      "fr": "Un buisson épineux et doré qui sent la noix de coco les jours chauds. Un vieux dicton irlandais dit : « Quand l'ajonc n'est pas en fleur, l'amour n'est plus de saison » — c'est-à-dire qu'il fleurit presque toute l'année !",
      "es": "Un arbusto espinoso y dorado que huele a coco los días cálidos. Un viejo dicho irlandés afirma: «Cuando el tojo no florece, los besos están fuera de temporada» — ¡o sea, casi nunca!"
    }
  },
  {
    id: "primrose",
    wiki: "Primula_vulgaris",
    color: "#fff3a0",
    colorCategory: "yellow",
    heightCm: 12,
    family: "Primrose",
    familyLatin: "Primulaceae",
    blooms: "Mar–May",
    where: ["Woodland banks", "Hedgerow shade", "Damp grassy slopes"],
    names: {
      "en": "Primrose",
      "zh-Hant": "報春花",
      "zh-Hans": "报春花",
      "yue": "報春花",
      "fr": "Primevère commune",
      "es": "Primavera común"
    },
    pronunciation: { pinyin: "bào chūn huā", jyutping: "bou3 ceon1 faa1" },
    latin: "Primula vulgaris",
    description: {
      "en": "One of the very first flowers of spring, with pale yellow petals and an orange centre. The name means \"first rose\" — though it isn't a rose at all!",
      "zh-Hant": "春天最早開的花之一，淡黃色花瓣中間是橘色。名字的意思是「最早的玫瑰」——其實它根本不是玫瑰！",
      "zh-Hans": "春天最早开的花之一，淡黄色花瓣中间是橘色。名字的意思是「最早的玫瑰」——其实它根本不是玫瑰！",
      "yue": "春天最早開嘅花之一，淡黃色花瓣中間有橙色。佢個名意思係「最早嘅玫瑰」——其實佢根本唔係玫瑰！",
      "fr": "L'une des toutes premières fleurs du printemps, aux pétales jaune pâle et au cœur orange. Son nom veut dire « première rose » — mais ce n'est pas une rose du tout !",
      "es": "Una de las primeras flores de la primavera, con pétalos amarillo claro y centro naranja. Su nombre significa «primera rosa», ¡pero no es una rosa!"
    }
  },
  {
    id: "cowslip",
    wiki: "Primula_veris",
    color: "#f5c518",
    colorCategory: "yellow",
    heightCm: 25,
    family: "Primrose",
    familyLatin: "Primulaceae",
    blooms: "Apr–May",
    where: ["Old meadows", "Burren grassland (Clare)", "Sunny banks"],
    names: {
      "en": "Cowslip",
      "zh-Hant": "黃花九輪草",
      "zh-Hans": "黄花九轮草",
      "yue": "黃花九輪草",
      "fr": "Coucou (primevère officinale)",
      "es": "Primavera oficinal"
    },
    pronunciation: { pinyin: "huáng huā jiǔ lún cǎo", jyutping: "wong4 faa1 gau2 leon4 cou2" },
    latin: "Primula veris",
    description: {
      "en": "A cluster of nodding little yellow bells on top of one stem, like tiny umbrellas. Bumblebees love them in spring meadows.",
      "zh-Hant": "一根莖上掛著一串點頭的黃色小鈴鐺，像小傘一樣。春天的草地上，大黃蜂最愛它們。",
      "zh-Hans": "一根茎上挂着一串点头的黄色小铃铛，像小伞一样。春天的草地上，大黄蜂最爱它们。",
      "yue": "一條莖上面掛住一串點頭嘅黃色小鈴鐺，好似細細把遮咁。春天嘅草地度，大黃蜂最鍾意佢哋。",
      "fr": "Une grappe de petites cloches jaunes qui se penchent au sommet d'une seule tige, comme de minuscules parapluies. Les bourdons les adorent au printemps.",
      "es": "Un ramito de campanillas amarillas que cuelgan al final de un tallo, como pequeños paraguas. ¡A los abejorros les encantan en primavera!"
    }
  },
  {
    id: "dandelion",
    wiki: "Taraxacum",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 20,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Mar–Oct",
    where: ["Lawns and parks", "Roadside verges", "Anywhere with grass"],
    names: {
      "en": "Dandelion",
      "zh-Hant": "蒲公英",
      "zh-Hans": "蒲公英",
      "yue": "蒲公英",
      "fr": "Pissenlit",
      "es": "Diente de león"
    },
    pronunciation: { pinyin: "pú gōng yīng", jyutping: "pou4 gung1 jing1" },
    latin: "Taraxacum officinale",
    description: {
      "en": "Bright yellow flowers turn into fluffy white \"clocks\" full of tiny parachutes. Blow on them and make a wish — but the seeds will land somewhere new!",
      "zh-Hant": "鮮黃色的花會變成毛茸茸的白色「時鐘」，裡面是小小的降落傘。對它吹一口氣許個願——種子就會飛到新的地方！",
      "zh-Hans": "鲜黄色的花会变成毛茸茸的白色「时钟」，里面是小小的降落伞。对它吹一口气许个愿——种子就会飞到新的地方！",
      "yue": "鮮黃色嘅花會變成毛毛嘅白色「時鐘」，入面係細細嘅降落傘。對住佢吹啖氣許個願——啲種子就會飛去新嘅地方！",
      "fr": "Des fleurs jaune vif se transforment en « horloges » blanches duveteuses pleines de minuscules parachutes. Souffle dessus et fais un vœu !",
      "es": "Sus flores amarillas brillantes se vuelven «relojes» blancos llenos de paracaídas. ¡Sopla y pide un deseo: las semillas volarán lejos!"
    }
  },
  {
    id: "buttercup",
    wiki: "Ranunculus_acris",
    color: "#ffd700",
    colorCategory: "yellow",
    heightCm: 60,
    family: "Buttercup",
    familyLatin: "Ranunculaceae",
    blooms: "Apr–Oct",
    poison: true,
    where: ["Damp meadows everywhere", "Roadside grass", "Park lawns"],
    names: {
      "en": "Meadow Buttercup",
      "zh-Hant": "毛茛",
      "zh-Hans": "毛茛",
      "yue": "毛茛",
      "fr": "Bouton d'or (renoncule âcre)",
      "es": "Botón de oro"
    },
    pronunciation: { pinyin: "máo gèn", jyutping: "mou4 gan3" },
    latin: "Ranunculus acris",
    description: {
      "en": "Shiny yellow petals so glossy they can reflect light onto your chin. The old game: if your chin glows yellow, you like butter!",
      "zh-Hant": "閃亮的黃色花瓣亮得能把光反射到下巴上。有個老遊戲：如果你下巴變黃，就代表你喜歡奶油！",
      "zh-Hans": "闪亮的黄色花瓣亮得能把光反射到下巴上。有个老游戏：如果你下巴变黄，就代表你喜欢奶油！",
      "yue": "閃閃嘅黃色花瓣，光得可以將光反射落你下巴度。有個老遊戲：如果你下巴變黃，即係你鍾意食牛油！",
      "fr": "Des pétales jaunes si brillants qu'ils renvoient la lumière sur ton menton. Vieux jeu : si ton menton devient jaune, tu aimes le beurre !",
      "es": "Sus pétalos amarillos brillan tanto que reflejan la luz en tu barbilla. Hay un juego: si te brilla amarilla, ¡te gusta la mantequilla!"
    }
  },
  {
    id: "lessercelandine",
    wiki: "Ficaria_verna",
    color: "#ffd700",
    colorCategory: "yellow",
    heightCm: 10,
    family: "Buttercup",
    familyLatin: "Ranunculaceae",
    blooms: "Feb–May",
    where: ["Woodland floors", "Hedge banks", "Damp shady ground"],
    names: {
      "en": "Lesser Celandine",
      "zh-Hant": "榕葉毛茛",
      "zh-Hans": "榕叶毛茛",
      "yue": "榕葉毛茛",
      "fr": "Ficaire (renoncule ficaire)",
      "es": "Celidonia menor"
    },
    pronunciation: { pinyin: "róng yè máo gèn", jyutping: "jung4 jip6 mou4 gan3" },
    latin: "Ficaria verna",
    description: {
      "en": "A starry yellow flower that opens in early spring sunshine and closes when the sky turns grey. The poet Wordsworth wrote a poem just for it!",
      "zh-Hant": "一朵星星形狀的黃花，會在早春陽光下打開，天色一轉灰就合起來。詩人華茲華斯特地為它寫了首詩！",
      "zh-Hans": "一朵星星形状的黄花，会在早春阳光下打开，天色一转灰就合起来。诗人华兹华斯特地为它写了首诗！",
      "yue": "一朵星形嘅黃花，喺早春陽光下打開，天色一轉灰就合埋。詩人華茲華斯仲特登為佢寫咗首詩！",
      "fr": "Une fleur jaune en étoile qui s'ouvre au soleil du début du printemps et se ferme dès que le ciel devient gris. Le poète Wordsworth lui a même écrit un poème !",
      "es": "Una flor amarilla con forma de estrella que se abre al sol de principios de primavera y se cierra cuando el cielo se nubla. ¡El poeta Wordsworth le dedicó un poema!"
    }
  },
  {
    id: "marshmarigold",
    wiki: "Caltha_palustris",
    color: "#ffb900",
    colorCategory: "yellow",
    heightCm: 40,
    family: "Buttercup",
    familyLatin: "Ranunculaceae",
    blooms: "Mar–May",
    where: ["Wet ditches", "Stream banks", "Marshes and bogs"],
    names: {
      "en": "Marsh-marigold",
      "zh-Hant": "驢蹄草",
      "zh-Hans": "驴蹄草",
      "yue": "驢蹄草",
      "fr": "Populage des marais",
      "es": "Calta palustre"
    },
    pronunciation: { pinyin: "lǘ tí cǎo", jyutping: "lou4 tai4 cou2" },
    latin: "Caltha palustris",
    description: {
      "en": "Big buttery cups standing in wet ditches and stream banks, glowing like little suns in spring. In Ireland it's also called \"May-flower\".",
      "zh-Hant": "大大的奶油色花朵長在濕水溝和溪邊，春天像小太陽一樣閃閃發光。在愛爾蘭也叫做「五月花」。",
      "zh-Hans": "大大的奶油色花朵长在湿水沟和溪边，春天像小太阳一样闪闪发光。在爱尔兰也叫做「五月花」。",
      "yue": "大大個牛油色花朵長喺濕水溝同溪邊，春天好似細細個太陽咁閃閃發光。喺愛爾蘭又叫做「五月花」。",
      "fr": "De grandes coupes beurrées qui se dressent dans les fossés humides, brillant comme de petits soleils au printemps. En Irlande, on l'appelle aussi « fleur de mai ».",
      "es": "Grandes copas amarillas en zanjas húmedas y orillas de arroyos, brillan como pequeños soles en primavera. En Irlanda también se le llama «flor de mayo»."
    }
  },
  {
    id: "yellowiris",
    wiki: "Iris_pseudacorus",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 120,
    family: "Iris",
    familyLatin: "Iridaceae",
    blooms: "May–Jul",
    where: ["Pond and lake edges", "Wet ditches", "Riverbanks"],
    names: {
      "en": "Yellow Flag Iris",
      "zh-Hant": "黃菖蒲",
      "zh-Hans": "黄菖蒲",
      "yue": "黃菖蒲",
      "fr": "Iris des marais",
      "es": "Lirio amarillo"
    },
    pronunciation: { pinyin: "huáng chāng pú", jyutping: "wong4 coeng1 pou4" },
    latin: "Iris pseudacorus",
    description: {
      "en": "Tall sword-shaped leaves and big bright yellow flowers that look like flags by the water. It is said to be the original \"fleur-de-lis\" of French royalty.",
      "zh-Hant": "高高的劍形葉子和大大的鮮黃色花朵，像水邊的旗幟。據說它就是法國皇室紋章「鳶尾花」的原形。",
      "zh-Hans": "高高的剑形叶子和大大的鲜黄色花朵，像水边的旗帜。据说它就是法国皇室纹章「鸢尾花」的原形。",
      "yue": "高高嘅劍形葉同大大嘅鮮黃色花，好似水邊嘅旗幟。據講佢就係法國皇室紋章「鳶尾花」嘅原形。",
      "fr": "De hautes feuilles en forme d'épée et de grandes fleurs jaune vif qui ressemblent à des drapeaux au bord de l'eau. On dit que c'est l'origine de la fleur de lys royale !",
      "es": "Hojas altas en forma de espada y grandes flores amarillas que parecen banderas junto al agua. Se dice que es el origen de la flor de lis real francesa."
    }
  },
  {
    id: "broom",
    wiki: "Cytisus_scoparius",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 200,
    family: "Pea",
    familyLatin: "Fabaceae",
    blooms: "May–Jun",
    where: ["Heaths and dry banks", "Forest clearings", "Sandy roadsides"],
    names: {
      "en": "Broom",
      "zh-Hant": "金雀花",
      "zh-Hans": "金雀花",
      "yue": "金雀花",
      "fr": "Genêt à balais",
      "es": "Retama negra"
    },
    pronunciation: { pinyin: "jīn què huā", jyutping: "gam1 zoek3 faa1" },
    latin: "Cytisus scoparius",
    description: {
      "en": "Looks a bit like gorse but without the spikes — a tall green bush with bright yellow pea-shaped flowers. People used to bundle the twigs to make sweeping brooms.",
      "zh-Hant": "外型有點像荊豆，但沒有刺——高高的綠色灌木，開著鮮黃色的豌豆形花朵。以前人們會把它的細枝綁起來做掃帚。",
      "zh-Hans": "外型有点像荆豆，但没有刺——高高的绿色灌木，开着鲜黄色的豌豆形花朵。以前人们会把它的细枝绑起来做扫帚。",
      "yue": "樣有少少似荊豆，但係冇刺——高高嘅綠色灌木，開鮮黃色嘅豌豆形花。以前啲人會將佢啲細枝紮起嚟整掃把。",
      "fr": "Il ressemble un peu à l'ajonc, mais sans piquants — un grand buisson vert aux fleurs jaune vif en forme de pois. Autrefois, on en faisait des balais.",
      "es": "Parece un tojo pero sin espinas — un arbusto verde alto con flores amarillas en forma de guisante. Antes se ataban sus ramas para hacer escobas."
    }
  },
  {
    id: "birdsfoottrefoil",
    wiki: "Lotus_corniculatus",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 25,
    family: "Pea",
    familyLatin: "Fabaceae",
    blooms: "May–Sep",
    where: ["Dry grasslands", "Sand dunes", "Burren limestone (Clare)"],
    names: {
      "en": "Common Bird's-foot-trefoil",
      "zh-Hant": "百脈根",
      "zh-Hans": "百脉根",
      "yue": "百脈根",
      "fr": "Lotier corniculé",
      "es": "Loto corniculado"
    },
    pronunciation: { pinyin: "bǎi mài gēn", jyutping: "baak3 mak6 gan1" },
    latin: "Lotus corniculatus",
    description: {
      "en": "Little yellow and orange flowers in tight clusters. After flowering, the seed pods spread out like the toes of a bird's foot — that's how it got its name!",
      "zh-Hant": "黃橙色的小花密密地長在一起。開花後，種莢張開的樣子像鳥的腳趾——名字就是這樣來的！",
      "zh-Hans": "黄橙色的小花密密地长在一起。开花后，种荚张开的样子像鸟的脚趾——名字就是这样来的！",
      "yue": "黃橙色嘅小花密密哋長埋一齊。開完花之後，啲種莢張開嗰陣好似雀仔嘅腳趾——個名就係咁嚟㗎！",
      "fr": "De petites fleurs jaunes et orange en bouquets serrés. Après la floraison, les gousses s'écartent comme les doigts d'une patte d'oiseau — d'où son nom !",
      "es": "Pequeñas flores amarillas y naranjas en grupos apretados. Después de florecer, las vainas se abren como los dedos de un pájaro — ¡por eso su nombre!"
    }
  },
  {
    id: "ladysbedstraw",
    wiki: "Galium_verum",
    color: "#f5e050",
    colorCategory: "yellow",
    heightCm: 60,
    family: "Bedstraw",
    familyLatin: "Rubiaceae",
    blooms: "Jun–Sep",
    where: ["Sandy grasslands", "Burren limestone (Clare)", "Dunes"],
    names: {
      "en": "Lady's Bedstraw",
      "zh-Hant": "蓬子菜",
      "zh-Hans": "蓬子菜",
      "yue": "蓬子菜",
      "fr": "Gaillet jaune",
      "es": "Cuajaleche"
    },
    pronunciation: { pinyin: "péng zǐ cài", jyutping: "pung4 zi2 coi3" },
    latin: "Galium verum",
    description: {
      "en": "Frothy yellow clouds of tiny flowers that smell of fresh hay. People used to stuff their mattresses with it because the smell scared away fleas!",
      "zh-Hant": "成群的小黃花像泡沫雲一樣，聞起來有新鮮乾草的味道。以前人們會把它塞進床墊，因為這味道能趕走跳蚤！",
      "zh-Hans": "成群的小黄花像泡沫云一样，闻起来有新鲜干草的味道。以前人们会把它塞进床垫，因为这味道能赶走跳蚤！",
      "yue": "好多細細嘅黃花好似泡沫雲咁，聞起嚟有新鮮乾草味。以前啲人會將佢塞入床褥度，因為個味可以趕走跳蚤！",
      "fr": "De petites fleurs jaunes en nuages mousseux qui sentent le foin frais. On en bourrait les matelas parce que l'odeur faisait fuir les puces !",
      "es": "Nubes esponjosas de florecitas amarillas que huelen a heno fresco. ¡Antes la metían en los colchones porque el olor ahuyentaba a las pulgas!"
    }
  },
  {
    id: "stjohnswort",
    wiki: "Hypericum_perforatum",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 80,
    family: "St John's-wort",
    familyLatin: "Hypericaceae",
    blooms: "Jun–Sep",
    where: ["Roadside banks", "Dry grassland", "Forest edges"],
    names: {
      "en": "Perforate St John's-wort",
      "zh-Hant": "貫葉連翹",
      "zh-Hans": "贯叶连翘",
      "yue": "貫葉連翹",
      "fr": "Millepertuis perforé",
      "es": "Hipérico"
    },
    pronunciation: { pinyin: "guàn yè lián qiào", jyutping: "gun3 jip6 lin4 kiu4" },
    latin: "Hypericum perforatum",
    description: {
      "en": "Hold a leaf up to the sky and you'll see tiny dots of light — they look like pinholes! That's where its name \"perforate\" comes from.",
      "zh-Hant": "把它的葉子舉向天空，你會看到一個個小亮點——像針孔一樣！這就是它名字裡「穿孔」的由來。",
      "zh-Hans": "把它的叶子举向天空，你会看到一个个小亮点——像针孔一样！这就是它名字里「穿孔」的由来。",
      "yue": "將佢嘅葉舉向天空，你會見到一粒粒嘅小光點——好似針孔咁！個名「貫葉」（穿過葉嘅孔）就係咁嚟。",
      "fr": "Tiens une feuille face au ciel et tu verras de minuscules points lumineux — comme des trous d'épingle ! C'est de là que vient le mot « perforé ».",
      "es": "Levanta una hoja hacia el cielo y verás pequeños puntos brillantes — ¡como agujeritos! De ahí su nombre «perforado»."
    }
  },
  {
    id: "tormentil",
    wiki: "Potentilla_erecta",
    color: "#ffd700",
    colorCategory: "yellow",
    heightCm: 20,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "May–Sep",
    where: ["Heaths and moors", "Bog edges", "Acid grassland"],
    names: {
      "en": "Tormentil",
      "zh-Hant": "直立委陵菜",
      "zh-Hans": "直立委陵菜",
      "yue": "直立委陵菜",
      "fr": "Potentille tormentille",
      "es": "Tormentila"
    },
    pronunciation: { pinyin: "zhí lì wěi líng cài", jyutping: "zik6 laap6 wai2 ling4 coi3" },
    latin: "Potentilla erecta",
    description: {
      "en": "A tiny yellow flower with only four petals — most rose-family flowers have five! Look for it on heaths all summer long.",
      "zh-Hant": "一朵小黃花，只有四片花瓣——大部分薔薇科的花都是五片！整個夏天在荒原上都找得到。",
      "zh-Hans": "一朵小黄花，只有四片花瓣——大部分蔷薇科的花都是五片！整个夏天在荒原上都找得到。",
      "yue": "一朵細細嘅黃花，淨係得四塊花瓣——大部分薔薇科嘅花都係五塊㗎！成個夏天喺荒原上都搵到佢。",
      "fr": "Une petite fleur jaune avec seulement quatre pétales — la plupart des Rosacées en ont cinq ! On la trouve dans les landes tout l'été.",
      "es": "Una pequeña flor amarilla con solo cuatro pétalos — ¡la mayoría de las rosáceas tienen cinco! Búscala en los brezales durante todo el verano."
    }
  },
  {
    id: "yellowrattle",
    wiki: "Rhinanthus_minor",
    color: "#f5e050",
    colorCategory: "yellow",
    heightCm: 35,
    family: "Broomrape",
    familyLatin: "Orobanchaceae",
    blooms: "Jun–Aug",
    where: ["Hay meadows", "Old grassland", "Wildflower meadows"],
    names: {
      "en": "Yellow Rattle",
      "zh-Hant": "小鼻花",
      "zh-Hans": "小鼻花",
      "yue": "小鼻花",
      "fr": "Petit rhinanthe",
      "es": "Sonajitas"
    },
    pronunciation: { pinyin: "xiǎo bí huā", jyutping: "siu2 bei6 faa1" },
    latin: "Rhinanthus minor",
    description: {
      "en": "When the seeds are ripe, shake the dried flower head and you'll hear them rattle inside like a tiny maraca! It steals food from grass roots.",
      "zh-Hant": "種子成熟時，搖一搖乾掉的花頭，你會聽到裡面像小沙鈴一樣咯咯響！它會從草根偷食物吃。",
      "zh-Hans": "种子成熟时，摇一摇干掉的花头，你会听到里面像小沙铃一样咯咯响！它会从草根偷食物吃。",
      "yue": "啲種子熟咗之後，搖下啲乾掉嘅花頭，你會聽到裡面好似細細個沙鈴咁咯咯響！佢會偷草根嘅養分嚟食。",
      "fr": "Quand les graines sont mûres, secoue la tête séchée et elles font le bruit d'une maraca ! Elle vole sa nourriture aux racines des herbes.",
      "es": "Cuando las semillas maduran, sacude la cabeza seca y suenan como una maraca! Roba alimento de las raíces de la hierba."
    }
  },
  {
    id: "silverweed",
    wiki: "Argentina_anserina",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 20,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "May–Aug",
    where: ["Sandy paths", "Coastal dunes", "Bare damp ground"],
    names: {
      "en": "Silverweed",
      "zh-Hant": "鵝絨委陵菜",
      "zh-Hans": "鹅绒委陵菜",
      "yue": "鵝絨委陵菜",
      "fr": "Potentille ansérine",
      "es": "Argentina"
    },
    pronunciation: { pinyin: "é róng wěi líng cài", jyutping: "ngo4 jung4 wai2 ling4 coi3" },
    latin: "Argentina anserina",
    description: {
      "en": "Turn its feathery leaves over and the underside is shiny silver! The roots used to be roasted and eaten in the old days.",
      "zh-Hant": "把它羽毛狀的葉子翻過來，背面是亮亮的銀色！從前人們會把它的根烤來吃。",
      "zh-Hans": "把它羽毛状的叶子翻过来，背面是亮亮的银色！从前人们会把它的根烤来吃。",
      "yue": "將佢羽毛形嘅葉揭轉嚟，背面係閃閃嘅銀色！以前啲人會將佢嘅根烘嚟食。",
      "fr": "Retourne ses feuilles plumeuses : le dessous est argenté brillant ! Autrefois, on faisait rôtir ses racines pour les manger.",
      "es": "Da la vuelta a sus hojas plumosas y el envés es plateado brillante. ¡Antiguamente se asaban sus raíces para comer!"
    }
  },
  {
    id: "ragwort",
    wiki: "Jacobaea_vulgaris",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 100,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Jun–Oct",
    poison: true,
    where: ["Pastures and waste ground", "Roadsides", "Open fields"],
    names: {
      "en": "Common Ragwort",
      "zh-Hant": "千里光",
      "zh-Hans": "千里光",
      "yue": "千里光",
      "fr": "Séneçon jacobée",
      "es": "Hierba de Santiago"
    },
    pronunciation: { pinyin: "qiān lǐ guāng", jyutping: "cin1 lei5 gwong1" },
    latin: "Jacobaea vulgaris",
    description: {
      "en": "Tall flat-topped clusters of bright yellow flowers — and the favourite food of the stripy black-and-orange cinnabar moth caterpillar. Don't pick: it's harmful to horses and people.",
      "zh-Hant": "頂端平平的一叢叢鮮黃色花——朱砂蛾毛毛蟲（黑黃條紋）最愛吃。不要採：它對馬和人都有毒。",
      "zh-Hans": "顶端平平的一丛丛鲜黄色花——朱砂蛾毛毛虫（黑黄条纹）最爱吃。不要采：它对马和人都有毒。",
      "yue": "頂部平平嘅一叢叢鮮黃色花——朱砂蛾毛毛蟲（黑黃間條）最鍾意食。唔好摘：對馬同人都有毒。",
      "fr": "De grands bouquets aplatis de fleurs jaune vif — la nourriture préférée de la chenille rayée noir et orange du goutte-de-sang. Ne pas cueillir : toxique pour les chevaux et les humains.",
      "es": "Grupos altos y aplanados de flores amarillas brillantes — el alimento favorito de la oruga rayada de la mariposa cinabrio. No la recojas: es tóxica."
    }
  },
  {
    id: "bogasphodel",
    wiki: "Narthecium_ossifragum",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 30,
    family: "Bog Asphodel",
    familyLatin: "Nartheciaceae",
    blooms: "Jul–Aug",
    where: ["Wet bogs and moors", "Connemara (Galway)", "Wicklow Mountains"],
    names: {
      "en": "Bog Asphodel",
      "zh-Hant": "沼澤花",
      "zh-Hans": "沼泽花",
      "yue": "沼澤花",
      "fr": "Narthécie des marais",
      "es": "Asfódelo de turbera"
    },
    pronunciation: { pinyin: "zhǎo zé huā", jyutping: "ziu1 zaak6 faa1" },
    latin: "Narthecium ossifragum",
    description: {
      "en": "Spikes of starry yellow flowers light up the boglands in summer. Its Latin name means \"bone-breaker\" — sheep grazing on it can develop weak bones.",
      "zh-Hant": "夏天時，星星形狀的黃色花穗點亮了沼澤地。它的拉丁文名字意思是「碎骨」——羊吃了會骨頭變脆弱。",
      "zh-Hans": "夏天时，星星形状的黄色花穗点亮了沼泽地。它的拉丁文名字意思是「碎骨」——羊吃了会骨头变脆弱。",
      "yue": "夏天嗰陣，星形嘅黃色花穗點亮咗沼澤地。佢嘅拉丁文名字意思係「碎骨」——羊食咗會骨頭變脆。",
      "fr": "Des épis de fleurs jaunes en étoile illuminent les tourbières en été. Son nom latin signifie « brise-os » : les moutons qui en mangent ont les os fragiles.",
      "es": "Espigas de flores amarillas en forma de estrella iluminan las turberas en verano. Su nombre latino significa «rompehuesos» — debilita los huesos de las ovejas."
    }
  },
  {
    id: "bluebell",
    wiki: "Hyacinthoides_non-scripta",
    color: "#5e60ce",
    colorCategory: "blue",
    heightCm: 35,
    family: "Asparagus",
    familyLatin: "Asparagaceae",
    blooms: "Apr–May",
    where: ["Ancient woodlands", "Killarney NP (Kerry)", "Hedge banks"],
    names: {
      "en": "Bluebell",
      "zh-Hant": "藍鈴花",
      "zh-Hans": "蓝铃花",
      "yue": "藍鈴花",
      "fr": "Jacinthe des bois",
      "es": "Jacinto silvestre"
    },
    pronunciation: { pinyin: "lán líng huā", jyutping: "laam4 ling4 faa1" },
    latin: "Hyacinthoides non-scripta",
    description: {
      "en": "In April and May whole woods turn blue — millions of nodding bell-shaped flowers cover the floor. It's one of Ireland's most magical sights.",
      "zh-Hant": "四月、五月時整片森林變成藍色——成千上萬朵點頭的鈴鐺花鋪滿地面。是愛爾蘭最神奇的景色之一。",
      "zh-Hans": "四月、五月时整片森林变成蓝色——成千上万朵点头的铃铛花铺满地面。是爱尔兰最神奇的景色之一。",
      "yue": "四月、五月嗰陣成片森林變晒藍色——千千萬萬朵點頭嘅鈴鐺花鋪滿地下。係愛爾蘭最神奇嘅景色之一。",
      "fr": "En avril et mai, des forêts entières virent au bleu — des millions de petites cloches recouvrent le sol. L'un des spectacles les plus magiques d'Irlande.",
      "es": "En abril y mayo, bosques enteros se vuelven azules — millones de campanillas cubren el suelo. ¡Uno de los espectáculos más mágicos de Irlanda!"
    }
  },
  {
    id: "springgentian",
    wiki: "Gentiana_verna",
    color: "#1d6fb8",
    colorCategory: "blue",
    heightCm: 7,
    family: "Gentian",
    familyLatin: "Gentianaceae",
    blooms: "Apr–May",
    where: ["The Burren (Clare)", "Aran Islands (Galway)", "Limestone grassland"],
    names: {
      "en": "Spring Gentian",
      "zh-Hant": "春龍膽",
      "zh-Hans": "春龙胆",
      "yue": "春龍膽",
      "fr": "Gentiane printanière",
      "es": "Genciana de primavera"
    },
    pronunciation: { pinyin: "chūn lóng dǎn", jyutping: "ceon1 lung4 daam2" },
    latin: "Gentiana verna",
    description: {
      "en": "The most famous flower of the Burren — its electric-blue stars hug the limestone in April. Tiny but unforgettable!",
      "zh-Hant": "布倫地區最有名的花——電光藍的星星在四月貼著石灰岩開放。雖小卻令人難忘！",
      "zh-Hans": "布伦地区最有名的花——电光蓝的星星在四月贴着石灰岩开放。虽小却令人难忘！",
      "yue": "布倫地區最出名嘅花——電光藍嘅星星喺四月貼住石灰岩開花。雖然細細粒，但係令人難忘！",
      "fr": "La fleur la plus célèbre du Burren — ses étoiles bleu électrique se serrent contre le calcaire en avril. Minuscule mais inoubliable !",
      "es": "La flor más famosa del Burren — sus estrellas azul eléctrico se aferran a la caliza en abril. ¡Pequeña pero inolvidable!"
    }
  },
  {
    id: "harebell",
    wiki: "Campanula_rotundifolia",
    color: "#7d8df7",
    colorCategory: "blue",
    heightCm: 30,
    family: "Bellflower",
    familyLatin: "Campanulaceae",
    blooms: "Jul–Sep",
    where: ["Dry grassy banks", "Sand dunes", "Sea cliffs"],
    names: {
      "en": "Harebell",
      "zh-Hant": "圓葉風鈴草",
      "zh-Hans": "圆叶风铃草",
      "yue": "圓葉風鈴草",
      "fr": "Campanule à feuilles rondes",
      "es": "Campanilla azul"
    },
    pronunciation: { pinyin: "yuán yè fēng líng cǎo", jyutping: "jyun4 jip6 fung1 ling4 cou2" },
    latin: "Campanula rotundifolia",
    description: {
      "en": "Delicate pale-blue bells dance in the breeze on the thinnest of stems. In Ireland it's also called the \"Mearacán Sí\" — fairy thimbles.",
      "zh-Hant": "纖細的莖頂上，淡藍色的小鈴鐺在風中起舞。在愛爾蘭也叫做「Mearacán Sí」——仙女的頂針。",
      "zh-Hans": "纤细的茎顶上，淡蓝色的小铃铛在风中起舞。在爱尔兰也叫做「Mearacán Sí」——仙女的顶针。",
      "yue": "幼細嘅莖頂上面，淡藍色嘅小鈴鐺喺風中起舞。喺愛爾蘭又叫做「Mearacán Sí」——仙女嘅頂針。",
      "fr": "De fragiles clochettes bleu pâle dansent dans la brise sur les plus fines des tiges. En Irlande on l'appelle « Mearacán Sí » — les dés à coudre des fées.",
      "es": "Delicadas campanitas azul claro bailan en la brisa sobre tallos finísimos. En Irlanda se le llama «Mearacán Sí», los dedales de las hadas."
    }
  },
  {
    id: "germanderspeedwell",
    wiki: "Veronica_chamaedrys",
    color: "#4a90e2",
    colorCategory: "blue",
    heightCm: 25,
    family: "Plantain",
    familyLatin: "Plantaginaceae",
    blooms: "Apr–Jun",
    where: ["Hedgerows", "Grassy verges", "Woodland edges"],
    names: {
      "en": "Germander Speedwell",
      "zh-Hant": "婆婆納",
      "zh-Hans": "婆婆纳",
      "yue": "婆婆納",
      "fr": "Véronique petit-chêne",
      "es": "Verónica común"
    },
    pronunciation: { pinyin: "pó po nà", jyutping: "po4 po4 naap6" },
    latin: "Veronica chamaedrys",
    description: {
      "en": "Bright sky-blue flowers with a white centre, also called \"bird's-eye\" because they look like little eyes peeping at you from the hedge.",
      "zh-Hant": "鮮亮天藍色的花，中間是白色的，又叫「鳥眼花」——好像從樹籬偷看你的小眼睛。",
      "zh-Hans": "鲜亮天蓝色的花，中间是白色的，又叫「鸟眼花」——好像从树篱偷看你的小眼睛。",
      "yue": "鮮天藍色嘅花，中間白色，又叫「雀仔眼花」——好似喺樹籬偷望你嘅小眼睛。",
      "fr": "Des fleurs bleu ciel vif au cœur blanc, surnommées « œil-d'oiseau » car elles semblent te regarder depuis la haie.",
      "es": "Flores azul cielo brillante con centro blanco, también llamadas «ojo de pájaro» porque parecen ojitos espiándote desde el seto."
    }
  },
  {
    id: "bugle",
    wiki: "Ajuga_reptans",
    color: "#5a4a9c",
    colorCategory: "blue",
    heightCm: 20,
    family: "Mint",
    familyLatin: "Lamiaceae",
    blooms: "May–Jun",
    where: ["Damp woodlands", "Shady meadows", "Stream banks"],
    names: {
      "en": "Bugle",
      "zh-Hant": "匍匐筋骨草",
      "zh-Hans": "匍匐筋骨草",
      "yue": "匍匐筋骨草",
      "fr": "Bugle rampante",
      "es": "Búgula"
    },
    pronunciation: { pinyin: "pú fú jīn gǔ cǎo", jyutping: "pou4 fuk6 gan1 gwat1 cou2" },
    latin: "Ajuga reptans",
    description: {
      "en": "Spikes of deep blue-purple flowers stick up from a carpet of shiny leaves. Bees and butterflies love them in damp May woods.",
      "zh-Hant": "亮亮的葉子鋪成地毯，深藍紫色的花穗一根根冒出來。五月潮濕的森林裡，蜜蜂和蝴蝶最愛。",
      "zh-Hans": "亮亮的叶子铺成地毯，深蓝紫色的花穗一根根冒出来。五月潮湿的森林里，蜜蜂和蝴蝶最爱。",
      "yue": "光滑嘅葉鋪成地毯，深藍紫色嘅花穗一條條伸出嚟。五月潮濕嘅樹林度，蜜蜂同蝴蝶最鍾意。",
      "fr": "Des épis de fleurs bleu-violet foncé jaillissent d'un tapis de feuilles luisantes. Abeilles et papillons les adorent dans les bois humides de mai.",
      "es": "Espigas de flores azul-violeta intenso surgen de una alfombra de hojas brillantes. ¡A las abejas y mariposas les encantan en los bosques húmedos de mayo!"
    }
  },
  {
    id: "selfheal",
    wiki: "Prunella_vulgaris",
    color: "#9b59b6",
    colorCategory: "blue",
    heightCm: 20,
    family: "Mint",
    familyLatin: "Lamiaceae",
    blooms: "Jun–Sep",
    where: ["Lawns and short grass", "Roadsides", "Pasture"],
    names: {
      "en": "Self-heal",
      "zh-Hant": "夏枯草",
      "zh-Hans": "夏枯草",
      "yue": "夏枯草",
      "fr": "Brunelle commune",
      "es": "Consuelda menor"
    },
    pronunciation: { pinyin: "xià kū cǎo", jyutping: "haa6 fu1 cou2" },
    latin: "Prunella vulgaris",
    description: {
      "en": "Tough little purple flower-heads pop up in lawns and parks. People long ago thought it could heal cuts — that's how it got its name.",
      "zh-Hant": "草坪和公園裡會冒出一個個堅韌的紫色小花頭。從前的人以為它能治傷口——名字就是這樣來的。",
      "zh-Hans": "草坪和公园里会冒出一个个坚韧的紫色小花头。从前的人以为它能治伤口——名字就是这样来的。",
      "yue": "草坪同公園度會冒出一個個堅韌嘅紫色小花頭。以前啲人以為佢可以醫好傷口——個名就係咁嚟。",
      "fr": "De petites têtes florales violettes et résistantes pointent dans les pelouses. On croyait autrefois qu'elles guérissaient les coupures — d'où son nom.",
      "es": "Resistentes cabezuelas violetas asoman en céspedes y parques. Antes se creía que curaba cortes — ¡por eso se llama así!"
    }
  },
  {
    id: "knapweed",
    wiki: "Centaurea_nigra",
    color: "#9b59b6",
    colorCategory: "blue",
    heightCm: 70,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Jun–Sep",
    where: ["Hay meadows", "Roadside verges", "Old grasslands"],
    names: {
      "en": "Common Knapweed",
      "zh-Hant": "黑矢車菊",
      "zh-Hans": "黑矢车菊",
      "yue": "黑矢車菊",
      "fr": "Centaurée noire",
      "es": "Centaurea negra"
    },
    pronunciation: { pinyin: "hēi shǐ chē jú", jyutping: "hak1 ci2 ce1 guk1" },
    latin: "Centaurea nigra",
    description: {
      "en": "Like a small purple shaving brush on a wiry stem. Butterflies and bumblebees flock to it for nectar in summer meadows.",
      "zh-Hant": "像細莖上的紫色小刷子。夏天的草地裡，蝴蝶和大黃蜂為了花蜜成群來訪。",
      "zh-Hans": "像细茎上的紫色小刷子。夏天的草地里，蝴蝶和大黄蜂为了花蜜成群来访。",
      "yue": "好似細莖上面嘅紫色小刷子。夏天嘅草地度，蝴蝶同大黃蜂為咗花蜜成群嚟。",
      "fr": "Comme un petit blaireau violet sur une tige fine. Papillons et bourdons s'y précipitent pour le nectar dans les prairies estivales.",
      "es": "Como un pequeño cepillo morado sobre un tallo fino. ¡Mariposas y abejorros acuden a su néctar en los prados de verano!"
    }
  },
  {
    id: "devilsbitscabious",
    wiki: "Succisa_pratensis",
    color: "#5a4a9c",
    colorCategory: "blue",
    heightCm: 80,
    family: "Honeysuckle",
    familyLatin: "Caprifoliaceae",
    blooms: "Jul–Oct",
    where: ["Damp meadows", "Bog edges", "Roadside ditches"],
    names: {
      "en": "Devil's-bit Scabious",
      "zh-Hant": "山蘿蔔",
      "zh-Hans": "山萝卜",
      "yue": "山蘿蔔",
      "fr": "Succise des prés",
      "es": "Mordisco del diablo"
    },
    pronunciation: { pinyin: "shān luó bo", jyutping: "saan1 lo4 baak6" },
    latin: "Succisa pratensis",
    description: {
      "en": "Fluffy purple pin-cushion flowers in late summer. Legend says the devil bit off the long root in anger because the plant was too good at curing illness!",
      "zh-Hant": "夏末的毛茸茸紫色針墊花。傳說魔鬼因為這植物太會治病，憤怒地把它的長根咬斷了！",
      "zh-Hans": "夏末的毛茸茸紫色针垫花。传说魔鬼因为这植物太会治病，愤怒地把它的长根咬断了！",
      "yue": "夏末嘅毛茸茸紫色針墊花。傳說魔鬼覺得呢種植物太識醫病，嬲到將佢條長根咬斷晒！",
      "fr": "Des fleurs violettes en pelote d'épingles à la fin de l'été. La légende dit que le diable a mordu sa longue racine car la plante guérissait trop bien !",
      "es": "Flores violetas en forma de acerico al final del verano. La leyenda dice que el diablo le mordió la raíz porque curaba demasiadas enfermedades."
    }
  },
  {
    id: "forgetmenot",
    wiki: "Myosotis_scorpioides",
    color: "#4a90e2",
    colorCategory: "blue",
    heightCm: 30,
    family: "Borage",
    familyLatin: "Boraginaceae",
    blooms: "May–Sep",
    where: ["Stream and pond edges", "Wet ditches", "Damp meadows"],
    names: {
      "en": "Water Forget-me-not",
      "zh-Hant": "勿忘草",
      "zh-Hans": "勿忘草",
      "yue": "勿忘草",
      "fr": "Myosotis des marais",
      "es": "Nomeolvides de agua"
    },
    pronunciation: { pinyin: "wù wàng cǎo", jyutping: "mat6 mong4 cou2" },
    latin: "Myosotis scorpioides",
    description: {
      "en": "Tiny sky-blue flowers with a yellow eye, growing right at the edge of streams. The name says it all — once you see them, you never forget!",
      "zh-Hant": "淡藍色的小花，中央有個黃色小眼，長在溪邊。名字就說明一切——看過一次永遠不會忘！",
      "zh-Hans": "淡蓝色的小花，中央有个黄色小眼，长在溪边。名字就说明一切——看过一次永远不会忘！",
      "yue": "淡藍色嘅小花，中間有個黃色小眼，長喺溪邊。個名講晒——見過一次永世都唔會唔記得！",
      "fr": "De minuscules fleurs bleu ciel à l'œil jaune, juste au bord des ruisseaux. Le nom dit tout — une fois vues, on ne les oublie plus !",
      "es": "Florecitas azul cielo con un ojo amarillo, justo al borde de los arroyos. ¡El nombre lo dice todo: nunca las olvidarás!"
    }
  },
  {
    id: "vipersbugloss",
    wiki: "Echium_vulgare",
    color: "#1d6fb8",
    colorCategory: "blue",
    heightCm: 80,
    family: "Borage",
    familyLatin: "Boraginaceae",
    blooms: "Jun–Aug",
    where: ["Sand dunes", "Coastal grassland", "Dry rocky ground"],
    names: {
      "en": "Viper's Bugloss",
      "zh-Hant": "藍薊",
      "zh-Hans": "蓝蓟",
      "yue": "藍薊",
      "fr": "Vipérine commune",
      "es": "Viborera"
    },
    pronunciation: { pinyin: "lán jì", jyutping: "laam4 gai3" },
    latin: "Echium vulgare",
    description: {
      "en": "Tall spikes of brilliant blue flowers with red stamens that stick out like little snake tongues. People once thought it cured snake bites!",
      "zh-Hant": "高高的花穗開著鮮藍色的花，紅色的雄蕊伸出來像蛇的小舌頭。從前人以為它能治蛇咬！",
      "zh-Hans": "高高的花穗开着鲜蓝色的花，红色的雄蕊伸出来像蛇的小舌头。从前人以为它能治蛇咬！",
      "yue": "高高嘅花穗開鮮藍色嘅花，紅色嘅雄蕊伸出嚟好似蛇仔嘅舌頭。以前啲人以為佢可以醫蛇咬！",
      "fr": "De hauts épis de fleurs bleu vif avec des étamines rouges qui sortent comme des langues de serpent. On croyait qu'elle guérissait les morsures !",
      "es": "Altas espigas de flores azul intenso con estambres rojos que sobresalen como lenguas de serpiente. ¡Antes se creía que curaba sus mordeduras!"
    }
  },
  {
    id: "heather",
    wiki: "Calluna_vulgaris",
    color: "#a64da6",
    colorCategory: "blue",
    heightCm: 50,
    family: "Heath",
    familyLatin: "Ericaceae",
    blooms: "Jul–Sep",
    where: ["Wicklow Mountains", "Connemara (Galway)", "Heaths and bogs"],
    names: {
      "en": "Heather (Ling)",
      "zh-Hant": "帚石楠",
      "zh-Hans": "帚石楠",
      "yue": "帚石楠",
      "fr": "Bruyère commune (callune)",
      "es": "Brecina"
    },
    pronunciation: { pinyin: "zhǒu shí nán", jyutping: "zaau2 sek6 naam4" },
    latin: "Calluna vulgaris",
    description: {
      "en": "In late summer, whole mountains turn purple as heather blooms. A single sprig is said to bring good luck — keep one in your pocket!",
      "zh-Hant": "夏末時，石楠開花把整座山染成紫色。據說一小枝石楠能帶來好運——放一根在口袋裡吧！",
      "zh-Hans": "夏末时，石楠开花把整座山染成紫色。据说一小枝石楠能带来好运——放一根在口袋里吧！",
      "yue": "夏末嗰陣，石楠開花將成座山染成紫色。據講一條石楠枝可以帶嚟好運——放一條入袋啦！",
      "fr": "À la fin de l'été, des montagnes entières virent au violet quand la bruyère fleurit. Un brin porte-bonheur — glisse-en un dans ta poche !",
      "es": "A finales del verano, montañas enteras se vuelven moradas con la brecina. ¡Una ramita trae buena suerte — guárdala en el bolsillo!"
    }
  },
  {
    id: "bellheather",
    wiki: "Erica_cinerea",
    color: "#c44d8c",
    colorCategory: "blue",
    heightCm: 60,
    family: "Heath",
    familyLatin: "Ericaceae",
    blooms: "Jun–Sep",
    where: ["Dry heaths", "Rocky moors", "Cliff tops"],
    names: {
      "en": "Bell Heather",
      "zh-Hant": "灰歐石楠",
      "zh-Hans": "灰欧石楠",
      "yue": "灰歐石楠",
      "fr": "Bruyère cendrée",
      "es": "Brezo ceniciento"
    },
    pronunciation: { pinyin: "huī ōu shí nán", jyutping: "fui1 au1 sek6 naam4" },
    latin: "Erica cinerea",
    description: {
      "en": "Bigger, more bell-shaped flowers than common heather, in a richer purple-pink. Loves dry rocky ground, while ling prefers boggy ground.",
      "zh-Hant": "花比一般石楠大，更像鈴鐺形狀，紫粉色更濃。喜歡乾燥的岩石地，而帚石楠則愛沼澤地。",
      "zh-Hans": "花比一般石楠大，更像铃铛形状，紫粉色更浓。喜欢干燥的岩石地，而帚石楠则爱沼泽地。",
      "yue": "朵花比一般石楠大，更似鈴鐺形狀，紫粉色更濃。鍾意乾燥嘅岩石地，而帚石楠就鍾意沼澤地。",
      "fr": "Des fleurs plus grandes et plus en forme de cloche que la callune, d'un rose-violet plus intense. Préfère les sols rocheux secs.",
      "es": "Flores más grandes y campaniformes que la brecina, de rosa-violeta más intenso. Prefiere suelos rocosos y secos."
    }
  },
  {
    id: "milkwort",
    wiki: "Polygala_vulgaris",
    color: "#5a4a9c",
    colorCategory: "blue",
    heightCm: 25,
    family: "Milkwort",
    familyLatin: "Polygalaceae",
    blooms: "May–Sep",
    where: ["Burren grassland (Clare)", "Heaths", "Old meadows"],
    names: {
      "en": "Common Milkwort",
      "zh-Hant": "遠志",
      "zh-Hans": "远志",
      "yue": "遠志",
      "fr": "Polygale commun",
      "es": "Polígala común"
    },
    pronunciation: { pinyin: "yuǎn zhì", jyutping: "jyun5 zi3" },
    latin: "Polygala vulgaris",
    description: {
      "en": "Tiny flowers that come in blue, pink or white — sometimes all three colours grow together! The name comes from a belief it helped nursing mothers.",
      "zh-Hant": "小小的花有藍、粉、白三種顏色——有時三色一起長！名字來自人們相信它有助哺乳的媽媽。",
      "zh-Hans": "小小的花有蓝、粉、白三种颜色——有时三色一起长！名字来自人们相信它有助哺乳的妈妈。",
      "yue": "細細嘅花有藍色、粉紅色、白色三色——有時三色一齊開！個名來自以前啲人相信佢幫到餵奶嘅媽媽。",
      "fr": "De minuscules fleurs bleues, roses ou blanches — parfois les trois couleurs poussent ensemble ! On pensait qu'elle aidait les jeunes mamans.",
      "es": "Florecitas azules, rosas o blancas — ¡a veces los tres colores juntos! Se creía que ayudaba a las madres lactantes."
    }
  },
  {
    id: "wildthyme",
    wiki: "Thymus_serpyllum",
    color: "#a64da6",
    colorCategory: "blue",
    heightCm: 8,
    family: "Mint",
    familyLatin: "Lamiaceae",
    blooms: "Jun–Sep",
    where: ["Burren limestone (Clare)", "Sand dunes", "Cliff tops"],
    names: {
      "en": "Wild Thyme",
      "zh-Hant": "野百里香",
      "zh-Hans": "野百里香",
      "yue": "野百里香",
      "fr": "Serpolet",
      "es": "Tomillo serpol"
    },
    pronunciation: { pinyin: "yě bǎi lǐ xiāng", jyutping: "je5 baak3 lei5 hoeng1" },
    latin: "Thymus polytrichus",
    description: {
      "en": "Tiny pink-purple flowers in mats over the rocks. Crush a leaf — it smells just like the thyme used in cooking, only wilder.",
      "zh-Hant": "粉紫色的小花鋪在岩石上。捏一片葉子聞聞——和廚房用的百里香一樣，但更野！",
      "zh-Hans": "粉紫色的小花铺在岩石上。捏一片叶子闻闻——和厨房用的百里香一样，但更野！",
      "yue": "粉紫色嘅小花鋪喺石面。捏一塊葉聞下——同煮餸用嘅百里香一樣，不過更野味！",
      "fr": "De minuscules fleurs rose-violet en tapis sur les rochers. Froisse une feuille : elle sent le thym de cuisine, mais en plus sauvage !",
      "es": "Pequeñas flores rosa-violeta formando alfombras sobre las rocas. Aplasta una hoja: ¡huele al tomillo de cocina, pero más silvestre!"
    }
  },
  {
    id: "ivyleavedtoadflax",
    wiki: "Cymbalaria_muralis",
    color: "#9b59b6",
    colorCategory: "blue",
    heightCm: 10,
    family: "Plantain",
    familyLatin: "Plantaginaceae",
    blooms: "May–Sep",
    where: ["Old stone walls", "Castles and ruins", "Pavement cracks"],
    names: {
      "en": "Ivy-leaved Toadflax",
      "zh-Hant": "蔓柳穿魚",
      "zh-Hans": "蔓柳穿鱼",
      "yue": "蔓柳穿魚",
      "fr": "Cymbalaire des murs",
      "es": "Cimbalaria"
    },
    pronunciation: { pinyin: "màn liǔ chuān yú", jyutping: "maan6 lau5 cyun1 jyu4" },
    latin: "Cymbalaria muralis",
    description: {
      "en": "Tiny lilac flowers with a yellow lip, climbing up old stone walls. Once the flower is pollinated, the stem twists around to push the seeds into the wall!",
      "zh-Hant": "淡紫色的小花，下唇是黃色，爬在老石牆上。授粉後，花莖會轉向，把種子推進牆縫裡！",
      "zh-Hans": "淡紫色的小花，下唇是黄色，爬在老石墙上。授粉后，花茎会转向，把种子推进墙缝里！",
      "yue": "淡紫色嘅小花，下唇黃色，爬上老石牆。授完粉之後，花莖會反方向轉，將種子推入石牆嘅罅入面！",
      "fr": "De minuscules fleurs lilas à lèvre jaune qui escaladent les vieux murs. Une fois pollinisée, la tige se retourne pour pousser les graines dans le mur !",
      "es": "Pequeñas flores lilas con labio amarillo trepando por los muros antiguos. ¡Tras polinizarse, el tallo se retuerce para empujar las semillas a la pared!"
    }
  },
  {
    id: "tuftedvetch",
    wiki: "Vicia_cracca",
    color: "#5a4a9c",
    colorCategory: "blue",
    heightCm: 200,
    family: "Pea",
    familyLatin: "Fabaceae",
    blooms: "Jun–Aug",
    where: ["Hedgerows", "Roadside verges", "Meadows"],
    names: {
      "en": "Tufted Vetch",
      "zh-Hant": "廣布野豌豆",
      "zh-Hans": "广布野豌豆",
      "yue": "廣布野豌豆",
      "fr": "Vesce à épis",
      "es": "Veza vellosa"
    },
    pronunciation: { pinyin: "guǎng bù yě wān dòu", jyutping: "gwong2 bou3 je5 wun1 dau6" },
    latin: "Vicia cracca",
    description: {
      "en": "A scrambling climber with long spikes of bluish-purple pea flowers. It uses curly tendrils to hold on to other plants like a tiny rock-climber.",
      "zh-Hant": "攀爬類植物，長長的花穗開著藍紫色豆花。它用捲鬚抓住其他植物，像個小小攀岩家。",
      "zh-Hans": "攀爬类植物，长长的花穗开着蓝紫色豆花。它用卷须抓住其他植物，像个小小攀岩家。",
      "yue": "攀爬類嘅植物，長長嘅花穗開藍紫色豆花。佢會用捲鬚抓住其他植物，好似小小嘅攀石家。",
      "fr": "Une grimpante échevelée avec de longs épis de fleurs de pois bleu-violet. Elle utilise ses vrilles pour s'accrocher comme un petit grimpeur.",
      "es": "Una trepadora con largas espigas de flores azul-violeta tipo guisante. ¡Se aferra a otras plantas con sus zarcillos como un pequeño escalador!"
    }
  },
  {
    id: "butterwort",
    wiki: "Pinguicula_vulgaris",
    color: "#5a4a9c",
    colorCategory: "blue",
    heightCm: 12,
    family: "Bladderwort",
    familyLatin: "Lentibulariaceae",
    blooms: "May–Jul",
    where: ["Bogs and wet rocks", "Connemara (Galway)", "Wicklow upland flushes"],
    names: {
      "en": "Common Butterwort",
      "zh-Hant": "捕蟲堇",
      "zh-Hans": "捕虫堇",
      "yue": "捕蟲堇",
      "fr": "Grassette commune",
      "es": "Grasilla"
    },
    pronunciation: { pinyin: "bǔ chóng jǐn", jyutping: "bou6 cung4 gan2" },
    latin: "Pinguicula vulgaris",
    description: {
      "en": "A meat-eating plant! Its sticky yellow-green leaves trap small flies, which the plant slowly digests. The single violet flower stands above on a thin stem.",
      "zh-Hant": "食肉植物！黏黏的黃綠色葉子能黏住小蟲，慢慢消化。細莖頂上開著一朵紫羅蘭色的花。",
      "zh-Hans": "食肉植物！黏黏的黄绿色叶子能粘住小虫，慢慢消化。细茎顶上开着一朵紫罗兰色的花。",
      "yue": "食肉植物嚟㗎！黏黐黐嘅黃綠色葉可以黐住啲小蟲，慢慢消化。細莖頂上開一朵紫羅蘭色嘅花。",
      "fr": "Une plante carnivore ! Ses feuilles jaune-vert collantes piègent les petites mouches qu'elle digère lentement. Une fleur violette se dresse au-dessus.",
      "es": "¡Una planta carnívora! Sus hojas pegajosas amarillo-verdes atrapan moscas y las digieren lentamente. Encima, una flor violeta sobre un tallo fino."
    }
  },
  {
    id: "dogviolet",
    wiki: "Viola_riviniana",
    color: "#7d6bbf",
    colorCategory: "blue",
    heightCm: 15,
    family: "Violet",
    familyLatin: "Violaceae",
    blooms: "Apr–Jun",
    where: ["Woodland edges", "Hedge banks", "Old meadows"],
    names: {
      "en": "Common Dog-violet",
      "zh-Hant": "山堇菜",
      "zh-Hans": "山堇菜",
      "yue": "山堇菜",
      "fr": "Violette de Rivinus",
      "es": "Violeta de los perros"
    },
    pronunciation: { pinyin: "shān jǐn cài", jyutping: "saan1 gan2 coi3" },
    latin: "Viola riviniana",
    description: {
      "en": "Pretty purple-blue flowers in spring woods. \"Dog\" doesn't mean it smells of dog — it's an old word for \"common\" because this violet has no scent.",
      "zh-Hant": "春天森林裡的紫藍色小花。「狗」不是說它有狗味——這是古代「普通」的意思，因為這種紫羅蘭沒香味。",
      "zh-Hans": "春天森林里的紫蓝色小花。「狗」不是说它有狗味——这是古代「普通」的意思，因为这种紫罗兰没香味。",
      "yue": "春天樹林入面嘅紫藍色小花。「狗」唔係話佢有狗味——係古時「普通」嘅意思，因為呢種紫羅蘭冇香味。",
      "fr": "De jolies fleurs bleu-violet dans les bois au printemps. « De chien » ne veut pas dire qu'elle sent le chien — c'est un vieux mot pour « ordinaire ».",
      "es": "Bonitas flores violeta-azuladas en los bosques de primavera. «De perro» no significa que huela a perro — es una palabra antigua para «común»."
    }
  },
  {
    id: "woodanemone",
    wiki: "Anemone_nemorosa",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 15,
    family: "Buttercup",
    familyLatin: "Ranunculaceae",
    blooms: "Mar–May",
    where: ["Ancient woodland floors", "Old hedge banks", "Killarney NP (Kerry)"],
    names: {
      "en": "Wood Anemone",
      "zh-Hant": "林銀蓮花",
      "zh-Hans": "林银莲花",
      "yue": "林銀蓮花",
      "fr": "Anémone des bois",
      "es": "Anémona de los bosques"
    },
    pronunciation: { pinyin: "lín yín lián huā", jyutping: "lam4 ngan4 lin4 faa1" },
    latin: "Anemone nemorosa",
    description: {
      "en": "A starry white flower (sometimes pink-tinged) that nods in spring breezes. The Greek name means \"daughter of the wind\".",
      "zh-Hant": "春風中點頭的白色星形小花（有時帶粉紅）。希臘文名字的意思是「風之女兒」。",
      "zh-Hans": "春风中点头的白色星形小花（有时带粉红）。希腊文名字的意思是「风之女儿」。",
      "yue": "春風入面點頭嘅白色星形小花（有時帶粉紅）。希臘文個名意思係「風嘅女兒」。",
      "fr": "Une fleur blanche en étoile (parfois rosée) qui salue dans la brise printanière. Son nom grec signifie « fille du vent ».",
      "es": "Una flor blanca estrellada (a veces rosada) que se mece con la brisa primaveral. Su nombre griego significa «hija del viento»."
    }
  },
  {
    id: "daisy",
    wiki: "Bellis_perennis",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 12,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Mar–Oct",
    where: ["Lawns and parks", "Anywhere with grass", "Schoolyards"],
    names: {
      "en": "Common Daisy",
      "zh-Hant": "雛菊",
      "zh-Hans": "雏菊",
      "yue": "雛菊",
      "fr": "Pâquerette",
      "es": "Margarita común"
    },
    pronunciation: { pinyin: "chú jú", jyutping: "co1 guk1" },
    latin: "Bellis perennis",
    description: {
      "en": "White petals around a yellow eye, the perfect flower for daisy chains. The name comes from \"day's eye\" — they close their petals at night!",
      "zh-Hant": "黃色花心圍著白色花瓣，最適合做雛菊花環。名字來自「白晝之眼」——它們晚上會合上花瓣！",
      "zh-Hans": "黄色花心围着白色花瓣，最适合做雏菊花环。名字来自「白昼之眼」——它们晚上会合上花瓣！",
      "yue": "黃色花心周圍係白色花瓣，最啱用嚟整雛菊花環。個名嚟自「日頭之眼」——佢哋夜晚會合埋花瓣！",
      "fr": "Des pétales blancs autour d'un cœur jaune, parfaits pour faire des colliers. Le nom vient de « œil du jour » — elles ferment leurs pétales la nuit !",
      "es": "Pétalos blancos alrededor de un ojo amarillo, perfecta para hacer collares. El nombre viene de «ojo del día» — ¡cierran sus pétalos por la noche!"
    }
  },
  {
    id: "oxeyedaisy",
    wiki: "Leucanthemum_vulgare",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 70,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "May–Sep",
    where: ["Hay meadows", "Roadside verges", "Wildflower banks"],
    names: {
      "en": "Ox-eye Daisy",
      "zh-Hant": "牛眼菊",
      "zh-Hans": "牛眼菊",
      "yue": "牛眼菊",
      "fr": "Marguerite commune",
      "es": "Margarita mayor"
    },
    pronunciation: { pinyin: "niú yǎn jú", jyutping: "ngau4 ngaan5 guk1" },
    latin: "Leucanthemum vulgare",
    description: {
      "en": "The big sister of the lawn daisy — much taller, with bigger flowers that look like little white suns waving in the breeze.",
      "zh-Hant": "草坪雛菊的大姊姊——高很多，花也大，像在風中招手的白色小太陽。",
      "zh-Hans": "草坪雏菊的大姐姐——高很多，花也大，像在风中招手的白色小太阳。",
      "yue": "草地雛菊嘅大家姐——高好多，花又大，好似喺風中揮手嘅白色小太陽。",
      "fr": "La grande sœur de la pâquerette — bien plus grande, avec des fleurs comme de petits soleils blancs qui saluent dans la brise.",
      "es": "La hermana mayor de la margarita común — más alta, con flores más grandes que parecen pequeños soles blancos."
    }
  },
  {
    id: "stitchwort",
    wiki: "Stellaria_holostea",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 50,
    family: "Pink",
    familyLatin: "Caryophyllaceae",
    blooms: "Apr–Jun",
    where: ["Hedge banks", "Woodland edges", "Country lanes"],
    names: {
      "en": "Greater Stitchwort",
      "zh-Hant": "大繁縷",
      "zh-Hans": "大繁缕",
      "yue": "大繁縷",
      "fr": "Stellaire holostée",
      "es": "Estrellada"
    },
    pronunciation: { pinyin: "dà fán lǚ", jyutping: "daai6 faan4 leoi5" },
    latin: "Stellaria holostea",
    description: {
      "en": "Bright white star-shaped flowers along country lanes in May. Each petal is split halfway down so it looks like ten petals — but really there are only five!",
      "zh-Hant": "五月鄉間小路上鮮白色的星形花。每片花瓣中間裂開，看起來像十片——其實只有五片！",
      "zh-Hans": "五月乡间小路上鲜白色的星形花。每片花瓣中间裂开，看起来像十片——其实只有五片！",
      "yue": "五月鄉間小路邊鮮白色嘅星形花。每塊花瓣中間裂開，望落好似十塊——其實得五塊咋！",
      "fr": "De brillantes fleurs blanches en étoile au long des chemins en mai. Chaque pétale est fendu : on dirait dix, mais il n'y en a que cinq !",
      "es": "Brillantes flores blancas en forma de estrella en los caminos rurales en mayo. Cada pétalo está hendido — ¡parecen diez pero solo son cinco!"
    }
  },
  {
    id: "whitewaterlily",
    wiki: "Nymphaea_alba",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 5,
    family: "Water-lily",
    familyLatin: "Nymphaeaceae",
    blooms: "Jun–Sep",
    where: ["Lakes and slow rivers", "Killarney lakes", "Bog pools"],
    names: {
      "en": "White Water-lily",
      "zh-Hant": "白睡蓮",
      "zh-Hans": "白睡莲",
      "yue": "白睡蓮",
      "fr": "Nénuphar blanc",
      "es": "Nenúfar blanco"
    },
    pronunciation: { pinyin: "bái shuì lián", jyutping: "baak6 seoi6 lin4" },
    latin: "Nymphaea alba",
    description: {
      "en": "Huge white flowers float on lakes among round green pads. They open in the morning and close again at night — like a flower that needs sleep!",
      "zh-Hant": "巨大的白花漂在湖面，旁邊是圓圓的綠葉。早上開花，晚上又合起來——像會睡覺的花！",
      "zh-Hans": "巨大的白花漂在湖面，旁边是圆圆的绿叶。早上开花，晚上又合起来——像会睡觉的花！",
      "yue": "好大朵嘅白花浮喺湖面，旁邊係圓圓嘅綠葉。朝早開花，夜晚又合埋——好似會瞓覺嘅花！",
      "fr": "D'énormes fleurs blanches flottent sur les lacs au milieu de feuilles rondes. Elles s'ouvrent le matin et se referment la nuit — une fleur qui dort !",
      "es": "Enormes flores blancas flotan en los lagos entre hojas redondas. Se abren por la mañana y se cierran por la noche — ¡como si durmieran!"
    }
  },
  {
    id: "hawthorn",
    wiki: "Crataegus_monogyna",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 1000,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "May",
    where: ["Hedges everywhere", "Field boundaries", "Old farmland"],
    names: {
      "en": "Hawthorn (May Blossom)",
      "zh-Hant": "山楂",
      "zh-Hans": "山楂",
      "yue": "山楂",
      "fr": "Aubépine monogyne",
      "es": "Espino blanco"
    },
    pronunciation: { pinyin: "shān zhā", jyutping: "saan1 zaa1" },
    latin: "Crataegus monogyna",
    description: {
      "en": "When hawthorn blooms, all the hedges turn snowy white in May. In Ireland it's called the \"fairy tree\" — many people refuse to cut it down for fear of bad luck.",
      "zh-Hant": "山楂開花時，五月的樹籬全變成雪白。愛爾蘭人叫它「仙女樹」——很多人不敢砍，怕招來厄運。",
      "zh-Hans": "山楂开花时，五月的树篱全变成雪白。爱尔兰人叫它「仙女树」——很多人不敢砍，怕招来厄运。",
      "yue": "山楂開花嗰陣，五月嘅樹籬全部變成雪白。愛爾蘭人叫佢做「仙女樹」——好多人唔敢砍，驚招霉運。",
      "fr": "Quand l'aubépine fleurit, toutes les haies deviennent neigeuses en mai. En Irlande, c'est l'« arbre des fées » — beaucoup refusent de la couper.",
      "es": "Cuando florece el espino, los setos se vuelven blancos en mayo. En Irlanda se le llama «árbol de las hadas» — ¡da mala suerte cortarlo!"
    }
  },
  {
    id: "blackthorn",
    wiki: "Prunus_spinosa",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 400,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "Mar–Apr",
    where: ["Hedgerows", "Field edges", "Scrubland"],
    names: {
      "en": "Blackthorn",
      "zh-Hant": "黑刺李",
      "zh-Hans": "黑刺李",
      "yue": "黑刺李",
      "fr": "Prunellier",
      "es": "Endrino"
    },
    pronunciation: { pinyin: "hēi cì lǐ", jyutping: "hak1 ci3 lei5" },
    latin: "Prunus spinosa",
    description: {
      "en": "Tiny snow-white flowers come out before the leaves, on a thorny black-barked bush. In autumn, dark blue sloes follow — used to flavour sloe gin!",
      "zh-Hant": "在葉子長出來之前，黑色樹皮的多刺灌木上先開出雪白小花。秋天結出深藍色的黑刺李果——用來做黑刺李琴酒！",
      "zh-Hans": "在叶子长出来之前，黑色树皮的多刺灌木上先开出雪白小花。秋天结出深蓝色的黑刺李果——用来做黑刺李琴酒！",
      "yue": "葉未長出嚟之前，黑色樹皮嘅多刺灌木已經開咗雪白嘅小花。秋天結深藍色嘅果——用嚟整黑刺李金酒！",
      "fr": "De minuscules fleurs blanc neige sortent avant les feuilles, sur un buisson à écorce noire et épines. En automne, des prunelles bleu foncé pour le gin !",
      "es": "Diminutas flores blancas salen antes que las hojas, en un arbusto espinoso de corteza oscura. ¡En otoño, endrinas azules para hacer ginebra!"
    }
  },
  {
    id: "wildgarlic",
    wiki: "Allium_ursinum",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 35,
    family: "Amaryllis",
    familyLatin: "Amaryllidaceae",
    blooms: "Apr–Jun",
    where: ["Damp woods", "Killarney NP (Kerry)", "Shaded river banks"],
    names: {
      "en": "Wild Garlic (Ramsons)",
      "zh-Hant": "熊蔥",
      "zh-Hans": "熊葱",
      "yue": "熊蔥",
      "fr": "Ail des ours",
      "es": "Ajo de oso"
    },
    pronunciation: { pinyin: "xióng cōng", jyutping: "hung4 cung1" },
    latin: "Allium ursinum",
    description: {
      "en": "Whole woods smell of garlic in spring! Carpets of broad green leaves hold up bursts of white star-flowers. Every part is edible (with adult help).",
      "zh-Hant": "春天整片森林都飄著大蒜味！寬寬的綠葉鋪滿地面，上面綻放著一束束白色星形花。整株可以食用（要有大人陪同）。",
      "zh-Hans": "春天整片森林都飘着大蒜味！宽宽的绿叶铺满地面，上面绽放着一束束白色星形花。整株可以食用（要有大人陪同）。",
      "yue": "春天成個樹林都係蒜頭味！闊闊嘅綠葉鋪滿地下，上面開白色星形花。全棵都可以食（要有大人陪同）。",
      "fr": "Les bois sentent l'ail au printemps ! Des tapis de larges feuilles vertes portent des bouquets de fleurs blanches en étoile. Tout est comestible (avec un adulte).",
      "es": "¡Los bosques huelen a ajo en primavera! Alfombras de hojas verdes anchas sostienen ramos de flores blancas estrelladas. Todo es comestible (con un adulto)."
    }
  },
  {
    id: "cowparsley",
    wiki: "Anthriscus_sylvestris",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 130,
    family: "Carrot",
    familyLatin: "Apiaceae",
    blooms: "Apr–Jun",
    where: ["Roadside verges", "Country lanes", "Hedge banks"],
    names: {
      "en": "Cow Parsley",
      "zh-Hant": "峨參",
      "zh-Hans": "峨参",
      "yue": "峨參",
      "fr": "Cerfeuil sauvage",
      "es": "Perifollo verde"
    },
    pronunciation: { pinyin: "é shēn", jyutping: "ngo4 sam1" },
    latin: "Anthriscus sylvestris",
    description: {
      "en": "Frothy white \"lace\" lining country lanes in May, like the roadside is dressed for a wedding! Don't confuse it with the (very poisonous) hemlock.",
      "zh-Hant": "五月鄉間小路兩旁的白色蕾絲泡沫，像路邊穿上了婚紗！不要和有毒的毒參搞錯了。",
      "zh-Hans": "五月乡间小路两旁的白色蕾丝泡沫，像路边穿上了婚纱！不要和有毒的毒参搞错了。",
      "yue": "五月鄉間小路兩邊嘅白色花邊泡沫，好似條路著咗婚紗咁！唔好同有毒嘅毒芹搞錯。",
      "fr": "Une dentelle blanche mousseuse borde les chemins en mai — on dirait des routes en habit de mariage ! Ne pas confondre avec la ciguë toxique.",
      "es": "Encajes blancos espumosos bordean los caminos en mayo — ¡como si la carretera se hubiera vestido de novia! No confundir con la cicuta venenosa."
    }
  },
  {
    id: "wildcarrot",
    wiki: "Daucus_carota",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 100,
    family: "Carrot",
    familyLatin: "Apiaceae",
    blooms: "Jun–Aug",
    where: ["Coastal grasslands", "Old meadows", "Sandy ground"],
    names: {
      "en": "Wild Carrot (Queen Anne's Lace)",
      "zh-Hant": "野胡蘿蔔",
      "zh-Hans": "野胡萝卜",
      "yue": "野胡蘿蔔",
      "fr": "Carotte sauvage",
      "es": "Zanahoria silvestre"
    },
    pronunciation: { pinyin: "yě hú luó bo", jyutping: "je5 wu4 lo4 baak6" },
    latin: "Daucus carota",
    description: {
      "en": "Lacy white flower-discs with a tiny dark red flower right in the middle — said to be a drop of the queen's blood! As the seeds ripen, the disc curls into a bird's nest shape.",
      "zh-Hant": "蕾絲狀的白色花盤，中間有一朵深紅色小花——傳說是女王的一滴血！種子成熟時，花盤會捲成鳥巢狀。",
      "zh-Hans": "蕾丝状的白色花盘，中间有一朵深红色小花——传说是女王的一滴血！种子成熟时，花盘会卷成鸟巢状。",
      "yue": "花邊狀嘅白色花盤，正中間有一朵深紅色嘅小花——傳說係女王嘅一滴血！種子熟咗，花盤會捲成雀巢咁。",
      "fr": "Des disques de fleurs blanches en dentelle, avec une minuscule fleur rouge foncé au centre — la goutte de sang de la reine ! Le disque se referme en nid à maturité.",
      "es": "Discos de encaje de flores blancas con una diminuta flor rojo oscuro en el centro — ¡dicen que es una gota de sangre de la reina! Al madurar se cierra como un nido."
    }
  },
  {
    id: "mountainavens",
    wiki: "Dryas_octopetala",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 8,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "May–Jun",
    where: ["The Burren (Clare)", "Limestone pavements", "Aran Islands"],
    names: {
      "en": "Mountain Avens",
      "zh-Hant": "仙女木",
      "zh-Hans": "仙女木",
      "yue": "仙女木",
      "fr": "Dryade à huit pétales",
      "es": "Dríada"
    },
    pronunciation: { pinyin: "xiān nǚ mù", jyutping: "sin1 neoi5 muk6" },
    latin: "Dryas octopetala",
    description: {
      "en": "A tiny Arctic survivor that grows on the Burren limestone. Its eight white petals open like a star, and the seed-heads later spin into silvery feathery balls.",
      "zh-Hant": "一種北極倖存者，長在布倫的石灰岩上。八片白色花瓣像星星打開，種子後來會旋轉成銀色羽毛球。",
      "zh-Hans": "一种北极幸存者，长在布伦的石灰岩上。八片白色花瓣像星星打开，种子后来会旋转成银色羽毛球。",
      "yue": "一種北極倖存植物，生長喺布倫嘅石灰岩上面。八塊白色花瓣好似星星咁打開，種子之後會旋轉成銀色羽毛球。",
      "fr": "Une petite survivante arctique qui pousse sur le calcaire du Burren. Ses huit pétales blancs s'ouvrent en étoile, et les graines forment des plumets argentés.",
      "es": "Una pequeña superviviente del Ártico que crece en la caliza del Burren. Sus ocho pétalos blancos forman una estrella, y las semillas son plumas plateadas."
    }
  },
  {
    id: "meadowsweet",
    wiki: "Filipendula_ulmaria",
    color: "#fff8d6",
    colorCategory: "white",
    heightCm: 120,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "Jun–Sep",
    where: ["Wet meadows", "Stream banks", "Roadside ditches"],
    names: {
      "en": "Meadowsweet",
      "zh-Hant": "旋果蚊子草",
      "zh-Hans": "旋果蚊子草",
      "yue": "旋果蚊子草",
      "fr": "Reine-des-prés",
      "es": "Reina de los prados"
    },
    pronunciation: { pinyin: "xuán guǒ wén zi cǎo", jyutping: "syun4 gwo2 man1 zi2 cou2" },
    latin: "Filipendula ulmaria",
    description: {
      "en": "Frothy creamy-white clouds of flowers smell like sweet almond and honey. The chemical that became aspirin was first found in this plant!",
      "zh-Hant": "毛茸茸的奶白色花團，散發出杏仁和蜂蜜的甜香。阿斯匹靈最早就是從這種植物裡發現的！",
      "zh-Hans": "毛茸茸的奶白色花团，散发出杏仁和蜂蜜的甜香。阿司匹林最早就是从这种植物里发现的！",
      "yue": "毛茸茸嘅奶白色花團，散發出杏仁同蜂蜜嘅甜香。阿士匹靈最初就係喺呢種植物入面發現㗎！",
      "fr": "Des nuages mousseux blanc-crème qui sentent l'amande sucrée et le miel. La molécule qui a donné l'aspirine y a été découverte !",
      "es": "Nubes esponjosas color crema que huelen a almendra dulce y miel. ¡El compuesto que dio origen a la aspirina se descubrió en esta planta!"
    }
  },
  {
    id: "cuckooflower",
    wiki: "Cardamine_pratensis",
    color: "#f0e6f6",
    colorCategory: "white",
    heightCm: 50,
    family: "Cabbage",
    familyLatin: "Brassicaceae",
    blooms: "Apr–May",
    where: ["Damp meadows", "Stream sides", "Wet roadside ditches"],
    names: {
      "en": "Cuckoo Flower (Lady's Smock)",
      "zh-Hant": "草甸碎米薺",
      "zh-Hans": "草甸碎米荠",
      "yue": "草甸碎米薺",
      "fr": "Cardamine des prés",
      "es": "Berro de prado"
    },
    pronunciation: { pinyin: "cǎo diàn suì mǐ jì", jyutping: "cou2 din6 seoi3 mai5 zai6" },
    latin: "Cardamine pratensis",
    description: {
      "en": "Pale lilac four-petalled flowers in damp meadows, blooming around the time the first cuckoo is heard in spring — that's how it got its name!",
      "zh-Hant": "潮濕草地上的淡丁香色四瓣花，開花的時間正好是春天第一聲布穀鳥叫的時候——名字就是這樣來的！",
      "zh-Hans": "潮湿草地上的淡丁香色四瓣花，开花的时间正好是春天第一声布谷鸟叫的时候——名字就是这样来的！",
      "yue": "潮濕草地上嘅淡紫丁香色四瓣花，開花嗰陣啱啱係春天第一聲布穀叫——個名就係咁嚟！",
      "fr": "De pâles fleurs lilas à quatre pétales dans les prés humides, qui éclosent vers le moment où le coucou chante au printemps — d'où son nom !",
      "es": "Flores lilas pálidas de cuatro pétalos en prados húmedos, que florecen cuando se oye el primer cuco de primavera — ¡por eso su nombre!"
    }
  },
  {
    id: "snowdrop",
    wiki: "Galanthus_nivalis",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 18,
    family: "Amaryllis",
    familyLatin: "Amaryllidaceae",
    blooms: "Jan–Mar",
    where: ["Old gardens and demesnes", "Woodland edges", "Churchyards"],
    names: {
      "en": "Snowdrop",
      "zh-Hant": "雪花蓮",
      "zh-Hans": "雪花莲",
      "yue": "雪花蓮",
      "fr": "Perce-neige",
      "es": "Campanilla de invierno"
    },
    pronunciation: { pinyin: "xuě huā lián", jyutping: "syut3 faa1 lin4" },
    latin: "Galanthus nivalis",
    description: {
      "en": "The very first flower of the year! Tiny white drops that push up through frosty soil in January — a sign that spring is on its way.",
      "zh-Hant": "一年中最早開的花！白色的小水滴在一月從結霜的土地裡冒出來——是春天即將到來的訊號。",
      "zh-Hans": "一年中最早开的花！白色的小水滴在一月从结霜的土地里冒出来——是春天即将到来的讯号。",
      "yue": "一年最早開嘅花！白色嘅小水滴喺一月由結霜嘅泥土度伸出嚟——係春天就嚟到嘅訊號。",
      "fr": "La toute première fleur de l'année ! De minuscules gouttes blanches percent le sol gelé en janvier — un signe que le printemps arrive.",
      "es": "¡La primera flor del año! Diminutas gotas blancas atraviesan la tierra helada en enero — ¡el primer signo de la primavera!"
    }
  },
  {
    id: "bogcotton",
    wiki: "Eriophorum_angustifolium",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 60,
    family: "Sedge",
    familyLatin: "Cyperaceae",
    blooms: "May–Jun",
    where: ["Bogs everywhere", "Wild Nephin (Mayo)", "Connemara (Galway)"],
    names: {
      "en": "Common Cottongrass (Bog Cotton)",
      "zh-Hant": "羊鬍子草",
      "zh-Hans": "羊胡子草",
      "yue": "羊鬍子草",
      "fr": "Linaigrette à feuilles étroites",
      "es": "Algodón de turbera"
    },
    pronunciation: { pinyin: "yáng hú zi cǎo", jyutping: "joeng4 wu4 zi2 cou2" },
    latin: "Eriophorum angustifolium",
    description: {
      "en": "Fluffy white tufts dance over Irish bogs in early summer — like little balls of cotton wool. People once stuffed pillows with it!",
      "zh-Hant": "夏初的愛爾蘭沼澤上，毛茸茸的白絮在風中飛舞——像一團團小棉花。從前的人用它填枕頭！",
      "zh-Hans": "夏初的爱尔兰沼泽上，毛茸茸的白絮在风中飞舞——像一团团小棉花。从前的人用它填枕头！",
      "yue": "夏初嘅愛爾蘭沼澤上面，毛茸茸嘅白絮喺風中飛舞——好似一團團棉花。以前啲人用佢嚟塞枕頭！",
      "fr": "De petites houppes blanches dansent sur les tourbières au début de l'été — comme des boules de coton. Autrefois, on en bourrait les oreillers !",
      "es": "Penachos blancos esponjosos bailan sobre las turberas a principios del verano — como bolitas de algodón. ¡Antes rellenaban almohadas!"
    }
  },
  {
    id: "lilyofthevalley",
    wiki: "Convallaria_majalis",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 25,
    family: "Asparagus",
    familyLatin: "Asparagaceae",
    blooms: "May–Jun",
    poison: true,
    where: ["Old woodland (rare)", "Garden escapes", "Limestone scrub"],
    names: {
      "en": "Lily of the Valley",
      "zh-Hant": "鈴蘭",
      "zh-Hans": "铃兰",
      "yue": "鈴蘭",
      "fr": "Muguet",
      "es": "Lirio de los valles"
    },
    pronunciation: { pinyin: "líng lán", jyutping: "ling4 laan4" },
    latin: "Convallaria majalis",
    description: {
      "en": "Tiny white bells along an arched stem with a sweet, sweet smell. Beautiful but very poisonous — only look, never taste!",
      "zh-Hant": "拱形莖上掛著小小的白色鈴鐺，香味甜甜的。漂亮卻有劇毒——只看不要嚐！",
      "zh-Hans": "拱形茎上挂着小小的白色铃铛，香味甜甜的。漂亮却有剧毒——只看不要尝！",
      "yue": "拱形莖上面掛住細細嘅白色鈴鐺，個味好甜。雖然好靚但有劇毒——淨係望就好，唔好試！",
      "fr": "De minuscules clochettes blanches sur une tige arquée, au parfum très sucré. Très belle mais très toxique — regarde sans jamais y goûter !",
      "es": "Diminutas campanillas blancas en un tallo arqueado, con olor dulcísimo. ¡Hermosa pero muy tóxica — mira pero no la toques ni la pruebes!"
    }
  },
  {
    id: "bogbean",
    wiki: "Menyanthes_trifoliata",
    color: "#fbe9ee",
    colorCategory: "white",
    heightCm: 30,
    family: "Bogbean",
    familyLatin: "Menyanthaceae",
    blooms: "Apr–Jun",
    where: ["Bog pools", "Lake edges", "Wet ditches"],
    names: {
      "en": "Bogbean",
      "zh-Hant": "睡菜",
      "zh-Hans": "睡菜",
      "yue": "睡菜",
      "fr": "Trèfle d'eau",
      "es": "Trébol de agua"
    },
    pronunciation: { pinyin: "shuì cài", jyutping: "seoi6 coi3" },
    latin: "Menyanthes trifoliata",
    description: {
      "en": "Spikes of fluffy starry flowers, pink in bud and white inside, fringed with feathery hairs. The leaves look just like big bean leaves floating on water.",
      "zh-Hant": "毛茸茸的星形花穗，花苞粉色裡面白色，邊緣有羽毛狀的細毛。葉子像浮在水上的大豆葉。",
      "zh-Hans": "毛茸茸的星形花穗，花苞粉色里面白色，边缘有羽毛状的细毛。叶子像浮在水上的大豆叶。",
      "yue": "毛茸茸嘅星形花穗，花蕾粉紅色裡面白色，邊緣有羽毛狀嘅細毛。啲葉好似浮喺水面嘅大豆葉。",
      "fr": "Des épis de fleurs en étoile duveteuses, roses en bouton et blanches à l'intérieur, frangées de poils plumeux. Les feuilles flottent comme de grandes feuilles de haricot.",
      "es": "Espigas de flores estrelladas y peludas, rosadas en capullo y blancas por dentro, con flecos plumosos. Las hojas flotan como grandes hojas de haba."
    }
  },
  {
    id: "roundleavedsundew",
    wiki: "Drosera_rotundifolia",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 12,
    family: "Sundew",
    familyLatin: "Droseraceae",
    blooms: "Jun–Aug",
    where: ["Wet bogs", "Wild Nephin (Mayo)", "Wicklow blanket bog"],
    names: {
      "en": "Round-leaved Sundew",
      "zh-Hant": "圓葉茅膏菜",
      "zh-Hans": "圆叶茅膏菜",
      "yue": "圓葉茅膏菜",
      "fr": "Rossolis à feuilles rondes",
      "es": "Rocío del sol"
    },
    pronunciation: { pinyin: "yuán yè máo gāo cài", jyutping: "jyun4 jip6 maau4 gou1 coi3" },
    latin: "Drosera rotundifolia",
    description: {
      "en": "Another carnivorous plant! Round red leaves are covered with sticky hairs that glisten like dewdrops. Insects get stuck — and then eaten!",
      "zh-Hant": "另一種食肉植物！圓圓的紅葉上長著黏黏的細毛，閃亮得像露珠。蟲子黏住後會被吃掉！",
      "zh-Hans": "另一种食肉植物！圆圆的红叶上长着黏黏的细毛，闪亮得像露珠。虫子黏住后会被吃掉！",
      "yue": "另一種食肉植物！圓圓嘅紅葉上面長住黐黐嘅細毛，閃到好似露珠咁。啲蟲黐住之後就會畀佢食咗！",
      "fr": "Encore une plante carnivore ! Les feuilles rondes rouges sont couvertes de poils collants qui brillent comme des gouttes de rosée. Les insectes y restent collés — et sont mangés !",
      "es": "¡Otra planta carnívora! Sus hojas rojas redondas tienen pelos pegajosos que brillan como rocío. Los insectos se quedan pegados — ¡y son devorados!"
    }
  },
  {
    id: "seacampion",
    wiki: "Silene_uniflora",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 25,
    family: "Pink",
    familyLatin: "Caryophyllaceae",
    blooms: "May–Aug",
    where: ["Sea cliffs", "Cliffs of Moher (Clare)", "Shingle beaches"],
    names: {
      "en": "Sea Campion",
      "zh-Hant": "海濱蠅子草",
      "zh-Hans": "海滨蝇子草",
      "yue": "海濱蠅子草",
      "fr": "Silène maritime",
      "es": "Colleja marina"
    },
    pronunciation: { pinyin: "hǎi bīn yíng zi cǎo", jyutping: "hoi2 ban1 jing4 zi2 cou2" },
    latin: "Silene uniflora",
    description: {
      "en": "Pretty white flowers with a balloon-like puffed-up calyx behind each one. Grows in cushions on windy sea cliffs all summer.",
      "zh-Hant": "漂亮的白花，每朵後面都有一個像氣球一樣鼓起的花萼。整個夏天，在多風的海崖上長成軟墊狀。",
      "zh-Hans": "漂亮的白花，每朵后面都有一个像气球一样鼓起的花萼。整个夏天，在多风的海崖上长成软垫状。",
      "yue": "漂亮嘅白花，每朵後面都有個好似氣球咁鼓起嘅花萼。成個夏天喺多風嘅海崖度長成軟墊咁。",
      "fr": "De jolies fleurs blanches avec un calice gonflé comme un ballon derrière chacune. Elle pousse en coussins sur les falaises venteuses tout l'été.",
      "es": "Bonitas flores blancas con un cáliz hinchado como un globo detrás de cada una. ¡Crece en cojines en los acantilados ventosos todo el verano!"
    }
  },
  {
    id: "whiteclover",
    wiki: "Trifolium_repens",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 20,
    family: "Pea",
    familyLatin: "Fabaceae",
    blooms: "May–Sep",
    where: ["Lawns and parks", "Pasture", "Roadside grass"],
    names: {
      "en": "White Clover",
      "zh-Hant": "白三葉草",
      "zh-Hans": "白三叶草",
      "yue": "白三葉草",
      "fr": "Trèfle blanc",
      "es": "Trébol blanco"
    },
    pronunciation: { pinyin: "bái sān yè cǎo", jyutping: "baak6 saam1 jip6 cou2" },
    latin: "Trifolium repens",
    description: {
      "en": "Round white powder-puff flowers and three-part leaves — Ireland's symbol, the shamrock! Find a four-leaf one and you've got good luck.",
      "zh-Hant": "圓圓的白色粉撲花和三瓣葉子——這就是愛爾蘭的象徵，三葉草！找到四瓣葉就能帶來好運。",
      "zh-Hans": "圆圆的白色粉扑花和三瓣叶子——这就是爱尔兰的象征，三叶草！找到四瓣叶就能带来好运。",
      "yue": "圓圓嘅白色粉撲花同三塊葉——呢個就係愛爾蘭嘅標誌，三葉草！搵到四塊葉就會行好運。",
      "fr": "De petites houppes blanches et des feuilles à trois folioles — le shamrock, symbole de l'Irlande ! Trouve-en un à quatre folioles et tu auras de la chance.",
      "es": "Pompones blancos y hojas de tres folíolos — ¡el shamrock, símbolo de Irlanda! Encuentra uno de cuatro hojas y tendrás buena suerte."
    }
  },
  {
    id: "redcampion",
    wiki: "Silene_dioica",
    color: "#e85a93",
    colorCategory: "pink",
    heightCm: 90,
    family: "Pink",
    familyLatin: "Caryophyllaceae",
    blooms: "May–Sep",
    where: ["Hedgerows", "Woodland edges", "Roadside banks"],
    names: {
      "en": "Red Campion",
      "zh-Hant": "紅蠅子草",
      "zh-Hans": "红蝇子草",
      "yue": "紅蠅子草",
      "fr": "Silène dioïque (compagnon rouge)",
      "es": "Colleja roja"
    },
    pronunciation: { pinyin: "hóng yíng zi cǎo", jyutping: "hung4 jing4 zi2 cou2" },
    latin: "Silene dioica",
    description: {
      "en": "Bright pink-red flowers all along Irish hedgerows in summer. Each plant is either male or female — they need each other to make seeds!",
      "zh-Hant": "夏天愛爾蘭樹籬邊到處都是鮮粉紅紅的花。每株不是雄株就是雌株——它們要互相靠近才能結種子！",
      "zh-Hans": "夏天爱尔兰树篱边到处都是鲜粉红红的花。每株不是雄株就是雌株——它们要互相靠近才能结种子！",
      "yue": "夏天愛爾蘭樹籬邊到處都係鮮粉紅紅嘅花。每棵唔係雄就係雌——要兩棵企埋一齊先結到種子！",
      "fr": "Des fleurs rose-rouge vif tout le long des haies irlandaises en été. Chaque plante est soit mâle soit femelle — elles doivent être ensemble pour faire des graines !",
      "es": "Flores rosa-rojas brillantes por todos los setos irlandeses en verano. Cada planta es macho o hembra — ¡se necesitan para hacer semillas!"
    }
  },
  {
    id: "raggedrobin",
    wiki: "Silene_flos-cuculi",
    color: "#e85a93",
    colorCategory: "pink",
    heightCm: 70,
    family: "Pink",
    familyLatin: "Caryophyllaceae",
    blooms: "May–Jul",
    where: ["Wet meadows", "Marshes", "Damp ditches"],
    names: {
      "en": "Ragged Robin",
      "zh-Hant": "布穀剪秋羅",
      "zh-Hans": "布谷剪秋萝",
      "yue": "布穀剪秋羅",
      "fr": "Lychnis fleur-de-coucou",
      "es": "Flor del cuclillo"
    },
    pronunciation: { pinyin: "bù gǔ jiǎn qiū luó", jyutping: "bou3 guk1 zin2 cau1 lo4" },
    latin: "Silene flos-cuculi",
    description: {
      "en": "Pink flowers with petals torn into thin ribbons, as if a fairy went at them with scissors. Loves wet meadows in May and June.",
      "zh-Hant": "粉紅色的花瓣被撕成細長的絲帶，好像被仙女用剪刀剪過。最愛五六月的潮濕草地。",
      "zh-Hans": "粉红色的花瓣被撕成细长的丝带，好像被仙女用剪刀剪过。最爱五六月的潮湿草地。",
      "yue": "粉紅色嘅花瓣撕成幼長嘅絲帶，好似畀仙女用剪刀剪過。最鍾意五、六月嘅潮濕草地。",
      "fr": "Des fleurs roses aux pétales déchirés en fines lanières, comme coupés par une fée avec des ciseaux. Adore les prés humides en mai et juin.",
      "es": "Flores rosas con pétalos rasgados como cintas finas, como si los hubiera cortado un hada. ¡Le encantan los prados húmedos!"
    }
  },
  {
    id: "foxglove",
    wiki: "Digitalis_purpurea",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 150,
    family: "Plantain",
    familyLatin: "Plantaginaceae",
    blooms: "Jun–Aug",
    poison: true,
    where: ["Forest clearings", "Acidic banks", "Wicklow Mountains"],
    names: {
      "en": "Foxglove",
      "zh-Hant": "毛地黃",
      "zh-Hans": "毛地黄",
      "yue": "毛地黃",
      "fr": "Digitale pourpre",
      "es": "Dedalera"
    },
    pronunciation: { pinyin: "máo dì huáng", jyutping: "mou4 dei6 wong4" },
    latin: "Digitalis purpurea",
    description: {
      "en": "Tall spikes of pink-purple thimbles with spotted insides. Bumblebees crawl right inside! Powerful heart medicine comes from this plant — but eating it is very dangerous.",
      "zh-Hant": "高高的花穗開著粉紫色的指套，裡面有斑點。大黃蜂會整隻爬進去！心臟藥物來自這種植物——但吃了非常危險。",
      "zh-Hans": "高高的花穗开着粉紫色的指套，里面有斑点。大黄蜂会整只爬进去！心脏药物来自这种植物——但吃了非常危险。",
      "yue": "高高嘅花穗開粉紫色嘅指套，入面有斑點。大黃蜂會成隻爬入去！心臟藥就係從呢種植物嚟——不過食咗會好危險。",
      "fr": "De hauts épis de dés à coudre rose-violet avec des taches à l'intérieur. Les bourdons rampent entièrement dedans ! Une médecine pour le cœur en est tirée — mais c'est très toxique.",
      "es": "Altas espigas de dedales rosa-morados con puntos por dentro. ¡Los abejorros entran enteros! De ella se obtiene un medicamento para el corazón — pero es muy tóxica."
    }
  },
  {
    id: "herbrobert",
    wiki: "Geranium_robertianum",
    color: "#e85a93",
    colorCategory: "pink",
    heightCm: 35,
    family: "Geranium",
    familyLatin: "Geraniaceae",
    blooms: "Apr–Oct",
    where: ["Walls and rocks", "Hedgerows", "Shady banks"],
    names: {
      "en": "Herb Robert",
      "zh-Hant": "纖細老鸛草",
      "zh-Hans": "纤细老鹳草",
      "yue": "纖細老鸛草",
      "fr": "Géranium Herbe-à-Robert",
      "es": "Hierba de San Roberto"
    },
    pronunciation: { pinyin: "xiān xì lǎo guàn cǎo", jyutping: "cim1 sai3 lou5 gun3 cou2" },
    latin: "Geranium robertianum",
    description: {
      "en": "Small bright pink flowers and red-tinged ferny leaves. Crush a leaf — it has a strong, sharp smell some people don't like!",
      "zh-Hant": "鮮粉紅色的小花，葉子像蕨葉並帶紅色。揉一下葉子——氣味又濃又嗆，有些人不喜歡！",
      "zh-Hans": "鲜粉红色的小花，叶子像蕨叶并带红色。揉一下叶子——气味又浓又呛，有些人不喜欢！",
      "yue": "鮮粉紅色嘅小花，葉好似蕨葉，帶紅色。捏下塊葉——啲味又濃又嗆，有啲人唔鍾意㗎！",
      "fr": "De petites fleurs rose vif et des feuilles découpées teintées de rouge. Froisse une feuille : son odeur est forte et piquante, certains détestent !",
      "es": "Pequeñas flores rosa intenso y hojas recortadas teñidas de rojo. ¡Aplasta una hoja — tiene un olor fuerte que a algunos no les gusta!"
    }
  },
  {
    id: "redclover",
    wiki: "Trifolium_pratense",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 40,
    family: "Pea",
    familyLatin: "Fabaceae",
    blooms: "May–Sep",
    where: ["Meadows", "Roadside verges", "Pasture"],
    names: {
      "en": "Red Clover",
      "zh-Hant": "紅三葉草",
      "zh-Hans": "红三叶草",
      "yue": "紅三葉草",
      "fr": "Trèfle des prés",
      "es": "Trébol rojo"
    },
    pronunciation: { pinyin: "hóng sān yè cǎo", jyutping: "hung4 saam1 jip6 cou2" },
    latin: "Trifolium pratense",
    description: {
      "en": "Soft round purple-pink flower-heads on bushy plants. Bumblebees with long tongues are the star pollinators — short-tongued bees can't reach the nectar!",
      "zh-Hant": "毛茸茸的紫粉色圓花頭，長在叢狀植物上。長舌頭的大黃蜂是主要授粉者——短舌頭的蜜蜂搆不到花蜜！",
      "zh-Hans": "毛茸茸的紫粉色圆花头，长在丛状植物上。长舌头的大黄蜂是主要授粉者——短舌头的蜜蜂够不到花蜜！",
      "yue": "毛茸茸嘅紫粉色圓花頭，長喺叢狀植物上面。長脷嘅大黃蜂係主要授粉者——短脷嘅蜜蜂攞唔到花蜜㗎！",
      "fr": "De douces têtes florales rondes rose-violet sur des plantes touffues. Les bourdons à longue langue sont les pollinisateurs vedettes !",
      "es": "Suaves cabezuelas rosa-violetas en plantas frondosas. ¡Los abejorros de lengua larga son sus polinizadores estrella — los demás no alcanzan el néctar!"
    }
  },
  {
    id: "dogrose",
    wiki: "Rosa_canina",
    color: "#fbbad5",
    colorCategory: "pink",
    heightCm: 300,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "Jun–Jul",
    where: ["Hedgerows", "Field edges", "Country lanes"],
    names: {
      "en": "Dog Rose",
      "zh-Hant": "犬薔薇",
      "zh-Hans": "犬蔷薇",
      "yue": "犬薔薇",
      "fr": "Rosier des chiens (églantier)",
      "es": "Rosal silvestre"
    },
    pronunciation: { pinyin: "quǎn qiáng wēi", jyutping: "hyun2 coeng4 mei4" },
    latin: "Rosa canina",
    description: {
      "en": "Wild pink-and-white roses tumble through summer hedges. In autumn, the bright red rose-hips are full of vitamin C — and full of itchy hair seeds inside!",
      "zh-Hant": "夏日的樹籬上爬滿了粉白色的野薔薇。秋天結出鮮紅色的薔薇果——維生素C超多，但裡面有讓人發癢的細毛種子！",
      "zh-Hans": "夏日的树篱上爬满了粉白色的野蔷薇。秋天结出鲜红色的蔷薇果——维生素C超多，但里面有让人发痒的细毛种子！",
      "yue": "夏日嘅樹籬度爬滿粉白色嘅野薔薇。秋天結鮮紅色嘅薔薇果——維生素C好多，不過入面有令人痕嘅細毛種子！",
      "fr": "Des roses sauvages rose et blanc tombent en cascades dans les haies estivales. À l'automne, les cynorhodons rouges sont pleins de vitamine C !",
      "es": "Rosas silvestres rosa y blanco cubren los setos en verano. En otoño, los escaramujos rojos están llenos de vitamina C — ¡pero pican por dentro!"
    }
  },
  {
    id: "thrift",
    wiki: "Armeria_maritima",
    color: "#e85a93",
    colorCategory: "pink",
    heightCm: 25,
    family: "Plumbago",
    familyLatin: "Plumbaginaceae",
    blooms: "Apr–Aug",
    where: ["Sea cliffs", "Cliffs of Moher (Clare)", "Salt marshes"],
    names: {
      "en": "Thrift (Sea Pink)",
      "zh-Hant": "海石竹",
      "zh-Hans": "海石竹",
      "yue": "海石竹",
      "fr": "Armérie maritime",
      "es": "Clavelina de mar"
    },
    pronunciation: { pinyin: "hǎi shí zhú", jyutping: "hoi2 sek6 zuk1" },
    latin: "Armeria maritima",
    description: {
      "en": "Pink pom-poms on bare salty cliffs. The whole island's coast turns pink in May! Old Irish three-pence coins had thrift on the back.",
      "zh-Hant": "光禿禿鹹鹹的海崖上，粉紅色的小毛球。五月時整個島的海岸都變成粉紅色！愛爾蘭舊三便士硬幣背面就是它。",
      "zh-Hans": "光秃秃咸咸的海崖上，粉红色的小毛球。五月时整个岛的海岸都变成粉红色！爱尔兰旧三便士硬币背面就是它。",
      "yue": "光禿禿、鹹鹹嘅海崖度，粉紅色嘅毛球。五月嗰陣成個島嘅海岸都變粉紅色！愛爾蘭舊三便士銀仔背面就係佢。",
      "fr": "Des pompons roses sur les falaises nues et salées. Toute la côte irlandaise vire au rose en mai ! Les vieilles pièces de 3 pence portaient l'armérie.",
      "es": "Pompones rosas en acantilados salados y desnudos. ¡En mayo toda la costa se vuelve rosa! Aparecía en las antiguas monedas irlandesas de 3 peniques."
    }
  },
  {
    id: "rosebaywillowherb",
    wiki: "Chamaenerion_angustifolium",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 200,
    family: "Evening Primrose",
    familyLatin: "Onagraceae",
    blooms: "Jul–Sep",
    where: ["Roadsides", "Cleared ground", "Burned heathland"],
    names: {
      "en": "Rosebay Willowherb (Fireweed)",
      "zh-Hant": "柳蘭",
      "zh-Hans": "柳兰",
      "yue": "柳蘭",
      "fr": "Épilobe en épi",
      "es": "Adelfilla"
    },
    pronunciation: { pinyin: "liǔ lán", jyutping: "lau5 laan4" },
    latin: "Chamaenerion angustifolium",
    description: {
      "en": "Tall spikes of bright pink flowers light up roadsides and burned ground in summer. After fires it's the first plant to come back — that's why it's called \"fireweed\".",
      "zh-Hant": "夏天高高的花穗開出鮮粉紅色花，照亮路邊和燒過的地。火災後它最先長回來——所以叫「火草」。",
      "zh-Hans": "夏天高高的花穗开出鲜粉红色花，照亮路边和烧过的地。火灾后它最先长回来——所以叫「火草」。",
      "yue": "夏天高高嘅花穗開鮮粉紅色嘅花，照亮咗路邊同埋燒過嘅地。火災之後佢最先長返出嚟——所以叫做「火草」。",
      "fr": "De hauts épis de fleurs rose vif illuminent les bords des routes en été. Après un incendie, elle est la première à revenir — d'où son nom !",
      "es": "Altas espigas de flores rosa intenso iluminan los caminos en verano. Tras un incendio es la primera planta que vuelve — ¡por eso se llama «hierba del fuego»!"
    }
  },
  {
    id: "purpleloosestrife",
    wiki: "Lythrum_salicaria",
    color: "#a64da6",
    colorCategory: "pink",
    heightCm: 150,
    family: "Loosestrife",
    familyLatin: "Lythraceae",
    blooms: "Jun–Sep",
    where: ["River banks", "Wet ditches", "Marsh edges"],
    names: {
      "en": "Purple Loosestrife",
      "zh-Hant": "千屈菜",
      "zh-Hans": "千屈菜",
      "yue": "千屈菜",
      "fr": "Salicaire commune",
      "es": "Salicaria"
    },
    pronunciation: { pinyin: "qiān qū cài", jyutping: "cin1 wat1 coi3" },
    latin: "Lythrum salicaria",
    description: {
      "en": "Tall spikes of magenta flowers along rivers and ditches in late summer. Each plant has flowers with three different lengths of style — clever for sharing pollen!",
      "zh-Hant": "夏末沿著河邊和水溝，高高的花穗開出洋紅色花。同一株上的花有三種不同長度的花柱——巧妙地交換花粉！",
      "zh-Hans": "夏末沿着河边和水沟，高高的花穗开出洋红色花。同一株上的花有三种不同长度的花柱——巧妙地交换花粉！",
      "yue": "夏末沿住河邊同水溝，高高嘅花穗開洋紅色嘅花。同一棵上面嘅花有三種唔同長度嘅花柱——好巧妙咁交換花粉！",
      "fr": "De hauts épis magenta au bord des rivières en fin d'été. Chaque plante a des fleurs aux styles de trois longueurs — un truc malin pour échanger le pollen !",
      "es": "Altas espigas magenta junto a ríos y zanjas a finales de verano. Tiene flores con estilos de tres largos distintos — ¡un truco para intercambiar polen!"
    }
  },
  {
    id: "bloodycranesbill",
    wiki: "Geranium_sanguineum",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 30,
    family: "Geranium",
    familyLatin: "Geraniaceae",
    blooms: "Jun–Aug",
    where: ["The Burren (Clare)", "Limestone grassland", "Sand dunes"],
    names: {
      "en": "Bloody Cranesbill",
      "zh-Hant": "血紅老鸛草",
      "zh-Hans": "血红老鹳草",
      "yue": "血紅老鸛草",
      "fr": "Géranium sanguin",
      "es": "Geranio sangriento"
    },
    pronunciation: { pinyin: "xuè hóng lǎo guàn cǎo", jyutping: "hyut3 hung4 lou5 gun3 cou2" },
    latin: "Geranium sanguineum",
    description: {
      "en": "Big magenta flowers carpet the Burren limestone in summer. The Latin name means \"blood-red\". Ireland's national flower? Definitely a strong contender!",
      "zh-Hant": "夏天，洋紅色的大花鋪滿布倫的石灰岩。拉丁文名字意思是「血紅色」。愛爾蘭國花？絕對是強力候選！",
      "zh-Hans": "夏天，洋红色的大花铺满布伦的石灰岩。拉丁文名字意思是「血红色」。爱尔兰国花？绝对是强力候选！",
      "yue": "夏天，洋紅色嘅大花鋪滿布倫嘅石灰岩。拉丁文名字意思係「血紅色」。愛爾蘭國花？絕對係有力候選！",
      "fr": "De grandes fleurs magenta tapissent le calcaire du Burren en été. Son nom latin signifie « rouge sang ». Une candidate au titre de fleur nationale d'Irlande !",
      "es": "Grandes flores magenta cubren la caliza del Burren en verano. Su nombre latino significa «rojo sangre». ¡Candidata a flor nacional de Irlanda!"
    }
  },
  {
    id: "crossleavedheath",
    wiki: "Erica_tetralix",
    color: "#fbbad5",
    colorCategory: "pink",
    heightCm: 50,
    family: "Heath",
    familyLatin: "Ericaceae",
    blooms: "Jun–Sep",
    where: ["Wet bogs", "Connemara (Galway)", "Wicklow blanket bog"],
    names: {
      "en": "Cross-leaved Heath",
      "zh-Hant": "十字葉歐石楠",
      "zh-Hans": "十字叶欧石楠",
      "yue": "十字葉歐石楠",
      "fr": "Bruyère à quatre angles",
      "es": "Brezo de turbera"
    },
    pronunciation: { pinyin: "shí zì yè ōu shí nán", jyutping: "sap6 zi6 jip6 au1 sek6 naam4" },
    latin: "Erica tetralix",
    description: {
      "en": "Pretty pink bell-flowers in tight nodding clusters, growing on Ireland's wet bogs. The leaves stick out in fours, making a tiny cross around the stem.",
      "zh-Hant": "粉紅色的鈴鐺花密密地點頭，長在愛爾蘭的濕沼澤上。葉子四片一組伸出來，繞著莖形成小十字。",
      "zh-Hans": "粉红色的铃铛花密密地点头，长在爱尔兰的湿沼泽上。叶子四片一组伸出来，绕着茎形成小十字。",
      "yue": "粉紅色嘅鈴鐺花密密咁點頭，長喺愛爾蘭嘅濕沼澤上。啲葉四塊一組伸出嚟，圍住條莖形成小十字。",
      "fr": "De jolies clochettes roses en bouquets serrés sur les tourbières humides. Les feuilles sortent par quatre, formant une petite croix autour de la tige.",
      "es": "Bonitas campanillas rosadas en racimos compactos sobre las turberas. Las hojas salen de cuatro en cuatro, formando una pequeña cruz."
    }
  },
  {
    id: "spottedorchid",
    wiki: "Dactylorhiza_fuchsii",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 50,
    family: "Orchid",
    familyLatin: "Orchidaceae",
    blooms: "Jun–Aug",
    where: ["The Burren (Clare)", "Damp meadows", "Roadside verges"],
    names: {
      "en": "Common Spotted Orchid",
      "zh-Hant": "斑點掌裂蘭",
      "zh-Hans": "斑点掌裂兰",
      "yue": "斑點掌裂蘭",
      "fr": "Orchis tacheté",
      "es": "Orquídea manchada"
    },
    pronunciation: { pinyin: "bān diǎn zhǎng liè lán", jyutping: "baan1 dim2 zoeng2 lit6 laan4" },
    latin: "Dactylorhiza fuchsii",
    description: {
      "en": "Pink-purple orchid flowers stacked on a tall spike, with dark spotted leaves below. The most common Irish orchid — but still magical when you find one!",
      "zh-Hant": "高高的花穗上層層疊著粉紫色的蘭花，下面是有深色斑點的葉子。最常見的愛爾蘭蘭花——但找到還是很神奇！",
      "zh-Hans": "高高的花穗上层层叠着粉紫色的兰花，下面是有深色斑点的叶子。最常见的爱尔兰兰花——但找到还是很神奇！",
      "yue": "高高嘅花穗上面層層疊住粉紫色嘅蘭花，下面係有深色斑點嘅葉。係最常見嘅愛爾蘭蘭花——但搵到都仲好神奇！",
      "fr": "Des fleurs d'orchidée rose-violet empilées sur un haut épi, avec des feuilles tachetées. L'orchidée la plus commune d'Irlande — mais toujours magique !",
      "es": "Flores rosa-violeta apiladas en una espiga alta, con hojas moteadas. ¡La orquídea más común de Irlanda — pero siempre mágica!"
    }
  },
  {
    id: "earlypurpleorchid",
    wiki: "Orchis_mascula",
    color: "#a64da6",
    colorCategory: "pink",
    heightCm: 40,
    family: "Orchid",
    familyLatin: "Orchidaceae",
    blooms: "Apr–Jun",
    where: ["Old woods and meadows", "The Burren (Clare)", "Limestone grassland"],
    names: {
      "en": "Early Purple Orchid",
      "zh-Hant": "雄紅門蘭",
      "zh-Hans": "雄红门兰",
      "yue": "雄紅門蘭",
      "fr": "Orchis mâle",
      "es": "Orquídea macho"
    },
    pronunciation: { pinyin: "xióng hóng mén lán", jyutping: "hung4 hung4 mun4 laan4" },
    latin: "Orchis mascula",
    description: {
      "en": "One of Ireland's earliest orchids — deep purple flower spikes appearing in spring, often before bluebells. Some leaves have purple spots like ink blots.",
      "zh-Hant": "愛爾蘭最早開的蘭花之一——春天就冒出深紫色的花穗，常常比藍鈴花還早。有些葉子有像墨點的紫色斑。",
      "zh-Hans": "爱尔兰最早开的兰花之一——春天就冒出深紫色的花穗，常常比蓝铃花还早。有些叶子有像墨点的紫色斑。",
      "yue": "愛爾蘭最早開嘅蘭花之一——春天就伸出深紫色嘅花穗，成日比藍鈴花仲早。有啲葉有好似墨點嘅紫色斑。",
      "fr": "L'une des premières orchidées d'Irlande — des épis violet foncé apparaissent au printemps, souvent avant les jacinthes. Certaines feuilles ont des taches violettes.",
      "es": "Una de las primeras orquídeas de Irlanda — espigas violeta oscuro en primavera, a veces antes que los jacintos. Algunas hojas tienen manchas como tinta."
    }
  },
  {
    id: "beeorchid",
    wiki: "Ophrys_apifera",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 30,
    family: "Orchid",
    familyLatin: "Orchidaceae",
    blooms: "Jun–Jul",
    where: ["Calcareous grassland", "Sand dunes", "Old quarries"],
    names: {
      "en": "Bee Orchid",
      "zh-Hant": "蜜蜂蘭",
      "zh-Hans": "蜜蜂兰",
      "yue": "蜜蜂蘭",
      "fr": "Ophrys abeille",
      "es": "Abejera"
    },
    pronunciation: { pinyin: "mì fēng lán", jyutping: "mat6 fung1 laan4" },
    latin: "Ophrys apifera",
    description: {
      "en": "Look closely — the lower petal is shaped like a fuzzy bumblebee! It tricks male bees into trying to mate with it, and they spread the pollen.",
      "zh-Hant": "湊近看——下面的花瓣長得像一隻毛茸茸的大黃蜂！它騙雄蜂想跟它交配，順便幫忙傳粉。",
      "zh-Hans": "凑近看——下面的花瓣长得像一只毛茸茸的大黄蜂！它骗雄蜂想跟它交配，顺便帮忙传粉。",
      "yue": "行近啲望——下面嘅花瓣長得好似一隻毛茸茸嘅大黃蜂！佢呃雄蜂以為要交配，順便幫佢傳粉。",
      "fr": "Regarde de près — le pétale inférieur ressemble à un bourdon poilu ! Il trompe les bourdons mâles qui essaient de s'accoupler — et propagent le pollen.",
      "es": "Mira de cerca — ¡el pétalo inferior tiene forma de abejorro peludo! Engaña a los machos para que intenten aparearse y así dispersan el polen."
    }
  },
  {
    id: "honeysuckle",
    wiki: "Lonicera_periclymenum",
    color: "#fbbad5",
    colorCategory: "pink",
    heightCm: 600,
    family: "Honeysuckle",
    familyLatin: "Caprifoliaceae",
    blooms: "Jun–Aug",
    where: ["Hedgerows", "Woodland edges", "Old country lanes"],
    names: {
      "en": "Honeysuckle",
      "zh-Hant": "忍冬",
      "zh-Hans": "忍冬",
      "yue": "忍冬",
      "fr": "Chèvrefeuille des bois",
      "es": "Madreselva"
    },
    pronunciation: { pinyin: "rěn dōng", jyutping: "jan2 dung1" },
    latin: "Lonicera periclymenum",
    description: {
      "en": "Twirling vines in hedges, with creamy-pink trumpets that smell wonderful at evening. Moths visit at night to drink the nectar from deep inside!",
      "zh-Hant": "在樹籬裡纏繞的藤蔓，奶油粉色的號角花在傍晚散發迷人的香氣。晚上飛蛾會來吸深處的花蜜！",
      "zh-Hans": "在树篱里缠绕的藤蔓，奶油粉色的号角花在傍晚散发迷人的香气。晚上飞蛾会来吸深处的花蜜！",
      "yue": "喺樹籬入面纏繞嘅藤蔓，奶油粉色嘅號角花喺黃昏時散發迷人嘅香氣。夜晚啲飛蛾會嚟吸入面嘅花蜜！",
      "fr": "Des lianes qui s'enroulent dans les haies, avec des trompettes rose-crème au parfum merveilleux le soir. Les papillons de nuit viennent pour le nectar !",
      "es": "Lianas trepadoras en los setos, con trompetas rosa-crema que huelen divinamente al anochecer. ¡Las polillas vienen de noche por el néctar!"
    }
  },
  {
    id: "fuchsia",
    wiki: "Fuchsia_magellanica",
    color: "#c2185b",
    colorCategory: "pink",
    heightCm: 200,
    family: "Evening Primrose",
    familyLatin: "Onagraceae",
    blooms: "Jun–Oct",
    where: ["West coast hedges", "Kerry and Cork roadsides", "Connemara lanes"],
    names: {
      "en": "Fuchsia",
      "zh-Hant": "倒掛金鐘",
      "zh-Hans": "倒挂金钟",
      "yue": "倒掛金鐘",
      "fr": "Fuchsia de Magellan",
      "es": "Fucsia"
    },
    pronunciation: { pinyin: "dào guà jīn zhōng", jyutping: "dou2 gwaa3 gam1 zung1" },
    latin: "Fuchsia magellanica",
    description: {
      "en": "Brought from Chile and now growing in pretty hedges in Kerry and Cork. The flowers dangle like little ballerinas — kids call them \"Mary's tears\".",
      "zh-Hant": "從智利引進，如今在凱里和科克的樹籬上開得很漂亮。花朵像小芭蕾舞者一樣垂下——小孩叫它「瑪利亞的眼淚」。",
      "zh-Hans": "从智利引进，如今在凯里和科克的树篱上开得很漂亮。花朵像小芭蕾舞者一样垂下——小孩叫它「玛利亚的眼泪」。",
      "yue": "由智利引入，而家喺凱里同科克嘅樹籬上開得好靚。啲花好似細細個芭蕾舞者咁吊住——細路仔叫佢做「瑪利亞嘅眼淚」。",
      "fr": "Apporté du Chili, il pousse aujourd'hui dans les haies du Kerry et de Cork. Les fleurs pendent comme de petites ballerines — les enfants les appellent « larmes de Marie ».",
      "es": "Traída de Chile, hoy crece en preciosos setos en Kerry y Cork. Las flores cuelgan como bailarinas — los niños las llaman «lágrimas de María»."
    }
  },
  {
    id: "lordsandladies",
    wiki: "Arum_maculatum",
    color: "#6ab04c",
    colorCategory: "other",
    heightCm: 30,
    family: "Arum",
    familyLatin: "Araceae",
    blooms: "Apr–May",
    poison: true,
    where: ["Damp shady woods", "Hedgerow shade", "Old churchyards"],
    names: {
      "en": "Lords-and-Ladies (Cuckoo Pint)",
      "zh-Hant": "斑葉疆南星",
      "zh-Hans": "斑叶疆南星",
      "yue": "斑葉疆南星",
      "fr": "Arum tacheté",
      "es": "Aro manchado"
    },
    pronunciation: { pinyin: "bān yè jiāng nán xīng", jyutping: "baan1 jip6 goeng1 naam4 sing1" },
    latin: "Arum maculatum",
    description: {
      "en": "A weird hooded green flower with a dark purple finger inside that smells of rotten meat — to fool flies into pollinating it! In autumn, bright orange-red berries.",
      "zh-Hant": "怪怪的綠色帽子花，裡面有根深紫色手指，聞起來像爛肉——騙蒼蠅來授粉！秋天結出鮮橙紅色漿果。",
      "zh-Hans": "怪怪的绿色帽子花，里面有根深紫色手指，闻起来像烂肉——骗苍蝇来授粉！秋天结出鲜橙红色浆果。",
      "yue": "怪雞嘅綠色帽子花，入面有條深紫色手指，聞起嚟好似爛肉咁——騙啲烏蠅嚟授粉！秋天結鮮橙紅色嘅漿果。",
      "fr": "Une étrange fleur verte en cornet avec un doigt violet foncé qui sent la viande pourrie — pour tromper les mouches ! En automne, baies rouge-orange.",
      "es": "Una extraña flor verde encapuchada con un dedo violeta oscuro que huele a carne podrida — ¡para engañar a las moscas! En otoño tiene bayas rojo-anaranjadas."
    }
  },
  {
    id: "poppy",
    wiki: "Papaver_rhoeas",
    color: "#c2492f",
    colorCategory: "other",
    heightCm: 70,
    family: "Poppy",
    familyLatin: "Papaveraceae",
    blooms: "Jun–Aug",
    where: ["Cornfields", "Disturbed ground", "Roadside verges"],
    names: {
      "en": "Common Poppy",
      "zh-Hant": "虞美人",
      "zh-Hans": "虞美人",
      "yue": "虞美人",
      "fr": "Coquelicot",
      "es": "Amapola"
    },
    pronunciation: { pinyin: "yú měi rén", jyutping: "jyu4 mei5 jan4" },
    latin: "Papaver rhoeas",
    description: {
      "en": "Bright scarlet petals as thin as tissue paper. The seeds can wait in the soil for a hundred years — and then suddenly bloom when the ground is dug up!",
      "zh-Hant": "鮮紅色的花瓣薄得像棉紙。種子可以在土裡等一百年——一旦土地被翻動就突然開花！",
      "zh-Hans": "鲜红色的花瓣薄得像棉纸。种子可以在土里等一百年——一旦土地被翻动就突然开花！",
      "yue": "鮮紅色嘅花瓣，薄到好似棉紙咁。啲種子可以喺泥土度等一百年——一旦土地被翻動就突然開花！",
      "fr": "De pétales écarlates fins comme du papier de soie. Les graines peuvent attendre cent ans dans le sol — et fleurir d'un coup quand la terre est retournée !",
      "es": "Pétalos escarlatas finos como papel de seda. ¡Las semillas pueden esperar cien años en la tierra — y florecer de golpe cuando se remueve el suelo!"
    }
  },
  {
    id: "greatercelandine",
    wiki: "Chelidonium_majus",
    color: "#f9ca24",
    colorCategory: "other",
    heightCm: 80,
    family: "Poppy",
    familyLatin: "Papaveraceae",
    blooms: "Apr–Sep",
    poison: true,
    where: ["Old walls", "Roadside hedges", "Waste ground"],
    names: {
      "en": "Greater Celandine",
      "zh-Hant": "白屈菜",
      "zh-Hans": "白屈菜",
      "yue": "白屈菜",
      "fr": "Grande chélidoine",
      "es": "Celidonia mayor"
    },
    pronunciation: { pinyin: "bái qū cài", jyutping: "baak6 wat1 coi3" },
    latin: "Chelidonium majus",
    description: {
      "en": "Snap a stem and orange-yellow sap oozes out — once used to remove warts! Small four-petalled yellow flowers stand above ferny grey-green leaves.",
      "zh-Hant": "折斷莖，會流出橘黃色汁液——以前拿來去疣！四片花瓣的小黃花長在灰綠色蕨葉上方。",
      "zh-Hans": "折断茎，会流出橘黄色汁液——以前拿来去疣！四片花瓣的小黄花长在灰绿色蕨叶上方。",
      "yue": "扯斷條莖，會流出橙黃色嘅汁——以前用嚟去疣㗎！四塊花瓣嘅黃色小花，長喺灰綠色嘅蕨葉上面。",
      "fr": "Casse une tige : un suc orange-jaune coule — autrefois utilisé pour les verrues ! De petites fleurs jaunes à quatre pétales au-dessus de feuilles découpées.",
      "es": "Rompe un tallo y sale un jugo amarillo-anaranjado — ¡antes se usaba para verrugas! Pequeñas flores amarillas de cuatro pétalos sobre hojas grises."
    }
  },
  {
    id: "orangehawkweed",
    wiki: "Pilosella_aurantiaca",
    color: "#ff7a00",
    colorCategory: "other",
    heightCm: 35,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Jun–Aug",
    where: ["Roadside verges", "Old meadows", "Garden escapes"],
    names: {
      "en": "Orange Hawkweed (Fox-and-cubs)",
      "zh-Hant": "橙色山柳菊",
      "zh-Hans": "橙色山柳菊",
      "yue": "橙色山柳菊",
      "fr": "Épervière orangée",
      "es": "Hieracio anaranjado"
    },
    pronunciation: { pinyin: "chéng sè shān liǔ jú", jyutping: "caang2 sik1 saan1 lau5 guk1" },
    latin: "Pilosella aurantiaca",
    description: {
      "en": "Burning orange-red dandelion-like flowers, also called \"Fox-and-cubs\" because the open flowers and the buds together look like a vixen with her cubs!",
      "zh-Hant": "燃燒般的橙紅色花，像蒲公英，又叫「狐狸與小狐」——盛開的花和花苞在一起像母狐和小狐！",
      "zh-Hans": "燃烧般的橙红色花，像蒲公英，又叫「狐狸与小狐」——盛开的花和花苞在一起像母狐和小狐！",
      "yue": "好似火咁嘅橙紅色花，似蒲公英，又叫「狐狸同狐仔」——盛開嘅花同花蕾擺埋一齊，好似媽媽狐同小狐狸！",
      "fr": "Des fleurs en pissenlit orange-rouge feu, surnommées « renarde et renardeaux » car les fleurs ouvertes et les boutons ressemblent à une famille de renards !",
      "es": "Flores naranja-rojas como dientes de león, también llamadas «zorra y cachorros» — ¡las flores abiertas y los botones parecen una zorra con sus crías!"
    }
  },
  {
    id: "montbretia",
    wiki: "Crocosmia_%C3%97_crocosmiiflora",
    color: "#ff7a00",
    colorCategory: "other",
    heightCm: 80,
    family: "Iris",
    familyLatin: "Iridaceae",
    blooms: "Jul–Sep",
    where: ["West coast hedges", "Kerry and Cork roadsides", "Old gardens"],
    names: {
      "en": "Montbretia",
      "zh-Hant": "雜種射干菖蒲",
      "zh-Hans": "杂种射干菖蒲",
      "yue": "雜種射干菖蒲",
      "fr": "Montbretia (crocosmie)",
      "es": "Montbretia"
    },
    pronunciation: { pinyin: "zá zhǒng shè gān chāng pú", jyutping: "zaap6 zung2 se6 gon1 coeng1 pou4" },
    latin: "Crocosmia × crocosmiiflora",
    description: {
      "en": "Fiery orange flowers in arching sprays — escaped from gardens and now wild along Kerry and Cork roadsides. A small problem for native plants, but stunning to see!",
      "zh-Hant": "拱形花序上開著火焰般的橘色花——本是花園植物，現在已野化在凱里和科克的路邊。對原生植物有點威脅，但真的很美！",
      "zh-Hans": "拱形花序上开着火焰般的橘色花——本是花园植物，现在已野化在凯里和科克的路边。对原生植物有点威胁，但真的很美！",
      "yue": "拱形嘅花序上面開住似火焰嘅橙色花——本身係花園植物，而家已經野化喺凱里同科克嘅路邊。對原生植物有少少威脅，但係真係好靚！",
      "fr": "Des fleurs orange feu en grappes arquées — échappées des jardins, elles colonisent les bords des routes du Kerry et de Cork. Un petit problème, mais magnifique !",
      "es": "Llamativas flores naranjas en racimos arqueados — escaparon de los jardines y ahora bordean caminos en Kerry y Cork. Un poco invasiva, ¡pero preciosa!"
    }
  },
  {
    id: "ivy",
    wiki: "Hedera_helix",
    color: "#6ab04c",
    colorCategory: "other",
    heightCm: 3000,
    family: "Ivy",
    familyLatin: "Araliaceae",
    blooms: "Sep–Nov",
    where: ["Old trees", "Stone walls", "Woodland edges"],
    names: {
      "en": "Ivy",
      "zh-Hant": "常春藤",
      "zh-Hans": "常春藤",
      "yue": "常春藤",
      "fr": "Lierre grimpant",
      "es": "Hiedra"
    },
    pronunciation: { pinyin: "cháng chūn téng", jyutping: "soeng4 ceon1 tang4" },
    latin: "Hedera helix",
    description: {
      "en": "Climbs up walls and trees with little sticky roots. The pale green flowers come in autumn — important late food for bees, before the berries turn black for winter birds.",
      "zh-Hant": "用小小的氣生根爬上牆和樹。淡綠色的花在秋天開——是蜜蜂晚秋的重要食物，黑色漿果則餵飽冬天的鳥兒。",
      "zh-Hans": "用小小的气生根爬上墙和树。淡绿色的花在秋天开——是蜜蜂晚秋的重要食物，黑色浆果则喂饱冬天的鸟儿。",
      "yue": "用小小嘅氣生根爬上牆同樹。淡綠色嘅花喺秋天開——係蜜蜂秋末嘅重要食物，黑色嘅漿果就餵飽冬天嘅雀仔。",
      "fr": "Grimpe sur les murs et les arbres avec de petites racines collantes. Ses fleurs vert pâle apparaissent en automne — un dernier repas pour les abeilles !",
      "es": "Trepa por muros y árboles con pequeñas raíces pegajosas. Sus flores verdes salen en otoño — ¡comida tardía para abejas, y bayas para aves en invierno!"
    }
  },
  {
    id: "nettle",
    wiki: "Urtica_dioica",
    color: "#6ab04c",
    colorCategory: "other",
    heightCm: 150,
    family: "Nettle",
    familyLatin: "Urticaceae",
    blooms: "Jun–Sep",
    where: ["Anywhere with rich soil", "Field edges", "Disturbed ground"],
    names: {
      "en": "Stinging Nettle",
      "zh-Hant": "異株蕁麻",
      "zh-Hans": "异株荨麻",
      "yue": "異株蕁麻",
      "fr": "Ortie dioïque",
      "es": "Ortiga mayor"
    },
    pronunciation: { pinyin: "yì zhū qián má", jyutping: "ji6 zyu1 cam4 maa4" },
    latin: "Urtica dioica",
    description: {
      "en": "The plant that bites! Tiny hairs sting like a needle if you brush against them. The flowers are dangling green tassels — and butterfly caterpillars feast on the leaves.",
      "zh-Hant": "會咬人的植物！細細的毛碰到就刺得像針。花是垂下的綠色穗——蝴蝶毛毛蟲最愛吃它的葉子。",
      "zh-Hans": "会咬人的植物！细细的毛碰到就刺得像针。花是垂下的绿色穗——蝴蝶毛毛虫最爱吃它的叶子。",
      "yue": "會咬人嘅植物！細細嘅毛掂到你就會刺得好似針咁。花係吊下嚟嘅綠色穗——蝴蝶毛毛蟲最鍾意食佢啲葉。",
      "fr": "La plante qui mord ! De minuscules poils piquent comme des aiguilles si on les frôle. Les fleurs sont des grappes vertes pendantes — un délice pour les chenilles !",
      "es": "¡La planta que pica! Pelillos diminutos pinchan como agujas al rozarlos. Sus flores son borlas verdes colgantes — ¡las orugas de mariposa adoran sus hojas!"
    }
  },
  {
    id: "groundivy",
    wiki: "Glechoma_hederacea",
    color: "#7d6bbf",
    colorCategory: "other",
    heightCm: 20,
    family: "Mint",
    familyLatin: "Lamiaceae",
    blooms: "Mar–Jun",
    where: ["Hedge banks", "Damp meadows", "Garden corners"],
    names: {
      "en": "Ground Ivy",
      "zh-Hant": "連錢草",
      "zh-Hans": "连钱草",
      "yue": "連錢草",
      "fr": "Lierre terrestre",
      "es": "Hiedra terrestre"
    },
    pronunciation: { pinyin: "lián qián cǎo", jyutping: "lin4 cin4 cou2" },
    latin: "Glechoma hederacea",
    description: {
      "en": "Not really an ivy — but a creeping mint with little blue-violet hooded flowers. People used to brew it like beer before they used hops!",
      "zh-Hant": "其實不是常春藤——是匍匐的薄荷家族成員，開藍紫色的小帽子花。從前的人在用啤酒花之前，就用它釀啤酒！",
      "zh-Hans": "其实不是常春藤——是匍匐的薄荷家族成员，开蓝紫色的小帽子花。从前的人在用啤酒花之前，就用它酿啤酒！",
      "yue": "其實唔係常春藤——係匍匐嘅薄荷家族，開藍紫色嘅小帽子花。以前啲人未用啤酒花之前，係用佢嚟釀啤酒㗎！",
      "fr": "Pas vraiment un lierre — mais une menthe rampante aux petites fleurs bleu-violet en cagoule. On l'utilisait pour brasser la bière avant le houblon !",
      "es": "No es realmente una hiedra — sino una menta rastrera con flores azul-violetas. ¡Se usaba para hacer cerveza antes que el lúpulo!"
    }
  },
  {
    id: "woodsorrel",
    wiki: "Oxalis_acetosella",
    color: "#ffffff",
    colorCategory: "other",
    heightCm: 12,
    family: "Wood Sorrel",
    familyLatin: "Oxalidaceae",
    blooms: "Apr–May",
    where: ["Mossy woodland floors", "Killarney NP (Kerry)", "Shady hedge banks"],
    names: {
      "en": "Wood Sorrel",
      "zh-Hant": "山酢漿草",
      "zh-Hans": "山酢浆草",
      "yue": "山酢漿草",
      "fr": "Oxalide petite-oseille",
      "es": "Aleluya"
    },
    pronunciation: { pinyin: "shān cù jiāng cǎo", jyutping: "saan1 zou3 zoeng1 cou2" },
    latin: "Oxalis acetosella",
    description: {
      "en": "Delicate white flowers with thin pink stripes and three-part leaves like a dainty shamrock. The leaves taste sour like lemon! Some say it's the original Irish shamrock.",
      "zh-Hant": "嬌嫩的白花有細細的粉紅條紋，三片葉子像精緻的三葉草。葉子嚐起來酸酸的像檸檬！有人說它才是真正的愛爾蘭三葉草。",
      "zh-Hans": "娇嫩的白花有细细的粉红条纹，三片叶子像精致的三叶草。叶子尝起来酸酸的像柠檬！有人说它才是真正的爱尔兰三叶草。",
      "yue": "嬌嫩嘅白花有幼幼嘅粉紅條紋，三塊葉好似精緻嘅三葉草。塊葉嘅味好似檸檬咁酸！有啲人話佢先係真正嘅愛爾蘭三葉草。",
      "fr": "De délicates fleurs blanches striées de rose et des feuilles à trois folioles comme un trèfle. Les feuilles ont un goût acide de citron ! Le « vrai » trèfle pour certains.",
      "es": "Delicadas flores blancas con rayitas rosas y hojas de tres folíolos como un tréfol. ¡Las hojas saben ácidas como el limón! Para algunos, el verdadero shamrock irlandés."
    }
  },
  {
    id: "coltsfoot",
    wiki: "Tussilago",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 25,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Feb–Apr",
    where: ["Bare ground and roadsides", "Stream banks", "Disturbed clay"],
    names: {
      "en": "Coltsfoot",
      "zh-Hant": "款冬",
      "zh-Hans": "款冬",
      "yue": "款冬",
      "fr": "Tussilage (pas-d'âne)",
      "es": "Tusílago (uña de caballo)"
    },
    pronunciation: { pinyin: "kuǎn dōng", jyutping: "fun2 dung1" },
    latin: "Tussilago farfara",
    description: {
      "en": "Bright yellow dandelion-like flowers pop up in late winter — before the leaves! The big hoof-shaped leaves come later, giving the plant its name.",
      "zh-Hant": "鮮黃色的花像蒲公英一樣，在冬末就冒出來——而且葉子還沒長！後來才長出馬蹄形的大葉，名字就是這樣來。",
      "zh-Hans": "鲜黄色的花像蒲公英一样，在冬末就冒出来——而且叶子还没长！后来才长出马蹄形的大叶，名字就是这样来。",
      "yue": "鮮黃色嘅花好似蒲公英咁，冬末就伸出嚟——重要係葉未長住！之後先長馬蹄形嘅大葉，個名就係咁嚟。",
      "fr": "Des fleurs jaune vif comme le pissenlit sortent en fin d'hiver — avant les feuilles ! Les grandes feuilles en forme de sabot viennent plus tard.",
      "es": "Flores amarillas como dientes de león que aparecen a finales del invierno — ¡antes que las hojas! Las hojas grandes con forma de pezuña llegan después."
    }
  },
  {
    id: "wilddaffodil",
    wiki: "Narcissus_pseudonarcissus",
    color: "#ffd700",
    colorCategory: "yellow",
    heightCm: 35,
    family: "Amaryllis",
    familyLatin: "Amaryllidaceae",
    blooms: "Feb–Apr",
    poison: true,
    where: ["Old woodlands", "Damp meadows", "Garden escapes"],
    names: {
      "en": "Wild Daffodil",
      "zh-Hant": "黃水仙",
      "zh-Hans": "黄水仙",
      "yue": "黃水仙",
      "fr": "Narcisse jaune",
      "es": "Narciso amarillo"
    },
    pronunciation: { pinyin: "huáng shuǐ xiān", jyutping: "wong4 seoi2 sin1" },
    latin: "Narcissus pseudonarcissus",
    description: {
      "en": "The classic golden trumpet of early spring — wild ones are smaller and paler than garden daffodils. Wordsworth's poem made these famous! All parts are poisonous.",
      "zh-Hant": "早春最經典的金色號角花——野生的比花園品種小、顏色淡。詩人華茲華斯的詩讓它出了名！全株有毒。",
      "zh-Hans": "早春最经典的金色号角花——野生的比花园品种小、颜色淡。诗人华兹华斯的诗让它出了名！全株有毒。",
      "yue": "早春最經典嘅金色號角花——野生嗰啲比花園品種細，顏色淺。詩人華茲華斯首詩令佢出咗名！全棵都有毒。",
      "fr": "Le classique trompette doré du début du printemps — les sauvages sont plus petits et plus pâles que ceux des jardins. Le poème de Wordsworth les a rendus célèbres ! Toxique.",
      "es": "La clásica trompeta dorada del comienzo de la primavera — los silvestres son más pequeños y pálidos que los de jardín. ¡El poema de Wordsworth los hizo famosos! Toda la planta es tóxica."
    }
  },
  {
    id: "commontoadflax",
    wiki: "Linaria_vulgaris",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 75,
    family: "Plantain",
    familyLatin: "Plantaginaceae",
    blooms: "Jul–Oct",
    where: ["Roadside verges", "Disturbed ground", "Railway banks"],
    names: {
      "en": "Common Toadflax",
      "zh-Hant": "柳穿魚",
      "zh-Hans": "柳穿鱼",
      "yue": "柳穿魚",
      "fr": "Linaire commune",
      "es": "Linaria común"
    },
    pronunciation: { pinyin: "liǔ chuān yú", jyutping: "lau5 cyun1 jyu4" },
    latin: "Linaria vulgaris",
    description: {
      "en": "Spikes of butter-yellow flowers with a bright orange spot in the middle — they look just like tiny snapdragons! Squeeze gently and the \"jaws\" open up.",
      "zh-Hant": "穗狀的奶油黃色花，中間有亮橘色斑——長得像迷你金魚草！輕輕一捏，「嘴巴」就會張開。",
      "zh-Hans": "穗状的奶油黄色花，中间有亮橘色斑——长得像迷你金鱼草！轻轻一捏，「嘴巴」就会张开。",
      "yue": "穗狀嘅牛油黃色花，中間有鮮橙色斑——好似迷你金魚草！輕輕揸一下，「個嘴」就會打開。",
      "fr": "Des épis de fleurs jaune beurre avec une tache orange vif au centre — comme de minuscules gueules-de-loup ! Appuie doucement et la « mâchoire » s'ouvre.",
      "es": "Espigas de flores amarillo mantequilla con una mancha naranja brillante en el centro — ¡parecen pequeñas bocas de dragón! Aprieta suavemente y la «boca» se abre."
    }
  },
  {
    id: "yellowarchangel",
    wiki: "Lamium_galeobdolon",
    color: "#f5e050",
    colorCategory: "yellow",
    heightCm: 60,
    family: "Mint",
    familyLatin: "Lamiaceae",
    blooms: "May–Jun",
    where: ["Old woodland floors", "Hedge banks", "Shady damp ground"],
    names: {
      "en": "Yellow Archangel",
      "zh-Hant": "黃花野芝麻",
      "zh-Hans": "黄花野芝麻",
      "yue": "黃花野芝麻",
      "fr": "Lamier jaune",
      "es": "Ortiga amarilla"
    },
    pronunciation: { pinyin: "huáng huā yě zhī ma", jyutping: "wong4 faa1 je5 zi1 maa4" },
    latin: "Lamium galeobdolon",
    description: {
      "en": "Whorls of bright yellow hooded flowers shoot up around square stems in May. Like a dead-nettle, it looks like nettle but doesn't sting — a friend with no bite.",
      "zh-Hant": "五月時，方形莖周圍輪狀地長出鮮黃色的帽子花。像死蕁麻一樣，外形像蕁麻但不會刺人——是個不咬人的朋友。",
      "zh-Hans": "五月时，方形茎周围轮状地长出鲜黄色的帽子花。像死荨麻一样，外形像荨麻但不会刺人——是个不咬人的朋友。",
      "yue": "五月嗰陣，方形莖周圍輪狀咁長出鮮黃色嘅帽子花。好似死蕁麻咁，外形似蕁麻但係唔會刺人——係個唔咬人嘅朋友。",
      "fr": "Des verticilles de fleurs jaune vif en cagoule autour d'une tige carrée en mai. Comme l'ortie morte, ressemble à une ortie mais sans piquer.",
      "es": "Verticilos de flores amarillas en capucha alrededor de un tallo cuadrado en mayo. Como la ortiga muerta, parece ortiga pero no pica."
    }
  },
  {
    id: "ladysmantle",
    wiki: "Alchemilla",
    color: "#c8d650",
    colorCategory: "yellow",
    heightCm: 45,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "Jun–Aug",
    where: ["Damp grassy banks", "Mountain meadows", "Old gardens (escapes)"],
    names: {
      "en": "Lady's Mantle",
      "zh-Hant": "羽衣草",
      "zh-Hans": "羽衣草",
      "yue": "羽衣草",
      "fr": "Alchémille",
      "es": "Pie de león"
    },
    pronunciation: { pinyin: "yǔ yī cǎo", jyutping: "jyu5 ji1 cou2" },
    latin: "Alchemilla mollis",
    description: {
      "en": "Frothy clouds of tiny lime-green flowers above scalloped, fan-like leaves. Drops of dew sit like silver beads on the leaves on dewy mornings — magical!",
      "zh-Hant": "羽毛狀的扇形葉子上方，飄著一團團小小的萊姆綠色花。露珠像銀色珠子停在葉上——非常夢幻！",
      "zh-Hans": "羽毛状的扇形叶子上方，飘着一团团小小的莱姆绿色花。露珠像银色珠子停在叶上——非常梦幻！",
      "yue": "羽毛狀嘅扇形葉上面，浮住一團團細細嘅萊姆綠色花。露珠好似銀色珠仔咁停喺葉度——好夢幻！",
      "fr": "Des nuages mousseux de minuscules fleurs vert tilleul au-dessus de feuilles en éventail. Les gouttes de rosée se posent comme des perles d'argent — magique !",
      "es": "Nubes de florecitas verde lima sobre hojas en forma de abanico. ¡Las gotas de rocío se posan como perlas de plata — pura magia!"
    }
  },
  {
    id: "catsear",
    wiki: "Hypochaeris_radicata",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 50,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Jun–Sep",
    where: ["Lawns and pasture", "Sandy verges", "Coastal dunes"],
    names: {
      "en": "Common Cat's-ear",
      "zh-Hant": "貓兒菊",
      "zh-Hans": "猫儿菊",
      "yue": "貓兒菊",
      "fr": "Porcelle enracinée",
      "es": "Hierba del halcón"
    },
    pronunciation: { pinyin: "māo ér jú", jyutping: "maau1 ji4 guk1" },
    latin: "Hypochaeris radicata",
    description: {
      "en": "Looks like a tall dandelion, but the stem is wiry and branched. Touch the rosette of leaves — they feel like a cat's furry ears!",
      "zh-Hant": "看起來像高高的蒲公英，但莖細而分枝。摸摸地面上的葉叢——感覺像貓咪毛茸茸的耳朵！",
      "zh-Hans": "看起来像高高的蒲公英，但茎细而分枝。摸摸地面上的叶丛——感觉像猫咪毛茸茸的耳朵！",
      "yue": "睇落好似高高嘅蒲公英，但係條莖幼又會分枝。摸下地面嘅葉叢——感覺好似貓貓毛茸茸嘅耳仔！",
      "fr": "Ressemble à un grand pissenlit, mais la tige est fine et ramifiée. Touche la rosette de feuilles — elles sont douces comme des oreilles de chat !",
      "es": "Parece un diente de león alto, pero el tallo es fino y ramificado. ¡Toca la roseta de hojas — son suaves como las orejas de un gato!"
    }
  },
  {
    id: "autumnhawkbit",
    wiki: "Scorzoneroides_autumnalis",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 40,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Jul–Oct",
    where: ["Lawns and pasture", "Roadside verges", "Old grassland"],
    names: {
      "en": "Autumn Hawkbit",
      "zh-Hant": "秋鴉蔥",
      "zh-Hans": "秋鸦葱",
      "yue": "秋鴉蔥",
      "fr": "Liondent d'automne",
      "es": "Diente de león otoñal"
    },
    pronunciation: { pinyin: "qiū yā cōng", jyutping: "cau1 aa1 cung1" },
    latin: "Scorzoneroides autumnalis",
    description: {
      "en": "When most flowers have given up, this golden one keeps shining well into autumn. Bumblebees and hoverflies love the late-season nectar.",
      "zh-Hant": "當大多數的花都凋謝了，這朵金色的小花還持續到深秋發光。大黃蜂和食蚜蠅最愛這晚季的花蜜。",
      "zh-Hans": "当大多数的花都凋谢了，这朵金色的小花还持续到深秋发光。大黄蜂和食蚜蝇最爱这晚季的花蜜。",
      "yue": "當大部分嘅花都謝晒，呢朵金色嘅小花仲一路開到深秋。大黃蜂同食蚜蠅最鍾意呢啲遲開嘅花蜜。",
      "fr": "Quand la plupart des fleurs ont fané, celle-ci continue à briller jusqu'en automne. Bourdons et syrphes adorent ce nectar tardif.",
      "es": "Cuando casi todas las flores se han marchitado, esta dorada sigue brillando hasta el otoño. ¡Los abejorros y sírfidos adoran su néctar tardío!"
    }
  },
  {
    id: "yellowhornedpoppy",
    wiki: "Glaucium_flavum",
    color: "#f9ca24",
    colorCategory: "yellow",
    heightCm: 60,
    family: "Poppy",
    familyLatin: "Papaveraceae",
    blooms: "Jun–Sep",
    poison: true,
    where: ["Shingle beaches", "Sea cliffs", "Coastal sand"],
    names: {
      "en": "Yellow Horned-poppy",
      "zh-Hant": "黃花海罌粟",
      "zh-Hans": "黄花海罂粟",
      "yue": "黃花海罌粟",
      "fr": "Glaucienne jaune",
      "es": "Adormidera marina"
    },
    pronunciation: { pinyin: "huáng huā hǎi yīng sù", jyutping: "wong4 faa1 hoi2 jing1 suk1" },
    latin: "Glaucium flavum",
    description: {
      "en": "A bright yellow poppy of pebbly beaches, with grey-green crinkly leaves. After flowering it grows ridiculously long curved seed-pods like cow horns!",
      "zh-Hant": "卵石海灘上的鮮黃色罌粟，葉子灰綠且皺皺的。開花後會結出像牛角一樣彎彎長長的種莢——超誇張！",
      "zh-Hans": "卵石海滩上的鲜黄色罂粟，叶子灰绿且皱皱的。开花后会结出像牛角一样弯弯长长的种荚——超夸张！",
      "yue": "卵石海灘嘅鮮黃色罌粟，葉灰綠又皺。開完花會結出好似牛角咁彎又長嘅種莢——超誇張！",
      "fr": "Un coquelicot jaune vif des plages de galets, aux feuilles vert-gris froissées. Après la floraison, il forme des gousses incroyablement longues et courbées comme des cornes !",
      "es": "Una amapola amarilla brillante de playas de guijarros, con hojas gris-verdes arrugadas. ¡Tras florecer, forma vainas largas y curvas como cuernos de vaca!"
    }
  },
  {
    id: "fieldforgetmenot",
    wiki: "Myosotis_arvensis",
    color: "#7d8df7",
    colorCategory: "blue",
    heightCm: 30,
    family: "Borage",
    familyLatin: "Boraginaceae",
    blooms: "Apr–Sep",
    where: ["Arable fields", "Garden corners", "Disturbed ground"],
    names: {
      "en": "Field Forget-me-not",
      "zh-Hant": "田勿忘草",
      "zh-Hans": "田勿忘草",
      "yue": "田勿忘草",
      "fr": "Myosotis des champs",
      "es": "Nomeolvides de campo"
    },
    pronunciation: { pinyin: "tián wù wàng cǎo", jyutping: "tin4 mat6 mong4 cou2" },
    latin: "Myosotis arvensis",
    description: {
      "en": "The dry-land cousin of the water forget-me-not — smaller and paler, but just as charming. The pink buds open into sky-blue flowers as they grow.",
      "zh-Hant": "勿忘草的旱地親戚——花更小、顏色更淡，但同樣討人喜愛。粉紅色的花苞展開後變成天藍色的花。",
      "zh-Hans": "勿忘草的旱地亲戚——花更小、颜色更淡，但同样讨人喜爱。粉红色的花苞展开后变成天蓝色的花。",
      "yue": "勿忘草嘅旱地親戚——花更細、顏色更淡，但係一樣咁得意。粉紅色嘅花蕾打開之後變成天藍色嘅花。",
      "fr": "La cousine de terre sèche du myosotis des marais — plus petite et plus pâle, mais tout aussi charmante. Les boutons roses s'ouvrent en fleurs bleu ciel.",
      "es": "El primo de tierra seca del nomeolvides de agua — más pequeño y pálido, pero igual de encantador. Los capullos rosas se abren en flores azul cielo."
    }
  },
  {
    id: "sweetviolet",
    wiki: "Viola_odorata",
    color: "#7d6bbf",
    colorCategory: "blue",
    heightCm: 12,
    family: "Violet",
    familyLatin: "Violaceae",
    blooms: "Feb–Apr",
    where: ["Hedge banks", "Woodland edges", "Old gardens"],
    names: {
      "en": "Sweet Violet",
      "zh-Hant": "香堇菜",
      "zh-Hans": "香堇菜",
      "yue": "香堇菜",
      "fr": "Violette odorante",
      "es": "Violeta común"
    },
    pronunciation: { pinyin: "xiāng jǐn cài", jyutping: "hoeng1 gan2 coi3" },
    latin: "Viola odorata",
    description: {
      "en": "Tiny violet (or sometimes white) flowers with a sweet, sweet smell — unlike the dog violet, which has none. One of the very first scents of spring!",
      "zh-Hant": "小小的紫羅蘭（有時是白色），帶著甜甜的香氣——這正是和山堇菜不同之處。是春天最早的氣息之一！",
      "zh-Hans": "小小的紫罗兰（有时是白色），带着甜甜的香气——这正是和山堇菜不同之处。是春天最早的气息之一！",
      "yue": "細細嘅紫羅蘭（有時係白色），有甜甜嘅香氣——同山堇菜唔同就係呢度。係春天最早嘅氣味之一！",
      "fr": "De minuscules fleurs violettes (parfois blanches) au parfum sucré — contrairement à la violette de Rivinus, qui n'a aucune odeur. L'un des tout premiers parfums du printemps !",
      "es": "Diminutas flores violetas (a veces blancas) de aroma dulcísimo — al revés que la violeta de los perros, que no huele. ¡Uno de los primeros perfumes de la primavera!"
    }
  },
  {
    id: "lousewort",
    wiki: "Pedicularis_sylvatica",
    color: "#c44d8c",
    colorCategory: "blue",
    heightCm: 18,
    family: "Broomrape",
    familyLatin: "Orobanchaceae",
    blooms: "Apr–Jul",
    where: ["Wet heaths", "Acid grassland", "Bog edges"],
    names: {
      "en": "Lousewort",
      "zh-Hant": "草地馬先蒿",
      "zh-Hans": "草地马先蒿",
      "yue": "草地馬先蒿",
      "fr": "Pédiculaire des bois",
      "es": "Pedicular de los bosques"
    },
    pronunciation: { pinyin: "cǎo dì mǎ xiān hāo", jyutping: "cou2 dei6 maa5 sin1 hou1" },
    latin: "Pedicularis sylvatica",
    description: {
      "en": "Pretty pink hooded flowers crouching low on damp heaths. Like yellow rattle, it's a sneaky plant that steals food from the roots of grasses next door!",
      "zh-Hant": "粉紅色的帽子花，低低地長在潮濕荒野上。像小鼻花一樣，它會偷偷從旁邊草的根偷取養分！",
      "zh-Hans": "粉红色的帽子花，低低地长在潮湿荒野上。像小鼻花一样，它会偷偷从旁边草的根偷取养分！",
      "yue": "粉紅色嘅帽子花，低低咁長喺潮濕荒野上。同小鼻花一樣，佢會偷偷哋由旁邊嘅草根度偷食物！",
      "fr": "De jolies fleurs roses en cagoule, basses sur les landes humides. Comme le petit rhinanthe, c'est une plante malicieuse qui vole sa nourriture aux racines des herbes voisines !",
      "es": "Bonitas flores rosas en capucha, agachadas en los brezales húmedos. ¡Como el sonajitas, roba alimento de las raíces de la hierba vecina!"
    }
  },
  {
    id: "sheepsbit",
    wiki: "Jasione_montana",
    color: "#5a4a9c",
    colorCategory: "blue",
    heightCm: 30,
    family: "Bellflower",
    familyLatin: "Campanulaceae",
    blooms: "Jun–Sep",
    where: ["Coastal cliffs", "Sandy heaths", "Dry stone walls"],
    names: {
      "en": "Sheep's-bit",
      "zh-Hant": "山牧根草",
      "zh-Hans": "山牧根草",
      "yue": "山牧根草",
      "fr": "Jasione des montagnes",
      "es": "Botón azul"
    },
    pronunciation: { pinyin: "shān mù gēn cǎo", jyutping: "saan1 muk6 gan1 cou2" },
    latin: "Jasione montana",
    description: {
      "en": "Pretty blue pom-pom flowers along Atlantic coasts. Looks a bit like devil's-bit scabious but is actually in the bellflower family — they fool everyone!",
      "zh-Hant": "大西洋海岸邊的漂亮藍色毛球花。長得有點像山蘿蔔，其實它是風鈴草科——常常騙到大家！",
      "zh-Hans": "大西洋海岸边的漂亮蓝色毛球花。长得有点像山萝卜，其实它是风铃草科——常常骗到大家！",
      "yue": "大西洋海岸邊嘅靚藍色毛球花。樣有少少似山蘿蔔，但其實係風鈴草科——成日呃到大家！",
      "fr": "De jolies fleurs en pompons bleus le long des côtes atlantiques. Ressemble à la succise mais appartient à la famille des campanules — ça trompe tout le monde !",
      "es": "Bonitas flores en pompón azul a lo largo de la costa atlántica. Parece la mordisco del diablo pero pertenece a la familia de las campánulas — ¡engaña a todo el mundo!"
    }
  },
  {
    id: "comfrey",
    wiki: "Symphytum_officinale",
    color: "#9b59b6",
    colorCategory: "blue",
    heightCm: 120,
    family: "Borage",
    familyLatin: "Boraginaceae",
    blooms: "May–Aug",
    where: ["River banks", "Wet ditches", "Damp meadows"],
    names: {
      "en": "Common Comfrey",
      "zh-Hant": "聚合草",
      "zh-Hans": "聚合草",
      "yue": "聚合草",
      "fr": "Grande consoude",
      "es": "Consuelda mayor"
    },
    pronunciation: { pinyin: "jù hé cǎo", jyutping: "zeoi6 hap6 cou2" },
    latin: "Symphytum officinale",
    description: {
      "en": "Big bushy plant with drooping bell-flowers in cream, pink or purple — even on the same plant! Old name: \"knit-bone\", from a long-ago belief it healed broken bones.",
      "zh-Hant": "高大叢生的植物，垂著鈴鐺花，奶油色、粉色或紫色都有——甚至同一株上都有！舊名「接骨」，源自古人相信它能接骨。",
      "zh-Hans": "高大丛生的植物，垂着铃铛花，奶油色、粉色或紫色都有——甚至同一株上都有！旧名「接骨」，源自古人相信它能接骨。",
      "yue": "高大叢生嘅植物，垂住鈴鐺花，奶油色、粉色定紫色都有——同一棵都有齊！舊名「接骨」，因為古人相信佢可以醫斷骨。",
      "fr": "Une grande plante touffue aux clochettes pendantes — crème, roses ou violettes, parfois sur la même plante ! Ancien nom : « consoude » car on la croyait soigner les os.",
      "es": "Planta grande y frondosa con campanitas colgantes — crema, rosa o violeta, ¡a veces en la misma planta! Antiguo nombre «sueldaconsuelda», por la creencia de que curaba huesos rotos."
    }
  },
  {
    id: "yarrow",
    wiki: "Achillea_millefolium",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 60,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Jun–Oct",
    where: ["Roadside verges", "Lawns and pasture", "Old meadows"],
    names: {
      "en": "Yarrow",
      "zh-Hant": "蓍草",
      "zh-Hans": "蓍草",
      "yue": "蓍草",
      "fr": "Achillée millefeuille",
      "es": "Milenrama"
    },
    pronunciation: { pinyin: "shī cǎo", jyutping: "si1 cou2" },
    latin: "Achillea millefolium",
    description: {
      "en": "Flat clusters of tiny white (sometimes pink) flowers above feathery leaves. Named after the Greek hero Achilles, who used it to heal soldiers' wounds!",
      "zh-Hant": "羽毛狀的葉子上方，平平地開著一叢叢小白花（有時是粉紅）。名字來自希臘英雄阿基里斯，他曾用它治療士兵的傷口！",
      "zh-Hans": "羽毛状的叶子上方，平平地开着一丛丛小白花（有时是粉红）。名字来自希腊英雄阿基里斯，他曾用它治疗士兵的伤口！",
      "yue": "羽毛狀嘅葉上面，平平咁開住一叢叢嘅小白花（有時粉紅）。個名嚟自希臘英雄阿基里斯，佢曾經用佢嚟醫士兵嘅傷口！",
      "fr": "Des bouquets aplatis de minuscules fleurs blanches (parfois roses) au-dessus de feuilles plumeuses. Nommée d'après le héros grec Achille, qui s'en servait pour soigner les blessures !",
      "es": "Racimos planos de florecitas blancas (a veces rosas) sobre hojas plumosas. ¡Lleva el nombre del héroe griego Aquiles, que la usaba para curar heridas!"
    }
  },
  {
    id: "hogweed",
    wiki: "Heracleum_sphondylium",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 200,
    family: "Carrot",
    familyLatin: "Apiaceae",
    blooms: "Jun–Sep",
    where: ["Roadside verges", "Field edges", "Damp meadows"],
    names: {
      "en": "Common Hogweed",
      "zh-Hant": "歐獨活",
      "zh-Hans": "欧独活",
      "yue": "歐獨活",
      "fr": "Berce commune",
      "es": "Branca ursina"
    },
    pronunciation: { pinyin: "ōu dú huó", jyutping: "au1 duk6 wut6" },
    latin: "Heracleum sphondylium",
    description: {
      "en": "Big white umbrella flowers on tall hollow stalks. Hoverflies and beetles love it. NOT to be confused with the giant hogweed, whose sap can burn skin!",
      "zh-Hant": "高高的中空莖上開著大大的白色傘狀花，食蚜蠅和甲蟲最愛。不要和巨型大豕草搞混了——後者的汁液會灼傷皮膚！",
      "zh-Hans": "高高的中空茎上开着大大的白色伞状花，食蚜蝇和甲虫最爱。不要和巨型大豕草搞混了——后者的汁液会灼伤皮肤！",
      "yue": "高高嘅中空莖上面開大大嘅白色傘形花，食蚜蠅同甲蟲最鍾意。唔好同巨型大豕草搞錯——果隻嘅汁液會灼傷皮膚！",
      "fr": "De grandes ombelles blanches sur de hautes tiges creuses. Syrphes et coléoptères l'adorent. À ne PAS confondre avec la berce du Caucase, dont la sève brûle la peau !",
      "es": "Grandes umbelas blancas sobre tallos huecos altos. Sírfidos y escarabajos la adoran. ¡NO confundir con la branca ursina gigante, cuya savia quema la piel!"
    }
  },
  {
    id: "hedgebindweed",
    wiki: "Calystegia_sepium",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 300,
    family: "Bindweed",
    familyLatin: "Convolvulaceae",
    blooms: "Jun–Sep",
    where: ["Hedgerows", "Garden walls", "Riverside thickets"],
    names: {
      "en": "Hedge Bindweed",
      "zh-Hant": "籬天劍",
      "zh-Hans": "篱天剑",
      "yue": "籬天劍",
      "fr": "Liseron des haies",
      "es": "Corregüela mayor"
    },
    pronunciation: { pinyin: "lí tiān jiàn", jyutping: "lei4 tin1 gim3" },
    latin: "Calystegia sepium",
    description: {
      "en": "Big snow-white trumpet flowers climb up hedges and walls in summer. Each flower lasts only a day, then twists shut — gardeners call them \"granny-pop-out-of-bed\"!",
      "zh-Hant": "夏天，雪白色的大號角花爬上樹籬和牆壁。每朵只開一天就扭曲合起來——園丁叫它「奶奶跳起床」！",
      "zh-Hans": "夏天，雪白色的大号角花爬上树篱和墙壁。每朵只开一天就扭曲合起来——园丁叫它「奶奶跳起床」！",
      "yue": "夏天，雪白色嘅大號角花爬上樹籬同牆壁。每朵只開一日就扭曲合埋——園丁叫佢「嫲嫲跳起身」！",
      "fr": "De grandes trompettes blanc neige escaladent haies et murs en été. Chaque fleur ne dure qu'un jour avant de se refermer — les jardiniers l'appellent « grand-mère qui saute du lit » !",
      "es": "Grandes trompetas blancas trepan por setos y muros en verano. Cada flor solo dura un día y luego se enrosca — ¡los jardineros la llaman «abuela que salta de la cama»!"
    }
  },
  {
    id: "wildstrawberry",
    wiki: "Fragaria_vesca",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 15,
    family: "Rose",
    familyLatin: "Rosaceae",
    blooms: "Apr–Jul",
    where: ["Woodland clearings", "Hedge banks", "Old grassland"],
    names: {
      "en": "Wild Strawberry",
      "zh-Hant": "野草莓",
      "zh-Hans": "野草莓",
      "yue": "野草莓",
      "fr": "Fraisier des bois",
      "es": "Fresa silvestre"
    },
    pronunciation: { pinyin: "yě cǎo méi", jyutping: "je5 cou2 mui4" },
    latin: "Fragaria vesca",
    description: {
      "en": "Small white five-petalled flowers turn into the tiniest, sweetest red berries. They taste a hundred times better than shop strawberries — find one and try!",
      "zh-Hant": "五片白色花瓣的小花，會結出最迷你、最甜的紅色小果子。比超市的草莓好吃一百倍——找到了試試看！",
      "zh-Hans": "五片白色花瓣的小花，会结出最迷你、最甜的红色小果子。比超市的草莓好吃一百倍——找到了试试看！",
      "yue": "五塊白色花瓣嘅小花，會結出最迷你、最甜嘅紅色小果。比超市嘅草莓好食一百倍——搵到試下啦！",
      "fr": "De petites fleurs blanches à cinq pétales donnent les plus minuscules et plus sucrées des fraises rouges. Cent fois meilleures que celles du magasin — trouve-en une et goûte !",
      "es": "Pequeñas flores blancas de cinco pétalos se convierten en las fresitas rojas más diminutas y dulces. ¡Saben cien veces mejor que las del super — encuéntrala y pruébala!"
    }
  },
  {
    id: "whitedeadnettle",
    wiki: "Lamium_album",
    color: "#ffffff",
    colorCategory: "white",
    heightCm: 60,
    family: "Mint",
    familyLatin: "Lamiaceae",
    blooms: "Mar–Oct",
    where: ["Hedge banks", "Roadside verges", "Garden corners"],
    names: {
      "en": "White Dead-nettle",
      "zh-Hant": "白花野芝麻",
      "zh-Hans": "白花野芝麻",
      "yue": "白花野芝麻",
      "fr": "Lamier blanc",
      "es": "Ortiga muerta blanca"
    },
    pronunciation: { pinyin: "bái huā yě zhī ma", jyutping: "baak6 faa1 je5 zi1 maa4" },
    latin: "Lamium album",
    description: {
      "en": "Looks just like a stinging nettle but has white hooded flowers and never stings — that's why it's called \"dead\". A favourite of long-tongued bumblebees.",
      "zh-Hant": "外型就像會刺人的蕁麻，但開的是白色帽子花，而且不會刺人——所以才叫「死」蕁麻。長舌頭的大黃蜂最愛它。",
      "zh-Hans": "外型就像会刺人的荨麻，但开的是白色帽子花，而且不会刺人——所以才叫「死」荨麻。长舌头的大黄蜂最爱它。",
      "yue": "樣似會刺人嘅蕁麻，但係開白色帽子花，而且唔會刺人——所以叫「死」蕁麻。長脷嘅大黃蜂最鍾意佢。",
      "fr": "Ressemble à l'ortie qui pique, mais a des fleurs blanches en cagoule et ne pique jamais — d'où « morte ». Adorée des bourdons à longue langue.",
      "es": "Parece una ortiga que pica, pero tiene flores blancas en capucha y nunca pica — por eso se llama «muerta». Una favorita de los abejorros de lengua larga."
    }
  },
  {
    id: "commoncentaury",
    wiki: "Centaurium_erythraea",
    color: "#e85a93",
    colorCategory: "pink",
    heightCm: 30,
    family: "Gentian",
    familyLatin: "Gentianaceae",
    blooms: "Jun–Sep",
    where: ["Sand dunes", "Burren grassland (Clare)", "Sunny banks"],
    names: {
      "en": "Common Centaury",
      "zh-Hant": "紅百金花",
      "zh-Hans": "红百金花",
      "yue": "紅百金花",
      "fr": "Petite centaurée",
      "es": "Centaurea menor"
    },
    pronunciation: { pinyin: "hóng bǎi jīn huā", jyutping: "hung4 baak3 gam1 faa1" },
    latin: "Centaurium erythraea",
    description: {
      "en": "Tight clusters of bright pink star-flowers. They open only in sunshine — if it's cloudy, all the petals stay tightly shut!",
      "zh-Hant": "鮮粉紅色的星星花密密地長在一起。只在有陽光時才打開——多雲的時候花瓣會全部緊緊合住！",
      "zh-Hans": "鲜粉红色的星星花密密地长在一起。只在有阳光时才打开——多云的时候花瓣会全部紧紧合住！",
      "yue": "鮮粉紅色嘅星星花密密咁長埋一齊。淨係有陽光時先會開——天陰時所有花瓣都會緊緊合埋！",
      "fr": "Des bouquets serrés de fleurs en étoile rose vif. Elles ne s'ouvrent qu'au soleil — par temps couvert, tous les pétales restent bien fermés !",
      "es": "Racimos compactos de flores estrelladas rosa intenso. ¡Solo se abren al sol — si está nublado, todos los pétalos se quedan bien cerrados!"
    }
  },
  {
    id: "commonmallow",
    wiki: "Malva_sylvestris",
    color: "#a64da6",
    colorCategory: "pink",
    heightCm: 100,
    family: "Mallow",
    familyLatin: "Malvaceae",
    blooms: "Jun–Sep",
    where: ["Roadside verges", "Waste ground", "Coastal banks"],
    names: {
      "en": "Common Mallow",
      "zh-Hant": "歐錦葵",
      "zh-Hans": "欧锦葵",
      "yue": "歐錦葵",
      "fr": "Mauve sylvestre",
      "es": "Malva común"
    },
    pronunciation: { pinyin: "ōu jǐn kuí", jyutping: "au1 gam2 kwai4" },
    latin: "Malva sylvestris",
    description: {
      "en": "Big pink-purple flowers with darker stripes leading bees to the centre — like a tiny landing strip! The round seed-pods are called \"cheeses\" by children.",
      "zh-Hant": "大大的粉紫色花，深色條紋引導蜜蜂找到中央——像迷你跑道一樣！圓圓的種莢被小朋友叫做「起司」。",
      "zh-Hans": "大大的粉紫色花，深色条纹引导蜜蜂找到中央——像迷你跑道一样！圆圆的种荚被小朋友叫做「起司」。",
      "yue": "好大朵嘅粉紫色花，深色條紋指引蜜蜂搵到中央——好似迷你跑道！圓圓嘅種莢俾啲細路叫做「芝士」。",
      "fr": "De grandes fleurs rose-violet avec des rayures plus foncées qui guident les abeilles vers le centre — comme une mini piste d'atterrissage ! Les fruits ronds, appelés « petits fromages » par les enfants.",
      "es": "Grandes flores rosa-violeta con rayas oscuras que guían a las abejas hacia el centro — ¡como una pista de aterrizaje! Sus frutos redondos los niños los llaman «quesitos»."
    }
  },
  {
    id: "hempagrimony",
    wiki: "Eupatorium_cannabinum",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 150,
    family: "Daisy",
    familyLatin: "Asteraceae",
    blooms: "Jul–Sep",
    where: ["Wet ditches", "Riverbanks", "Marsh edges"],
    names: {
      "en": "Hemp-agrimony",
      "zh-Hant": "大麻葉澤蘭",
      "zh-Hans": "大麻叶泽兰",
      "yue": "大麻葉澤蘭",
      "fr": "Eupatoire chanvrine",
      "es": "Eupatorio"
    },
    pronunciation: { pinyin: "dà má yè zé lán", jyutping: "daai6 maa4 jip6 zaak6 laan4" },
    latin: "Eupatorium cannabinum",
    description: {
      "en": "Frothy clouds of dusty-pink flowers in wet places — and a magnet for butterflies in late summer! Painted ladies, peacocks and red admirals all stop by.",
      "zh-Hant": "潮濕地方裡，毛茸茸的粉色花團——夏末蝴蝶的磁鐵！小紅蛺蝶、孔雀蛺蝶和紅艦蝶都會來光顧。",
      "zh-Hans": "潮湿地方里，毛茸茸的粉色花团——夏末蝴蝶的磁铁！小红蛱蝶、孔雀蛱蝶和红舰蝶都会来光顾。",
      "yue": "潮濕地方度，毛茸茸嘅粉色花團——夏末蝴蝶嘅磁石！小紅蛺蝶、孔雀蛺蝶同紅艦蝶都會嚟。",
      "fr": "Des nuages mousseux de fleurs rose poussiéreux dans les endroits humides — un aimant à papillons en fin d'été ! Belles-dames, paons et vulcains s'y posent.",
      "es": "Nubes esponjosas de flores rosa polvoriento en lugares húmedos — ¡un imán para mariposas a finales del verano! Vanesas, pavos reales y almirantes rojos visitan."
    }
  },
  {
    id: "pyramidalorchid",
    wiki: "Anacamptis_pyramidalis",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 50,
    family: "Orchid",
    familyLatin: "Orchidaceae",
    blooms: "Jun–Aug",
    where: ["Burren grassland (Clare)", "Sand dunes", "Calcareous banks"],
    names: {
      "en": "Pyramidal Orchid",
      "zh-Hant": "金字塔蘭",
      "zh-Hans": "金字塔兰",
      "yue": "金字塔蘭",
      "fr": "Orchis pyramidal",
      "es": "Orquídea piramidal"
    },
    pronunciation: { pinyin: "jīn zì tǎ lán", jyutping: "gam1 zi6 taap3 laan4" },
    latin: "Anacamptis pyramidalis",
    description: {
      "en": "Bright pink flowers stack into a perfect little pyramid — that's how it gets its name. Special butterflies and moths with very long tongues are its main pollinators.",
      "zh-Hant": "鮮粉紅色的花疊成完美的小金字塔——名字就是這樣來的。長舌頭的蝴蝶和飛蛾是它主要的授粉者。",
      "zh-Hans": "鲜粉红色的花叠成完美的小金字塔——名字就是这样来的。长舌头的蝴蝶和飞蛾是它主要的授粉者。",
      "yue": "鮮粉紅色嘅花疊成完美嘅小金字塔——個名就係咁嚟。長脷嘅蝴蝶同飛蛾係佢主要嘅授粉者。",
      "fr": "Des fleurs rose vif s'empilent en une parfaite petite pyramide — d'où son nom. Ses pollinisateurs principaux sont des papillons à très longue trompe.",
      "es": "Flores rosa intenso apiladas en una perfecta pirámide pequeña — de ahí su nombre. Sus polinizadores principales son mariposas y polillas de lengua larguísima."
    }
  },
  {
    id: "greatwillowherb",
    wiki: "Epilobium_hirsutum",
    color: "#c44d8c",
    colorCategory: "pink",
    heightCm: 180,
    family: "Evening Primrose",
    familyLatin: "Onagraceae",
    blooms: "Jul–Sep",
    where: ["River banks", "Wet ditches", "Pond edges"],
    names: {
      "en": "Great Willowherb",
      "zh-Hant": "毛柳葉菜",
      "zh-Hans": "毛柳叶菜",
      "yue": "毛柳葉菜",
      "fr": "Épilobe hirsute",
      "es": "Epilobio peludo"
    },
    pronunciation: { pinyin: "máo liǔ yè cài", jyutping: "mou4 lau5 jip6 coi3" },
    latin: "Epilobium hirsutum",
    description: {
      "en": "Tall fuzzy plant with big purple-pink four-petalled flowers along streams. Old country name: \"codlins-and-cream\" — apparently it smelled like apples cooked in cream!",
      "zh-Hant": "溪邊高高、毛茸茸的植物，開著大大的紫粉色四瓣花。鄉下舊名叫「蘋果加奶油」——據說它聞起來像奶油煮蘋果！",
      "zh-Hans": "溪边高高、毛茸茸的植物，开着大大的紫粉色四瓣花。乡下旧名叫「苹果加奶油」——据说它闻起来像奶油煮苹果！",
      "yue": "溪邊高高、毛茸茸嘅植物，開大大嘅紫粉色四瓣花。鄉下舊名叫「蘋果加忌廉」——聽講聞起嚟好似忌廉煮蘋果！",
      "fr": "Une grande plante poilue aux grandes fleurs rose-violet à quatre pétales, au bord des ruisseaux. Vieux nom : « pommes-et-crème » — on disait qu'elle sentait la pomme cuite à la crème !",
      "es": "Planta alta y peluda con grandes flores rosa-violeta de cuatro pétalos junto a los arroyos. Antiguo nombre rural: «manzanas con nata» — ¡decían que olía a manzanas cocidas!"
    }
  },
  {
    id: "seaholly",
    wiki: "Eryngium_maritimum",
    color: "#7d8df7",
    colorCategory: "other",
    heightCm: 50,
    family: "Carrot",
    familyLatin: "Apiaceae",
    blooms: "Jul–Sep",
    where: ["Sand dunes", "Shingle beaches", "Coastal banks"],
    names: {
      "en": "Sea Holly",
      "zh-Hant": "海濱刺芹",
      "zh-Hans": "海滨刺芹",
      "yue": "海濱刺芹",
      "fr": "Panicaut maritime",
      "es": "Cardo marino"
    },
    pronunciation: { pinyin: "hǎi bīn cì qín", jyutping: "hoi2 ban1 ci3 kan4" },
    latin: "Eryngium maritimum",
    description: {
      "en": "A spiky steel-blue plant of sandy beaches — looks like a holly bush but is really in the carrot family! Its waxy leaves keep it from drying out in the salty wind.",
      "zh-Hant": "沙灘上多刺的鋼藍色植物——外型像冬青，其實是胡蘿蔔家族的成員！蠟質葉子能在鹹海風中防止乾枯。",
      "zh-Hans": "沙滩上多刺的钢蓝色植物——外型像冬青，其实是胡萝卜家族的成员！蜡质叶子能在咸海风中防止干枯。",
      "yue": "沙灘上多刺嘅鋼藍色植物——樣似冬青，但其實係胡蘿蔔家族！蠟質嘅葉可以喺鹹鹹嘅海風入面防止乾枯。",
      "fr": "Une plante épineuse bleu acier des plages sablonneuses — on dirait un houx, mais c'est en fait de la famille de la carotte ! Ses feuilles cireuses la protègent du vent salé.",
      "es": "Una planta espinosa azul acero de playas arenosas — ¡parece un acebo pero es de la familia de la zanahoria! Sus hojas cerosas la protegen del viento salado."
    }
  },
  {
    id: "heartsease",
    wiki: "Viola_tricolor",
    color: "#9b59b6",
    colorCategory: "other",
    heightCm: 25,
    family: "Violet",
    familyLatin: "Violaceae",
    blooms: "Apr–Sep",
    where: ["Sandy fields", "Coastal grassland", "Disturbed ground"],
    names: {
      "en": "Heartsease (Wild Pansy)",
      "zh-Hant": "三色堇",
      "zh-Hans": "三色堇",
      "yue": "三色堇",
      "fr": "Pensée sauvage",
      "es": "Pensamiento silvestre"
    },
    pronunciation: { pinyin: "sān sè jǐn", jyutping: "saam1 sik1 gan2" },
    latin: "Viola tricolor",
    description: {
      "en": "A tiny wild pansy with purple, yellow and white all on the same flower — three faces in one! It's the wild ancestor of the big garden pansies.",
      "zh-Hant": "迷你的野生三色堇，同一朵花上有紫、黃、白三色——三張臉合一！它是花園大三色堇的野生祖先。",
      "zh-Hans": "迷你的野生三色堇，同一朵花上有紫、黄、白三色——三张脸合一！它是花园大三色堇的野生祖先。",
      "yue": "迷你嘅野生三色堇，同一朵花上面有紫、黃、白三色——三張面合一！佢就係花園入面大嘅三色堇嘅野生祖先。",
      "fr": "Une petite pensée sauvage aux trois couleurs sur une même fleur — violet, jaune et blanc, trois visages à la fois ! C'est l'ancêtre sauvage des grandes pensées de jardin.",
      "es": "Una pequeña pensamiento silvestre con tres colores en una misma flor — violeta, amarillo y blanco, ¡tres caras a la vez! Es el ancestro salvaje de los pensamientos de jardín."
    }
  }
];

window.SPOTS = [
  {
    id: "burren",
    name: "The Burren",
    region: "County Clare",
    description: {
      "en": "A magical limestone landscape on the west coast — over 70% of Ireland's native flowers grow here, including 24 of 28 native orchids. Arctic, alpine and Mediterranean plants live side by side!",
      "zh-Hant": "西海岸魔幻般的石灰岩地景——愛爾蘭原生植物超過七成都在這裡找得到，28種原生蘭花有24種在此生長。北極、高山和地中海植物比鄰共生！",
      "zh-Hans": "西海岸魔幻般的石灰岩地景——爱尔兰原生植物超过七成都在这里找得到，28种原生兰花有24种在此生长。北极、高山和地中海植物比邻共生！",
      "yue": "西海岸魔幻嘅石灰岩地景——愛爾蘭原生植物超過七成都喺呢度搵到，28種原生蘭花有24種喺呢度生長。北極、高山同地中海植物喺度齊齊生長！",
      "fr": "Un paysage calcaire magique sur la côte ouest — plus de 70 % des fleurs natives d'Irlande y poussent, dont 24 des 28 orchidées indigènes. Plantes arctiques, alpines et méditerranéennes y cohabitent !",
      "es": "Un paisaje mágico de caliza en la costa oeste — más del 70% de las flores nativas de Irlanda crecen aquí, incluidas 24 de 28 orquídeas. ¡Plantas árticas, alpinas y mediterráneas conviven aquí!"
    },
    flowers: ["springgentian", "mountainavens", "bloodycranesbill", "earlypurpleorchid", "spottedorchid", "beeorchid", "pyramidalorchid", "wildthyme", "milkwort", "birdsfoottrefoil", "cowslip", "ladysbedstraw", "commoncentaury"]
  },
  {
    id: "killarneynp",
    name: "Killarney National Park",
    region: "County Kerry",
    description: {
      "en": "Ancient oak woods, rushing streams and big lakes. In April and May the woodland floor is carpeted with bluebells, wild garlic and wood anemones — pure magic!",
      "zh-Hant": "古老的橡樹林、奔騰的溪流和大大的湖泊。四五月時林地鋪滿藍鈴花、熊蔥和林銀蓮花——夢幻無比！",
      "zh-Hans": "古老的橡树林、奔腾的溪流和大大的湖泊。四五月时林地铺满蓝铃花、熊葱和林银莲花——梦幻无比！",
      "yue": "古老嘅橡樹林、奔騰嘅溪流同好大嘅湖。四、五月嗰陣，林地鋪滿藍鈴花、熊蔥同林銀蓮花——好夢幻！",
      "fr": "Forêts de chênes anciennes, ruisseaux vifs et grands lacs. En avril et mai, le sol se couvre de jacinthes, d'ail des ours et d'anémones des bois — pure magie !",
      "es": "Antiguos bosques de robles, arroyos y grandes lagos. En abril y mayo, el suelo se cubre de jacintos silvestres, ajo de oso y anémonas — ¡pura magia!"
    },
    flowers: ["bluebell", "wildgarlic", "woodanemone", "primrose", "lessercelandine", "foxglove", "woodsorrel", "honeysuckle", "stitchwort", "wilddaffodil", "sweetviolet", "yellowarchangel"]
  },
  {
    id: "connemara",
    name: "Connemara National Park",
    region: "County Galway",
    description: {
      "en": "Wild Atlantic mountains, blanket bogs and twinkling lakes. Look for purple heather and yellow bog asphodel in summer, and Atlantic-fringe plants like sundews and butterworts.",
      "zh-Hant": "野性的大西洋群山、覆蓋式沼澤和閃亮的湖泊。夏天找紫色的石楠花和黃色的沼澤花，還有大西洋邊緣的茅膏菜和捕蟲堇。",
      "zh-Hans": "野性的大西洋群山、覆盖式沼泽和闪亮的湖泊。夏天找紫色的石楠花和黄色的沼泽花，还有大西洋边缘的茅膏菜和捕虫堇。",
      "yue": "野性嘅大西洋群山、毯狀沼澤同閃閃嘅湖。夏天搵紫色嘅石楠花同黃色嘅沼澤花，仲有大西洋邊緣嘅茅膏菜同捕蟲堇。",
      "fr": "Montagnes atlantiques sauvages, tourbières de couverture et lacs scintillants. Cherche la bruyère violette et la narthécie jaune en été, plus les rosolis et grassettes !",
      "es": "Montañas atlánticas salvajes, turberas y lagos brillantes. Busca el brezo morado y el asfódelo amarillo en verano, y plantas atlánticas como rocíos del sol y grasillas."
    },
    flowers: ["heather", "bellheather", "crossleavedheath", "bogasphodel", "bogcotton", "roundleavedsundew", "butterwort", "tormentil", "gorse"]
  },
  {
    id: "glenveagh",
    name: "Glenveagh National Park",
    region: "County Donegal",
    description: {
      "en": "Mountains, glens and one of Ireland's largest red deer herds. Heather paints the slopes purple in late summer, while bog cotton dances over the wet ground.",
      "zh-Hant": "群山、峽谷，以及愛爾蘭最大的赤鹿群之一。夏末石楠花把山坡染成紫色，沼澤上的羊鬍子草在風中飛舞。",
      "zh-Hans": "群山、峡谷，以及爱尔兰最大的赤鹿群之一。夏末石楠花把山坡染成紫色，沼泽上的羊胡子草在风中飞舞。",
      "yue": "群山、峽谷，以及愛爾蘭其中一個最大嘅赤鹿群。夏末石楠花將山坡染成紫色，沼澤度嘅羊鬍子草喺風中飛舞。",
      "fr": "Montagnes, vallées et l'une des plus grandes hardes de cerfs rouges d'Irlande. La bruyère colore les pentes en violet à la fin de l'été, tandis que la linaigrette danse sur les tourbières.",
      "es": "Montañas, valles y una de las mayores manadas de ciervo rojo de Irlanda. El brezo colorea las laderas de morado al final del verano, mientras el algodón de turbera baila sobre el suelo húmedo."
    },
    flowers: ["heather", "gorse", "bogcotton", "bogasphodel", "tormentil", "foxglove", "raggedrobin", "yellowiris"]
  },
  {
    id: "wicklowmountains",
    name: "Wicklow Mountains National Park",
    region: "County Wicklow",
    description: {
      "en": "Ireland's largest national park, just south of Dublin. Heather-clad mountains, deep valleys with foxgloves and bog-loving sundews and butterworts.",
      "zh-Hant": "愛爾蘭最大的國家公園，就在都柏林南邊。石楠覆蓋的群山、長著毛地黃的深谷，還有沼澤裡的茅膏菜和捕蟲堇。",
      "zh-Hans": "爱尔兰最大的国家公园，就在都柏林南边。石楠覆盖的群山、长着毛地黄的深谷，还有沼泽里的茅膏菜和捕虫堇。",
      "yue": "愛爾蘭最大嘅國家公園，就喺都柏林南面。石楠覆蓋嘅群山、長住毛地黃嘅深谷，仲有沼澤入面嘅茅膏菜同捕蟲堇。",
      "fr": "Le plus grand parc national d'Irlande, juste au sud de Dublin. Montagnes couvertes de bruyère, vallées profondes avec digitales, et tourbières aux rosolis et grassettes.",
      "es": "El parque nacional más grande de Irlanda, al sur de Dublín. Montañas cubiertas de brezo, valles profundos con dedaleras y turberas con rocíos del sol y grasillas."
    },
    flowers: ["heather", "foxglove", "bogasphodel", "roundleavedsundew", "butterwort", "tormentil", "gorse", "bogcotton", "rosebaywillowherb", "lousewort", "hempagrimony"]
  },
  {
    id: "wildnephin",
    name: "Wild Nephin National Park",
    region: "County Mayo",
    description: {
      "en": "A vast wild bog and mountain wilderness on the west coast. One of Europe's largest blanket bogs — perfect for finding sundews, butterworts and bog cotton.",
      "zh-Hant": "西海岸廣闊原始的沼澤與群山荒野。歐洲最大的毯狀沼澤之一——是觀察茅膏菜、捕蟲堇和羊鬍子草的最佳地點。",
      "zh-Hans": "西海岸广阔原始的沼泽与群山荒野。欧洲最大的毯状沼泽之一——是观察茅膏菜、捕虫堇和羊胡子草的最佳地点。",
      "yue": "西海岸一大片原始嘅沼澤同山地荒野。歐洲最大嘅毯狀沼澤之一——係搵茅膏菜、捕蟲堇同羊鬍子草嘅最佳地點。",
      "fr": "Une immense tourbière et région montagneuse sauvage de la côte ouest. L'une des plus grandes tourbières de couverture d'Europe — parfait pour les rosolis et grassettes !",
      "es": "Una vasta turbera salvaje y montañas en la costa oeste. Una de las mayores turberas de manto de Europa — ideal para encontrar rocíos del sol, grasillas y algodón de turbera."
    },
    flowers: ["roundleavedsundew", "butterwort", "bogcotton", "bogasphodel", "heather", "crossleavedheath", "tormentil"]
  },
  {
    id: "phoenixpark",
    name: "Phoenix Park",
    region: "Dublin",
    description: {
      "en": "One of Europe's biggest city parks. Lawns full of daisies and dandelions, hedgerows of hawthorn and blackthorn, and old trees clothed in ivy. A great first place to learn flowers.",
      "zh-Hant": "歐洲最大的城市公園之一。草坪上滿是雛菊和蒲公英，樹籬有山楂和黑刺李，老樹上掛著常春藤。是認識花卉最好的入門地點。",
      "zh-Hans": "欧洲最大的城市公园之一。草坪上满是雏菊和蒲公英，树篱有山楂和黑刺李，老树上挂着常春藤。是认识花卉最好的入门地点。",
      "yue": "歐洲最大嘅市內公園之一。草坪上滿哂雛菊同蒲公英，樹籬有山楂同黑刺李，老樹上爬住常春藤。係認識花卉最好嘅入門地點。",
      "fr": "L'un des plus grands parcs urbains d'Europe. Pelouses pleines de pâquerettes et de pissenlits, haies d'aubépine et de prunellier, vieux arbres couverts de lierre. Idéal pour débuter !",
      "es": "Uno de los mayores parques urbanos de Europa. Céspedes llenos de margaritas y dientes de león, setos de espino blanco y endrino, y árboles viejos cubiertos de hiedra. Ideal para empezar."
    },
    flowers: ["daisy", "dandelion", "hawthorn", "blackthorn", "ivy", "buttercup", "whiteclover", "redclover", "selfheal", "cuckooflower", "yarrow", "catsear", "whitedeadnettle"]
  },
  {
    id: "cliffsmoher",
    name: "Cliffs of Moher",
    region: "County Clare",
    description: {
      "en": "Towering Atlantic sea cliffs covered in pink thrift cushions and white sea campion in May and June. The wild salty wind shapes everything that grows here.",
      "zh-Hant": "高聳的大西洋海崖，五六月鋪滿粉紅色的海石竹和白色的海濱蠅子草。野性的鹹風塑造了這裡的一切植物。",
      "zh-Hans": "高耸的大西洋海崖，五六月铺满粉红色的海石竹和白色的海滨蝇子草。野性的咸风塑造了这里的一切植物。",
      "yue": "高聳嘅大西洋海崖，五、六月鋪滿粉紅色嘅海石竹同白色嘅海濱蠅子草。野性嘅鹹風雕塑咗呢度生長嘅一切。",
      "fr": "Imposantes falaises atlantiques couvertes de coussins roses d'armérie et de silène maritime blanc en mai-juin. Le vent salé sauvage façonne tout ce qui pousse ici !",
      "es": "Imponentes acantilados atlánticos cubiertos de cojines rosas de clavelina y collejas blancas en mayo y junio. ¡El viento salado moldea todo lo que crece aquí!"
    },
    flowers: ["thrift", "seacampion", "bluebell", "primrose", "birdsfoottrefoil", "harebell", "wildcarrot", "seaholly", "yellowhornedpoppy", "sheepsbit"]
  },
  {
    id: "howthhead",
    name: "Howth Head",
    region: "Dublin",
    description: {
      "en": "A rocky peninsula at the edge of Dublin city. Heather and gorse on the cliff tops, bluebells in the woods in spring, and great views of the sea below.",
      "zh-Hant": "都柏林邊緣的多岩石半島。崖頂長滿石楠和荊豆，春天樹林裡開滿藍鈴花，下面是壯闊的海景。",
      "zh-Hans": "都柏林边缘的多岩石半岛。崖顶长满石楠和荆豆，春天树林里开满蓝铃花，下面是壮阔的海景。",
      "yue": "都柏林邊緣嘅岩石半島。崖頂長滿石楠同荊豆，春天樹林入面開滿藍鈴花，下面係壯麗嘅海景。",
      "fr": "Une péninsule rocheuse à l'extrême est de Dublin. Bruyère et ajonc sur les falaises, jacinthes des bois au printemps, et superbes vues sur la mer.",
      "es": "Una península rocosa al borde de Dublín. Brezo y tojo en lo alto de los acantilados, jacintos silvestres en los bosques en primavera, y vistas maravillosas al mar."
    },
    flowers: ["gorse", "heather", "bluebell", "primrose", "thrift", "seacampion", "birdsfoottrefoil", "foxglove"]
  }
];
