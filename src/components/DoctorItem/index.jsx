import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.scss'
import Button from '../Button'
import { AiFillStar } from 'react-icons/ai'

function DoctorItem({ data, mode, key }) {
    const navigate = useNavigate()
    const arr = [1, 2, 3, 4, 5]
    return (
        <div class="doctorItem">
                <div class="icon-star">
                    <div className="appointmentDetail__content-rating">
                        { arr.map(item => {
                            if (
                                item <= data.rate
                            ) {
                                return (
                                    <span key={item}>
                                        <AiFillStar className="star icon__active" />
                                    </span>
                                )
                            }
                            return (
                                <span key={item}>
                                    <AiFillStar className="star" />
                                </span>
                            )
                        })}
                        <div>Numbers Rate {data?.numberOfReviews}</div>
                        <div>Giới Tính: {data?.user?.gender ? 'Nam': 'Nữ'}</div>
                    </div>

                </div>
                <div class="Item-container">
                    <div class="item-wrap">
                        <div class="doctor-wrap">
                            <a className="avartar-img">
                                <img src={data.user.image} class="img" />
                            </a>
                            <div class="doctor-name">
                                <a className='name-wrap'><p class="name-text">BS. {data?.user?.name}</p></a>
                                <a className='name-specialtly'>
                                    <p className='specialtly-text'>{data?.specialty?.name}</p>
                                </a>
                                <div class="booking-doctor">
                                    <a className='book-wrap'>
                                        <div class="book-text">
                                            <p class="">Đặt lịch khám</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="cost-doctor">
                                    <a className='cost-wrap'>
                                        <div class="icon" >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.334A6.674 6.674 0 001.335 8a6.674 6.674 0 006.667 6.667A6.674 6.674 0 0014.667 8a6.674 6.674 0 00-6.666-6.666zm1.88 9.164c-.081.229-.195.428-.343.594a1.689 1.689 0 01-.532.403c-.106.052-.219.094-.338.127V12a.667.667 0 01-1.333 0v-.366a2.375 2.375 0 01-.379-.13 1.762 1.762 0 01-.584-.424 2.042 2.042 0 01-.408-.7 1.456 1.456 0 01-.094-.377l-.002-.055c0-.34.276-.614.615-.614a.6.6 0 01.59.442l.048.186c.052.155.119.269.206.362a.735.735 0 00.3.197c.11.038.225.057.341.057a.89.89 0 00.35-.064.702.702 0 00.405-.444c.034-.104.05-.216.05-.336 0-.138-.015-.258-.046-.363a.813.813 0 00-.153-.285 1.163 1.163 0 00-.274-.235 2.722 2.722 0 00-.409-.211 7.178 7.178 0 01-.755-.381 2.5 2.5 0 01-.582-.459 1.87 1.87 0 01-.376-.608 2.309 2.309 0 01-.133-.83c0-.278.04-.531.119-.76a1.768 1.768 0 011.171-1.135V4a.667.667 0 011.333 0v.468c.14.043.273.097.395.172.198.12.367.278.505.47.139.194.249.404.325.667.017.06.044.169.044.277 0 .339-.208.613-.613.613-.281 0-.475-.165-.58-.453-.04-.108-.099-.302-.18-.414a.658.658 0 00-.562-.292.75.75 0 00-.328.066.622.622 0 00-.228.181.742.742 0 00-.131.273 1.28 1.28 0 00-.043.338c0 .121.014.23.043.329.028.098.077.19.147.273.069.083.161.162.275.235.115.073.257.15.427.228.274.127.524.258.749.393.225.134.418.288.58.463.16.175.286.379.375.61a2.3 2.3 0 01.134.826c0 .288-.041.546-.122.775z" fill="#8C8C8C"></path></svg>
                                            <p className='text'>Phí tư vấn trong khoảng</p>
                                            <p className='cost-num'>100.000&nbsp;₫- 500.000&nbsp;₫</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='clinic-container'>
                        <span className='clinic-wrap'>
                            <img src= {data.clinic.image} className='img-clinic' />
                        </span>
                        <div class="clinic-name">
                                <p class="name-wrap">
                                    <a className='name-href'>{data?.clinic?.name}</a>
                                </p>
                                <div class="address-clinic">
                                    <div class="address-wrap">
                                        <p class="wrap-text">
                                            <a className='address-text'>{data?.clinic?.street} {data?.clinic?.city}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <button className='btn-booking'>
                                <span class="btn-booking-wrap">
                                    <span class="booking-text">Đặt lịch hẹn</span>
                                </span>
                            </button> */}

                            <Button title={'Đặt lịch hẹn'}
                                onClick={() => {
                                    navigate(`/detailDoctor/${data.id}`)
                                }}
                            />
                        </div>
                    </div>
            </div>
    )
}

export default DoctorItem