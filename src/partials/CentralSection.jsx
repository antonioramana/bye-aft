import img1 from '../assets/img1.JPG';
import img2 from '../assets/img2.JPG';
import img3 from '../assets/img3.JPG';

const CentralSection = () => {
  return (
    <div className="relative w-full h-screen bg-white p-10 flex justify-center items-center">
      
      {/* Grid of images */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
        {/* Row 1 */}
        <div className="flex justify-center items-center">
          <img src={img1} alt="Annonce 1" className="w-32 h-32 rounded-lg object-cover" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img2} alt="Annonce 2" className="w-32 h-32 rounded-lg object-cover" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img3} alt="Annonce 3" className="w-32 h-32 rounded-lg object-cover" />
        </div>
        
        {/* Row 2 */}
        <div className="flex justify-center items-center">
          <img src={img1} alt="Annonce 4" className="w-32 h-32 rounded-lg object-cover" />
        </div>
        {/* Central Text Section */}
        <div className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Le premier réseau communautaire gratuit de annonces</h2>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md mt-4">
            Publier mes annonces
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={img2} alt="Annonce 5" className="w-32 h-32 rounded-lg object-cover" />
        </div>
        
        {/* Row 3 */}
        <div className="flex justify-center items-center">
          <img src={img3} alt="Annonce 6" className="w-32 h-32 rounded-lg object-cover" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img1} alt="Annonce 7" className="w-32 h-32 rounded-lg object-cover" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img2} alt="Annonce 8" className="w-32 h-32 rounded-lg object-cover" />
        </div>
      </div>
      
    </div>
  );
};

export default CentralSection;
