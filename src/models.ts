export type List =  {
    id: string;
    listName: string;
    listDetails: string;
    items: Item[] | undefined;
}

export type Item = {
    key: string, 
    value: string
}