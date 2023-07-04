import {React, useEffect, useRef, useState} from "react";
import images from "../../../../../assets";
import './index.scss'
import Button from '../../../../../components/Button'
import Loading from '../../../../../components/Loading'
import { useNavigate } from "react-router-dom";
const femaleQuestions = [
    {
      id: 0,
      question: "Tuổi của bạn là bao nhiêu?",
      options: [
        { option: "20-34", point: -7 },
        { option: "35-39", point: -3 },
        { option: "40-44", point: 0 },
        { option: "45-49", point: 3 },
        { option: "50-54", point: 6 },
        { option: "55-59", point: 8 },
        { option: "60-64", point: 10 },
        { option: "65-69", point: 12 },
        { option: "70-74", point: 14 },
        { option: "75-79", point: 16 }
      ]
    },
    {
      id: 1,
      question: "Tổng lượng cholesterol của bạn là bao nhiêu?",
      options: [
        { option: "< 160", point: 0 },
        { option: "160-199", point: 4 },
        { option: "200-239", point: 8 },
        { option: "240-279", point: 11 },
        { option: "> 280", point: 13 }
      ]
    },
    {
      id: 2,
      question: "Bạn có hút thuốc lá không?",
      options: [
        { option: "no", point: 0 },
        { option: "20-39", point: 9 },
        { option: "40-49", point: 7 },
        { option: "50-59", point: 4 },
        { option: "60-69", point: 2 },
        { option: "70-79", point: 1 }
      ]
    },
    {
      id: 3,
      question: "HDL cholesterol của bạn là bao nhiêu?",
      options: [
        { option: "> 60", point: -1 },
        { option: "50-59", point: 0 },
        { option: "40-49", point: 1 },
        { option: "< 40", point: 2 }
      ]
    },
    {
      id: 4,
      question: "Huyết áp tâm thu của bạn là bao nhiêu?",
      options: [
        {
          option: "untreated",
          subOptions: [
            { option: "< 120", point: 0 },
            { option: "120-129", point: 1 },
            { option: "130-139", point: 2 },
            { option: "140-159", point: 3 },
            { option: "> 160", point: 4 }
          ]
        },
        {
          option: "treated",
          subOptions: [
            { option: "< 120mmHg", point: 0 },
            { option: "120-129mmHg", point: 3 },
            { option: "130-139mmHg", point: 4 },
            { option: "140-159mmHg", point: 5 },
            { option: "> 160mmHg", point: 6 }
          ]
        }
      ]
    }
  ];
  
