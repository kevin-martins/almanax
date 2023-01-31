const fs = require('fs');

const MonsterTypes = {
    Boss: "Boss",
    DungeonOnly: "Seulement en donjon",
    Commun: "Commun",
    Archi: "Archi-monstre"
}

const dataMobs = [
    {
        ankamaId: 1027,
        name: "Corailleur Magistral",
        monsterType: MonsterTypes.Boss,
        spells: [
            { name: "", passif: false, effect: "Quand il à plein de pa, il peut taper avec ce sort qui Os." },
            { name: "", passif: false, effect: "Retire tous ses pm pour gagner plein de pa." },
        ],
    },
    {
        ankamaId: 229,
        name: "Nakunbra",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "Nakuneuye le Borgne" },
        spells: [
            { name: "Tranchage Mortel", passif: false, effect: "Os si les pdv de la cible sont inférieur où égaux à 50%." },
            { name: "À l'abordage !", passif: true, effect: "gagne 1pm par dommage reçu."},
        ],
    },
    {
        ankamaId: 230,
        name: "Le Chouque",
        monsterType: MonsterTypes.Boss,
        spells: [
            { name: "Coup de Sabre Maudit", effect: "Applique l'etat 'maudit' au cac qui os si les pdv de la cible sont inférieur où égal à 30%."},
        ],
    },
    {
        ankamaId: 216,
        name: "Gloutovore",
        monsterType: MonsterTypes.DungeonOnly ,
        synergie: ["Trukikol"],
        spells: [
            { name: "Gobage", passif: false, effect: "Os que les enemies seulement mais jusqu'a 2 fois par tour, il attire sans ldv de 3 cases." },
            { name: "", passif: true, effect: "Lors de tentative de retrait pm: gagne 15% de regen (infini), tenta retrait pa: gagne 1pm (infini)" },
        ]
    },
    {
        ankamaId: 1181,
        name: "Gloutoblop",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "Gloubibou le Gars" },
        synergie: ["Tronkoblop"],
        spells: [
            { name: "Gloutage", passif: false, effect: "Lançable que au cac et pouvait s'utiliser contre enemies comme aliés, il os la cible pour se buff de 200 hp et 2pm infinie."},
        ],
    },
    {
        ankamaId: 1183,
        name: "Tronkoblop",
        monsterType: MonsterTypes.DungeonOnly,
        spells: [
            { name: "Blopzone", passif: false, effect: "Cercle de taille 3 autour du lanceur. Tape les enemies et boost de 1pm les aliés présent dans la zone."},
        ],
    },
    {
        ankamaId: 1184,
        name: "Blop Coco Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { name: "Blovocation", passif: false, effect: "Invoque un blop au hasard avec 4.5% de chance d'invoquer un [Gloutoblop]."},
        ],
    },
    {
        ankamaId: 1185,
        name: "Blop Griotte Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { name: "Blovocation", passif: false, effect: "Invoque un blop au hasard avec 4.5% de chance d'invoquer un [Gloutoblop]."},
        ],
    },
    {
        ankamaId: 1186,
        name: "Blop Indigo Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { name: "Blovocation", passif: false, effect: "Invoque un blop au hasard avec 4.5% de chance d'invoquer un [Gloutoblop]."},
        ],
    },
    {
        ankamaId: 1187,
        name: "Blop Reinette Royal",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { name: "Blovocation", passif: false, effect: "Invoque un blop au hasard avec 4.5% de chance d'invoquer un [Gloutoblop]."},
        ],
    },
    {
        ankamaId: 654,
        name: "Champa Bleu",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [],
        spells: [
            { name: "", passif: false, effect: "Os au cac seulement."},
        ],
    },
    {
        ankamaId: 4619,
        name: "Léolhyène",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [],
        spells: [
            { name: "Mort Sûre", pasif: false, effect: "Lançable que au cac, il applique un etat qui se charge. Au stade 4, vous êtes os. A déterminer si l'etat est indépendant à chaque Léolhyène ou cumulable entre les Léolhyène. Ce faisait vous pourrez sans doute être os plus rapidement."},
        ],
    },
    {
        ankamaId: 3460,
        name: "Wa Wobot",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { name: "", passif: true, effect: "Les auto-tamponeuses pouses dès que vous êtes poussé dessus. Si vous êtes dans le cas de figure ou 2 auto-tamponeuses vous pousse l'une vers l'autre et vice versa, vous êtes os." },
        ],
    },
    {
        ankamaId: 1044,
        name: "Kaskargo",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [""],
        spells: [
            { name: "", passif: false, effect: "pose un glyphe sur la case d'arrivée à chaque fois qu'il se tp et peut coop avec ses enemies. Le glyphe en question fait très très mal environ du 3k/4k dmg"},
        ],
    },
    {
        ankamaId: 113,
        name: "Dragon Cochon",
        monsterType: MonsterTypes.Boss,
        synergie: [],
        spells: [
            { name: "Étourderie Mortelle", passif: false, effect: "Lancé seulement au 1er tour du combat, poison qui inflige une coco chargé par pa utilisé pendant 2 tours ! Ce sort peut être debuff."},
            { name: "Immobilisation", passif: false, effect: "-10pm lancé jusuqu'a 6po." },
        ],
    },
    {
        ankamaId: 2854,
        name: "Royalmouth",
        monsterType: MonsterTypes.Boss,
        synergie: [
            { ankamaId: 2852, name: "Boufmouth légendaire", effect: "Son attaque pousse ses enemies, il peut donc vous pousser contre le Royalmouth ce qui aura pour effect de vous os." },
        ],
        spells: [
            { name: "", passif: true, effect: "Os la personne qui lui fait subir des do pou et les personnes qui subissent des do pou contre lui. Attention donc au Boufmouth Légendaire qui peut pousser ! Si il vous pousse contre le boss vous êtes os." },
        ],
    },
    {
        ankamaId: 1086,
        name: "Les Tynrils",
        monsterType: MonsterTypes.Boss,
        synergie: [
            { ankamaId: 1085, name: "Tynril Déconcerté", effect: "Os au cac, se cool avec les autres Tynrils" },
            { ankamaId: 1086, name: "Tynril Perfide", effect: "Os au cac, se cool avec les autres Tynrils" },
            { ankamaId: 1087, name: "Tynril Ahuri", effect: "Os au cac, se cool avec les autres Tynrils" },
        ],
        spells: [
            { name: "", passif: false, effect: "Peuvent os au cac et se coop entre-eux ! Prevoyez une certaine distance puisqu'il peuvent donc se déplacer de 8 cases (2pm chacun) en tout si ils coop le Tynril le plus proche de vous." },
        ],
    },
    {
        ankamaId: 651,
        name: "Abrakne Sombre",
        monsterType: MonsterTypes.DungeonOnly,
        spells: [{ name: "Invocation de Champa Sombre", passif: false, effect: "Invoque un des 4 champa existant. Le [Champa Bleu] os" }],
    },
    {
        ankamaId: 939,
        name: "Rat Noir",
        monsterType: MonsterTypes.Boss,
        synergie: [
            {name: "Rat Molo, invocation du [Rate Atinée]", effect: "jusqu'a 2po, boost de 1pm infinie sans ldv et lançable tous les tours."},
        ],
        spells: [
            { name: "Peste Noire", passif: false, effect: "Tape à hauteur de 50% de ses pv actuel (75% en crit) les personnes qui recoivent du soin en dommage air." },
            { name: "Kackitu", passif: false, effect: "Cencle de taille 1 autour du Rat Noir, os les personnes qui reçoivent des dommages neutre ou terre. En general il fait ce sort puis tape (dommages terre ou neutre) ce qui à donc pour effet de vous os, évitez d'être a son cac." },
        ],
    },
    {
        ankamaId: 670,
        name: "Koulosse",
        monsterType: MonsterTypes.Boss,
        synergie: [
            { name: "Boufcoul", effect: "Peut rendre invisible ses aliés en zone avec un boost de 5pm."},
        ],
        spells: [
            { name: "Souffle du Koulosse", passif: false, effect: "Peut attirer à son cac. Une fois au cac il peut vous transformer en boufcool qui à pour effet de rendre totalement innofensif (-100pa et -100pm)." },
            { name: "Invocation de Bouftou des cavernes", passif: false, effect: "Invoque un [Bouftou des Cavernes] ou un [Boufcoul] en crit." },
            { name: "Appel du Koulosse", passif: false, effect: "Lançable en ligne, et jusqu'a 8po, attire les enemies à son cac." },
        ],
    },
    {
        ankamaId: 783,
        name: "Fauchalak",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "Faufoll la Joyeuse" },
        spells: [
            { name: "Malédiction Koalak", passif: false, effect: "Retire à 3po autour de lui soit (3 à 4pm, 3 à 4pa, 100 esquive pa ou pm, 400 stats élémentaire, 50% crit, 200 dommages, 200 soin)." },
            { name: "Fauche", passif: false, effect: "Os au cac pour vous remplacer par un fantôme de niveau 100." },
        ],
    },
    {
        ankamaId: 3991,
        name: "Arapex",
        monsterType: MonsterTypes.DungeonOnly,
        synergie: [
            { ankamaId: 3993, name: "Néfileuse", effect: "Transforme un enemie en cocon au cac." },
        ],
        spells: [
            { name: "Exécution", passif: false, effect: "Os les enemies ayant l'etat cocon lancé par la [Néfileuse]." },
            { name: "Fauche", passif: false, effect: "Os au cac pour vous remplacer par un fantôme de niveau 100." },
        ],
    },
    {
        ankamaId: 3993,
        name: "Néfileuse",
        monsterType: MonsterTypes.Commun,
        spells: [
            { name: "Prison de soie", passif: false, effect: "Transforme un enemie en cocon au cac. Tous les 3 tours" },
            { name: "Toile paralysante", passif: false, effect: "Une sorte de glyphe qui a pour effet: -100pm, -10% res et applique les etats pesanteur et inébranlable." },
        ],
    },
    {
        ankamaId: 755,
        name: "Mama Koalak",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "Mamakomou l'Âge" },
        synergie: [],
        spells: [
            { name: "Accouchement", passif: false, effect: "Invoque un koalak, 10% chance d'invoquer un [Koalak Forestier]."},
        ],
    },
    {
        ankamaId: 785,
        name: "Koalak Forestier",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        synergie: [],
        spells: [
            { name: "", passif: false, effect: "Transforme en buisson au cac (-100pa et -100pm)." },
        ]
    },
    {
        ankamaId: 215,
        name: "Trukikol",
        monsterType: MonsterTypes.Commun,
        archi: { monsterType: MonsterTypes.Archi, name: "" },
        spells: [
            { name: "Virevoltage collant", passif: false, effect: "Pose un glyphe de cercle 1 et de distance 3, vous perdez 100pm à l'interieur de celui-ci." },
            { name: "Électromagnétisme", passif: false, effect: "Autour du mob, cercle de taille 4. Vous attire de 3 cases vers les enemies qui vous tappent en ligne." },
        ],
    },
    {
        ankamaId: 3482,
        name: "Dramak",
        monsterType: MonsterTypes.DungeonOnly,
        spells: [
            { name: "", passif: false, effect: "Transforme en marionette au cac, ce qui a pour effet de vous retirer 100pa et 100pm pour le tour." },
        ],
    },
    {
        ankamaId: 3651,
        name: "Phossile",
        monsterType: MonsterTypes.Boss,
        spells: [
            { name: "Phorreur de Gloire", passif: true, effect: "Os à 3po autour de lui au tour 5 puis tous les 4 tours." },
            { name: "Phorce", passif: false, effect: "Jusqu'a 3po, tape 50% des pv érodés." },
        ],
    },
    // truchideur: à 11pa peut presque os et s'il est boosté tape très fort
]
const mobsThatBoosts = ["Chiendent", "Abrakleur Clair"]

const getMonsterById = async (monsterId, monsterType) => {
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
        const wantedMonster = await getMonsterById(monster.ankamaId, monster.type)
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
            // console.log("Added \x1b[36m" + newData.name + "\x1b[0m to Database")
            console.log(newData.url)
        }
    })
    // fs.unlinkSync('src/api/keepedMonsters.json');
    fs.appendFile('src/api/keepedMonsters.json', JSON.stringify(createNewMonsterApi, null, 2), (err) => {
        if (err) throw err;
        console.log('Api created !');
    });
});

