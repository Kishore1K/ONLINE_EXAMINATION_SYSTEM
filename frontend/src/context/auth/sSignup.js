import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
// dotenv().config();

// import '../../App.css'

export default function SignUpPage() {
    const [state , setState] = useState({
        name : '',
        email : '',
        password : '',
        usn: '',
        phone: '',
        dob: '',
        dept: '',
        gender: '',
        cpassword: ''
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }


    
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(email, password, name, usn, phone, dob, dept)

        const payload = {
            email : state.email,
            password : state.password,
            name : state.name,
            usn : state.usn,
            phone : state.phone,
            dob : state.dob,
            dept : state.dept,
            gender : state.gender
        }
        console.log(payload)
    

        if(state.cpassword === state.password){
        //posting data to the server
        axios.post('http://localhost:3001/student/signup', payload)
        .then(res => {
            if(res.status === 200){
                console.log(res)
                alert('Registered Successfully')
                window.location.href = '/login'
            }
        })
        .catch(err => {
            console.log(err)
        }
        )
    }else{
        alert('Password Not Matched')
    }


        

    }

    //submit button
    





    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                {/* <p>
                    <label>NAME</label><br />
                    <input type="text" name="NAME" value={state.name} onChange={handleChange} required />
                </p>
                <p>
                    <label>USN</label><br/>
                    <input type="text" name="USN" value={state.usn} onChange={handleChange} required />
                </p> */}
                <p>
                    <label>Name</label>
                    <input type="text" name="name" value={state.name} onChange={handleChange} required />
                </p>
                <p>
                    <label>USN</label>
                    <input type="text" name="usn" value={state.usn} onChange={handleChange} required />
                </p>
                <p>
                    <label>Phone</label>
                    <input type="text" name="phone" value={state.phone} onChange={handleChange} required />

                </p>

                
                <p>
                <label>Department</label>
                <select name="dept" value={state.dept} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CV" >CV</option>
                    <option value="ME">ME</option>
                    </select> 
                </p>
                
                

                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={state.email} onChange={handleChange} required />
                </p>
                <p>
                    <label>DOB</label> <br/>
                    {/* <input type="date" name='DOB'  value={state.dob} onChange={handleChange} required /> */}
                    <input type="date" name='dob'  value={state.dob} onChange={handleChange} required />
                </p>
                
                <p>
                <label>GENDER</label>
                <select name="gender" value={state.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                    <option value="Other">OTHER</option>
                    
                    </select> 
                </p>
                
                

                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={state.password} onChange={handleChange} required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="cpassword" value={state.cpassword} onChange={handleChange} required />
                </p>

                
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}


