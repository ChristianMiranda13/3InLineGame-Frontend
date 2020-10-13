import { createCssStyle } from './Theme';

import grey from '@material-ui/core/colors/grey';

// Here define all your global styles and re-use based in `reUseStyle` using spread operator. Example in `dashboard->styles`
export default createCssStyle({
  navigation: {
    fontSize: 15,
    color: grey[600],
    marginBottom: 15,
    display: 'block',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  paper: {
    padding: 30,
  },
  clear: {
    clear: 'both',
  },
});
