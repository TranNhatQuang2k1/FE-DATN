import React, { useEffect, useRef, useState } from 'react'
// import './index.scss'
import images from '../../assets'
import CardCategory from '../../components/CardCategories'
import Loading from '../../components/Loading'
import specialistApi from '../../api/specialistApi'
import CardSpecialtly from './CardSpecialtly'
const data = [
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
const Allspecialtly = () => {
    const list = useRef([])
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const data = await specialistApi.getAllSpecialist({ params: {id: '1'}})
                // console.log(data.message);
                if(data.message)
                {
                    list.current = data.message;
                    console.log(list)
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
        <div className='allcate-container'>
            <div className='img-bg'></div>
            <div className='sreach-container'>
                <div className='search-wrap'>
                    <h1 className='search-title'>Tìm kiếm chuyên khoa?</h1>
                    <div className='seach-input'>
                        <div className='input-wrap'>
                            <input 
                                type="text" id="categories-search" 
                                name="categories-search" aria-label="text" 
                                value="" autocomplete="off" inputmode="text" 
                                pattern=".*" placeholder="Tìm kiếm chuyên mục" 
                                className='input-content'
                            />
                            <div class="icon-search">
                                <img 
                                    src="https://hellobacsi.com/images/search.svg" 
                                    alt="Tìm kiếm chuyên mục"
                                    
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-container'>
                <div className='content-layout'>
                    {
                        list.current.map((e) => {
                            if(e){
                                return(
                                    <div className="layout-content">
                                        <CardSpecialtly
                                            id= {e.id}
                                            title={e.name} 
                                            urlImage= {e.image}
                                            style={{height: 150+ 'px', width: 162+ 'px'}}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Allspecialtly;