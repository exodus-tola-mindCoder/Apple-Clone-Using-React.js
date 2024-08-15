import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import Header from "./Header/Header"
import Alert from './Alert/Alert'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'
import ThirdSection from './ThirdSection/ThirdSection'
import FourthSection from './FourthSection/FourthSection'
// import FifthSection from './FifthSection/FifthSection'
import FivethSection from './FivethSection/FivethSection'
import SixthSection from './SixthSection.jsx/SixthSection'
import Footer from './Footer/Footer'


function App() {
  return (
    <div>
      <Header />
      <Alert />
      <FirstSection />  
      <SecondSection />  
      <ThirdSection />
      <FourthSection />
      <FivethSection />
      <SixthSection />
      <Footer />
    </div>
  )
}

export default App
