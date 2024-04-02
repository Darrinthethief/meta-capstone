import footerLogo from "../logo/lemonIcon.png";
import "../assets/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <img
                    src={footerLogo}
                    alt="Lemon Icon"
                    id="footer-logo"
                    height="125px"
                />

                <div className="footer-contact">
                    <h4 className="footer-title">Lemon Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Reservations</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Log In</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-title">Contact</h4>
                    <ul>
                        <li>Address: <br/><span>955 Chicago, IL, USA</span></li>
                        <li>Phone: <br/><span>555 555 5555</span></li>
                        <li>Email: <br/><span>littelemon@gmail.com</span></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-title">Follow Us</h4>
                    <ul>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Twitter</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;