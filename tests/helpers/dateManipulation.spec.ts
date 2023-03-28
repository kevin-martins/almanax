import { getDateInterval } from "../../src/helpers/dateManipulation"

describe('test date manipulation', () => {
    it('should list all dates between two dates as follow \'dd/mm/yyyy\'', () => {
        const dates = getDateInterval(2)
        expect(dates).toEqual(["28/03/2023", "29/03/2023", "30/03/2023"])
    })
})