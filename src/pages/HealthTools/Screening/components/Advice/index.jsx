import React, { useEffect, useState } from 'react'
import './index.scss'

const Advice = ({advice}) => {
    return (
        <div class="detail-advice">
            <h1>Khuyến nghị</h1>
            <div class="advice-content">
                <ul>
                    {advice?.map(e => {
                        return (
                            <li>{e.content}</li>
                        )
                    })}
                </ul>
            </div>
    </div>
    )
}
export default Advice;