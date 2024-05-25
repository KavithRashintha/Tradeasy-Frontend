import React from 'react';
import './invoice.css';
import dayjs from 'dayjs';

const SalesReceipt = React.forwardRef(({ purchasedItems }, ref) => {

    let totalQuantity = 0;
    let grossTotal = 0;
    let discount = 0;
    let netTotal = 0;
    let billedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');

    purchasedItems.forEach(item => {
        totalQuantity += item.qty;
        grossTotal += item.price * item.qty;
    });

    discount = 0.00;
    netTotal = grossTotal - discount;

    return (
        <div className="sales-receipt" ref={ref}>
            <div className="sales-receipt-header">
                <div className="logo">
                    <img className="sales-receipt-sys-logo" src="Logo.png" alt="tradeasy logo" />
                </div>
                <div className="sales-receipt-store-details">
                    <h5 className='shopName'>Tradeasy Pvt. Ltd.</h5>
                    <p className='branchAddress'>No: 30, Main Street, Galle</p>
                    <p className='branchPhone'>+94 912 222 231</p>
                    <p className='branchEmail'>office@tradeasy.com</p>
                </div>
            </div>
            <hr className='invoice-line-top' />
            <h5 className='payemnt-receipt-Txt'>Payment - Receipt</h5>
            <hr className='invoice-line-top' />
            <div className="receipt-content">
                <table className='receipt-details-table'>
                    <tbody>
                    <tr>
                        <td className='receipt-details-label'>Invoice No:</td>
                        <td className='receipt-details-value'>1</td>
                    </tr>
                    <tr>
                        <td className='receipt-details-label'>Invoiced At:</td>
                        <td className='receipt-details-value'>{billedAt}</td>
                    </tr>
                    <tr>
                        <td className='receipt-details-label'>Customer:</td>
                        <td className='receipt-details-value'>'abc'</td>
                    </tr>
                    <tr>
                        <td className='receipt-details-label'>Email:</td>
                        <td className='receipt-details-value'>"customerName"</td>
                    </tr>
                    <tr>
                        <td className='receipt-details-label'>Contact No:</td>
                        <td className='receipt-details-value'>"contactNo"</td>
                    </tr>
                    </tbody>
                </table>

                <hr className='invoice-line' />
                <div className="items">
                    <table className='item-table'>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th style={{ textAlign: 'center' }}>Price</th>
                            <th style={{ textAlign: 'right' }}>Qty</th>
                            <th style={{ textAlign: 'right' }}>Amount(Rs)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {purchasedItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td style={{ textAlign: 'left' }}>{(item.price).toFixed(2)}</td>
                                <td style={{ textAlign: 'right' }}>{(item.qty)}</td>
                                <td style={{ textAlign: 'right' }}>{(item.price * item.qty).toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <hr className='invoice-line' />
            <div className="billMiddle">
                <div className="inquaryQR">
                    For any inquiry
                    <small>Scan me</small>
                    {/*<img className="qrImg" src={SugesstionQR} alt="Sugession QR" />*/}
                </div>
                <div className="total">
                    <table className='total-table'>
                        <tbody>
                        <tr>
                            <td>No Qty </td>
                            <td style={{ textAlign: 'right' }}>{totalQuantity}</td>
                        </tr>
                        <tr>
                            <td>Gross Total </td>
                            <td style={{ textAlign: 'right' }}>{grossTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Discount </td>
                            <td style={{ textAlign: 'right' }}>{discount.toFixed(2)}</td>
                        </tr>
                        <tr style={{ fontSize: "14px", fontWeight: "bold" }}>
                            <td>Net Total </td>
                            <td style={{ textAlign: 'right' }}>{netTotal.toFixed(2)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr className='invoice-line-top' />
            <div className="footer">
                <h5> Thank you, Come again!</h5>
                <p> © <span style={{ fontFamily: "Princess Sofia, cursive" }}> Tradeasy -</span>Powered By 99X Pvt Ltd.</p>
                <hr className='invoice-line' />
                <p className='special-note'> Please use this bill as a reference if you have any price discrepancies, refunds or product returns. Only applicable for 7 days from today.</p>
            </div>
        </div>
    );
});

export default SalesReceipt;
