import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from "../../assets";
import './index.scss';

const CardCategory = ({title,urlImage, style}) => {
    return (
        <a 
            data-event-category="Recommended Topics" 
            data-event-action="Click" 
            class="card-container" 
            href="/suc-khoe-rang-mieng/">
                <div class="banner-card">
                    <div class="banner-img">
                        <img 
                            src= {urlImage}
                            alt="" 
                            // style= {style}
                            style={{width: 100 + '%', height: 100 + '%','object-fit': 'contain' }}
                        />
                    </div>
                </div>
                <div 
                    class="content-card">
                        <p 
                            data-size="sm" 
                            data-type="bold" 
                            class="content-card-name">
                                {title}
                        </p>
                </div>
        </a>
    )
}
export default CardCategory;

