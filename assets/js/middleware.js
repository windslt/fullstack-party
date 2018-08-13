import {ASYNC_END, ASYNC_START} from "./reducers/actionTypes";

const promiseMiddleware = store => next => action => {
	if (isPromise(action.payload)) {
		store.dispatch({type: ASYNC_START, subtype: action.type});

		action.payload.then(
			res => {
				action.payload = res;
				store.dispatch({type: ASYNC_END, promise: action.payload});
				store.dispatch(action);
			},
			error => {
				action.error = true;
				action.payload = error.response.body;

				store.dispatch({type: ASYNC_END, promise: action.payload});
				store.dispatch(action);
			}
		)
		.catch(error => {
			console.log('CATCH', error);
		});

		return action.payload;
	}

	next(action);
};

function isPromise(v) {
	return v && typeof v.then === 'function';
}

export {promiseMiddleware}
