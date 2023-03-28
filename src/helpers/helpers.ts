import newDataMonsters from '../create-api/keepedMonsters.json';
import dataMonsters from '../create-api/dataMonsters.json'
import { MonsterTypes } from "../models/monsters";

// export const getFilterSearch = (description: string): FilterSearch => {
//     if (description.includes("Les chances d'obtenir du butin sont augmentées")) return FilterSearch.Drop
//     else if (description.includes("Les quantités de")) return FilterSearch.Quantity
//     else if (description.includes("Les gains d'expérience sont augmentés de")) return FilterSearch.Exp
//     else if (description.includes("économisent")) return FilterSearch.SaveOnCraft
//     return FilterSearch.Other
// }

// export const getFilterValue = (currentFilter: FilterSearch, filters: FilterSearch[]): boolean => {
//     for (const filter of filters) {
//         if (filter === currentFilter) {
//             console.log(filter, currentFilter);
//             return true
//         }
//     }
//     return false
// }

export const getFile = (path: string, ext: string = "png"): string => {
    return process.env.PUBLIC_URL + path + "." + ext
}

export const monsterTypeToIcon = (monsterType: string): string => {
    const path = '/assets/icons/'
    switch (monsterType) {
        case MonsterTypes.Boss: return getFile(path + 'boss')
        case MonsterTypes.Commun: return getFile(path + 'commun')
        case MonsterTypes.Archi: return getFile(path + 'archi-monstre')
        case MonsterTypes.DungeonOnly: return getFile(path + 'dungeonOnly')
        default: return ""
    }
}

export const getNewMonsterById = (id: number): any => {
    for (const monster of newDataMonsters)
        if (monster._id === id)
            return monster
    return []
}

export const getMonsterById = (id: number): any => {
    for (const monster of dataMonsters)
        if (monster._id === id)
            return monster
    return []
}

export const getNewMonsterSpellsById = (id: number): any => {
    for (const monster of newDataMonsters)
        if (monster._id === id)
            return monster.spells
    return []
}

export const extractBrackedText = (text: string): string[] => {
    const chunks = []
    let chunk = ""
    for (let i: number = 0; i < text.length; i++) {
        if (text[i] === "[" || text[i - 1] === "]") {
            chunks.push(chunk)
            chunk = ""
        }
        chunk += text[i]
    }
    console.log(chunks.length)
    return chunks.length > 0 ? chunks : [text]
}

