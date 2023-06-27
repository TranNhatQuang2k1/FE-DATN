import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../assets'
import BannerHeathTool from './Banner'
import Header from '../../components/Header'
import Myoptions from '../Profile/Myoptions'
import CardScreeing from './Screening/components'

const HealthTools = () => {
    return(
        <div className='heathtools-wrap'>
            <BannerHeathTool 
                title={'Công cụ kiểm tra sức khỏe'} 
                desc={'Các công cụ đánh giá sức khỏe dễ sử dụng này sẽ giúp bạn đánh giá các yếu tố quan trọng trong sức khỏe tổng quan và chất lượng sức khỏe của bạn.'} 
                urlbg={images.bg_toolhome} 
                urlimage= {images.hometool_icon}
            />
            <div className='heath-container'>
            <div className='heath-options'>
                <Myoptions 
                            title={'Tất cả công cụ'}
                            // option1={'Sàng lọc bệnh'}
                            // option2={'Thể dục thể thao'}
                            // option3={'Mang thai & Nuôi con'}
                />
                <div className='heath-wrap'>
                    <div className='heath-tool'>
                        <CardScreeing />
                    </div>
                </div>

            </div>
            
            </div>
        </div>
    )
}
export default HealthTools;