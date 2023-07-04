import http from '../utils/http'

const heathtoolApi = {
    getListHeathtool(params) {
        return http.get('/heathtool', { params: params })
    },
    addHeathtool(data, config) {
        return http.post('/heathtool', data, config)
    },
    updateHeathtool(data, config) {
        return http.put(`/heathtool/${data.get('id')}`, data, config)
    },
    updateResultHeathtool(data, config) {
        return http.put(`/heathtool/${data.get('id')}`, data, config)
    },
    getDetailHeathtool(id) {
        return http.get(`/heathtool/${id}`)
    }
}
export default heathtoolApi;