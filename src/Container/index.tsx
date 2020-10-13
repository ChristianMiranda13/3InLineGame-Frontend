// Modules
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Layout from '../Modules/Layout/LayoutScene';

class Container extends React.Component {

  //#region LifeCycle
  render() {
    return (
      <div style={{ height: '100%' }}>
        {
          <Layout />
        }
      </div>
    );
  }
  //#endregion Render Functions
}

export default withStyles({
  tab: {
    textTransform: 'none',
  },
})(Container);
