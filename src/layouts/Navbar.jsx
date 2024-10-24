import { FiSearch, FiUser } from 'react-icons/fi';
import appLogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center space-x-4">
        
        {/* Logo */}
        <div className="flex-shrink-0 mr-10">
          <img src={appLogo} alt="Logo" className="h-10" />
        </div>

              {/* Bouton Publier */}
              <button className="bg-primary text-white px-4 py-2 rounded-xl">
                Publier une annonce
              </button>

              {/* Barre de Recherche */}
              <div className="flex-grow">
              <div className="relative w-full max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Rechercher des annonces" 
          className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-xl focus:outline-none text-black placeholder-black focus:ring-2 focus:ring-primary" // Added placeholder-black
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-xl text-white">
          <FiSearch className="h-5 w-5" />
        </button>
      </div>

        </div>

        {/* Icône Utilisateur */}
        <button className="bg-gray-200 p-2 rounded-xl text-black">
          <FiUser className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
