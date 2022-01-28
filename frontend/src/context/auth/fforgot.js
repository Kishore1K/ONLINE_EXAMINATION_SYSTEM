import React  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
// import { Placeholder } from 'semantic-ui-react'

export default function ForgetPasswordPage() {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        dob: ''
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //post request to server
        const payload = {
            email: state.email,
            password: state.password,
            dob: state.dob
        }
        console.log(payload)

        axios.post('http://localhost:3001/faculty/forgot',payload)
            .then(res => {
               if(res.status === 200){
                   alert('Password Changed Successful')
                   window.location.assign('/flogin')
               }
                // alert(res.data.message)
            })
            .catch(err => console.error(err))
        }


    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and DOB</h5>
            <form>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" value={state.email} onChange={handleChange} required />
                </p>
                <p>
                    <label id="dob">DOB</label><br/>
                    <input type="date" name='dob' value={state.dob} onChange={handleChange} required />

                </p>
                <p>
                    <label id="reset_pass_lbl">Password</label><br/>
                    <input type="password" name="password" value={state.password} onChange={handleChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit} >Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/fsignup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}