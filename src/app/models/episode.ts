export interface EpisodeInterface {
    animes?: any,
    title: string,
    img: string,
    nEpisode: number,
    type: string,
    animeId?: string
    epNumber?: number
    downloads?: any,
    videos?: any,
}
export interface EpisodeArray  { 
    animes?: Array<EpisodeInterface>,
    success?: any
}

export interface EpisodeI {
    title?: string
    animeId?: string
    epNumber?: number
    videos?: Array<any>
    downloads?: Array<any>
    success: boolean
}