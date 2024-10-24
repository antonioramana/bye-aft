import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaRegCircle } from 'react-icons/fa';
import appLogo from "../assets/logo.png";
import app from "../assets/app.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        {/* Logo et Comment ça marche / Aide */}
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={appLogo} alt="Logo" className="h-12" />
          </div>

          {/* Comment ça marche & Aide */}
          <div className="flex space-x-16">
            <div>
              <h3 className="font-semibold mb-2">Comment ça marche?</h3>
              <ul>
                <li><a href="#" className="hover:underline">À propos de</a></li>
                <li><a href="#" className="hover:underline">Annoncepoint</a></li>
                <li><a href="#" className="hover:underline">Applications mobiles</a></li>
                <li><a href="#" className="hover:underline">Publicités</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Aide</h3>
              <ul>
                <li><a href="#" className="hover:underline">Centre d'aide</a></li>
                <li><a href="#" className="hover:underline">Partager</a></li>
                <li><a href="#" className="hover:underline">Confiance et sécurité</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Icons and Download buttons */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-4 mb-8">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <FaFacebookF className="text-gray-500 hover:text-gray-700" />
            <FaLinkedinIn className="text-gray-500 hover:text-gray-700" />
            <FaInstagram className="text-gray-500 hover:text-gray-700" />
          </div>

          {/* Download buttons */}
          {/* <div className="flex space-x-4"> */}
          <div className="">
            {/* <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Télécharger sur App Store</a>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Télécharger sur Play Store</a> */}
                      <img src={app} alt="App" className="h-20" />

          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 pt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:underline">Politique de cookies</a></li>
            <li><a href="#" className="hover:underline">Paramètres des cookies</a></li>
            <li><a href="#" className="hover:underline">Termes et Conditions</a></li>
            <li><a href="#" className="hover:underline">Notre plateforme</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
