import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { filterCollection, getItem } from '../../helpers/sdks';
import { SHIPMENTS_COLLECTIONS } from '../../helpers/keys';
import { HISTORY_COLLECTIONS } from '../../helpers/keys';
import { HistoryItem, HistoryList } from '../../types/history';


type TrackingState = "form" | "result"

interface FormInputs { trackingId: string }



const TrackingForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();

    const [trackingState, setTrackingState] = useState<TrackingState>("form")

    const [shipementHistory, setShipementHistory] = useState<HistoryItem[] | []>([])

    const [loading, setLoading] = useState(false)



    const handleShipmentBooking: SubmitHandler<FormInputs> = async ({ trackingId }) => {
        setLoading(true)
        const filterParams = `shipment="${trackingId}"`
        const res = await filterCollection(HISTORY_COLLECTIONS, filterParams) as HistoryList
        console.log("🚀 ~ file: TrackingForm.tsx:33 ~ consthandleShipmentBooking:SubmitHandler<FormInputs>= ~ res:", res)
        if (res === undefined) {
            console.log("Error shipment with TrackingId:", trackingId, res)
            return;
        }
        setShipementHistory(res?.items!)
        setLoading(false)
        setTrackingState("result")
    }


    if (trackingState === "form") {
        return (
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-12">
                    <div className="estimated-cost">
                        <form className="form-wrap" onSubmit={handleSubmit(handleShipmentBooking)}>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-getEstimation" role="tabpanel"
                                    aria-labelledby="nav-getEstimation-tab">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="weight">Shipment ID</label>
                                                <input type="text" className="form-control" id="weight" placeholder="Enter Shipment ID" inputMode='numeric'
                                                    {...register("trackingId", {
                                                        required: {
                                                            value: true,
                                                            message: "This field is required"
                                                        }
                                                    })}
                                                />
                                            </div>
                                            {errors.trackingId && <span className='text-danger'>{errors.trackingId.message}</span>}
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <div className="text-center confirm_btn_box">
                                                <button className="main_btn text-uppercase">Track</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }


    if (trackingState === "result") {
        return (
            <>
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-12">
                        <div className="estimated-cost px-4">
                            {
                                shipementHistory.map((history, idx) => (
                                    <div className="card my-3">
                                        <div className="card-content">
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between text-muted">
                                                    <span>location {idx === 0 && <strong className=''>(origin)</strong>}</span>
                                                    <span>{history.current_location}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between text-muted">
                                                    <span>timestamp</span>
                                                    <span>{history.created}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className="row justify-content-between align-items-center">
            <div className="col-lg-12">
                <div className="estimated-cost">
                    <form className="form-wrap" onSubmit={handleSubmit(handleShipmentBooking)}>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-getEstimation" role="tabpanel"
                                aria-labelledby="nav-getEstimation-tab">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="weight">Shipment ID</label>
                                            <input type="text" className="form-control" id="weight" placeholder="Enter Shipment ID" inputMode='numeric'
                                                {...register("trackingId", {
                                                    required: {
                                                        value: true,
                                                        message: "This field is required"
                                                    }
                                                })}
                                            />
                                        </div>
                                        {errors.trackingId && <span className='text-danger'>{errors.trackingId.message}</span>}
                                    </div>
                                    {
                                        loading ?
                                            <div className="col-lg-12 mt-4">
                                                <div className="text-center confirm_btn_box">
                                                    <div className='spinner-border'>
                                                        {/* <span className="sr-only">Loading...</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                            :

                                            <div className="col-lg-12 mt-4">
                                                <div className="text-center confirm_btn_box">
                                                    <button className="main_btn text-uppercase">Track</button>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}



export default TrackingForm