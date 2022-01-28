import React from "react";
import axios from "axios";


const AddQuestions = () => {
    const [state, setState] = React.useState({
        quizid: "",
        describe: "",
        status : "",
        Mail: ''
    }
    );

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.quizid, state.describe, state.status);

        const payload = {
            quizid:state.quizid,
            Name:state.describe,
            status:state.status,
            Mail:localStorage.getItem('LoginUser')
        }
        console.log(payload)

        //add quizid into database
        axios.post("http://localhost:3001/faculty/enterquiz", payload)
        .then(res => {
            if(res.status === 200){
                console.log(res)
                alert('Quiz added Succesfully')
                localStorage.setItem('quizid', payload.quizid)
            
                window.location.href = "/FACULTY/addquestion";
            }

        })
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Add Quiz</h2>
            <form >
                <p>
                    <label>Quiz ID</label><br />
                    <input type="text" name="quizid" value={state.quizid} onChange={handleChange} required />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" name="describe" value={state.describe} onChange={handleChange} required />
                </p>
                <p>
                    <label>Status</label><br />
                    <select name="status" value={state.status} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select> 
                </p>
                <p>
                    <button id="sub_btn"  type="submit" onClick={handleSubmit} >Add</button>
                </p>
                
            </form>
           
            

            
        </div>


    );
}
  
export default AddQuestions;
