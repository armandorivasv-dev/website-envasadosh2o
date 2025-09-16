'use client';
import { Box, useMediaQuery, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { keyframes, styled } from '@mui/system';

// Animaciones
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(170px); }
  to { opacity: 1; transform: translateX(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
`;

// Componentes estilizados
const AnimatedBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'animation',
})(({ isActive, animation }) => ({
  opacity: isActive ? 1 : 0,
  transition: 'opacity 0.5s ease-in-out',
  animation: isActive ? `${animation} 0.8s ease-out forwards` : 'none',
  position: 'absolute',
  width: '100%',
  height: '100%',
}));

const CARRUSEL_IMAGES = [
  {
    id: 1,
    background: '/assets/images/home/carrusel/agua-mineral-canaima-fondo.png',
    backgroundMobile: '/assets/images/home/carrusel/agua-mineral-canaima-fondo-mobile.png',
    product: '/assets/images/home/carrusel/agua-mineral-canaima-productos.png',
    productMobile: '/assets/images/home/carrusel/agua-mineral-canaima-productos-mobile.png',
    title: 'Agua Mineral Canaima',
    href: '/productos/agua-mineral-canaima',
  },
  {
    id: 2,
    background: '/assets/images/home/carrusel/agua-saborizada-fondo.png',
    backgroundMobile: '/assets/images/home/carrusel/agua-saborizada-fondo-mobile.png',
    product: '/assets/images/home/carrusel/agua-saborizada-productos.png',
    productMobile: '/assets/images/home/carrusel/agua-saborizada-productos-mobile.png',
    title: 'Agua Saborizada Canaima',
    href: '/productos/agua-saborizada-canaima',
  },
  {
    id: 3,
    background: '/assets/images/home/carrusel/frutea-fondo.png',
    backgroundMobile: '/assets/images/home/carrusel/frutea-fondo-mobile.png',
    product: '/assets/images/home/carrusel/frutea-productos.png',
    productMobile: '/assets/images/home/carrusel/frutea-productos-mobile.png',
    title: 'Frutea',
    href: '/productos/frutea',
  },
  {
    id: 4,
    background: '/assets/images/home/carrusel/fresko-fondo.png',
    backgroundMobile: '/assets/images/home/carrusel/fresko-fondo-mobile.png',
    product: '/assets/images/home/carrusel/fresko-productos.png',
    productMobile: '/assets/images/home/carrusel/fresko-productos-mobile.png',
    title: 'Fresko',
    href: '/productos/fresko',
  },
];

export const Hero = () => {
  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0); // 0: background, 1: product & logo

  // Cambiar al slide anterior
  const prevSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length);
    setCurrentStep(0);
  };

  // Cambiar al slide siguiente
  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % CARRUSEL_IMAGES.length);
    setCurrentStep(0);
  };

  // Efecto para la secuencia automática
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep >= 1) {
        // Si es el último paso, pasar al siguiente slide
        nextSlide();
      } else {
        // Pasar al siguiente paso
        setCurrentStep(currentStep + 1);
      }
    }, 3000); // Duración de cada paso de la animación

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar o al cambiar de estado
  }, [currentStep, carouselIndex]); // El efecto se reinicia cuando cambia el paso o el slide

  const currentItem = CARRUSEL_IMAGES[carouselIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Fondo */}
      <AnimatedBox
        isActive={currentStep >= 0}
        animation={fadeIn}
      >
        <Image
          src={mdDown ? currentItem.backgroundMobile : currentItem.background}
          alt={currentItem.title}
          fill
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          priority
        />
      </AnimatedBox>

      {/* Producto */}
      <AnimatedBox
        isActive={currentStep >= 1}
        animation={scaleIn}
        sx={{
          pt: mdDown ? 0 : 15,
        }}
        component={Link}
        href={currentItem.href}
      >
        <Image
          src={mdDown ? currentItem.productMobile : currentItem.product}
          alt={currentItem.title}
          fill
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </AnimatedBox>

      {/* Controles de navegación */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          left: 20,
          top: mdDown ? '96%' : '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          zIndex: 2,
        }}
      >
        <KeyboardArrowLeft fontSize='large' />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          right: 20,
          top: mdDown ? '96%' : '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          zIndex: 2,
        }}
      >
        <KeyboardArrowRight fontSize='large' />
      </IconButton>

      {/* Indicadores de posición */}
      {mdDown ? null : (
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 2,
          }}
        >
          {CARRUSEL_IMAGES.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                if (index !== carouselIndex) {
                  setCarouselIndex(index);
                  setCurrentStep(0);
                }
              }}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: index === carouselIndex ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  bgcolor: index === carouselIndex ? 'primary.dark' : 'grey.500',
                },
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
