import {React, useEffect, useState} from "react";
import images from "../../../../../assets";
import './index.scss'
import Button from '../../../../../components/Button'
import Loading from '../../../../../components/Loading'
import { useLocation, useNavigate } from "react-router-dom";
import {path} from '../../../../../constants/path'
import Deny from "../../components/Deny";
import Advice from "../../components/Advice";
import Recommend from "../../components/Recommend";
const riskadvice = [
    {
        risk: 'Nguy cơ cao',
        content: ' vì thế việc điều trị chống đông máu bằng đường uống được khuyến nghị. Vui lòng tham khảo ý kiến ​​bác sĩ để biết thêm về cách điều trị này.',
    },
    {
        risk: 'Nguy cơ trung bình',
        content: 'vì thế việc điều trị chống đông máu bằng đường uống được khuyến nghị. Vui lòng tham khảo ý kiến ​​bác sĩ để biết thêm về cách điều trị này.',
    },
    {
        risk: 'Nguy cơ thấp',
        content: 'vì thế không khuyến cáo điều trị chống đông máu.',
    },
]
const advice = [
    {
        content: 'Đảm bảo một chế độ ăn uống lành mạnh, cân bằng dinh dưỡng là rất quan trọng. Không nên ăn quá nhiều bất kỳ loại thực phẩm nào, đặc biệt là thực phẩm nhiều muối và thực phẩm chế biến sẵn.',
    },
    {
        content: 'Tập thể dục thường xuyên cũng sẽ giúp làm giảm cholesterol và giữ cho chỉ số huyết áp của bạn luôn khỏe mạnh.',
    },
    {
        content: 'Bỏ thuốc lá cũng sẽ làm giảm nguy cơ bị đột quỵ về lâu dài.',
    }
]
const FilterResult = () => {
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
   advice1 = riskadvice.find(item => item.risk === advice1)?.content
    return (
        <div class="filter-result-container">
            <div class="filter-result-wrap">
                <div class="resuldt-detail">
                    <div class="detail-container">
                        <img src= {image} alt="Main image"/>
                        <div class="spacing"></div>
                        <h1>
                            <div class="detail-number">
                                <p>Nguy cơ đột quỵ thường niên - {risk}</p>
                            </div>
                        </h1>
                        <div class="detail-desc">
                            <p>Dựa trên chỉ số CHA₂DS₂-VASc của bạn, nguy cơ đột quỵ hàng năm của bạn là {risk}%, {advice1}</p>
                        </div>
                        <div class=""></div>
                    </div>
                    <Advice advice={advice}/>
                    <Deny />
                </div>
                    <Recommend />
            </div>
        </div>
    )
}

export default FilterResult;