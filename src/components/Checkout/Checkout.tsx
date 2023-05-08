import React from 'react'
import { FormInputs, TransactionInput } from '../../types/forms'
import { UseFormHandleSubmit, UseFormRegister, FieldErrors, SubmitHandler } from 'react-hook-form'




interface Props {
    handleTransactionSubmit: UseFormHandleSubmit<TransactionInput>
    transactionRegister: UseFormRegister<TransactionInput>
    transactionErrors: FieldErrors<TransactionInput>
    loading: boolean
    handlePayment: SubmitHandler<TransactionInput>
    shipmentData: FormInputs | null
}


const Checkout: React.FC<Props> = ({
    handlePayment,
    transactionRegister,
    transactionErrors,
    loading,
    handleTransactionSubmit,
    shipmentData
}) => {
    return (
        <section className="quote-area">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-12">
                        <div className="estimated-cost">
                            <form className="form-wrap" onSubmit={handleTransactionSubmit(handlePayment)}>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-getEstimation" role="tabpanel"
                                        aria-labelledby="nav-getEstimation-tab">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="amount">Address</label>
                                                    <input type="text" className="form-control border-0" 
                                                        value="0x5359C8ea8c08a36DdFc63168df2a577062B51bf5" disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="amount">Network</label>
                                                    <input type="text" className="form-control border-0" 
                                                        value="ERC-20" disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="amount">Amount</label>
                                                    <input type="text" className="form-control" id="amount" aria-describedby="emailHelp"
                                                        placeholder="Amount" value={shipmentData?.total} disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="transaction_address">Transaction Address</label>
                                                    <input type="text" className="form-control" id="transaction_address" placeholder="Transaction Address"
                                                        {...transactionRegister("transaction_address", {
                                                            required: {
                                                                value: true,
                                                                message: "This field is required"
                                                            }
                                                        })}
                                                    />
                                                    {transactionErrors.transaction_address && <span className='text-danger'>{transactionErrors.transaction_address.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-4">
                                                <div className="text-center confirm_btn_box">
                                                    <button className="main_btn text-uppercase">Confirm</button>
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

export default Checkout