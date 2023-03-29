import { getUniqueString } from "../../src/helpers/utils"

describe('test date manipulation', () => {
    it('should keep only unique string values', () => {
        const validArray = ["Butin", "Économie d'ingrédients", "Points d'expérience", "Butin"]
        const validResult= ["Butin", "Économie d'ingrédients", "Points d'expérience"]
        const dataToTest = getUniqueString(validArray)
        expect(dataToTest).toEqual(validResult)
    })
})