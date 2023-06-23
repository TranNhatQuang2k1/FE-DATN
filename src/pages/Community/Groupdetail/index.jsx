import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../assets'
import Header from '../../../components/Header'
function Post({}) {
    return (
        <div className='postdetail-container'>
            <div className='postdetail-wrap'>
                <div className='post-card'>
                    <div className='post-content'>
                        <div class="content-container">
                            <div class="content-wrap">
                                <div class="content-detail">
                                    <div class="avartar-icon">
                                        <div class="icon-img">
                                            <img loading="lazy" src="https://hhg-common.hellobacsi.com/common/anomyous-avatar.svg" class="avatar" alt="avatar"/>
                                        </div>
                                    </div>
                                    <div class="content-name">
                                        <div class="name-wrap">
                                            <div class="name-infor">
                                                <div class="name-detail">
                                                    <div class="name-text">Người dùng ẩn danh</div>
                                                </div>
                                                <div class="date-post">
                                                    <div class="date-wrap">
                                                        <a 
                                                            href="/community/mang-thai" 
                                                            class="community-name">Mang thai
                                                        </a>
                                                    </div>
                                                    <span class=""></span>
                                                    <div class="date-text">13 phút trước</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="icons-edit">
                                    <div class="edit-container">
                                        <div class="edit-wrap">
                                            <div>
                                                <button className='btn-edit'>
                                                    <div class="btn-wrap">
                                                        <span class="img-icon">
                                                            <img src="	https://hellobacsi.com/community/svg/icon-kebab.svg" alt="more"/>
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="detail-post-text">
                            <div class="text-wrap">
                                <h1>Mang thai</h1>
                                <div className='text-content'>
                                    <span class="post-content ">
                                        <p>Em và người yêu em quan hệ trần và xuất ngoài trước chu kì kinh nguyệt của bạn gái 2 ngày, không có sử dụng thuốc ttkc, tới hiện nay bạn gái bị trễ kinh 3 ngày. Tới ngày thứ 4 bạn ấy có ra máu trong vòng 2 ngày nhưng ngày hôm qua bạn đó có uống nước chanh và hôm nay bạn đó không còn ra máu nữa vậy không biết máu có phải là kinh nguyệt không ạ? nếu phải thì tại sao lại không ra máu nữa vậy? Bình thường chu kì của bạn là khoảng 5 ngày. Mong bác sĩ giải đáp cho em! </p>
                                    </span>
                                </div>
                            </div>
                            <a href="https://hellobacsi.com/community/mang-thai/mang-thai-1687444919" class="href-post">
                            </a>
                        </div>
                    </div>
                    <div className='post-share'>

                    </div>
                </div>
                <div className='post-comment'>

                </div>
            </div>
        </div>
    )
}
const Groupdetail = () => {
    
    return (
        <div className='group-detail'>
            <div className='group-banner'>
                <div className='banner-container'>
                    <div className='banner-wrap'>
                        <div className='banner-content'>
                            <div className='content-wrap'>
                                <div className='bg-img'>
                                    <div className='bg-wrap'>

                                                <div className='img-style'>
                                                    <div className="cover-container">
                                                        <img className="group-bg" src="https://cdn-together.hellobacsi.com/2021/07/D-Pregnancy-061124000000.png" alt=""/>
                                                    </div>
                                                </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='group-infor'>
                <div class="infor-container">
                    <div class="infor-wrap">
                        <div class="infor-img">
                            <div class="img-style">
                                <img 
                                    src="https://cdn-together.hellobacsi.com/2021/07/pregnancy-05092941.png" 
                                    className="img-group"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="infor-title">
                        <h2>Mang thai</h2>
                        <div class="infor-content">
                            <div class="content-text">
                                <span class="text-number">12&nbsp;</span>
                                <span class="text-title">chủ đề</span>
                            </div>
                            <div class="content-text ">
                                <span class="text-number margin-text">2k&nbsp;</span>
                                <span class="text-title">bài đăng</span>
                            </div>
                            <div class="content-text">
                                <span class="text-number margin-text">27k&nbsp;</span>
                                <span class="text-title">thành viên</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions-bar">
                    <div class="icon-group">
                        <div className='icon-wrap'>
                            <button class="btn-group" type="button">
                                <div class="btn-wrap">
                                    <span class="icon-btn">
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.66659C10.9167 6.66659 11.6667 5.91659 11.6667 4.99992C11.6667 4.08325 10.9167 3.33325 10 3.33325C9.08334 3.33325 8.33334 4.08325 8.33334 4.99992C8.33334 5.91659 9.08334 6.66659 10 6.66659ZM10 8.33325C9.08334 8.33325 8.33334 9.08325 8.33334 9.99992C8.33334 10.9166 9.08334 11.6666 10 11.6666C10.9167 11.6666 11.6667 10.9166 11.6667 9.99992C11.6667 9.08325 10.9167 8.33325 10 8.33325ZM8.33334 14.9999C8.33334 14.0833 9.08334 13.3333 10 13.3333C10.9167 13.3333 11.6667 14.0833 11.6667 14.9999C11.6667 15.9166 10.9167 16.6666 10 16.6666C9.08334 16.6666 8.33334 15.9166 8.33334 14.9999Z" fill="#595959" fill-opacity="0.8"></path>
                                        </svg>
                                    </span>
                                    <span class=""></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <button class="group-status">
                        <div class="status-container">
                            <span class="status-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9803 5.99067C19.7205 5.99841 19.4739 6.10699 19.2928 6.2934L8.99984 16.5864L5.70687 13.2934C5.61473 13.1974 5.50436 13.1208 5.38223 13.068C5.2601 13.0152 5.12867 12.9874 4.99563 12.986C4.86259 12.9846 4.73061 13.0099 4.60743 13.0601C4.48426 13.1104 4.37235 13.1848 4.27827 13.2789C4.1842 13.3729 4.10983 13.4849 4.05954 13.608C4.00926 13.7312 3.98405 13.8632 3.9854 13.9962C3.98676 14.1293 4.01464 14.2607 4.06743 14.3828C4.12021 14.505 4.19684 14.6153 4.29281 14.7075L8.29281 18.7075C8.48035 18.8949 8.73467 19.0002 8.99984 19.0002C9.26501 19.0002 9.51933 18.8949 9.70687 18.7075L20.7069 7.70747C20.8514 7.567 20.9501 7.38616 20.99 7.18864C21.03 6.99112 21.0093 6.78614 20.9308 6.60055C20.8523 6.41497 20.7195 6.25744 20.5499 6.14861C20.3803 6.03978 20.1817 5.98473 19.9803 5.99067Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <span class="status-text">Đã tham gia</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className='group-post'>
                <div className='post-container'>
                    <div className='post-left'>
                        <div class="left-content">
                            <div class="content-container">
                                <div class="content-wrap">
                                    <div class="img-post">
                                        <img loading="lazy" src="https://cdn-sso.hellobacsi.com/2023/06/c76f05938d24d73ce5ced3a20f1daed1-ipMo63a7h0rxqlR2T1hocXHJIHJLc6.jpg" class="avatar" alt="avatar"/>
                                    </div>
                                    <div class="input-wrapper">
                                        <img class="pencil-icon" src="	https://hellobacsi.com/community/svg/postEditSolid.svg"/>
                                        <p >Tạo bài đăng của bạn</p>
                                    </div>
                                    <div class="right-button">
                                        <img class="image-icon" src="https://hellobacsi.com/community/svg/icon-image.svg"/>
                                    </div>
                                </div>
                                <div class="card-pointer">
                                </div>
                            </div>
                        </div>
                        <div className='post-detail'>
                            <Post />
                        </div>
                    </div>
                    <div className='post-right'>

                    </div>
                </div>
            </div>






            </div>
            
        </div>
    )
}

export default Groupdetail;