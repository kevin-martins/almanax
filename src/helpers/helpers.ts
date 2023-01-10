import { Text } from "../components/Select";
import { DataProps } from "../models/data";
import { language } from "../models/language";

type Props = {
    Language: string,
    version: number,
    data: any[],
}

export const getTextByLanguage = (text: Text[], language: string): string => {
    for (const t of text)
        if (t.language === language) return t.text
    return ""
}