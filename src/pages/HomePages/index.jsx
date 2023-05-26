import React, { useEffect, useState } from 'react'
import './index.scss'
import Header from '../../components/Header';
import Menu from '../../components/Category';
import Categories from './components/categories';
import Banner from './components/Banner';
import Content from './components/Contents';
import Relation from './components/Relation';
import Hearttool from '../HealthTools/Heartool';
import Profile from '../Profile';
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
    useEffect(() => {
        document.title = 'Trang chủ'
    }, [])
    return (
        <div className="homePage">
            <Header />
            {check && <Menu data= {dataCategories}/>}
            <Banner />
            <Categories />
            <Content />
            <Relation data = {dataCategories}/>
            <Hearttool />
            <Profile />
            <button onClick={() => setCheck(!check)}/>
        </div>
    )
}

export default HomePage