import footerLogo from "../logo/lemonIcon.png";
import "../assets/footer.css";

const Footer = () => {
    return (
        <footer>
            <img
                src={footerLogo}
                alt="Lemon Icon"
                height="125"
            />

            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Newsletter</li>
            </ul>

            <ul>
                <li>Store Hours</li>
                <li></li>
            </ul>
        </footer>
    );
};

export default Footer;