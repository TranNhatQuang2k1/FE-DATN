import {React, useEffect, useState} from "react";
import images from "../../../../../../assets";
import './index.scss'
import Button from '../../../../../../components/Button'
import Loading from '../../../../../../components/Loading'
import { useLocation, useNavigate } from "react-router-dom";
import {path} from '../../../../../../constants/path'
import Deny from "../../../components/Deny";
import Advice from "../../../components/Advice";
import Recommend from "../../../components/Recommend";
const riskadvice = [
    {
        risk: 'Nguy cơ cao',
        content: 'Dựa trên kết quả của bài tầm soát, bạn được phân loại có nguy cơ cao. Bạn có trên 20% nguy cơ mắc các bệnh liên quan đến mạch máu như đau tim và tử vong do mạch vành trong thời gian 10 năm',
    },
    {
        risk: 'Nguy cơ trung bình',
        content: 'Dựa trên kết quả của bài tầm soát, bạn được phân loại có nguy cơ cao. Bạn có trên 20% nguy cơ mắc các bệnh liên quan đến mạch máu như đau tim và tử vong do mạch vành trong thời gian 10 năm',
    },
    {
        risk: 'Nguy cơ thấp',
        content: 'Dựa trên kết quả của bạn, bạn được phân loại có nguy cơ thấp. Bạn có khoảng 10% hoặc thấp hơn nguy cơ mắc các bệnh liên quan đến mạch máu như đau tim và tử vong do mạch vành trong khoảng thời gian 10 năm',
    },
]
const advice = [
    {
        content: 'Giữ lối sống lành mạnh',
    },
    {
        content: 'Tuân thủ chế độ ăn có lợi cho sức khỏe',
    },
    {
        content: 'Luyện tập thể dục đều đặn',
    },
    {
        content: 'Đọc thêm các bài viết về sức khỏe tim mạch để cập nhật thông tin liên tục cho bản thân',
    }
]
const FraminghamResult = () => {
    let image,advice1;
    const navigate = useNavigate();
    const location = useLocation();
    const risk = parseFloat(new URLSearchParams(location.search).get('risk'));
    if (risk <= 1) {
        advice1 ='Nguy cơ thấp';
        image = images.nguycothap
   } else if (risk > 1 && risk <= 2) {
       advice1 ='Nguy cơ trung bình';
       image = images.nguycotrungbinh
   } else {
       advice1 ='Nguy cơ cao';
       image = images.nguycocao
   }
   let advice2 = riskadvice.find(item => item.risk === advice1)?.content
    return (
        <div class="filter-result-container">
            <div class="filter-result-wrap">
                <div class="resuldt-detail">
                    <div class="detail-container">
                        <img src= {image} alt="Main image"/>
                        <div class="spacing"></div>
                        <h1>
                            <div class="detail-number">
                                <p>Bạn có {advice1} mắc bệnh tim</p>
                            </div>
                        </h1>
                        <div class="detail-desc">
                            <p></p>
                        </div>
                        <div class="">{advice2}</div>
                    </div>
                    <Advice advice={advice}/>
                    <Deny />
                </div>
                    <Recommend />
            </div>
        </div>
    )
}

export default FraminghamResult;