import * as axios from 'axios'

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : '9b882e99-2ec5-4a53-bb25-cf1446af374e'},
})

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => {
           return response.data});
    },
    getUnFollow (id) {
    return instance.delete(`follow/${id}`)
    },
    getFollow (id) {
        return instance.post(`follow/${id}`)
    },
    getUserId (userId) {
        return instance.get(`profile/` + userId)
    },
    getMe () {
        return instance.get(`auth/me`)
    },
}

