import "./main.css"
import FaceRetouchingNaturalOutlinedIcon from '@mui/icons-material/FaceRetouchingNaturalOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import Button from '@mui/joy/Button'
import MainTable from "./MainTable"
import { Tooltip } from "@mui/joy"
import { Pagination } from "@mui/material"
import { useContext } from "react"
import { ContextData } from "../../context/ContextData"

function Main() {
    const { setAddCustomerIsActive } = useContext(ContextData)

    function addCustomer () {
        setAddCustomerIsActive(true)
    }

    return (
        <div className="main">
            <div className="main-header">
                <div className="main-header-title">
                    <FaceRetouchingNaturalOutlinedIcon fontSize="large" />
                    <span>Customers</span>
                </div>
                <Tooltip arrow title="Add new customer" color="success" placement="top" variant='outlined'>
                    <Button onClick={addCustomer} size="md" color="success" variant="solid" startDecorator={<AddOutlinedIcon fontSize="small" />}>Add</Button>
                </Tooltip>
            </div>
            <MainTable />
            <Pagination className="main-pagination" count={10} color="primary" />
        </div>
    )
}

export default Main;
