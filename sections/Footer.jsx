'use client';

import styles from '../styles';

const Footer = () => (

  <div className={`${styles.xPaddings} py-8 relative`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[1px] bg-black opacity-20" />
        <div className="flex items-center justify-center lg:justify-between md:justify-between flex-wrap gap-4">
          <h3 className="font-extrabold text-[24px] text-[#4d4d4d] text-center">
            MTM Soluciones Electromecánicas
          </h3>
          <a href="https://www.linkedin.com/in/luciardrgz/" title="LinkedIn del desarrollador" target="_blank" rel="noreferrer" className="font-normal text-[14px] text-[#c0c0c0]">
            luciardrgz | 2023
          </a>
        </div>
      </div>
    </div>
  </div>

);

export default Footer;
