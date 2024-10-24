import { HiUserGroup, HiBriefcase } from 'react-icons/hi';

const UserTypeSelection = () => {
  return (
    <div className="bg-gray-100 py-12 m-10 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 p-6 max-w-5xl mx-auto relative">
        {/* Card pour les particuliers - décalée vers le bas */}
        <div className="flex-1 p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:translate-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-xl bg-teal-600">
              {/* Remplacer par HiUserGroup de react-icons */}
              <div className="w-8 h-8">
                <HiUserGroup className="w-full h-full" />
              </div>
            </div>
            <h2 className="text-xl font-bold border-b-4 border-teal-600">Pour les particuliers</h2>
          </div>
          <h3 className="text-gray-600 font-medium mb-4">
            Partagez Gratuitement Vos Réalisations et Vendez les Autres
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            Vous avez réalisé une annonce impressionnante ? Sur Annoncepoint, 
            vous pouvez gratuitement partager vos photos et vidéos, inspirer la 
            communauté et vendre vos réussites personnelles. Que ce soit une 
            annonce en musique, une petite recette, ou autre chose, chaque 
            réalisation mérite d'être partagée.
          </p>
        </div>

        {/* Card pour les professionnels - décalée vers le haut */}
        <div className="flex-1 p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:-translate-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-xl bg-orange-500">
              {/* Remplacer par HiBriefcase de react-icons */}
              <div className="w-8 h-8">
                <HiBriefcase className=" text-black w-full h-full" />
              </div>
            </div>
            <h2 className="text-xl font-bold border-b-4 border-orange-500">Pour les professionnels</h2>
          </div>
          <h3 className="text-gray-600 font-medium mb-4">
            Vendez Votre Expertise et Attirez de Nouveaux Clients
            <br />
            Tout Cela Gratuitement
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            Vous êtes un artisan, un médecin ou un professionnel dans un autre 
            domaine ? Annoncepoint vous permet de publier gratuitement vos 
            annonces, offrant une vitrine idéale pour attirer de nouveaux clients 
            tout en montrant votre savoir-faire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;