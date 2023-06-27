import { yupResolver } from '@hookform/resolvers/yup'
import hospitalApi from '../../../api/hospitalApi'
import InputField from '../../../components/InputFiled'
import PreviewUploadImg from '../../../components/PreviewUploadImg'
import { path } from '../../../constants/path'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import './index.scss'
import images from '../../../assets'
import Button from '../../../components/Button'
function AddHospital() {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        name: yup.string().required('Thêm tên bệnh viện'),
        street: yup.string().required('Thêm đường'),
        city: yup.string().required('Thêm tỉnh, thành phố')
    })
    const form = useForm({
        defaultValues: {
            image: '',
            name: '',
            street: '',
            city: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = value => {
        if(value.image === '')
        {
            alert('No images')
        }else
        {
        const formData = new FormData()
        for (let key in value) {
            formData.append(key, value[key])
        }
        (async () => {
            try {
                await hospitalApi.addHospital(
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        }
                    }
                )
                toast.success('Thêm bệnh viện thành công', {
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
    }
    useEffect(() => {
        document.title = 'Thêm bệnh viện'
    }, [])
    return (
        <div className="addHospital">
            <div className="addHospital__container">
                <header>Thêm bệnh viện mới</header>
                <form
                    className="form addHospital__form"
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
                            placeholder="Tên bệnh viện"
                            icon={images.dalieu}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            name="street"
                            placeholder="Đường"
                            icon={images.address}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            name="city"
                            placeholder="Tỉnh, thành phố"
                            icon={images.address}
                        />
                    </div>
                    <div className="addHospital__action">
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

export default AddHospital