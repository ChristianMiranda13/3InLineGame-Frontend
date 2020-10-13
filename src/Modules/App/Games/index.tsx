import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { isUndefined } from 'lodash';
import moment from 'moment';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../../Components/Header';
import { IGamesClasses, styles } from './GamesStyle';

interface IGamesProps extends IGamesClasses {
  get_games: () => Promise<void>;
  games: IGame[];
}

interface IGamesState {
  redirectGame: string;
  redirectGameCreate: boolean;
}

class Games extends React.Component<IGamesProps, IGamesState> {
  constructor(props: IGamesProps) {
    super(props);

    this.state = {
      redirectGame: '',
      redirectGameCreate: false,
    };

    this.redirectGame = this.redirectGame.bind(this);
    this.redirectGameCreate = this.redirectGameCreate.bind(this);
  }

  redirectGame(id: string) {
    this.setState({
      redirectGame: id,
    });
  }

  redirectGameCreate() {
    this.setState({
      redirectGameCreate: true,
    });
  }

  async componentDidMount() {
    await this.props.get_games();
  }

  render() {
    const { redirectGame, redirectGameCreate } = this.state;
    if (redirectGame) {
      return <Redirect to={`/game/create/${redirectGame}`} push />;
    }
    if (redirectGameCreate) {
      return <Redirect to={`/game/create`} push />;
    }

    let { games } = this.props;

    if (isUndefined(games)) {
      games = [];
    }
    return (
      <div>
        <Header />
        <div style={styles.gamesTable}>
          <Grid container style={{ margin: '25px 0' }}>
            <Grid item xs={2}>
              <Button variant={'contained'} color={'primary'}
                onClick={this.redirectGameCreate} fullWidth>
                New Game
                </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>Winner</TableCell>
                  <TableCell>Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  games.map((game, index) => {
                    return (
                      <TableRow key={index.toString()} className={this.props.classes.clickHoverRow}
                        onClick={(e) => this.redirectGame(game.id)}>
                        <TableCell component='th' scope='row'>
                          {game.status}
                        </TableCell>
                        <TableCell>
                          {game.winner === 'waiting' ? `Pending` :
                            game.winner === 'draw' ? game.winner : `Player ${game.winner}`}
                        </TableCell>
                        <TableCell>
                          {moment(game.createdAt).format('DD/MM/YYYY HH:mm:ss')}
                        </TableCell>
                      </TableRow>
                    );
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default withStyles({
  ...styles, tab: {
    textTransform: 'none',
  },
})(Games);
