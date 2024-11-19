import React, {useState} from 'react';
//importar galeria
import { galleryData } from '../data';
//importar foto do album e lightbox
import { PhotoAlbum} from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
//importar css light
import 'yet-another-react-lightbox/styles.css';
//importar animação
import { motion } from 'framer-motion';
//importar fadein
import { fadeIn } from '../variants';

//slides
const slides = galleryData.images.map(({original, width, height})=> ({
  src: original,
  width,
  height,
}))
const GallerySection = () => {
  //index status
  const [index, setIndex] = useState(-1);
  //estrutura galeria 
  const { title, btnText, btnIcon, images } = galleryData;

  return (
    <section id='galeria' className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'>
      <div className='container mx-auto'>
        <motion.h2 
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.6 }}
          className='h2 max-w-[370px] lb:mb-20' >
            {title}
        </motion.h2>
      </div>
      {/*album de foto*/}
      <motion.div 
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2 }}
        className='mb-8 lg:mb-20' >
        <PhotoAlbum 
          onClick={(event, photo, index)=> setIndex(index)} 
          layout='rows' 
          photos={images}
        />
        <Lightbox 
          slides={slides} 
          styles={{container:{backgroundColor: 'rgba(0,0,0,.9)' } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/*botao*/}
      <motion.div 
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2 }}
        className='flex justify-center' 
      >
      <a href="https://www.instagram.com/_familiatattoo?igsh=OW9zNTUwbzM4c3Bu" target='_blank' rel='noreferrer'>
        <button className='btn btn-lg btn-dark' >
          {btnText} <div className='text-xl' >{btnIcon}</div>
        </button>
      </a>
      </motion.div>
    </section>
  );
};

export default GallerySection;
