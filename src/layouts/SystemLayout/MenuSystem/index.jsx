import React from 'react'
import { path } from '../../../constants/path'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { useSelector } from 'react-redux'
import images from '../../../assets'
import {
    FaClinicMedical,
    FaHospital,
    FaUserAlt,
    FaUserNurse
} from 'react-icons/fa'
import { MdDashboard, MdFolderSpecial } from 'react-icons/md'
import { AiFillSchedule, AiOutlineGroup } from 'react-icons/ai'
import { RiGroup2Fill, RiMoneyDollarCircleFill } from 'react-icons/ri'
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
            {userData.role.name === 'ROLE_ADMIN' &&
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
                            {/* <img 
                                src={images.call} 
                                className='img-profile'
                            /> */}
                            <FaClinicMedical />
                        </div>
                        {/* <FaClinicMedical /> */}
                    </span>
                    Phòng khám
                </NavLink>
            </li>
            }
            {userData.role.name === 'ROLE_ADMIN' && <li className="menuSystem-item">
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
                            {/* <img 
                                src={images.call} 
                                className='img-profile'
                            /> */}
                            <MdFolderSpecial />
                        </div>
                    </span>
                    Chuyên khoa
                </NavLink>
            </li>}

            {userData.role.name === 'ROLE_ADMIN' && <li className="menuSystem-item">
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
                            {/* <img 
                                src={images.call} 
                                className='img-profile'
                            /> */}
                            <FaHospital />
                        </div>
                    </span>
                    Bệnh viện
                </NavLink>
            </li>}
            {userData.role.name === 'ROLE_ADMIN' && <li className="menuSystem-item">
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
                            {/* <img 
                                src={images.dalieu} 
                                className='img-profile'
                            /> */}
                            <FaUserAlt />
                        </div>
                    </span>
                    Bệnh nhân
                </NavLink>
            </li>}
            {userData.role.name === 'ROLE_ADMIN' && <li className="menuSystem-item">
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
                            {/* <img 
                                src={images.lichsu} 
                                className='img-profile'
                            /> */}
                            <FaUserNurse />
                        </div>
                    </span>
                    Bác sĩ
                </NavLink>
            </li>}
            {userData.role.name === 'ROLE_DOCTOR' && <li className="menuSystem-item">
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
                            {/* <img 
                                src={images.lichsu} 
                                className='img-profile'
                            /> */}
                            <AiFillSchedule />
                        </div>
                    </span>
                    Lịch khám
                </NavLink>
            </li>}
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
                                {/* <img 
                                    src={images.call} 
                                    className='img-profile'
                                /> */}
                                <AiFillSchedule />
                            </div>
                        </span>
                        Cuộc hẹn
                    </NavLink>
                </li>
                // <MenuCard title={'Cuộc Hẹn'} urlImage={images.birthday}/>
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
                                {/* <img 
                                    src={images.call} 
                                    className='img-profile'
                                /> */}
                                <RiGroup2Fill />
                            </div>
                        </span>
                        Cộng đồng
                    </NavLink>
                </li>
                // <MenuCard title={'Cuộc Hẹn'} urlImage={images.birthday}/>
            )}
        </ul>
    )
}

export default MenuSystem
