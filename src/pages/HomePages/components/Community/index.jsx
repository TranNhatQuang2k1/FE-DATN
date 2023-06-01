import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
let group = [
    {
        name: 'Mang thai',
        bg: 'https://cdn-together.hellobacsi.com/2021/07/D-Pregnancy-061124000000.png',
        img: '	https://cdn-together.hellobacsi.com/2021/07/pregnancy-05092941.png',
        topic: 12,
        post: '1.9k',
        member: '26k',
        status: 'Đã tham gia',
    },
    {
        name: 'Tiểu đường',
        bg: 'https://cdn-together.hellobacsi.com/2021/07/D-Diabetes%20123-035514000000.png',
        img: 'https://cdn-together.hellobacsi.com/2021/07/diabeties-08023136.png',
        topic: 12,
        post: '402',
        member: '5.7k',
        status: 'Đã tham gia',
    },
    {
        name: 'Nuôi dạy con',
        bg: '	https://cdn-together.hellohealthgroup.com/2022/09/1662452642_631703a280bc87.30726551.png',
        img: 'https://cdn-together.hellobacsi.com/2021/07/parenting-08023243.png',
        topic: 11,
        post: '1.2k',
        member: '8.1k',
        status: 'Đã tham gia',
    },
    {
        name: 'Bệnh truyền nhiễm',
        bg: 'https://cdn-together.hellobacsi.com/2021/08/banner-04081248.png',
        img: 'https://cdn-together.hellobacsi.com/2021/08/avatar-04081247.png',
        topic: 12,
        post: '1.9k',
        member: '26k',
        status: 'Tham gia cộng đồng',
    }
]
const Itemgroup = ({name,bg,img,topic,post,member,status}) => {
    return (
<div class="item-grid">
                                                <div class="item-container">
                                                    <a href="/community/mang-thai" className=''>
                                                        <div className='thumbnail-bg' style={{ backgroundImage: `url(${bg})` }}>
                                                            <div class="thumbnail-container">
                                                                <img class="thumbnail" src={img} alt="thumbnail"/>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div className='infor-group'>
                                                        <a href="/community/mang-thai">
                                                            <h5 >{name}</h5>
                                                        </a>
                                                        <div class="statictis">
                                                            <div class="statictis-item">
                                                                <p className='item-number'>{topic}</p>
                                                                <p className='item-text'>Chủ đề</p>
                                                            </div>
                                                            <div class="statictis-item">
                                                                <p className='item-number'>{post}</p>
                                                                <p className='item-text'>Bài đăng</p>
                                                            </div>
                                                            <div class="statictis-item">
                                                                <p className='item-number'>{member}</p>
                                                                <p className='item-text'>Thành viên</p>
                                                            </div>
                                                        </div>
                                                        <a href="/community/mang-thai" class="btn-join">
                                                            <button class="button">
                                                                <span class="">
                                                                    <span class="">{status}</span>
                                                                </span>
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>       
    )
}
const Community = () => {
    return (
        <div className='community-container'>
            <div className='container-wrap'>
                <div className='community-title'>
                    <h3 
                        class="title-text">Tìm cộng đồng của bạn
                    </h3>
                    <a 
                        href="/community" 
                        class="see-all">
                            <p>Xem tất cả</p>
                            <img 
                                src="https://hellobacsi.com/images/chevronRightBlue.svg"
                                className='img-seeall'
                            />
                    </a>
                </div>
                <div className='community-group'>
                    <div className='group-wrap'>
                        <div className='group-content'>
                                <div className='content-container'>
                                    <div className='content-detail'>
                                        <div className='grid-layout'>
                                            {group?.map(e => {
                                                return(
                                                    <Itemgroup 
                                                        name={e.name}
                                                        bg={e.bg}
                                                        img={e.img}
                                                        topic={e.topic}
                                                        post={e.post}
                                                        member={e.member}
                                                        status={e.status}
                
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Community;