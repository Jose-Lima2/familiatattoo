// import images
import Logo from '../src/img/header/logo.png';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoWhatsapp, IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '#', name: 'Inicio' },
    { href: '#sobre', name: 'Sobre' },
    { href: '#galeria', name: 'Galeria' },
    { href: '#entrevista', name: 'Entrevista' },
    { href: '#contato', name: 'Contato' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoWhatsapp /> },
];

export const heroData = {
  title: 'Familia Tattoo.',
  subtitle:
    'As tatuagens carregam uma força mágica única, capazes de transformar não só a aparência, mas também a alma.',
  btnText: 'Veja mais',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Minha História:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Sabia mais',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'minha galeria:',
  btnText: 'Ver tudo',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Considere o que você deseja. Seu tatuador nunca lhe dirá qual tatuagem fazer.”',
  btnText: 'assista agora',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Pedro',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Entre em contato:',
  info: [
    {
      title: 'Local 1',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Ver Localização',
    },
    {
      title: 'Local 2',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Ver Localização',
    },
  ],
  form: {
    name: 'Escreva seu nome aqui',
    email: 'Escreva seu endereço de e-mail',
    message: 'Escreva sua mensagem aqui',
    btnText: 'Envie',
  },
};

export const footerData = {
  about: {
    title: 'Sobre Familia Tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Links úteis',
    items: [
      { href: '#sobre', name: 'Sobre mim' },
      { href: '#galeria', name: 'Minha Galeria' },
      { href: '#habilidades', name: 'Minhas Habilidades' },
      { href: '#contato', name: 'Fale comigo' },
    ],
  },
  program: {
    title: 'Aberto',
    items: [
      { name: 'Segunda - Terça / Appointment' },
      { name: 'Quarta - Quinta / 10:00 - 9:00pm' },
      { name: 'Sexta / 10:00 - 6:00pm' },
      { name: 'Sabado / não há trabalho neste dia' },
    ],
  },
  newsletter: {
    title: 'Informações',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Seu endereço de email',
      icon: <FiSend />,
    },
  },
};
