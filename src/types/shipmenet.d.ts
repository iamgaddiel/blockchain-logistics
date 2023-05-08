export interface ShipmentList {
    page: number
    perPage: number
    totalPages: number
    totalItems: number
    items: ShipmentItem[]
}


export interface ShipmentItem {
    id?: string
    collectionId: string
    collectionName: string
    created: string
    updated: string
    firstname: string
    lastname: string
    email: string
    cargo_type: string
    country_of_origin: string
    destination: string
    weight: string
    transportation_medium: string
    total: string
}
