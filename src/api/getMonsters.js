const fs = require('fs');

const MonsterTypes = {
    Boss: "Boss",
    DungeonOnly: "Seulement en donjon",
    Commun: "Commun",
    Archi: "Archi-monstre"
}

const Effect = {
    Boost: 0,
    Heal: 1,
    BlockHeal: 2,
    Rall: 3,
    Os: 4,
    BigDamages: 5,
    Range: 6,
    Cac: 7,
    Invoke: 8,
    Push: 9,
    Attract: 10,
    Teleport: 11,
    Coop: 12,
    Invi: 13,
    Pass: 14,
}

const dataMobs = [
    {
        ankamaId: 1027,
        name: "Corailleur Magistral",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Seulement pendant son boost" },
            { effect: Effect.Boost, info: "Perd tous ses pm" },
            { effect: Effect.Cac }
        ],
    },
    {
        ankamaId: 229,
        name: "Nakunbra",
        monsterType: MonsterTypes.Commun,
        archi: { ankamaId: 2538, monsterType: MonsterTypes.Archi, name: "Nakuneuye le Borgne" },
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Si pdv de la cible <= 50%"},
            { effect: Effect.Boost, info: "+1pm par coups reçu" },
            { effect: Effect.Cac},
        ],
    },
    {
        ankamaId: 230,
        name: "Le Chouque",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Si pdv de la cible <= 30%" },
        ]
    },
    {
        ankamaId: 216,
        name: "Gloutovore",
        monsterType: MonsterTypes.DungeonOnly ,
        synergie: [
            {
                ankamaId: 215,
                name: "Trukikol",
                spells: [],
            },
        ],
        spells: [
            { effect: Effect.Os, info: "Que les enemies (2 fois par tour)" },
            { effect: Effect.Heal, info: "regen 15% hp lors d'une tentative de retrait pm" },
            { effect: Effect.Boost, info: "+1pm lors d'une tentative de retrait pa" },
            { effect: Effect.Attract, info: "Attire de 3 cases sans ligne de vue" },
            { effect: Effect.Cac },
        ],
    },
    {
        ankamaId: 1181,
        name: "Gloutoblop",
        monsterType: MonsterTypes.Commun,
        archi: { ankamaId: 2495, monsterType: MonsterTypes.Archi, name: "Gloubibou le Gars" },
        synergie: [
            {
                ankamaId: 1183,
                name: "Tronkoblop",
                spells: [
                    { effect: Effect.Boost, info: "+1pm zone de 3po autour de lui" },
                    { effect: Effect.Heal, info: "Zone de 3po autour de lui"}
                ],
            },
        ],
        spells: [
            { effect: Effect.Os, info: "Aliés comme enemies (1 fois par tour)" },
            { effect: Effect.Boost, info: "Lors d'un os, gagne 200hp et 2pm"},
            { effect: Effect.Cac },
        ],
    },
    {
        ankamaId: 1184,
        name: "Blop Coco Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Invoke, info: "Peut invoquer un [Gloutoblop]"},
        ],
    },
    {
        ankamaId: 1185,
        name: "Blop Griotte Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Invoke, info: "Peut invoquer un [Gloutoblop]"},
        ],
    },
    {
        ankamaId: 1186,
        name: "Blop Indigo Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Invoke, info: "Peut invoquer un [Gloutoblop]"},
        ],
    },
    {
        ankamaId: 1187,
        name: "Blop Reinette Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Invoke, info: "Peut invoquer un [Gloutoblop]"},
        ],
    },
    {
        ankamaId: 654,
        name: "Champa Bleu",
        monsterType: MonsterTypes.Commun,
        archi: { ankamaId: 2424, monsterType: MonsterTypes.Archi, name: "Champayt l'Odorant" },
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Au cac" },
            { effect: Effect.Cac },
        ],
    },
    {
        ankamaId: 4619,
        name: "Léolhyène",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Etat qui se charge, au stade 4 c'est le os"},
            { effect: Effect.Cac },
        ],
    },
    {
        ankamaId: 3460,
        name: "Wa Wobot",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Si poussé à l'infinie entre plusieurs auto-tamponeuses" },
            { effect: Effect.Attract, info: "Attire de 3 cases en laissant une auto-tamponeuses à votre ancienne position" },
            { effect: Effect.Push, info: "A son cac et de 3 cases" },
            { effect: Effect.Invoke, info: "Une auto-tamponeuses lorsqu'il attire un enemie" },
        ],
    },
    {
        ankamaId: 1044,
        name: "Kaskargo",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [],
        spells: [
            { effect: Effect.BigDamages, info: "Pose des glyphes qui peuvent os"},
            { effect: Effect.Teleport, info: "Pose un glyphe sur sa case d'arrivée, se tp dans le vide ou coop un enemie" },
        ],
    },
    {
        ankamaId: 113,
        name: "Dragon Cochon",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Poison pa qui peut très facilement os (se debuff)"},
            { effect: Effect.Rall, info: "-5 à 6pm à un enemie" },
        ],
    },
    {
        ankamaId: 2854,
        name: "Royalmouth",
        monsterType: MonsterTypes.Boss,
        synergie: [
            {
                ankamaId: 2852,
                name: "Boufmouth légendaire",
                spells: [
                    { effect: Effect.Os, info: "Si vous pousse contre le boss"},
                    { effect: Effect.Rall, info: "-0 à 2pa en zone" },
                    { effect: Effect.Push, info: "De x cases" },
                ],
            },
        ],
        spells: [
            { effect: Effect.Os, info: "La/les personnes qui subissent des do pou à travers lui + la personne qui pousse (si enemie du boss)" },
        ],
    },
    {
        ankamaId: 1072,
        name: "Les Tynrils",
        monsterType: MonsterTypes.Boss,
        synergie: [
            { ankamaId: 1072, name: "Tynril Consterné", effect: "Os au cac, se cool avec les autres Tynrils" },
            { ankamaId: 1085, name: "Tynril Déconcerté", effect: "Os au cac, se cool avec les autres Tynrils" },
            { ankamaId: 1086, name: "Tynril Perfide", effect: "Os au cac, se cool avec les autres Tynrils" },
            { ankamaId: 1087, name: "Tynril Ahuri", effect: "Os au cac, se cool avec les autres Tynrils" },
        ],
        spells: [
            { effect: Effect.Os, info: "Seulement au cac" },
            { effect: Effect.Teleport, info: "Se coop entre-eux" },
            { effect: Effect.Heal, info: "Seulement au cac" },
        ],
    },
    {
        ankamaId: 651,
        name: "Abrakne Sombre",
        monsterType: MonsterTypes.DungeonOnly,
        synergie: [],
        spells: [
            { effect: Effect.Invoke, info: "Peut invoquer un [Champa Bleu]" },
            { effect: Effect.Teleport, info: "Bond, comme le iop" },
        ],
    },
    {
        ankamaId: 939,
        name: "Rat Noir",
        monsterType: MonsterTypes.Boss,
        synergie: [
            {
                ankamaId: 1,
                name: "Rat Molo, invocation du [Rate Atinée]",
                effect: "jusqu'a 2po, boost de 1pm infinie sans ldv et lançable tous les tours",
            },
        ],
        spells: [
            { effect: Effect.BigDamages, info: "50% de ses pv actuel (75% en crit) ceux qui reçoivent du soin" },
            { name: "Kackitu", passif: false, effect: "Cencle de taille 1 autour du Rat Noir, os les personnes qui reçoivent des dommages neutre ou terre. En general il fait ce sort puis tape (dommages terre ou neutre) ce qui à donc pour effet de vous os, évitez d'être a son cac." },
        ],
    },
    {
        ankamaId: 670,
        name: "Koulosse",
        monsterType: MonsterTypes.Boss,
        synergie: [
            {
                ankamaId: 1,
                name: "Boufcoul",
                spells: [
                    { effect: Effect.Invi, info: "En zone" },
                    { effect: Effect.Boost, info: "+5pm pour ceux qui sont rendu invisible" },
                ],
            },
        ],
        spells: [
            { effect: Effect.Pass, info: "Jusqu'a 5po en ligne seulement" },
            { effect: Effect.Invoke, info: "Invoque un [Bouftou des Cavernes] qu'il transforme en [Boufcoul]" },
            { effect: Effect.Attract, info: "Jusqu'a 8po, en ligne seulement, attire à son cac" },
        ],
    },
    {
        ankamaId: 783,
        name: "Fauchalak",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "Faufoll la Joyeuse" },
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "Au cac" },
            { effect: Effect.Rall, info: "3po autour de lui un des malus suivant: -3 à 4pm, -3 à 4pa, -100 esquive pa ou pm, -400 stats élémentaire, -50% crit, -200 dommages, -200 soin" },
        ],
    },
    {
        ankamaId: 3991,
        name: "Arapex",
        monsterType: MonsterTypes.DungeonOnly,
        synergie: [
            {
                ankamaId: 3993,
                name: "Néfileuse",
                // effect: "Transforme un enemie en cocon au cac.",
            },
        ],
        spells: [
            { effect: Effect.Os, info: "Si dans l'etat cocon lancé par la [Néfileuse]" },
        ],
    },
    {
        ankamaId: 3993,
        name: "Néfileuse",
        monsterType: MonsterTypes.Commun,
        synergie: [],
        spells: [
            { effect: Effect.Pass, info: "-100pa et pm, transforme en cocon, seulement au cac (3 tours)" },
            { effect: Effect.Rall, info: "Glyphe: -100pm, -10% res, etats pesanteur et inébranlable." },
        ],
    },
    {
        ankamaId: 755,
        name: "Mama Koalak",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "Mamakomou l'Âge" },
        synergie: [
            {
                ankamaId: 785,
                name: "Koalak Forestier",
            }
        ],
        spells: [
            { effect: Effect.Invoke, info: "Peut invoquer un [Koalak Forestier]."},
        ],
    },
    {
        ankamaId: 785,
        name: "Koalak Forestier",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [],
        spells: [
            { effect: Effect.Pass, info: "-100pa et pm, transforme en buisson, seulement au cac" },
        ]
    },
    {
        ankamaId: 215,
        name: "Trukikol",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [],
        spells: [
            { effect: Effect.Rall, info: "Glyphe de cercle 1 et de distance 3: -100pm" },
            { effect: Effect.Attract, info: "4po autour du mob, Vous attire de 3 cases vers les enemies qui vous tappent en ligne" },
        ],
    },
    {
        ankamaId: 3482,
        name: "Dramak",
        monsterType: MonsterTypes.DungeonOnly,
        synergie: [],
        spells: [
            { effect: Effect.Pass, info: "-100pa et -100pm, transforme en marionette, seulement au cac" },
            { effect: Effect.Invoke },
        ],
    },
    {
        ankamaId: 3651,
        name: "Phossile",
        monsterType: MonsterTypes.Boss,
        synergie: [
            {
                ankamaId: 1,
                name: "",
                // peut invu distance
            }
        ],
        spells: [
            { effect: Effect.Os, info: "3po autour de lui au tour 5 puis tous les 4 tours" },
            { effect: Effect.BigDamages, info: "Jusqu'a 3po, 50% des pv érodés" },
            { effect: Effect.Teleport },
        ],
    },
    {
        ankamaId: 3621,
        name: "Truchideur",
        monsterType: MonsterTypes.DungeonOnly,
        synergie: [],
        spells: [
            { effect: Effect.BlockHeal, info: "à distance" },
            { effect: Effect.Rall, info: "-40%hp max et jusqu'a 60% en crit" },
            { effect: Effect.Range },
        ],
    },
    {
        ankamaId: 1045,
        name: "Kimbo",
        monsterType: MonsterTypes.Boss,
        synergie: [
            {
                ankamaId: 1088,
                name: "Disciple du Kimbo",
                spells: [
                    { effect: Effect.Os, info: "Glyphe qui os, cases pairs: sorts terre et eau, cases impairs: sorts air et feu en fonction de la position du Disciple" }
                ]
            },
        ],
        spells: [
            { effect: Effect.Push, info: "de 2 cases, au cac seulement" },
            { effect: Effect.Invoke, info: "Invoque un [Disciple du Kimbo]"}
        ]
    },
    {
        ankamaId: 3854,
        name: "Gromorso",
        monsterType: MonsterTypes.Commun,
        synergie: [],
        spells: [
            { effect: Effect.Os, info: "au cac" },
        ],
    }
    // truchideur: à 11pa peut presque os et s'il est boosté tape très fort
    // Poutch (si boosté pa)
    // Kilibris
    // flib

]

