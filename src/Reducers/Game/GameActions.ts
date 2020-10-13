import to from 'await-to-js';
import executeRequest from '../../Services/ServiceBase';
import {
  set_error_request,
  set_last_action,
} from '../App/AppActions';

export enum GameActionTypes {
  GET_GAMES = 'game/GET_GAMES',
}

export const set_games_data = (data: IObj): IAction => ({ type: GameActionTypes.GET_GAMES, value: data });

export const get_game = async (gameId: string) => {
  const [error, gameresponse] = await to(executeRequest(`game/${gameId}`, null, 'get'));
  if (error) {
    throw error;
  }

  return gameresponse.data;
};

interface IGetGamesResponse {
  data: IGame[];
}

export const get_games = () => {
  return async (dispatch: any) => {
    dispatch(set_last_action('GET_GAMES'));
    const [error, games] = await to<IGetGamesResponse>(executeRequest(`games`, null, 'get'));
    if (error) {
      return dispatch(set_error_request(error.message));
    }

    dispatch(set_error_request(''));
    return dispatch(set_games_data({ games: games.data }));
  };
};

interface INewGame {
  status: string;
  winner: string;
  board: string[];
  currentTurn: string;
  createdAt?: Date;
  updateAt?: Date;
}

export const create_game = async (game: INewGame) => {
  if (!game.status) {
    throw new Error('Game has no status!');
  }

  if (!game.currentTurn) {
    throw new Error('Game has no plcurrentTurnatform!');
  }

  if (!game.board) {
    throw new Error('Game has no movements!');
  }

  const [error, gameresponse] = await to(executeRequest(`game`, game, 'post'));
  if (error) {
    throw error;
  }

  return gameresponse.data;

};

export const update_game = async (game: IGame) => {
  if (!game.id) {
    throw new Error('Game has no id!');
  }

  if (!game.status) {
    throw new Error('Game has no status!');
  }

  if (!game.currentTurn) {
    throw new Error('Game has no currentTurn!');
  }

  if (!game.board) {
    throw new Error('Game has no movements!');
  }

  const [error, gameresponse] = await to(executeRequest(`game/${game.id}`, game, 'put'));
  if (error) {
    throw error;
  }

  return gameresponse.data;
};
