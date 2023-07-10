import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "Bolaji Samuel O.",
      rating: 5.0,
      date: "3 weeks ago",
      comment: "Nice intro to Python",
    },
    {
      name: "Shubham K.",
      rating: 4.5,
      date: "2 months ago",
      comment: "Nice",
    },
    {
      name: "Shuhrat Q.",
      rating: 4.5,
      date: "11 months ago",
      comment: "Not full",
    },
    {
      name: "Shrikadhir S.",
      rating: 5.0,
      date: "3 weeks ago",
      comment: "It was a good experience",
    },
    {
      name: "Akhil",
      rating: 5.0,
      date: "9 months ago",
      comment:
        "Classes are good, but I need the certificate of completion of my work",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <i
          key={i + fullStars}
          className="fas fa-star-half-alt text-yellow-500"
        ></i>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i
          key={i + fullStars + halfStars}
          className="far fa-star text-yellow-500"
        ></i>
      );
    }

    return stars;
  };

  const calculateRatingOverview = () => {
    const totalReviews = reviews.length;
    const averageRating =
      reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

    const ratingOverview = {
      totalReviews,
      averageRating: averageRating.toFixed(1),
      ratings: {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
      },
    };

    reviews.forEach((review) => {
      const rating = Math.floor(review.rating);
      ratingOverview.ratings[rating]++;
    });

    return ratingOverview;
  };

  const ratingOverview = calculateRatingOverview();

  return (
    <div className="bg-white p-6 text-black text-start md:ms-36 ms-0">
      <h2 className="text-xl font-bold">Student Feedback</h2>
      <p className="text-sm text-gray-500">
        Rating: {ratingOverview.averageRating} out of 5
      </p>
      <p className="text-sm text-gray-500 mb-4">Course Rating Reviews</p>

      <div className="mb-6">
        <p className="font-bold">Rating Overview</p>
        <ul className="list-none mt-2">
          {Object.entries(ratingOverview.ratings).map(([rating, count]) => (
            <li key={rating} className="flex items-center">
              <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>
              <span className="text-sm text-gray-500">
                {rating} star: {count} review{count !== 1 && "s"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="mb-6">
          <p className="font-bold">{review.name}</p>
          <div className="flex items-center">
            <div className="mr-2">{renderStars(review.rating)}</div>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
          <p className="mt-2">{review.comment}</p>
          <p className="text-sm text-blue-500 underline mt-2">
            Was this review helpful?
          </p>
        </div>
      ))}
    </div>
  );
};

export default Review;
