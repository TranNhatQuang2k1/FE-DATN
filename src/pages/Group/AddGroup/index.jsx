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
import groupApi from '../../../api/groupApi'
import PreviewUploadImg1 from '../components'
function AddGroup() {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        name: yup.string().required('Thêm tên Nhóm'),
        description: yup.string().required('Thêm Mô tả'),
    })
    const form = useForm({
        defaultValues: {
            img_bg : '',
            avartar_group: '',
            name: '',
            description: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = value => {
        console.log(value)
        if(value.img_bg==='' || value.avartar_group === '') {
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
                await groupApi.addGroup(
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
                toast.success('Thêm nhóm thành công', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                navigate(path.groupManagement)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                })
            }
        })()
        }
    }
    useEffect(() => {
        document.title = 'Thêm nhóm'
    }, [])
    return (
        <div className="addClinic">
            <div className="addClinic__container">
                <header>Thêm nhóm mới</header>
                <form
                    className="form addClinic__form"
                    onSubmit={form.handleSubmit(handleSubmitForm)}
                >
                    <div className='group-image'>
                        <div class="avartar-profile">
                            Background Group
                            <div className="avartar-container">
                                <PreviewUploadImg form={form} name="img_bg"  urlimage={''} check={true}/>    
                            </div>
                        </div>
                        { <div class="avartar-profile">
                            Avartar Group
                            <div className="avartar-right">
                                <PreviewUploadImg form={form} name="avartar_group"  urlimage={''} check={true}/>

                            </div>
                        </div>}

                    </div>

                    <div className="form__element">
                        <InputField
                            form={form}
                            name="name"
                            label={'Tên'}
                            // icon={images.name}
                            icon={images.dalieu}
                            placeholder="Tên nhóm"
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            form={form}
                            label={'Đường'}
                            icon={images.lichsu}
                            name="description"
                            placeholder="Mô tả"
                        />
                    </div>

                    <div className="addClinic__action">
                        <Button title={'Thêm nhóm'}/>
                        <Button title={'Hủy'} onClick={() => navigate(path.groupManagement)}/>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default AddGroup;