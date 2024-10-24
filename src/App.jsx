import './App.css'
import CurvedLine from './components/curvedLine'
import QuoteCardComponent from './components/quoteCardComponent'
import RatingComponent from './components/ratingComponent'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import AnnouncementComponent from './partials/AnnouncementComponent'
import AnnouncementsSection from './partials/AnnouncementsSection '
import Caroussel from './partials/Caroussel'
import Categories from './partials/categories'
import CentralSection from './partials/CentralSection'
import ExploreComponent from './partials/ExploreComponent'
import JoinCommunityComponent from './partials/JoinCommunityComponent'
import TestimonialsComponent from './partials/TestimonialsComponent '
import UserTypeSelection from './partials/UserTypeSelection'

function App() {

  return (
    <>
        <Navbar />
        <Categories />
        <CentralSection />
        <CurvedLine />
        <AnnouncementComponent />
        <UserTypeSelection />
        <AnnouncementsSection />
        <Caroussel />
        <ExploreComponent />
        <JoinCommunityComponent />
        <TestimonialsComponent />
        <Footer />
        {/* <RatingComponent 
          url_image="https://example.com/image.jpg" 
          title="Titre de l'annonce" 
          description="Description de l'annonce." 
          rating={4} 
        />
        <QuoteCardComponent
            url_image="https://example.com/image.jpg" 
            title="Titre de l'annonce" 
            description="Description courte." 
            rating={4} 
            content="Ceci est une citation inspirante ou un texte important à afficher."
          /> */}
    </>
  )
}

export default App
