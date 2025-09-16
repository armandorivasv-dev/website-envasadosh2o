'use client';
import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Drawer,
  MenuItem,
  Typography,
  Divider,
  Container,
  Button,
  Toolbar,
  AppBar,
  Box,
  Menu,
  useMediaQuery,
  Grid,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import MenuIcon from '@mui/icons-material/Menu';
import { brand } from '@/styles/getCustomTheme';
import { Instagram } from '@mui/icons-material';
import { FaTiktok } from 'react-icons/fa';

const MENU_ITEMS = [
  {
    id: 0,
    title: 'INICIO',
    value: '/',
  },
  {
    id: 1,
    title: 'NOSOTROS',
    value: '/#about-us',
  },
  {
    id: 2,
    title: 'PRODUCTOS',
    value: 'products',
    submenu: [
      { id: 0, title: 'AGUA MINERAL CANAIMA', value: '/productos/agua-mineral-canaima' },
      { id: 1, title: 'AGUA SABORIZADA CANAIMA', value: '/productos/agua-saborizada-canaima' },
      { id: 2, title: 'FRUTEA', value: '/productos/frutea' },
      { id: 3, title: 'FRESKO', value: '/productos/fresko' },
    ],
  },
];

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

export const TopNav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenContactForm = () => setOpenContactForm(true);
  const handleCloseContactForm = () => setOpenContactForm(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    if (isMobile) setOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AppBar
        id='home'
        position='fixed'
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar
            variant='regular'
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '50px',
              bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255)' : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              py: 1,
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              id='home'
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 0,
              }}
            >
              <Link href='/'>
                <Image
                  src='/assets/logos/logo-canaima-topnav.png'
                  width={isMobile ? 299 * 0.4 : 299 * 0.6}
                  height={isMobile ? 110 * 0.4 : 110 * 0.6}
                  alt='agua mineral canaima'
                  priority={true}
                />
              </Link>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {MENU_ITEMS.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <>
                        <MenuItem
                          onClick={handleMenuOpen}
                          sx={{ py: '6px', px: '12px' }}
                        >
                          <Typography
                            variant='subtitle1'
                            color='text.secondary'
                            fontWeight='bold'
                          >
                            {item.title}
                          </Typography>
                        </MenuItem>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                          PaperProps={{ sx: { bgcolor: brand[50] } }}
                        >
                          {item.submenu.map((subItem) => (
                            <MenuItem
                              key={subItem.id}
                              component={Link}
                              href={subItem.value}
                              onClick={handleMenuClose}
                              sx={{ py: '6px', px: '12px' }}
                            >
                              <Typography
                                variant='subtitle1'
                                color='text.primary'
                              >
                                {subItem.title}
                              </Typography>
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
                    ) : (
                      <MenuItem
                        //onClick={() => scrollToSection(item.value)}
                        component={Link}
                        href={item.value}
                        onClick={() => setOpen(false)}
                        sx={{ py: '6px', px: '12px' }}
                      >
                        <Typography
                          variant='subtitle1'
                          color='text.secondary'
                          fontWeight='bold'
                        >
                          {item.title}
                        </Typography>
                      </MenuItem>
                    )}
                  </div>
                ))}
                <MenuItem
                  onClick={handleOpenContactForm}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    fontWeight='bold'
                  >
                    CONTACTO
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box sx={{ display: { xs: '', md: 'none' } }}>
              <Button
                variant='text'
                color='primary'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon fontSize='large' />
              </Button>
              <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Image
                    src='/assets/logos/logo-canaima-topnav.png'
                    width={299 * 0.4}
                    height={110 * 0.4}
                    alt='agua mineral canaima'
                    priority={true}
                  />
                  {MENU_ITEMS.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <>
                          <MenuItem
                            onClick={handleMenuOpen}
                            sx={{ py: '6px', px: '12px' }}
                          >
                            <Typography
                              variant='subtitle1'
                              color='text.primary'
                            >
                              {item.title}
                            </Typography>
                          </MenuItem>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                          >
                            {item.submenu.map((subItem) => (
                              <MenuItem
                                key={subItem.id}
                                component={Link}
                                href={subItem.value}
                                onClick={() => {
                                  setOpen(false), setAnchorEl(null);
                                }}
                                sx={{ py: '6px', px: '12px' }}
                              >
                                <Typography
                                  variant='subtitle1'
                                  color='text.primary'
                                >
                                  {subItem.title}
                                </Typography>
                              </MenuItem>
                            ))}
                          </Menu>
                        </>
                      ) : (
                        <MenuItem
                          //onClick={() => scrollToSection(item.value)}
                          component={Link}
                          href={item.value}
                          sx={{ py: '6px', px: '12px' }}
                        >
                          <Typography
                            variant='subtitle1'
                            color='text.primary'
                          >
                            {item.title}
                          </Typography>
                        </MenuItem>
                      )}
                    </div>
                  ))}
                  <MenuItem
                    onClick={handleOpenContactForm}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography
                      variant='subtitle1'
                      color='text.primary'
                    >
                      CONTACTO
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <Typography
                    variant='subtitle1'
                    fontWeight='bold'
                    color='text.secondary'
                  >
                    Redes Sociales
                  </Typography>
                  <Grid
                    container
                    direction='column'
                    justifyContent='left'
                  >
                    {RRSS.map((item) => (
                      <Grid
                        size={{ xs: 12, md: 12 }}
                        key={item.id}
                        container
                        direction='row'
                        justifyContent='left'
                        alignItems='center'
                      >
                        <IconButton
                          href={item.url}
                          target='_blank'
                          aria-label='rrss'
                          sx={{ alignSelf: 'center', color: 'text.secondary' }}
                        >
                          {item.icon}
                          <Typography
                            variant='subtitle1'
                            color='text.secondary'
                            sx={{ ml: 1 }}
                          >
                            {item.profile}
                          </Typography>
                        </IconButton>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ContactForm
        open={openContactForm}
        handleClose={handleCloseContactForm}
      />
    </>
  );
};
