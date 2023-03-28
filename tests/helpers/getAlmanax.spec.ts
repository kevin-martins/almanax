import { getDateInterval } from "../../src/helpers/dateManipulation"
import Almanax from '../../src/api/almanax.json'

describe('test almanax', () => {
    it('should return today\'s almanax: 28/03/2023', () => {
        const validData = [{
            "date": "28/03/2023",
            "filterSearch": "Challenge supplémentaire",
            "bonus": "Un challenge supplémentaire est généré contre les créatures de type Boufmouths.",
            "name": "Corne de Boufmouth de guerre",
            "quantity": 2,
            "icon": "https://api.dofusdu.de/dofus2/img/item/47661-200.png",
            "reward": 14777
        }]
        const dataToTest = getDateInterval(0).map(days => {
            return Almanax.find(date => date.date === days)
        })
        expect(dataToTest).toEqual(validData)
    })
})