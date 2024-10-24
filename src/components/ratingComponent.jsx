import { FaStar } from "react-icons/fa";

const RatingComponent = ({ url_image, title, description, rating }) => {
  return (
    <div className="rounded-lg p-2 flex items-center">
      {/* Image à droite */}
      <img 
        src={url_image} 
        alt={title} 
        className="h-12 w-12 rounded-full border-2 border-orange-500 ml-2"
      />

      {/* Contenu à gauche */}
      <div className="ml-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>

        {/* Évaluation en étoiles */}
        <div className="flex mt-1">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={`h-4 w-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
