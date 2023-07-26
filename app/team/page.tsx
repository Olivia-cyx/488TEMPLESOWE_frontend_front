"use client"
import { motion } from "framer-motion"

const TeamPage: React.FC = () => (
  <div className="bg-primary-yellow overflow-hidden h-screen">
    <motion.div className="teamcoverPage flex justify-center items-center flex-col h-full">
      <div className="pb-70 mt-10">
        <img src="/Logo/488 team.png" alt="logo" className="w-[196px] h-[251px] object-center mb-auto" />
      </div>

      <div className="flex items-center w-[669px] h-[468px] pt-10 ">
        <p style={{ color: "#DCD5C6", fontSize: "20px" }}>
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
      <div className="flex justify-center items-center w-[669px] h-[468px] pb-10 pl-20 ml-20">
        <img src="/Lifestyle/rising-final-225x90w (1).png" alt="logo" className="w-[363px] h-[126px] object-center" />
      </div>
    </motion.div>
  </div>
)

export default TeamPage
