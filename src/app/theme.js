import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#427aa1',
    },
    secondary: {
      main: '#7d98a1',
    },
    background: {
      default: '#e8f0ff',
      paper: '#eef1ef',
      table: '#dfe0e2',
    },
  },
});

export default theme;
