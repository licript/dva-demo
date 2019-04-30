import request from './BaseRequest'
//article
const article ={
    getArticle: request.get({
        url: `/article/`
    }),
    createArticle: request.post({
        url: `/article/create`
    })
}

let api = {
    ...article
}

export default api
