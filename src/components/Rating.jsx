import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../styles/products.css";

const Rating = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaRegStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <section className="rating">
      <div>{ratingStar}</div>
      {reviews && <span>({reviews})</span>}
    </section>
  );
};
export default Rating;
