import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../assets'
const Tabline = ({title1,title2,title3, handletabline}) => {
    const [id,setId] =useState(0);
    return (
        <div className='tabline-container'>
            <div className='wrapper-tab'>
                <div className='tab-header'>
                    <a className={`kzfxTH tab-item ${id == 0 ? 'color-item' : '' }`}
                        onClick={() => {
                            setId(0);
                            handletabline(0);
                        }}
                    >
                        {title1}
                        {id == 0 ? <div class="border"></div> : ''}
                    </a>
                    <a className={`kzfxTH tab-item margin-item ${id == 1 ? 'color-item' : '' }`}
                         onClick={() => {
                            setId(1);
                            handletabline(1);
                        }}
                    >
                        {title2}
                        {id == 1 ? <div class="border"></div> : ''}
                    </a>
                    <a className={`kzfxTH tab-item margin-item ${id == 2 ? 'color-item' : '' }`}
                         onClick={() => {
                            setId(2);
                            handletabline(2);
                        }}
                    >
                        {title3}
                        {id == 2 ? <div class="border"></div> : ''}
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Tabline;