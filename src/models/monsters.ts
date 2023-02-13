export type MonsterTypeProps = "Boss" | "Seulement en donjon" | "Commun" | "Archi-monstre"

export const MonsterTypes = {
    Boss: "Boss",
    DungeonOnly: "Seulement en donjon",
    Commun: "Commun",
    Archi: "Archi-monstre"
}

export enum Effect {
    Boost,
    Heal,
    BlockHeal,
    Rall,
    Os,
    BigDamages,
    Range,
    Cac,
    Invoke,
    Push,
    Attract,
    GetCloser,
    Teleport,
    Coop,
    Invi,
    Pass,
    Invu,
}

export type SpellProps = {
    effect: Effect,
    info?: string,
}

export type SynergieProps = {
    ankamaId: number,
    name: string,
    spells: SpellProps[],
}

export type StatisticsProps = {
    PV: ValuesProps,
    PA?: ValuesProps,
    PM?: ValuesProps,
}

export type ResistanceProps = {
    Terre: ValuesProps,
    Air: ValuesProps,
    Feu: ValuesProps,
    Eau: ValuesProps,
    Neutre: ValuesProps,
}

type ValuesProps = {
    min: number,
    max: number | null,
}

export type MonsterProps = {
    _id: number,
    ankamaId: number,
    name: string,
    level: null,
    type: string,
    statistics: StatisticsProps[],
    resistances: ResistanceProps[],
    monsterType: MonsterTypeProps,
    synergie: SynergieProps[],
    spells: SpellProps[],
}