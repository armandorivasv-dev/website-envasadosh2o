'use client';
import { useEffect, useState } from 'react';
import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { Instagram } from '@mui/icons-material';
import { FaTiktok } from 'react-icons/fa';

const RRSS = [
  {
    id: 0,
    profile: '@aguamineralcanaim',
    url: 'https://www.tiktok.com/@aguamineralcanaim',
    icon: <FaTiktok />,
  },
  {
    id: 1,
    profile: '@aguamineralcanaima',
    url: 'https://www.instagram.com/aguamineralcanaima',
    icon: <Instagram />,
  },
  {
    id: 3,
    profile: '@envasadosh2o',
    url: 'https://www.instagram.com/envasadosh2o',
    icon: <Instagram />,
  },
  {
    id: 4,
    profile: '@freskove',
    url: 'https://www.instagram.com/freskove',
    icon: <Instagram />,
  },
  {
    id: 5,
    profile: '@frutea.ve',
    url: 'https://www.instagram.com/frutea.ve',
    icon: <Instagram />,
  },
];

function Copyright() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <Typography
      textAlign='center'
      variant='body2'
      color='white'
      mt={1}
    >
      {`Copyright © Envasados H2O ${currentYear}`}
    </Typography>
  );
}

function DevelopedBy() {
  return (
    <Typography
      textAlign='center'
      variant='body2'
      color='white'
      mt={1}
    >
      {'Developed by '}
      <Link
        href='https://www.armandorivasv.dev/'
        target='_blank'
        color='white'
      >
        @armandorivasv.dev&nbsp;
      </Link>
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#014EA8',
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, md: 8 },
          py: { xs: 8, md: 10 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', md: '20%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', md: '60%' } }}>
              <Box sx={{ ml: '0px' }}>
                <Image
                  src='/assets/logos/logo-canaima-footer.png'
                  width={268 * 0.8}
                  height={97 * 0.8}
                  alt='empresa'
                  priority={true}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              color='white'
            >
              Dirección
            </Typography>
            <Typography
              variant='subtitle1'
              color='white'
            >
              KM 17 Carretera Panamericana,
            </Typography>
            <Typography
              variant='subtitle1'
              color='white'
            >
              C.C La Arcada, Sotano A-1 Mezzanina.
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              color='white'
            >
              Contactos
            </Typography>
            <Typography
              component={Link}
              href='mailto:info@envasadosh2o.com'
              variant='subtitle1'
              color='white'
            >
              info@envasadosh2o.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              color='white'
            >
              Redes Sociales
            </Typography>
            <Grid
              container
              direction='column'
              justifyContent={{ xs: 'center', md: 'left' }}
              sx={{
                color: 'text.secondary',
              }}
            >
              {RRSS.map((item) => (
                <Grid
                  size={{ xs: 12, md: 12 }}
                  key={item.id}
                  container
                  direction='row'
                  justifyContent={{ xs: 'center', md: 'left' }}
                  alignItems='center'
                >
                  <IconButton
                    href={item.url}
                    target='_blank'
                    aria-label='rrss'
                    sx={{ alignSelf: 'center', color: 'white' }}
                  >
                    {item.icon}
                    <Typography
                      variant='caption'
                      color='white'
                      sx={{ ml: 1 }}
                    >
                      {item.profile}
                    </Typography>
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: { xs: 4, sm: 2 },
            pb: { xs: 10, md: 0 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Copyright />
            <DevelopedBy />
          </div>
        </Box>
      </Container>
    </Box>
  );
};
