import api from '../api/index'

export default {
    namespace: 'article',
    state: [],
    subscription: {},
    effects: {
        //effects 相当于dispatch action
        *queryArticles({payload}, {select, call, put}) {
            let res = yield call(api.getArticle, payload);
            yield put({type: 'queryArticle', payload: res})
        },
    },
    reducers: {
        //redux 中的reducer 概念
        queryArticle(state, action) {
            console.log(action, 'action')
            return {...state, ...action.payload}
        }
    },
};