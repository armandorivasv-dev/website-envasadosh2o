'use client';
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const PRODUCTS_DATA = [
  {
    id: 0,
    image: '/assets/images/products/agua-mineral-canaima/agua-mineral-330-ml.png',
    presentation: '330 ML',
  },
  {
    id: 1,
    image: '/assets/images/products/agua-mineral-canaima/agua-mineral-600-ml.png',
    presentation: '600 ML',
  },
  {
    id: 2,
    image: '/assets/images/products/agua-mineral-canaima/agua-mineral-1.5-l.png',
    presentation: '1.5 L',
  },

  {
    id: 3,
    image: '/assets/images/products/agua-mineral-canaima/agua-mineral-5-l.png',
    presentation: '5 L',
  },
  {
    id: 4,
    image: '/assets/images/products/agua-mineral-canaima/agua-mineral-8-l.png',
    presentation: '8 L',
  },
];

export const Products = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      <Container sx={{ pt: 8, px: mdDown ? 4 : 0 }}>
        <Box sx={{ width: '60%', mx: 'auto', backgroundColor: 'primary.main', borderRadius: 10, py: 2 }}>
          <Typography
            variant={mdDown ? 'h5' : 'h3'}
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
              size={{ xs: 6, md: 2 }}
              key={item.id}
              mx={'auto'}
              py={mdDown ? 2 : 0}
            >
              <Stack
                direction='column'
                alignItems='center'
              >
                <Image
                  src={item.image}
                  alt={item.presentation}
                  width={mdDown ? 250 * 0.7 : 250}
                  height={mdDown ? 357 * 0.7 : 357}
                />
                <Box sx={{ width: mdDown ? '40%' : '50%', backgroundColor: 'primary.main', borderRadius: 3 }}>
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
      </Container>
      <Box
        sx={{
          width: '100%',
          backgroundImage: mdDown
            ? 'url(/assets/images/products/agua-mineral-canaima/agua-mineral-footer-mobile.png)'
            : 'url(/assets/images/products/agua-mineral-canaima/agua-mineral-footer.png)',
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
          color='primary'
          pt={mdDown ? 25 : 35}
          maxWidth='lg'
          sx={{ mx: 'auto', px: mdDown ? 4 : 0 }}
        >
          Elige Agua Mineral Canaima y brinda a tu cuerpo la pureza que merece. Mantente hidratado, equilibrado y
          saludable con cada sorbo.
        </Typography>
      </Box>
    </>
  );
};
