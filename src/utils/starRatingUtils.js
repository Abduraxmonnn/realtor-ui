export const StarRating = ({rating}) => {
    const ratingNumber = Number(rating);

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((index) => {
                const fillPercentage = Math.min(100, Math.max(0, (ratingNumber - (index - 1)) * 100));

                return (
                    <div key={index} className="star-container">
                        <svg className="star" viewBox="0 0 20 20">
                            <path
                                className="star-bg"
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            <path
                                className="star-fill"
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                style={{
                                    clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`
                                }}
                            />
                        </svg>
                    </div>
                );
            })}
        </div>
    );
};
