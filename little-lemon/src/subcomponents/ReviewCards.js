import "../assets/review.css";
import { ReviewData } from "./reviewData";

const ReviewCards = () => {
    return (
        <div className="review-container">
            {ReviewData.map((customerReview) => (
                <div className='customer-review' key={customerReview.reviewId}>
                    <div>
                        <img
                            src={customerReview.reviewPhoto}
                            alt={customerReview.reviewDetail}
                            id="review-photo"
                        />
                    </div>
                    <div className="review-description">
                        <p id="review-name">{customerReview.name}</p>
                        <p id="customer-review">{customerReview.review}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewCards;