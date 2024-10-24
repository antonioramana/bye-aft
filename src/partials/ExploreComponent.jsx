import RatingComponent from "../components/ratingComponent";

const ExploreComponent = () => {
  const ratings = [
    {
      url_image: "https://example.com/image1.jpg",
      title: "Annonce 1",
      description: "Description de l'annonce 1.",
      rating: 4,
    },
    {
      url_image: "https://example.com/image2.jpg",
      title: "Annonce 2",
      description: "Description de l'annonce 2.",
      rating: 5,
    },
    {
      url_image: "https://example.com/image3.jpg",
      title: "Annonce 3",
      description: "Description de l'annonce 3.",
      rating: 3,
    },
    {
      url_image: "https://example.com/image4.jpg",
      title: "Annonce 4",
      description: "Description de l'annonce 4.",
      rating: 4,
    },
    {
      url_image: "https://example.com/image5.jpg",
      title: "Annonce 5",
      description: "Description de l'annonce 5.",
      rating: 2,
    },
    {
      url_image: "https://example.com/image6.jpg",
      title: "Annonce 6",
      description: "Description de l'annonce 6.",
      rating: 5,
    },
    {
      url_image: "https://example.com/image7.jpg",
      title: "Annonce 7",
      description: "Description de l'annonce 7.",
      rating: 3,
    },
  ];

  return (
    <div className="text-center p-6 mx-20">
      {/* Titre */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Explorez les talents qui transforment
      </h2>
      {/* Texte en bas */}
      <p className="text-gray-700 m-6 text-lg max-w-2xl mx-auto">
        Des coachs de vie aux cliniques esthétiques, en passant par les artisans
        de la rénovation, découvrez les talents qui transforment vos annonces en
        réalité.
      </p>
       {/* Grid des ratings */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ratings.map((item, index) => (
          <RatingComponent
            key={index}
            url_image={item.url_image}
            title={item.title}
            description={item.description}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreComponent;
