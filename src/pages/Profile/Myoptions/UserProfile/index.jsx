import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
import InputField from '../../../../components/InputFiled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import Button from '../../../../components/Button';
import RadioGroup from '../../../../components/RadioGroup';
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
function Labeluser({title,name,check,form, icon})
    {
        return (
            <div className= {check ?`label-wrap ` : `label-wrap ${'form-input-view'}`}>
                { check ?
                        <div className="label-name" data-has-edit="false">
                            { title == 'Giới tính' ? 
                                <div style={{left: 0}}>
                                    <RadioGroup
                                        title="Giới tính"
                                        name="gender"
                                        form={form}
                                    
                                        mode="gender"
                                        optionData={[
                                            { label: 'Nam', value: Number(1) },
                                            { label: 'Nữ', value: Number(0) }
                                        ]}
                                    />
                                </div> :
                                <InputField 
                                    label= {title}
                                    name={title}
                                    type=""
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
    useEffect(() => {
        document.title='Hồ sơ'
        
    }, []);
    const [check,setCheck] = useState(false);
    const schema = yup.object().shape({
        phoneNumber: yup
            .string()
            .required('Vui lòng nhập số điện thoại')
            .matches(phoneRegExp, 'Vui lòng nhập số điện thoại')
            .min(10, 'Số điện thoại không hợp lệ')
            .max(10, 'Số điện thoại không hợp lệ'),
        firstname: yup.string().required('Vui lòng nhập họ'),
        lastname: yup.string().required('Vui lòng nhập tên'),
        email: yup
            .string()
            .required('Vui lòng nhập Email')
            .email('Email không hợp lệ'),
        password: yup
            .string()
            .required('Vui lòng nhập mật khẩu')
            .min(5, 'Mật khẩu 5 - 15 kí tự')
            .max(15, 'Mật khẩu 5 - 15 kí tự'),
        birthday: yup.string().required('Vui lòng nhập ngày sinh'),
        passwordConfirm: yup
            .string()
            .required('Vui lòng nhập lại mật khẩu')
            .oneOf([yup.ref('password')], 'Mật khẩu không khớp'),
        address: yup.string().required('Vui lòng nhập địa chỉ')
    })
    const form = useForm({
        defaultValues: {
            phoneNumber: '',
            email: '',
            firstname: '',
            lastname: '',
            gender: '0',
            birthday: '',
            password: '',
            passwordConfirm: '',
            address: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = value => {
        const valueSubmit = { ...value }
        console.log(valueSubmit)
        valueSubmit.gender = valueSubmit.gender === '1' ? 1 : 0
        delete valueSubmit.passwordConfirm
        console.log(valueSubmit);
        const formData = new FormData()
        for (let key in valueSubmit) {
            formData.append(key, valueSubmit[key])
        }
        (async () => {
            
        })()
    }
    return (
        <div className='user-container'>
            <div 
                class="avartar-profile">
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
                                    <a href="/" className="avatar-update" data-event-category="User Profile" data-event-action="Upload Photo Click" data-event-label="https://id.hellobacsi.com/user/profile">
                                        <div class="avartar-img">
                                        </div>
                                        <img src={images.camera} className='icon-camera'/>
                                    </a>
                                    <div class="avartar-name" spacing="xxxs">
                                        <p class="name-text">Nhật Quang</p>
                                    </div>
                        </div>
            </div>

            <form 
                className="form-update"
                onSubmit={form.handleSubmit(handleSubmitForm)}
            >
                    <div className="form-wrap" spacing="md">
                        <Labeluser title={'Họ và Tên'} name={'Nhật Quang'} check={check} form={form} icon={images.user}/>
                        <Labeluser title={'Email'} name={'nhatquangtran135@gmail.com'} check={check} form={form} icon={images.email}/>
                        <Labeluser title={'Ngày sinh'} name={'02-01-2001'} check={check} form={form} icon={images.birthday}/>
                        <Labeluser title={'Giới tính'} name={'Nam'} check={check} form={form} icon={images.gender}/>
                        <Labeluser title={'Địa chỉ'} name={'Đà Nẵng'} check={check} form={form} icon={images.address}/>
                        <Labeluser title={'Số điện thoại'} name={'0935267739'}check={check}  form={form} icon={images.call}/>
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