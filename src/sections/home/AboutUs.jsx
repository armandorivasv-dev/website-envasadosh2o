'use client';
import { Container, Grid, Stack, Typography, useMediaQuery, Box } from '@mui/material';
import Image from 'next/image';

const MISION_VISION_DATA = [
  {
    id: 0,
    title: 'Nuestra Visión',
    image: '/assets/images/home/about-us/vision-canaima.png',
    text: [
      'Suministrar agua mineral embotellada de alta pureza y calidad a través de nuestra marca Premium Canaima, superando las necesidades del mercado y asegurando el éxito en la cobertura. Trabajamos de la mano con nuestros aliados comerciales bajo el principio de Ganar-Ganar, fomentando el crecimiento y la innovación en la industria. Nuestro objetivo es convertirnos en la marca favorita de agua mineral en los hogares venezolanos.',
    ],
  },
  {
    id: 1,
    title: 'Nuestra Misión',
    image: '/assets/images/home/about-us/mision-canaima.png',
    text: [
      'Convertirnos en la compañía de agua mineral más exitosa de Venezuela, superando las expectativas de clientes y consumidores. Garantizamos productos de altísima calidad y excepcional pureza en todas sus presentaciones, utilizando tecnología de punta para adaptarnos a un mercado dinámico y en constante cambio. Nos comprometemos a estar siempre a la vanguardia para alcanzar nuestras metas.',
    ],
  },

  {
    id: 2,
    title: 'Nuestros Valores',
    image: '/assets/images/home/about-us/valores-canaima.png',
    text: [
      '• Puertas Abiertas: Fomentamos una relación cercana con nuestros distribuidores.',
      '• Escucha Activa: Atendemos las necesidades de nuestros clientes y valoramos sus opiniones.',
      '• Compromiso Ambiental: Respetamos y cuidamos el medio ambiente.',
      '• Innovación: Buscamos ofrecer nuevas soluciones constantemente.',
      '• Seguridad Laboral: Promovemos condiciones seguras para nuestro equipo.',
      '• Capacitación: Valoramos el desarrollo continuo del personal.',
      '• Creatividad: Estimulamos el ingenio y la creatividad de nuestros operarios.',
    ],
  },
];

export const AboutUs = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Container
      sx={{ py: 8, px: mdDown ? 4 : 0 }}
      id='about-us'
      maxWidth='lg'
    >
      <Typography
        variant={mdDown ? 'h4' : 'h3'}
        component='h1'
        fontWeight='bold'
        align='center'
        color='primary'
      >
        Bienvenido a Envasados H2O, C.A.
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align={mdDown ? 'justify' : 'left'}
        color='text.secondary'
        pt={4}
      >
        Somos una empresa líder en el sector de consumo masivo, establecida el 10 de febrero de 2006, en los Altos de
        Miranda.
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align={mdDown ? 'justify' : 'left'}
        color='text.secondary'
        pt={4}
      >
        Nos especializamos en la extracción, industrialización, envasado, distribución y comercialización de agua
        mineral de alta calidad.
      </Typography>
      <Stack
        direction={'row'}
        justifyContent='center'
        alignItems='center'
        pt={6}
      >
        <Image
          src='/assets/images/home/about-us/fortalezas-canaima.png'
          alt='Fortalezas Canaima'
          width={mdDown ? 150 * 0.7 : 150}
          height={mdDown ? 150 * 0.7 : 150}
        />
      </Stack>
      <Typography
        variant={mdDown ? 'h4' : 'h3'}
        component='h1'
        fontWeight='bold'
        align='center'
        color='primary'
        pb={mdDown ? 4 : 0}
      >
        Fortalezas de Envasados H2O, C.A.
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align='justify'
        color='text.secondary'
      >
        <b>Portafolio Diversificado:</b> Ofrecemos una variedad de presentaciones de agua mineral y bebidas para
        adaptarnos a las preferencias de nuestros clientes.
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align='justify'
        color='text.secondary'
        pt={4}
      >
        <b>Amplia Red de Distribución:</b> Contamos con una sólida red de distribución a nivel nacional, alcanzando los
        estados de Anzoátegui, Aragua, Apure, Barinas, Carabobo, Distrito Capital, Falcón, Guárico, Lara, Mérida,
        Miranda, Monagas, Nueva Esparta, Portuguesa, Sucre, Táchira, Trujillo, Yaracuy y Zulia.
      </Typography>
      <Typography
        variant={mdDown ? 'h6' : 'h5'}
        align='justify'
        color='text.secondary'
        pt={4}
      >
        <b>Presencia en Múltiples Canales:</b> Nuestros productos están disponibles en canales tradicionales y
        mayoristas, asegurando que Agua Mineral Canaima y nuestras deliciosas bebidas estén siempre al alcance de todos.
      </Typography>
      <Grid
        container
        direction='row'
        pt={6}
      >
        {MISION_VISION_DATA.map((item) => (
          <Grid
            size={{ xs: 12, md: 4 }}
            key={item.title}
            px={mdDown ? 0 : 4}
          >
            <Stack
              direction='column'
              alignItems='center'
              pt={mdDown ? 4 : 0}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={mdDown ? 150 * 0.7 : 150}
                height={mdDown ? 150 * 0.7 : 150}
              />
            </Stack>
            <Typography
              variant='h4'
              component='h2'
              fontWeight='bold'
              align='center'
              color='primary'
              pb={mdDown ? 2 : 2}
            >
              {item.title}
            </Typography>

            {item.text.map((text, index) => (
              <Typography
                key={index}
                variant={mdDown ? 'h6' : 'subtitle1'}
                align='justify'
                color='text.secondary'
              >
                {text}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
      <Typography
        variant={mdDown ? 'h5' : 'h4'}
        component='h2'
        fontWeight='bold'
        align='center'
        color='primary'
        pt={6}
      >
        En Envasados H2O, C.A., nos dedicamos a brindar calidad y satisfacción a nuestros consumidores, mientras
        construimos un futuro sostenible y exitoso.
      </Typography>
    </Container>
  );
};
