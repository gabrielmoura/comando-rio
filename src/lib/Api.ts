/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

const axios = require('axios');
import {format, hoursToSeconds, subDays} from 'date-fns'
import {getToken, hasToken, setToken} from './cache'

export default class Api {
    private readonly baseURL: string;
    private username: string;
    private password: string;
    private readonly dataBusca: Date | number;
    private token: string | null;

    constructor(username, password, baseURL = 'http://ws.status.rio') {
        this.baseURL = baseURL;
        this.username = username;
        this.password = password;
        this.dataBusca = new Date();
    }


    async autorization() {
        if (!await hasToken()) {
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
                setToken(r.data as string, hoursToSeconds(24) * 9);
                this.token = r.data;
                if (process.env.NODE_ENV !== "production") {
                    console.log(r);
                }
            }).catch(err => {
                console.error(err);
            });
        } else {
            // Havendo Token definir na API.
            this.token = await getToken();
        }
    }

    async getData(func) {
        if (this.token) {
            axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventos`,
                headers: {
                    'Authorization': this.token,
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
        if (this.token) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventos`,
                headers: {
                    'Authorization': this.token,
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
        if (this.token) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventosAbertos`,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                }
            })
        }

    }

    async getActivity(eventoId) {
        if (this.token) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarAtividadesDoEvento?eventoId=${eventoId}`,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}