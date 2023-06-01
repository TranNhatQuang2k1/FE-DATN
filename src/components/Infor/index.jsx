import React, {useEffect, useState} from "react";
import images from "../../assets";
import './index.scss';
const ListInfor = ({title, content}) => {
    const [check,setCheck] = useState(true);
    return (
        <div class="info-list-content">
                            <div 
                                onClick={() => {setCheck(!check)}} 
                                class="content-title">
                                <div className="title-img">
                                    { check ? <svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg> 
                                        : <svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                            </svg>
                                    }
                                </div>
                                <div className="title-text">
                                    <p className={check ? "text-detail1" : "text-detail2"}>{title}</p>
                                </div>
                            </div>
                            <div  className={check ? 'list-content-text': `${'set-height'} list-content-text ` }>
                                <div 
                                    class="text-imfor"> {content}
                                </div>
                            </div>
                        </div>
    )
}
const Infor = ({list}) => {
    return (
        <div 
            class="heart-page-info">
                <div class="heart-page-container">
                    <h2 class="heart-page-title">
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 14A6 6 0 108 2a6 6 0 000 12z" fill="#2D87F3"></path>
                            <path d="M8 11V8M8 5h.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span>Thông tin</span>
                    </h2>
                    <div 
                        class="info-list">
                        {
                            list?.map((e) => {
                                return (
                                    <ListInfor title={e.title} content={e.content}/>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
              
    )
}
export default Infor;