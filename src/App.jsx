import Header from './components/Header'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import WhyChooseUs from './components/WhyChooseUs'
import OurBospokeWebSite from './components/OurBospokeWebSite'
import OverviewOfServices from './components/OverviewOfServices'
import Companies from './components/Companies'
import OurWork from './components/OurWork'
import ClientReview from './components/ClientReview'
import LatestInsights from './components/LatestInsights'
import FormSection from './components/FormSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Section2/>
      <Section3/>
      {/* <WhyChooseUs/> */}
      <OurBospokeWebSite/>
      <OverviewOfServices/>
      <Companies/>
      <OurWork/>
      <ClientReview/>
      <LatestInsights/>
      <FormSection/>
      <Footer/>
    </>
  )
}

export default App
