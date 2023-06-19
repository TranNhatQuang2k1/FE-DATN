import React, {useEffect, useState} from "react";
import images from "../../assets";
import './index.scss';
const Title = ({title,seemore}) => {
    return (
        <div 
                class="title-wrap">
                    <div class="title-content">
                        <h3
                            className="title-content-text"
                        >
                            {title}
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
                                            {seemore}
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
    )
        
}
export default Title;