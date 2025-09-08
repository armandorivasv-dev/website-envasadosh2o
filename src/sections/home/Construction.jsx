'use client';
import { Box, Stack, Typography, Container, useMediaQuery } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';

export const Construction = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const style = {
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: {
      xs: `url('/assets/images/pagina-construccion.png')`,
      md: `url('/assets/images/pagina-construccion.png')`,
    },
    position: 'relative',
    backgroundPosition: { xs: 'center', md: 'top left' },
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Box sx={style}>
      <Container maxWidth='lg'>
        <Stack
          direction='column'
          justifyContent='flex-end'
          alignItems='center'
          sx={{
            position: 'relative',
            zIndex: 2,
            paddingLeft: { xs: 0, md: 8 },
          }}
        >
          <Stack
            direction='row'
            alignItems='center'
            sx={{ pt: { xs: '10vh', md: '5vh' } }}
          >
            <Image
              src='/assets/logos/logo-canaima.png'
              width={isMobile ? 242 : 600}
              height={isMobile ? 83 : 185}
              alt='Envasados H2O'
            />
          </Stack>

          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component='h1'
            color='primary'
            textAlign='center'
            fontWeight={600}
          >
            PÁGINA EN CONSTRUCCIÓN
          </Typography>

          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            color='primary'
            textAlign='center'
            fontWeight={600}
            mt={2}
            mb={2}
          >
            Visitanos en
          </Typography>

          <Image
            src='/assets/icons/icon-instagram.png'
            width={isMobile ? 50 : 70}
            height={isMobile ? 50 : 70}
            alt='Envasados H2O'
          />
          <Typography
            component={Link}
            href='https://www.instagram.com/aguamineralcanaima/'
            target='_blank'
            sx={{ textDecoration: 'none' }}
            variant={isMobile ? 'h6' : 'h5'}
            color='primary'
            textAlign='center'
            fontWeight={600}
          >
            @aguamineralcanaima
          </Typography>
          <Typography
            component={Link}
            href='https://www.instagram.com/freskove/'
            target='_blank'
            sx={{ textDecoration: 'none' }}
            variant={isMobile ? 'h6' : 'h5'}
            color='primary'
            textAlign='center'
            fontWeight={600}
          >
            @freskove
          </Typography>
          <Typography
            component={Link}
            href='https://www.instagram.com/frutea.ve/'
            target='_blank'
            sx={{ textDecoration: 'none' }}
            variant={isMobile ? 'h6' : 'h5'}
            color='primary'
            textAlign='center'
            fontWeight={600}
            mb={2}
          >
            @frutea.ve
          </Typography>
          <Image
            src='/assets/icons/icon-tiktok.png'
            width={isMobile ? 50 : 70}
            height={isMobile ? 50 : 70}
            alt='Envasados H2O'
          />
          <Typography
            component={Link}
            href='https://www.tiktok.com/@aguamineralcanaim'
            target='_blank'
            sx={{ textDecoration: 'none' }}
            variant={isMobile ? 'h6' : 'h5'}
            color='primary'
            textAlign='center'
            fontWeight={600}
          >
            @aguamineralcanaim
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
