import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../../assets';
import Button from '../../../../../components/Button';
import { useNavigate } from 'react-router-dom';

const Recommend = () => {
    const navigate = useNavigate()
    return (
        <div class="recommend">
                    <div class="recommend-doctor">
                        <div class="recommend-wrap">
                                <img src={images.bannerAuth} alt="care-banner" class="care-banner-img"/>
                                <p class="text">Đặt lịch cùng hellobacsi</p>
                                <p class="text1">Chúng tôi đề xuất bác sĩ tốt nhất cho bạn</p>
                                <Button title={'Đặt lịch ngay'} onClick={() => navigate(`/detailSpecialist/1`)}/>
                        </div>
                    </div>
                    <h2>Bài viết liên quan</h2>
                    <div class="post-recommend">
                        <article class="article-wrap">
                            <div class="banner">
                                <a class="HgbW6-m" href="https://hellobacsi.com/benh-nao-he-than-kinh/dot-quy-phinh-mach-nao/biet-nguyen-nhan-de-phong-ngua-dot-quy">
                                    <img src={images.BMR} alt=""/>
                                </a>
                            </div>
                            <div class="content">
                                <div class="inner-content">
                                    <p class="label">
                                        <a class="HgbW6-m" href="#">Bệnh về não & hệ thần kinh</a>
                                        <a class="bookmark">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.75 2.25H5.25C4.425 2.25 3.75 2.925 3.75 3.75V15.75L9 13.5L14.25 15.75V3.75C14.25 2.925 13.575 2.25 12.75 2.25Z" fill="#D2D6DC"></path>
                                            </svg>
                                        </a>
                                    </p>
                                    <h3 class="title">
                    
                                            30 yếu tố nguy cơ có thể gây ra đột quỵ

                                    </h3>
                                </div>
                                <div class="footer">
                                    <div class="footer-wrap">
                                        <div class="author">
                                            <div class="avatar"></div>
                                            <div class="poster">
                                                <p class="wIj6fkD ">
                                                    <a href=""><span class="name"></span>• </a>
                                                    <span></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
    )
}
export default Recommend;