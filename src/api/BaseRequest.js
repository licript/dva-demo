import axios from 'axios';

let config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    withCredentials: true,
    timeout: 5000
};

let baseRequest = ({ method, url = '', params = {}, data = {} } = {}) => {
    if (method === 'GET') {
        params = { ...params } // ts: +new Date()
    }
    let options = {
        method: method,
        url: url,
        params: params,
        // data: obj2str(data),
        data: data,
        ...config
    };
    return axios.request(options);
};

axios.interceptors.request.use(
    function (config) {
        // console.log('interceptors request success');
        // console.log(config);
        return config;
    },
    function (error) {
        // console.log('interceptors request error');
        // console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        let status = response.status
        // console.log("interceptors response success");

        if (status === 200) {
            return response.data;
        } else {
            return Promise.reject(new Error('ret != 0'));
        }
    },
    function (error) {
        // let msg = error.response.data.message
        // message.warn(msg, 3)
        // console.log("interceptors response error");
        // console.log(error);
        return Promise.reject(error);
    }
);

// function obj2str(data) {
//   let arr = [];
//   Object.keys(data).forEach(key => {
//     arr.push(`${key}=${data[key]}`);
//   });
//   return arr.join('&');
// }

export default {
    get: ({ method = 'GET', url }) => ({ query: params, body: data } = {}) =>
        baseRequest({ method, url, params, data }),
    post: ({ method = 'POST', url }) => ({ query: params, body: data } = {}) =>
        baseRequest({ method, url, params, data }),
    put: ({ method = 'PUT', url }) => ({ query: params, body: data } = {}) =>
        baseRequest({ method, url, params, data }),
    delete: ({ method = 'DELETE', url }) => ({
                                                 query: params,
                                                 body: data
                                             } = {}) => baseRequest({ method, url, params, data })
};
