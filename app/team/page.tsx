"use client"
import { motion } from "framer-motion"

const TeamPage: React.FC = () => (
  <div className="bg-primary-yellow overflow-hidden">
    <motion.div className="teamcoverPage flex justify-center items-center flex-col h-full gap-10 sm:px-12 sm:py-28 px-6 py-20">
      <img src="/Logo/488 team.png" alt="logo" className="xl:w-[250px] md:w-[240px] w-[180px]  object-center" />

      <div className="flex items-center max-w-[669px]">
        <p className="text-secondary-white sm:text-lg text-xs">
          We believe the creation of homes should be a process of appreciating and empowering a wide variety of lifestyles. Our beautiful architectural designs
          must encapsulate distinct quality and originality and be both functional and low maintenance with understated elegance. Above all, we strive to instil
          a strong sense of connection and pride in our future homes.
          <br />
          <br /> Gaining experience in Australia's property industry has cemented our ambition to provide flawlessly designed and executed boutique homes and
          apartments.
          <br />
          <br /> Rising Holdings has initiated several multi-million dollar projects with more exciting ones in the pipeline. Despite our growth, we still
          believe that only the residents can be the true judges of the ultimate success of a home. After all, our buildings are meticulously made to match you
          and your lifestyle.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src="/Lifestyle/rising-final.png" alt="logo" className="w-[100px]" />
      </div>
    </motion.div>
  </div>
)

export default TeamPage
