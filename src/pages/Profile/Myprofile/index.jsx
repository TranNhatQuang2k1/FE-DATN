import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../assets'
import ProfileContext from '../Context/ProfileContext';
let profile = [
    {
        title: 'Hồ sơ',
        urlImage: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png',
    },
    {
        title: 'Sức khỏe của tôi',
        urlImage: 'https://cdn-icons-png.flaticon.com/512/6003/6003149.png',
    },
    {
        title: 'Đã lưu',
        urlImage: 'https://cdn-icons-png.flaticon.com/512/2731/2731143.png',
    },
    {
        title: 'Lịch sử đặt chỗ',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmJzLehkKJ2ZZ3R32BjYxBqIb1iQtgMJhPA&usqp=CAU',
    },
    {
        title: 'Cộng đồng',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VO4rvX8Tgx5brnyH4hVTuG8P3AwNg4M5lg&usqp=CAU',
    },
    {
        title: 'Thiết lập tài khoản',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1frvU6zPZoxJAaQB5xHkBTq6Zq_5hucUtIw&usqp=CAU',
    },
    {
        title: 'Đăng xuất',
        urlImage: 'data:image/png;base64,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',
    },
]
const ProfileCard = ({title,urlImage, onClick, isSelected}) => {
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

const Myprofile = ({ onSelectedItem,data }) => {
    const [selected, setSelected] = useState(null);
    const handleClickItem = (index) => {
      onSelectedItem(index);
    //   console.log(index)
    };
  return (
    <div className='myprofile-container'>
        {profile.map((e, index) => (
          <ProfileCard
            key={index}

            title={e.title}
            urlImage={e.urlImage}
            onClick={() => 
                {
                    handleClickItem(index)
                    setSelected(index)
                }}
            isSelected={selected === index}
          />
        ))}
    </div>
  );
};

export default Myprofile;