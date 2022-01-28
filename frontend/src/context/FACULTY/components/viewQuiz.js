//fetch the quizid and name details and display all in a multi row table
import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import axios from "axios";


//get the quiz id and name details
const QuizDetails = () => {
    const [data, setData] = useState([]);

    const fetchQuiz = () => {
        axios.post("http://localhost:3001/faculty/viewQuiz", {
            email: localStorage.getItem("LoginUser")
        }).then(res => {
            console.log(res.data);
            setData(res.data);
            // console.log(data);
        })
    }
    useEffect(() => {
        fetchQuiz();
    }
    , []);

    return (
        //display the quiz id and name details in a multi row table using map
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <b>Quiz Details</b>
                                </h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Quiz ID</th>
                                            <th scope="col">Quiz Name</th>
                                            <th scope="col">Quiz Status</th>
                                            <th scope="col">Set Status</th>
                                            <th scope="col">DELETE</th>
                                            <th scope="col">ADD QUESTIONS</th>
                                            <th scope="col">VIEW</th>
                                            <th scope="col">Results </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(item => (
                                            <tr>
                                                <td>{item.quizid}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.status}</td>
                                                <td> <button type="button" className="btn btn-primary" data-toggle="modal" onClick={()=>
                                                    
                                                    {
                                                        var status;
                                                        //take conformatin to set the quiz status
                                                    alert("Are you sure you want to set the quiz status?")
                                                    if(item.status==="1"){
                                                        status="0";
                                                    }
                                                    else{
                                                        status="1";
                                                    }

                                                        axios.post("http://localhost:3001/faculty/updateQuizStatus", {
                                                        quizid: item.quizid, status
                                                }).then(res => {
                                                    alert("Quiz Set Successfully");
                                                })
                                                }
                                                    } data-target="#exampleModal"> Set Status </button>    
                                                </td>
                                                <td> <button type="button" className="btn btn-danger" data-toggle="modal" onClick={()=> {
                                                    // window.confirm("Are you sure you want to delete the quiz?")
                                                    if(window.confirm("Are you sure you want to delete the quiz?")){
                                                    axios.post("http://localhost:3001/faculty/deleteQuiz", {
                                                        quizid: item.quizid
                                                }).then(res => {
                                                    alert("Quiz Deleted Successfully");
                                                })
                                                }
                                            }
                                                    } > Delete </button>
                                                </td>
                                                <td> <button type="button" className="btn btn-success" data-toggle="modal" onClick={()=> {
                                                    if(window.confirm("Are you sure you want to add questions to the quiz?")){
                                                        localStorage.setItem("quizid", item.quizid);
                                                        window.location.href = "/FACULTY/addQuestion";
                                                    }
                                                }
                                                    } > Add Questions </button>
                                                </td>
                                                <td> <button type="button" className="btn btn-success" data-toggle="modal" onClick={()=> {
                                                localStorage.setItem("quizid", item.quizid);
                                                window.location.href = "/FACULTY/viewMODE";


                                                }} > View </button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-success" data-toggle="modal" onClick={()=> {
                                                        if(item.status !== '1'){
                                                            alert("Results are not available for this quiz");
                                                        }
                                                        else{
                                                            localStorage.setItem("rquizid", item.quizid);
                                                            window.location.href = "/FACULTY/results";
                                                        }
                                                    }} data-target="#exampleModal"> View Results </button>

                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default QuizDetails;