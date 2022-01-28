// Student Home Page
import React from 'react';
// import { Link } from 'react-router-dom';
import axios from "axios";

// fetch the Details of the Student from database and say hello to the user Name
const Home = () => {
    const [student, setStudent] = React.useState([]);
    React.useEffect(() => {
        axios.post('http://localhost:3001/student/profile', {            
            email: localStorage.getItem("SLoginUser")
            })
            .then(res => {  
                setStudent(res.data.result[0]);
                console.log(res.data.result[0]);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Hello {student.NAME}</h1>
            
            </div>
    );
}
export default Home;
            
// Student Profile Page
