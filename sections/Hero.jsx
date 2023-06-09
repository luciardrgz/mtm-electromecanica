'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import Slider from '../components/Slider';
import { staggerContainer, textVariant } from '../utils/motion';
import { industrial } from '../utils/constants';

const Hero = () => (
  <section className={`${styles.paddings} relative h-45 mt-20`} id="home">
    <Slider slides={industrial} sliderHeight="h-[500px]" controlsColor="black" section="hero" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex md:flex-row flex-col sm:py-2 py-6 m-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex justify-center items-center flex-col relative">
        <motion.h1 variants={textVariant(0.1)} className={styles.heroHeading}>
          Soluciones eléctricas <br /> para tu negocio o industria.
        </motion.h1>
      </div>
    </motion.div>
  </section>
);

export default Hero;
