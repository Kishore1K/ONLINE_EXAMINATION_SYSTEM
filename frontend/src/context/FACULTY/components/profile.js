//profile page for login user
import axios from "axios";
import React from "react";

//fetch the details of the user
const Profile = () => {
    const [data, setData] = React.useState([]);

    const fetchUser = () => {
        axios.post("http://localhost:3001/faculty/profile", {
        email: localStorage.getItem("LoginUser")
    }).then(res => {
        console.log(res.data.result[0]);
        
        setData(res.data.result[0]);
        // console.log(data);
    })
    };
    React.useEffect(() => {
        
        fetchUser();
    }, []);


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <b>Profile</b>
                                </h5>
                                <p className="card-text">
                                    <b>Name:</b>
                                    {data.Name}
                                </p>
                                <p className="card-text">
                                    <b>Staffid:</b>
                                    {data.staffid}
                                </p>
                                <p className="card-text">
                                    <b>Phone:</b>
                                    {data.phno}
                                </p>
                                <p className="card-text">
                                    <b>Department:</b>
                                        {data.dept}
                                </p>
                                <p className="card-text">
                                    <b>Email:</b>
                                    {data.mail}
                                </p>
                                <p className="card-text">
                                    <b>DOB:</b>
                                    {data.DOB}
                                </p>
                                <p className="card-text">
                                    <b>

                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Profile;
