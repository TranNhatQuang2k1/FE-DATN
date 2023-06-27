import clinicApi from '../../../api/clinicApi'
import Loading from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import { path } from '../../../constants/path'
import { useDebounce } from '../../../hooks/useDebounce'
import React, { useEffect, useMemo, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
import queryString from 'query-string'
import SearchInput from '../../../components/SearchInput'
import Button from '../../../components/Button'

function GroupManagement() {
    const [isLoading, setIsLoading] = useState(true)

    const [groupList, setGroupList] = useState([])
    const [pagination, setPagination] = useState({
        totalPages: 3,
        totalElements: 11,
        page: 0
    })
    const handlePageChange = page => {
        const filters = { ...queryParams, page: page }
        navigate(`?${queryString.stringify(filters)}`)
    }
    const location = useLocation()
    const [searchValue, setSearchValue] = useState(
        () => queryString.parse(location.search).key
    )
    const debounceValue = useDebounce(searchValue, 500)
    const navigate = useNavigate()
    const handleOnChangeSearchInput = e => {
        setSearchValue(e.target.value)
    }
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search)
        return {
            page: Number.parseInt(params.page) || 0,
            limit: Number.parseInt(params.limit) || 10,
            key: params.key || ''
        }
    }, [location.search])

    useEffect(() => {
        const params = { ...queryParams, key: debounceValue, page: 0 }
        navigate(`?${queryString.stringify(params)}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue])

    useEffect(() => {
        (async () => {
            try {
                const data = await clinicApi.getAllClinic(queryParams)
                setGroupList(data.group)
                setPagination(data.page)
                setIsLoading(false)
            } catch (err) {
                return err.message
            }
        })()
    }, [queryParams])
    useEffect(() => {
        document.title = 'Quản lí cộng đồng'
    }, [])
    if (isLoading) return <Loading />
    return (
        <div className="clinicManagement">
            <div className="clinicManagement__container">
                <header>Quản lí cộng đồng</header>
                <div className="clinicManagement__action">
                    <div className="clinicManagement__action-search">
                        <SearchInput
                            placeholder="Tìm kiếm phòng khám"
                            mode="list"
                            handleSearch={handleOnChangeSearchInput}
                            value={searchValue}
                        />
                    </div>
                    <Button 
                        title={'Thêm phòng khám'} 
                        onClick={() => navigate(path.addGroup)}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên nhóm</th>
                            <th>Mô tả</th>
                            <th>Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupList.map(groupItem => (
                            <tr key={groupItem.id}>
                                <td>{groupItem.id}</td>
                                <td>{groupItem.name}</td>

                                <td>
                                    <Link
                                        to={`/system/updateGroup/${groupItem.id}`}
                                        state={{ groupItem }}
                                    >
                                        <span className="edit__icon">
                                            <AiFillEdit />
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="clinicManagement__pagination">
                    <Pagination
                        totalPage={pagination.totalPages}
                        currentPage={pagination.page}
                        onClick={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default GroupManagement;
