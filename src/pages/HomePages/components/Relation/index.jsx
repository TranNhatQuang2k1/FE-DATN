import React, {useEffect, useState} from "react";
import images from "../../../../assets";
import './index.scss';
import CardCategory from "../../../../components/CardCategories";

const Relation  = ({data}) => {
    return (
        <div className="realtion-container">
            <div 
                class="title-wrap">
                    <div class="title-content">
                        <h3
                            className="title-content-text"
                        >
                            Các chuyên mục liên quan
                        </h3>
                        <div 
                            class="relation-see-more">
                                <a  
                                    className="see-more-detail"
                                    href="/categories/">
                                        <h6 
                                            data-tag="h6" 
                                            class="see-more-text"
                                            >
                                            Xem tất cả chủ đề
                                        </h6>
                                        <img 
                                            style={{width: 18+ 'px', height: 18+ 'px'}}
                                            src="https://hellobacsi.com/images/chevronRightBlue.svg" 
                                            alt="Xem tất cả chủ đề"
                                        />
                                 </a>
                        </div>
                    </div>
            </div>

            <div className="relation-content">
                <div className="content-wrap">
                    <div className="content-detail">
                        {
                            data.map((e) => {
                                if(e){
                                    return (
                                        <CardCategory  title={e.title} urlImage= {e.urlImage}/>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Relation;