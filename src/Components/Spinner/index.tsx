import React from 'react';

// Material Comps
import CircularProgress from '@material-ui/core/CircularProgress';

class Spinner extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className='modal centerChilds'>
        <CircularProgress size={60} />
      </div>
    );
  }
}

export default Spinner;
