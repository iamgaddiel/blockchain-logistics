import React from 'react'


interface Props {
    shipmentId: string
    handleSuccessConfrimation(): void
}
const Success: React.FC<Props> = ({ shipmentId, handleSuccessConfrimation }) => {
    return (
        <section className="quote-area">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-12">
                        <div className="estimated-cost">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-getEstimation" role="tabpanel"
                                    aria-labelledby="nav-getEstimation-tab">
                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="amount">Shipment ID</label>
                                                <input type="text" className="form-control border-0 h-2"
                                                    value={shipmentId} disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <label htmlFor="amount">Copy this your shipment id  as it can not be retrieved if you leave this screen</label>
                                        </div>

                                        <div className="col-lg-12 mt-4">
                                            <div className="text-center confirm_btn_box">
                                                <button className="main_btn text-uppercase" onClick={handleSuccessConfrimation}>Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Success