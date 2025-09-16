'use client';
import { Box, useMediaQuery, useTheme } from '@mui/material';
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

const CARRUSEL_IMAGES = [
  {
    id: 2,
    background: '/assets/images/home/carrusel/agua-saborizada-fondo.png',
    backgroundMobile: '/assets/images/home/carrusel/agua-saborizada-fondo-mobile.png',
    product: '/assets/images/home/carrusel/agua-saborizada-productos.png',
    productMobile: '/assets/images/home/carrusel/agua-saborizada-productos-mobile.png',
    title: 'Agua Saborizada Canaima',
    href: '/agua-saborizada-canaima',
  },
];

export const Hero = () => {
  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <>
      {CARRUSEL_IMAGES.map((item) => (
        <Box
          key={item.id}
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
              src={mdDown ? item.backgroundMobile : item.background}
              alt={item.title}
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
            animation={scaleIn}
            sx={{
              pt: mdDown ? 0 : 15,
            }}
          >
            <Image
              src={mdDown ? item.productMobile : item.product}
              alt={item.title}
              fill
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
              }}
            />
          </AnimatedBox>
        </Box>
      ))}
    </>
  );
};
