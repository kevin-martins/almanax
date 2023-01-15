import { Text } from "../components/Select";
import { DataProps } from "../models/data";
import { FilterSearch, FilterProps } from "../models/filter";

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