import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from "../../assets";
import './index.scss';
const Card = ({href,title,titleChild,urlImage,styleIcon, styleImg}) => {
    return (
                                <div className="right-content-child">
                                    <a 
                                        href={href}
                                        data-event-category="Hamburger Navigation" 
                                        data-event-action="Engage Click 1" 
                                        data-event-label="https://hellobacsi.com/health-tools/cong-cu-tinh-can-nang-khi-mang-thai/" 
                                        className="right-tool">
                                            <img 
                                                src="https://hhg-common.hellobacsi.com/common/navToolCardBg.svg" 
                                                alt="" 
                                                loading="lazy" 
                                                class="icons-tool"/>
                                            <div class="right-tool-text">
                                                <p class="text-title">{title}</p>
                                                <p class="text-child">{titleChild}</p>
                                                <div class="more-detail">Xem thêm
                                                    <img 
                                                        src="https://hhg-common.hellobacsi.com/common/chevronRightActive.svg"
                                                        className="icon-detail"
                                                    />
                                                </div>
                                            </div>
                                            <div class="child-icon" style={styleIcon}>
                                                <img 
                                                    className="icons-img"
                                                    loading="lazy" 
                                                    alt="Công cụ tính cân nặng mẹ bầu khi mang thai" 
                                                    // src="https://cdn.hellobacsi.com/wp-content/uploads/2019/11/Pregnancy-weight-gain.png"
                                                    src = {urlImage}
                                                    style={styleImg}
                                                />  
                                            </div>
                                    </a>
                                </div> 
    )
}
const Section = ({title, urlImage}) => {
    return (
        <div className="section-content">
            <a 
                className="iconMenu" 
                data-event-category="Hamburger Navigation" 
                data-event-action="Click" 
                data-event-label="https://hellobacsi.com/suc-khoe-rang-mieng/" 
                data-is-heading-category="false" 
                href="https://hellobacsi.com/suc-khoe-rang-mieng/" 
                data-theme="helloSites">
                    <div className="icon-section">
                        <img
                            style={{ width: 32 + 'px', height: 38+ 'px' }}
                            loading="lazy" 
                            alt="Sức khỏe răng miệng" 
                            src= {urlImage}/>
                    </div>
                    <p
                        className="text-section"
                    >
                        {title}
                    </p>
            </a>
        </div>
    )
}
const Menu = ({data, onClick, check}) => {
    return (
        <div className={`menu-container ${check ? 'menu-active': ''}`}>
            <div className="menu-content">
                <div className="menu-icons">
                    <div 
                        className="icons-wrap"
                        onClick={onClick}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M18 18L6 6" stroke="#3E3F58" stroke-width="1.3" stroke-linecap="round"></path></svg>
                    </div>
                </div>

                <div className="menu-layout">
                    <div className="menu-layout-left">
                        <div className="left-container">
                            <div className="left-title">
                                <h2 
                                    data-tag="h6" 
                                    data-font-weight="semibold" 
                                    class="text-title ">Chuyên mục sức khỏe
                                </h2>
                                {
                                    data?.map((e) => {
                                        return(
                                            <Section title= {e.title} urlImage={e.urlImage}/>
                                        )
                                    })
                                }
                                <a 
                                    href="https://hellobacsi.com/categories/"  
                                    data-event-label="https://hellobacsi.com/categories/" 
                                    class="see-all-container">
                                    <div 
                                        data-theme="helloSites" 
                                        data-is-heading-category="false" 
                                        class="see-all-detail"
                                    >
                                        Xem tất cả chuyên mục
                                            <div class="see-all-icon">
                                                <img 
                                                    className="icons"
                                                    src="https://hhg-common.hellobacsi.com/common/chevronRightActive.svg" 
                                                    style= {{ width : 16 + ' px', height: 16+ 'px'}}
                                                />
                                            </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-layout-right">
                        <div className="right-container">
                            <div 
                                className="title-right">
                                    <h2 className="title-right-text">
                                        Công cụ nổi bật
                                    </h2>
                            </div>
                            <div class="right-content">
                                <Card
                                    href = "https://hellobacsi.com/health-tools/cong-cu-tinh-can-nang-khi-mang-thai/"
                                    title = 'Công cụ tính cân nặng mẹ bầu khi mang thai'
                                    titleChild = 'Với mỗi trường hợp, công cụ tính cân nặng khi mang thai cho biết cân nặng của mẹ bầu và thai nhi bao nhiêu là an toàn.'
                                    urlImage = 'https://cdn.hellobacsi.com/wp-content/uploads/2019/11/Pregnancy-weight-gain.png'
                                    styleIcon= {{ width : 150 + 'px', height: 75+ 'px', background: '#fff', 'border-radius': '4px', 'opacity': '0.7', 'align-items': 'center',}}
                                />
                                <Card
                                    href = "https://hellobacsi.com/health-tools/cong-cu-tinh-can-nang-khi-mang-thai/"
                                    title = 'Đo chỉ số BMI'
                                    titleChild = 'Kết quả đo chỉ số BMI giúp bạn biết mình đang thừa cân, béo phì hay suy dinh dưỡng để kịp thời điều chỉnh lối sống.'
                                    urlImage = 'https://cdn.hellobacsi.com/wp-content/uploads/2017/10/BMI.png'
                                />
                                <Card
                                    href = "https://hellobacsi.com/health-tools/cong-cu-tinh-can-nang-khi-mang-thai/"
                                    title = 'Biểu đồ tăng trưởng của trẻ em'
                                    titleChild = 'Biểu đồ tăng trưởng này giúp đánh giá chỉ số khối cơ thể (BMI) của trẻ, biểu thị cho sự tăng trưởng của trẻ dựa trên yếu tố bách phân vị do Tổ chức Y tế Thế giới (WHO) khuyến nghị.'
                                    urlImage = 'https://cdn.hellobacsi.com/wp-content/uploads/2022/10/bieu-do-tang-truong-cua-tre-em_featured-image.png'
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;