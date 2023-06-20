import Navbar from "../components/Navbar";
import LandingPage from "../sections/landingPage";
import AboutPage from "../sections/aboutPage";
import styles from "../styles";


const Page: React.FC = () => (
  <>
    <div className="bg-primary-yellow overflow-hidden">
      <div className={`coverPage  ${styles.height1000} relative z-10`}>
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>
        <LandingPage />
         </div>
      </div>
 
    <div className={`bg-primary-yellow overflow-hidden ${styles.height3113}`}>
      <AboutPage />
    </div>
    
  </>
);

export default Page;