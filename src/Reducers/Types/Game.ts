interface IGameReducerType {
  games: IGame[];
}

interface IGame {
  id: string;
  currentTurn: string;
  status: string;
  board: string[];
  winner: string;
  createdAt: Date;
  updateAt: Date;
}
