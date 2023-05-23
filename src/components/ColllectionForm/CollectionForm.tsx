import React, { useState } from 'react'
import { FieldErrors, SubmitErrorHandler, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { FormInputs } from '../../types/forms'
import ShipmentRegForm from '../ShipmentRegForm/ShipmentRegForm'
import TrackingForm from '../TrackingForm/TrackingForm'



interface Props {
    handleSubmit: UseFormHandleSubmit<FormInputs>
    register: UseFormRegister<FormInputs>
    errors: FieldErrors<FormInputs>
    loading: boolean
    handleShipmentBooking: SubmitHandler<FormInputs>
}



type FormDisplay = "shipment" | "tracking"

const CollectionForm: React.FC<Props> = ({
    handleSubmit,
    register,
    errors,
    loading,
    handleShipmentBooking
}) => {

    const [formDispaly, setFormDisplay] = useState<FormDisplay>("shipment")
    return (
        <section className="quote-area">
            <div className="container">
                <div className="row justify-content-center text-left section-title-wrap">
                    <div className="col-lg-12">
                        <h5>Get a quote now!</h5>
                        <h2 className="text-white">
                            ENTER   PLACE ORDERS, CREATE TRANSACTIONS <br /> AND TRACK SHIPMENTS
                        </h2>
                    </div>
                </div>
                <nav>
                    <div className="nav nav-tabs justify-content-md-start justify-content-center" id="nav-tab" role="tablist">
                        <button
                            className="nav-item nav-link active"
                            id="nav-getEstimation-tab"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="nav-getEstimation"
                            aria-selected="true"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-getEstimation"
                            type="button"
                            onClick={() => setFormDisplay("shipment")}
                        >
                            Book a Shipment
                        </button>

                        <button
                            className="nav-item nav-link"
                            id="nav-trackShipment-tab"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="nav-trackShipment"
                            aria-selected="false"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-trackShipment"
                            type="button"
                            onClick={() => setFormDisplay("tracking")}
                        >
                            Track Shipment
                        </button>
                    </div>
                </nav>
                {
                    formDispaly === "shipment" ? <ShipmentRegForm
                        handleSubmit={handleSubmit}
                        register={register}
                        errors={errors}
                        handleShipmentBooking={handleShipmentBooking}
                    /> : null
                }
                {formDispaly === "tracking" ? <TrackingForm /> : null}
            </div>
        </section>
    )
}

export default CollectionForm
