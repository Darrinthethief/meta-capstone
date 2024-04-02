import chef1 from "../images/LittleLemonChef1.png";
import chef4 from "../images/LittleLemonChef4.png";
import "../assets/about.css";


const About = () => {
    return (
        <div className="about">
            <section>
                <h2 className="about-title">About Lemon</h2>

                <p className="about-intro">
                    Little Lemon: Where Flavor Meets Hospitality. Discover our cozy eatery in
                    offering signature dishes like our famous Garlic Pasta. Experience warmth
                    and exceptional service with every visit. Join us and taste the difference.
                </p>

                <p className="about-intro">
                    Join us on a culinary journey that celebrates the beauty of food and the joy
                    of shared experiences. Discover why Little Lemon is more than just a restaurant.
                </p>
            </section>
            <section className="image-section">
                <div className="about-image">
                    <img
                        src={chef1}
                        alt="Little Lemon Chef"
                        id="chef1"
                    />

                    <img
                        src={chef4}
                        alt="Little Lemon Chef"
                        id="chef4"
                    />
                </div>
            </section>
        </div>
    );
};

export default About;