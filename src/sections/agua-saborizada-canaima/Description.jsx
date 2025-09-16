'use client';
import { Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const BENEFITS_DATA = [
  {
    id: 0,
    image: '/assets/images/products/agua-saborizada-canaima/refrescantes.png',
    benefit: 'Refrescantes',
  },
  {
    id: 1,
    image: '/assets/images/products/agua-saborizada-canaima/sin-calorias.png',
    benefit: 'Sin calorías',
  },
  {
    id: 2,
    image: '/assets/images/products/agua-saborizada-canaima/libre-de-sodio.png',
    benefit: 'Libre de sodio',
  },
  {
    id: 3,
    image: '/assets/images/products/agua-saborizada-canaima/sin-gas-sin-azucar.png',
    benefit: 'Sin gas y sin azúcar',
  },
  {
    id: 4,
    image: '/assets/images/products/agua-saborizada-canaima/rica-en-nutrientes.png',
    benefit: 'Rica en nutrientes',
  },
];

export const Description = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Container
      sx={{ py: 10, px: mdDown ? 4 : 0 }}
      id='description'
    >
      <Typography
        variant={mdDown ? 'h4' : 'h2'}
        component='h1'
        fontWeight='bold'
        align='center'
        color='#0D8C2C'
      >
        AGUA SABORIZADA CANAIMA
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align={mdDown ? 'justify' : 'left'}
        color='text.secondary'
        pt={4}
      >
        Nuestras aguas saborizadas Canaima, con deliciosos sabores a frutas, son ideales para reponer energía durante
        actividades físicas. Son clave para regular el potasio a lo largo del día gracias a su alto nivel de
        hidratación, ya que no contienen calorías, gas ni azúcar. Al ser libres de sodio, aportan nutrientes y vitaminas
        esenciales.
      </Typography>

      <Typography
        variant={mdDown ? 'h4' : 'h3'}
        component='h1'
        fontWeight='bold'
        align='center'
        color='#0D8C2C'
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
        {BENEFITS_DATA.map((item) => (
          <Grid
            size={{ xs: 6, md: 4 }}
            key={item.id}
            px={4}
            py={4}
          >
            <Stack
              direction='column'
              alignItems='center'
            >
              <Image
                src={item.image}
                alt={item.benefit}
                width={mdDown ? 150 * 0.7 : 150}
                height={mdDown ? 150 * 0.7 : 150}
              />
            </Stack>
            <Typography
              variant={mdDown ? 'h6' : 'h5'}
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
