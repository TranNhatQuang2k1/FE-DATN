import React, {useEffect, useState} from "react";
import images from "../../assets";
import './index.scss';
const Button = ({title,onClick}) => {
    return (
        <a 
            target="_blank" 
            class="banner-button">
            <button type="submit"
                onClick={onClick}
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