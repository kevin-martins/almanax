import { capitalize, highlightPercentages } from "../../src/helpers/textFormatter"
import { HighlightPercentageProps } from "../../src/models/table";

describe('test text format', () => {

    it('should capitalize the first word in a text', () => {
        const validData = 'Hello bonjour'
        expect(capitalize('hello bonjour')).toEqual(validData)
    })

    it('should highlight all percentages from a text', () => {
        const validData: HighlightPercentageProps[] = [
            {
                text: "La vitesse d'apparition des Archimonstres est augmentée de ",
                shouldHighlight: false,
            },
            {
                text: "200%",
                shouldHighlight: true,
            },
            {
                text: ". La vitesse d'apparition des ressources de tous types est augmentée de ",
                shouldHighlight: false,
            },
            {
                text: "100%",
                shouldHighlight: true,
            },
            {
                text: ".",
                shouldHighlight: false,
            }
        ]
        const validText = "La vitesse d'apparition des Archimonstres est augmentée de 200%. La vitesse d'apparition des ressources de tous types est augmentée de 100%.";
        const textToTest = highlightPercentages(validText);
        expect(textToTest).toEqual(validData)
    })

    it('should highlight only percentages when flat number are also present text', () => {
        const validData: HighlightPercentageProps[] = [
            {
                text: "Les quantités de Trèfles à 5 Feuilles récupérées par les Alchimistes sont augmentées de ",
                shouldHighlight: false,
            },
            {
                text: "125%",
                shouldHighlight: true,
            },
            {
                text: ".",
                shouldHighlight: false,
            }
        ]
        const validText = "Les quantités de Trèfles à 5 Feuilles récupérées par les Alchimistes sont augmentées de 125%.";
        const textToTest = highlightPercentages(validText);
        expect(textToTest).toEqual(validData)
    })
})