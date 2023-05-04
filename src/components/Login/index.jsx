import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from "../../assets";
import './index.scss';

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
                        <h3>Đăng nhập hoặc Đăng ký tham gia</h3>
                        <div className="intro">
                            <p id="introtext">
                                Dùng email hoặc tài khoản mạng xã hội để đăng nhập hoặc đăng ký mới.
                            </p>
                        </div>
                        <form 
                            id="form-login" 
                            action="https://id.hellobacsi.com/login/post-login?returnUrl=https%3A%2F%2Fhellobacsi.com%2F" 
                            method="POST" 
                            autocomplete="off" 
                            novalidate="">
                                    
                            <input 
                                type="hidden" name="_token" 
                                value="oxPYWYKwl4pWKKVRyN0Olf3SX3AYqxCm8sXnJ6bE"/>
                                <a 
                                    class="as-social-button" 
                                    data-event-category="Sign Up" 
                                    data-event-action="Continue with Facebook" 
                                    data-event-label="https://id.hellobacsi.com/login/facebook" 
                                    id="social-button-facebook">
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
                                data-testid="email field" 
                                placeholder="Nhập email của bạn" 
                                type="email" name="email" 
                                autocomplete="off"/>
                            <p 
                                class="error-message">  
                            </p>
                        </form>
                    </div>
                </div>
        </div>
    )
}
export default Login;