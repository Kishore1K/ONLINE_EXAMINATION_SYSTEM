//fetch the details of the exam which is alloted to the student
import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewExam = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.post("http://localhost:3001/student/Exam", {
        email: localStorage.getItem("SLoginUser")
        }).then(res => {
        console.log(res.data.result);
        // alert(res.data.result[0]);
        setData(res.data.result);
        })
    }, []);
    // alert(data.NAME)
    
    return (
        // display QUIZ ID AND NAME OF THE QUIZ IN TABLE
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <b>Exam Details</b>
                                </h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Quiz ID</th>
                                            <th>Quiz Name</th>

                                            <th>Attend</th>

                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(item => (
                                            <tr>
                                                <td>{item.quizid}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    
                                                <button type="button" className="btn btn-success" data-toggle="modal" onClick={()=> {
                                                //when clicked on view button, the quiz id is sent to the viewquiz component
                                                if(window.confirm("Are you sure you want to attend the exam?")){
                                                localStorage.setItem("aquizid", item.quizid);
                                                window.location.href = "/STUDENT/quiz";
                                                
                                                }
                                                


                                                }} > ATTEND </button>
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
};

export default ViewExam;