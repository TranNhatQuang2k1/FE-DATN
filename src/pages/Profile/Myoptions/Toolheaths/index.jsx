import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
import Tabline from '../../../../components/Tabline';

let toollist = [
    {
        title: 'Tính chỉ số BMI',
        result: 19.9,
        unit: 'kg/m2',
        updatetime: 'Cập nhật 3 ngày trước',
        urlimage: images.BMI,
    },
    {
        title: 'Tính chỉ số BMR',
        result: 1745.63,
        unit: 'kcal',
        updatetime: 'Cập nhật 2 ngày trước',
        urlimage: images.BMR,
    },
    {
        title: 'Nhịp tim lý tưởng',
        result: 144,
        unit: 'bmp',
        updatetime: 'Cập nhật 2 ngày trước',
        urlimage: images.heartrate,
    }
]
function toolinfor(title,result,unit,updatetime,urlimage) {
    return (
                <div class="infor-container">
                    <div class="infor-wrapper">
                        <div>
                            <p class="infor-title" size="14" color="">{title}</p>
                            <div class="infor-content">
                                <div class="infor-content-detail">
                                    <p class="detail-result" size="20" color="">{result}</p>
                                    <p class="detail-unit" size="12" color="">{unit}</p>
                                </div>
                                <p class="update-time" size="12" color="">{updatetime}</p>
                            </div>
                        </div>
                        <div class="see-detail">
                            <div class="detail-wrapper">
                                <p class="detail-text" size="12" color="#595959">Chi tiết</p>
                                <span class="icon-wrapper">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-custo="fill" class="icon icon--chevronRight">
                                           <path d="M10.8921 10L7.70797 6.81586C7.36297 6.47086 7.36297 5.91086 7.70797 5.56586C8.05297 5.22086 8.61297 5.22086 8.95797 5.56586L12.803 9.41086C13.1288 9.73669 13.1288 10.2642 12.803 10.5892L8.95797 14.4342C8.61297 14.7792 8.05297 14.7792 7.70797 14.4342C7.36297 14.0892 7.36297 13.5292 7.70797 13.1842L10.8921 10Z" fill="#BFBFBF"></path>
                                    </svg>
                                </span>
                                
                            </div>
                            <img src={urlimage} alt=""/>
                        </div>
                    </div>
                </div>
    );
}
const Toolheath =() => {
    window.history.pushState(null, '', '/profile/hoso');
    return (
        <div 
            class="myheath-contanier">
                <div class="myheath-wrapper">
                    <div class="myheath-imformation">
                        <p 
                            class="myheath-content" color="">Tuổi
                        </p>
                        <p 
                            class="myheath-content" color="">22 tuổi
                        </p>
                    </div>
                    <div class="myheath-imformation1">
                        <p 
                            class="myheath-content" color="">Chiều cao
                        </p>
                        <p 
                            class="myheath-content" color="">175 cm
                        </p>
                    </div>
                    <div class="myheath-imformation1">
                        <p 
                            class="myheath-content" color="">Cân nặng
                        </p>
                        <p 
                            class="myheath-content" color="">61 kg
                        </p>
                    </div>
                    <div class="myheath-imformation1">
                        <p class="myheath-content" color="">Hoạt động</p>
                        <p class="myheath-content" color="">Trung bình</p>
                    </div>
                    <a 
                        className="edit-heath">
                            <span className="icon-wrapper">
                                <svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" data-custo="fill" class="icon icon--edit">
                                    <path d="M19.1719 2C18.4481 2 17.7244 2.27562 17.1719 2.82812L16 4L20 8L21.1719 6.82812C22.2759 5.72412 22.2759 3.93313 21.1719 2.82812C20.6194 2.27562 19.8956 2 19.1719 2ZM14.5 5.5L3 17V21H7L18.5 9.5L14.5 5.5Z" fill="rgb(45, 135, 243);"></path>
                                </svg>
                            </span>
                    </a>
            </div>
            <div class="tool-infor">
                {toollist?.map(e => {
                    return (
                        toolinfor(e.title, e.result,e.unit,e.updatetime,e.urlimage)
                    )
                })}
            </div>
        </div>
    );
}
export default Toolheath;