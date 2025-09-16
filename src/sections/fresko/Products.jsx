'use client';
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const PRODUCTS_DATA = [
  {
    id: 0,
    image: '/assets/images/products/fresko/fresko-naranja.png',
    name: 'FRESKO NARANJA',
    presentation: '1.5 ML / 600 ML ',
    color: '#E48510',
    width: 256,
    height: 552,
  },
  {
    id: 1,
    image: '/assets/images/products/fresko/fresko-limon.png',
    name: 'FRESKO LIMÓN',
    presentation: '1.5 L',
    color: '#0D8C2C',
    width: 157,
    height: 544,
  },
];

export const Products = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      <Container sx={{ pt: mdDown ? 4 : 8, px: mdDown ? 4 : 0 }}>
        <Box sx={{ width: '60%', mx: 'auto', backgroundColor: '#E48510', borderRadius: 10, py: 2 }}>
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
              py={mdDown ? 2 : 0}
            >
              <Stack
                direction='column'
                alignItems='center'
              >
                <Image
                  src={item.image}
                  alt={item.presentation}
                  width={mdDown ? item.width * 0.7 : item.width}
                  height={mdDown ? item.height * 0.7 : item.height}
                />
                <Box sx={{ width: mdDown ? '70%' : '80%', backgroundColor: item.color, borderRadius: 3, mt: 2 }}>
                  <Typography
                    variant={mdDown ? 'h6' : 'h5'}
                    align='center'
                    color='white'
                    fontWeight='bold'
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant={mdDown ? 'h6' : 'h5'}
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
      <Box sx={{ pt: 8, mb: -1 }}>
        <Image
          src={
            mdDown
              ? '/assets/images/products/fresko/fresko-footer-mobile.png'
              : '/assets/images/products/fresko/fresko-footer.png'
          }
          alt='Disfruta de Fresko una opción deliciosa y saludable para mantenerte hidratado y cuidar de tu bienestar.'
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
