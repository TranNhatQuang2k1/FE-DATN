import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../assets'
import Infor from '../../../components/Infor'
import ResultBMI from '../BMI/ResultBMI'

const BannerHeathTool = ({title,desc,urlbg,urlimage,style,doctor,date}) => {
    return (
        <div className='BMI-banner'>
        <div 
            className='banner-bg'
            style={{ backgroundImage: `url(${urlbg})`}}
        >
            <div className='bg-container'>
                <div className='bg-wrapper'>
                    <div className="icon-container">
                        <img src = {'https://hellobacsi.com/images/tool-home-icon.svg'} className='icon-BMI'/>
                    </div>
                    <div className="BMI-des">
                        <div class="des-wrapper">
                            <h2 
                                // style={{color: '#284A75'}}
                                style={style}
                                class="des-title"
                            >{title}</h2>
                        </div>
                        <div class="des-content">
                            <p 
                                class="content-text"
                                style={{color: '#262626'}}
                                >{desc}</p>
                        </div>
                        <div class="des-screeing">
                            <img src="https://hellobacsi.com/images/check-circle.svg" alt="" style={{color: '#262626'}}/>
                            <p className="des-doctor">
                                <span> 
                                    <a  className=''>
                                        {doctor}
                                    </a> {date}
                                </span>
                                <span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default BannerHeathTool;