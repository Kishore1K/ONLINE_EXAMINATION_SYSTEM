import React, {useState} from 'react'

import axios from "axios";

export default function AddQuestion() {

    const [state , setState] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
        quizid:''
    });
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    
    //clear the form
    const clearForm = () => {
        setState({
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: '',
            quizid:''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.addQuestion(state);
        const payload = {
            question: state.question,
            option1: state.option1,
            option2: state.option2,
            option3: state.option3,
            option4: state.option4,
            answer: state.answer,
            quizid: localStorage.getItem('quizid')

        }
        alert(payload.answer)
        console.log(payload)
        axios.post("http://localhost:3001/faculty/enterquestion", payload)

            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    alert("Question Added Successfully")
                    // window.location.href =
                    
                }
            })
            .catch(err => {
                console.log(err)
            }
        )


    }

    //add new question
    const addnQ = () => {
        clearForm()
    }

    const endQues = () =>{
        alert('once clicked u cant insert question')
        localStorage.removeItem('quizid')
        window.location.assign('/dashboard')
    }


    return (
        <div>
            <h1>Add Question</h1>
            <form className='card  bg-blue col-md-5'>
                <input type="text"  name="question" value={state.question} onChange={handleChange} placeholder="Question"/>
                <br />
                <input type="text" name="option1" value={state.option1} onChange={handleChange} placeholder="Option 1" />
                <br />
                <input type="text" name="option2" value={state.option2} onChange={handleChange} placeholder="Option 2" />
                <br />
                <input type="text" name="option3" value={state.option3} onChange={handleChange} placeholder="Option 3" />
                <br />
                <input type="text" name="option4" value={state.option4} onChange={handleChange} placeholder="Option 4" />
                <br />
        
                <label>Correct Answer</label>
                <select name="answer" value={state.answer} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value={state.option1}>A</option>
                    <option value={state.option2}>B</option>
                    <option value={state.option3}>C</option>
                    <option value={state.option4} >D</option>
                </select> 
                <br />
                
                <input type="submit" className='card bg-blue' value="SUBMIT" onClick={handleSubmit }  />

            
                <input type="submit" className='card' value="Add Question" onClick={addnQ} />
                <br />
                <input type="submit" className='card' value="Finish quiz" onClick={endQues} />

                    
                    
            
            
            </form>
            
        </div>
    )
}

// export default addQuestion;
