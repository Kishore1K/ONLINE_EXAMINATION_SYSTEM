import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../../App.css'

export default function SignInPage() {
    const [state , setState] = useState({
        email: '',
        password: '',
});
const handleChange = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
}
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state.email, state.password)
    const payload = {
        email : state.email,
        password : state.password
    }
    console.log(payload)
    axios.post('http://localhost:3001/student/login', payload)
    .then(res => {
        if(res.status === 200){
            console.log(res.data)
            sessionStorage.setItem('SLoginUser', res.data[0].EMAIL)
            // sessionStorage.setItem('SROLE','Student')
            localStorage.setItem('SLoginUser', payload.email)
            alert('Logged in Successfully')
             window.location.assign('/STUDENT/home')
            
        
        }else{
            alert('Password andEmail didnt match')
        }
    }
    )
}

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                {/* <p>
                    <label>Email</label><br/>
                    <input type="text" name="first_name" value={state.email} onChange={handleChange} required />
                </p> */}
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" value={state.email} onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/sforgot"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={state.password} onChange={handleChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit} >Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}