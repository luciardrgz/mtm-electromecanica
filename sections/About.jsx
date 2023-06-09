'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-01 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="¡Gusto en conocerte!" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-3 font-medium text-base text-center text-black"
      >
        Somos MTM electricistas. Nuestro objetivo es garantizar la{' '}
        <span className="font-extrabold text-secondary-red">
          calidad del servicio{' '}
        </span>{' '}
        que ofrecemos a todos nuestros clientes. Para ello, contamos con una amplia experiencia adquirida en{' '}
        <span className="font-extrabold text-secondary-red">
          industrias multinacionales y nacionales
        </span>
        , así como la elección de{' '}
        <span className="font-extrabold text-secondary-red">
          materiales de alta calidad
        </span>
        . Gracias a ambos factores, podemos garantizar la{' '}
        <span className="font-extrabold text-secondary-red">confiabilidad</span>{' '}
        de nuestros servicios y asegurarnos de{' '}
        <span className="font-extrabold text-secondary-red">
          satisfacer las expectativas
        </span>{' '}
        de nuestros clientes en todo momento.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
