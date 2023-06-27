import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
const CardScreeing= () => {
    return (
        <a 
            href="" 
            class="card-container" 
        >
                <div class="card-wrap">
                    <img 
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_cardiovascular.png" 
                        alt="Công cụ sàng lọc tầm soát bệnh tim mạch"
                        className='img-icons'
                    />
                    <h6 className='name-tool'>Công cụ sàng lọc tầm soát bệnh tim mạch</h6>
                </div>
        </a>
    )
}
export default CardScreeing;