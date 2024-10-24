const JoinCommunityComponent = () => {
    return (
      <div className="text-center p-8  mx-auto">
        {/* Titre */}
        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Rejoignez Notre Communauté! C'est gratuit!
        </h2>
  
        {/* Sous-titre */}
        <h3 className="text-md font-semibold text-gray-700 mb-4">
          Partagez, Connectez, et Célébrez Ensemble. C'est Gratuit
        </h3>
  
        {/* Paragraphe */}
        <div className="text-xm text-gray-600 mb-6">
        <p>
          Inscrivez-vous gratuitement aujourd'hui pour partager vos propres annonces, suivre et échanger avec une 
          </p> 
          <p> communauté passionnée.Annoncepoint est le premier réseau communautaire où chaque annonce compte, et
          </p>
          <p>
          c'est totalement gratuit.
          </p> 
        </div>
  
        {/* Bouton */}
        <button className="bg-white text-primary border-2 border-primary rounded-md py-3 px-8 font-semibold transition-colors duration-300 hover:bg-primary hover:text-white">
          Créer un compte gratuitement
        </button>
      </div>
    );
  };
  
  export default JoinCommunityComponent;
  