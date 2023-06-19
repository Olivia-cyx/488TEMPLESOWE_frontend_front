import Navbar from "../components/Navbar";
import { LandingPage } from "../sections/landingPage";


const Page: React.FC = () => (
  <>
    <div className="bg-primary-yellow overflow-hidden">
      <Navbar />
    </div>
    <LandingPage />
  </>
);

export default Page;