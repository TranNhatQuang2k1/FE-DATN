import http from '../utils/http'

const categoryApi = {
    getListCategory(params) {
        return http.get('/category', { params: params })
    },
    addCategory(data, config) {
        return http.post('/category', data, config)
    },
    updateCategory(data, config) {
        return http.put(`/category/${data.get('id')}`, data, config)
    },
    getDetailCategorybyId(id) {
        return http.get(`/category/${id}`)
    }
}
export default categoryApi;
