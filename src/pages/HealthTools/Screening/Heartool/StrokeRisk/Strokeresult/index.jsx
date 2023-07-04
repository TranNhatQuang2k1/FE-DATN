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
        content: 'Nguy cơ đột quỵ của bạn có thể cao hơn hoặc không chắc chắn.',
    },
    
    {
        risk: 'Nguy cơ trung bình',
        content: 'Nguy cơ đột quỵ của bạn có thể cao hơn hoặc không chắc chắn.',
    },
    {
        risk: 'Nguy cơ thấp',
        content: 'Bạn đã làm rất tốt trong việc kiểm soát nguy cơ đột quỵ!.',
    },
]
const advice = [
    {
        content: 'Hãy trao đổi với bác sĩ về cách giúp duy trì sức khỏe tốt nhé!',
    },
    {
        content: 'Hãy ăn một chế độ ăn uống lành mạnh, giàu chất xơ và chất dinh dưỡng, giảm thiểu tiêu thụ các chất béo bão hòa, cholesterol và muối. Tăng cường việc tiêu thụ các loại thực phẩm giàu omega-3 như cá, hạt chia và lượng rau xanh, trái cây tươi.',
    },
    {
        content: 'Vận động thể dục hàng ngày giúp tăng cường tim mạch và tuần hoàn máu, giảm nguy cơ mắc bệnh đột quỵ. Hãy tìm một hoạt động thể thao bạn thích và cố gắng thực hiện ít nhất 30 phút mỗi ngày',
    },
    {
        content: 'Hút thuốc lá là một yếu tố tăng nguy cơ mắc bệnh đột quỵ. Nếu bạn hút thuốc, hãy tìm sự trợ giúp để bỏ thuốc và tránh tiếp xúc với khói thuốc lá.',
    },
    {
        content: 'Hãy Đọc thêm các bài viết về bệnh đột quỵ để phòng tránh nguy cơ',
    }
]
const StrokeResult= () => {
    let image,advice1;
    const navigate = useNavigate();
    const location = useLocation();
    const low = parseFloat(new URLSearchParams(location.search).get('risklow'));
    const hight = parseFloat(new URLSearchParams(location.search).get('riskhight'));
    console.log(low)
    if (low >= hight) {
        advice1 ='Nguy cơ thấp';
        image = images.nguycothap
   }
    else {
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
                                <p>{advice1}</p>
                            </div>
                        </h1>
                        <div class="detail-desc">
                            <p>{advice1}</p>
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

export default StrokeResult;