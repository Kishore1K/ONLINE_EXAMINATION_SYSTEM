import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
// dotenv().config();

// import '../../App.css's

export default function SignUpPage() {
    // const [data, setData] = useState([]);
    const [state , setState] = useState({
        stafid : '',
        name : '',
        mail : '',
        password : '',
        phone: '',
        dob: '',
        dept: '',
        gender:'',
        cpassword : ''
    });
    
    
    // alert(state.gender)


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    //generate randome student id STD 
    


    
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(email, password, name, usn, phone, dob, dept)

        const payload = {
            stafid : state.stafid,
            email : state.mail,
            password : state.password,
            name : state.name,
            // usn : state.usn,
            phone : state.phone,
            dob : state.dob,
            dept : state.dept,
            gender:state.gender
        
        }
        console.log(payload)
        if(state.cpassword === state.password){
        //posting data to the server
        axios.post('http://localhost:3001/faculty/signup', payload)
        .then(res => {
            if(res.status === 200){
                console.log(res.data)
                alert('Registered Successfully')
                window.location.href = '/flogin'
            }
        })
        .catch(err => {
            console.log(err)
        }
        )
    }
    else{
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
                    <label>Staffid</label>
                    <input type="text" name="stafid" value={state.stafid} onChange={handleChange} required />
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
                    <label>Email address</label>
                    <input type="email" name="mail" value={state.mail} onChange={handleChange} required />
                </p>
                <p>
                    <label>DOB</label>
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
                    <label>Password</label>
                    <input type="password" name="password" value={state.password} onChange={handleChange} required />
                </p>
                <p>
                    <label>Confirm Password</label>
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


