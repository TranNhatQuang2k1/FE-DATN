import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
import Infor from '../../../../components/Infor'

const ResultBMI = () => {
    return (
        <div className='ResultBMI-container'>
            <div className='ResultBMI-wrap'>
                <div className='ResultBMI-left'>
                    <div className="left-title">
                        <h2 className='title-text'>
                            <span>Chỉ số BMI của bạn là 
                                <span className='text-number'>19.9</span>
                            </span>
                        </h2>
                    </div>

                    <div className="left-content">
                        <div className="content-container">
                            <div className=""></div>
                            <div className=""></div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-underweight-male-inactive.svg" className="img-icon"/>
                                </div>
                                <div className="item-number">
                                    <p>Thiếu cân</p>
                                    <p>&lt; 18.4</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="">
                                    <img src="	https://hellobacsi.com/images/bmi-healthy-male-active.svg" className=""/>
                                </div>
                                <div className="item-number">
                                    <p>Khỏe mạnh</p>
                                    <p >18.5 - 22.9</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-overweight-male-inactive.svg" className=""/>
                                </div>
                                <div className="item-number">
                                    <p>Thừa cân</p>
                                    <p>23 - 24.9</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-obese_level_1-male-inactive.svg" className="sc-8e5851bc-3 BYUIl"/>
                                </div>
                                <div className="item-number">
                                    <p>Béo phì độ 1</p>
                                    <p>25 - 29.9</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-obese_level_2-male-inactive.svg" className="sc-8e5851bc-3 BYUIl"/>
                                </div>
                                <div className="item-number">
                                    <p>Béo phì độ 2</p>
                                    <p>&gt; 30</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-bar">
                            <div className="bar-container">
                                <div className="number-result">
                                    <h4 className="">19.9</h4>
                                </div>
                                <div className="result-1">
                                    <div className="result-1-detail"></div>
                                    <div className="number-1-detail">
                                        <h6>0</h6>
                                    </div>
                                </div>
                                <div className="result-2">
                                    <div className="sc-8e5851bc-9 kRKBFn"></div>
                                    <div className="sc-8e5851bc-8 joNPCq">
                                        <h6 data-tag="h6" className="xzO2I0N sc-8e5851bc-1 eTyDPA milestone">18.5</h6>
                                    </div>
                                </div>
                                <div className="result-3">
                                    <div className="sc-8e5851bc-9 hTfyVA"></div>
                                    <div className="sc-8e5851bc-8 joNPCq">
                                        <h6 data-tag="h6" className="xzO2I0N sc-8e5851bc-1 eTyDPA milestone">23</h6>
                                    </div>
                                </div>
                                <div className="result-4">
                                    <div className="sc-8e5851bc-9 hEozlP"></div>
                                    <div className="sc-8e5851bc-8 joNPCq">
                                        <h6 data-tag="h6" className="xzO2I0N sc-8e5851bc-1 eTyDPA milestone">25</h6>
                                    </div>
                                </div>
                                <div className="result-5">
                                    <div className=""></div>
                                    <div className="">
                                        <h6 data-tag="h6" className="">30+</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ResultBMI-post'>

                </div>
            </div>
        </div>
    )
}
export default ResultBMI;