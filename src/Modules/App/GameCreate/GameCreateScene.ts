import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gameCreate from '.';
import {
  get_games,
} from '../../../Reducers/Game/GameActions';

const mapStateToProps = (state: IRootState) => {
  return {
    app: state.app,
    Games: state.game.games,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
  get_games,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(gameCreate);
