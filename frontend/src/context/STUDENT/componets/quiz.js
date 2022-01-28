import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GameOver from '../../../components/QUIZ/GameOver';
import Button from '../../../components/QUIZ/Button';
const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Quiz = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);
    // const [data, setData] = useState([]);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }

    

    const QuizDetails = ( ) => {
        
        axios.post("http://localhost:3001/student/viewQuiz", {
            quizid: localStorage.getItem("aquizid")
        }).then(res => {
            console.log(res.data.result);
            setQuiz(res.data.result.map(item => (
                {
                    question: item.question,
                    options: shuffle([item.op1, item.op2, item.op3, item.op4]),
                    answer: item.answer
                }
            )));
            console.log(quiz);
        }
        )
        
    }

    useEffect(() => {
        QuizDetails();   
    }, []);
    


    
    
    return (
        <div>
        <QuizWindow>
            { quiz[number] &&

                <>
                    <Question dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question>

                    <Options>
                        {quiz[number].options.map((item, index) => (
                            <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Option>
                        ))}
                    </Options>
                </>

            }
            {
                number === quiz.length && <GameOver pts={pts} />
            }
            {
                number === quiz.length && <Button onClick={() => {
                    axios.post("http://localhost:3001/student/insertMarks", {
                        quizid: localStorage.getItem("aquizid"),
                        email: localStorage.getItem("SLoginUser"),
                        marks: pts,
                        total: quiz.length
                    }).then(res => {
                        console.log(res.data);
                        alert("Your marks has been updated");
                        window.location.href = "/STUDENT/result";
                    }
                    )
                    .catch(err => console.error(err))
                }}>Submit</Button>

                

            }
        </QuizWindow>


        </div>
        
    )
}

export default Quiz;
