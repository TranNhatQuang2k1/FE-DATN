import {React, useState} from "react";
import images from "../../../assets";
import './index.scss'
let a = [
    {
        title: 'Vì sao tôi nên kiểm tra hoặc đo lường sàng lọc tim mạch của mình?',
        content: 'Sàng lọc cung cấp thông tin tốt hơn cho bác sĩ biết bạn đang có nguy cơ mắc bệnh tim mạch ở mức độ nào. Và đề xuất những gì bạn có thể làm để cải thiện sức khỏe tổng thể bằng cách kiểm tra một vài vấn đề sức khỏe có thể đang ảnh hưởng xấu đến sức khỏe tim mạch của bạn.'
    },
    {
        title: 'Nguyên nhân gây ra bệnh tim mạch là gì?',
        content: 'Có nhiều yếu tố làm tăng nguy cơ mắc bệnh tim mạch bao gồm: - Hút thuốc. - Căng thẳng. - Uống bia, rượu. - Bị cao huyết áp. - Có mỡ máu cao. - Bị béo phì, thừa cân. - Mắc bệnh tiểu đường. - Lối sống ít vận động hoặc không hoạt động nhiều.'
    },
    {
        title: 'Làm thế nào để phát hiện bệnh tim mạch?',
        content: 'Có nhiều cách để chẩn đoán vấn đề liên quan đến tim, bao gồm: - Điện tâm đồ (ECG). - Bài kiểm tra sự căng thẳng khi tập thể dục. - Chụp X quang ngực. - Siêu âm tim. - Xét nghiệm máu. - Chụp xạ hình tim. - Hình ảnh hạt nhân phóng xạ của tim. - Chụp cộng hưởng từ (MRI).'
    },
    {
        title: 'Dấu hiệu của một trái tim không khỏe mạnh là gì?',
        content: 'Dấu hiệu bệnh tim mạch bao gồm: Đau ngực, co thắt ngực, cảm thấy nặng ở vùng ngực, và khó chịu ở ngực. Hơi thở ngắn. Đau cổ, hàm, cổ họng, vùng bụng trên hoặc lưng. Chân bị đau, tê liệt, cảm thấy yếu hoặc lạnh, tay có triệu chứng tương tự với chân nếu mạch máu ở những vùng trong cơ thể bị thu hẹp.',
    },
    {
        title: 'Sàng lọc bệnh tim mạch tính toán nguy cơ mắc bệnh như thế nào?',
        content: 'Tính toán sẽ dựa vào những thông tin bạn cung cấp liên quan đến độ tuổi, huyết áp, thói quen (như hút thuốc), hoặc tiền sử bệnh (như tiểu đường), v.v.'
    },
    {
        title: 'Nguồn',
        content: 'https://reference.medscape.com/calculator/252/framingham-risk-score-2008'
    }
]
const Hearttool = () => {
    return(
        <div style = {{'box-sizing': 'border-box'}}>
        <div class="heart-page">
            <div class="heart-page-container">
                <div class="container-left">
                    <h1>Bệnh tim mạch: Phát hiện ngay trước khi quá muộn!</h1>
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
                    <button class="next-btn" data-size="lg" data-color="primary" data-theme="helloSites" data-is-loading="false">
                        <span class="fAwTdkg">
                            <span class="S2kaD9B">Check now</span>
                        </span>
                    </button>
                </div>
                </div>
                <div class="container-right">
                    <img src= {images.heart} alt="Bệnh tim mạch: Phát hiện ngay trước khi quá muộn!"/>
                </div>
            </div>
        </div>
        <Infor />
        </div>
    )
}
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
const Infor = () => {
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
                            a.map((e) => {
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
export default Hearttool;