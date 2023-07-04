import React, { useState } from 'react'
import './index.scss'
import images from '../../assets'

const ScreenInfor = ({data}) => {
    
    return (
        <div class="lp-page-description">
            <div class="lp-page-container">
                <div class="page-wrap">
                    <h2>{data?.title}</h2>
                    <ul>
                        {
                            data?.contents.map((e) => {
                                return (
                                    <li>{e.content}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ScreenInfor;