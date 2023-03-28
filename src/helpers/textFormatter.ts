import { HighlightPercentageProps } from "../models/table";

export const capitalize = (string: string): string => {
    return string[0].toUpperCase() + string.split('').splice(1, string.length).join('')
}

export const highlightPercentages = (text: string): HighlightPercentageProps[] => {
    const splitedText = text.split(/(\d+%)/g)
    console.log(splitedText)
    if (splitedText.length === 0) return [{ text: text, shouldHighlight: false }]
    return splitedText.map((text: string) => {
        if (text.includes('%')) {
            return {
                text: text,
                shouldHighlight: true
            }
        }
        return {
            text: text,
            shouldHighlight: false
        }
    })
}