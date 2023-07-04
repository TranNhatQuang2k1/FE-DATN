import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from "../../../assets";
import './index.scss';

const CardSpecialtly = ({title,urlImage, style,id}) => {
    const navigate = useNavigate()
    return (
        <a 
            class="card-container" onClick={()=> {
                navigate(`/detailSpecialist/${id}`)
            }}>
                <div class="banner-card">
                    <div class="banner-img">
                        <img 
                            src= {urlImage}
                            alt="" 
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
export default CardSpecialtly;

