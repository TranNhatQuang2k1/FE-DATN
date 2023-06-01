import {React, useState} from "react";
import images from "../../../assets";
import './index.scss'
import Infor from "../../../components/Infor";
let a = [
    {
        title: 'Vì sao tôi nên kiểm tra hoặc đo lường sàng lọc tim mạch của mình?',
        content: "Đối với người lớn từ 20 tuổi trở lên, BMI được tính bằng cách sử dụng các phân loại trạng thái cân nặng tiêu chuẩn. Các chuẩn này giống nhau với nam giới và phụ nữ ở mọi thể trạng và lứa tuổi.Đối với trẻ em và thanh thiếu niên, BMI phân biệt theo tuổi và giới tính và thường được gọi là BMI theo tuổi. Ở trẻ em, lượng chất béo trong cơ thể cao có thể dẫn đến các bệnh liên quan đến cân nặng và các vấn đề sức khỏe khác. Thiếu cân cũng có thể tăng nguy cơ mắc một số tình trạng sức khỏe, bệnh lý.Chỉ số BMI cao thường cho thấy cơ thể thừa cân. Chỉ số này không trực tiếp đo lượng mỡ trong cơ thể nhưng có tương quan với các phép đo trực tiếp xác định lượng mỡ trong cơ thể."
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
        <Infor list={a}/>
        </div>
    )
}

export default Hearttool;