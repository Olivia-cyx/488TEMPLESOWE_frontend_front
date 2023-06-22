import Navbar from "../components/Navbar"
import LandingPage from "../sections/landingSection"
import AboutPage from "../sections/aboutSection"
import styles from "../styles"
import BedroomSection from "../sections/bedroomSection"
import KitchenSection from "../sections/kitchenSection"

const Page: React.FC = () => (
  <>
    <div className="bg-primary-yellow overflow-hidden">
      <div className={`coverPage  ${styles.height1000} relative z-10`}>
        <div className="fixed top-0 z-50 w-full z-40">
          <Navbar />
        </div>
        <LandingPage />
      </div>
    </div>

    <div className={`bg-primary-yellow overflow-hidden ${styles.height3113}`}>
      <AboutPage />
      <BedroomSection />
    </div>
    <div className={`bg-secondary-white overflow-hidden ${styles.height3256}`}>
      <KitchenSection />
    </div>
  </>
)

export default Page
