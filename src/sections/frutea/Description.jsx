'use client';
import { Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const BENEFITS_DATA = [
  {
    id: 1,
    image: '/assets/images/products/frutea/antioxidantes.png',
    benefit: 'Alto contenido en antioxidantes, especialmente flavonoides',
  },
  {
    id: 2,
    image: '/assets/images/products/frutea/minerales.png',
    benefit: 'Rico en minerales como calcio, cromo, magnesio, hierro, potasio y fósforo, entre',
  },
  {
    id: 3,
    image: '/assets/images/products/frutea/refrescante.png',
    benefit: 'Refrescante',
  },
  {
    id: 4,
    image: '/assets/images/products/frutea/hidratante.png',
    benefit: 'Hidratante',
  },
  {
    id: 5,
    image: '/assets/images/products/frutea/cero-calorias.png',
    benefit: 'Sin calorías',
  },
];

export const Description = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Container
      sx={{ py: 10, px: mdDown ? 4 : 0 }}
      id='des'
    >
      <Typography
        variant={mdDown ? 'h4' : 'h2'}
        component='h1'
        fontWeight='bold'
        align='center'
        color='text.primary'
      >
        FRUTEA - TE NEGRO
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align={mdDown ? 'justify' : 'left'}
        color='text.secondary'
        pt={4}
      >
        Frutea es una bebida a base de té negro que ofrece magníficos elementos antioxidantes, siendo refrescante e
        ideal para procesos de dieta. Su principal potencial radica en los flavonoides, que mejoran la capacidad de
        dilatación y contracción de los vasos sanguíneos. Aunque su contenido en antioxidantes es menor que el del té
        blanco o el té verde, el té negro mantiene la piel hidratada y fresca.
      </Typography>

      <Typography
        variant={mdDown ? 'h4' : 'h3'}
        component='h2'
        fontWeight='bold'
        align='center'
        color='text.primary'
        pt={8}
      >
        Valores Nutricionales del Té Negro
      </Typography>

      <Grid
        container
        direction='row'
        justifyContent='center'
        pt={6}
      >
        {BENEFITS_DATA.map((item) => (
          <Grid
            size={{ xs: 12, md: 4 }}
            key={item.id}
            px={mdDown ? 0 : 4}
            py={mdDown ? 2 : 4}
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
