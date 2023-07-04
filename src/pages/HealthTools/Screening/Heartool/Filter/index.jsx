import {React, useEffect, useState} from "react";
import images from "../../../../../assets";
import './index.scss'
import Button from '../../../../../components/Button'
import Loading from '../../../../../components/Loading'
import { useNavigate } from "react-router-dom";
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
        point: 9,
        risk: 12.2
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
                point: 2
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
const Filter = () => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    useEffect(() => {
        if(currentQuestionIndex != null)
        {
            setLoading(false)
        };
        if(currentQuestionIndex >= listcore.length)
        { 
            let a = checkPoint.find((point) => {
                return point.point === totalScore;
            });
            console.log(a.risk);
        
            navigate(`./result?risk=${a.risk}`)
        }
    }, [currentQuestionIndex]);
    const handleAnswerSelect = (selectedAnswer) => {
        setLoading(true); // Hiển thị loading khi người dùng chọn câu trả lời
        setTimeout(() => {
          const updatedSelectedAnswers = [...selectedAnswers];
          updatedSelectedAnswers[currentQuestionIndex] = selectedAnswer;
          setSelectedAnswers(updatedSelectedAnswers);
          setTotalScore(totalScore + selectedAnswer.point);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setLoading(false); // Tắt hiển thị loading sau một khoảng thời gian
        }, 500);
    };
    const handleGoBack = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };
    if(loading)
    {
        return (
            <Loading />
        )
    }
    return (
        <div className="filter">
            {currentQuestionIndex != null && currentQuestionIndex < listcore.length && <>
                
                <div>
                    <div className="filter-container">
                        <div className="filter-wrap">
                            <div className="filter-question">
                                <div className="question-container">
                                    <div className="number">{currentQuestionIndex + 1}.</div>
                                    <div className="label">
                                        <div className="content">
                                            <p>{listcore[currentQuestionIndex]?.question}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="input-wrap">
                                    {listcore[currentQuestionIndex].answer.map((answer, index) => (
                                        <div className="item-choose" key={index}>
                                            <div
                                                className={`choose-anwser ${answer?.point === totalScore ? 'active' : ''}`}
                                                onClick={() => handleAnswerSelect(answer)}
                                            >
                                                <div className="label">
                                                    <div className="label-text">
                                                        <p>{answer?.ans}</p>
                                                    </div>
                                                </div>
                                                <div className="icon"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="buttons-area">
                        <div className="buttons-areacontainer">
                            <Button title={'Trở lại'} onClick={handleGoBack} />
                        </div>
                    </div>
                </div>
            </>
            }        

            {totalScore === 9 && (
                <div>
                    <p>Tổng điểm: {totalScore}</p>
                    {checkPoint.map((point, index) => (
                        totalScore === point.point && (
                            <p key={index}>Rủi ro: {point.risk}</p>
                        )
                    ))}
                </div>
            )}
            </div>
);
}
 export default Filter;