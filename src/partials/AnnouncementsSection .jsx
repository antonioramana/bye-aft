import { FaDumbbell, FaTshirt, FaHome, FaCar, FaDog, FaSpa, FaTree, FaHeartbeat } from 'react-icons/fa';

const AnnouncementsSection = () => {
  return (
    <div className='mx-20'>

<div className="grid mx-20 grid-cols-3 justify-items-center items-center ">
    {/* First Row: Empty - Décoration - Empty */}
    <div></div>
    <div className="flex flex-col items-center text-white ">
      <FaTree className="text-3xl mb-2  bg-orange-400 rounded-lg p-2" />
      <h4 className="font-bold text-black text-xm">Décoration</h4>
      <p className="text-black text-xs">Transformez votre espace</p>
    </div>
    <div></div>

    {/* Second Row: Fitness - Empty - Mode */}
    <div className="flex flex-col items-center  text-white rounded-lg p-4 ml-4"> {/* Added ml-4 */}
      <FaDumbbell className="text-3xl mb-2 bg-teal-500 rounded-lg p-2" />
      <h4 className="font-bold text-black text-md">Fitness</h4>
      <p className="text-xs text-black">Chaque effort compte</p>
    </div>
    <div></div>
    <div className="flex flex-col items-center p-4 ml-4"> {/* Added ml-4 */}
      <FaTshirt className="text-3xl mb-2 bg-teal-500 p-2 text-white rounded-lg" />
      <h4 className="font-bold text-black text-md">Mode</h4>
      <p className="text-xs text-black">Votre style, votre évolution</p>
    </div>

    {/* Third Row: Cosmétiques - Central Text - Lifestyle */}
    <div className="flex flex-col items-center text-white ">
      <FaSpa className="text-3xl mb-2 bg-orange-400 rounded-lg p-2" />
      <h4 className="font-bold text-black text-md">Cosmétiques</h4>
      <p className="text-black text-xs">Redécouvrez votre beauté</p>
    </div>
    {/* Central Text */}
    <div className="text-center">
      <h2 className="text-xl font-bold">Explorez les annonces</h2> {/* Reduced text size */}
      <p className="text-sm text-gray-600 mt-2">Une Source d'Inspiration Gratuite à Chaque Clic</p>
      <p className="text-xs text-gray-500 mt-4 max-w-xs">
        Parcourez des centaines d’annonces sur la première plateforme communautaire gratuite dédiée aux annonces.
        Que vous recherchiez des idées, partagiez vos annonces ou simplement admiriez les résultats des autres,
        notre galerie est là pour vous inspirer.
      </p>
    </div>
    <div className="flex flex-col items-center">
      <FaHeartbeat className="text-3xl mb-2  text-white bg-orange-400 rounded-lg p-2" />
      <h4 className="font-bold text-md text-black">Lifestyle & bien-être</h4>
      <p className="text-xs text-black">Transformez votre quotidien</p>
    </div>

    {/* Fourth Row: Animaux - Empty - Immobilier */}
    <div className="flex flex-col items-center text-white "> {/* Added ml-4 */}
      <FaDog className="text-3xl mb-2 bg-teal-500 rounded-lg p-2" />
      <h4 className="font-bold  text-black text-md">Animaux de compagnie</h4>
      <p className="text-xs text-black">Le bien-être de vos compagnons</p>
    </div>
    <div></div>
    <div className="flex flex-col items-center ml-4"> {/* Added ml-4 */}
      <FaHome className="text-3xl mb-2 bg-teal-500  text-white rounded-lg p-2" />
      <h4 className="font-semibold text-xs">Immobilier</h4>
      <p className="text-xs">Transformez vos espaces de vie</p>
    </div>

    {/* Fifth Row: Empty - Automobile - Empty */}
    <div></div>
    <div className="flex flex-col items-center">
      <FaCar className="text-3xl mb-2  bg-orange-400 text-white rounded-lg p-2" />
      <h4 className="font-bold text-md">Automobile</h4>
      <p className="text-xs">Redonner vie à votre véhicule</p>
    </div>
    <div></div>
  </div>
  </div>
  );
};

export default AnnouncementsSection;
