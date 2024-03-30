import "../assets/header.css";
import headerImage from "../images/FineDining.png";

const Header = () => {
    return (
        <div id="header">
            <header>
                <div className="hero-section">
                    <section className="hero">
                        <h1 id="title">Little Lemon</h1>

                        <h2 id="sub-title">Chicago</h2>

                        <article className="hero-article">
                            <p className="hero-intro">
                                Welcome to Little Lemon, where every bite is a burst of sunshine! Nestled in the heart
                                of our vibrant community, our restaurant is a beacon of culinary creativity and warm
                                hospitality.
                            </p>

                            <p className="hero-intro">
                                Step into our cozy yet contemporary space, where the air is alive with the tantalizing
                                aromas of freshly prepared dishes. Our inviting ambiance, accented with touches of lemon
                                yellow, sets the stage for an unforgettable dining experience.
                            </p>
                        </article>

                        <div className="reserve">
                            <a href="/" role="button">Reserve A Table</a>
                        </div>
                    </section>
                    <section className="hero-image">
                        <img src={headerImage}
                            id="hero-image"
                            alt="Fine Dining"
                        />
                    </section>
                </div>
            </header>
        </div>
    );
};

export default Header;