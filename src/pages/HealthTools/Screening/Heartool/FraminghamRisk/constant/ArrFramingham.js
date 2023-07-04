const questions1 = [
    {
        question: 'Bạn thuộc giới tính nào?',
        answer: [
            {
                ans: 'male',
            },
            {
                ans: 'female',
            },
        ]
    },
    {
        question: 'Tuổi của bạn là bao nhiêu?',
        answer: [
            {
                ans: '20-34',
            },
            {
                ans: '35-39',
            },
            {
                ans: '40-44',
            },
            {
                ans: '45-49',
            },
            {
                ans: '50-54',
            },
            {
                ans: '55-59',
            },
            {
                ans: '60-64',
            },
            {
                ans: '65-69',
            },
            {
                ans: '70-74',
            },
            {
                ans: '75-79',
            },
        ]
    },
    {
        question: 'Bạn có đang điều trị tăng huyết áp ?',
        answer: [
            {
                ans: 'No',
            },
            {
                ans: 'Yes',
            },
        ]
    },
    {
        question: 'Bạn có hút thuốc không?',
        answer: [
            {
                ans: 'Yes',
            },
            {
                ans: 'No',
            },
        ]
    }

]




const questions = [
    {
        id: 0,
        question: "Tuổi của bạn là bao nhiêu?",
        "score_range": {
            "female": {
                "20-34": -7,
                "35-39": -3,
                "40-44": 0,
                "45-49": 3,
                "50-54": 6,
                "55-59": 8,
                "60-64": 10,
                "65-69": 12,
                "70-74": 14,
                "75-79": 16
            },
            "male": {
                "20-34": -9,
                "35-39": -4,
                "40-44": 0,
                "45-49": 3,
                "50-54": 6,
                "55-59": 8,
                "60-64": 10,
                "65-69": 11,
                "70-74": 12,
                "75-79": 13
            }
        }
    },
    {
        question: "Tổng lượng cholesterol của bạn là bao nhiêu?",
        "score_range": {
            "female": {
                "20-39": {
                    "below 160": 0,
                    "160-199": 4,
                    "200-239": 8,
                    "240-279": 11,
                    "280 and above": 13
                },
                "40-49": {
                    "below 160": 0,
                    "160-199": 3,
                    "200-239": 6,
                    "240-279": 8,
                    "280 and above": 10
                },
                "50-59": {
                    "below 160": 0,
                    "160-199": 2,
                    "200-239": 4,
                    "240-279": 5,
                    "280 and above": 7
                },
                "60-69": {
                    "below 160": 0,
                    "160-199": 1,
                    "200-239": 2,
                    "240-279": 3,
                    "280 and above": 4
                },
                "70-79": {
                    "below 160": 0,
                    "160-199": 1,
                    "200-239": 1,
                    "240-279": 2,
                    "280 and above": 2
                }
            },
            "male": {
                "20-39": {
                    "below 160": 0,
                    "160-199": 4,
                    "200-239": 7,
                    "240-279": 9,
                    "280 and above": 11
                },
                "40-49": {
                    "below 160": 0,
                    "160-199": 3,
                    "200-239": 5,
                    "240-279": 6,
                    "280 and above": 8
                },
                "50-59": {
                    "below 160": 0,
                    "160-199": 2,
                    "200-239": 3,
                    "240-279": 4,
                    "280 and above": 5
                },
                "60-69": {
                    "below 160": 0,
                    "160-199": 1,
                    "200-239": 1,
                    "240-279": 2,
                    "280 and above": 3
                },
                "70-79": {
                    "below 160": 0,
                    "160-199": 0,
                    "200-239": 0,
                    "240-279": 1,
                    "280 and above": 1
                }
            }
        }
    },
    {
        question: "Bạn có hút thuốc lá không?",
        "score_range": {
            "female": {
                "no": 0,
                "20-39": 9,
                "40-49": 7,
                "50-59": 4,
                "60-69": 2,
                "70-79": 1
            },
            "male": {
                "no": 0,
                "20-39": 8,
                "40-49": 5,
                "50-59": 3,
                "60-69": 1,
                "70-79": 1
            }
        }
    },
    {
        question: "HDL cholesterol của bạn là bao nhiêu?",
        "score_range": {
            "female": {
                "60 and above": -1,
                "50-59": 0,
                "40-49": 1,
                "below 40": 2
            },
            "male": {
                "60 and above": -1,
                "50-59": 0,
                "40-49": 1,
                "below 40": 2
            }
        }
    },
    {
        question: "Huyết áp tâm thu của bạn là bao nhiêu?",
        "score_range": {
            "female": {
                "untreated": {
                    "below 120": 0,
                    "120-129": 1,
                    "130-139": 2,
                    "140-159": 3,
                    "160 and above": 4
                },
                "treated": {
                    "below 120": 0,
                    "120-129": 3,
                    "130-139": 4,
                    "140-159": 5,
                    "160 and above": 6
                }
            },
            "male": {
                "untreated": {
                    "below 120": 0,
                    "120-129": 0,
                    "130-139": 1,
                    "140-159": 1,
                    "160 and above": 2
                },
                "treated": {
                    "below 120": 0,
                    "120-129": 1,
                    "130-139": 2,
                    "140-159": 2,
                    "160 and above": 3
                }
            }
        }
    }
]

const framinghamRiskResults = {
    'female': [
      { points: -1, risk: "0%" },
      { points: 0, risk: "<1%" },
      { points: 9, risk: "1%" },
      { points: 13, risk: "2%" },
      { points: 15, risk: "3%" },
      { points: 16, risk: "4%" },
      { points: 17, risk: "5%" },
      { points: 18, risk: "6%" },
      { points: 19, risk: "8%" },
      { points: 20, risk: "11%" },
      { points: 21, risk: "14%" },
      { points: 22, risk: "17%" },
      { points: 23, risk: "22%" },
      { points: 24, risk: "27%" },
      { points: 25, risk: ">30%" },
    ],
    'male': [
      { points: 0, risk: "<1%" },
      { points: 1, risk: "1%" },
      { points: 5, risk: "2%" },
      { points: 7, risk: "3%" },
      { points: 8, risk: "4%" },
      { points: 9, risk: "5%" },
      { points: 10, risk: "6%" },
      { points: 11, risk: "8%" },
      { points: 12, risk: "10%" },
      { points: 13, risk: "12%" },
      { points: 14, risk: "16%" },
      { points: 15, risk: "20%" },
      { points: 16, risk: "25%" },
      { points: 17, risk: ">30%" },
    ],
  };
  
