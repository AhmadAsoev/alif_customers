import { useContext } from "react";
import "./addCustomer.css"
import { ContextData } from "../../context/ContextData";
import { Button, Input } from "@mui/joy";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import FaceRetouchingNaturalOutlinedIcon from '@mui/icons-material/FaceRetouchingNaturalOutlined'
import CloseIcon from '@mui/icons-material/Close'

function AddCustomer() {
    const { addCustomerIsActive, setAddCustomerIsActive } = useContext(ContextData)

    function closeAddCustomer() {
        setAddCustomerIsActive(false)
    }

    return (
        <div className={`add-customer-${addCustomerIsActive ? 'active' : 'inactive'}`}>
            <div className="add-content">
                <div className="header-top-up">
                    <div className="header-top-up-logo">
                        <FaceRetouchingNaturalOutlinedIcon fontSize="small" />
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
                                        // onClick={() => exchangeColor()}
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
                                        // onClick={() => exchangeColor()}
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
                                        // onClick={() => exchangeColor()}
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
                                        // onChange={choseGender}
                                        // value={gender}
                                        style={{
                                            minWidth: '350px',
                                            maxWidth: '350px',
                                        }}
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
                                        // onClick={() => exchangeColor()}
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
                                        // onClick={() => exchangeColor()}
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
                                        // onClick={() => exchangeColor()}
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
                                        // onClick={() => exchangeColor()}
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
                        onClick={closeAddCustomer} size="lg" color="success"
                    >
                        Confirm
                    </Button>
                </div>
            </div>
            {/* <Snackbar
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
            </Snackbar> */}
        </div>
    )
}

export default AddCustomer;