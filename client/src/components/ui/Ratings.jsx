import { Star } from "lucide-react";

const Ratings = ({ rating }) => {
    return (
        <div className="flex items-center gap-1 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={16}
                    fill={star <= rating ? "#ff8a00" : "none"}
                    stroke={star <= rating ? "#ff8a00" : "#d1d5db"}
                />
            ))}
        </div>
    );
};

export default Ratings;
