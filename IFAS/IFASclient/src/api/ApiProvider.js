import $ from 'jquery'
import config from '../config/conf'

class ApiProvider {
    constructor() {
        this.apiUrl = config.apiUrl
    }

    get(serviceUrl, reqData) {
        let url = this.apiUrl + "/" + serviceUrl;
        return new Promise((resolve, reject) => {
            $.get(url, reqData)
                .done((data) => {
                    resolve(data);
                })
                .fail((data) => {
                    reject(data);
                })
        })
    }
}

export default new ApiProvider();