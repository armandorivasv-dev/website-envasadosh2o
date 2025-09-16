'use client';
import { Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const BENEFITS_DATA = [
  {
    id: 1,
    image: '/assets/images/products/fresko/minerales.png',
    benefit: 'Rico en minerales',
  },

  {
    id: 2,
    image: '/assets/images/products/fresko/refrescante.png',
    benefit: 'Refrescante',
  },
  {
    id: 4,
    image: '/assets/images/products/fresko/hidratante.png',
    benefit: 'Hidratante',
  },
  {
    id: 5,
    image: '/assets/images/products/fresko/sin-calorias.png',
    benefit: 'Sin calorías',
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
        color='#E48510'
      >
        FRESKO
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align={mdDown ? 'justify' : 'left'}
        color='text.secondary'
        pt={4}
      >
        Fresko sabor a naranja es la elección perfecta, refrescante y deliciosa para revitalizar tus días. Su exquisito
        sabor a naranja cuidadosamente seleccionada te brinda un sabor vibrante y una experiencia única en cada vaso.
        Disfruta del intenso sabor a naranja que te refresca al instante.
      </Typography>

      <Typography
        variant={mdDown ? 'h4' : 'h3'}
        component='h2'
        fontWeight='bold'
        align='center'
        color='#E48510'
        pt={8}
      >
        Valores Nutricionales de Fresko
      </Typography>

      <Grid
        container
        direction='row'
        justifyContent='center'
        pt={6}
      >
        {BENEFITS_DATA.map((item) => (
          <Grid
            size={{ xs: 6, md: 3 }}
            key={item.id}
            px={4}
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
