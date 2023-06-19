import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../assets'
import BannerHeathTool from './Banner'
import Header from '../../components/Header'
import Myoptions from '../Profile/Myoptions'

const HealthTools = () => {
    return(
        <div className='heathtools-wrap'>
            <Header />
            <BannerHeathTool 
                title={'Công cụ kiểm tra sức khỏe'} 
                desc={'Các công cụ đánh giá sức khỏe dễ sử dụng này sẽ giúp bạn đánh giá các yếu tố quan trọng trong sức khỏe tổng quan và chất lượng sức khỏe của bạn.'} 
                urlbg={'https://hellobacsi.com/images/bg-tool-pc.svg'} 
                urlimage= {'https://hellobacsi.com/images/tool-home-icon.svg'}
            />
            <div className='heath-container'>
            <div className='heath-options'>
                <Myoptions 
                            title={'Tất cả công cụ'}
                            option1={'Sàng lọc bệnh'}
                            option2={'Thể dục thể thao'}
                            option3={'Mang thai & Nuôi con'}
                />
            </div>
            </div>
        </div>
    )
}
export default HealthTools;