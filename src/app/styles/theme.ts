'use client';

import { createTheme } from '@mui/material/styles';

import { robotoCondensed } from './fonts';

const theme = createTheme({
  typography: {
    fontFamily: robotoCondensed.style.fontFamily,
  },
});

export default theme;
