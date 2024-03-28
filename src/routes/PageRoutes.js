import CustomerHome from "../pages/Customer/Home/Customer Home Page";
import Login from "../pages/login & SignUp/login/login";
import {Route, Routes} from "react-router-dom";
import Signup from "../pages/login & SignUp/SignUp/signup";
import SalesLanding from "../pages/admin/Landing Pages/Sales Landing/salesLanding";
import CustomerDashboard from "../pages/admin/Customer Dashboard/customerDashboard";
import CustomerProfile from "../pages/Customer/Customer Profile/Profile/customerProfile";
import CustomerOrderHistory from "../pages/Customer/Order History/customerOrderHistory";
import RemoveCustomers from "../pages/admin/Remove Customers/removeCustomers";
import UpdateCustomers from "../pages/admin/Update Customers/updateCustomers.js";
import View from "../pages/Customer/View/view";
import InventoryLanding from "../pages/admin/Landing Pages/Inventory Landing/inventoryLanding";
import ApprovedRefundsTable from "../pages/admin/Refunds/Customer/Approved Refunds/ApprovedRefundsTable";
import InventoryGeneratedRequest from "../pages/admin/Refunds/Inventory/generatedRequests/InventoryGeneratedRequest";
import InventoryRefundRequest from "../pages/admin/Refunds/Inventory/Modal/InventoryRefundRequest";
import InventoryRefundRequestsTable from "../pages/admin/Refunds/Inventory/RefundRequestsTable/InventoryRefundRequestsTable";
import RefundsManager from "../pages/admin/Refunds/Inventory/RefundRequestsTable/RefundsManager";
import SalesApprovedRefundsTable from "../pages/admin/Refunds/Customer/Sales_Approved Refunds/SalesApprovedRefundsTable";
import SalesRefundDenialForm from "../pages/admin/Refunds/Customer/Refund Denial Form/SalesRefundDenialForm";
import SalesViewRequest from "../pages/admin/Refunds/Customer/Generated Refund Request/SalesViewRequest";
import Success from "../pages/Customer/Cart/success";
import Cancel from "../pages/Customer/Cart/cancel";
import CustomerRefundRequest from "../pages/Customer/Refund/Request Refund/Customer Refund Request ";
import GeneratedCustomerRefundRequest from "../pages/Customer/Refund/Generated Request/Generated Customer Refund Request";
import AddDiscounts from "../pages/admin/Discounts/Modal/Add Discount/addDiscounts";
import OrderDetails from "../pages/admin/Orders/Sales/Order Details/orderDetails";
import CancelOrder from "../pages/admin/Orders/Sales/Cancel Orders/cancelOrders";
import OrderStatus from "../pages/admin/Orders/Sales/Order Status/orderStatus";
import SalesRefundRequestsTable
    from "../pages/admin/Refunds/Customer/View Sales Refund Requests/SalesRefundRequestsTable";

export function PageRouting() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>

                {/*Payment Gateway*/}
                <Route path="/success" element={<Success/>}/>
                <Route path="/cancel" element={<Cancel/>}/>

                <Route path="/" element={<Login/>}/>

                {/*Landing Pages*/}
                <Route path="/salesLanding" element={<SalesLanding/>}/>
                <Route path="/inventoryLanding" element={<InventoryLanding/>}/>
                <Route path="/customerHome" element={<CustomerHome/>}/>

                <Route path="/generatedrefund" element={<GeneratedCustomerRefundRequest/>}/>
                <Route path="/createrefund" element={<CustomerRefundRequest/>}/>


                <Route path="/customerdashboard" element={<CustomerDashboard/>}/>
                <Route path="/customerorderhistory" element={<CustomerOrderHistory/>}/>
                <Route path="/customerprofile" element={<CustomerProfile/>}/>
                <Route path="/removeCustomers" element={<RemoveCustomers/>}/>
                <Route path="/updateCustomers" element={<UpdateCustomers/>}/>
                <Route path="/view" element={<View/>}/>


                <Route path="/AddDiscount" element={<AddDiscounts/>}/>

                <Route path="/ApprovedRefundsTable" element={<ApprovedRefundsTable/>}/>

                <Route path="/InventoryGeneratedRequest" element={<InventoryGeneratedRequest/>}/>
                <Route path="/InventoryRefundRequest" element={<InventoryRefundRequest/>}/>

                <Route path="/RefundsManager" element={<RefundsManager/>}/>

                <Route path="/orderDetails" element={<OrderDetails/>}/>
                <Route path="/orderStatus" element={<OrderStatus/>}/>
                <Route path="/cancelOrders" element={<CancelOrder/>}/>


                <Route path="/SalesApprovedRefundsTable" element={<SalesApprovedRefundsTable/>}/>
                <Route path="/SalesRefundDenialForm" element={<SalesRefundDenialForm/>}/>
                <Route path="/SalesViewRequest" element={<SalesViewRequest/>}/>
                <Route path="/SalesRefundRequestTable" element={<SalesRefundRequestsTable/>}/>

            </Routes>
        </div>
    );
}

