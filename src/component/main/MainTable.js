import { Button, Chip, Table, Tooltip } from "@mui/joy"
import { Link } from "react-router-dom"
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined'
import { Alert, Snackbar } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import "./mainTable.css"
import { CustomerListAPI } from "./CustomerAPI"
import { ContextData } from "../../context/ContextData"

function MainTable() {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [snackbarStatus, setSnackbarStatus] = useState('success')
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const copyText = (text, snackbar) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setSnackbarStatus('success')
                setSnackbarMessage(snackbar)
                setOpenSnackbar(true)
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err)
            })
    }

    const snackbarClose = () => {
        setOpenSnackbar(false)
    }

    const [customerList, setCustomerList] = useState()
    const { addCustomerIsActive } = useContext(ContextData)


    useEffect(() => {
        (async () => {
            const customerListData = await CustomerListAPI()
            setCustomerList(customerListData)
        })()
    }, [addCustomerIsActive])

    return (
        <div className="main-table">
            <Table
                borderAxis="none"
                color="neutral"
                stickyFooter={false}
                stickyHeader
                variant="plain"
            >
                <thead>
                    <tr>
                        <th
                            style={{
                                textAlign: 'center',
                                width: '4%',
                                borderRadius: '10px',
                                zIndex: '0',
                            }}
                        >
                            Avatar
                        </th>
                        <th
                            style={{
                                textAlign: 'start',
                                paddingLeft: '20px',
                                width: '15%',
                                zIndex: '0',
                            }}
                        >
                            Full name
                        </th>
                        <th
                            style={{
                                textAlign: 'start',
                                paddingLeft: '20px',
                                width: '8%',
                                zIndex: '0',
                            }}
                        >
                            Phone
                        </th>
                        <th
                            style={{
                                textAlign: 'start',
                                paddingLeft: '20px',
                                width: '10%',
                                zIndex: '0',
                            }}
                        >
                            Email
                        </th>
                        <th
                            style={{
                                textAlign: 'center',
                                width: '3%',
                                zIndex: '0',
                            }}
                        >
                            Gender
                        </th>
                        <th
                            style={{
                                textAlign: 'center',
                                zIndex: '0',
                                width: '6%',
                            }}
                        >
                            Birth date
                        </th>
                        <th
                            style={{
                                textAlign: 'center',
                                zIndex: '0',
                                width: '6%',
                            }}
                        >
                            Created at
                        </th>
                        <th
                            style={{
                                textAlign: 'center',
                                width: '3%',
                                zIndex: '0',
                            }}
                        >
                            Status
                        </th>
                        <th
                            style={{
                                textAlign: 'center',
                                width: '4%',
                                borderRadius: '10px',
                                zIndex: '0',
                            }}
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                {
                    customerList !== undefined ? customerList.map(customer => (
                        <tbody>
                            <tr
                                key={customer.id}
                                className="main-info-row"
                            >
                                <td style={{ textAlign: 'center' }}>
                                    <img src="/avatar.jpg" alt="logo" />
                                </td>
                                <td style={{ paddingLeft: '20px' }}>
                                    {customer.last_name + ' ' + customer.first_name + ' ' + customer.middle_name}
                                </td>
                                <td
                                    onClick={() =>
                                        copyText(
                                            customer.phone,
                                            'Phone is copied'
                                        )
                                    }
                                    style={{
                                        paddingLeft: '20px',
                                        cursor: 'pointer',
                                        color: '#1e88e5',
                                    }}
                                >
                                    {customer.phone}
                                </td>
                                <td
                                    onClick={() =>
                                        copyText(
                                            customer.email,
                                            'Email is copied'
                                        )
                                    }
                                    style={{
                                        paddingLeft: '20px',
                                        cursor: 'pointer',
                                        color: '#1e88e5',
                                    }}
                                >
                                    {customer.email}
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    {customer.gender}
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    1 March 1997
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    6 Jule 2024
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <Chip color="success" variant="soft">
                                        active
                                    </Chip>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <Tooltip title="View detail info" color="success" placement="right" variant='outlined'>
                                        <Link to={`/customer/${'6e775f27-8068-4d7b-bd25-25577f31fb54'}`}>
                                            <Button className="main-info-row-view">
                                                <FullscreenOutlinedIcon fontSize="small" />
                                            </Button>
                                        </Link>
                                    </Tooltip>
                                </td>
                            </tr>
                        </tbody>
                    )) : <div></div>
                }
            </Table>
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

export default MainTable;