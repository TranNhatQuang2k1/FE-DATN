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
        risk: 'Nguy cơ thấp',
        content: 'Tiếp tục tuân thủ các biện pháp phòng ngừa COVID-19 như đeo khẩu trang, rửa tay thường xuyên và tách ly xã hội. Theo dõi triệu chứng và cảm giác của bạn. Nếu có bất kỳ triệu chứng nghi ngờ hoặc triệu chứng nặng hơn, liên hệ với cơ quan y tế địa phương để được hướng dẫn tiếp theo.',
    },
    {
        risk: 'Nguy cơ trung bình',
        content: 'Ngoài việc tuân thủ các biện pháp phòng ngừa COVID-19, hãy đảm bảo bạn duy trì sự theo dõi sức khỏe và điều trị theo hướng dẫn từ cơ quan y tế. Tránh tiếp xúc gần với những người có nguy cơ cao hơn, như người già và những người có các vấn đề sức khỏe nền tảng.',
    },
    {
        risk: 'Nguy cơ Cao',
        content: 'hãy tìm kiếm sự tư vấn và chăm sóc y tế chuyên sâu từ các chuyên gia và bác sĩ. Hạn chế tiếp xúc với người khác càng nhiều càng tốt và đảm bảo các biện pháp phòng ngừa COVID-19 được thực hiện nghiêm ngặt',
    },
    {
        risk: 'Nguy cơ rất cao',
        content: ' tìm kiếm sự tư vấn và chăm sóc y tế chuyên sâu từ các chuyên gia và bác sĩ. Hạn chế tiếp xúc với người khác càng nhiều càng tốt và đảm bảo các biện pháp phòng ngừa COVID-19 được thực hiện nghiêm ngặt.',
    },
]
const advice = [
    {
        content: 'Nghỉ ngơi và duy trì cơ thể khỏe mạnh: Đảm bảo bạn có đủ giấc ngủ và nghỉ ngơi để giúp cơ thể phục hồi. Hãy ăn một chế độ ăn giàu dinh dưỡng, uống đủ nước và tập thể dục nhẹ nhàng (nếu được phép) để duy trì sức khỏe tốt.'
    },
    {
        content: 'Tách riêng và tự cách ly: Tách riêng bản thân khỏi người khác trong giai đoạn lây nhiễm. Hãy ở trong phòng riêng và tránh tiếp xúc gần với thành viên trong gia đình và người khác.',
    },
    {
        content: 'Đeo khẩu trang: Đeo khẩu trang khi phải tiếp xúc với người khác trong trường hợp bạn cần ra khỏi phòng của mình, như khi cần thăm khám y tế hoặc khi có người đến chăm sóc bạn.',
    },
    {
        content: 'Theo dõi triệu chứng: Theo dõi triệu chứng COVID-19 của bạn như sốt, ho, khó thở và các triệu chứng khác. Ghi lại những thay đổi và thông báo cho nhân viên y tế nếu có bất kỳ triệu chứng nghi ngờ hoặc triệu chứng nặng hơn.',
    },
    {
        content: 'Liên hệ với cơ quan y tế: Nếu bạn cảm thấy triệu chứng trở nên nặng nề hoặc có bất kỳ vấn đề về sức khỏe nghiêm trọng, hãy liên hệ ngay với cơ quan y tế địa phương để được tư vấn và hỗ trợ. Thông báo cho người tiếp xúc gần: Hãy thông báo cho những người tiếp xúc gần với bạn về tình trạng nhiễm bệnh của bạn để họ có thể tự cách ly và được kiểm tra nhanh chóng.'
    }
]
const CovidResult = () => {
    let image,advice1;
    const navigate = useNavigate();
    const location = useLocation();
    const risk = new URLSearchParams(location.search).get('risk');
    if (risk === 'Nguy cơ thấp') {
        advice1 ='Nguy cơ thấp';
        image = images.nguycothap
   } else if (risk=== 'Nguy cơ trung bình') {
       advice1 ='Nguy cơ trung bình';
       image = images.nguycotrungbinh
   } else if (risk=== 'Nguy cơ cao'){
       advice1 ='Nguy cơ cao';
       image = images.nguycocao
   }
   else{
        advice1 ='Nguy cơ rất cao';
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
                                <p>Theo kết quả tẩm soát bệnh nhân có {risk} tử vong do coivd</p>
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

export default CovidResult;