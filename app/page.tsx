import LandingPage from "../sections/landingSection"
import AboutPage from "../sections/aboutSection"
import styles from "../styles"
import BedroomSection from "../sections/bedroomSection"
import KitchenSection from "../sections/kitchenSection"
import OutdoorSection from "../sections/outdoorSection"
import Map from "../components/Map"

const Page: React.FC = () => (
  <>
    <div className="bg-primary-yellow overflow-hidden">
      <div className={"coverPage"}>
        <LandingPage />
      </div>
      <AboutPage />
      <BedroomSection />
    </div>
    <div className="bg-secondary-white overflow-hidden ">
      <KitchenSection />
    </div>
    <div className="bg-primary-yellow overflow-hidden">
      <OutdoorSection />
      <Map />
    </div>
  </>
)

export default Page
