import React, { useState, useEffect } from 'react';
//userview 
import { useInView } from 'react-intersection-observer';
//react circulo
import { CircularProgressbar } from 'react-circular-progressbar';
//react circulo stilos
import 'react-circular-progressbar/dist/styles.css';
//importar animação 
import { motion } from 'framer-motion';
//import fade in
import { fadeIn } from '../variants';

const Skills = () => {
  //estrutura userview 
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  //Preto e cinza
  const [fullBody, setFullBody] = useState(0);
  //Aquarela
  const [piercing, setPiercing] = useState(0);
  //Wood Skull
  const [fullcolor, setFullColor] = useState(0);
  //Rastelado
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 100) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 100) {
          setPiercing(piercing + 1);
        }
        if (fullcolor < 100) {
          setFullColor(fullcolor + 1);
        }
        if (piercing < 100) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView,fullBody, piercing, fullcolor,temporary]);

  // progresso circulo
  const styles = {
    path: {
      stroke: '#111111'
    },
    trail: {
      stroke: '#eeeeee'
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <motion.section 
      ref={ref} 
      className='section font-primary'
      variants={fadeIn('up')} 
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.1}}
      >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          {/*item circulo*/}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6' >
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />
            {/* texto*/}
            <div className='uppercase font-light tracking-[1.2p] text-center' >
              Preto e Cinza
            </div>
          </div>
          {/*item circulo*/}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6' >
            <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}
            />
            {/* texto*/}
            <div className='uppercase font-light tracking-[1.2p] text-center' >
              Realismo
            </div>
          </div>
          {/*item circulo*/}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6' >
            <CircularProgressbar
              strokeWidth={1}
              value={fullcolor}
              styles={styles}
              text={`${fullcolor}%`}
            />
            {/* texto*/}
            <div className='uppercase font-light tracking-[1.2p] text-center' >
              Old School
            </div>
          </div>
          {/*item circulo*/}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6' >
            <CircularProgressbar
              strokeWidth={1}
              value={temporary}
              styles={styles}
              text={`${temporary}%`}
            />
            {/* texto*/}
            <div className='uppercase font-light tracking-[1.2p] text-center' >
              Aquarela
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
