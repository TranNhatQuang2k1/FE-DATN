import React, {useEffect, useState} from "react";
import images from "../../../../assets";
import './index.scss';
import Menu from "../../../../components/Category";
import { path } from "../../../../constants/path";

const Banner = () => {
    return (
        <div className="banner-container">
            {/* <Menu /> */}
            <div>
                <div>
                    <div 
                        // style="background-image:url(&quot;/images/homepage-banner/banner-bg.svg&quot;)" 
                        class="content-banner">
                            <div 
                                class="content-banner-layout">
                                <div class="layout-left">
                                    <h2 class="layout-left-title">
                                    Tính chỉ số BMI - Chỉ số khối cơ thể
                                    </h2>
                                    <div class="layout-left-content">
                                        <span class="layout-left-span">
                                            <div 
                                                class="" 
                                                data-is-mobile="false">
                                                <p 
                                                    class="span-text" >
                                                    Sử dụng công cụ này để kiểm tra chỉ số khối cơ thể (BMI) để biết bạn có đang ở mức cân nặng hợp lý hay không. Bạn cũng có thể kiểm tra chỉ số BMI của trẻ tại đây.
                                                </p>
                                            </div>
                                        </span>
                                    </div>
                                <a 
                                    href={path.bmi}
                                    target="_blank" 
                                    class="banner-button">
                                        <button 
                                            className="btn-click" >
                                                <span 
                                                    className="btn-text">
                                                        <span className="btn-text">Tính ngay</span>
                                                </span>
                                        </button>
                                </a>
                            </div>
                            <div class="banner-img">
                                <img 
                                    src= 'https://cdn.hellobacsi.com/wp-content/uploads/2023/05/unnamed-24.png'
                                    class="home-banner-image" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;