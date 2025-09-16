'use client';
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const PRODUCTS_DATA = [
  {
    id: 0,
    image: '/assets/images/products/frutea/frutea-limon.png',
    name: 'FRUTEA LIMON',
    presentation: '330 ML  |   600 ML   |   1.5 L',
    color: '#007C0A',
  },
  {
    id: 1,
    image: '/assets/images/products/frutea/frutea-durazno.png',
    name: 'FRUTEA DURAZNO',
    presentation: '330 ML  |  600 ML  |  1.5 L',
    color: '#F55A07',
  },
];

export const Products = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      <Container sx={{ pt: mdDown ? 0 : 8, px: mdDown ? 4 : 0 }}>
        <Box sx={{ width: '60%', mx: 'auto', backgroundColor: '#007C0A', borderRadius: 8, py: 2 }}>
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
              size={{ xs: 12, md: 3 }}
              key={item.id}
              mx={'auto'}
              my={4}
            >
              <Stack
                direction='column'
                alignItems='center'
              >
                <Image
                  src={item.image}
                  alt={item.presentation}
                  width={mdDown ? 331 * 0.7 : 331}
                  height={mdDown ? 565 * 0.7 : 565}
                />
                <Box sx={{ width: '70%', backgroundColor: item.color, borderRadius: 3 }}>
                  <Typography
                    variant='h6'
                    align='center'
                    color='white'
                    fontWeight='bold'
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant='h6'
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
      <Box sx={{ pt: mdDown ? 4 : 8, mb: -1 }}>
        <Image
          src={
            mdDown
              ? '/assets/images/products/frutea/frutea-footer-mobile.png'
              : '/assets/images/products/frutea/frutea-footer.png'
          }
          alt='Disfruta de Frutea una opción deliciosa 
y saludable para mantenerte hidratado 
y cuidar de tu bienestar.'
          width={1920}
          height={1080}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
          priority
        />
      </Box>
    </>
  );
};
