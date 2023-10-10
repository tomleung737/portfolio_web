import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, link_icon}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.1, 0.75)}>
      <Tilt 
        options={{max:45, scale:1, speed: 450,}}
        className="bg-secondary p-5 rounded-2xl sm:w-[360px] w-full min-h-[460px]"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className=" black-gradient w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <img src={link_icon} alt="github" className="w-2/3 h-2/3 object-contain" />
            </div>
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-text text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p 
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} `}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>College Projects. </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-text text-[17px] max-w-3xl leading-[30px]"
        >
          Here are the projects I built or contributed to while studying at HKU. 
          Each project is briefly described in the text, 
          and the tags are the tech stack used in the project.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects", 0.2)