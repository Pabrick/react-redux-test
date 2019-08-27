import * as reducerType from '../../units/reducer.type';

const initState = {
	cheap: false,
	fast: true,
	good: true
};

const general = (state = initState, action) => {
	switch (action.type) {
		case reducerType.SET_CHEAP:
			return Object.assign({}, state, {
				cheap: action.cheap
			});
		case reducerType.SET_FAST:
			return Object.assign({}, state, {
				fast: action.fast
			});
		case reducerType.SET_GOOD:
			return Object.assign({}, state, {
				good: action.good
			});
		default:
			return state;
	}
};

export default general;