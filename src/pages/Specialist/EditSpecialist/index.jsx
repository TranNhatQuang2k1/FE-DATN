import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import PreviewUploadImg from '../../../components/PreviewUploadImg'
import InputField from '../../../components/InputFiled'
import './index.scss'
import specialistApi from '../../../api/specialistApi'
import { toast } from 'react-toastify'
import { path } from '../../../constants/path'
import Button from '../../../components/Button'
import images from '../../../assets'
function EditSpecialist() {
    const location = useLocation()
    const data = location.state.specialistItem
    const navigate = useNavigate()
    const schema = yup.object().shape({
        name: yup.string().required('Thêm tên chuyên khoa'),
        description: yup.string().required('Thêm mô tả')
    })
    const form = useForm({
        defaultValues: {
            id: data.id,
            image: data.image,
            name: data.name,
            description: data.description
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
                await specialistApi.updateSpecialist(formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `${localStorage.getItem(
                            'access_token'
                        )}`
                    }
                })
                toast.success('Cập nhật chuyên khoa thành công', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                navigate(path.specialistManagement)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                })
            }
        })()
    }
    useEffect(() => {
        document.title = 'Cập nhật chuyên khoa'
    }, [])
    return (
        <div className="editSpecialist">
            <div className="editSpecialist__container">
                <header>Cập nhật chuyên khoa</header>
                <form
                    className="form editSpecialist__form"
                    onSubmit={form.handleSubmit(handleSubmitForm)}
                >
                    <div class="avartar-profile">
                        <div className="avartar-container">
                            <PreviewUploadImg form={form} name="image" urlimage={data.image} check={true}/>    
                        </div>
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            name="name"
                            label = "Tên chuyên khoa"
                            placeholder="Tên chuyên khoa"
                            icon={images.dalieu}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            name="description"
                            label = "Chi tiết"
                            placeholder="Mô tả chuyên khoa"
                            icon={images.lichsu}
                        />
                    </div>
                    <div className="editSpecialist__action">
                        <Button title={'Cập nhật'}/>
                        <Button title={'Hủy'}
                        
                            onClick={() => navigate(path.specialistManagement)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditSpecialist