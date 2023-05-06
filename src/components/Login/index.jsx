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
                        </form>
                        <div className="limit-text">
                            <div className="text-wrap">
                                <div className="text-inner">
    Bằng cách đăng ký, tôi xác nhận rằng mình đã đọc, hiểu và đồng ý với <a target="_blank" href="https://hellobacsi.com/static/chinh-sach-quyen-rieng-tu/">Chính sách Bảo mật</a> và <a target="_blank" href="https://hellobacsi.com/static/dieu-khoan-su-dung/">Điều khoản của Hellobacsi</a>. Tôi đồng ý để Hellobacsi thu thập, lưu trữ, sử dụng, tiết lộ và xử lý thông tin của tôi theo Chính sách quyền riêng tư của Hellobacsi. Hơn nữa, tôi đồng ý cho Hellobacsi sử dụng thông tin của tôi để gửi cho tôi thông tin khuyến mại (bao gồm bằng thư, email, điện thoại và tin nhắn văn bản) hoặc liên hệ với tôi về các sản phẩm, dịch vụ, chương trình hoặc các nội dung khác mà Hellobacsi nghĩ rằng tôi có thể quan tâm; và Hellobacsi có thể chia sẻ thông tin của tôi cho các đối tác và khách hàng của Hellobacsi để họ cung cấp thêm các dịch vụ và thông tin khuyến mại hữu ích cho tôi.
                                </div>

                            </div>
                        </div>
                        <span className="limit-text-button">
                                <div class="limit--text-button-content">Show more</div>
                                    <svg class="limit--text-chevron" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99994 9.38061L5.45261 6.83328C5.17661 6.55728 4.72861 6.55728 4.45261 6.83328C4.17661 7.10928 4.17661 7.55728 4.45261 7.83328L7.52861 10.9093C7.78927 11.1699 8.21127 11.1699 8.47127 10.9093L11.5473 7.83328C11.8233 7.55728 11.8233 7.10928 11.5473 6.83328C11.2713 6.55728 10.8233 6.55728 10.5473 6.83328L7.99994 9.38061Z"></path>
                                    </svg>
                        </span>
                        <a 
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
                        </a>
                        
                        <a href="https://hellobacsi.com/?source=welcome_back">
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
                        </a>
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