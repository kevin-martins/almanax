export type FilterProps = {
    item: string,
    bonus: FilterSearch,
}

export enum FilterSearch {
    None,
    Exp,
    Drop,
    Quantity,
    SaveOnCraft,
    Other,
}