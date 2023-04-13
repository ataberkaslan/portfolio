import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  image,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='cursor-pointer bg-tertiary p-2 rounded-2xl w-[150px] h-[150px] flex'
        
      >
        <div onClick = {()=>{
          window.open(link, "_blank");
        }}
          className="w-full h-full flex flex-col items-center"
        >
          <div className='relative w-[90px] h-[90px]'>
            <img
              src={image}
              className='w-full h-full object-cover rounded-2xl'
            />

          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Socials.</h2>
      </motion.div>

    

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {socials.map((social, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...social} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
