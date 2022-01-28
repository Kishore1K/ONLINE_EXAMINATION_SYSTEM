import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AddStudent = () => {
    // get student details
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [state, setState] = useState({
        email: '',
        quizid: '',
    })
    // alert(state.email, state.quizid)
    const fetchData =() =>{
axios.post("http://localhost:3001/faculty/getStudents",{
    mail:localStorage.getItem("LoginUser")
}).then(res=>{
    console.log(res.data);
    setData(res.data)
}
)
    }
    const fetchStudent = () => {
        axios.post("http://localhost:3001/faculty/getStudent", {
            email: localStorage.getItem("LoginUser")
        }).then(res => {
            console.log(res.data);
            setData1(res.data);
            // console.log(data);
        })
    }

    useEffect(() => {
        fetchData()
        fetchStudent();
    }, [])

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3> QUIZ DETAILS</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>quiz id</th>
                                <th>quiz name</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr >
                                    <td>{item.quizid}</td>
                                    <td>{item.Name}</td>
                        
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>STUDENT DETAILS</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Student ID</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Email</th>
                                </tr>
                        </thead>
                        <tbody>
                            {data1.map(item1 => (
                                <tr>
                                    <td>{item1.STDID}</td>
                                    <td>{item1.Name}</td>
                                    <td>{item1.EMAIL}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="col-md-12">
                    <h3>Add Student</h3>
                    <form>
                        <div className="form-group">
                            <label>Quiz ID</label>
                            <select className="form-control" id="quizid" name='quizid' onChange={handleChange}>
                                <option>Select Quiz ID</option>
                                {data.map(item => (
                                    <option value={item.quizid}>{item.quizid}</option>
                                ))}
                            </select>

                        </div>
                        <div className="form-group">
                            <label>Student Email</label>
                            <select className="form-control" id="email" name='email' onChange={handleChange}>
                                <option>Select Student Email</option>
                                {data1.map(item1 => (
                                    <option value={item1.EMAIL} >{item1.EMAIL}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit"  className="btn btn-primary" onClick={()=>{
                            // console.log(state)
                            axios.post("http://localhost:3001/faculty/addStudent",{
                                email:state.email,
                                quizid:state.quizid
                            }).then(res=>{
                                console.log(res.data);
                                alert(`${state.quizid} and ${state.email} is added`)

                            }
                            )
                        }}>Add Student</button>
                    </form>
        
                </div>
            </div>
        </div>
    )
}
export default AddStudent
