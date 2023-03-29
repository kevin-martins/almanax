export const getUniqueString = (array: string[]): string[] => {
    return array.reduce((acc: string[], curr: string) => {
        if (!acc.includes(curr)) {
            acc.push(curr)
        }
        return acc
    }, [])
}