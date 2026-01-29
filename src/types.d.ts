export interface IShowAPI {
    id: number,
    name: string,
    description: string,
    image: string,
    genres: string[]
}

export interface IShow {
    id: number,
    name: string
}

export interface IShowAPIMutation {
    id: number,
    name: string,
    summary: string,
    image: {
        medium: string,
        original: string,
    },
    genres: string[]
}

