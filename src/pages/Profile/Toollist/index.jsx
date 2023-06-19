import React, { useEffect, useState } from 'react'
import './index.scss'


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
export default toolinfor;