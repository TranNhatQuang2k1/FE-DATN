import React from 'react'
import { path } from '../../../constants/path'
import { NavLink } from 'react-router-dom'
import './index.scss'

import { useSelector } from 'react-redux'
import images from '../../../assets'
// import { RiMoneyDollarCircleFill } from 'react-icons/ri'
const MenuCard = ({title,urlImage, onClick, isSelected}) => {
    return (
        <a 
            className= {`Card-container ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
                <div class="Card-content">
                    <div class="icon-wrapper">
                        <img 
                            src={urlImage} 
                            className='img-profile'
                        />
                    </div>
                    {title}
                </div>
        </a>
    )

}
function MenuSystem() {
    const userData = useSelector(state => state.user.profile)
    return (
        <ul className="menuSystem">
            {userData.role.name === 'ROLE_ADMIN' &&<li className="menuSystem-item">
                <NavLink
                    to={path.dashBoard}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.heart} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Tổng quan
                </NavLink>
            </li>}
            <li className="menuSystem-item">
                <NavLink
                    to={path.clinicManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.call} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Phòng khám
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.specialistManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.call} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Chuyên khoa
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.hospitalManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.call} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Bệnh viện
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.patientManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.dalieu} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Bệnh nhân
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.doctorManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.lichsu} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Bác sĩ
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.scheduleManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.lichsu} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Lịch khám
                </NavLink>
            </li>
            {userData.role.name === 'ROLE_DOCTOR' && (
                <li className="menuSystem-item">
                    <NavLink
                        to={path.appointmentManagement}
                        className={({ isActive }) =>
                            isActive
                                ? 'menuSystem-item-link--active menuSystem-item-link'
                                : 'menuSystem-item-link'
                        }
                    >
                        <span className="menuSystem-item-icon">
                            <div class="icon-wrapper">
                                <img 
                                    src={images.lichsu} 
                                    className='img-profile'
                                />
                            </div>
                        </span>
                        Cuộc hẹn
                    </NavLink>
                </li>
            )}
            {userData.role.name === 'ROLE_ADMIN' && (
                <li className="menuSystem-item">
                    <NavLink
                        to={path.appointmentManagement}
                        className={({ isActive }) =>
                            isActive
                                ? 'menuSystem-item-link--active menuSystem-item-link'
                                : 'menuSystem-item-link'
                        }
                    >
                        <span className="menuSystem-item-icon">
                            <div class="icon-wrapper">
                                <img 
                                    src={images.call} 
                                    className='img-profile'
                                />
                            </div>
                        </span>
                        Cuộc hẹn
                    </NavLink>
                </li>
                // <MenuCard title={'Cuộc Hẹn'} urlImage={images.birthday}/>
            )}
            <li className="menuSystem-item">
                <NavLink
                    to={path.revenueManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <div class="icon-wrapper">
                            <img 
                                src={images.call} 
                                className='img-profile'
                            />
                        </div>
                    </span>
                    Doanh thu
                </NavLink>
            </li>
        </ul>
    )
}

export default MenuSystem
