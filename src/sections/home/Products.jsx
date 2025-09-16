'use client';
import {
  Container,
  Box,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const PRODUCTOS_DATA = [
  {
    title: 'Canaima Saborizada',
    image: '/assets/images/home/products/producto-saborizada-canaima.png',
    logo: '/assets/images/home/products/logo-saborizada.png',
    description:
      'Además de nuestra agua mineral, ofrecemos una deliciosa gama de bebidas de sabor que incluyen: Naranja, Coco, Mora, Flor de Jamaica, Mandarina,  Toronja, Limón',
    href: 'agua-saborizada-canaima',
  },
  {
    title: 'Frutea',
    image: '/assets/images/home/products/producto-frutea.png',
    logo: '/assets/images/home/products/logo-frutea.png',
    description:
      'También contamos con Frutéa, una refrescante línea de té frío a base de té negro, disponible en sabores de durazno y limón. ',
    href: 'frutea',
  },
  {
    title: 'Fresko',
    image: '/assets/images/home/products/producto-fresko.png',
    logo: '/assets/images/home/products/logo-fresko.png',
    description:
      'Y para aquellos que buscan algo diferente, tenemos jugo de naranja y limonada con un sabor excepcional que no te puedes perder.',
    href: 'fresko',
  },
];

export const Products = () => {
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      <Box sx={{ py: mdDown ? 4 : 8, backgroundColor: 'primary.main' }}>
        <Typography
          variant={mdDown ? 'h3' : 'h2'}
          component='h1'
          fontWeight='bold'
          color='white'
          textAlign='center'
        >
          NUESTROS PRODUCTOS
        </Typography>
      </Box>
      <Stack
        alignItems='center'
        mt={-1}
      >
        <Image
          src='/assets/images/home/products/gota-canaima.png'
          alt='Productos'
          width={mdDown ? 300 * 0.7 : 300}
          height={mdDown ? 129 * 0.7 : 129}
        />
      </Stack>
      <Container>
        <Grid
          container
          direction={mdDown ? 'column-reverse' : 'row'}
          component={Link}
          href='/productos/agua-mineral-canaima'
          sx={{ textDecoration: 'none' }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: mdDown ? '90%' : '100%',
                height: 'auto',
                mx: 'auto',
                aspectRatio: '690/809',
              }}
            >
              <Image
                src='/assets/images/home/products/producto-aguamineral.png'
                alt='Agua Mineral Canaima'
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            pt={mdDown ? 4 : 10}
          >
            <Box
              sx={{
                position: 'relative',
                mx: mdDown ? 'auto' : '0',
                width: mdDown ? '100%' : '80%',
                height: 'auto',
                aspectRatio: '570/180',
              }}
            >
              <Image
                src='/assets/images/home/products/logo-agua-mineral.png'
                alt='Canaima'
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography
              variant={mdDown ? 'h6' : 'h5'}
              align='left'
              color='text.secondary'
              pt={2}
              px={mdDown ? 2 : 0}
            >
              Nuestro Producto Estrella: <b>Agua Mineral Canaima</b>
            </Typography>
            <Typography
              variant={mdDown ? 'h6' : 'h5'}
              align='left'
              color='text.secondary'
              pt={4}
              px={mdDown ? 2 : 0}
            >
              Agua Mineral Canaima se destaca como una de las mejores opciones en el exigente mercado Venezolano.
              Gracias a nuestros rigurosos estándares de calidad en el envasado, garantizamos un producto excepcional
              que satisface las necesidades de nuestros consumidores.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          pb={mdDown ? 10 : 20}
        >
          {PRODUCTOS_DATA.map((item, index) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={index}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: mdDown ? '70%' : '80%',
                  height: 'auto',
                  aspectRatio: '400/160',
                  mx: 'auto',
                }}
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Link href={`/productos/${item.href}`}>
                <Box
                  sx={{
                    position: 'relative',
                    width: mdDown ? '90%' : '100%',
                    height: 'auto',
                    mx: 'auto',
                    aspectRatio: '690/809',
                    '&:hover .product-overlay': {
                      opacity: 1,
                    },
                    '&:hover .product-image': {
                      opacity: 0.7,
                      transition: 'opacity 0.3s ease-in-out',
                    },
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='product-image'
                    style={{
                      objectFit: 'contain',
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  />
                  {!mdDown && (
                    <Box
                      className='product-overlay'
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 40,
                        right: 40,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: 7,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                        padding: 4,
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant='h6'
                        color='white'
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Link>

              {mdDown && (
                <Accordion sx={{ width: '60%', mx: 'auto', border: 'none' }}>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon sx={{ color: 'primary.main' }} />}
                    aria-controls='panel2-content'
                    id='panel2-header'
                  >
                    <Typography
                      variant='subtitle1'
                      fontWeight='bold'
                      component='span'
                    >
                      Descripción
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
