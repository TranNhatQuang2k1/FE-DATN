import { yupResolver } from '@hookform/resolvers/yup'
import clinicApi from '../../../api/clinicApi'
import InputField from '../../../components/InputFiled'
import PreviewUploadImg from '../../../components/PreviewUploadImg'
import { path } from '../../../constants/path'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import './index.scss'
import Button from '../../../components/Button'
import images from '../../../assets'
function AddClinic() {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        name: yup.string().required('Thêm tên phòng khám'),
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
        if(value.image==='') {
            alert('No images')
        }
        else
        {
        const formData = new FormData()
        for (let key in value) {
            formData.append(key, value[key])
        }
        (async () => {
            try {
                await clinicApi.addClinic(
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
                toast.success('Thêm phòng khám thành công', {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                navigate(path.clinicManagement)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        })()
        }
    }
    useEffect(() => {
        document.title = 'Thêm phòng khám'
    }, [])
    return (
        <div className="addClinic">
            <div className="addClinic__container">
                <header>Thêm phòng khám mới</header>
                <form
                    className="form addClinic__form"
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
                            label={'Tên'}
                            icon={images.name}
                            placeholder="Tên phòng khám"
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            label={'Đường'}
                            icon={images.address}
                            name="street"
                            placeholder="Đường"
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            label={'Tỉnh'}
                            icon={images.address}
                            name="city"
                            placeholder="Tỉnh, thành phố"
                        />
                    </div>
                    <div className="addClinic__action">
                        <Button title={'Thêm phòng khám'}/>
                        <Button title={'Hủy'} onClick={() => navigate(path.clinicManagement)}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddClinic