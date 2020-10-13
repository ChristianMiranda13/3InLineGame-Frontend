import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import container from '.';

const mapStateToProps = (state: IRootState) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(container);
