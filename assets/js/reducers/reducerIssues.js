import {LOAD_ISSUES, LOAD_ISSUES_COUNT} from "./actionTypes";

export default (state = [], action) => {
	switch (action.type) {
		case LOAD_ISSUES:
			return Object.assign({}, state, {items: action.payload});
		case LOAD_ISSUES_COUNT:
			return Object.assign({}, state, {counts: action.payload});
		default:
			return state;
	}
};
