import appointmentApi from '../../../api/appointmentApi'
import Pagination from '../../../components/Pagination'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import convertTZ7Str from '../../../utils/convertTZ7Str'
import AppointmentDetail from '../AppointmentDetail'
import './index.scss'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import SearchInput from '../../../components/SearchInput'
import { useDebounce } from '../../../hooks/useDebounce'
import ReactDatePicker from 'react-datepicker'
import strftime from 'strftime'
import { SocketContext } from '../../../App'
import Loading from '../../../components/Loading'
const options = [
    { value: '', label: 'Tất cả' },
    { value: 'NEW', label: 'Chờ xử lí' },
    { value: 'DONE', label: 'Đã hoàn thành' },
    { value: 'CONFIRMED', label: 'Chờ khám' },
    { value: 'CANCEL', label: 'Đã hủy' },
    { value: 'REPORT', label: 'Báo cáo' },
    { value: 'PATIENT VIOLATE', label: 'BN vi phạm' }

]
function AppointmentManagement() {
    const socket = useContext(SocketContext)
    const [isLoading, setIsLoading] = useState(true)
    const [listAppointment, setListAppointment] = useState([])
    const [pagination, setPagination] = useState({})
    const userData = useSelector(state => state.user.profile)
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search)
        return {
            page: Number.parseInt(params.page) || 0,
            limit: Number.parseInt(params.limit) || 10,
            key: params.key || '',
            status: params.status || '',
            date: params.date || ''
        }
    }, [location.search])
    const fetchListAppointment = async (queryParams) => {
        try {
            ( async () => {
                const respone =
                await appointmentApi.getAllAppointmentOfUser(
                    userData.id,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        },
                        params: queryParams
                    }
                )
                setListAppointment(respone.appointment)
                setPagination(respone.page)
                if (isLoading) setIsLoading(false)
            })()
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.TOP_RIGHT,
                // autoClose: 2000,
                toastClassName: 'custom-toast'
            })
        }
    }
    const fetchListAppointmentByAdmin = (queryParams) => {
        try {
            (
                async () => {
                    const respone = await appointmentApi.getAllAppointment({
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        },
                        params: queryParams
                    })
                    setListAppointment(respone.appointment)
                    setPagination(respone.page)
                    if (isLoading) setIsLoading(false)
                }
            )()
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                toastClassName: 'custom-toast'
            })
        }
    }
    useEffect(() => {
        if (userData.role.name === 'ROLE_DOCTOR')
            fetchListAppointment(queryParams)
        if (userData.role.name === 'ROLE_ADMIN')
            fetchListAppointmentByAdmin(queryParams)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.id, queryParams])
    const confirmAppointment = (idAppointment) => {
        try {
            ( async () => {
                const respone = await appointmentApi.confirmAppointment(
                    idAppointment,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        }
                    }
                )
                fetchListAppointment(queryParams)
                toast.success('Chấp nhận cuộc hẹn thành công', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    toastClassName: 'custom-toast'
                })
                respone.message.forEach(element => {
                    if (element !== {})
                        socket.emit('createNotify', element)
                })
            })()
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                toastClassName: 'custom-toast'
            })
        }
    }

    const handlePageChange = page => {
        const filters = { ...queryParams, page: page }
        navigate(`?${queryString.stringify(filters)}`)
    }
    const [AppointmentItemDetail, setAppointmentItemDetail] = useState({})
    const [isShowAppointmentItemDetail, setIsShowAppointmentItemDetail] = useState(false)
    const toggleShowItem = () => setIsShowAppointmentItemDetail(!isShowAppointmentItemDetail)
    const showAppointmentItemDetail = (item) => {
        toggleShowItem()
        setAppointmentItemDetail(item)
    }
    {isShowAppointmentItemDetail && 
        <AppointmentDetail 
            appointmentData = {AppointmentItemDetail} 
            onClose = {toggleShowItem} 
            confirmAppointment = {confirmAppointment}
        />
    }
    const handleStatusChange = (value) => {
        const filters = { ...queryParams, status: value.value, page: 0 }
        navigate(`?${queryString.stringify(filters)}`)
    }
    const [searchValue, setSearchValue] = useState('')
    const handleInputSearchChange = (e) => setSearchValue(e.target.value)
    const debounceValue = useDebounce(searchValue, 500)
    useEffect(() => {
        const params = { ...queryParams, key: debounceValue, page: 0 }
        navigate(`?${queryString.stringify(params)}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue])
    const reportPatient = (appointmentID) => {
        try {
            ( async () => {
                const respone = await appointmentApi.reportAppointment(
                    appointmentID,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        }
                    }
                )
                
                const filters = { ...queryParams, status: options[0].value, page: 0 }
                navigate(`?${queryString.stringify(filters)}`)
                toast.success('Báo cáo thành công', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    toastClassName: 'custom-toast'
                })
                respone.message.forEach(element => {
                    if (element !== {})
                        socket.emit('createNotify', element)
                })
            })()
        }
        catch (err) {
            alert(err.message)
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
                // toastClassName: 'custom-toast'
            })
        }
    }
    const resolveReport = (idAppointment, actor) => {
        try {
            ( async () => {
                const respone = await appointmentApi.resolveReport(
                    idAppointment,
                    { violator: actor },
                    {
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        }
                    }
                )
                fetchListAppointment(queryParams)
                toast.success('Xử lí thành công', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    toastClassName: 'custom-toast'
                })
                respone.message.forEach(element => {
                    if (element !== {})
                        socket.emit('createNotify', element)
                })
            })()
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                toastClassName: 'custom-toast'
            })
        }
    }
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
        const params = { ...queryParams, date: strftime('%Y-%m-%d', date), page: 0 }
        navigate(`?${queryString.stringify(params)}`)
    }
    useEffect(() => {
        document.title = 'Quản lí cuộc hẹn'
    }, [])
    if (isLoading) return <Loading />
    return (
        <div className="appointmentManagement">
            <div className="appointmentManagement__container">
                <header>Quản lí cuộc hẹn</header>
                <div className="appointmentManagement__action">
                    <div>
                        <ReactDatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="appointmentManagement__action-search">
                        <SearchInput placeholder="Tìm kiếm bác sĩ, bệnh nhân" mode = "list" handleSearch = {handleInputSearchChange} value = {searchValue}/>
                    </div>
                    <div className="appointmentManagement__action-filterStatus">
                        <Select options={options} defaultValue = {options[0]} onChange={handleStatusChange}/>
                    </div>

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            {userData.role.name === 'ROLE_ADMIN' && <th>Bác sĩ</th>}
                            <th>Bệnh nhân</th>
                            <th>Ngày</th>
                            <th>Thời gian</th>
                            <th>Tình trạng</th>
                            <th>Chi tiết</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listAppointment.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    {userData.role.name === 'ROLE_ADMIN' && <td>{`${item.schedule.doctor.user.name}`}</td>}
                                    <td>{`${item.patient.user.name}`}</td>
                                    <td>{convertTZ7Str(item.schedule.begin).split('T')[0]}</td>
                                    <td>{`${convertTZ7Str(item.schedule.begin).split('T')[1]} - ${convertTZ7Str(item.schedule.end).split('T')[1]}`}</td>
                                    {item.status.id === 1 && <td><span className="label__pending">Chờ xử lí</span></td>}
                                    {item.status.id === 2 && <td><span className="label__confirm">Đã chấp nhận</span></td>}
                                    {item.status.id === 4 && <td><span className="label__cancel">Đã hủy</span></td>}
                                    {item.status.id === 3 && <td><span className="label__done">Hoàn thành</span></td>}
                                    {item.status.id === 5 && <td><span className="label__cancel">Admin xử lí...</span></td>}
                                    {item.status.id === 6 && <td><span className="label__cancel">Không khám</span></td>}

                                    <td><button className="btnDetail" onClick={() => showAppointmentItemDetail(item)}>Chi tiết</button></td>
                                    <td>
                                        {userData.role.name === 'ROLE_DOCTOR' && item.status.name === 'NEW' && <button className="btnSuccess" onClick={() => confirmAppointment(item.id)}>Xác nhận</button>}
                                        {userData.role.name === 'ROLE_DOCTOR' && item.status.id === 3 && <button className="btnCancel" onClick={() => reportPatient(item.id)}>Không đến khám</button>}
                                        {userData.role.name === 'ROLE_ADMIN' && item.status.id === 5 && <button className="btnCancel" onClick={() => resolveReport(item.id, 'patient')}>BN không đến khám</button>}
                                        {userData.role.name === 'ROLE_ADMIN' && item.status.id === 5 && <button className="btnCancel" onClick={() => resolveReport(item.id, 'doctor')}>BN đã đến khám</button>}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="appointmentManagement__pagination">
                    <Pagination 
                        totalPage={pagination.totalPages} 
                        currentPage={pagination.page} 
                        onClick = {handlePageChange}
                    />
                </div>
            </div>
            {isShowAppointmentItemDetail && 
                <AppointmentDetail 
                    appointmentData = {AppointmentItemDetail} 
                    onClose = {toggleShowItem} 
                    confirmAppointment = {confirmAppointment}
                />}
        </div>
    )
}

export default AppointmentManagement;
