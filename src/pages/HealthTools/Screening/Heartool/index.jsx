import {React, useState} from "react";
import images from "../../../../assets";
import './index.scss'
import Infor from "../../../../components/Infor";
import ScreenInfor from "../../../../components/ScreenInfor";
import Filter from "./Filter";
import Deny from "../components/Deny";
import { useLocation, useNavigate } from "react-router-dom";

const Hearttool = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const item = new URLSearchParams(location.search).get('item');
    const parsedItem = JSON.parse(item);
    console.log(parsedItem?.data[0]?.infor[0])
    const handleFilter = () => {
        if(parsedItem?.id ===0) navigate('/health-tools/filter')
        if(parsedItem?.id ===1) navigate('/health-tools/framingham')
        if(parsedItem?.id ===2) navigate('/health-tools/stroke')
        if(parsedItem?.id ===3) navigate('/health-tools/covid')
    }
    return(
        <div style = {{'box-sizing': 'border-box'}}>
        <div class="heart-page">
            <div class="heart-page-container">
                <div class="container-left">
                    <h1>{parsedItem?.desc}</h1>
                    <h4 class="heart-page-review">
                        <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8.451v.552a6 6 0 11-3.558-5.484" stroke="#595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M14 4.333l-6.154 6L6 8.535" stroke="#595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <div class="doctor">
                            <p>Tham vấn y khoa: <a href="https://hellobacsi.com/expert/ngo-vo-ngoc-huong/" target="_blank">Thạc sĩ - Bác sĩ CKI Ngô Võ Ngọc Hương</a> ngày 28 tháng 10, 2021</p>
                        </div>
                    </h4>
                
                <div class="heart-page-button">
                    <button class="next-btn" onClick={handleFilter}>
                        <span class="fAwTdkg">
                            <span class="S2kaD9B">Check now</span>
                        </span>
                    </button>
                </div>
                </div>
                <div class="container-right">
                    <img src= {parsedItem?.image} alt= {parsedItem?.title}/>
                </div>
            </div>
            
        </div>
            <div>
                <ScreenInfor data={parsedItem?.data[0]?.infor[0]}/>
            </div>
            <Infor list={parsedItem?.data[1]?.refer}/>
            <div>
                <Deny />
            </div>
        </div>
    )
}

export default Hearttool;