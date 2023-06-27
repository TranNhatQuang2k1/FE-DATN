import React, { useEffect } from 'react'
import './index.scss'
import InputField from '../../../components/InputFiled'
import { useForm } from 'react-hook-form'
import images from '../../../assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Register from '../Register'
import { path } from '../../../constants/path'
import { useDispatch } from 'react-redux'
import { login } from '../userSlice'
import { toast } from 'react-toastify'
import { unwrapResult } from '@reduxjs/toolkit'

function DangNhap() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Vui lòng nhập Email')
            .email('Email không hợp lệ'),
        password: yup
            .string()
            .required('Vui lòng nhập mật khẩu')
            .min(5, 'Mật khẩu 5 - 15 kí tự')
            .max(15, 'Mật khẩu 5 - 15 kí tự')
    })
    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = async value => {
        try {
            const reponse = await dispatch(login(value))
            unwrapResult(reponse)
            console.log(reponse)
            toast.success('Đăng nhập thành công', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            })
            navigate(path.home)
        } catch (error) {
            toast.success(error.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            })
        }
    }
    useEffect(() => {
        document.title = 'Đăng nhập'
    }, [])
    return (
        <div className="authform">
            <div className="authform__content">
                <span className="authform__content-title">
                    Đăng nhập
                </span>
                <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                    <div className="authform__form-element">
                        <InputField
                            label="Email"
                            name="email"
                            type="input"
                            icon={images.email}
                            form={form}
                            placeholder="Email"
                        />
                    </div>
                    <div className="authform__form-element">
                        <InputField
                            label="Mật khẩu"
                            name="password"
                            type="password"
                            icon={images.password}
                            form={form}
                            placeholder="Mật khẩu"
                        />
                    </div>
                    <div className="forgot-password">
                        <Link to={'/register'} className='forgot-text'>
                           Đăng kí
                        </Link>
                    </div>
                    <div className="button-submit">
                        <button
                            type="submit"
                            className="button-submit-login"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}




const Login = () => {
    return (
        <div className="login-container">
                <div className="header_login">
                        <img
                            src={images.logobacsi}
                            alt="logo"
                            className="logo-login"
                        />
                </div>
                <div className="section-login">
                    <div className="login-box">
                        {/* <h3>Đăng nhập hoặc Đăng ký tham gia</h3> */}
                        {/* <form 
                            id="form-login" 
                            action="https://id.hellobacsi.com/login/post-login?returnUrl=https%3A%2F%2Fhellobacsi.com%2F" 
                            method="POST" 
                            autocomplete="off" 
                            novalidate="">
                                    
                            <input 
                                type="hidden" name="_token" 
                                value="oxPYWYKwl4pWKKVRyN0Olf3SX3AYqxCm8sXnJ6bE"/>
                                <a 
                                    className="as-social-button" 
                                    data-event-category="Sign Up" 
                                    data-event-action="Continue with Facebook" 
                                    data-event-label="https://id.hellobacsi.com/login/facebook" 
                                    id="social-button-facebook">
                                    <div className="icons_login">
                                        <img
                                             src={images.fb}
                                             alt="logo"
                                             className="logo-login"
                                         />
                                    </div>
                                    <button 
                                        type="button" 
                                        data-social="facebook" 
                                        className="social-button">Sử dụng tài khoản Facebook
                                    </button>
                                </a>
                                <a 
                                    class="as-social-button" 
                                    data-event-category="Sign Up" 
                                    data-event-action="Continue with Google" 
                                    data-event-label="https://id.hellobacsi.com/login/google"
                                    id="social-button-google">
                                    <div className="icons_login">
                                        <img
                                             src={images.gg}
                                             alt="logo"
                                             className="logo-login"
                                         />
                                    </div>
                                    <button 
                                        type="button" 
                                        data-social="google" 
                                        class="social-button">Sử dụng tài khoản Google
                                    </button>
                                </a>
                            <p class="or">Hoặc</p>
                            <input 
                                 type="hidden"
                                 name="ga_client_id" 
                                 value="GA1.2.1576858486.1678717992" 
                                 id="ga_client_id"/>
                            <input 
                                className="input_email"
                                data-testid="email field" 
                                placeholder="Nhập email của bạn" 
                                type="email"
                                name="email" 
                                autocomplete="off"/>
                            <p 
                                class="error-message">  
                            </p>
                        </form> */}
                        <DangNhap />
                        {/* <div className="limit-text">
                            <div className="text-wrap">
                                <div className="text-inner">
    Bằng cách đăng ký, tôi xác nhận rằng mình đã đọc, hiểu và đồng ý với <a target="_blank" href="https://hellobacsi.com/static/chinh-sach-quyen-rieng-tu/">Chính sách Bảo mật</a> và <a target="_blank" href="https://hellobacsi.com/static/dieu-khoan-su-dung/">Điều khoản của Hellobacsi</a>. Tôi đồng ý để Hellobacsi thu thập, lưu trữ, sử dụng, tiết lộ và xử lý thông tin của tôi theo Chính sách quyền riêng tư của Hellobacsi. Hơn nữa, tôi đồng ý cho Hellobacsi sử dụng thông tin của tôi để gửi cho tôi thông tin khuyến mại (bao gồm bằng thư, email, điện thoại và tin nhắn văn bản) hoặc liên hệ với tôi về các sản phẩm, dịch vụ, chương trình hoặc các nội dung khác mà Hellobacsi nghĩ rằng tôi có thể quan tâm; và Hellobacsi có thể chia sẻ thông tin của tôi cho các đối tác và khách hàng của Hellobacsi để họ cung cấp thêm các dịch vụ và thông tin khuyến mại hữu ích cho tôi.
                                </div>

                            </div>
                        </div> */}
                        {/* <a 
                            data-event-category="Sign Up" 
                            data-event-action="Continue with Email" 
                            data-event-label="https://id.hellobacsi.com/login?returnUrl=https%3A%2F%2Fhellobacsi.com%2F%3Fsource%3Dwelcome_back">
                            <button 
                                data-testid="button continue" 
                                id="submit-login-or-join" 
                                type="submit" 
                                rel="button" 
                                className="button primary-button" 
                                tabindex="0">Tiếp tục
                            </button>
                        </a> */}
                        
                        {/* <a href="https://hellobacsi.com/?source=welcome_back">
                            <div 
                                className="text-skip"
                                id="skip-to-main"> Bỏ qua 
                                <svg
                                    className="icon-skip"
                                    width="6" 
                                    height="10" 
                                    viewBox="0 0 6 10" 
                                    fill="none">
                                        <path d="M1 9L5 5L1 1" stroke="#737373" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </a> */}
                        </div>
                </div>
                <aside class="img-left">
                    <img 
                        src="https://id.hellobacsi.com/assets/graphics/doctor.svg" 
                        alt="Illustrative graphic of a doctor"
                    />
                </aside>

                <aside class="img-right">
                    <img 
                        src="https://id.hellobacsi.com/assets/graphics/user.svg"
                        alt="Illustrative graphic of a user user a phone"
                    />
                </aside>
        </div>
    )
}
export default Login;
