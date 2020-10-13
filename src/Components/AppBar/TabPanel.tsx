import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';

interface IProps {
  value: any;
  index: any;
  children?: React.ReactNode;
}

class TabPanel extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { value, index, children } = this.props;
    return (
      <Typography
        component='div'
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
}

export default TabPanel;
