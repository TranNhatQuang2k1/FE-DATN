import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../assets'
import Infor from '../../../components/Infor'
import ResultBMI from './ResultBMI'
import BannerHeathTool from '../Banner'
import Header from '../../../components/Header'
import InputField from '../../../components/InputFiled'
import { path } from '../../../constants/path'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
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
const  BMI = () => {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        height: yup.mixed()
        .test(
          'is-number-or-decimal',
          'Nhập số hoặc số chấm động',
          value => !isNaN(value) || /^\d+(\.\d+)?$/.test(value)
        )
        .required('Nhập giá trị'),
        weight: yup.mixed()
        .test(
          'is-number-or-decimal',
          'Nhập số hoặc số chấm động',
          value => !isNaN(value) || /^\d+(\.\d+)?$/.test(value)
        )
        .required('Nhập giá trị'),
        age: yup.number().typeError('Nhập số').required('Nhập số tuổi')
    })
    const form = useForm({
        defaultValues: {
            height: '',
            weight: '',
            age : ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = value => {
        console.log(value)
        const formData = new FormData()
        for (let key in value) {
          formData.append(key, value[key])
          console.log(key)
        }
        (async () => {
            const { height, weight, age } = value;
            const valueHeight = height / 100;
            const BMI = +(
            Math.round(
                weight / (valueHeight * valueHeight) + "e+2"
            ) + "e-2"
            );
            form.resetField()

            try {
                // let res =await bmiApi.creactBMI(formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //         Authorization: `${localStorage.getItem(
                //             'access_token'
                //         )}`
                //     }
                // })
                toast.success('Tính thành công', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                })
                navigate(`/health-tools/bmi/result?bmi=${BMI}`)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                })
            }
        })()
    }
    return (
        <div className='BMI-container'>
            <BannerHeathTool title={'Tính chỉ số BMI - Chỉ số khối cơ thể'}
                desc={'Sử dụng công cụ này để kiểm tra chỉ số khối cơ thể (BMI) để biết bạn có đang ở mức cân nặng hợp lý hay không. Bạn cũng có thể kiểm tra chỉ số BMI của trẻ tại đây.'}
                urlbg={'https://hellobacsi.com/images/toolBannerBlue-circle-large.svg'}
                urlimage={'https://hellobacsi.com/images/toolsIconBmi.svg'}
                doctor={'Tham vấn y khoa: Bác sĩ Trần Nhật Quang'}
                date={'ngày 15/6/2023'}
                style={{'color': '#000', 'font-weight': 700}}
            />
            <div className='form-main'>
                <div className='form-container'>
                    <div className='container-left'>
                        <div className='left-wrapper'>
                            <div className='bmi-input'>
                                <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                                    <div class="bmi-input-contanier">
                                        <div class="bmi-input-gender">
                                            <label className="input-gender-label" for="gender">Giới tính của bạn</label>
                                            <div className='radio-gender-img'>
                                                <div class="input-radio-gender">
                                                    <div class="img-wrapper">
                                                        <div>
                                                            <img src="https://hellobacsi.com/images/maleIcon.svg" class="gender-image" alt=""/>
                                                            <p class="radio-text">Nam</p>
                                                        </div>
                                                    </div>
                                                    <div class="img-wrapper">
                                                        <div>
                                                            <img src="https://hellobacsi.com/images/femaleIcon.svg" class="gender-image" alt=""/>
                                                            <p class="radio-item">Nữ</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-content">
                                        <div class="input-content-detail">
                                            <label class="input-label" for="" id="">
                                                <p >Bạn bao nhiêu tuổi? (năm)</p>
                                            </label>
                                            {/* <div class="input-field">
                                                <input class="field-content" id="" type="text" name="age" min="0" step="1" inputmode="numeric" aria-invalid="true" value=""/>
                                            </div> */}
                                            {/* <div className="label-wrap form-input-view"> */}
                                                <InputField
                                                    // label={'Tên chuyên khoa'}
                                                    form={form}
                                                    name="age"
                                                    placeholder="Nhập số tuổi (năm)"
                                                    icon={images.dalieu}
                                                />
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    <div class="input-content">
                                        <div class="input-content-detail">
                                            <label class="input-label" for="" id="">
                                                <p >Bạn cao bao nhiêu? (cm)</p>
                                            </label>
                                            {/* <div class="input-field">
                                                <input class="field-content" id="" type="text" name="age" min="0" step="1" inputmode="numeric" aria-invalid="true" value=""/>
                                            </div> */}
                                                <InputField
                                                    // label={'Tên chuyên khoa'}
                                                    form={form}
                                                    name="height"
                                                    placeholder="Nhập chiều cao (cm)"
                                                    icon={images.dalieu}
                                                />
                                        </div>
                                    </div>
                                    <div class="input-content">
                                        <div class="input-content-detail">
                                            <label class="input-label" for="" id="">
                                                <p >Bạn cân nặng bao nhiêu? (Kg)</p>
                                            </label>
                                            {/* <div class="input-field">
                                                <input class="field-content" id="" type="text" name="age" min="0" step="1" inputmode="numeric" aria-invalid="true" value=""/>
                                            </div> */}
                                                <InputField
                                                    // label={'Tên chuyên khoa'}
                                                    form={form}
                                                    name="weight"
                                                    placeholder="Nhập cân nặng (Kg)"
                                                    icon={images.dalieu}
                                                />
                                        </div>
                                    </div>
                                    
                                    <button  class="bmi-btn" type='submit' >
                                        <span class="btn-submit">
                                            <span class="submit-data">Tính ngay</span>
                                        </span>
                                    </button>
                                </form>
                            </div>
                            <div className='left-infor'>
                                <Infor list={a}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <ResultBMI /> */}
        </div>
    )
}
export default BMI;
