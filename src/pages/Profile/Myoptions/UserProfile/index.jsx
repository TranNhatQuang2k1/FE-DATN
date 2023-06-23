import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
import InputField from '../../../../components/InputFiled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import Button from '../../../../components/Button';
import RadioGroup from '../../../../components/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../../Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import PreviewUploadImg from '../../../../components/PreviewUploadImg';
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
function Labeluser({id,title,name,type,check,form, icon})
    {
        return (
            <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                { check ?
                        <div className="label-name" data-has-edit="false">
                            { title == 'Giới tính' ? 
                                <div style={{left: 0}}>
                                    <RadioGroup
                                        title="Giới tính"
                                        name={'gender'}
                                        
                                        form={form}
                                        label={name}
                                        mode="gender"
                                        optionData={[
                                            { label: 'Nam', value: Number(1) },
                                            { label: 'Nữ', value: Number(0) }
                                        ]}
                                    />
                                </div> :
                                <InputField 
                                    label= {title}
                                    name={id}
                                    name1={name}
                                    type= {type}
                                    icon={icon}
                                    form={form}
                                    defaultvalue={name}
                                    // placeholder="Nhập địa chỉ Email"
                                />
                            }
                        </div> :
                    <>
                        <label className="label-title">{title}</label>
                        <div className="label-name" data-has-edit="false">{name}</div>
                    </> 
                }
            </div> 
        );
    }
