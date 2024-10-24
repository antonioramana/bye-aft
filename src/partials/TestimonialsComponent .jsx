import QuoteCardComponent from "../components/quoteCardComponent";

const TestimonialsComponent = () => {
  return (
    <div className="text-center p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Titre */}
      <h2 className="text-Zxl font-bold text-gray-900 mb-2">
        Témoignages
      </h2>

      {/* Sous-titre */}
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Ce Que Nos Membres Disent de Annoncepoint
      </h3>

      {/* Conteneur des témoignages */}
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Premier témoignage */}
        <QuoteCardComponent
          url_image="https://example.com/image1.jpg"
          title="Superbe Expérience!"
          description="La meilleure plateforme d'annonces."
          rating={5}
          content="Annoncepoint m'a permis de vendre mes services très rapidement. Le réseau est très actif et j'ai reçu de nombreuses réponses."
        />

        {/* Deuxième témoignage */}
        <QuoteCardComponent
          url_image="https://example.com/image2.jpg"
          title="Très satisfait!"
          description="Une expérience inoubliable."
          rating={4}
          content="Grâce à Annoncepoint, j'ai trouvé des professionnels de confiance pour mes projets personnels. Je recommande à 100%."
        />
      </div>
    </div>
  );
};

export default TestimonialsComponent;
