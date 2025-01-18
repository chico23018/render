export interface ServiceEntity {
    cursor: string,
    name: string,
    id: string,
    url: string,
    ownerId: string

}

export interface Evento {
    id: string,
    message: string,
    createdAt: string
    cursor: string,
    status: string,

}