import Image from "next/image";

const Rating = ({ rating }) => {
  const ratingCount = Math.ceil(rating / 2);
  const stars = Array(ratingCount).fill();

  return (
    <>
      {stars.map((_, index) => (
        <Image key={index} src="/star.svg" width="14" height="14" alt="" />
      ))}
    </>
  );
};

export default Rating;
