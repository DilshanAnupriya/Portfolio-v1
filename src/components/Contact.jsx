import React from 'react'
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn,textVariant } from "../utils/motion";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
              <h2 className={styles.sectionHeadText}>Contact Me</h2>
      </motion.dev>

      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='src/assets/terminal.png' alt='terminal'/>
      </div>


    </>
  )
}

export default SectionWrapper(Contact,"");