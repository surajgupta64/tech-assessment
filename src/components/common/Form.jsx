import React from "react"
import "./Form.css"

const Form = () => {


    return (
        <>
            <div className="container1">
                <div className="header">Consultation</div>

                <form action="#">
                    <div className="form first">
                        <div className="details personal">

                            <div className="fields">
                                <div className="input-field">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>

                                <div className="input-field">
                                    <label>Email ID</label>
                                    <input type="text" placeholder="Enter your email" required />
                                </div>

                                <div className="input-field">
                                    <label>Mobile Number</label>
                                    <input type="number" placeholder="Enter mobile number" required />
                                </div>


                                <div className="input-field">
                                    <label>Choose a Counsellor</label>
                                    <select required>
                                        <option>Dhanashree</option>
                                        <option>Pooja</option>
                                        <option>Alia</option>
                                        <option>Others</option>
                                    </select>
                                </div>



                            </div>
                        </div>


                        <button className="sumbit">
                            <span className="btnText">Submit</span>
                            <i className="uil uil-navigator"></i>
                        </button>
                    </div>
                </form >
            </div>
        </>
    )
}

export default Form
