import React from 'react'
import { FieldErrors, SubmitErrorHandler, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { FormInputs } from '../../types/forms'



interface Props {
    handleSubmit: UseFormHandleSubmit<FormInputs>
    register: UseFormRegister<FormInputs>
    errors: FieldErrors<FormInputs>
    loading: boolean
    handleShipmentBooking: SubmitHandler<FormInputs>
}



const CollectionForm: React.FC<Props> = ({
    handleSubmit,
    register,
    errors,
    loading,
    handleShipmentBooking
}) => {
    return (
        <section className="quote-area">
            <div className="container">
                <div className="row justify-content-center text-left section-title-wrap">
                    <div className="col-lg-12">
                        <h5>Get a quote now!</h5>
                        <h2 className="text-white">
                            Check the estimated cost for <br />
                            your requesting goods
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-12">
                        <div className="estimated-cost">
                            <form className="form-wrap" onSubmit={handleSubmit(handleShipmentBooking)}>
                                <nav>
                                    <div className="nav nav-tabs justify-content-md-start justify-content-center" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-getEstimation-tab" data-toggle="tab"
                                            href="index.html#nav-getEstimation" role="tab" aria-controls="nav-getEstimation"
                                            aria-selected="true">Get an estimation</a>
                                        <a className="nav-item nav-link" id="nav-trackShipment-tab" data-toggle="tab"
                                            href="index.html#nav-trackShipment" role="tab" aria-controls="nav-trackShipment"
                                            aria-selected="false">Track Shipment</a>
                                    </div>
                                </nav>

                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-getEstimation" role="tabpanel"
                                        aria-labelledby="nav-getEstimation-tab">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="firstName">First name</label>
                                                    <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp"
                                                        placeholder="Enter first name"
                                                        {...register("firstname", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {errors.firstname && <span className='text-danger'>{errors.firstname.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="lastName">Last name</label>
                                                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name"
                                                        {...register("lastname", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {errors.lastname && <span className='text-danger'>{errors.lastname.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="emailAddress">Email Address</label>
                                                    <input type="email" className="form-control" id="emailAddress" placeholder="Enter email address"
                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="cargoType">Cargo Type</label>
                                                    <input type="text" className="form-control" id="cargoType" placeholder="Enter cargo type"
                                                        {...register("cargo_type", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {errors.cargo_type && <span className='text-danger'>{errors.cargo_type.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="countryOfOrigin">Country of Origin</label>
                                                    <input type="text" className="form-control" id="countryOfOrigin"
                                                        placeholder="Enter country of origin"
                                                        {...register("country_of_origin", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {errors.country_of_origin && <span className='text-danger'>{errors.country_of_origin.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="destination">Destination</label>
                                                    <input type="text" className="form-control" id="destination" placeholder="Enter destination"
                                                        {...register("destination", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {errors.destination && <span className='text-danger'>{errors.destination.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label htmlFor="quantity">Quantity</label>
                                                    <input type="text" className="form-control" id="quantity" placeholder="Enter quantity"
                                                        {...register("quanity", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {errors.quanity && <span className='text-danger'>{errors.quanity.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label htmlFor="weight">Weight (in Kg/Unit)</label>
                                                    <input type="text" className="form-control" id="weight" placeholder="Enter weight" inputMode='numeric'
                                                        {...register("weight", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                                {errors.weight && <span className='text-danger'>{errors.weight.message}</span>}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label htmlFor="tranportaion_medium">Medium</label>
                                                    <select className="form-control" id="" {...register("transportation_medium", {
                                                        required: {
                                                            value: true,
                                                            message: "This field is required"
                                                        }
                                                    })}>
                                                        <option value="air">Air</option>
                                                        <option value="sea">Sea</option>
                                                        <option value="land">Land</option>
                                                    </select>
                                                </div>
                                                {errors.transportation_medium && <span className='text-danger'>{errors.transportation_medium.message}</span>}
                                            </div>

                                            <div className="col-lg-12 mt-4">
                                                <div className="text-center confirm_btn_box">
                                                    <button className="main_btn text-uppercase">Book Shippment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollectionForm