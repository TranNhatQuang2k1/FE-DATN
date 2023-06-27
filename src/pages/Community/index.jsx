import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import images from '../../assets'
import Button from '../../components/Button'
import Header from '../../components/Header'
import groupApi from '../../api/groupApi'
import Loading from '../../components/Loading'
import { path } from '../../constants/path'

const Bannergroup = () => {
    return (
        <div className='community-banner'>
            <div className='banner-container'>
                <div className='banner-wrap'>
                    <div class="arrow-left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><g filter="url(#filter0_dd_12599_34420)"><path d="M7.00024 19C7.00024 10.1634 14.1637 3 23.0002 3V3C31.8368 3 39.0002 10.1634 39.0002 19V19C39.0002 27.8366 31.8368 35 23.0002 35V35C14.1637 35 7.00024 27.8366 7.00024 19V19Z" fill="white"></path><path d="M20.9293 19L24.7503 15.179C25.1643 14.765 25.1643 14.093 24.7503 13.679C24.3363 13.265 23.6643 13.265 23.2503 13.679L18.6363 18.293C18.2453 18.684 18.2453 19.317 18.6363 19.707L23.2503 24.321C23.6643 24.735 24.3363 24.735 24.7503 24.321C25.1643 23.907 25.1643 23.235 24.7503 22.821L20.9293 19Z" fill="#595959"></path><path d="M23.0002 34C14.716 34 8.00024 27.2843 8.00024 19H6.00024C6.00024 28.3888 13.6114 36 23.0002 36V34ZM38.0002 19C38.0002 27.2843 31.2845 34 23.0002 34V36C32.3891 36 40.0002 28.3888 40.0002 19H38.0002ZM23.0002 4C31.2845 4 38.0002 10.7157 38.0002 19H40.0002C40.0002 9.61116 32.3891 2 23.0002 2V4ZM23.0002 2C13.6114 2 6.00024 9.61116 6.00024 19H8.00024C8.00024 10.7157 14.716 4 23.0002 4V2Z" fill="#DBDFE5"></path></g><defs><filter id="filter0_dd_12599_34420" x="0.000244141" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-2" dy="2"></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.263201 0 0 0 0 0.335725 0 0 0 0 0.393257 0 0 0 0.123689 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12599_34420"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-1" dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.264489 0 0 0 0 0.275745 0 0 0 0 0.28861 0 0 0 0.01 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_12599_34420" result="effect2_dropShadow_12599_34420"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_12599_34420" result="shape"></feBlend></filter></defs></svg>
                    </div>

                    <div className='banner-content'>
                        <div className="grid-layout">
                            <div className="item-grid">
                                <div className="item-wrap">
                                    <a className="banner-link">
                                        <div className="item-img">
                                            <div className="img-wrap">
                                                <div className='item-title' >
                                                    <h2 className="title-text">Chào mừng bạn đến với Cộng đồng Hello Bacsi</h2>
                                                    <div className="title-content">
                                                        <span className="">Nơi thành viên có thể chia sẻ những câu chuyện của bản thân, cùng thảo luận cách chăm sóc sức khoẻ và tương tác trực tiếp với các chuyên gia, bác sĩ tại Hello Bacsi.</span>
                                                    </div>
                                                    <Button title={'Đăng ký ngay'}/>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                <div class="arrow-right">
                     <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><g filter="url(#filter0_dd_12597_34423)"><path d="M7.00024 19C7.00024 10.1634 14.1637 3 23.0002 3C31.8368 3 39.0002 10.1634 39.0002 19C39.0002 27.8366 31.8368 35 23.0002 35C14.1637 35 7.00024 27.8366 7.00024 19Z" fill="white"></path><path d="M24.0712 19L20.2502 15.179C19.8362 14.765 19.8362 14.093 20.2502 13.679C20.6642 13.265 21.3362 13.265 21.7502 13.679L26.3642 18.293C26.7552 18.684 26.7552 19.317 26.3642 19.707L21.7502 24.321C21.3362 24.735 20.6642 24.735 20.2502 24.321C19.8362 23.907 19.8362 23.235 20.2502 22.821L24.0712 19Z" fill="#595959"></path><path d="M23.0002 34C14.716 34 8.00024 27.2843 8.00024 19H6.00024C6.00024 28.3888 13.6114 36 23.0002 36V34ZM38.0002 19C38.0002 27.2843 31.2845 34 23.0002 34V36C32.3891 36 40.0002 28.3888 40.0002 19H38.0002ZM23.0002 4C31.2845 4 38.0002 10.7157 38.0002 19H40.0002C40.0002 9.61116 32.3891 2 23.0002 2V4ZM23.0002 2C13.6114 2 6.00024 9.61116 6.00024 19H8.00024C8.00024 10.7157 14.716 4 23.0002 4V2Z" fill="#DBDFE5"></path></g><defs><filter id="filter0_dd_12597_34423" x="0.000244141" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-2" dy="2"></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.263201 0 0 0 0 0.335725 0 0 0 0 0.393257 0 0 0 0.123689 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12597_34423"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-1" dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.264489 0 0 0 0 0.275745 0 0 0 0 0.28861 0 0 0 0.01 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_12597_34423" result="effect2_dropShadow_12597_34423"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_12597_34423" result="shape"></feBlend></filter></defs></svg>
                </div>
                <ul class="bullet-nav">
                    <li class="bullet-nav__item">
                        <p class="bullet-nav__link scroll null" data-scheme="hellosites"></p>
                    </li>
                    <li class="bullet-nav__item ">
                        <p class="bullet-nav__link scroll active" data-scheme="hellosites"></p>
                    </li>
                    <li class="bullet-nav__item ">
                        <p class="bullet-nav__link scroll null" data-scheme="hellosites"></p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}
const GroupCard = ({img_bg,avartar_group,title,post,member,id}) => { 
    return (
        <div 
            class="card-item">
                <a 
                    href={`community/${id}?post=${post}?member=${member}`}
                    className="item-href">
                        <div className="cover-img">
                            <div className="cover-bg">
                                <div className="cover-container">
                                    <img className="cover-image" src={img_bg} alt=""/>
                                </div>
                            </div>
                            <div className="group-img">
                                <div className="group-img-container">
                                    <div className="group-img-wrap">
                                        <img 
                                            src={avartar_group} 
                                            className="group-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="community-name">
                            <h2 
                                className="name-group">{title}
                            </h2>
                        </div>
                        <div className="group-info">
                            <div className="info-wrap">
                                <div className="count-item">
                                    <span className="count-label">12&nbsp;</span>
                                    <span className="count-value">chủ đề</span>
                                </div>
                                <div className="count-item">
                                    <span className="count-label">{post}&nbsp;</span>
                                    <span className="count-value">bài đăng</span>
                                </div>
                                <div className="count-item">
                                    <span className="count-label">{member}&nbsp;</span>
                                    <span className="count-value">thành viên</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="group-status">
                        <div className="status-bar">
                            <div className="icon-btn">
                                <div className='icon-btn-container'>
                                    <button className="icon-btn-wrap">
                                        <div className="icon-btn-content">
                                            <span className="icon-status">
                                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.66659C10.9167 6.66659 11.6667 5.91659 11.6667 4.99992C11.6667 4.08325 10.9167 3.33325 10 3.33325C9.08334 3.33325 8.33334 4.08325 8.33334 4.99992C8.33334 5.91659 9.08334 6.66659 10 6.66659ZM10 8.33325C9.08334 8.33325 8.33334 9.08325 8.33334 9.99992C8.33334 10.9166 9.08334 11.6666 10 11.6666C10.9167 11.6666 11.6667 10.9166 11.6667 9.99992C11.6667 9.08325 10.9167 8.33325 10 8.33325ZM8.33334 14.9999C8.33334 14.0833 9.08334 13.3333 10 13.3333C10.9167 13.3333 11.6667 14.0833 11.6667 14.9999C11.6667 15.9166 10.9167 16.6666 10 16.6666C9.08334 16.6666 8.33334 15.9166 8.33334 14.9999Z" fill="#595959" fill-opacity="0.8"></path>
                                                </svg>
                                            </span>
                                            <span className=""></span>
                                        </div>
                                    </button>
                            </div>
                        </div>
                        <button className="status-btn">
                            <div className="btn-container">
                                <span className="btn-wrap">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9803 5.99067C19.7205 5.99841 19.4739 6.10699 19.2928 6.2934L8.99984 16.5864L5.70687 13.2934C5.61473 13.1974 5.50436 13.1208 5.38223 13.068C5.2601 13.0152 5.12867 12.9874 4.99563 12.986C4.86259 12.9846 4.73061 13.0099 4.60743 13.0601C4.48426 13.1104 4.37235 13.1848 4.27827 13.2789C4.1842 13.3729 4.10983 13.4849 4.05954 13.608C4.00926 13.7312 3.98405 13.8632 3.9854 13.9962C3.98676 14.1293 4.01464 14.2607 4.06743 14.3828C4.12021 14.505 4.19684 14.6153 4.29281 14.7075L8.29281 18.7075C8.48035 18.8949 8.73467 19.0002 8.99984 19.0002C9.26501 19.0002 9.51933 18.8949 9.70687 18.7075L20.7069 7.70747C20.8514 7.567 20.9501 7.38616 20.99 7.18864C21.03 6.99112 21.0093 6.78614 20.9308 6.60055C20.8523 6.41497 20.7195 6.25744 20.5499 6.14861C20.3803 6.03978 20.1817 5.98473 19.9803 5.99067Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <span className="status-text">Đã tham gia</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
    );
}
const Listgroup = ({list}) => {
    console.log(list)
    return (
        <div className='listgroup-container'>
            <div className='listgroup-wrap'>
                <div className='listgroup-content'>
                    <h1 className="heading">Tìm cộng đồng của bạn</h1>
                    <p className="text">Hãy cùng khám phá các Cộng đồng liên quan đến chuyên mục sức khỏe mà bạn quan tâm nhất.</p>
                    <div className='listgroup-layout'>
                        {
                            list.map((e, index) => {
                                return (
                                    <GroupCard 
                                        title={e.name} 
                                        id={e.id} 
                                        img_bg = {e.img_bg} 
                                        avartar_group={e.avartar_group} 
                                        post={e.postCount} 
                                        member={e.memberCount}
                                    />
                                )
                            })

                        }
                    </div>
                </div>  
            </div>
        </div>
    );
}
const Communitygroup = () => {
    const list = useRef([])
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const data = await groupApi.getListGroup({ params: {id: '1'}})
                // console.log(data.message);
                if(data.message)
                {
                    list.current = data.message;
                    // console.log(list)
                    SetLoading(false)
                }
            } catch (err) {

            }
        })() 
    }, []);
    if(loading) return (
        <Loading />
    )
    return (
        <div>
            <Bannergroup />
            <Listgroup list={list.current}/>
        </div>
    )
}
export default Communitygroup;