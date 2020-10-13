interface IManageSnackBarType {
  icon: any;
  position: {
    vertical: VerticalType;
    horizontal: HorizontalType;
  };
  direction: 'left' | 'right' | 'up' | 'down';
}

type VerticalType = 'bottom' | 'top';
type HorizontalType = 'left' | 'right' | 'center';
