import React, {useEffect, useState} from "react";
import images from "../../../../assets";
import './index.scss';
const listCategories = [
    {
        'id' : 0,
        'href' : 'https://hellobacsi.com/categories/' ,
        'imgsrc': 'https://hellobacsi.com/images/homepage-banner/discover-menu.svg',
        'title' : 'Chuyên mục'
    },
    {
        
        'href' : 'https://hellobacsi.com/care/' ,
        'imgsrc': 'https://hellobacsi.com/images/homepage-banner/book-doctor-menu.svg?v=2',
        'title' : 'Đặt lịch với bác sĩ'
    },
    {
        'href' : 'https://hellobacsi.com/categories/' ,
        'imgsrc': 'https://hellobacsi.com/images/homepage-banner/health-tool-menu.svg',
        'title' : 'Sức khỏe của tôi'
    },
    {
        'href' : 'https://hellobacsi.com/categories/' ,
        'imgsrc': 'https://hellobacsi.com/images/homepage-banner/community-menu.svg',
        'title' : 'Cộng đồng'
    }
]
function CategoriesCard ({imgSrc, title}) {
    return (
            <a 
                href="/categories" 
                data-event-category="Home Page Nav" 
                data-event-action="Click" 
                data-event-label="https://hellobacsi.com/categories/" 
                className="Categories">
                    <img 
                        src = {imgSrc} 
                        className="Categories-img"
                    />
                    <p 
                        data-size="s3" 
                        data-type="semiBold" 
                        className="Categories-title">{title}
                    </p>
            </a>
    )
}
const Categories = () => {
    return (
        <div className="Categories-container">
            <div className="Categories-content">
                {
                    listCategories.map((e) => {
                        if(e){
                            return (
                                <CategoriesCard imgSrc={e.imgsrc} title={e.title}/>
                            )
                        }
                    })
                }
            </div>
            <div class="Categories-line">
                <hr class="Categories-line-content"/>
            </div>
        </div>
    )
}
export default Categories;