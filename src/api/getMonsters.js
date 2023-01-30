const fs = require('fs');

const MonsterType = {
    Boss: "Boss",
    DungeonOnly: "Seulement en donjon",
    Commun: "Commun",
    Archi: "Archi-monstre"
}

const dataMobs = [
    {
        name: "Nakunbra",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "Nakuneuye le Borgne" },
        synergie: [],
        spells: [
            { name: "Tranchage Mortel", passif: false, effect: "Os si les pdv de la cible sont inférieur où égaux à 50%." },
            { name: "À l'abordage !", passif: true, effect: "gagne 1pm par dommage reçu."}
        ],
    },
    {
        name: "Le Chouque",
        monsterType: MonsterType.Boss,
        synergie: [],
        spells: [{ name: "Coup de Sabre Maudit", effect: "Applique l'etat 'maudit' au cac qui os si les pdv de la cible sont inférieur où égal à 30%."}]
    },
    {
        name: "Gloutovore",
        monsterType: MonsterType.DungeonOnly ,
        synergie: ["Trukikol"],
        spells: [
            { name: "Gobage", passif: false, effect: "Os que les enemies seulement mais jusqu'a 2 fois par tour, il attire sans ldv de 3 cases." },
            { name: "", passif: true, effect: "Lors de tentative de retrait pm: gagne 15% de regen (infini), tenta retrait pa: gagne 1pm (infini)" }
        ]
    },
    {
        name: "Gloutoblop",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "Gloubibou le Gars" },
        synergie: [],
        spells: [{ name: "Gloutage", effect: "Il os que au cac aliée comme enemies au cac et ça le buff de 200 hp et 2pm infinie, il n'attire pas. Evite de le feed !"}]
    },
    {
        name: "Champa Bleu",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        synergie: [],
        spells: "Os au cac seulement. Il a aucun sort de tp, de boost pm ni de sort d'attirance."
    },
    {
        name: "Léolhyène",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        synergie: [],
        spells: "Lorsqu'il tape avec le sort 'mort sûre' (lançable uniquement au cac), il applique un etat qui se charge. Au stade 4, vous êtes os. Je ne sais pas si l'etat est indépendant au mob ou si d'autres mobs du même type peuvent booster l'etat."
    },
    {
        name: "Wa Wobot",
        monsterType: MonsterType.Boss,
        synergie: [],
        spells: "Les auto-tamponeuses pouses dès que vous êtes poussé dessus. Si vous êtes dans le cas de figure ou 2 auto-tamponeuses vous pousse l'une vers l'autre et vice versa, vous êtes os."
    },
    {
        name: "Kaskargo",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        synergie: [""],
        spells: "pose un glyphe sur la case d'arrivée à chaque fois qu'il se tp et peut coop avec ses enemies. Le glyphe en question fait très très mal environ du 3k/4k dmg"
    },
    {
        name: "Dragon Cochon",
        monsterType: MonsterType.Boss,
        synergie: [],
        spells: [
            { name: "Étourderie Mortelle", passif: false, effect: "Lancé seulement au 1er tour du combat, poison qui inflige une coco chargé par pa utilisé pendant 2 tours ! Ce sort peut être debuff."},
            { name: "Immobilisation", passif: false, effect: "-10pm lancé jusuqu'a 6po." },
        ],
    },
    {
        name: "Royalmouth",
        monsterType: MonsterType.Boss,
        spells: "Os la personne qui lui fait subir des do pou et les personnes qui subissent des do pou contre lui. Attention donc au Boufmouth Légendaire qui peut pousser ! Si il vous pousse contre le boss vous êtes os."
    },
    {
        name: "Les Tynrils",
        monsterType: MonsterType.Boss,
        synergie: ["Tynril Déconcerté", "Tynril Consterné", "Tynril Ahuri", "Tynril Perfide"],
        spells: "Peuvent os au cac et se coop entre-eux ! Prevoyez une certaine distance puisqu'il peuvent donc se déplacer de 8 cases (2pm chacun) en tout si ils coop le Tynril le plus proche de vous."
    },
    {
        name: "Abrakne Sombre",
        monsterType: MonsterType.DungeonOnly,
        synergie: [""],
        spells: [{ name: "Invocation de Champa Sombre", passif: false, effect: "Invoque un des 4 champa existant. Le [Champa Bleu] os" }],
    },
    {
        name: "Rat Noir",
        monsterType: MonsterType.Boss,
        synergie: [""],
        spells: [
            { name: "Peste Noire", passif: false, effect: "Tape à hauteur de 50% de ses pv actuel (75% en crit) les personnes qui recoivent du soin en dommage air." },
            { name: "Kackitu", passif: false, effect: "Cencle de taille 1 autour du Rat Noir, os les personnes qui reçoivent des dommages neutre ou terre. En general il fait ce sort puis tape (dommages terre ou neutre) ce qui à donc pour effet de vous os, évitez d'être a son cac." },
        ],
    },
    {
        name: "Koulosse",
        monsterType: MonsterType.Boss,
        synergie: ["Boufcoul"],
        spells: [
            { name: "Souffle du Koulosse", passif: false, effect: "Peut attirer à son cac. Une fois au cac il peut vous transformer en boufcool qui à pour effet de rendre totalement innofensif (-100pa et -100pm)." },
            { name: "Invocation de Bouftou des cavernes", passif: false, effect: "Invoque un [Bouftou des Cavernes] ou un [Boufcoul] en crit." },
            { name: "Appel du Koulosse", passif: false, effect: "Lançable en ligne, et jusqu'a 8po, attire les enemies à son cac." },
        ],
    },
    {
        name: "Fauchalak",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "Faufoll la Joyeuse" },
        synergie: [""],
        spells: [
            { name: "Malédiction Koalak", passif: false, effect: "Retire à 3po autour de lui soit (3 à 4pm, 3 à 4pa, 100 esquive pa ou pm, 400 stats élémentaire, 50% crit, 200 dommages, 200 soin)." },
            { name: "Fauche", passif: false, effect: "Os au cac pour vous remplacer par un fantôme de niveau 100." },
        ],
    },
    {
        name: "Arapex",
        monsterType: MonsterType.DungeonOnly,
        synergie: ["Néfileuse"],
        spells: [
            { name: "Exécution", passif: false, effect: "Os les enemies ayant l'etat cocon lancé par la [Néfileuse]." },
            { name: "Fauche", passif: false, effect: "Os au cac pour vous remplacer par un fantôme de niveau 100." },
        ],
    },
    {
        name: "Néfileuse",
        monsterType: MonsterType.Commun,
        synergie: [""],
        spells: [
            { name: "Prison de soie", passif: false, effect: "Transforme un enemie en cocon au cac. Tous les 3 tours" },
            { name: "Toile paralysante", passif: false, effect: "Une sorte de glyphe qui a pour effet: -100pm, -10% res et applique les etats pesanteur et inébranlable." },
        ],
    },
    {
        name: "Mama Koalak",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "Mamakomou l'Âge" },
        synergie: [""],
        spells: [
            { name: "Accouchement", passif: false, effect: "Invoque un koalak, 10% chance d'invoquer un [Koalak Forestier]."},
        ],
    },
    {
        name: "Koalak Forestier",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        synergie: [],
        spells: [
            { name: "", passif: false, effect: "Transforme en buisson au cac (-100pa et -100pm)." },
        ]
    },
    {
        name: "Trukikol",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        spells: [
            { name: "Virevoltage collant", passif: false, effect: "Pose un glyphe de cercle 1 et de distance 3, vous perdez 100pm à l'interieur de celui-ci." },
            { name: "Électromagnétisme", passif: false, effect: "Autour du mob, cercle de taille 4. Vous attire de 3 cases vers les enemies qui vous tappent en ligne." },
        ],
    },
    {
        name: "Dramak",
        monsterType: MonsterType.DungeonOnly,
        spells: [
            { name: "", passif: false, effect: "Transforme en marionette au cac, ce qui a pour effet de vous retirer 100pa et 100pm pour le tour." },
        ],
    },
    {
        name: "Phossile",
        monsterType: MonsterType.Boss,
        spells: [
            { name: "Phorreur de Gloire", passif: true, effect: "Os à 3po autour de lui au tour 5 puis tous les 4 tours." },
            { name: "Phorce", passif: false, effect: "Jusqu'a 3po, tape 50% des pv érodés." },
        ],
    },
    // truchideur: à 11pa peut presque os et s'il est boosté tape très fort
]
const mobsThatBoosts = ["Chiendent", "Abrakleur Clair"]

