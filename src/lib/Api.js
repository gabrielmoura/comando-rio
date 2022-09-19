/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

const axios = require('axios');
import {subDays, format, hoursToSeconds} from 'date-fns'
import {setToken, hasToken, getToken} from '../lib/cache'

module.exports = class Api {

    constructor(username, password, baseURL = 'http://ws.status.rio') {
        this.baseURL = baseURL;
        this.username = username;
        this.password = password;
        this.dataBusca = new Date();
    }


    async autorization() {

        if (!hasToken()) {
            await axios({
                method: 'post',
                baseURL: this.baseURL,
                url: '/corws/login',
                headers: {"Content-Type": "application/json"},
                data: {
                    username: this.username,
                    password: this.password
                }
            },).then(r => {
                setToken(r.data, hoursToSeconds(24) * 9);
                this.token = r.data;
                if (process.env.NODE_ENV !== "production") {
                    console.log(r);
                }
            }).catch(err => {
                console.error(err);
            });
        }
    }

    async getData(func) {
        if (hasToken()) {
            axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventos`,
                headers: {
                    'Authorization': await getToken(),
                    'Content-Type': 'application/json'
                },
                data: {
                    'inicio': format(subDays(this.dataBusca, 29), 'yyyy-MM-dd 00:00:00.0')
                }
            }).then(r => {
                if (process.env.NODE_ENV !== "production") {
                    console.log(r);
                }
                func(r.data);
            }).catch(err => {
                console.error(err);
            });
        }

    }

    async getClose(func) {
        if (hasToken()) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventos`,
                headers: {
                    'Authorization': await getToken(),
                    'Content-Type': 'application/json'
                },
                data: {
                    'inicio': format(this.dataBusca, 'yyyy-MM-dd 00:00:00.0'),
                    'status': 'FECHADO'
                }
            })
        }

    }

    async getOpen(func) {
        if (hasToken()) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventosAbertos`,
                headers: {
                    'Authorization': await getToken(),
                    'Content-Type': 'application/json'
                }
            })
        }

    }

    async getActivity(eventoId) {
        if (hasToken()) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarAtividadesDoEvento?eventoId=${eventoId}`,
                headers: {
                    'Authorization': await getToken(),
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}