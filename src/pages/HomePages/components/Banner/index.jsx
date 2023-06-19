import React, {useEffect, useState} from "react";
import images from "../../../../assets";
import './index.scss';
import Menu from "../../../../components/Category";

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
                                        Công cụ tính nhịp tim lý tưởng - Hiểu về nhịp tim của bạn
                                    </h2>
                                    <div class="layout-left-content">
                                        <span class="layout-left-span">
                                            <div 
                                                class="" 
                                                data-is-mobile="false">
                                                <p 
                                                    class="span-text" 
                                                    data-size="p3" 
                                                    data-type="regular">
                                                    Tìm hiểu nhịp tim nghỉ ngơi bình thường và nhịp tim tối đa trong độ tuổi của bạn cũng như cường độ tập thể dục và các yếu tố khác ảnh hưởng đến nhịp tim như thế nào.
                                                </p>
                                            </div>
                                        </span>
                                    </div>
                                <a 
                                    href="https://hellobacsi.com/health-tools/cong-cu-do-nhip-tim/" 
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
                                    src="https://cdn.hellobacsi.com/wp-content/uploads/2019/07/Target-heart-rate.png" 
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