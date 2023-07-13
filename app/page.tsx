import LandingPage from "../sections/landingSection"
import AboutPage from "../sections/aboutSection"
import styles from "../styles"
import BedroomSection from "../sections/bedroomSection"

const Page: React.FC = () => (
  <>
    <div className={`bg-primary-yellow overflow-hidden ${styles.height3113}`}>
      <div className={`coverPage  ${styles.height1000} relative z-10`}>
        <LandingPage />
      </div>
      <AboutPage />
      <BedroomSection />
    </div>
  </>
)

export default Page
