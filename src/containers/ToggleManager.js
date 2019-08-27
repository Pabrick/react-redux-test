import { connect } from 'react-redux'
import { setCheap } from './../store/actions/setCheap.action';
import ToggleProjectButton from '../components/ToggleProjectButton'

const mapStateToProps = (state, props) => ({
  active: props.name === state.cheap
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setCheap(props.name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleProjectButton)