import React from 'react';

// Libraries
import { map } from 'lodash';

// Material Core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Material Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

// Styles
import withStyles from '@material-ui/core/styles/withStyles';
import DialogWindowStyles from './DialogWindowStyles';

interface IProps {
  dialogWindow: IDialogWindowTypes;
  open: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  onClose?: (dialogObj: IDialogWindowTypes) => any;
}

interface IStateDialog {
  dialogWindowObj: IDialogWindowTypes;
}

class DialogWindow extends React.Component<IProps, IStateDialog> {

  //#region LifeCycle
  constructor(props: IProps) {
    super(props);

    this.state = {
      dialogWindowObj: this.props.dialogWindow,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(props: IProps, state: IStateDialog) {
    if (state.dialogWindowObj !== props.dialogWindow) {
      return {
        dialogWindowObj: props.dialogWindow,
      };
    }

    return null;
  }
  //#endregion LifeCycle

  //#region Functions
  /**
   * This function is used for select the icon to load in the Snackbar and the rendering position
   * @param type: The available types of alerts
   */
  manageSnackBar(type: DialogType): IManageSnackBarType {
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
        obj.icon = CheckCircleIcon;
        obj.direction = 'down';
        return obj;
      case 'warning':
        obj.icon = WarningIcon;
        obj.position = {
          vertical: 'bottom',
          horizontal: 'right',
        };
        obj.direction = 'left';
        return obj;
      case 'error':
        obj.icon = ErrorIcon;
        obj.position = {
          vertical: 'bottom',
          horizontal: 'center',
        };
        return obj;
      case 'info':
        obj.icon = InfoIcon;
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
    this.props.onClose(this.state.dialogWindowObj);
  }
  //#endregion Actions

  //#region Render Functions
  renderDialog() {
    const maxWidth = this.props.maxWidth !== undefined ? this.props.maxWidth : 'sm';
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        PaperProps={{ style: { overflowY: 'visible' } }}
        maxWidth={maxWidth}
      >
        <DialogTitle id='alert-dialog-title'>{this.state.dialogWindowObj.title ? this.state.dialogWindowObj.title : 'Alert!'}</DialogTitle>
        <DialogContent style={{ overflowY: 'auto' }}>
          {this.renderDialogType()}
        </DialogContent>
        <DialogActions>
          {this.renderActionButtons()}
        </DialogActions>
      </Dialog>
    );
  }

  renderDialogType() {
    const { dialogWindowObj } = this.state;
    if (dialogWindowObj.type === 'dialog') {
      return (
        < DialogContentText id='alert-dialog-description' >
          {dialogWindowObj.message}
        </DialogContentText >
      );
    }

    if (dialogWindowObj.formStructure.customComponentsForm) {
      return (
        <Grid container>
          {dialogWindowObj.formStructure.customComponentsForm}
        </Grid>
      );
    }

    return (
      <Grid container spacing={5}>
        {this.renderFieldsForm(dialogWindowObj.formStructure.fieldForms)}
      </Grid>
    );
  }

  renderFieldsForm(fields: IFieldForm[]) {
    return map(fields, (field: IFieldForm, index: number) => {
      return (
        <Grid key={index} item xs={12}>
          {this.renderFieldType(field)}
        </Grid>
      );
    });
  }

  renderFieldType(field: IFieldForm) {
    const { type, buttonContent, ...all } = field;

    if (type === 'textfield') {
      const allProps: any = all; // Pending Verify
      return (
        <TextField {...allProps} />
      );
    }

    const allButtonVals: any = { ...all }; // Because some types are equals in TextFields and Buttons. Example: `variant`
    return (
      <Button {...allButtonVals}>
        {buttonContent}
      </Button>
    );
  }

  // actionButtons
  renderActionButtons() {
    const { dialogWindowObj } = this.state;
    const actionButtons = dialogWindowObj.formStructure && dialogWindowObj.formStructure.actionButtons;

    if (actionButtons) {
      return map(actionButtons, (actionButton, index: number) => {
        const { children, ...all } = actionButton;
        return (
          <Button key={index} {...all}>
            {children}
          </Button>
        );
      });
    }

    return (
      <Button onClick={this.handleClose} color='primary' autoFocus>
        {'Close'}
      </Button>
    );
  }

  render() {
    return (
      <div>
        {this.renderDialog()}
      </div>
    );
  }
  //#endregion Render Functions
}

export default withStyles(DialogWindowStyles, { withTheme: true })(DialogWindow) as typeof DialogWindow;
