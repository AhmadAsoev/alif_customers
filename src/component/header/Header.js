import "./header.css"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="no logo" src="/logo.jpg" />
                <span className="logo-title">Customers</span>
            </div>
            <div className="account">
                <img className="account-img" alt="no logo" src="avatar.jpg" />
                <SettingsOutlinedIcon />
            </div>
        </div>
    )
}

export default Header;