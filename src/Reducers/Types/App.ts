// Apps
interface IAppReducerType {
  spinnerValue: ISpinnerType;
  lastAction: string;
  showPopUpWarnImportProd: boolean;
  error?: string;
}

interface IDialogWindowTypes {
  show: boolean;
  type: DialogType;
  title?: string;
  message?: string;
  action?: string;
  serviceError?: string;
  formStructure?: IFormStructure;
}

interface IFormStructure {
  fieldForms?: IFieldForm[];
  actionButtons?: Array<import('@material-ui/core/Button').ButtonProps>;
  customComponentsForm?: JSX.Element;
}

type DialogType = 'dialog' | 'form' | 'error' | 'info' | 'success' | 'warning' | null;

type SpinnerStatesType = 'none' | 'show' | 'paging';

interface ISpinnerType {
  type: SpinnerStatesType;
  timeDeep?: number;
}

interface IObjectDialog {
  snackbar?: IDialogWindowTypes;
  dialogForm?: IDialogWindowTypes;
}

declare interface IError {
  show: boolean;
  type: string;
  title: string;
  serviceError: string;
}
