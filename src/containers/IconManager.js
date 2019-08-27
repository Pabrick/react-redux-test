import { connect } from 'react-redux';

import IconProject from '../components/IconProject';

const getIcon = (general) => {
  if(general.cheap && general.fast) {
    return "💩";
  } else if(general.fast && general.good) {
    return "💰";
  } else if(general.good && general.cheap) {
    return "🐌";
  }
}
const mapStateToProps = state => ({
  icon: getIcon(state.general)
});

export default connect(
  mapStateToProps
)(IconProject);