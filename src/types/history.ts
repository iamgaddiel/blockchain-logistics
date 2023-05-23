export interface HistoryItem {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string
    current_location: string
    shipment: string
}

export interface HistoryList {
    page: string
    perPage: string
    totalPages: string
    totalItems: string
    items: HistoryItem[]
}
