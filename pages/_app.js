import React from 'react';
import PropTypes from 'prop-types';
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from "../utility/createEmotionCache";
import Theme from '../styles/Theme/lightTheme';
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const {Component, emotionCache = clientSideEmotionCache,pageProps} = props;

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object.isRequired
};
