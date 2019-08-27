import initState from './../../units/init.state';

const general = (state = initState, action) => {
	return Object.assign({}, state, action.general);
}

export default general;