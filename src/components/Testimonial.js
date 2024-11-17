import React from 'react';
// importar review
import { testimonialData } from '../data';
//importar swiper react componentes
import { Swiper, SwiperSlide } from 'swiper/react';
//importar swiper styles
import 'swiper/css';
//importar animação
import { motion } from 'framer-motion';
//importar fade in
import { fadeIn } from '../variants';

const Testimonial = () => {
  return (
    <motion.section  
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.2}}
      className='py-[40px] lg:pb-[160px] lg:pt-0' 
    >
      <div className="container mx-auto">
        <Swiper>
          {testimonialData.map((slide, index) => {
            //estrutura slide
            const { quoteImg, message, name, occupation } = slide;
            return (
              <SwiperSlide key={index} >
                <div className='max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                  {/*imagem*/}
                  <div className='w-[154px] h-[109px] mb-5' >
                    <img src={quoteImg} alt="" />
                  </div>
                  {/*mensagem, nome, ocupação*/}
                  <div className='flex-1 lg:mt-[54px]' >
                    {/*mensagem*/}
                    <div className='text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12' >
                      {message}
                    </div>
                    {/*nome e ocupação*/}
                    <div className='flex items-center text-xl lg:text-2xl font-primary' >
                      {/*nome*/}
                      <div className='font-semibold' >{name}</div>
                      <span className='mx-4' >|</span>
                      {/*ocupação*/}
                      <div className='font-light' >{occupation}</div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