const Userprofile = () => {
    const user = useSelector(state => state.user.profile)
    const dispatch = useDispatch()
    const [check,setCheck] = useState(false);
    useEffect(() => {
        document.title='Hồ sơ'
    }, [check]);
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
        birthday: yup.string().required('Vui lòng nhập ngày sinh'),
        address: yup.string().required('Vui lòng nhập địa chỉ')
    })
    const form = useForm({
        defaultValues: {
            image: user?.image,
            phoneNumber: '' || user?.phoneNumber,
            email: '' || user?.email,
            name: '' || user?.name,
            gender: user?.gender === true ? '1' : '0',
            birthday: user?.birthday.split('T')[0],
            address: user?.address
        },
        resolver: yupResolver(schema)
    })
    useEffect(() => {
        form.setValue('phoneNumber', user.phoneNumber)
        form.setValue('name', user.name)
        form.setValue('image', user.image)
        form.setValue('gender', user.gender == 1 ? '1' : '0')
        form.setValue('birthday', user.birthday.split('T')[0])
        form.setValue('address', user.address)
    }, [user, form, check])
    const handleSubmitForm = value => {
        // console.log(value)
        const submitValue = { ...value, id: user.id }
        submitValue.gender = submitValue.gender === '1' ? 1 : 0
        const formData = new FormData()
        for (let key in submitValue) {
            formData.append(key, submitValue[key])
            console.log(formData)
        }
        (async () => {
            try {
                const datares = await dispatch(update(formData))
                unwrapResult(datares)
                console.log(datares)
                toast.success('Cập nhật thành công', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000
                })
                alert('Cập nhật thành công')
                onclose()
            } catch (err) {
                console.log(err.message)
                toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        })()
    }
    return (
        <div className='user-container'>
            {/* <div class="avartar-profile">
                    <input 
                        className='new-avartar'
                        name="newImage" 
                        id="avatar-upload" 
                        type="file" 
                        accept="image/*"
                    />
                        <div 
                                className="avartar-container" 
                                spacing="lg">
                                    <a  className="avatar-update"

                                    >
                                        <div class="avartar-img" style={{ backgroundImage: `url(${user?.image})`}}>
                                        </div>
                                        <img src={images.camera} className='icon-camera'/>
                                    </a>
                                    <div class="avartar-name" spacing="xxxs">
                                        <p class="name-text">{user?.name}</p>
                                    </div>
                        </div>
            </div> */}

            <form 
                className="form-update"
                onSubmit={form.handleSubmit(handleSubmitForm)}
            >
                    <div class="avartar-profile">
                        <div className="avartar-container">
                            <PreviewUploadImg form={form} name="image" urlimage={user?.image} check={check}/>    
                            <div class="avartar-name">
                                <p class="name-text">{user?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-wrap">
                        {/* <Labeluser id={'name'} title={'Họ và Tên'} name={user?.name} check={check} form={form} icon={images.user}/>
                        <Labeluser id={'email'} title={'Email'} name={user?.email} check={check} form={form} icon={images.email}/>
                        <Labeluser id={'birthday'} title={'Ngày sinh'} name={user?.birthday} type= {'date'} check={check} form={form} icon={images.birthday}/>
                        <Labeluser id={'gender'} title={'Giới tính'} name={user?.gender == 1 ? 'Nam': 'Nữ'} check={check} form={form} icon={images.gender}/>
                        <Labeluser id={'address'} title={'Địa chỉ'} name={user?.address} check={check} form={form} icon={images.address}/>
                        <Labeluser id={'name'} title={'Số điện thoại'} name={user?.phoneNumber}check={check}  form={form} icon={images.call}/> */}
                        <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                        {check ? <InputField 
                                label="Họ và Tên"
                                name="name"
                                type="input"
                                icon={images.user}
                                form={form}
                                placeholder="Họ và Tên"
                                defaultvalue={user?.name}
                        />:
                        <>
                            <label className="label-title">{"Họ và Tên"}</label>
                            <div className="label-name" data-has-edit="false">{user?.name}</div>
                        </> }
                        </div>
                        <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                            {check ? <InputField 
                                    label="Email"
                                    name="email"
                                    type="input"
                                    icon={images.email}
                                    form={form}
                                    placeholder="Email"
                                    disabled={true}
                                    defaultvalue={user?.email}
                            />:
                            <>
                                <label className="label-title">{"Email"}</label>
                                <div className="label-name" data-has-edit="false">{user?.email}</div>
                            </> }
                        </div>
                        <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                            {check ? <InputField 
                                    label="Ngày Sinh"
                                    name="birthday"
                                    type="date"
                                    icon={images.birthday}
                                    form={form}
                                    placeholder="Ngày Sinh"
                                    defaultvalue={user?.birthday}
                            />:
                            <>
                                <label className="label-title">{"Ngày sinh"}</label>
                                <div className="label-name" data-has-edit="false">{user.birthday.split('T')[0]}</div>
                            </> }
                        </div>
                        <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                            {check ? <RadioGroup
                            title="Giới tính"
                            name="gender"
                            form={form}
                          
                            mode="gender"
                            optionData={[
                                { label: 'Nam', value: Number(1) },
                                { label: 'Nữ', value: Number(0) }
                            ]}
                            />  :
                            <>
                                <label className="label-title">{"Giới tính"}</label>
                                <div className="label-name" data-has-edit="false">{user?.gender ? 'Nam' : 'Nữ'}</div>
                            </> }
                        </div>
                        <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                            {check ? <InputField 
                                    label="Địa chỉ"
                                    name="address"
                                    type="input"
                                    icon={images.address}
                                    form={form}
                                    placeholder="Địa chỉ"
                                    defaultvalue={user?.address}
                            />:
                            <>
                                <label className="label-title">{"Địa chỉ"}</label>
                                <div className="label-name" data-has-edit="false">{user?.address}</div>
                            </> }
                        </div>

                        <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                            {check ? <InputField 
                                    label="Số điện thoại"
                                    name="phoneNumber"
                                    type="input"
                                    icon={images.call}
                                    form={form}
                                    placeholder="Số điện thoại"
                                    defaultvalue={user?.phoneNumber}
                            />:
                            <>
                                <label className="label-title">{"Số điện thoại"}</label>
                                <div className="label-name" data-has-edit="false">{user?.phoneNumber}</div>
                            </> }
                        </div>
                        {check ?
                            <a  onClick={() => setCheck(!check)}
                            className="edit-heath">
                                <span className="icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M18 18L6 6" stroke="#3E3F58" stroke-width="1.3" stroke-linecap="round"></path>
                                    </svg>
                                </span>
                         </a> 
                         :
                         <a  onClick={() => setCheck(!check)}
                            className="edit-heath">
                                <span className="icon-wrapper">
                                    <svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" data-custo="fill" class="icon icon--edit">
                                        <path d="M19.1719 2C18.4481 2 17.7244 2.27562 17.1719 2.82812L16 4L20 8L21.1719 6.82812C22.2759 5.72412 22.2759 3.93313 21.1719 2.82812C20.6194 2.27562 19.8956 2 19.1719 2ZM14.5 5.5L3 17V21H7L18.5 9.5L14.5 5.5Z" fill="rgb(45, 135, 243);"></path>
                                    </svg>
                                </span>
                        </a> 
                        }
                        {check &&
                            <div className='submit-form'>
                                <Button title={'Xác Nhận'}/>
                            </div>
                        }
                    </div>
            </form>
        </div>
    )
}
export default Userprofile;