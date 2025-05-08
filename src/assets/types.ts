export interface interfaceCard {
    front: string,
    back: string,
    tag?: string
}

export interface fromTo {
    from: number,
    to: number
}

export interface styleType {
    transform: string
    transition: string
    zIndex?: number
    opacity?: number
}