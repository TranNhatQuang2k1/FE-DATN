import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
import Infor from '../../../../components/Infor'
import Tabline from '../../../../components/Tabline'
import Share from '../../../../components/Share'
import { useLocation } from 'react-router-dom'

const ResultBMI = ({data}) => {
    const [id, setId] = useState(0);
    const handletabline = (id) => {
      setId(id);
    };
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const bmi = searchParams.get('bmi');
    console.log(bmi)
    const [check, setChecked] = useState(false);
    useEffect(() => {
        if(bmi) setChecked(true)
    }, []);

    return (
        <div className='ResultBMI-container'>
            <div className='ResultBMI-wrap'>
                <div className='ResultBMI-left'>
                    <div className="left-title">
                        <h2 className='title-text'>
                            <span>Chỉ số BMI của bạn là 
                                <span className='text-number'>{bmi}</span>
                            </span>
                        </h2>
                    </div>

                    <div className="left-content">
                        <div className="content-container">
                            <div className=""></div>
                            <div className=""></div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-underweight-male-inactive.svg" className="img-icon"/>
                                </div>
                                <div className="item-number">
                                    <p>Thiếu cân</p>
                                    <p>&lt; 18.4</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="">
                                    <img src="	https://hellobacsi.com/images/bmi-healthy-male-active.svg" className=""/>
                                </div>
                                <div className="item-number">
                                    <p>Khỏe mạnh</p>
                                    <p >18.5 - 22.9</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-overweight-male-inactive.svg" className=""/>
                                </div>
                                <div className="item-number">
                                    <p>Thừa cân</p>
                                    <p>23 - 24.9</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-obese_level_1-male-inactive.svg" className="sc-8e5851bc-3 BYUIl"/>
                                </div>
                                <div className="item-number">
                                    <p>Béo phì độ 1</p>
                                    <p>25 - 29.9</p>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="item-img">
                                    <img src="https://hellobacsi.com/images/bmi-obese_level_2-male-inactive.svg" className="sc-8e5851bc-3 BYUIl"/>
                                </div>
                                <div className="item-number">
                                    <p className='number-bold'>Béo phì độ 2</p>
                                    <p className='number-bold'>&gt; 30</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-bar">
                            <div className="bar-container">
                                <div className= {check  ? "number-result active" : 'number-result' }>
                                    <h4 className="">19.9</h4>
                                </div>
                                <div className="result-1">
                                    <div className="result-1-detail"></div>
                                    <div className="number-1-detail">
                                        <h6>0</h6>
                                    </div>
                                </div>
                                <div className="result-2">
                                    <div className="result-2-detail"></div>
                                    <div className="number-2-detail">
                                        <h6>18.5</h6>
                                    </div>
                                </div>
                                <div className="result-3">
                                    <div className="result-3-detail"></div>
                                    <div className="number-3-detail">
                                        <h6 data-tag="h6" className="xzO2I0N sc-8e5851bc-1 eTyDPA milestone">23</h6>
                                    </div>
                                </div>
                                <div className="result-4">
                                    <div className="result-4-detail"></div>
                                    <div className="number-4-detail">
                                        <h6>25</h6>
                                    </div>
                                </div>
                                <div className="result-5">
                                    <div className="result-5-detail"></div>
                                    <div className="number-5-detail">
                                        <h6>30+</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Share />
                    <Tabline 
                        title1={'Tình trạng'} 
                        title2={'Nguy cơ'} 
                        title3={'Gợi ý'} 
                        handletabline={handletabline}
                    />
                    {
                        id === 0 && <div>
                            Bạn được coi là có trọng lượng cơ thể lý tưởng nếu chỉ số BMI rơi vào khoảng 18,5 đến 23,9.
                        </div>
                    }
                                        {
                    id === 1 && <div>
                            <p>Ngay cả những người có chỉ số BMI khỏe mạnh cũng có thể đứng trước nguy cơ mắc một số tình trạng sức khoẻ. Vì vậy, điều quan trọng là cần xây dựng một lối sống lành mạnh thông qua chế độ ăn uống thích hợp, vận động hợp lý và khám sức khỏe định kỳ để duy trì sức khỏe tốt nhất có thể.</p>
                        </div>
                    }
                    {
                        id ===2 && <div>
                            Nếu bạn muốn duy trì trọng lượng cơ thể, đầu tiên hãy xác định bạn cần bao nhiêu calo mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể.

Chọn các thực phẩm và đồ uống cung cấp một lượng calo tương đương với nhu cầu calo hàng ngày của bạn. Ví dụ: Nếu nhu cầu calo hàng ngày của bạn là 1950 kcal, bạn cần tiêu thụ tổng cộng 1950 kcal mỗi ngày để duy trì cân nặng của mình.
                        </div>
                    }
                </div>
                <div className='ResultBMI-post'>

                </div>
            </div>
        </div>
    )
}
export default ResultBMI;