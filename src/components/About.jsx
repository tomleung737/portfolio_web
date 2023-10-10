import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt 
      options={{max: 45, scale: 1, speed: 450,}}
      className='xs:w-[250px] xxs:w-[45%] w-full'
    >
      <motion.div
        variants={fadeIn("right", "spring", index*0.1, 0.75)}
        className='w-full primary-secondary-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className="bg-background rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="tech" className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview. </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-text text-[17px] max-w-3xl leading-[30px]'
        >
          I am a recent graduate from HKU, where I completed my master degree in 
          Computer Science. I have a strong interest in web development and have 
          acquired skills in various modern technologies such as ReactJS and NextJS.
          I am passionate about creating dynamic and user-friendly web solutions that
          solve real-world problems. I am constantly seeking to learn and grow in
          this ever-evolving field. 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap xs:gap-10 gap-7'>
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about", 0.1);