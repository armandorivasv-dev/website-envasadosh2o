'use client';
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const PRODUCTS_DATA = [
  {
    id: 0,
    image: '/assets/images/products/agua-saborizada-canaima/mandarina-saborizada.png',
    name: 'MANDARINA',
    presentation: '600 ML / 1.5 L',
    color: '#FF8C05',
  },
  {
    id: 1,
    image: '/assets/images/products/agua-saborizada-canaima/naranja-saborizada.png',
    name: 'NARANJA',
    presentation: '600 ML / 1.5 L',
    color: '#ECAF00',
  },
  {
    id: 2,
    image: '/assets/images/products/agua-saborizada-canaima/limon-saborizada.png',
    name: 'LIMON',
    presentation: '600 ML / 1.5 L',
    color: '#0D8C2C',
  },

  {
    id: 3,
    image: '/assets/images/products/agua-saborizada-canaima/toronja-saborizada.png',
    name: 'TORONJA',
    presentation: '600 ML / 1.5 L',
    color: '#EF6058',
  },
  {
    id: 4,
    image: '/assets/images/products/agua-saborizada-canaima/flor-de-jamaica-saborizada.png',
    name: 'JAMAICA',
    presentation: '1.5 L',
    color: '#AB0622',
  },
  {
    id: 5,
    image: '/assets/images/products/agua-saborizada-canaima/mora-saborizada.png',
    name: 'MORA',
    presentation: '1.5 L',
    color: '#6C1C5D',
  },
  {
    id: 6,
    image: '/assets/images/products/agua-saborizada-canaima/coco-saborizada.png',
    name: 'COCO',
    presentation: '1.5 L',
    color: '#6CBDB4',
  },
];

export const Products = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      <Container sx={{ pt: mdDown ? 4 : 8, px: mdDown ? 4 : 0 }}>
        <Box sx={{ width: '60%', mx: 'auto', backgroundColor: '#0D8C2C', borderRadius: 10, py: 2 }}>
          <Typography
            variant={mdDown ? 'h6' : 'h3'}
            component='h2'
            fontWeight='bold'
            align='center'
            color='white'
          >
            Presentaciones
          </Typography>
        </Box>

        <Grid
          container
          direction='row'
          pt={6}
        >
          {PRODUCTS_DATA.map((item) => (
            <Grid
              size={{ xs: 6, md: 3 }}
              key={item.id}
              mx={'auto'}
              my={4}
              py={mdDown ? 2 : 0}
            >
              <Stack
                direction='column'
                alignItems='center'
              >
                <Image
                  src={item.image}
                  alt={item.presentation}
                  width={mdDown ? 225 * 0.7 : 225}
                  height={mdDown ? 403 * 0.7 : 403}
                />
                <Box sx={{ width: '70%', backgroundColor: item.color, borderRadius: 3 }}>
                  <Typography
                    variant={mdDown ? 'subtitle1' : 'h6'}
                    align='center'
                    color='white'
                    fontWeight='bold'
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant={mdDown ? 'subtitle1' : 'h6'}
                    align='center'
                    color='white'
                    fontWeight='bold'
                  >
                    {item.presentation}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant={mdDown ? 'h6' : 'h5'}
          align={mdDown ? 'justify' : 'left'}
          color='text.secondary'
          pt={4}
        >
          Nuestras aguas saborizadas están disponibles en tamaños de 600 ml y 1.5 L (familia), ofreciendo la hidratación
          perfecta para cada día.
        </Typography>
      </Container>
      <Box
        sx={{
          width: '100%',
          backgroundImage: mdDown
            ? 'url(/assets/images/products/agua-saborizada-canaima/saborizadas-canaima-footer-mobile.png)'
            : 'url(/assets/images/products/agua-saborizada-canaima/saborizadas-canaima-footer.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pb: 5,
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant={mdDown ? 'h5' : 'h3'}
          align='center'
          fontWeight='bold'
          color='#0D8C2C'
          pt={mdDown ? 25 : 50}
          px={mdDown ? 4 : 0}
          maxWidth='lg'
          sx={{ mx: 'auto' }}
        >
          ¡Descubre el sabor y los beneficios de Canaima Saborizada, la opción ideal para mantenerte fresco y lleno de
          energía!
        </Typography>
      </Box>
    </>
  );
};
