
// Material Components
// Colors
import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';

// Styles
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) => createStyles({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
});

export default styles;
