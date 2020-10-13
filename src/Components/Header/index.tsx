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
  redirectGames: boolean;
}

class Header extends React.Component<IProps, IHeaderState> {

  constructor(props: any) {
    super(props);

    this.state = {
      redirectHome: false,
      redirectGames: false,
    };

    this.goHome = this.goHome.bind(this);
    this.goGames = this.goGames.bind(this);

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

  goGames() {
    this.setState({
      redirectGames: true,
    }, () => {
      this.setState({
        redirectGames: false,
      });
    });
  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to={'/'} push />;
    }
    if (this.state.redirectGames) {
      return <Redirect to={'/games'} push />;
    }

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <div style={styles.logoContainer}>
              <img style={styles.imgSt} src={'/assets/TALENTA.png'} onClick={this.goHome} />
              <Typepography style={styles.headerLink} onClick={this.goGames}>
                History
              </Typepography>
            </div>
          </Toolbar>
        </AppBar>
      </div >
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    games: state.game.games,
  };
};

export default connect(mapStateToProps)(Header);
