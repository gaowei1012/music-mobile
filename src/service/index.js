import React from 'react';
import axios from 'axios';
// import urls from './urls';

export default class BaseServer {
    static ajax(option) {

        option.baseURL = 'http://118.126.113.19:3000'

        return new Promise((resolve, reject) => {
            axios({
                method: option.method,
                url: option.url,
                data: option.data,
                timeout: 8000,
                baseURL: option.baseURL
            }).then(resopnse => {
                if (resopnse.status === 200) {
                    console.log(resopnse)
                    let result = resopnse.data;
                    // console.log(result)
                    if (result.error) {
                        console.error(result.error.message)
                    }
                    resolve(result)
                } else {
                    reject(resopnse.data)
                }
            }).catch((error) => {
                console.log(`request URL${error}`)
            })
        })
    }

}