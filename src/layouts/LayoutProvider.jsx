'use client';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getCustomTheme from '@/styles/getCustomTheme';
import { Footer } from '@/layouts/Footer';
import { TopNav } from '@/layouts/TopNav';

const theme = createTheme(getCustomTheme('light'));

const LayoutProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <TopNav /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutProvider;
