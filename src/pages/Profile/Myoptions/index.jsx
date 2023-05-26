import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../assets'

const Abcd =({id}) => {
    return (
        <div 
            class="sc-18cna1w-0 jDCFsh">
                <div class="sc-qfl6ni-0 dMLJmq">
                    <div class="sc-qfl6ni-1 cFKeBk">
                        <p 
                            class="sc-ev4olt-0 hXPdhF" color="">Tuổi
                        </p>
                        <p 
                            class="sc-ev4olt-0 hXPdhF" color="">22 tuổi
                        </p>
                    </div>
                <div class="sc-qfl6ni-1 cFKeBk">
                    <p 
                        class="sc-ev4olt-0 hXPdhF" color="">Chiều cao
                    </p>
                    <p 
                        class="sc-ev4olt-0 hXPdhF" color="">175 cm
                    </p>
                </div>
                <div class="sc-qfl6ni-1 cFKeBk">
                    <p 
                        class="sc-ev4olt-0 hXPdhF" color="">Cân nặng
                    </p>
                    <p 
                        class="sc-ev4olt-0 hXPdhF" color="">61 kg
                    </p>
                </div>
                <div class="sc-qfl6ni-1 cFKeBk">
                    <p class="sc-ev4olt-0 hXPdhF" color="">Hoạt động</p>
                    <p class="sc-ev4olt-0 hXPdhF" color="">Trung bình</p>
                </div>
                    <a 
                        data-event-category="User Profile" 
                        data-event-action="Edit Health Tool Click" 
                        data-event-label="https://id.hellobacsi.com/user/health/trackers" 
                        class="sc-qfl6ni-2 kXThAS">
                            <span class="sc-jbb2f9-0 cvXnba icon-wrapper">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-custo="fill" class="icon icon--edit">
                                    <path d="M19.1719 2C18.4481 2 17.7244 2.27562 17.1719 2.82812L16 4L20 8L21.1719 6.82812C22.2759 5.72412 22.2759 3.93313 21.1719 2.82812C20.6194 2.27562 19.8956 2 19.1719 2ZM14.5 5.5L3 17V21H7L18.5 9.5L14.5 5.5Z" fill="#595959"></path>
                                </svg>
                            </span>
                    </a>
                </div>
                <div class="sc-18cna1w-1 hWHoWm">
                    <div class="sc-q1ct8l-0 cbzRgb">
                        <div class="sc-q1ct8l-1 eDbwgZ">
                            <div>
                                <p class="sc-ev4olt-0 bIvnyU sc-q1ct8l-2 MIyDH" size="14" color="">Tính chỉ số BMI</p>
                                <div class="sc-3qe7oz-0 kbOAjJ">
                                    <div class="sc-3qe7oz-1 gogbRG">
                                        <p class="sc-ev4olt-0 fRplS" size="20" color="">19.9</p>
                                        <p class="sc-ev4olt-0 jrOUAv" size="12" color="">kg/m2</p>
                                    </div>
                                    <p class="sc-ev4olt-0 jrOUAv" size="12" color="">Cập nhật 3 ngày trước</p>
                                </div></div><div class="sc-q1ct8l-3 fBxdOZ">
                            <div class="sc-q1ct8l-6 tVRJg">
                                <p class="sc-ev4olt-0 jrOUAv" size="12" color="#595959">Chi tiết</p>
                                <span class="sc-jbb2f9-0 jxodNO icon-wrapper">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-custo="fill" class="icon icon--chevronRight">
                                        <path d="M10.8921 10L7.70797 6.81586C7.36297 6.47086 7.36297 5.91086 7.70797 5.56586C8.05297 5.22086 8.61297 5.22086 8.95797 5.56586L12.803 9.41086C13.1288 9.73669 13.1288 10.2642 12.803 10.5892L8.95797 14.4342C8.61297 14.7792 8.05297 14.7792 7.70797 14.4342C7.36297 14.0892 7.36297 13.5292 7.70797 13.1842L10.8921 10Z" fill="#BFBFBF"></path>
                                    </svg>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
const Myoptions = () => {
    const [id,setId] =useState(0);
    return (
        <div className='option-container'>
            <h1 className='option-heading'>
                Sức khỏe của tôi
            </h1>
            <div className='tabline-container'>
                <div className='wrapper-tab'>
                    <div className='tab-header'>
                        <a className={`kzfxTH tab-item ${id == 0 ? 'color-item' : '' }`}
                            onClick={() => {
                                setId(0);
                            }}
                        >
                            Theo dõi sức khỏe
                            {id == 0 ? <div class="border"></div> : ''}
                        </a>
                        <a className={`kzfxTH tab-item margin-item ${id == 1 ? 'color-item' : '' }`}
                             onClick={() => {
                                setId(1);
                            }}
                        >
                            Sàng lọc bệnh
                            {id == 1 ? <div class="border"></div> : ''}
                        </a>
                        <a className={`kzfxTH tab-item margin-item ${id == 2 ? 'color-item' : '' }`}
                             onClick={() => {
                                setId(2);
                            }}
                        >
                            Nuôi dạy con
                            {id == 2 ? <div class="border"></div> : ''}
                        </a>
                    </div>
                </div>
            </div>
            {id === 0 && <Abcd id={id}/>}
            {id === 1 && <Abcd id={id}/>}
            {id === 2 && <Abcd id={id}/>}
        </div>
    )
}
export default Myoptions;