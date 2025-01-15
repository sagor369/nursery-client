import { Star, StarIcon } from "lucide-react";
export const ratingRender = (rating: number) => {
    let ratings = [];
    for (let i = 1; i <= 5; i++) {
      ratings.push(
        i <= rating ? (
          <Star key={i} className="text-yellow-500 size-6" />
        ) : (
          <StarIcon key={i} className="text-gray-500 size-5" />
        )
      );
    }
    return ratings;
  };