import React, { useEffect } from 'react'
import * as yup from 'yup'
import './index.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { path } from '../../../constants/path'
import PreviewUploadImg from '../../../components/PreviewUploadImg'
import InputField from '../../../components/InputFiled'
import hospitalApi from '../../../api/hospitalApi'
import images from '../../../assets'
import Button from '../../../components/Button'

function UpdateHospital() {
    const location = useLocation()
    const data = location.state.hospitalItem
    const navigate = useNavigate()
    const schema = yup.object().shape({
        name: yup.string().required('Thêm tên bệnh viện'),
        street: yup.string().required('Thêm đường'),
        city: yup.string().required('Thêm tỉnh, thành phố')
    })
    const form = useForm({
        defaultValues: {
            id: data.id,
            image: data.image,
            name: data.name,
            street: data.street,
            city: data.city
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = value => {
        const formData = new FormData()
        for (let key in value) {
            formData.append(key, value[key])
        }
        (async () => {
            try {
                await hospitalApi.updateHospital(formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `${localStorage.getItem(
                            'access_token'
                        )}`
                    }
                })
                toast.success('Cập nhật bệnh viện thành công', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                navigate(path.hospitalManagement)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                })
            }
        })()
    }
    useEffect(() => {
        document.title = 'Cập nhật bệnh viện'
    }, [])
    return (
        <div className="updateClinic">
            <div className="updateClinic__container">
                <header>Cập nhật bệnh viện</header>
                <form
                    className="form updateClinic__form"
                    onSubmit={form.handleSubmit(handleSubmitForm)}
                >
                    <div class="avartar-profile">
                        <div className="avartar-container">
                            <PreviewUploadImg form={form} name="image" urlimage={''} check={true}/>    
                        </div>
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            name="name"
                            icon={images.dalieu}
                            placeholder="Tên bệnh viện"
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            name="street"
                            icon={images.address}
                            placeholder="Đường"
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            name="city"
                            icon={images.address}
                            placeholder="Tỉnh, thành phố"
                        />
                    </div>
                    <div className="updateClinic__action">
                        <Button 
                            title={'Thêm bệnh viện'}
                        />
                        <Button 
                            title={'Hủy'}
                            onClick={() => navigate(path.hospitalManagement)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateHospital