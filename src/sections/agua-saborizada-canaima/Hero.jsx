'use client';
import { Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
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
  shouldForwardProp: (prop) => prop !== 'animation',
})(({ animation }) => ({
  opacity: 1,
  transition: 'opacity 0.5s ease-in-out',
  animation: `${animation} 0.8s ease-out forwards`,
  position: 'absolute',
  width: '100%',
  height: '100%',
}));

const HERO_DATA = {
  id: 2,
  background: '/assets/images/home/carrusel/agua-saborizada-fondo.png',
  backgroundMobile: '/assets/images/home/carrusel/agua-saborizada-fondo-mobile.png',
  product: '/assets/images/home/carrusel/agua-saborizada-productos.png',
  productMobile: '/assets/images/home/carrusel/agua-saborizada-productos-mobile.png',
  title: 'Agua Saborizada Canaima',
  href: '/agua-saborizada-canaima',
};

export const Hero = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box
      key={HERO_DATA.id}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Fondo */}
      <AnimatedBox animation={fadeIn}>
        <Image
          src={mdDown ? HERO_DATA.backgroundMobile : HERO_DATA.background}
          alt={HERO_DATA.title}
          sizes='100vw'
          width='1920'
          height='1080'
          style={{
            width: '100%',
            height: '100%',
          }}
          priority
        />
      </AnimatedBox>

      {/* Producto */}
      <AnimatedBox
        animation={scaleIn}
        sx={{
          pt: mdDown ? 0 : 15,
        }}
      >
        <Image
          src={mdDown ? HERO_DATA.productMobile : HERO_DATA.product}
          alt={HERO_DATA.title}
          fill
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </AnimatedBox>
    </Box>
  );
};
