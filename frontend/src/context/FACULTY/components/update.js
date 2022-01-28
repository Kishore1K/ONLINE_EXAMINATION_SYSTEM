import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Update = () => {
    const [data, setData]= useState([]);

    useEffect(() => {
        axios.post("http://localhost:3001/faculty/profile", {
            email: localStorage.getItem("LoginUser")
        }).then(res => {
            console.log(res.data.result);
            // alert(res.data.result[0]);
            setData(res.data.result[0]);
        })
    }
    , []);
    // alert(data.NAME)
    // console.log(data[0]);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-mod-12">
                            <div className="card-body col-md-10">
                                <h5 className="card-title">
                                    <b>Update Profile</b>
                                </h5>
                                <form className="col-md-10">
                                    <div className="form-group">
                                        <label htmlFor="Email">Email address</label>
                                        <input type="email" className="form-control" name="email" value={data.mail} placeholder={data.mail} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="NAME">NAME</label>
                                        <input type="text" className="form-control" name="name" placeholder={data.Name} required />   
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='phone'>Phone</label>
                                        <input type="text" className="form-control" name="phone" placeholder={data.phno}  required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="DEPT">DEPT</label>
                                        <input type="text" className="form-control" name="dept" value={data.dept}  placeholder={data.dept} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="DOB">DOB</label>
                                        <input type="date" className="form-control" name="dob" placeholder={data.DOB}  required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="STDID">ID</label>
                                        <input type="text" className="form-control" name="stdid" value={data.staffid} placeholder={data.STDID} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={()=> {
                                        if(window.confirm("Are you sure you want to update your profile?")){
                                            axios.post("http://localhost:3001/faculty/updateProfile", {
                                                email: data.mail,
                                                name: document.querySelector("input[name='name']").value,
                                                phone: document.querySelector("input[name='phone']").value,
                                                dob: document.querySelector("input[name='dob']").value
                                            }).then(res => {
                                                console.log(res.data);
                                                alert('Profile Updated Successfully');
                                            })
                                        }

                                    }} >Update</button>
                                    
                                    </form>
                                    {/* submit button */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update;
