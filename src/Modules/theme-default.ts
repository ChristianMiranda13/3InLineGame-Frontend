import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Colors } from '../Theme';

const themeDefault = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primaryMain,
    },
  },
  overrides: {
    MuiButton: {
      // raisedPrimary: { // Pending Verify
      //   backgroundColor: Colors.blueButton,
      //   '&:hover': {
      //     backgroundColor: Colors.blueHoverButton
      //   }
      // }
    },
  },
});

export default themeDefault;
