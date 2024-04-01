import './updateCustomers.css'
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CustomerNavbar from "../../../layout/navbar/Customer navbar/Customer navbar";
import Footer from "../../../layout/footer/footer";
import CustomizedButton from "../../../components/Button/button";


const UploadButtons = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#bec0bf'),
    backgroundColor: '#bec0bf',
    '&:hover': {
        backgroundColor: '#2d3ed2'
    },
    '&.MuiButton-root': {
        width: '16em',
        height: '3em'
    },
    fontSize: '0.95em',
    fontFamily: 'inter',
    padding: '1.75em 0.625em',
    marginTop:'2em',
}));


function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    m: 1,
                    width: '25.5em',
                    "& .MuiInputBase-root":{
                        height: '2.5em',
                        backgroundColor: '#e9eeff'
                    },
                    "& .MuiInputLabel-root": {
                        fontSize: '0.5em',
                        textAlign: 'center',
                    },
                },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" variant="outlined" margin='normal'/>
        </Box>
    );
}


function UpdateCustomers() {
    return (
        <>
            <CustomerNavbar/>
            <div className="UpdateCustomersOuter">
                <div className="UpdateCustomersInner">

                    <div className="UpdateCustomerProfile">
                        <h3 className='UpdateTopicName'>W A P Saman Perera</h3>
                        <div className="updateAvatar">
                            <Avatar src="/broken-image.jpg" sx={{ width: 230, height: 230, border: 2, borderRadius: 3 }} />
                            <div className='uploadButton'>
                                <UploadButtons>...Upload...</UploadButtons>
                            </div>
                        </div>



                    </div>

                    <div className="UpdateCustomerForm">

                        <div className="UpdateCustomerFormField">
                            <div className="UpdateCustomerTextField">
                                <h5>Name</h5>
                            </div>
                            <div className="UpdateCustomerTextInput">
                                <BasicTextFields></BasicTextFields>
                            </div>
                        </div>

                        <div className="UpdateCustomerFormField">
                            <div className="UpdateCustomerTextField">
                                <h5>Address</h5>
                            </div>
                            <div className="UpdateCustomerTextInput">
                                <BasicTextFields></BasicTextFields>
                            </div>
                        </div>

                        <div className="UpdateCustomerFormField">
                            <div className="UpdateCustomerTextField">
                                <h5>Contact</h5>
                            </div>
                            <div className="UpdateCustomerTextInput">
                                <BasicTextFields></BasicTextFields>
                            </div>
                        </div>

                        <div className="UpdateCustomerFormField">
                            <div className="UpdateCustomerTextField">
                                <h5>Email</h5>
                            </div>
                            <div className="UpdateCustomerTextInput">
                                <BasicTextFields></BasicTextFields>
                            </div>
                        </div>

                        <div className="UpdateCustomerButtonField">
                            <div className="UpdateCustomerButtons">
                                <CustomizedButton
                                    hoverBackgroundColor="#2d3ed2"
                                    style={{
                                        color: '#ffffff',
                                        backgroundColor: '#242F9B',
                                        border: '1px solid #242F9B',
                                        width: '8em',
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
                                    Update
                                </CustomizedButton>
                            </div>
                        </div>



                    </div>

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default UpdateCustomers;