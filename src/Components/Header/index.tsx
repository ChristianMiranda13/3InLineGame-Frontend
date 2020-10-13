// Material UI.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typepography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './HeaderStyles';

// tslint:disable-next-line: no-empty-interface
interface IProps {
}

interface IHeaderState {
  redirectHome: boolean;
}

class Header extends React.Component<IProps, IHeaderState> {

  constructor(props: any) {
    super(props);

    this.goHome = this.goHome.bind(this);

  }

  goHome() {
    this.setState({
      redirectHome: true,
    }, () => {
      this.setState({
        redirectHome: false,
      });
    });
  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to={'/'} push />;
    }
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position='static'>
          
        </AppBar>
      </div >
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
  };
};

export default connect(mapStateToProps)(Header);
