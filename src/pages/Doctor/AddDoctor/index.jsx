import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../../components/InputFiled' 
import RadioGroup from '../../../components/RadioGroup'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './index.scss'
import PreviewUploadImg from '../../../components/PreviewUploadImg'
import SelectGroup from '../../../components/SelectGroup'
import hospitalApi from '../../../api/hospitalApi'
import clinicApi from '../../../api/clinicApi'
import specialistApi from '../../../api/specialistApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { path } from '../../../constants/path'
import doctorApi from '../../../api/doctorApi'
import images from '../../../assets'
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
AddDoctor.propTypes = {}

function AddDoctor() {
    const navigate = useNavigate()
    const [dataHospital, setDataHospital] =useState([])
    const [dataClinic, setDataClinic] = useState([])
    const [dataSpecialist, setDataSpecialist] = useState([])
    const schema = yup.object().shape({
        phoneNumber: yup
            .string()
            .required('Vui lòng nhập số điện thoại')
            .matches(phoneRegExp, 'Vui lòng nhập số điện thoại')
            .min(10, 'Số điện thoại không hợp lệ')
            .max(10, 'Số điện thoại không hợp lệ'),
        name: yup.string().required('Vui lòng nhập họ tên'),
        email: yup
            .string()
            .required('Vui lòng nhập Email')
            .email('Email không hợp lệ'),
        password: yup.string().required('Vui lòng nhập mật khẩu'),
        birthday: yup.string().required('Vui lòng nhập ngày sinh')
    })
    const form = useForm({
        defaultValues: {
            phoneNumber: '',
            email: '',
            name: '',
            gender: '',
            birthday: '',
            password: '',
            address: '',
            image: '',
            hospital_id: '',
            clinic_id: '',
            specialty_id: '',
            description: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = value => {
        const valueSubmit = value
        valueSubmit.clinic_id = Number(valueSubmit.clinic_id)
        valueSubmit.specialty_id = Number(valueSubmit.specialty_id)
        valueSubmit.hospital_id = Number(valueSubmit.hospital_id)
        const formData = new FormData()
        for (let key in valueSubmit) {
            formData.append(key, valueSubmit[key])
        }
        (async () => {
            try {
                let res= await doctorApi.addDoctor(
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
                console.log(res);
                toast.success('Thêm bác sĩ thành công', {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                alert('Thành Công')
                navigate(path.doctorManagement)
            } catch (err) {
                console.log(err);
                toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        })()

    }
    useEffect(() => {
        (async () => {
            const dataHospitalAPI = await hospitalApi.getAllHospital()
            const dataClinicAPI = await clinicApi.getAllClinic()
            const dataSpecialist= await specialistApi.getAllSpecialist()

            setDataHospital(dataHospitalAPI.hospital)
            setDataClinic(dataClinicAPI.clinic)
            setDataSpecialist(dataSpecialist.message)

        })()
    }, [])
    useEffect(() => {
        document.title = 'Thêm bác sĩ'
    }, [])
    return (
        <div className="addDoctor">
            <div className="addDoctor__container">
                <header className="addDoctor__title">Thêm mới bác sĩ</header>
                <form onSubmit={form.handleSubmit(handleSubmitForm)} className = "addDoctor__form">
                    <div className='left-content'>
                    <div class="avartar-profile">
                        <div className="avartar-container">
                            <PreviewUploadImg form={form} name="image" urlimage={''} check={true}/>    
                        </div>
                    </div>
                    <div className="authform__form-element-two-input">
                        <div>
                            <InputField
                                label="Tên"
                                name="name"
                                type="input"
                                form={form}
                                icon={images.user}
                                placeholder="Tên"
                            />
                        </div>
                    </div>
                    <div className="authform__form-element">
                        <InputField
                            label="Email"
                            name="email"
                            type="input"
                            form={form}
                            icon={images.email}
                            placeholder="Email"
                        />
                    </div>
                    <div className="authform__form-element">
                        <InputField
                            label="Số điện thoại"
                            name="phoneNumber"
                            form={form}
                            icon={images.call}
                            placeholder="Số điện thoại"
                            type="input"
                        />
                    </div>
                    <div className="authform__form-element">
                        <RadioGroup
                            title="Giới tính"
                            name="gender"
                            form={form}
                            mode = "gender"
                            optionData={[
                                { label: 'Nam', value: Number(1) },
                                { label: 'Nữ', value: Number(0) }
                            ]}
                        />
                    </div>
                    <div className="authform__form-element">
                        <InputField
                            label="Ngày sinh"
                            name="birthday"
                            icon={images.birthday}
                            form={form}
                            type="date"
                        />
                    </div>
                    <div className="authform__form-element">
                        <InputField
                            label="Địa chỉ"
                            name="address"
                            form={form}
                            icon={images.address}
                            placeholder="Địa chỉ"
                            type="input"
                        />
                        <div className="authform__form-element">
                            <InputField
                                label="Mật khẩu"
                                name="password"
                                form={form}
                                icon={images.password}
                                placeholder="Mật khẩu"
                                type="input"
                            />
                        </div>
                        <div className="authform__form-element">
                            <InputField
                                label="Mô tả"
                                name="description"
                                form={form}
                                icon={images.lichsu}
                                placeholder="Mô tả"
                                type="input"
                            />
                        </div>
                        <div className="button-submit">
                        <button
                            type="submit"
                            className="button btnSuccess"
                        >
                            Đăng ký
                        </button>
                    </div>
                    </div>
                    </div>
                    <div className='right-content'>
                    <div className="authform__form-element">
                        <SelectGroup form = {form} name = "hospital_id" title="Bệnh viện" dataSelectGroup={dataHospital}/>
                    </div>
                    <div className="authform__form-element">
                        <SelectGroup form = {form} name = "clinic_id" title="Phòng khám" dataSelectGroup={dataClinic}/>
                    </div>
                    <div className="authform__form-element">
                        <SelectGroup form = {form} name = "specialty_id" title="Chuyên khoa" dataSelectGroup={dataSpecialist}/>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDoctor