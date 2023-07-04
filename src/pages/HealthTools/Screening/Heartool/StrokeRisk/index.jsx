import {React, useEffect, useState} from "react";
import images from "../../../../../assets";
import './index.scss'
import Button from '../../../../../components/Button'
import Loading from '../../../../../components/Loading'
import { useNavigate } from "react-router-dom";
const listadvice = [
    {
        
    }
]
const listcore = [
    {
        question: 'Huyết áp của bạn có cao trên 120/80 mmHg không?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Bạn có mắc bệnh rung tâm nhĩ không?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Mức đường huyết lúc đói của bạn có trên 100mg/dL không?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Chỉ số khối cơ thể (BMI) của bạn có trên 25kg/m2 không?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Chế độ ăn của bạn chứa nhiều calo dư thừa, chất béo bão hòa, chất béo chuyển hóa, đồ ngọt và muối?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Lượng cholesterol toàn phần trong máu của bạn có trên 180mg/dL?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Bạn có mắc đái tháo đường không?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Bạn có tham gia các hoạt động thể chất cường độ từ trung bình đến mạnh trong 40 phút mỗi ngày, tần suất 3-4 ngày/1 tuần không?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Gia đình bạn có người từng bị đột quỵ không?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    {
        question: 'Bạn có hút thuốc lá?',
        answer: [
            {
                ans: 'Có',
                point: 1
            },
            {
                ans: 'Tôi không rõ',
                point: 1
            },
            {
                ans: 'Không',
                point: 1
            },
        ]
    },
    
];
const StrokeRisk = () => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [totalScoreHigh, setTotalHight] = useState(0);
    const [totalScoreLow, setTotalLow] = useState(0);
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
            console.log(totalScoreHigh);
            console.log(totalScoreLow);
            navigate(`./result?riskhight=${totalScoreHigh}&risklow=${totalScoreLow}`)
        }
    }, [currentQuestionIndex]);
    const handleAnswerSelect = (selectedAnswer) => {
        setLoading(true); // 
        setTimeout(() => {
          const updatedSelectedAnswers = [...selectedAnswers];
          updatedSelectedAnswers[currentQuestionIndex] = selectedAnswer;
          setSelectedAnswers(updatedSelectedAnswers);
          if(selectedAnswer.ans === 'Không')
          {
            setTotalLow(totalScoreLow + selectedAnswer.point);
          }else
          {
            setTotalHight(totalScoreHigh + selectedAnswer.point);
          }

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
                                                className= 'choose-anwser'
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
            </div>
);
}
 export default StrokeRisk;