import { connect } from 'react-redux';
import { setCheap } from '../store/actions/setCheap.action';
import { setFast } from '../store/actions/setFast.action';
import { setGood } from '../store/actions/setGood.action';

import ToggleProjectButton from '../components/ToggleProjectButton';

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    value: state.general[ownProps.name]
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    switch(ownProps.name) {
      case "cheap":
        return dispatch(setCheap());
      case "fast":
          return dispatch(setFast());
      case "good":
          return dispatch(setGood());
      default:
        break;
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleProjectButton);