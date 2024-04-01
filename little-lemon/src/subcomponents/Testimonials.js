import "../assets/testimonials.css";
import ReviewCard from "./ReviewsCards";

const Testimonials = () => {
    return (
        <div className="testimonial-section">
            <section>
                <h2 className="testimonial-title">Testimonials</h2>

                <h3 className="sub-testimonial">See Our Customer Reviews</h3>

                <div className="review">
                    <ReviewCard />
                </div>
            </section>
        </div>
    );
};

export default Testimonials;