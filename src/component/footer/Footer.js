import "./footer.css"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

function Footer() {
    return (
        <div className="footer">
            <span className="footer-title">Ахмад Асоев</span>
            <div className="telegram">
                <EmailOutlinedIcon />
                <a href="https://t.me/asoevahmad">@asoevahmad</a>
            </div>
        </div>
    )
}

export default Footer;
