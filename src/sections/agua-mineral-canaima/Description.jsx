'use client';
import { Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const BENEFITS_DATA = [
  {
    id: 0,
    image: '/assets/images/products/agua-mineral-canaima/icono-composicion.png',
    benefit: 'Composición en minerales y oligoelementos constantes en el tiempo',
  },
  {
    id: 1,
    image: '/assets/images/products/agua-mineral-canaima/icono-mejora-la-digestion.png',
    benefit: 'Mejora la Digestión',
  },
  {
    id: 2,
    image: '/assets/images/products/agua-mineral-canaima/icono-hidratacion-saludable.png',
    benefit: 'Hidratación Saludable',
  },
];

const BENEFITS_DATA_MOBILE = [
  {
    id: 0,
    image: '/assets/images/products/agua-mineral-canaima/icono-hidratacion-saludable.png',
    benefit: 'Hidratación Saludable',
  },
  {
    id: 1,
    image: '/assets/images/products/agua-mineral-canaima/icono-mejora-la-digestion.png',
    benefit: 'Mejora la Digestión',
  },
  {
    id: 2,
    image: '/assets/images/products/agua-mineral-canaima/icono-composicion.png',
    benefit: 'Composición en minerales y oligoelementos constantes en el tiempo',
  },
];

export const Description = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Container
      id='description'
      sx={{ px: mdDown ? 4 : 0 }}
    >
      <Typography
        variant={mdDown ? 'h4' : 'h2'}
        component='h1'
        fontWeight='bold'
        align='center'
        color='primary'
      >
        AGUA MINERAL CANAIMA
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align={mdDown ? 'justify' : 'left'}
        color='text.secondary'
        pt={4}
      >
        Nuestra agua mineral natural proviene de manantiales subterráneos, completamente protegidos de la contaminación.
        Desde su origen, estas aguas son puras y no requieren tratamientos desinfectantes ni filtrados, lo que significa
        que cada sorbo es un deleite en su estado más auténtico.
      </Typography>

      <Typography
        variant={mdDown ? 'h4' : 'h3'}
        component='h2'
        fontWeight='bold'
        align='center'
        color='primary'
        pt={8}
      >
        Beneficios de Agua Mineral Canaima
      </Typography>

      <Grid
        container
        direction='row'
        justifyContent='center'
        pt={6}
      >
        {mdDown &&
          BENEFITS_DATA_MOBILE.map((item) => (
            <Grid
              size={{ xs: 6, md: 4 }}
              key={item.id}
              px={2}
              py={2}
            >
              <Stack
                direction='column'
                alignItems='center'
              >
                <Image
                  src={item.image}
                  alt={item.benefit}
                  width={150 * 0.7}
                  height={150 * 0.7}
                />
              </Stack>
              <Typography
                variant='h6'
                align='center'
                color='text.secondary'
                pt={2}
              >
                {item.benefit}
              </Typography>
            </Grid>
          ))}

        {!mdDown &&
          BENEFITS_DATA.map((item) => (
            <Grid
              size={{ xs: 6, md: 4 }}
              key={item.id}
              px={4}
              py={0}
            >
              <Stack
                direction='column'
                alignItems='center'
              >
                <Image
                  src={item.image}
                  alt={item.benefit}
                  width={150}
                  height={150}
                />
              </Stack>
              <Typography
                variant='h5'
                align='center'
                color='text.secondary'
                pt={2}
              >
                {item.benefit}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
