export const getDateInterval = (daysToAdd: number) => {
    const date = []
    const today = new Date()
    let endDate = new Date(today)

    endDate.setDate(endDate.getDate() + daysToAdd)
    for (let i = 0; i <= daysToAdd; i++) {
        let newDate = new Date(today);
        newDate.setDate(newDate.getDate() + i);
        date.push(newDate.toLocaleDateString('fr-FR'));
    }

    return date
}