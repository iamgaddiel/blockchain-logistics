import { ShipmentItem } from "./shipmenet"

export interface FormInputs {
    firstname: string
    lastname: string
    email: string
    cargo_type: string
    country_of_origin: string
    destination: string
    quanity: number
    weight: number
    transportation_medium: "air" | "sea" | "land" 
    total?: number
}


export interface TransactionInput{
    amount?: string
    shipment?: ShipmentItem
    transaction_address: string
}
