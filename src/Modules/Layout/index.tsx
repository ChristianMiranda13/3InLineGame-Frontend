// Libraries
import awaitToJs from 'await-to-js';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Material Styles
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';

import GameCreate from '../App/GameCreate/GameCreateScene';
import Games from '../App/Games/GamesScene';

// Styles
import ThemeDefault from '../theme-default';
import LayoutStyles from './LayoutStyles';

interface ILayoutProps {
  get_games: () => Promise<void>;
  game: IObj;
}

class Layout extends React.Component<ILayoutProps> {

  async componentDidMount() {
    if (this.props.game.games.length === 0) {
      await awaitToJs(this.props.get_games());
    }

  }

  render() {
    return (
      <MuiThemeProvider theme={ThemeDefault}>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Games} />
            <Route path={'/games'} component={Games} />
            <Route path={'/game/create/:gameId?'} component={GameCreate} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(LayoutStyles, { withTheme: true })(Layout);
