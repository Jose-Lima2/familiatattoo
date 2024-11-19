import React from 'react';
//import sobre data
import {aboutData} from '../data';
//import  motion
import {motion} from 'framer-motion';
// import variantes
import {fadeIn} from '../variants';

const About = () => {
  // estrutura sobre
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section id='sobre' className='lg:py-16 xl:pb-[160px]' >
      <div className='container mx-auto' >
        <di className='flex flex-col lg:flex-row gap-x-[70px] items-center' >
          {/*numero*/}
          <motion.div 
          variants={fadeIn('right')}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex flex-col lg:flex-row flex-1' >
            <div className='text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em]
            bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>
              01
            </div>
          </motion.div>
          {/*texto*/}
          <motion.div 
          variants={fadeIn('left')}
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex-1 h-full xl:mt-48'>
            <h2 className='h2' >{title}</h2>
            <div className='flex flex-col items-end' >
              <div className='max-w-[530px] text-grey' >
                <p className='mb-6 ' >{subtitle1}</p>
                <p className='mb-9 ' >{subtitle2}</p>
                <button className='btn btn-lg btn-link' >
                  {btnText} <div className='text-xl' >{btnIcon}</div>
                </button>
              </div>
            </div>
          </motion.div>
        </di>
      </div>
    </section>
  );
};
export default About;
