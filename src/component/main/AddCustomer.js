import { useContext, useState } from "react";
import "./addCustomer.css"
import { ContextData } from "../../context/ContextData";
import { Button, Input } from "@mui/joy";
import { Alert, FormControlLabel, Radio, RadioGroup, Snackbar } from "@mui/material";
import FaceRetouchingNaturalOutlinedIcon from '@mui/icons-material/FaceRetouchingNaturalOutlined'
import CloseIcon from '@mui/icons-material/Close'
import parsePhoneNumberFromString from "libphonenumber-js";
import { validate } from "email-validator";
import { AddCustomerAPI } from "./CustomerAPI";

function AddCustomer() {
    const { addCustomerIsActive, setAddCustomerIsActive } = useContext(ContextData)

    function closeAddCustomer() {
        setAddCustomerIsActive(false)
    }

    const [gender, setGender] = useState('')

    const choseGender = (event) => {
        setGender(event.target.value)
    }

    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [snackbarStatus, setSnackbarStatus] = useState('success')
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const snackbarClose = () => {
        setOpenSnackbar(false)
    }



    function changeColor() {
        const phone = document.getElementById(
            'phone'
        )

        const lastName = document.getElementById(
            'lastName'
        )

        const firstName = document.getElementById(
            'firstName'
        )

        const email = document.getElementById(
            'email'
        )

        const password = document.getElementById(
            'password'
        )

        const confirmPassword = document.getElementById(
            'confirmPassword'
        )

        const genderM = document.getElementById(
            'genderCheckM'
        )

        const genderW = document.getElementById(
            'genderCheckW'
        )

        phone.style.color = 'black'

        email.style.color = 'black'

        lastName.style.color = 'black'

        firstName.style.color = 'black'

        password.style.color = 'black'

        confirmPassword.style.color = 'black'

        genderM.style.color = 'black'

        genderW.style.color = 'black'
    }

    function addCustomer () {
        const lastName = document.getElementById(
            'lastName'
        )

        const firstName = document.getElementById(
            'firstName'
        )

        const middleName = document.getElementById(
            'middleName'
        )

        const email = document.getElementById(
            'email'
        )

        const password = document.getElementById(
            'password'
        )

        const confirmPassword = document.getElementById(
            'confirmPassword'
        )

        const phone = document.getElementById(
            'phone'
        )

        const genderM = document.getElementById(
            'genderCheckM'
        )

        const genderW = document.getElementById(
            'genderCheckW'
        )

        let errCount = 0

        if (lastName.value.length === 0) {
            lastName.style.color = 'red'
            errCount++
        }

        if (firstName.value.length === 0) {
            firstName.style.color = 'red'
            errCount++
        }

        if (email.value.length === 0) {
            email.style.color = 'red'
            errCount++
        }


        if (phone.value.length === 0) {
            phone.style.color = 'red'
            errCount++
        }

        if (password.value.length === 0) {
            password.style.color = 'red'
            errCount++
        }


        if (confirmPassword.value.length === 0) {
            confirmPassword.style.color = 'red'
            errCount++
        }

        if (errCount !== 0) {
            if (gender.length === 0) {
                genderM.style.color = 'red'
                genderW.style.color = 'red'
            }
            return
        }


        if (!validate(email.value)) {
            setSnackbarStatus('warning')
            setSnackbarMessage(
                'Email is not valid!'
            )
            setOpenSnackbar(true)

            email.style.color = 'red'
            return
        }

        if (!parsePhoneNumberFromString(phone.value)?.isValid) {
            setSnackbarStatus('warning')
            setSnackbarMessage(
                'Phone format is not valid!'
            )
            setOpenSnackbar(true)

            phone.style.color = 'red'
            return
        }
        
        if (password.value.length <= 6) {
            setSnackbarStatus('warning')
            setSnackbarMessage(
                'Password must be more then 6!'
            )
            setOpenSnackbar(true)

            password.style.color = 'red'
            return
        }

        if (
            confirmPassword.value.length !==
            password.value.length
        ) {
            setSnackbarStatus('warning')
            setSnackbarMessage(
                "Password repeat is not correct!"
            )
            setOpenSnackbar(true)

            confirmPassword.style.color = 'red'
            return
        }

        (async () => {
            await AddCustomerAPI(
                phone.value,
                firstName.value,
                lastName.value,
                middleName.value,
                gender,
                email.value
            )
                .then((response) => {
                    if (response.status === 201) {
                        setSnackbarStatus('success')
                        setSnackbarMessage(
                            'Customer is add success!'
                        )

                        setOpenSnackbar(true)
                    }

                    return
                })
                .catch((errorResponse) => {
                    if (
                        (errorResponse).response?.status === 409
                    ) {
                        setSnackbarStatus('error')
                        const errorResponseData = (
                            errorResponse 
                        ).response?.data

                        console.log(errorResponseData?.error)

                        return
                    } else {
                        setSnackbarStatus('error')
                        setSnackbarMessage(
                            'Server Error!'
                        )
                        setOpenSnackbar(true)

                        return
                    }
                })
        })()
    }

    return (
        <div className={`add-customer-${addCustomerIsActive ? 'active' : 'inactive'}`}>
            <div className="add-content">
                <div className="header-top-up">
                    <div className="header-top-up-logo">
                        <FaceRetouchingNaturalOutlinedIcon fontSize="medium" />
                        Add customer
                    </div>
                    <Button
                        onClick={closeAddCustomer} size="sm" color="danger" startDecorator={<CloseIcon fontSize="small" />}
                    />
                </div>
                <div
                    className={`add-content-data`}
                    style={{ paddingTop: '15px' }}
                >
                    <table style={{ paddingBottom: '15px' }}>
                        <tbody>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label>
                                        Last name
                                        <span
                                            style={{
                                                color: 'red',
                                                fontSize: '20px',
                                                paddingRight: '20px',
                                            }}
                                        >
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <Input
                                        onClick={changeColor}
                                        style={{
                                            color: 'black',
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        id="lastName"
                                        type="text"
                                        placeholder='Input last name'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label>
                                        First name
                                        <span
                                            style={{
                                                color: 'red',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <Input
                                        onClick={changeColor}
                                        style={{
                                            color: 'black',
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        id="firstName"
                                        type="text"
                                        placeholder='Input first name'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label>
                                        Middle name
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <Input
                                        onClick={changeColor}
                                        style={{
                                            color: 'black',
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        id="middleName"
                                        type="text"
                                        placeholder='Input middle name'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label id="gender">
                                        Gender
                                        <span
                                            style={{
                                                color: 'red',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <RadioGroup
                                        className="gender"
                                        aria-labelledby="gender"
                                        name="radio-buttons-group"
                                        onChange={choseGender}
                                        value={gender}
                                        style={{
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        onClick={changeColor}
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            id="genderCheckM"
                                            label='Male'
                                        />
                                        <FormControlLabel
                                            value="female"
                                            id="genderCheckW"
                                            control={<Radio />}
                                            label='Female'
                                        />
                                    </RadioGroup>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label>
                                        Email
                                        <span
                                            style={{
                                                color: 'red',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <Input
                                        onClick={changeColor}
                                        style={{
                                            color: 'black',
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        id="email"
                                        type="text"
                                        placeholder='Input email'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label>
                                        Phone
                                        <span
                                            style={{
                                                color: 'red',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <Input
                                        onClick={changeColor}
                                        style={{
                                            color: 'black',
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        id="phone"
                                        type="text"
                                        placeholder='Input phone'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label>
                                        Password
                                        <span
                                            style={{
                                                color: 'red',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <Input
                                        id="password"
                                        type='password'
                                        style={{
                                            color: 'black',
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        onClick={changeColor}
                                        placeholder='Input password'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '15px' }}>
                                    <label>
                                        Confirm password
                                        <span
                                            style={{
                                                color: 'red',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                </td>
                                <td style={{ paddingBottom: '15px' }}>
                                    <Input
                                        id="confirmPassword"
                                        type='password'
                                        onClick={changeColor}
                                        style={{
                                            color: 'black',
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
                                        placeholder='Input password repit'
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="footer-top-up-action">
                    <Button
                        onClick={closeAddCustomer} size="lg" color="danger"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={addCustomer} size="lg" color="success"
                    >
                        Confirm
                    </Button>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={snackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={snackbarClose}
                    severity={snackbarStatus}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default AddCustomer;