const searchMonsterInData = async (monsterName, monsterType) => {
    const types = ["Invocations de classe", "Monstres de quête", "Tourelles"]
    for (const type of types) {
        if (monsterType.includes(type)) {
            return { found: false, data: "yop" }
        }
    }
    for (const dataMob of dataMobs) {
        if (dataMob.name === monsterName)
            return { found: true, data: dataMob }
    }
    return { found: false, data: {} }
}

fs.readFile('src/api/dataMonsters.json', async (err, data) => {
    if (err) throw err;
    const createNewMonsterApi = []
    const parsedData = JSON.parse(data)
    await parsedData.forEach(async (monster) => {
        const wantedMonster = await searchMonsterInData(monster.name, monster.type)
        // if (wantedMonster.name === "Rat Noir")
        //     console.log(wantedMonster.found, wantedMonster.data)
        if (wantedMonster.found) {
            const newData = {
                ...monster,
                ...wantedMonster.data,
            }
            delete newData.drops
            createNewMonsterApi.push(newData)
            // console.log(newData)
            console.log("Added \x1b[36m" + newData.name + "\x1b[0m to Database")
        }
    })
    // fs.unlinkSync('src/api/keepedMonsters.json');
    fs.appendFile('src/api/keepedMonsters.json', JSON.stringify(createNewMonsterApi, null, 2), (err) => {
        if (err) throw err;
        console.log('Api created !');
    });
});

