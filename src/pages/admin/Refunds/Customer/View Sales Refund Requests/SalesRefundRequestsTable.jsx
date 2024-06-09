import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';
import Footer from "../../../../../layout/footer/footer";
import SalesNavbar from "../../../../../layout/navbar/Sales navbar/sales navbar";
import { Link } from "react-router-dom";
import CustomizedButton from "../../../../../components/Button/button";
import CustomizedTable from "../../../../../components/Table/Customized Table/customizedTable"; // Use Component 1
import PageLoader from "../../../../../components/Page Loader/pageLoader";

const SalesRefundRequestsTable = ({ onViewApproved }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [refundRequests, setRefundRequests] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRefundRequests = async () => {
            try {
                const response = await axios.get('http://localhost:9000/refund/customerRefund/getAll');
                setRefundRequests(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching refund requests:', error);
                setError('Failed to fetch refund requests. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchRefundRequests();
    }, []);

    const handleStatusButtonClick = requestId => {
        console.log('Button for request ID', requestId, 'was clicked');
    };

    const columns = [
        { columnId: 'name', label: 'Name', minWidth: 70, align: 'center' },
        { columnId: 'requestId', label: 'Request Id', minWidth: 100, align: 'center' },
        { columnId: 'orderId', label: 'Order Id', minWidth: 100, align: 'center' },
        { columnId: 'actions', label: 'Actions', minWidth: 150, align: 'center' }
    ];

    const mappedData = refundRequests.map(row => ({
        id: row.requestId, // Ensure each row has a unique id for React key
        name: row.name,
        requestId: row.requestId,
        orderId: row.orderId,
        actions: (
            <Link to="/SalesViewRequest">
                <CustomizedButton
                    onClick={() => handleStatusButtonClick(row.requestId)}
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
                        textTransform: 'none',
                        textAlign: 'center',
                    }}>
                    View
                </CustomizedButton>
            </Link>
        )
    }));

    return (
        <>
            <SalesNavbar />
            <Container maxWidth="90%" style={{ backgroundColor: '#DBDFFD', height: '37.5em' }}>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 2,
                            marginBottom: 2
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Refund Request
                        </Typography>
                        <Box>
                            <Link to="/SalesApprovedRefundsTable">
                                <CustomizedButton
                                    onClick={onViewApproved}
                                    hoverBackgroundColor="#2d3ed2"
                                    style={{
                                        color: '#ffffff',
                                        backgroundColor: '#242F9B',
                                        border: '1px solid #242F9B',
                                        width: '11em',
                                        height: '2.5em',
                                        fontSize: '0.95em',
                                        fontFamily: 'inter',
                                        padding: '0.5em 0.625em',
                                        borderRadius: '0.35em',
                                        fontWeight: '550',
                                        marginTop: '0.625em',
                                        textTransform: 'none',
                                        textAlign: 'center',
                                    }}>
                                    Approved Refunds
                                </CustomizedButton>
                            </Link>
                        </Box>
                    </Box>
                    {isLoading ? (
                        <PageLoader />
                    ) : error ? (
                        <Typography variant="body1" color="error">
                            {error}
                        </Typography>
                    ) : (
                        <CustomizedTable
                            columns={columns}
                            rows={mappedData}
                            style={{ minWidth: 700, maxHeight: 400 }}
                        />
                    )}
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default SalesRefundRequestsTable;
