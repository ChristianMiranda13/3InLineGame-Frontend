import React from 'react';

// MaterialIcons
import {
  CheckCircle,
  Close,
  Dashboard,
  Error as ErrorIcon,
  Info,
  ViewList,
  Warning,
} from '@material-ui/icons';
import { CSSProperties } from '@material-ui/styles';

export type GeneralIconsType = 'dashboard' | 'viewList' | 'checkSnack' | 'warningSnack' | 'errorSnack' | 'infoSnack' | 'closeSnack';

const getIconBy = (name: GeneralIconsType, fontSize?: string, color?: string, stylesIcon?: CSSProperties, className?: string) => {
  // tslint:disable-next-line: variable-name
  let MyComponent: any = null;
  switch (name) {
    case 'dashboard':
      MyComponent = Dashboard;
      break;
    case 'viewList':
      MyComponent = ViewList;
      break;
    case 'checkSnack':
      MyComponent = CheckCircle;
      break;
    case 'warningSnack':
      MyComponent = Warning;
      break;
    case 'errorSnack':
      MyComponent = ErrorIcon;
      break;
    case 'infoSnack':
      MyComponent = Info;
      break;
    case 'closeSnack':
      MyComponent = Close;
      break;
    default:
      break;
  }

  if (!color) {
    color = undefined;
  }

  return <MyComponent fontSize={fontSize} style={stylesIcon} color={color} className={className} />;
};

export default {
  material_bg: 'assets/material_bg.png', // Using assets because needs use the transpiled image. See `CopyWebpackPlugin` in webpack.config file
  talenta_logo: 'assets/talenta.png',
  getIconBy,
};