const maleQuestions = [
    {
      question: 'Bạn thuộc giới tính nào?',
      options: [
          {
            option: 'Nam',
          },
          {
            option: 'Nữ',
  
          },
      ]
    },
    {
      question: "Tuổi của bạn là bao nhiêu?",
      options: [
        { option: "20-34", point: -9 },
        { option: "35-39", point: -4 },
        { option: "40-44", point: 0 },
        { option: "45-49", point: 3 },
        { option: "50-54", point: 6 },
        { option: "55-59", point: 8 },
        { option: "60-64", point: 10 },
        { option: "65-69", point: 11 },
        { option: "70-74", point: 12 },
        { option: "75-79", point: 13 }
      ]
    },
    {
      question: 'Bạn có đang điều trị tăng huyết áp?',
      options: [
          {
            option: 'Có',
          },
          {
            option: 'Không',
          },
      ]
    },
    {
      question: "Nồng độ cholesterol toàn phần trong máu của bạn là bao nhiêu?",
      options: [
        { option: "< 160mg/dL", point: 0 }
          // {option: '20-39', point: 0},
          // {option: '40-49', point: 0},
          // {option: '50–59', point: 0},
          // {option: '60–69', point: 0},
          // {option: '70–79', point: 0}
         ,
        { option: "160-199mg/dL", point: 4 },
        { option: "200-239mg/dL", point: 7 },
        { option: "240-279mg/dL", point: 9 },
        { option: "> 280mg/dL", point: 11 }
      ]
    },
    {
      question: "Bạn có hút thuốc lá không?",
      options: [
        { option: "Không", point: 0 },
        { option: "Có", subOptions: [
          { option: "20-39", point: 8 },
          { option: "40-49", point: 5 },
          { option: "50-59", point: 3 },
          { option: "60-69", point: 1 },
          { option: "70-79", point: 1 }
        ] },
        // { option: "20-39", point: 8 },
        // { option: "40-49", point: 5 },
        // { option: "50-59", point: 3 },
        // { option: "60-69", point: 1 },
        // { option: "70-79", point: 1 }
      ]
    },
    {
      question: "HDL cholesterol của bạn là bao nhiêu?",
      options: [
        { option: "> 60", point: -1 },
        { option: "50-59", point: 0 },
        { option: "40-49", point: 1 },
        { option: "< 40", point: 2 }
      ]
    },
    {
      question: "Huyết áp tâm thu của bạn là bao nhiêu?",
      options: [
            { option: "< 120mmHg", Subpoint: [
              {option: 'Không', point: 0},
              {option: 'Có', point: 0}
            ]},
            { option: "120-129mmHg",Subpoint: [
              {option: 'Không', point: 0},
              {option: 'Có', point: 1}
            ]},
            { option: "130-139mmHg", Subpoint: [
              {option: 'Không', point: 1},
              {option: 'Có', point: 2}
            ]},
            { option: "140-159mmHg", Subpoint: [
              {option: 'Không', point: 1},
              {option: 'Có', point: 2}
            ]},
            { option: "> 160mmHg", Subpoint: [
              {option: 'Không', point: 2},
              {option: 'Có', point: 3}
            ] }
      ]
    }
    // {
    //   question: "Huyết áp tâm thu của bạn là bao nhiêu?",
    //   options: [
    //     {
    //       option: "Không",
    //       subOptions: [
    //         { option: "< 120", point: 0 },
    //         { option: "120-129", point: 0 },
    //         { option: "130-139", point: 1 },
    //         { option: "140-159", point: 1 },
    //         { option: "> 160", point: 2 }
    //       ]
    //     },
    //     {
    //       option: "Có",
    //       subOptions: [
    //         { option: "< 120", point: 0 },
    //         { option: "120-129", point: 1 },
    //         { option: "130-139", point: 2 },
    //         { option: "140-159", point: 2 },
    //         { option: "> 160", point: 3 }
    //       ]
    //     }
    //   ]
    // }
  ];

  const FraminghamRisk = () => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const selectedGender = useRef();
    useEffect(() => {
        if(currentQuestionIndex != null)
        {
            setLoading(false)
        };
        if(selectedGender.current)
        {
          setLoading(false)
        }
        if(currentQuestionIndex >= femaleQuestions.length)
        { 
            let a = femaleQuestions.find((point) => {
                return point.point === totalScore;
            });
            // console.log(a.risk);
        
            navigate(`./result`)
        }
    }, [currentQuestionIndex]);
    const handleAnswerSelect = (answer) => {
        setLoading(true); // Hiển thị loading khi người dùng chọn câu trả lời
        if(answer?.question === 'Tuổi của bạn là bao nhiêu?')
        {
          // if(answer?.)
          //  setQuestions()
        }
        setTimeout(() => {
          const updatedSelectedAnswers = [...selectedAnswers];
          updatedSelectedAnswers[currentQuestionIndex] = answer;
          setSelectedAnswers(updatedSelectedAnswers);
          setTotalScore(totalScore + answer.point);
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
          
            {currentQuestionIndex != null && currentQuestionIndex < maleQuestions.length && <>
                
                <div>
                    <div className="filter-container">
                        <div className="filter-wrap">
                            <div className="filter-question">
                                <div className="question-container">
                                    <div className="number">{currentQuestionIndex + 1}.</div>
                                    <div className="label">
                                        <div className="content">
                                            <p>{maleQuestions[currentQuestionIndex]?.question}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="input-wrap">
                                    {maleQuestions[currentQuestionIndex].options.map((answer, index) => (
                                        <div className="item-choose" key={index}>
                                            <div
                                                className= "choose-anwser"
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
 export default FraminghamRisk;
    