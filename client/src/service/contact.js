import axios from "axios";

export function getInfo() {
    return axios.get('/info/')
}

export function addInfo(data) {
    return axios.post(`/info/`, data)
}