import React from 'react'
import { UseFormHandleSubmit, UseFormRegister, FieldErrors, SubmitHandler } from 'react-hook-form'
import { FormInputs } from '../../types/forms'



interface Props {
    handleSubmit: UseFormHandleSubmit<FormInputs>
    register: UseFormRegister<FormInputs>
    errors: FieldErrors<FormInputs>
    handleShipmentBooking: SubmitHandler<FormInputs>
}


const ShipmentRegForm: React.FC<Props> = ({
    handleSubmit,
    register,
    errors,
    handleShipmentBooking
}) => {
    return (
        <div className="row justify-content-between align-items-center">
            <div className="col-lg-12">
                <div className="estimated-cost">
                    <form className="form-wrap" onSubmit={handleSubmit(handleShipmentBooking)}>
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
                                            <label htmlFor="countryOfOrigin">Source</label>
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
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="destination">Reciepient's email</label>
                                            <input type="text" className="form-control" id="destination" placeholder="Enter reciepient's email"
                                                {...register("reciepient_email", {
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
    )
}

export default ShipmentRegForm