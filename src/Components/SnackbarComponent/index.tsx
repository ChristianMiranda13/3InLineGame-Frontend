import React from 'react';

// Libraries
import classNames from 'classnames';

// Material Core
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

// Styles
import withStyles from '@material-ui/core/styles/withStyles';
import Images from '../../Images';
import styles from './Styles';

interface IOwnProps {
  dialogWindow: IDialogWindowTypes;
  open: boolean;
  onClose?: (dialogObj: IDialogWindowTypes) => any;
  classes?: any;
}

class SnackBarComponent extends React.Component<IOwnProps> {
  //#region LifeCyle
  constructor(props: IOwnProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  //#endregion LifeCyle

  //#region Functions
  /**
   * This function is used for select the icon to load in the Snackbar and the rendering position
   * @param type: The available types of alerts
   */
  manageSnackBar(type: DialogType): IManageSnackBarType {
    const { classes } = this.props;

    const obj: IManageSnackBarType = {
      icon: null,
      position: {
        vertical: 'top',
        horizontal: 'right',
      },
      direction: 'up',
    };

    switch (type) {
      case 'success':
        obj.icon = Images.getIconBy('checkSnack', 'default', '', {}, classNames(classes[type], classes.margin));
        obj.direction = 'down';
        return obj;
      case 'warning':
        obj.icon = Images.getIconBy('warningSnack', 'default', '', {}, classNames(classes[type], classes.margin));
        obj.position = {
          vertical: 'bottom',
          horizontal: 'right',
        };
        obj.direction = 'left';
        return obj;
      case 'error':
        obj.icon = Images.getIconBy('errorSnack', 'default', '', {}, classNames(classes[type], classes.margin));
        obj.position = {
          vertical: 'bottom',
          horizontal: 'center',
        };
        return obj;
      case 'info':
        obj.icon = Images.getIconBy('infoSnack', 'default', '', {}, classNames(classes[type], classes.margin));
        obj.position = {
          vertical: 'top',
          horizontal: 'left',
        };
        obj.direction = 'down';
        return obj;
      default:
        return obj;
    }
  }
  //#endregion Functions

  //#region Actions
  handleClose() {
    this.props.onClose(this.props.dialogWindow);
  }
  //#endregion Actions

  renderSnackBar() {
    const { dialogWindow, classes } = this.props;
    const dialogType = dialogWindow.type;
    const { icon, position, direction } = this.manageSnackBar(dialogType);

    // tslint:disable-next-line: variable-name
    const Icon = icon; // To use as a component and pass `className` param only once
    return (
      <Snackbar
        style={{ marginTop: 40, width: '100%' }}
        TransitionComponent={(props) => <Slide {...props} direction={direction} />}
        anchorOrigin={position}
        open={dialogWindow.show}
        autoHideDuration={2500}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={classNames(classes[dialogType], classes.margin)}
          aria-describedby='client-snackbar'
          message={
            <span id='client-snackbar' className={classes.message}>
              {Icon}
              {dialogWindow.message}
            </span>
          }
          action={[
            <IconButton key='close' aria-label='Close' color='inherit' className={classes.close} onClick={this.handleClose}>
              {Images.getIconBy('closeSnack', 'default', '', { fontSize: 20 })}
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
  }

  render() {
    return this.renderSnackBar();
  }
}
//#endregion Render Functions

export default withStyles(styles)(SnackBarComponent) as typeof SnackBarComponent;
