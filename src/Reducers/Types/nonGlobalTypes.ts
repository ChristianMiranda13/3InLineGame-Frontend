// Material Components
import { ButtonProps } from '@material-ui/core/Button';
import { TextFieldProps } from '@material-ui/core/TextField';

declare global {
  type IFieldForm2 = ButtonProps | TextFieldProps;

  type FormType = 'textfield' | 'button';

  interface IBaseForm {
    formType: FormType;
    buttonContent?: any;
  }

  interface IButtonsForms extends ButtonProps, IBaseForm { }

  type ITextFieldForms = TextFieldProps & IBaseForm;

  type IFieldForm = IButtonsForms | ITextFieldForms;
}
