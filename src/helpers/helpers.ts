import { Text } from "../components/Select";
import { FilterSearch } from "../models/filter";
import { MonsterTypes } from "../models/monsters";
import { HighlightBonusNumbers } from "../models/table";
import monsters from '../api/keepedMonsters.json'

export const getTextByLanguage = (text: Text[], language: string): string => {
    for (const t of text)
        if (t.language === language) return t.text
    return ""
}

export const getFilterSearch = (description: string): FilterSearch => {
    if (description.includes("Les chances d'obtenir du butin sont augmentées")) return FilterSearch.Drop
    else if (description.includes("Les quantités de")) return FilterSearch.Quantity
    else if (description.includes("Les gains d'expérience sont augmentés de")) return FilterSearch.Exp
    else if (description.includes("économisent")) return FilterSearch.SaveOnCraft
    return FilterSearch.Other
}

export const splitNumbers = (text: string): HighlightBonusNumbers[] => {
    const highlight: HighlightBonusNumbers[] = []
    const splitedText = text.split(/(?=\d+ ?%)|(?<=\d+ ?%)/g)
    if (splitedText.length === 0) return [{ text: text, isNumber: false }]
    splitedText.reduce((acc: string, cur: string) => {
        if (!"0123456789".split('').every((number: string) => !cur.includes(number)))
            return acc.concat(cur)
        else {
            if (acc.length > 0) {
                highlight.push({ text: acc, isNumber: true })
                acc = ""
            }
            highlight.push({ text: cur, isNumber: false })
        }
        return acc
    }, "")
    return highlight
}

export const textFormat = (text: string): string => {
    const index = []
    for (let i = 1; i < text.length; i++)
        if (text[i-1] === " " && text[i] === '%')
            index.push(i)
    if (index.length > 0) {
        const splited = text.split('')
        index.forEach(i => splited.splice(i - 1, 1, ''))
        return splited.join('')
    }
    return text
}

export const getFilterValue = (currentFilter: FilterSearch, filters: FilterSearch[]): boolean => {
    for (const filter of filters) {
        if (filter === currentFilter) {
            console.log(filter, currentFilter);
            return true
        }
    }
    return false
}

export const capitalize = (string: string): string => {
    return string[0].toUpperCase() + string.split('').splice(1, string.length).join('')
}

export const getPath = (path: string, ext: string = ".png"): string => {
    return process.env.PUBLIC_URL + path + ext
}

export const monsterTypeToIcon = (monsterType: string): string => {
    const path = '/assets/icons/'
    switch (monsterType) {
        case MonsterTypes.Boss: return getPath(path + 'boss')
        case MonsterTypes.Commun: return getPath(path + 'commun')
        case MonsterTypes.Archi: return getPath(path + 'archi-monstre')
        case MonsterTypes.DungeonOnly: return getPath(path + 'dungeonOnly')
        default: return ""
    }
}

export const getMonsterById = (id: number): void | any => {
    for (const monster of monsters)
        if (monster.ankamaId === id)
            return monster
    return null
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
    return chunks
}