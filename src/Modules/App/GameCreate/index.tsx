import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import Header from '../../../Components/Header';
import SnackbarComponent from '../../../Components/SnackbarComponent';
import { create_game, get_game, update_game } from '../../../Reducers/Game/GameActions';
import { IGameCreateClasses, styles } from './GameCreateStyle';

interface IGameCreateProps extends IGameCreateClasses, RouteComponentProps<{ gameId?: string }> {
  games: IGame[];
}

interface IShowAlert {
  show: boolean;
  message: string;
  type: DialogType;
}

interface IGameCreateState {
  game: IGame;
  redirectGameCreate: boolean;
  isLoading: boolean;
  showAlert: IShowAlert;
  playerOne: string;
  playerTwo: string;
}

class GameCreate extends React.Component<IGameCreateProps, IGameCreateState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: false,
      redirectGameCreate: false,
      playerOne: 'X',
      playerTwo: 'O',
      game: {
        id: '',
        status: 'started',
        winner: 'waiting',
        board: ['', '', '', '', '', '', '', '', ''],
        currentTurn: 'X',
        createdAt: null,
        updateAt: null,
      },
      showAlert: { show: false, message: '', type: null },
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.showSnackbar = this.showSnackbar.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.redirectGameCreate = this.redirectGameCreate.bind(this);

  }

  async componentDidMount() {
    const gameId = this.props.match.params.gameId;

    try {
      if (gameId) {
        const gameRecord = await get_game(gameId);

        this.setState({
          game: { ...gameRecord },
        });
      }

    } catch (e) {
      const err = `Could not get game with id: ${gameId}`;
      this.setState({
        showAlert: { show: true, message: err, type: 'error' },
      });
    }
  }

  handleErrorClose() {
    const showAlert: IShowAlert = { show: false, message: '', type: null };
    this.setState({ showAlert });
  }

  showSnackbar() {
    const { showAlert } = this.state;
    const { type, message, show } = showAlert;
    if (show) {
      const objSnackBar: IDialogWindowTypes = { show, type, message };

      return (
        <SnackbarComponent
          dialogWindow={objSnackBar}
          open={objSnackBar.show}
          onClose={this.handleErrorClose}
        />
      );

    }
  }

  async handleSave(newGame: IGame) {

    try {
      const gameRecord = await create_game(newGame);

      const nextTurn = this.state.game.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne;
      this.setState({
        game: { ...gameRecord, currentTurn: nextTurn },
      });

    } catch (e) {
      const err = `Could not create the new game, ${e.message}`;
      this.setState({
        showAlert: { show: true, message: err, type: 'error' },
      });
    }
  }

  async handleUpdate(game: IGame) {

    try {
      const gameRecord = await update_game(game);

      const nextTurn = this.state.game.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne;

      let msg = '';
      let draw = false;
      let shouldShow = false;
      if (gameRecord && gameRecord.winner !== 'waiting' && gameRecord.winner !== 'none') {
        msg = `Congratulations player ${gameRecord.currentTurn}, you are the winner!`;
        shouldShow = true;
      } else if (gameRecord && gameRecord.winner === 'none') {
        msg = `The game was DRAW!`;
        shouldShow = true;
        draw = true;
      }

      this.setState({
        game: { ...gameRecord, currentTurn: nextTurn },
        showAlert: {
          show: shouldShow, message: msg, type: draw ? 'warning' : 'success',
        },
      });

    } catch (e) {
      const err = `Could not save the new movement, ${e.message}`;
      this.setState({
        showAlert: { show: true, message: err, type: 'error' },
      });
    }

  }

  handleClick(index: number) {
    if (this.state.game.board[index] === '' && this.state.game.winner === 'waiting') {
      this.state.game.board[index] = this.state.game.currentTurn;
      const newboard = this.state.game.board;
      newboard[index] = this.state.game.currentTurn;

      const gameData: IGame = {
        ...this.state.game,
        board: newboard,
        currentTurn: this.state.game.currentTurn,
        status: this.state.game.status,
      };

      if (this.state.game.id) {
        this.handleUpdate(gameData);
        return;
      }

      this.handleSave(gameData);
      return;
    }

    if (this.state.game.winner !== 'waiting') {

      const msg = 'The game is Over!';

      this.setState({
        showAlert: { show: true, message: msg, type: 'warning' },
      });
    }

  }

  redirectGameCreate() {

    const gameId = this.props.match.params.gameId;
    if (gameId) {

      this.setState({
        redirectGameCreate: true,
        game: {
          id: '',
          status: 'started',
          winner: 'waiting',
          board: ['', '', '', '', '', '', '', '', ''],
          currentTurn: 'X',
          createdAt: null,
          updateAt: null,
        },
      }, () => {
        this.setState({
          redirectGameCreate: false,
        });
      });
    } else {

      this.setState({
        game: {
          id: '',
          status: 'started',
          winner: 'waiting',
          board: ['', '', '', '', '', '', '', '', ''],
          currentTurn: 'X',
          createdAt: null,
          updateAt: null,
        },
      });
    }

  }

  render() {
    const { game } = this.state;
    const { classes } = this.props;

    const { redirectGameCreate } = this.state;
    if (redirectGameCreate) {
      return <Redirect to={`/game/create`} push />;
    }

    return (
      <div>
        <Header />
        {this.showSnackbar()}
        <Grid container className={classes.parentContainer2}>
          {(game.status !== 'started' && game.winner === 'none') ? <Typography style={{ marginBottom: '30px' }}
            variant={'h1'}>The game is Draw</Typography> :
            (game.status !== 'started' && game.winner !== 'none') ? <Typography style={{ marginBottom: '30px' }}
              variant={'h1'}>The winner is: player {game.winner}</Typography> : null}

          {game.winner === 'waiting' ? <Grid item xs={12}>
            <Typography variant={'h4'}>Current Turn: {game.currentTurn}</Typography>
          </Grid> : <Grid item xs={12}>
              <Typography variant={'h4'}>Game is Over!</Typography>
            </Grid>}

          <Grid item>

            <Grid container spacing={0} className={classes.parentContainer} justify='center'>
              {
                game.board.map((cell, index) => {
                  return <Grid item xs={4} xl={4} md={4} key={index.toString()}
                    style={{ maxWidth: '100px', maxHeight: '100px' }} > <div key={`${index}`} onClick={() => this.handleClick(index)}
                      style={{
                        height: '100px',
                        width: '100px',
                        boxSizing: 'border-box',
                        border: '5px solid black',
                        fontSize: '5em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                      } className={classes.parentContainer}>{cell}</div></Grid>;
                })
              }
            </Grid>

          </Grid>

        </Grid>
        {game.winner !== 'waiting' ? <Grid item xs={2} container className={classes.button}>
          <Button variant={'contained'} color={'primary'}
            onClick={this.redirectGameCreate} fullWidth>
            New Game
                </Button>
        </Grid> : null}
      </div >
    );
  }
}

export default withStyles({
  ...styles,
})(GameCreate);
