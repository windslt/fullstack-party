import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = '/api';

const responseBody = res => res.body;

const requests = {
  get: (url, body) =>
    superagent.get(`${API_ROOT}${url}`, body).then(responseBody)
};

const Issues = {
  get: (data) =>
    requests.get('/issues', data),
	getCount: (data) =>
    requests.get('/issues/count', data)
};
const Issue = {
  get: () =>
    requests.get('/issue')
};

export default {
  Issues,
  Issue
};
