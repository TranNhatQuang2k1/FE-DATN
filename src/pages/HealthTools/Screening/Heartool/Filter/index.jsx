import {React, useEffect, useState} from "react";
import images from "../../../../../assets";
import './index.scss'
import Button from '../../../../../components/Button'
const checkPoint = [
    {
        point: 0,
        risk: 0.2
    },
    {
        point: 1,
        risk: 0.6
    },
    {
        point: 2,
        risk: 2.2
    },
    {
        point: 3,
        risk: 3.2
    },
    {
        point: 4,
        risk: 4.8
    },
    {
        point: 5,
        risk: 7.2
    },
    {
        point: 6,
        risk: 9.7
    },
    {
        point: 7,
        risk: 11.2
    },
    {
        point: 8,
        risk: 10.8
    },
    {
        point: 8,
        risk: 10.8
    }
]
const listcore = [
    {
        question: 'Bạn bao nhiêu tuổi?',
        answer: [
            {
                ans: 'Dưới 65 tuổi',
                point: 0
            },
            {
                ans: 'Từ 65 đến 74 Tuổi',
                point: 1
            },
            {
                ans: 'Trên 75 tuổi',
                point: 2
            },
        ]
    },
    {
        question: 'Bạn thuộc giới tính nào?',
        answer: [
            {
                ans: 'Nam',
                point: 0
            },
            {
                ans: 'Nữ',
                point: 1
            },
        ]
    },
    {
        question: 'Trước đây bạn có từng bị suy tim sung huyết chưa?',
        answer: [
            {
                ans: 'Không',
                point: 0
            },
            {
                ans: 'Có',
                point: 1
            },
        ]
    },
    {
        question: 'Trước đây bạn có từng bị tăng huyết áp chưa?',
        answer: [
            {
                ans: 'Không',
                point: 0
            },
            {
                ans: 'Có',
                point: 1
            },
        ]
    },
    {
        question: 'Bạn có tiền sử đột quỵ, cơn thiếu máu não thoáng qua hoặc huyết khối gây tắc mạch không?',
        answer: [
            {
                ans: 'Không',
                point: 0
            },
            {
                ans: 'Có',
                point: 1
            },
        ]
    },
    {
        question: 'Bạn có tiền sử bệnh mạch máu (tiền sử nhồi máu cơ tim, bệnh động mạch ngoại vi hoặc mảng bám động mạch chủ) không?',
        answer: [
            {
                ans: 'Không',
                point: 0
            },
            {
                ans: 'Có',
                point: 1
            },
        ]
    },
    {
        question: 'Bạn có tiền sử mắc bệnh đái tháo đường không?',
        answer: [
            {
                ans: 'Không',
                point: 0
            },
            {
                ans: 'Có',
                point: 1
            },
        ]
    },
    
];
// const chooseItem = ({name,onClick}) => {
//     return (
//         <div className="choose-anwser">
//                 <div className="label">
//                     <div className="label-text">
//                         <p>Không</p>
//                     </div>
//                 </div>
//             <div className=" icon active "></div>
//         </div>
//     )
// }
const Filter = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    useEffect(() => {
      return () => {
        if(currentQuestionIndex > listcore.length)
        {
            return ;
        }
      };
    }, [currentQuestionIndex]);
    return (
    <div className="filter">
        {currentQuestionIndex && currentQuestionIndex<=listcore.length &&
        <><div className="filter-container">
                    <div className="filter-wrap">
                        <div className="filter-question">

                            <div className="question-container">
                                <div className="number">05.</div>
                                <div className="label">
                                    <div className="content">
                                        <p>Trước đây bạn có từng bị tăng huyết áp chưa?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="input-wrap">
                                <div className="item-choose">
                                    <div className="choose-anwser">
                                        <div className="label">
                                            <div className="label-text">
                                                <p>Không</p>
                                            </div>
                                        </div>
                                        <div className=" icon active "></div>
                                    </div>
                                </div>
                                <div className="item-choose">
                                    <div className="choose-anwser">
                                        <div className="label">
                                            <div className="label-text">
                                                <p>Có</p>
                                            </div>
                                        </div>
                                        <div className="icon"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div><div className="buttons-area">
                        <div className="buttons-area-container">
                            <Button title={'Trở lại'} />
                        </div>
                    </div></>
        }
    </div>
    
    )
}
 export default Filter;