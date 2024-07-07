import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import "./header.css"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="no logo" src="/logo.jpg" />
                <span className="logo-title">Alif</span>
            </div>
            <Dropdown>
                    <MenuButton className="account" variant="plain">
                        <img className="account-img" alt="no logo" src="avatar.jpg" />
                        <SettingsOutlinedIcon />
                    </MenuButton>
                <Menu>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Dropdown>
        </div>
    )
}

export default Header;