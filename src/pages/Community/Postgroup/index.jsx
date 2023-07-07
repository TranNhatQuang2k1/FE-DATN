import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import images from '../../../assets'
import InputField from '../../../components/InputFiled'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import Button from '../../../components/Button'
const Postgroup = () => {
    const schema = yup.object().shape({
        title: yup
            .string()
            .required('Vui lòng nhập tiêu đề')
            .max(20, 'Tối đa 120 ký tự'),
        content: yup
            .string()
            .required('Vui lòng nhập content')
            .max(500, 'Tối đa 500 ký tự')
    })
    const form = useForm({
        defaultValues: {
            title: '',
            content: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = async value => {
        try {
            // const reponse = await dispatch(login(value))
            // unwrapResult(reponse)
            // console.log(reponse)
            toast.success('Đăng nhập thành công', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            })
            // navigate(path.home)
        } catch (error) {
            toast.success(error.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            })
        }
    }
    return (
        <div>
            <div className="pop-up">
                <div className='popup-content'>
                    <div className='close-btn'>
                        <img 
                            src={images.btn_close}
                            className='icon-close'
                        />
                    </div>
                    <div className='header-title'>
                        <h5 >Bắt đầu bài đăng mới</h5>
                    </div>
                    <div className='content'>
                        <div className='content-container'>
                            <div className='content-wrap'>
                                <form className='form-input' onSubmit={form.handleSubmit(handleSubmitForm)}>
                                    <div className='form-wrap'>
                                        <div className='title'>
                                            <div className='input-title'>
                                            <InputField
                                                label="Tiêu đề"
                                                name="nhập tiêu đề"
                                                type="input"
                                                icon={images.lichsu}
                                                form={form}
                                                placeholder="Tiêu đề"
                                            />
                                            </div>
                                        </div>

                                        <div className='input-content'>
                                            <p>Mô tả</p>
                                            <textarea className='text-content'/>
                                        </div>

                                    </div>
                                    <div className='btn-post'>
                                            <Button title={'Đăng'}/>
                                     </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover"></div>
        </div>
    )
}
export default Postgroup;