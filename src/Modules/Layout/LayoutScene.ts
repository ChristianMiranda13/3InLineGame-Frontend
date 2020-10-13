import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import layout from '.';
import {
  get_games,
} from '../../Reducers/Game/GameActions';

const mapStateToProps = (state: IRootState) => {
  return {
    game: state.game,
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
  get_games,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(layout);
