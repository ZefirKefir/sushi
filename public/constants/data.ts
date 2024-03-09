import images from "./images";

const data = {
  sections: [
    {
      name: 'all',
      id: 45714,
      src: images.temp,
    },

    {
      name: 'sets',
      id: 58103,
      src: images.sets,
    },

    {
      name: 'nigiri',
      id: 18591,
      src: images.section.nigiri,
    },
    {
      name: 'gunkan',
      id: 49145,
      src: images.section.gunkan,
    },
    {
      name: 'hosomaki',
      id: 15916,
      src: images.section.hosomaki,
    },
    {
      name: 'futomaki',
      id: 17718,
      src: images.section.futomaki,
    },
    {
      name: 'uramaki',
      id: 23155,
      src: images.section.uramaki,
    },
    {
      name: 'special',
      id: 84813,
      src: images.section.special,
    },
    {
      name: 'desserts',
      id: 41328,
      src: images.section.desserts,
    },
  ],
  sets: [
    {
      id: 1011,
      name: 'miko',
      composition: [
        {
          id: 143851,
          amount: 16,
        },
      ],
    },
    {
      id: 1001,
      name: 'kiri',
      composition: [
        {
          id: 576111,
          amount: 5,
        },
        {
          id: 578423,
          amount: 5,
        },
        {
          id: 198891,
          amount: 5,
        },
        {
          id: 143851,
          amount: 4,
        },
      ],
    },
    {
      id: 3013,
      name: 'nobuko',
      composition: [
        {
          id: 785622,
          amount: 5,
        },
        {
          id: 582577,
          amount: 5,
        },
        {
          id: 598382,
          amount: 6,
        },
        {
          id: 506284,
          amount: 4,
        },
        {
          id: 143851,
          amount: 4,
        },
      ],
    },
    {
      id: 9119,
      name: 'sake turi',
      composition: [
        {
          id: 978590,
          amount: 10,
        },
        {
          id: 582577,
          amount: 10,
        },
        {
          id: 431223,
          amount: 6,
        },
        {
          id: 506284,
          amount: 4,
        },
        {
          id: 419513,
          amount: 4,
        },
      ],
    },
    {
      id: 6660,
      name: 'maki mix',
      composition: [
        {
          id: 932478,
          amount: 6,
        },
        {
          id: 431223,
          amount: 6,
        },
        {
          id: 900109,
          amount: 6,
        },
        {
          id: 985690,
          amount: 6,
        },
        {
          id: 315478,
          amount: 10,
        },
      ],
    },
    {
      id: 8410,
      name: 'okino set',
      composition: [
        {
          id: 817634,
          amount: 10,
        },
        {
          id: 259848,
          amount: 10,
        },
        {
          id: 343121,
          amount: 10,
        },
        {
          id: 506284,
          amount: 4,
        },
        {
          id: 143851,
          amount: 6,
        },
      ],
    },
    {
      id: 8008,
      name: 'tokio',
      composition: [
        {
          id: 932478,
          amount: 6,
        },
        {
          id: 436798,
          amount: 6,
        },
        {
          id: 798768,
          amount: 6,
        },
        {
          id: 104120,
          amount: 6,
        },
        {
          id: 578423,
          amount: 10,
        },
        {
          id: 143851,
          amount: 16,
        },
      ],
    },
    {
      id: 7777,
      name: 'hanato',
      composition: [
        {
          id: 398411,
          amount: 8,
        },
        {
          id: 785622,
          amount: 10,
        },
        {
          id: 582577,
          amount: 10,
        },
        {
          id: 578522,
          amount: 10,
        },
        {
          id: 578423,
          amount: 10,
        },
        {
          id: 552768,
          amount: 10,
        },
        {
          id: 259848,
          amount: 10,
        },
      ],
    },
  ],
  rolls: [
    {
      id: 148133,
      name: 'amberjack',
      section: 18591,
      src: images.display.nigiri,
      outside: [52438],
      popularity: 6.4,
      difficulty: 3,
      index: 0,
    },
    {
      id: 414913,
      name: 'maguro',
      section: 18591,
      src: images.display.nigiri,
      outside: [47568],
      popularity: 7.8,
      difficulty: 3,
      index: 1,
    },
    {
      id: 410511,
      name: 'unagi',
      section: 18591,
      src: images.display.nigiri,
      outside: [91919],
      popularity: 6.8,
      difficulty: 3,
      index: 2,
    },
    {
      id: 419513,
      name: 'sake',
      section: 18591,
      src: images.display.nigiri,
      outside: [17446],
      popularity: 9,
      difficulty: 3,
      index: 3,
    },
    {
      id: 519514,
      name: 'butterfish',
      section: 18591,
      src: images.display.nigiri,
      outside: [17455],
      popularity: 5.5,
      difficulty: 3,
      index: 4,
    },
    {
      id: 952412,
      name: 'tako',
      section: 18591,
      src: images.display.nigiri,
      outside: [52144],
      popularity: 5.9,
      difficulty: 3,
      index: 5,
    },
    {
      id: 459525,
      name: 'ebi',
      section: 18591,
      src: images.display.nigiri,
      outside: [10568],
      popularity: 6.2,
      difficulty: 3,
      index: 6,
    },
    {
      id: 962531,
      name: 'grilled salmon',
      section: 18591,
      src: images.display.nigiri,
      outside: [18551],
      popularity: 7.7,
      difficulty: 3,
      index: 7,
    },
    {
      id: 519541,
      name: 'hirame',
      section: 18591,
      src: images.display.nigiri,
      outside: [19451],
      popularity: 6.3,
      difficulty: 3,
      index: 8,
    },
    {
      id: 143851,
      name: 'random',
      section: 18591,
      src: images.display.nigiri,
      outside: [52438, 47568, 91919, 17446, 17455, 52144, 10568, 18551, 19451],
      popularity: 8,
      difficulty: 3,
      index: 9,
    },

    {
      id: 558143,
      name: 'gunkan butter fish',
      section: 49145,
      src: images.display.gunkan,
      inside: [17455],
      popularity: 3.3,
      difficulty: 5,
      index: 10,
    },
    {
      id: 915232,
      name: 'gunkan maguro',
      section: 49145,
      src: images.display.gunkan,
      inside: [47568],
      popularity: 4.2,
      difficulty: 5,
      index: 11,
    },
    {
      id: 862523,
      name: 'gunkan sake',
      section: 49145,
      src: images.display.gunkan,
      inside: [81740],
      popularity: 5.1,
      difficulty: 5,
      index: 12,
    },
    {
      id: 506284,
      name: 'sakai',
      section: 49145,
      src: images.display.gunkan,
      inside: [74113],
      popularity: 7.5,
      difficulty: 5,
      index: 13,
    },
    {
      id: 681943,
      name: 'ikura',
      section: 49145,
      src: images.display.gunkan,
      inside: [10101],
      popularity: 4.7,
      difficulty: 5,
      index: 14,
    },

    {
      id: 932478,
      name: 'kappa maki',
      section: 15916,
      src: images.display.hosomaki,
      inside: [34811],
      popularity: 6.1,
      difficulty: 4.2,
      index: 15,
    },
    {
      id: 413290,
      name: 'avocado maki',
      section: 15916,
      src: images.display.hosomaki,
      inside: [37177],
      popularity: 4.6,
      difficulty: 4.2,
      index: 16,
    },
    {
      id: 436798,
      name: 'sake maki',
      section: 15916,
      src: images.display.hosomaki,
      inside: [17446],
      popularity: 7.7,
      difficulty: 4.2,
      index: 17,
    },
    {
      id: 798768,
      name: 'tekka maki',
      section: 15916,
      src: images.display.hosomaki,
      inside: [47568],
      popularity: 7.2,
      difficulty: 4.5,
      index: 18,
    },
    {
      id: 431223,
      name: 'negisalmon',
      section: 15916,
      src: images.display.hosomaki,
      inside: [18440, 17447, 17446],
      popularity: 6.4,
      difficulty: 4.4,
      index: 19,
    },
    {
      id: 900109,
      name: 'negitoro',
      section: 15916,
      src: images.display.hosomaki,
      inside: [18440, 17447, 47568],
      popularity: 6.3,
      difficulty: 4.9,
      index: 20,
    },

    {
      id: 104120,
      name: 'futomaki',
      section: 17718,
      src: images.display.futomaki,
      inside: [38118, 17446, 34811, 41324, 11942, 37177],
      decor: [13814, 18449, 19951],
      popularity: 7.2,
      difficulty: 6.6,
      index: 21,
    },
    {
      id: 576111,
      name: 'grill futo',
      section: 17718,
      src: images.display.futomaki,
      inside: [17559, 18551, 34811, 11942, 37177],
      decor: [85074],
      popularity: 8.1,
      difficulty: 5.8,
      index: 22,
    },
    {
      id: 552768,
      name: 'grill hirame futo',
      section: 17718,
      src: images.display.futomaki,
      inside: [18440, 17447, 81142, 81416, 34811, 37177],
      decor: [61340],
      popularity: 6.9,
      difficulty: 6.6,
      index: 23,
    },
    {
      id: 154198,
      name: 'futo aki',
      section: 17718,
      src: images.display.futomaki,
      inside: [38118, 18440, 86682, 41324, 17771, 37177],
      decor: [85074, 61340],
      popularity: 5.4,
      difficulty: 7.3,
      index: 24,
    },
    {
      id: 879980,
      name: 'rolls crab',
      section: 17718,
      src: images.display.soyMaki,
      inside: [81142, 74113, 34811],
      outside: [80857],
      popularity: 8,
      difficulty: 5.8,
      index: 25,
    },
    {
      id: 985690,
      name: 'philadelphia futo',
      section: 17718,
      src: images.display.futomaki,
      inside: [98144, 19441, 17446, 34811, 17771],
      popularity: 7,
      difficulty: 6.1,
      index: 26,
    },
    {
      id: 973439,
      name: 'futo ebi',
      section: 17718,
      src: images.display.futomaki,
      feature: 'panko',
      inside: [13991, 83110, 34811, 41324, 11942, 37177],
      outside: [49142],
      decor: [39913, 61340],
      popularity: 8.5,
      difficulty: 6,
      index: 27,
    },
    {
      id: 343122,
      name: 'gunkan tempura',
      section: 17718,
      src: images.display.futomaki,
      feature: 'tempura',
      inside: [81740, 41324],
      outside: [53807],
      decor: [17559, 17447],
      popularity: 8.3,
      difficulty: 5,
      index: 28,
    },
    {
      id: 343121,
      name: 'gunkan sake maki',
      section: 17718,
      src: images.display.futomaki,
      inside: [81740, 41324],
      popularity: 3.3,
      difficulty: 4.4,
      index: 29,
    },
    {
      id: 547667,
      name: 'seabass rolls',
      section: 17718,
      src: images.display.futomaki,
      inside: [98144, 39592, 13991, 34811, 41324, 37177, 92900],
      decor: [19401, 81172],
      popularity: 5,
      difficulty: 8.9,
      index: 30,
    },
    {
      id: 980987,
      name: 'maguro futo',
      section: 17718,
      src: images.display.futomaki,
      inside: [38118, 81142, 47568, 34811, 17771, 84048],
      decor: [13814],
      popularity: 6.7,
      difficulty: 7.5,
      index: 31,
    },
    {
      id: 789321,
      name: 'vege tempura rolls',
      section: 17718,
      src: images.display.futomaki,
      inside: [17559, 13245, 85122],
      decor: [18230, 88188],
      popularity: 5.5,
      difficulty: 5.7,
      index: 32,
    },
    {
      id: 598382,
      name: 'salmon futo',
      section: 17718,
      src: images.display.futomaki,
      inside: [17559, 18551, 34811, 11942, 37177],
      outside: [17446],
      popularity: 4.2,
      difficulty: 7,
      index: 33,
    },

    {
      id: 135194,
      name: 'butter fish',
      section: 23155,
      src: images.display.uramaki.three,
      inside: [17559, 17447, 19009, 81565, 34811, 41324],
      outside: [38118],
      decor: [18230],
      popularity: 6.8,
      difficulty: 7,
      index: 34,
    },
    {
      id: 468744,
      name: 'special ebi ten maki',
      section: 23155,
      src: images.display.uramaki.one,
      inside: [17559, 83110, 17446, 34811, 11942, 37177],
      outside: [40099],
      decor: [61340],
      popularity: 5.8,
      difficulty: 7.4,
      index: 35,
    },
    {
      id: 978590,
      name: 'grill sake maki',
      section: 23155,
      src: images.display.uramaki.one,
      inside: [17559, 18551, 34811, 11942, 37177],
      outside: [40099],
      decor: [61340],
      popularity: 8.5,
      difficulty: 6.2,
      index: 36,
    },
    {
      id: 817634,
      name: 'special tamago',
      section: 23155,
      src: images.display.uramaki.three,
      inside: [19055, 17446, 34811, 11942, 37177],
      outside: [38118],
      popularity: 8.2,
      difficulty: 6.6,
      index: 37,
    },
    {
      id: 198891,
      name: 'ebi/ika ten',
      section: 23155,
      src: images.display.uramaki.one,
      inside: [81142, 17559, 83110, 91719, 34811],
      outside: [40099],
      popularity: 8.7,
      difficulty: 6.1,
      index: 38,
    },
    {
      id: 578423,
      name: 'philadelphia maki',
      section: 23155,
      src: images.display.uramaki.one,
      inside: [98144, 17446, 34811, 11942, 37177],
      outside: [40099],
      popularity: 9,
      difficulty: 6,
      index: 39,
    },
    {
      id: 786898,
      name: 'vege uramaki',
      section: 23155,
      src: images.display.uramaki.one,
      inside: [81142, 34811, 41324, 11942, 17771, 37177, 84048],
      outside: [40099],
      decor: [18449, 10001],
      popularity: 3.2,
      difficulty: 8.5,
      index: 40,
    },
    {
      id: 981415,
      name: 'grill philadelphia maki',
      section: 23155,
      src: images.display.uramaki.one,
      inside: [98144, 18551, 34811, 11942, 37177],
      outside: [40099],
      decor: [61340],
      popularity: 8.7,
      difficulty: 6.2,
      index: 41,
    },
    {
      id: 347813,
      name: 'california ebi special',
      section: 23155,
      src: images.display.uramaki.two,
      inside: [17559, 83110, 34811, 11942, 37177],
      outside: [17446],
      decor: [13814, 19401, 85074, 10101],
      popularity: 7.2,
      difficulty: 7.1,
      index: 42,
    },
    {
      id: 786153,
      name: 'grill gold',
      section: 23155,
      src: images.display.uramaki.two,
      inside: [98144, 81142, 18551, 34811, 41324],
      feature: 'burnt',
      outside: [17446],
      decor: [18449, 85074, 61340],
      popularity: 5,
      difficulty: 7.2,
      index: 43,
    },
    {
      id: 582985,
      name: 'tama ebi',
      section: 23155,
      src: images.display.uramaki.three,
      inside: [17559, 83110, 17446, 34811, 11942, 37177],
      outside: [38118],
      decor: [61340],
      popularity: 7.9,
      difficulty: 7.5,
      index: 44,
    },
    {
      id: 785622,
      name: 'geisha',
      section: 23155,
      src: images.display.uramaki.two,
      inside: [77177, 72397, 34811, 41324],
      outside: [37177],
      decor: [81855, 31819, 88188],
      popularity: 8.3,
      difficulty: 8,
      index: 45,
    },
    {
      id: 358153,
      name: 'tiger eye rolls',
      section: 23155,
      src: images.display.uramaki.two,
      inside: [34811, 17771, 37177],
      outside: [91919],
      decor: [19401, 61340],
      popularity: 6.8,
      difficulty: 10,
      index: 46,
    },
    {
      id: 582577,
      name: 'california gold',
      section: 23155,
      src: images.display.uramaki.two,
      inside: [74113, 34811, 11942, 37177],
      outside: [17446],
      decor: [19401, 85074],
      popularity: 8.5,
      difficulty: 6,
      index: 47,
    },
    {
      id: 578522,
      name: 'rainbow',
      section: 23155,
      src: images.display.uramaki.two,
      inside: [38118, 17559, 54326, 34811, 11942, 37177],
      outside: [71717],
      decor: [13814, 10001],
      popularity: 6.4,
      difficulty: 8,
      index: 48,
    },
    {
      id: 315478,
      name: 'california maki',
      section: 23155,
      src: images.display.uramaki.one,
      inside: [17446, 34811, 41324, 37177],
      outside: [40099],
      popularity: 5.1,
      difficulty: 6.6,
      index: 49,
    },

    {
      id: 191511,
      name: 'banana tempura maki',
      section: 41328,
      src: images.display.uramaki.three,
      inside: [81099, 10012, 18991],
      feature: 'without nori',
      outside: [38118],
      decor: [99199],
      popularity: 7.7,
      difficulty: 6.6,
      index: 50,
    },
    {
      id: 298343,
      name: 'cukinia',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [51237, 18003, 34811, 41324],
      outside: [17771],
      decor: [19401, 48991],
      popularity: 6.8,
      difficulty: 9.5,
      index: 51,
    },
    {
      id: 239825,
      name: 'dorada',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [17559, 19009, 19501, 34811, 41324],
      outside: [81740],
      decor: [68411],
      popularity: 5.1,
      difficulty: 8.4,
      index: 52,
    },
    {
      id: 259848,
      name: 'tuńczyk',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [17559, 17447, 19009, 54326, 34811, 41324, 84048],
      outside: [47568],
      decor: [13991],
      popularity: 7.4,
      difficulty: 7.1,
      index: 53,
    },
    {
      id: 581959,
      name: 'seriola',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [17559, 17447, 19009, 54326, 34811, 41324],
      outside: [52438],
      decor: [31819],
      popularity: 6.2,
      difficulty: 7.1,
      index: 54,
    },
    {
      id: 895114,
      name: 'ośmiornica',
      section: 84813,
      src: images.display.futomaki,
      inside: [17559, 17447, 11955, 54326, 34811, 41324, 11942, 37177],
      outside: [38118],
      popularity: 7.4,
      difficulty: 8.9,
      index: 55,
    },
    {
      id: 578213,
      name: 'kalmar',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [17559, 17447, 19009, 91719, 34811, 41324, 11942, 37177],
      outside: [17446],
      decor: [19401, 10101],
      popularity: 5.3,
      difficulty: 8,
      index: 56,
    },
    {
      id: 352981,
      name: 'beef rolls',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [18440, 18055, 34811, 41324],
      outside: [28551],
      decor: [81855, 92900, 68411],
      popularity: 6.3,
      difficulty: 9.3,
      index: 57,
    },
    {
      id: 398411,
      name: 'sandacz',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [18230, 17447, 19009, 14955, 34811, 41324, 37177],
      outside: [19451],
      decor: [19401],
      popularity: 6.8,
      difficulty: 8.7,
      index: 58,
    },
    {
      id: 439853,
      name: 'szparag',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [17559, 54326, 10568, 34811, 41324, 11942, 17771],
      outside: [37177],
      decor: [81740],
      popularity: 4.2,
      difficulty: 9.2,
      index: 59,
    },
    {
      id: 854115,
      name: 'grillowany bakłaźan',
      section: 84813,
      src: images.display.uramaki.two,
      inside: [18055, 18551, 74113],
      outside: [37177],
      decor: [14101],
      popularity: 3.4,
      difficulty: 8.8,
      index: 60,
    },
  ],
  ingredients: [
    {
      name: ['papier sojowy', 'soy paper'],
      id: 80857,
      bg: '#ff9efc',
    },
    {
      name: ['ogórek', 'kappa'],
      id: 34811,
      bg: '#458228',
    },
    {
      name: ['oshinko', 'rzepa', 'rzepa marynowana'],
      id: 41324,
      bg: '#fff830',
    },
    {
      name: ['kanpyo', 'tykwa', 'tykwa marynowana'],
      id: 11942,
      bg: '#522f03',
    },
    {
      name: ['awokado', 'avocado'],
      id: 37177,
      bg: '#18522e',
    },
    {
      name: ['mango'],
      id: 17771,
      bg: '#e8d01e',
    },
    {
      name: ['jalapeño',],
      id: 19009,
      bg: '#1c5218'
    },
    {
      name: ['shitake'],
      id: 84048,
      bg: '#6e3f05',
    },
    {
      name: ['lime juice', 'sok z limonki'],
      id: 31819,
      bg: '#68b53c',
    },
    {
      name: ['por', 'leek'],
      id: 17447,
      bg: '#97db70',
    },
    {
      name: ['tamago', 'naleśnik'],
      id: 38118,
      bg: '#edbf5a',
    },
    {
      name: ['sałata', 'salad'],
      id: 81142,
      bg: '#7ec940',
    },
    {
      name: ['mięta', 'mint'],
      id: 19441,
      bg: '#267a30',
    },
    {
      name: ['coriander', 'kolendra'],
      id: 68411,
      bg: '#1b7025',
    },
    {
      name: ['dymka', 'cebula zielona'],
      id: 92900,
      bg: '#1f7029',
    },
    {
      name: ['migdały', 'mindals', 'migdały grillowane'],
      id: 85074,
      bg: '#f2d679',
    },
    {
      name: ['pistacje', 'pistachio'],
      id: 48991,
      bg: '#7fa35f',
    },
    {
      name: ['sezam', 'sesame'],
      id: 40099,
      bg: '#fcde83',
    },
    {
      name: ['orzeszki ziemne', 'peanuts'],
      id: 81172,
      bg: '#c29c4a',
    },
    {
      name: ['togarashi',],
      id: 77177,
      bg: '#8f330b',
    },

    {
      name: ['panko'],
      id: 49142,
      bg: '#e8d78b',
    },
    {
      name: ['tempura'],
      id: 53807,
      bg: '#e8d78b',
    },

    {
      name: ['salmon', 'łosoś', 'sake'],
      id: 17446,
      bg: '#ed9f5a',
    },
    {
      name: ['tuna', 'tuńczyk', 'maguro'],
      id: 47568,
      bg: '#942116',
    },
    {
      name: ['okóń morski', 'labraks'],
      id: 39592,
      bg: '#e3d4d3',
    },
    {
      name: ['butter fish', 'ryba maślana'],
      id: 17455,
      bg: '#fff9e6',
    },
    {
      name: ['zander', 'sandacz'],
      id: 72397,
      bg: '#d6d6d6',
    },
    {
      name: ['seriola', 'amberjack'],
      id: 52438,
      bg: '#ffe7de',
    },
    {
      name: ['halibut'],
      id: 19451,
      bg: '#fff9f2',
    },
    {
      name: ['octopus', 'ośmiornica'],
      id: 52144,
      bg: '#8c560e',
    },
    {
      name: ['unagi', 'eel', 'węgorz'],
      id: 91919,
      bg: '#deb671',
    },
    {
      name: ['steamed shrimp', 'krewetka parzona'],
      id: 10568,
      bg: '#ffca8a',
    },
    {
      name: ['rainbow', '3 różne ryby', 'sal/tun/ter'],
      id: 71717,
      bg: '#7d2863',
    },
    {
      name: ['polędwica marynowana', 'marinated tenderloin'],
      id: 28551,
      bg: '#5e111f',
    },

    {
      name: ['grill', 'grilled salmon', 'grill sake', 'łosoś grilowany'],
      id: 18551,
      bg: '#fa9073',
    },
    {
      name: ['grilled halibut', 'halibut pieczony'],
      id: 81416,
      bg: '#e8dd95',
    },
    {
      name: ['grilled tuna', 'grill maguro', 'tuńczyk pieczony'],
      id: 86682,
      bg: '#7a4848',
    },
    {
      name: ['grilled octopus', 'ośmiornica grillowana'],
      id: 11955,
      bg: '#7d5528',
    },
    {
      name: ['butter fish tempura', 'maślana tempura'],
      id: 81565,
      bg: '#bf9c75',
    },
    {
      name: ['dorada tempura'],
      id: 19501,
      bg: '#bfa282',
    },
    {
      name: ['zander tempura', 'sandacz w tempurze'],
      id: 14955,
      bg: '#e6c4a1',
    },
    {
      name: ['kalmar tempura', 'aki tempura', 'squid tempura'],
      id: 91719,
      bg: '#bf9467',
    },
    {
      name: ['ebi tempura', 'shrimp tempura'],
      id: 83110,
      bg: '#cca762',
    },
    {
      name: ['smażone warzywa', 'fried vegetables'],
      id: 13245,
      bg: '#7fba61',
    },
    {
      name: ['tempura',],
      id: 85122,
      bg: '#7fba61',
    },
    {
      name: ['asparagus tempura', 'szparag w tempurze'],
      id: 54326,
      bg: '#a6a63f',
    },
    {
      name: ['cukinia w panko', 'zucchini panko'],
      id: 18003,
      bg: '#74873e',
    },
    {
      name: ['grilled eggplant', 'bakłażan grillowany'],
      id: 18055,
      bg: '#635325',
    },
    {
      name: ['banana tempura', 'banan w tempurze'],
      id: 81099,
      bg: '#ede76f',
    },
    {
      name: ['nutella'],
      id: 10012,
      bg: '#403000',
    },
    {
      name: ['strawberry', 'truskawka', 'trueskawka'],
      id: 18991,
      bg: '#ba2323',
    },
    {
      name: ['bita śmietana', 'whipped cream'],
      id: 99199,
      bg: '#fff2f2',
    },

    {
      name: ['surimi', 'surimi salad', 'sałatka surimi'],
      id: 74113,
      bg: '#d46c6c',
    },
    {
      name: ['tatar z łososia', 'salmon tartar'],
      id: 81740,
      bg: '#b54a35',
    },
    {
      name: ['tatar z mango i węgorza', 'mango and eel tartar'],
      id: 14101,
      bg: '#9c9e28',
    },

    {
      name: ['serek', 'philadelphia', 'serek philadelphia', 'phila'],
      id: 98144,
      bg: '#ffffff',
    },
    {
      name: ['kiri', 'serek kiri', 'serek kremowy'],
      id: 19055,
      bg: '#ffffff',
    },
    {
      name: ['ser pistacjowy', 'pistachio cheese'],
      id: 51237,
      bg: '#eeffd9',
    },
    {
      name: ['kobe'],
      id: 17559,
      bg: '#ffaf99',
    },
    {
      name: ['sriracha'],
      id: 18440,
      bg: '#540808',
    },
    {
      name: ['zuke'],
      id: 13814,
      bg: '#362819',
    },
    {
      name: ['yuzu'],
      id: 18449,
      bg: '#cfb930',
    },
    {
      name: ['truffle pasta', 'truflowa pasta'],
      id: 13991,
      bg: '#4f4d40',
    },
    {
      name: ['truffle mayo sauce', 'truflowo-majonezowy sos'],
      id: 39913,
      bg: '#666459',
    },
    {
      name: ['mango sauce', 'sos mango'],
      id: 19401,
      bg: '#d4c028',
    },
    {
      name: ['sos z czarnego czosnku', 'black peppper sauce'],
      id: 18230,
      bg: '#ffd9a1',
    },
    {
      name: ['ponzu', 'ponzu sauce', 'sos ponzu'],
      id: 81855,
      bg: '#423119',
    },
    {
      name: ['kabayaki'],
      id: 61340,
      bg: '#2e1b00',
    },

    {
      name: ['masago arare', 'kulki'],
      id: 19951,
      bg: '#ffe4bd',
    },
    {
      name: ['tosago', 'vege caviar', 'kawior wegetariański'],
      id: 10001,
      bg: '#e68675',
    },
    {
      name: ['ikura', 'salmon caviar', 'kawior z łososia'],
      id: 10101,
      bg: '#ff7d66',
    },
    {
      name: ['self-made caviar', 'custom caviar', 'kawior osobisty'],
      id: 88188,
      bg: '#b89300',
    },
  ],
};

export default data;