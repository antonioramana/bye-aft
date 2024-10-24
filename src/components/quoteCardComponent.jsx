import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa"; // Icône des guillemets

const QuoteCardComponent = ({ url_image, title, description, rating, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-start relative">
      {/* Image à gauche */}
      <img 
        src={url_image} 
        alt={title} 
        className="h-12 w-12 rounded-full border-2 border-orange-500 ml-2"
      />

      {/* Contenu à droite de l'image avec une marge */}
      <div className="ml-6 flex-grow">
        <h3 className="text-md font-semibold mt-1">{title}</h3> {/* Le titre juste après l'image avec une petite marge */}
        <p className="text-xs text-gray-600">{description}</p>

        {/* Évaluation en étoiles */}
        <div className="flex mt-1">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={`h-4 w-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
        </div>

        {/* Citation avec guillemets */}
        <p className="text-sm text-gray-700 mt-2 italic">
          {content}
        </p>
      </div>

      {/* Guillemets à droite */}
      <FaQuoteRight className="text-4xl text-gray-300 absolute top-2 right-2" />
    </div>
  );
};

export default QuoteCardComponent;
