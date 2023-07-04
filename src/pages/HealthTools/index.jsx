import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import images from '../../assets'
import BannerHeathTool from './Banner'
import Header from '../../components/Header'
import Myoptions from '../Profile/Myoptions'
import CardScreeing from './Screening/components'
import Loading from '../../components/Loading'
import heathtoolApi from '../../api/heathtoolApi'
const listtool = [
    {
        id: 0,
        title: 'Sàng lọc nguy cơ đột quỵ của bệnh nhân rung tâm nhĩ',
        image: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_atrial_fibrillation.png',
        desc : 'Liệu chứng rung tâm nhĩ (rung nhĩ) có gây ra đột quỵ? Tầm soát ngay!',
        data : [
            {
                infor: [
                    {
                        title: 'Trả lời các câu hỏi sàng lọc nguy cơ đột quỵ do chứng rung tâm nhĩ gây ra sau đây, bạn có thể:',
                        contents: [
                            {content: 'Tự đánh giá nguy cơ đột quỵ do chứng rung tâm nhĩ'},
                            {content: 'Lên kế hoạch thăm khám để ngăn chặn đột quỵ'},
                            {content: 'Chỉ mất khoảng vài phút để có kết quả'}
                        ]
                    }
                ]
            },
            {
                refer: [
                    {
                        title: 'Chứng rung tâm nhĩ (AF) là gì?',
                        content: 'Chứng rung tâm nhĩ (Atrial Fibrillation - AF) là một loại rối loạn nhịp tim phổ biến. Trong trạng thái bình thường, tim của chúng ta đập một cách đều đặn nhờ vào các tín hiệu điện được tạo ra từ nút nhĩ nhịp đáy (SA node) đi qua các cơ tim. Tuy nhiên, trong trường hợp AF, tín hiệu này trở nên không đều và không đồng bộ, khiến nhịp tim rung lên nhanh và không đều.',
                    },
                    {
                        title: 'Nguy cơ đột quỵ liên quan đến AF là gì?',
                        content: 'Nguy cơ đột quỵ liên quan đến AF phụ thuộc vào nhiều yếu tố. AF tăng nguy cơ đột quỵ do quá trình rung không đều của nhĩ làm cho máu có thể tụ tạo thành cục máu đông (huyết khối). Nếu cục máu đông này bị vỡ ra và đi vào não qua mạch máu, nó có thể gây tắc mạch và gây đột quỵ. Các yếu tố tăng nguy cơ đột quỵ liên quan đến AF bao gồm tuổi, bệnh lý tim mạch, tiền sử đột quỵ, bệnh tim mạch khác, tiểu đường, hút thuốc lá, tiêu chảy và cấp dịch.'
                    },                    {
                        title: 'Nguồn',
                        content: 'https://www.mdcalc.com/calc/801/cha2ds2-vasc-score-atrial-fibrillation-stroke-risk'
                    },

                ]
            }
        ]
    },
    {
        id: 1,
        title: 'Công cụ sàn lọc tẩm soát bệnh tim mạch',
        image: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_cardiovascular.png',
        desc : 'Bệnh tim mạch: Phát hiện ngay trước khi quá muộn!',
        data : [
            {
                infor: [
                    {
                        title: 'Trả lời các câu hỏi sàng lọc bệnh tim mạch sau đây, bạn có thể:',
                        contents: [
                            {content: 'Phát hiện sớm tình trạng sức khỏe tim mạch trước khi quá muộn'},
                            {content: 'Nâng cao cảnh giác về sức khỏe tim mạch của bản thân và người thân xung quanh'},
                            {content: 'Kết quả tầm soát nhanh chóng chỉ tốn vài phút của bạn'}
                        ]
                    }
                ]
            },
            {
                refer: [
                    {
                        title: 'Vì sao tôi nên kiểm tra hoặc đo lường sàng lọc tim mạch của mình?',
                        content: 'Sàng lọc cung cấp thông tin tốt hơn cho bác sĩ biết bạn đang có nguy cơ mắc bệnh tim mạch ở mức độ nào. Và đề xuất những gì bạn có thể làm để cải thiện sức khỏe tổng thể bằng cách kiểm tra một vài vấn đề sức khỏe có thể đang ảnh hưởng xấu đến sức khỏe tim mạch của bạn.',
                    },
                    {
                        title: 'Nguyên nhân gây ra bệnh tim mạch là gì?',
                        content: 'Có nhiều yếu tố làm tăng nguy cơ mắc bệnh tim mạch bao gồm: - Hút thuốc. - Căng thẳng. - Uống bia, rượu. - Bị cao huyết áp. - Có mỡ máu cao. - Bị béo phì, thừa cân. - Mắc bệnh tiểu đường. - Lối sống ít vận động hoặc không hoạt động nhiều.',
                    },
                    {
                        title: 'Làm thế nào để phát hiện bệnh tim mạch?',
                        content: 'Có nhiều cách để chẩn đoán vấn đề liên quan đến tim, bao gồm: - Điện tâm đồ (ECG). - Bài kiểm tra sự căng thẳng khi tập thể dục. - Chụp X quang ngực. - Siêu âm tim. - Xét nghiệm máu. - Chụp xạ hình tim. - Hình ảnh hạt nhân phóng xạ của tim. - Chụp cộng hưởng từ (MRI).',
                    },
                    {
                        title: 'Dấu hiệu của một trái tim không khỏe mạnh là gì?',
                        content: 'Dấu hiệu bệnh tim mạch bao gồm: Đau ngực, co thắt ngực, cảm thấy nặng ở vùng ngực, và khó chịu ở ngực. Hơi thở ngắn. Đau cổ, hàm, cổ họng, vùng bụng trên hoặc lưng. Chân bị đau, tê liệt, cảm thấy yếu hoặc lạnh, tay có triệu chứng tương tự với chân nếu mạch máu ở những vùng trong cơ thể bị thu hẹp.',
                    },
                    {
                        title: 'Sàng lọc bệnh tim mạch tính toán nguy cơ mắc bệnh như thế nào?',
                        content: 'Tính toán sẽ dựa vào những thông tin bạn cung cấp liên quan đến độ tuổi, huyết áp, thói quen (như hút thuốc), hoặc tiền sử bệnh (như tiểu đường), v.v.',
                    },
                    {
                        title: 'Nguồn',
                        content: 'https://reference.medscape.com/calculator/252/framingham-risk-score-2008',
                    }
                ]
            }
        ]

    },
    {
        id: 2,
        title: 'Sàng lọc tẩm soát nguy cơ đột quỵ',
        image: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/08/icon_stroke-1.png',
        desc : 'Sàng lọc nguy cơ đột quỵ: Đừng chờ đợi đến khi quá muộn!',
        data : [
            {
                infor: [
                    {
                        title: 'Trả lời các câu hỏi sàng lọc nguy cơ đột quỵ sau đây, bạn có thể:',
                        contents: [
                            {content: 'Phát hiện nguy cơ đột quỵ của bản thân'},
                            {content: 'Tự đánh giá các yếu tố rủi ro có thể làm tăng nguy cơ đột quỵ'},
                            {content: 'Hoàn toàn bảo mật thông tin và kết quả sàng lọc'},
                            {content: 'Chỉ mất vài phút để hoàn thành câu hỏi!'}
                        ]
                    }
                ]
            },
            {
                refer: [
                    {
                        title: 'Tầm soát là gì?',
                        content: 'Tầm soát giúp xác định một số khía cạnh sức khỏe của bạn có thể cần kiểm tra thêm. Việc tầm soát giúp đánh giá xem một vấn đề về sức khỏe có thể đang xuất hiện. Tuy nhiên, tầm soát không chẩn đoán được bệnh tật hay rối loạn nhất định, cũng như nó không xác định được mức độ nghiêm trọng của bệnh.',
                    },
                    {
                        title: 'Những ai có nguy cơ bị đột quỵ?',
                        content: 'Có những điều kiện y tế làm tăng nguy cơ đột quỵ, bao gồm: - Huyết áp cao - Bệnh tiểu đường - Mức cholesterol cao - Bệnh hồng cầu hình liềm Hãy đến gặp bác sĩ ngay lập tức nếu bạn có bất kỳ tình trạng nào trong số này để giúp ngăn ngừa đột quỵ.',
                    },
                    {
                        title: 'Tôi có thể ngăn ngừa đột quỵ bằng cách nào?',
                        content: 'Có nhiều phương pháp bạn có thể thực hiện để giúp giảm nguy cơ đột quỵ. Huyết áp, lượng đường trong máu và mức cholesterol của bạn phải được giữ trong mức bình thường. Thay đổi lối sống lành mạnh có thể giúp điều chỉnh những thông số trên, bao gồm: - Bỏ hút thuốc - Tập thể dục thường xuyên hơn - Ăn uống lành mạnh: Cắt giảm muối và đường, và bổ sung nhiều trái cây và rau quả trong chế độ ăn uống của bạn.',
                    },
                    {
                        title: 'Nguồn',
                        content: 'https://www.ncbi.nlm.nih.gov/books/NBK144289/; https://www.cdc.gov/stroke/conditions.htm; https://www.betterhealth.vic.gov.au/health/ConditionsAndTreatments/stroke-risk-factors-and-prevention.',
                    },
                ]
            }
        ]

    },
    {
        id: 3,
        title: 'Công cụ dự đoán tỷ lệ tử vong tại bệnh viện của bệnh nhân coivd-19',
        image: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/08/icon_covid.png',
        desc : 'Đánh giá khả năng tử vong của người bệnh Covid-19',
        data : [
            {
                infor: [
                    {
                        title: 'Lợi ích khi sử dụng công cụ 4C Mortality Score for COVID-19 là:',
                        contents: [
                            {content: 'Công cụ này giúp đánh giá nguy cơ tử vong của bệnh nhân mắc COVID-19 dựa trên các yếu tố như tuổi, bệnh lý cơ sở và dấu hiệu lâm sàng. Điều này giúp cung cấp thông tin quan trọng để đánh giá nghiêm trọng của tình trạng bệnh và lựa chọn các biện pháp điều trị và quản lý phù hợp.'},
                            {content: 'Hỗ trợ quyết định lâm sàng trong việc đưa ra các biện pháp điều trị và quản lý phù hợp cho bệnh nhân mắc COVID-19.'},
                            {content: 'Cung cấp một dự đoán về khả năng tử vong của bệnh nhân, giúp cung cấp thông tin định hướng và thực tế về tình trạng bệnh và kết quả tiềm năng.'},
                        ]
                    }
                ]
            },
            {
                refer: [
                    {
                        title: ' Công cụ 4C Mortality Score for COVID-19 được sử dụng để làm gì?',
                        content: 'Công cụ 4C Mortality Score for COVID-19 được sử dụng để đánh giá nguy cơ tử vong của bệnh nhân mắc COVID-19. Nó giúp dự đoán khả năng tử vong của bệnh nhân dựa trên các yếu tố như tuổi, bệnh lý cơ sở và dấu hiệu lâm sàng.',
                    },
                    {
                        title: 'Các yếu tố nào được sử dụng trong công cụ 4C Mortality Score for COVID-19 để đánh giá nguy cơ tử vong?',
                        content: 'Công cụ 4C Mortality Score for COVID-19 sử dụng các yếu tố như tuổi, giới tính, bệnh lý cơ sở (như tiểu đường, bệnh tim mạch, bệnh phổi), và dấu hiệu lâm sàng (như tần số hô hấp, mức độ suy hô hấp) để đánh giá nguy cơ tử vong của bệnh nhân.',
                    },
                    {
                        title: 'BUN là gì ?',
                        content: 'BUN là viết tắt của Blood Urea Nitrogen, tiếng Việt có thể dịch là Nitơ Ure máu. Đây là một xét nghiệm máu thường được sử dụng để đo lường nồng độ urea trong máu. Nó được tạo ra từ các chất thải nitrogen trong gan và sau đó tiếp tục được vận chuyển vào máu và chuyển đến thận để tiết ra nước tiểu. Xét nghiệm BUN đo lường nồng độ urea trong máu, và thông thường được sử dụng như một chỉ số đánh giá chức năng thận.',
                    },
                    {
                        title: 'Thang điểm Glasgow cho tình trạng tỉnh táo là gì',
                        content: 'Thang điểm Glasgow (Glasgow Coma Scale) được sử dụng để đánh giá tình trạng tỉnh táo và chức năng não bộ của một người. Thang điểm này đo ba chỉ số chính: mở mắt (Eye Opening), đánh giá cử động (Motor Response) và đánh giá lời nói (Verbal Response). Mỗi chỉ số được đánh điểm từ 1 đến 4, hoặc từ 1 đến 6, tùy thuộc vào phiên bản cụ thể của thang điểm.Tổng điểm của Glasgow Coma Scale nằm trong khoảng từ 3 đến 15. Một điểm số cao hơn cho thấy tình trạng tỉnh táo tốt hơn và chức năng não bộ bình thường, trong khi một điểm số thấp hơn có thể chỉ ra tình trạng tỉnh táo suy yếu hoặc tổn thương não.',
                    },
                    {
                        title: 'Protein phản ứng C là gì ?',
                        content: 'Protein phản ứng C, hay còn được gọi là C-reactive protein (CRP), là một loại protein có mặt trong huyết tương và có vai trò quan trọng trong quá trình phản ứng viêm. CRP được sản xuất bởi gan và mức độ tăng cao trong huyết tương khi có sự xảy ra của một tình trạng viêm nào đó trong cơ thể. Việc đo lường mức độ CRP trong huyết tương thông qua xét nghiệm CRP có thể được sử dụng để đánh giá mức độ viêm và theo dõi quá trình viêm trong cơ thể. Mức độ tăng cao của CRP thường đi kèm với các bệnh viêm nhiễm, viêm khớp, tổn thương mô, và cả các bệnh lý khác như bệnh tim mạch và ung thư. Thông qua việc đo lường mức độ CRP, các chuyên gia y tế có thể sử dụng nó như một chỉ số hỗ trợ trong việc chẩn đoán, đánh giá tình trạng bệnh, và theo dõi sự phục hồi của bệnh nhân.',
                    },
                    {
                        title: 'Tôi nên làm gì sau khi sử dụng công cụ 4C Mortality Score for COVID-19?',
                        content: 'Sau khi sử dụng công cụ 4C Mortality Score for COVID-19, bạn nên tham khảo ý kiến và đánh giá của bác sĩ hoặc nhân viên y tế. Họ sẽ có kiến thức và kinh nghiệm để đưa ra đánh giá chi tiết về tình trạng sức khỏe của bạn và các biện pháp phòng ngừa, điều trị phù hợp. Đừng ngần ngại hỏi và thảo luận với các chuyên gia y tế để được tư vấn và chăm sóc tốt nhất trong trường hợp mắc COVID-19.',
                    },
                    {
                        title: 'Nguồn',
                        content: 'https://www.mdcalc.com/calc/10338/4c-mortality-score-covid-19',
                    }

                ]
            },
        ]
    },
    {
        id: 4,
        title: 'Sàng lọc ung thư phổi',
        image: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_lung_cancer.png',
        desc : 'Ung thư phổi: Phát hiện và điều trị trước khi quá muộn!',
        data : [
            {
                infor: [
                    {
                        title: 'Trả lời các câu hỏi sàng lọc nguy cơ mắc bệnh ung thư phổi sau đây, bạn có thể::',
                        contents: [
                            {content: 'Hỗ trợ trong quá trình chẩn đoán bệnh'},
                            {content: 'Nâng cao cảnh giác về sức khỏe cho bản thân và những người thân yêu xung quanh'},
                            {content: 'Kết quả tầm soát luôn được bảo mật'},
                        ]
                    }
                ]
            },
            {
                refer: [
                    {
                        title: '',
                        content: '',
                    },
                    

                ]
            },
        ]
    },
    {
        id: 5,
        title: 'Sàn lọc ung thư gan',
        image: 'https://cdn-subot.hellohealthgroup.com/3f84ddb8-d3f6-4734-99c6-5e36b63ecb8c.png',
        desc : 'Tầm soát nguy cơ mắc bệnh ung thư gan: Phát hiện sớm - Điều trị kịp thời!'
    },
    {
        id: 6,
        title: 'Sàn lọc tiền mãn kinh',
        image: 'https://cdn-subot.hellohealthgroup.com/09021158-57f4-4122-a561-ea580dd2c0e7.png',
        desc : 'Bạn đang ở giai đoạn nào trong quá trình mãn kinh? Tìm hiểu ngay!'
    },
    {
        id: 7,
        title: 'Sàn lọc đường tiêu hóa',
        image: 'https://cdn-subot.hellohealthgroup.com/9109f7e2-6eb9-4dd3-b68f-69493eac3f0a.png',
        desc : 'Bạn gặp rắc rối về hệ tiêu hóa?'
    },
]
const HealthTools = () => {
    const list = useRef([])
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                // const data = await heathtoolApi.getAllSpecialist({ params: {id: '1'}})
                // // console.log(data.message);
                // if(data.message)
                // {
                //     list.current = data.message;
                //     console.log(list)
                    SetLoading(false)
                // }
            } catch (err) {
                SetLoading(false)
            }
        })() 
    }, []);
    if(loading) return (
        <Loading />
    )
    return(
        <div className='heathtools-wrap'>
            <BannerHeathTool 
                title={'Công cụ kiểm tra sức khỏe'} 
                desc={'Các công cụ đánh giá sức khỏe dễ sử dụng này sẽ giúp bạn đánh giá các yếu tố quan trọng trong sức khỏe tổng quan và chất lượng sức khỏe của bạn.'} 
                urlbg={images.bg_toolhome} 
                urlimage= {images.hometool_icon}
            />
            <div className='heath-container'>
            <div className='heath-options'>
                <Myoptions 
                            title={'Tất cả công cụ'}
                />
               <div className='heath-wrap'>
                    <div className='heath-tool'>
                        { listtool?.map((item) => {
                                return (
                                    
                                            <CardScreeing
                                                item={item}
                                            />

                                )
                            })}
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    )
}
export default HealthTools;