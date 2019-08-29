import { connect } from 'react-redux';

import IconProject from '../components/IconProject';

const getIcon = (general) => {
  if(!general.good) {
    return "💩";
  } else if(!general.cheap) {
    return "💰";
  } else if(!general.fast) {
    return "🐌";
  }
}
const mapStateToProps = state => ({
  icon: getIcon(state.general)
});

export default connect(
  mapStateToProps
)(IconProject);