const getNewMonsterById = async (monsterId, monsterType) => {
    const types = ["Invocations de classe", "Monstres de quête", "Tourelles"]
    for (const type of types)
        if (monsterType.includes(type))
            return { found: false, data: {} }
    for (const dataMob of dataMobs)
        if (dataMob.ankamaId === monsterId)
            return { found: true, data: dataMob }
    return { found: false, data: {} }
}

fs.readFile('src/api/dataMonsters.json', async (err, data) => {
    if (err) throw err;
    const createNewMonsterApi = []
    const parsedData = JSON.parse(data)
    await parsedData.forEach(async (monster) => {
        const wantedMonster = await getNewMonsterById(monster.ankamaId, monster.type)
        if (wantedMonster.found) {
            const newData = {
                ...monster,
                ...wantedMonster.data,
            }
            delete newData.imgUrl
            delete newData.url
            delete newData.drops
            createNewMonsterApi.push(newData)
            console.log("Added \x1b[34m" + newData.name + "\x1b[0m to Database")
        }
    })
    // fs.unlinkSync('src/api/keepedMonsters.json');
    fs.appendFile('src/api/keepedMonsters.json', JSON.stringify(createNewMonsterApi, null, 2), (err) => {
        if (err) throw err;
        console.log('Api created !');
    });
});

