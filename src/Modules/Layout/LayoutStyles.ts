// Material Styles
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

const drawerWidth = 257;

const styles = (theme: Theme) => createStyles({
  layoutContainer: {
    paddingRight: 'env(safe-area-inset-right)',
    marginTop: 20,
    marginRight: 15,
    marginLeft: drawerWidth + 15,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 15,
    },
    overflow: 'scroll',
    height: 'calc(100% - 84px)',
  },
  layoutContainerWithMargin: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: theme.spacing(9) + 15,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 15,
    },
  },
});

export default styles;
