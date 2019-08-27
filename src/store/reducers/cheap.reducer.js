import initState from './../../units/init.state';
import * as reducerType from '../../units/reducer.type';

const cheap = (state = initState, action) => {
	switch (action.type) {
		case reducerType.SET_CHEAP:
			return Object.assign({}, state, action.general);
		default:
			return state;
	}
};

export default cheap;