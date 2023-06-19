import React, {useEffect, useState} from "react";
import images from "../../assets";
import './index.scss';
const Button = ({title}) => {
    return (
        <a 
            href="https://hellobacsi.com/health-tools/cong-cu-do-nhip-tim/" 
            target="_blank" 
            class="banner-button">
            <button 
                className="btn-click" >
                <span 
                    className="btn-text">
                    <span className="btn-text">{title}</span>
                </span>
            </button>
        </a>
    );
}
export default Button;