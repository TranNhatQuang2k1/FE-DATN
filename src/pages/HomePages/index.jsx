import React, { useEffect, useState } from 'react'
import './index.scss'
import Header from '../../components/Header';
import Categories from './components/Categories';
import Banner from './components/Banner';
import Content from './components/Contents';
import Relation from './components/Relation';
import Profile from '../Profile';
import BMI from '../HealthTools/BMI';
import Community from './components/Community';
import Allcategories from '../Categories';
import Postsuggest from './components/Postsuggest';
import Communitygroup from '../Community';
const dataCategories = [
    {
        title : 'Sức khỏe răng miệng',
        urlImage : 'https://cdn.hellobacsi.com/wp-content/uploads/2021/03/Oral-Health.png'
    },
    {
        title : 'Dược liệu',
        urlImage : 'https://cdn.hellobacsi.com/wp-content/uploads/2021/03/Herbals-_-Alternatives.png'
    },
    {
        title : 'Tâm lý-Tâm thần',
        urlImage : 'https://cdn.hellobacsi.com/wp-content/uploads/2021/02/Healthy-Mind.png'
    },
    {
        title : 'Thể dục thể thao',
        urlImage : 'https://cdn.hellobacsi.com/wp-content/uploads/2021/02/Healthy-Fitness.png'
    },
    {
        title : 'Lão hóa lành mạnh',
        urlImage : 'https://cdn.hellobacsi.com/wp-content/uploads/2021/02/Healthy-Aging-1.png'
    },
    {
        title : 'Thói quen lành mạnh',
        urlImage : 'https://cdn.hellobacsi.com/wp-content/uploads/2021/02/Healthy-Habits.png'
    },
    
]
function HomePage() {
    const [check, setCheck] = useState(true);
    const handleMenu = () => {
        setCheck(true);
      };
    const handleRemove = () => {
        setCheck(false);
      };
    useEffect(() => {
        document.title = 'Trang chủ'
    }, [])
    return (
        <div className="homePage">
            <Header onClick={handleMenu}/>
            {/* <Login /> */}
            {/* {check && <Menu data= {dataCategories} onClick={handleRemove} check={check}/>} */}
            <Banner />
            <Categories />
            <Content />
            <Relation data = {dataCategories}/>
            <Postsuggest />
            {/* <Hearttool /> */}
            {/* <Profile /> */}
            {/* <BMI /> */}
            <Community />
            {/* <Communitygroup /> */}
            {/* <Allcategories /> */}
        </div>
    )
}

export default HomePage