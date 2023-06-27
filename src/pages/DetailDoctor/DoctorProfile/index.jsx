import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import './index.scss'
DoctorProfile.propTypes = {}

function DoctorProfile({ doctor, dataHref }) {
    console.log(doctor)
    const navigate = useNavigate()
    const handleMessage = () => {
        navigate(`/messageApp/${doctor.user_id}`)
    }
    return (
        <div className="doctorProfile">
            <div className="doctorProfile-container">
                <div className="doctorProfile-info">

                    <div class="item-wrap">
                        <div class="doctor-wrap">
                            <a className="avartar-img">
                                <img src= {doctor.user.image} class="img" />
                            </a>
                            <div class="doctor-name">
                                <a className='name-wrap'><p class="name-text">BS. {doctor?.user?.name}</p></a>
                                <a className='name-specialtly'>
                                    <p className='specialtly-text'>{doctor?.specialty?.name}</p>
                                </a>
                                <div class="booking-doctor">
                                    <a className='book-wrap'>
                                        <div class="book-text">
                                            <p class="">Đặt lịch khám</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Categories-line">
                        <hr class="Categories-line-content"/>
                    </div>
                </div>
                <div>
                <div class="info-section">
                    <h4 class="sc-ksBlkl dAFkhu heading">Thông tin bác sĩ</h4>
                    <p className=''>
                        <span>
                            Bác sĩ Chuyên khoa I Hồ Thanh Tiểng hiện đang đảm nhiệm vai trò Bác sĩ chuyên khoa Nội tổng hợp kiêm Giám đốc chuyên môn và là Trưởng khoa Bác sĩ gia đình tại Phòng khám Đa khoa Thành Công. 
                            Về quá trình sự nghiệp, bác sĩ nguyên là Phó giám đốc Bệnh viện Nguyễn Trãi, từng đảm đương nhiều vai trò vị trí quan trọng về lĩnh vực Nội tiết, Nội tổng hợp tại các cơ sở phòng khám, bệnh viện lớn. 
                        </span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
