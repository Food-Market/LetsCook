import React from "react"
import { Link } from "react-router-dom"

import "../styles/assets/font/flaticon.scss"

import Logo from "../styles/assets/images/Logo.png"

import Mastercard from "../styles/assets/icons/mastercard.svg"
import Visa from "../styles/assets/icons/visa.svg"
import Paypal from "../styles/assets/icons/paypal.svg"

export const Payments = () => {
    // handleChange = (e) => {
    //   this.setState({
    //     [e.target.name]: e.target.value,
    //   });
    // };

    // handleClick = (e) => {
    //   console.log('Clicked');
    // };

    return (
        <React.Fragment>
            <main className="main-payments">
                <div className="card">
                    <nav className="nav_mobile">
                        <ul>
                            <a href="">
                                <span className="flaticon-left-arrow"></span>
                            </a>
                            <a href="">
                                <img
                                    className="logo_payment"
                                    src={Logo}
                                    alt="Logo LetsCook"
                                />
                            </a>
                        </ul>
                    </nav>

                    <OldMethod />
                    {/* _____________________________ */}
                    <NewMethod />

                    <a className="button" href="">
                        Continue
                    </a>
                </div>
            </main>
        </React.Fragment>
    )
}

const OldMethod = () => {
    return (
        <section className="old_methods">
            <h3 className="title_method">Payment Methods</h3>
            <div className="methods">
                <ul>
                    <a className="method" href="">
                        <input
                            type="radio"
                            id="visa"
                            name="card"
                            value="visa"
                        />
                        <img src={Visa} alt="" />
                        <p>****</p>
                        <p>5634</p>
                        <p>11/25</p>
                    </a>
                    <a className="method" href="">
                        <input
                            type="radio"
                            id="mastercard"
                            name="card"
                            value="mastercard"
                        />
                        <img src={Mastercard} alt="" />
                        <p>****</p>
                        <p>3152</p>
                        <p>03/21</p>
                    </a>
                    <a className="method" href="">
                        <input
                            type="radio"
                            id="paypal"
                            name="card"
                            value="paypal"
                        />
                        <img className="paypal" src={Paypal} alt="" />
                    </a>
                    <a className="method" href="">
                        <input
                            type="radio"
                            id="paypal"
                            name="card"
                            value="paypal"
                        />
                        <img className="paypal" src={Paypal} alt="" />
                    </a>
                    <a className="method" href="">
                        <input
                            type="radio"
                            id="paypal"
                            name="card"
                            value="paypal"
                        />
                        <img className="paypal" src={Paypal} alt="" />
                    </a>
                </ul>
            </div>
        </section>
    )
}

const NewMethod = () => {
    return (
        <React.Fragment>
            <form className="new_method">
                <div className="method_header">
                    <h3 className="title_method ">Add Payment Methods</h3>
                    <select name="type_card button" id="">
                        <option href="">Credit Card</option>
                        <option href="">Debit Card</option>
                    </select>
                </div>
                <label>Card Number</label>
                <input
                    // onChange={this.handleChange}
                    className="new_card"
                    type="text"
                    placeholder="4152 1254 1254 6548"
                    name="idCard"
                    // value={this.state.idCard}
                />
                <div className="security_form">
                    <label>Valid Thru</label>
                    <label>CVV</label>
                    <input
                        // onChange={this.handleChange}
                        type="text"
                        placeholder="15/23"
                        name="validThru"
                        // value={this.state.validThru}
                    />
                    <div className="secyrity_from--view">
                        <input
                            // onChange={this.handleChange}
                            type="text"
                            placeholder="***"
                            name="cvv"
                            // value={this.state.cvv}
                        />
                        <a href="">
                            <span className="flaticon-visibility"></span>
                        </a>
                        {/* <a href=''>
              <span className='flaticon-invisible'></span>
            </a> */}
                    </div>
                </div>
                <a
                    type="button"
                    // onClick={this.handleClick}
                    className="add_card"
                    href=""
                >
                    Add Method
                </a>
            </form>
        </React.Fragment>
    )
}

export default Payments
