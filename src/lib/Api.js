import axios from 'axios';
import moment from 'moment';

module.exports = class Api {
    token;

    constructor(username, password, baseURL = 'http://geoportal.cor.rio.gov.br') {
        this.baseURL = baseURL;
        this.username = username;
        this.password = password;
        this.dataBusca = new Date();
    }

    getToken() {
        return this.token;
    }

    async autorization() {
       await axios({
            method: 'post',
            baseURL: this.baseURL,
            url: '/corws/login',
            headers: {"Content-Type": "application/json"},
            data: {
                username: this.username,
                password: this.password
            }
        }).then(r => {
            this.token = r.data;
        }).catch(err => {
            console.error(err);
        });
    }

    async getData(func) {
        if (!!this.token) {
            axios({
                method: 'post',
                baseURL: this.baseURL,
                url: '/statuscomando/v2/listarEventos',
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                },
                data: {
                    "inicio": moment(this.dataBusca).subtract(29, 'days').format('YYYY-MM-DD 00:00:00.0'),
                }
            }).then(r => {
                    func(r.data);
            }).catch(err => {
                console.error(err);
            });
        }

    }
}