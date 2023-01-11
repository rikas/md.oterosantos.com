import { createTheme } from '@mui/material/styles';

const setupTheme = (darkmode) => {
  return createTheme({
    palette: {
      mode: darkmode ? 'dark' : 'light',
      primary: {
        main: '#006a58',
      },
      secondary: {
        main: '#ffb432',
      },
    },
    shape: {
      borderRadius: 0,
    },
  });
};

export default setupTheme;
