import {React, useEffect, useState} from "react";
import images from "../../../../../assets";
import './index.scss'
import Button from '../../../../../components/Button'
import Loading from '../../../../../components/Loading'
import { useNavigate } from "react-router-dom";

const covidQuestions = [
    {
      id: 0,
      question: "Bạn bao nhiêu tuổi ?",
      options: [
        { option: "< 50", point: 0 },
        { option: "50-59", point: 2 },
        { option: "60-69", point: 4 },
        { option: "70-79", point: 6 },
        { option: ">= 80", point: 7 },
      ],
    },
    {
      id: 1,
      question: "Giới tính của bạn ?",
      options: [
        { option: "Nam", point: 1 },
        { option: "Nữ", point: 0 },
      ],
    },
    {
      id: 2,
      question: "Bạn có bao nhiêu bệnh trong số các bệnh được liệt kê dưới đây:Các bệnh đi kèm bao gồm bệnh tim mãn tính, bệnh hô hấp mãn tính (không bao gồm hen suyễn), bệnh thận mãn tính (mức lọc cầu thận ước tính ≤30), bệnh gan từ nhẹ đến nặng, sa sút trí tuệ, bệnh thần kinh mãn tính, bệnh mô liên kết, đái tháo đường (chế độ ăn kiêng, thuốc viên, hoặc kiểm soát insulin), HIV hoặc AIDS, và bệnh ác tính.",
      options: [
        { option: "0", point: 0 },
        { option: "1", point: 1 },
        { option: ">=2", point: 2 },
      ],
    },
    {
      id: 3,
      question: "Tốc độ hô hấp, nhịp thở/phút của bạn ?",
      options: [
        { option: "< 20", point: 0 },
        { option: "20-29", point: 1 },
        { option: ">= 30", point: 2 },
      ],
    },
    {
        id: 4,
        question: "Độ bão hòa oxy trong máu ?",
        options: [
          { option: ">= 92%", point: 0 },
          { option: "< 92%", point: 2 },
        ],
      },
      {
        id: 5,
        question: "Thang điểm Glasgow cho tình trạng tỉnh táo",
        options: [
          { option: ">= 15", point: 0 },
          { option: "< 15", point: 2 },
        ],
      },
      {
        id: 6,
        question: "BUN",
        options: [
          { option: "< 19.6mg/dL", point: 0 },
          { option: "19.6-39.2mg/dL", point: 1 },
          { option: "> 39.2mg/dL", point: 3 },
        ],
      },
      {
        id: 7,
        question: "Protein phản ứng C",
        options: [
          { option: "<50 mg/L (<5 mg/dL)", point: 0 },
          { option: "50-99 mg/L (5-9.9 mg/dL)", point: 1 },
          { option: "≥100 mg/L (≥10 mg/dL)", point: 2 },
        ],
      },

  ];
const Covid = () => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    let risk;
    useEffect(() => {
        if(currentQuestionIndex != null)
        {
            setLoading(false)
        };
        if(currentQuestionIndex >= covidQuestions.length)
        { 
            if(totalScore >=0 && totalScore <=3)
                {
                    risk = 'Nguy cơ thấp'
                }else if(totalScore >=4 && totalScore <=8)
                {
                    risk = 'Nguy cơ trung bình'
                }else if(totalScore >=9 && totalScore <=14)
                {
                    risk = 'Ngủy cơ cao'
                }else{
                    risk = 'Nguy cơ rất cao'
                }
        
            navigate(`./result?risk=${risk}`)
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
            {currentQuestionIndex != null && currentQuestionIndex < covidQuestions.length && <>
                
                <div>
                    <div className="filter-container">
                        <div className="filter-wrap">
                            <div className="filter-question">
                                <div className="question-container">
                                    <div className="number">{currentQuestionIndex + 1}.</div>
                                    <div className="label">
                                        <div className="content">
                                            <p>{covidQuestions[currentQuestionIndex]?.question}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="input-wrap">
                                    {covidQuestions[currentQuestionIndex].options.map((answer, index) => (
                                        <div className="item-choose" key={index}>
                                            <div
                                                className={`choose-anwser ${answer?.point === totalScore ? 'active' : ''}`}
                                                onClick={() => handleAnswerSelect(answer)}
                                            >
                                                <div className="label">
                                                    <div className="label-text">
                                                        <p>{answer?.option}</p>
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
 export default Covid;