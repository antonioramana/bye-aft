import flower1 from "../assets/flower2.png";
import flower2 from "../assets/flower.png";

const AnnouncementComponent = () => {
  return (
    <>
<div className="relative mx-20 mt-20 bg-white p-6 rounded-lg">
      {/* Images aux coins */}
      <img 
        src={flower1} 
        alt="Flower 1" 
        className="absolute top-0 left-0 h-24 w-24"
      />
      <img 
        src={flower2} 
        alt="Flower 2" 
        className="absolute bottom-0 right-0 h-24 w-24"
      />
      
      {/* Texte centré */}
      <div className="mx-20 text-center mb-4">
        <p className="mt-2 flex align-center">
        Rejoignez la première plateforme gratuite dédiée aux annonces.
          Particuliers et professionnels se rassemblent pour partager, inspirer et découvrir des annonces remarquables dans divers domaines.
        </p>
      </div>

        {/* Section bleue en bas */}
        <div className="bg-secondary m-10 rounded-lg p-10 flex items-center justify-center">
  <span className="font-semibold mr-2">C'est le moment de publier</span>
  <button className="bg-primary text-white rounded-full py-2 pl-6 pr-5 hover:bg-opacity-80 transition duration-300">
    Ajouter une annonce
  </button>
</div>     
    </div>
    {/* Paragraphe centré */}
<div className="text-center mb-6">
  <h1 className="text-2xl font-bold mb-2 text-gray-800">Qu’est-ce que Annoncepoint ?</h1>
  <h2 className="text-xl font-semibold mb-4 text-gray-800">Un Réseau Gratuit pour Voir et Partager des Annonces.</h2>
  <p className="text-gray-700 mx-auto max-w-2xl">
    <strong className="font-semibold">Annoncepoint</strong> est le premier réseau communautaire entièrement gratuit qui vous permet de découvrir et de partager des annonces. Que vous soyez un particulier montrant vos annonces personnels ou un professionnel affichant votre expertise, notre plateforme est l'endroit idéal pour vous connecter et inspirer.
  </p>
</div>

    </>
  );
};

export default AnnouncementComponent;
