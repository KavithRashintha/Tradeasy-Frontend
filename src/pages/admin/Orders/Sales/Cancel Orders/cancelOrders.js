import React, { useState} from 'react';
import "./cancelOrders.css";
import BasicTextFields from '../../../../../components/Form Inputs/textfield';
import SalesNavbar from "../../../../../layout/navbar/Sales navbar/sales navbar";
import Footer from "../../../../../layout/footer/footer";
import {Link} from "react-router-dom";
import CustomizedButton from "../../../../../components/Button/button";

function CancelOrder() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
    };


    return (
        <>
            <SalesNavbar/>
            <div className="cancelOrderOuter">
                <div className="body">
                    <div className="cancelOrderFilter">
                        <div className="Button1">
                            <Link to="/pendingOrders">
                                <CustomizedButton
                                    children="Pending Orders"
                                    onClick={() => handleButtonClick("Button 1")}
                                    variant="contained"
                                    size="large"
                                    style={{
                                        color: '#646FD4',
                                        backgroundColor: activeButton === "Button 1" ? 'lightblue' : 'white',
                                        width: '11.8em',
                                        height: '3em',
                                        fontSize: '0.95em',
                                        fontFamily: 'inter',
                                        borderRadius: '0.625em',
                                        fontWeight: '550',
                                        border: 'none',
                                        marginTop: '1.5em',
                                        marginBottom: '2em',
                                        textTransform: 'none',
                                        textAlign: 'center',
                                        padding: '2.2em 2.2em',
                                        lineHeight: '1.4em',
                                    }}/>
                            </Link>

                        </div>

                        <div className="Button1">
                            <Link to="/orderStatus">
                                <CustomizedButton
                                    children="Update Order Status"
                                    onClick={() => handleButtonClick("Button 1")}
                                    variant="contained"
                                    size="large"
                                    style={{
                                        color: '#646FD4',
                                        backgroundColor: activeButton === "Button 1" ? 'lightblue' : 'white',
                                        width: '11.8em',
                                        height: '3em',
                                        fontSize: '0.95em',
                                        fontFamily: 'inter',
                                        borderRadius: '0.625em',
                                        fontWeight: '550',
                                        border: 'none',
                                        marginTop: '0.005em',
                                        marginBottom: '2em',
                                        textTransform: 'none',
                                        textAlign: 'center',
                                        padding: '2.2em 2.2em',
                                        lineHeight: '1.4em',
                                    }}/>
                            </Link>

                        </div>

                        <div className="Button1">
                            <Link to="/orderDetails">
                                <CustomizedButton
                                    children="Update Order Details"
                                    onClick={() => handleButtonClick("Button 1")}
                                    variant="contained"
                                    size="large"
                                    style={{
                                        color: '#646FD4',
                                        backgroundColor: activeButton === "Button 1" ? 'lightblue' : 'white',
                                        width: '11.8em',
                                        height: '3em',
                                        fontSize: '0.95em',
                                        fontFamily: 'inter',
                                        borderRadius: '0.625em',
                                        fontWeight: '550',
                                        border: 'none',
                                        marginTop: '0.005em',
                                        marginBottom: '2em',
                                        textTransform: 'none',
                                        textAlign: 'center',
                                        padding: '2.2em 2.2em',
                                        lineHeight: '1.4em',
                                    }}/>
                            </Link>

                        </div>

                        <div className="Button1">
                            <Link to="/cancelOrders">
                                <CustomizedButton
                                    children="Cancel Order"
                                    onClick={() => handleButtonClick("Button 1")}
                                    variant="contained"
                                    size="large"
                                    style={{
                                        color: '#646FD4',
                                        backgroundColor: activeButton === "Button 1" ? 'lightblue' : 'white',
                                        width: '11.8em',
                                        height: '3em',
                                        fontSize: '0.95em',
                                        fontFamily: 'inter',
                                        borderRadius: '0.625em',
                                        fontWeight: '550',
                                        border: 'none',
                                        marginTop: '0.005em',
                                        marginBottom: '2em',
                                        textTransform: 'none',
                                        textAlign: 'center',
                                        padding: '2.2em 2.2em',
                                        lineHeight: '1.4em',
                                    }}/>
                            </Link>

                        </div>
                    </div>
                    <div className="orderDetailsInner">

                        <div className="formbox">
                            <form>
                                <div className="textSection">

                                    <label className='label'>Order Id</label>

                                    <BasicTextFields></BasicTextFields>

                                </div>

                                <div className="textSection">

                                    <label className='label'>Receiver</label>

                                    <BasicTextFields></BasicTextFields>

                                </div>

                                <div className="textSection">

                                    <label className='label'>Items</label>

                                    <BasicTextFields></BasicTextFields>

                                </div>

                                <div className="textSection">

                                    <label className='label'>Amount</label>

                                    <BasicTextFields></BasicTextFields>

                                </div>

                                <div className="textSection">

                                    <label className='label'>Reasons</label>

                                    <BasicTextFields></BasicTextFields>

                                </div>



                                <div className="formButtons">
                                    <CustomizedButton
                                        hoverBackgroundColor="#2d3ed2"
                                        style={{
                                            color: '#ffffff',
                                            backgroundColor: '#242F9B',
                                            border: '1px solid #242F9B',
                                            width: '6em',
                                            height: '2.5em',
                                            fontSize: '0.95em',
                                            fontFamily: 'inter',
                                            padding: '0.5em 0.625em',
                                            borderRadius: '0.35em',
                                            fontWeight: '550',
                                            marginTop: '0.625em',
                                            marginRight: '1.5em',
                                            textTransform: 'none',
                                            textAlign: 'center',
                                        }}>
                                        Go Back
                                    </CustomizedButton>

                                    <CustomizedButton
                                        onClick={() =>{alert("Order has been Cancelled")}}
                                        hoverBackgroundColor="#f11717"
                                        style={{
                                            color: '#ffffff',
                                            backgroundColor: '#960505',
                                            width: '6em',
                                            height: '2.5em',
                                            fontSize: '0.95em',
                                            fontFamily: 'inter',
                                            padding: '0.5em 0.625em',
                                            borderRadius: '0.35em',
                                            fontWeight: '550',
                                            marginTop: '0.625em',
                                            marginRight: '1.5em',
                                            textTransform: 'none',
                                            textAlign: 'center',
                                        }}>
                                        Cancel
                                    </CustomizedButton>

                                </div>

                            </form>


                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CancelOrder;