import LandingPage from "../sections/landingSection"
import AboutPage from "../sections/aboutSection"
import styles from "../styles"
import BedroomSection from "../sections/bedroomSection"
import KitchenSection from "../sections/kitchenSection"
import OutdoorSection from "../sections/outdoorSection"
import Map from "../components/Map"

const Page: React.FC = () => (
  <>
    <div className={`bg-primary-yellow overflow-hidden xl:${styles.height3113} md:${styles.height844}`}>
      <div className={"coverPage"}>
        <LandingPage />
      </div>
      <AboutPage />
      <BedroomSection />
    </div>
    <div className={`bg-secondary-white overflow-hidden ${styles.height3256}`}>
      <KitchenSection />
    </div>
    <div className={`bg-primary-yellow overflow-hidden ${styles.height4148}`}>
      <OutdoorSection />
      <Map />
    </div>
  </>
)

export default Page
