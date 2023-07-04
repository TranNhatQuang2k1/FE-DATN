import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from "../../assets";
import './index.scss';
import Menu from "../Category";
import { path } from "../../constants/path";
import { useDispatch, useSelector } from "react-redux";
import specialistApi from "../../api/specialistApi";
import doctorApi from "../../api/doctorApi";
import categoryApi from "../../api/categoryApi";
import useComponentVisible from '../../hooks/useComponentVisible'
import { IoIosNotifications } from 'react-icons/io'
import Notification from './components/Notification'
import { toast } from "react-toastify";
import groupApi from "../../api/groupApi";

const Header = ({onClick}) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [showNotification, setShowNotification] = useState(false)
    const toggleNotifications = () => {
        setShowNotification(!showNotification)
    }

    const notificationList = useSelector(
        state => state?.notification?.notificationList
    )
    let notificationCount=0;
    if(notificationList)
    {
        notificationCount = notificationList?.filter(
            item => item.status === false
        ).length
    }
    
    const { ref, isComponentVisible } = useComponentVisible(false)
    useEffect(() => {
        if (isComponentVisible) setShowNotification(true)
        else setShowNotification(false)
    }, [isComponentVisible])
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const userData = useSelector(state => state.user.profile)
    const token = localStorage.getItem('access_token')
    const navigate = useNavigate()
    const [check, setCheck] = useState(false);
    const [title, setTitle] = useState(['Chuyên mục sức khỏe']);
    const handleProfile = () => {
        navigate(path.profile)
    }
    const handleMenu = () => {
        setCheck(false);
      };
    const handleRemove = () => {
        setCheck(!check);
      };
      useEffect(() => {
        (async () => {
            try {
                // const respone = await specialistApi.getAllSpecialist()
                // const doctor = await doctorApi.getAllDoctor()
                // const chuyenmuc = await specialistApi.getAllSpecialist()
                // const congcu = await doctorApi.getAllDoctor()
                const group = await groupApi.getListGroup();
                const respone = await categoryApi.getListCategory();
                setData(respone.message)
                console.log(respone)
                setIsLoading(false)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                })
            }
        })()
    }, [])
    return (
        <header className="header">
            <div className="header_left">
                <div className="header_logo"
                    onClick={() => {
                        navigate(path.home)
                    }}
                >
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
                <div className="header_center_topic "  onClick={
                    () => {
                        navigate(path.category)
                        handleRemove();
                    }
                } >
                    <div className="content-center">
                        <b className="text-content">Chuyên mục</b>
                    </div>
                    <div className="icon-drop">
                        <img
                            src={images.dropdown}
                            alt="dropdown"
                            className="dropdown"
                        />
                    </div>
                    
                </div>
                <div className="header_center_topic" onClick={() => {
                    navigate(path.healthtools)
                }}>
                    <div className="content-center">
                        <b className="text-content">Kiểm tra sức khỏe</b>
                    </div>
                    <div className="icon-drop">
                        <img
                            src={images.dropdown}
                            alt="dropdown"
                            className="dropdown"
                        />
                    </div>
                </div>
                <div className="header_center_topic"  onClick={
                    () => {
                        navigate(path.allspecialtly)
                    }
                }>
                    <div className="content-center">
                        <b className="text-content">Đặt lịch với bác sĩ</b>
                    </div>
                    <div className="icon-drop">
                        <img
                            src={images.dropdown}
                            alt="dropdown"
                            className="dropdown"
                        />
                    </div>
                </div>
                <div className="header_center_topic" onClick={
                    () => {
                        navigate(path.group)
                    }
                }>
                    <div className="content-center">
                        <b className="text-content">Cộng đồng</b>
                    </div>
                    <div className="icon-drop">
                        <img
                            src={images.dropdown}
                            alt="dropdown"
                            className="dropdown"
                        />
                    </div>
                </div>
            </div>
            <div className="header_right">
            {  token && (userData?.role?.name === 'ROLE_DOCTOR' || userData?.role?.name === 'ROLE_ADMIN') &&
                <div className="header_right_booking">
                  
                    <button className="bt_booking"
                        onClick={() => {
                            navigate('/system')
                        }}
                    >
                        Hệ Thống
                    </button>
                
                </div>
                }
                {!token  && <button 
                    class="bt_login" 
                    data-size="md" 
                    data-color="tertiary" 
                    data-has-icon="true" 
                    data-theme="helloSites" 
                    data-is-loading="false">
                        <div class="login_content"
                            onClick={() => {
                                navigate('/login')
                            }}
                        >
                                <img 
                                    src="https://hhg-common.hellobacsi.com/common/login.svg"
                                    width="19" 
                                    height="19"
                                    className="img_login"
                                />
                            <span 
                                class="text_login">Đăng nhập
                            </span>
                        </div>
                </button>}
                { token &&
                        <div className="header-action-notify" ref={ref}>
                            <span className="header-action-notify-count">
                                {notificationCount}
                            </span>
                            <span onClick={toggleNotifications} >
                                <IoIosNotifications className="icon-notify"/>
                            </span>
                
                            {showNotification && isComponentVisible && (
                                <div className="header-action-notify-area">
                                    <Notification />
                                </div>
                            )}
                        </div>

                }
                {token && 
                    <div className="avartar-profile">
                        <a className="img-container" onClick={handleProfile}>
                            <div className="img-wrap">
                                <img 
                                    src={userData?.image}
                                    className="icon-img"
                                />
                            </div>
                        </a>
                    </div>
                }
                
            </div>
            {/* {check  && <Menu data= {data} title={title} onClick={handleRemove} check={check}
            />} */}
        </header>
    )
}
export default Header;