import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import flower1 from "../assets/img4.JPG";
import flower2 from "../assets/img4.JPG";
import flower3 from "../assets/img4.JPG";
import flower4 from "../assets/img4.JPG";
import flower5 from "../assets/img4.JPG";

const Caroussel = () => {
  const images = [flower1, flower2, flower3, flower4, flower5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative m-5 bg-white p-6 rounded-lg shadow-lg">
      {/* Titre */}
      <h2 className="text-center text-2xl font-bold my-6">
        Dernières annonces
      </h2>

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center">
        {/* Bouton Prev collé à la première image */}
        <button
          onClick={handlePrev}
          className="bg-orange-500 text-white p-3 rounded-full mr-2"
        >
          <FaArrowLeft />
        </button>

        {/* Images */}
        <div className="flex space-x-12">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="h-300 w-32 object-cover"
            />
          ))}
        </div>

        {/* Bouton Next collé à la dernière image */}
        <button
          onClick={handleNext}
          className="bg-orange-500 text-white p-3 rounded-full ml-2"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Caroussel;
