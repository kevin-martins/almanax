const fs = require('fs');
const { exit } = require('process');

const MonsterType = {
    Boss: "Boss",
    DungeonOnly: "Seulement en donjon",
    Commun: "Commun",
    Archi: "Archi-monstre"
}

const mobsWhoCanOs = [
    {
        name: "Nakunbra",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        spell: { name: "", effect: "Os si les pdv de la cible sont inférieur où égaux à 50%." }
    },
    {
        name: "Le Chouque",
        monsterType: MonsterType.Boss,
        spell: { name: "", effect: "Applique l'etat 'maudit' au cac qui os si les pdv de la cible sont inférieur où égal à 30%."}
    },
    {
        name: "Gloutovore",
        monsterType: MonsterType.DungeonOnly ,
        spell: "Os que les enemies seulement mais jusqu'a 2 fois par tour, il attire sans ldv de 3 cases."
    },
    {
        name: "Gloutoblop",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "Gloubibou le Gars" },
        spell: "Il os que au cac aliée comme enemies au cac et ça le buff de 200 hp et 2pm infinie, il n'attire pas. Evite de le feed !"
    },
    {
        name: "Champa Bleu",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        spell: "Os au cac seulement. Il a aucun sort de tp, de boost pm ni de sort d'attirance."
    },
    {
        name: "Léolhyène",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        spell: "Lorsqu'il tape avec le sort 'mort sûre' (lançable uniquement au cac), il applique un etat qui se charge. Au stade 4, vous êtes os. Je ne sais pas si l'etat est indépendant au mob ou si d'autres mobs du même type peuvent booster l'etat."
    },
    {
        name: "Wa Wobot",
        monsterType: MonsterType.Boss,
        spell: "Les auto-tamponeuses pouses dès que vous êtes poussé dessus. Si vous êtes dans le cas de figure ou 2 auto-tamponeuses vous pousse l'une vers l'autre et vice versa, vous êtes os."
    },
    {
        name: "Kaskargo",
        monsterType: MonsterType.Commun,
        archi: { monsterType: MonsterType.Archi, name: "" },
        spell: "pose un glyphe sur la case d'arrivée à chaque fois qu'il se tp et peut coop avec ses enemies. Le glyphe en question fait très très mal environ du 3k/4k dmg"
    },
    {
        name: "Dragon Cochon",
        monsterType: MonsterType.Boss,
        spell: "A son tour de jeu et seulement au 1er tour du combat, lance un sort qui vous fait subir une coco chargé par pa utilisé pendant 2 tours ! Ce sort peut être debuff."
    },
    {
        name: "Royalmouth",
        monsterType: MonsterType.Boss,
        spell: "Os la personne qui lui fait subir des do pou et les personnes qui subissent des do pou contre lui. Attention donc au Boufmouth Légendaire qui peut pousser ! Si il vous pousse contre le boss vous êtes os."
    },
    {
        name: "Les Tynrils",
        monsterType: MonsterType.Boss,
        monsterInFight: ["Tynril Déconcerté", "Tynril Consterné", "Tynril Ahuri", "Tynril Perfide"],
        spell: "Peuvent os au cac et se coop entre-eux ! Prevoyez une certaine distance puisqu'il peuvent donc se déplacer de 8 cases (2pm chacun) en tout si ils coop le Tynril le plus proche de vous."
    }
    // Rat Noir os au cac et tape a hauteur de 50% de ses pv (75% en crit) les personnes qui recoivent du soin en dommage air (ex: si RN a 2000 hp, vous subirrez 1 000dmg ou 1 500dmg en crit) !
    // Koalak Forestier transforme en buisson au cac ce qui fait perdre 100pa et 100pm (peut etre invoqué par la "Mama Koalak")
    // Fauchalak os au cac
    // Néfileuse transforme en cocon (pendant 1 tour) au cac lançable 1 tour sur 2 (-100pa et -100pm)
    // Phosile a partir du tour 5 et tous les 4 tours qui suivent jusqu'a sa mort, il os a 3 po autour de lui.
]
const mobsThatBoosts = ["Chiendent", "Abrakleur Clair"]
const mobsThatCanHelpToOs = [
    { name: "Koulosse", monsterType: MonsterType.Boss, spell: "Peut attiré à son cac. Une fois au cac il peut vous transformer en boufcool qui à pour effet de rendre totalement innofensif (-100pa et -100pm)." },
    { name: "Dramak", monsterType: MonsterType.DungeonOnly, spell: "Transforme en marionette ce qui a pour effet de vous retirer 100pa et 100pm pour le tour." },
    { name: "Trukikol", monsterType: MonsterType.Commun, archi: { monsterType: MonsterType.Archi, name: "" }, spell: "Pose un glyphe seulement sur le périmetre du cercle d'un rayon de 3 cases qui à pour effet de vous retirer 100pm ! Pour récuperer ses pm, il suffit simplement d'etre poussé hors du glyphe." },
    { name: "", spell: "" },
    { name: "", spell: "" },
    { name: "", spell: "" },
    { name: "", spell: "" },
    { name: "", spell: "" },
]

fs.readFile('src/api/dataMonsters.json', (err, data) => {
    if (err) throw err;
    let monsters = JSON.parse(data);
    const newData = []
    monsters.forEach(monster => {
        if (mobsWhoCanOs.includes(monster.name)) {
            const monsterData = monster
            delete monster.drop
            newData.push(monsterData)
            console.log("Added \x1b[36m" + monster.name + "\x1b[0m to Database")
        }
    })
    fs.appendFile('src/api/keepedMonsters.json', newData, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

