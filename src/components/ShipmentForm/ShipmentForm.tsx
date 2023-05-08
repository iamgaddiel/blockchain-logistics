import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { createItem } from '../../helpers/sdks';
import { HISTORY_COLLECTIONS, SHIPMENTS_COLLECTIONS, TRANSACTIONS_COLLECTIONS } from '../../helpers/keys';
import { useNavigate } from 'react-router-dom';
import CollectionForm from '../ColllectionForm/CollectionForm';
import { FormInputs, TransactionInput } from '../../types/forms';
import Checkout from '../Checkout/Checkout';
import Success from '../Success/Success';




type Screen = "collection" | "checkout" | "success"



const ShipmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();

    const {
        register: transactionRegister,
        handleSubmit: handleTransactionSubmit,
        formState: { errors: transactionErrors }
    } = useForm<TransactionInput>();

    const navitage = useNavigate()

    const [loading, setLoading] = useState(false)

    const [screen, setScreen] = useState<Screen>("collection")

    const [formCollectionData, setFormCollectionData] = useState<FormInputs | null>(null)

    const [shipementId, setShipementId] = useState("")




    const handleShipmentBooking: SubmitHandler<FormInputs> = async (data) => {

        /**
         * [Shipment Payment]
         * start loading
         * calculate and save shipment cost: shipmentData
         * 
         * display checkout form on next page (shipmentData)
         *  - amount
         *  - crypto addres
         *  - crypto network
         * 
         * make payment
         *  - create shipment
         *  - create transaction
         *  - create hitory
         * 
         * show success screen for 3s then display collection
         *  - display shipment ID
         *  - warn that the ID can not be retrieve once gone
         * 
         * [Shipment Tracking]
         *  - collection shipmnetID
         *  - display all history for shipementID (asc)
         */

        setLoading(true)

        let medium_cost = function (medium: "air" | "sea" | "land"): number {
            let cost: number

            switch (medium) {
                case "air":
                    cost = 10
                    break

                case "sea":
                case "land":
                    cost = 5
                    break
            }
            return cost
        }

        let total_amount = (data.weight * medium_cost(data?.transportation_medium)) * data.quanity

        data = { ...data, total: total_amount }

        setFormCollectionData(data)

        setScreen("checkout") // show checkout screen
    }


    const handlePayment: SubmitHandler<TransactionInput> = async (data) => {
        try {
            const { isCreated, record: shipementRecord } = await createItem(SHIPMENTS_COLLECTIONS, formCollectionData!)
            logError(isCreated, "Could not create shipment")

            const transactionData = { ...data, shipment: shipementRecord?.id, amount: shipementRecord?.total }
            const { isCreated: createdTransaction } = await createItem(TRANSACTIONS_COLLECTIONS, transactionData)
            logError(createdTransaction, "Could not create transaction")

            const historyData = { current_location: shipementRecord?.country_of_origin, shipement: shipementRecord?.id }
            const { isCreated: createdHistory } = await createItem(HISTORY_COLLECTIONS, historyData)
            logError(createdHistory, "Could not create history")

            setShipementId(shipementRecord?.id!)
            setScreen("success") // show success screen

        } catch (e: any) {
            console.log(e)
        }
    }

    function handleSuccessConfrimation(): void {
        setScreen("collection")
    }


    function logError(created: boolean, msg: string) {
        if (!created) {
            console.error(msg)
            return;
        }
    }



    if (screen === "collection") return (
        <CollectionForm
            handleShipmentBooking={handleShipmentBooking}
            errors={errors}
            handleSubmit={handleSubmit}
            register={register}
            loading={loading}
        />
    )

    if (screen === "checkout") return (
        <Checkout
            handlePayment={handlePayment}
            transactionErrors={transactionErrors}
            handleTransactionSubmit={handleTransactionSubmit}
            transactionRegister={transactionRegister}
            loading={loading}
            shipmentData={formCollectionData}
        />
    )

    if (screen === "success") return (
        <Success
            shipmentId={shipementId}
            handleSuccessConfrimation={handleSuccessConfrimation}
        />
    )


}

export default ShipmentForm
