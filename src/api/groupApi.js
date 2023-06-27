import http from '../utils/http'

const groupApi = {
    getListGroup(params) {
        return http.get('/group', { params: params })
    },
    addGroup(data, config) {
        return http.post('/group', data, config)
    },
    updateGroup(data, config) {
        return http.put(`/group/${data.get('id')}`, data, config)
    },
    getDetailGroup(id) {
        return http.get(`/group/${id}`)
    }
}
export default groupApi;
