import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import images from '../../assets'
import CardCategory from '../../components/CardCategories'
import Loading from '../../components/Loading'
import categoryApi from '../../api/categoryApi'
import SearchInput from '../../components/SearchInput'

const Allcategories = () => {
    const list = useRef([])
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const data = await categoryApi.getListCategory({ params: {id: '1'}})
                console.log(data.message);
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
                    <h1 className='search-title'>Không biết bắt đầu từ đâu?</h1>
                    <div className='seach-input'>
                        <div className='input-wrap'>
                            {/* <input 
                                type="text" id="categories-search" 
                                name="categories-search" aria-label="text" 
                                value="" autocomplete="off" inputmode="text" 
                                pattern=".*" placeholder="Tìm kiếm chuyên mục" 
                                className='input-content'
                            /> */}
                            <SearchInput 
                                placeholder={'Tìm kiếm chuyên mục'}
                            
                            />
                            {/* <div class="icon-search">
                                <img 
                                    src="https://hellobacsi.com/images/search.svg" 
                                    alt="Tìm kiếm chuyên mục"
                                    
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-container'>
                <div className='content-layout'>
                    {
                        list.current?.map((e) => {
                            if(e){
                                return(
                                    <div className="layout-content">
                                        <CardCategory  
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
export default Allcategories;