import React, {useEffect, useState} from "react";
import images from "../../../../assets";
import './index.scss';
import Title from "../../../../components/Title";
import PostCard from "../../../../components/PostCard";
import BMI from "../../../HealthTools/BMI";

const Postsuggest  = ({data}) => {
    return (
        <div className="postsuggest-container">
            <div className="postsuggest-wrap">
                <div className="suggest-left">
                    <div className="left-container">
                        <div className="left-wrap">
                            <Title title={'Bệnh truyền nhiễm'} seemore={'Xem thêm'} />
                            <div className="post-card">
                                <PostCard 
                                    stylearticle={{'flex-direction': 'row', padding: 0+ 'px', gap: 16+ 'px'}}
                                    style={{ width: 272+ 'px', height: 198+ 'px',}}
                                />
                                <hr class="post-top-space space"></hr>
                                <PostCard 
                                    stylearticle={{'flex-direction': 'row', padding: 0+ 'px', gap: 16+ 'px'}}
                                    style={{ width: 272+ 'px', height: 198+ 'px',}}
                                />
                                <hr class="post-top-space space"></hr>
                                <PostCard 
                                    stylearticle={{'flex-direction': 'row', padding: 0+ 'px', gap: 16+ 'px'}}
                                    style={{ width: 272+ 'px', height: 198+ 'px',}}
                                />
                                <hr class="post-top-space space"></hr>
                                <PostCard 
                                    stylearticle={{'flex-direction': 'row', padding: 0+ 'px', gap: 16+ 'px'}}
                                    style={{ width: 272+ 'px', height: 198+ 'px',}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="suggest-rigt">
                    <div className="right-wrap">
                                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postsuggest;