import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import games from '.';
import {
  get_games,
} from '../../../Reducers/Game/GameActions';

const mapStateToProps = (state: IRootState) => {
  return {
    games: state.game.games,
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
  get_games,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(games);
