import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from "../../assets";
import './index.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header_left">
                <div className="header_logo">
                        <img
                            src={images.logobacsi}
                            alt="logo"
                            className="logo"
                        />
                </div>
                <div className="header_search">
                    <div className="header_search_icon">
                    <svg width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.97183 10.8732C3.97183 7.0617 7.0617 3.97183 10.8732 3.97183C14.6848 3.97183 17.7746 7.0617 17.7746 10.8732C17.7746 14.6848 14.6848 17.7746 10.8732 17.7746C7.0617 17.7746 3.97183 14.6848 3.97183 10.8732ZM10.8732 2C5.97268 2 2 5.97268 2 10.8732C2 15.7738 5.97268 19.7465 10.8732 19.7465C12.9683 19.7465 14.8938 19.0204 16.4118 17.8061L20.3169 21.7112C20.702 22.0963 21.3262 22.0963 21.7112 21.7112C22.0963 21.3262 22.0963 20.702 21.7112 20.3169L17.8061 16.4118C19.0204 14.8938 19.7465 12.9683 19.7465 10.8732C19.7465 5.97268 15.7738 2 10.8732 2Z" fill="#8C8C8C">
                        </path>
                    </svg>
                    </div>
                    <div className="header_search_input">
                        <input 
                            type="search" 
                            id="search-input-menu-service" 
                            className="search-input-menu-service"
                            placeholder="Tìm kiếm HelloBacsi" 
                            aria-label="search" 
                            autocomplete="off" 
                            inputmode="search" 
                            pattern=".*" 
                            value=""
                        />
                    </div>
                </div>
            </div>
            <div className="header_center">
                <div className="header_center_topic">
                    
                </div>
                <div className="header_center_health">
                       
                </div>
                <div className="header_center_booking">
                       
                </div>
                <div className="header_center_group">
                       
                </div>
            </div>
            <div className="header_right">
                <div className="header_right_">
                    
                
                </div>
            </div>
        </header>
    )
}
export default Header;