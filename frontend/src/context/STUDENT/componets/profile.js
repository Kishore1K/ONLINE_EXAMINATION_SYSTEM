import React from 'react';
import axios from 'axios';

const Profile = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.post('http://localhost:3001/student/profile', {
            email: localStorage.getItem("SLoginUser")
        }).then(res => {
            console.log(res.data.result[0]);
            // alert(res.data.result[0]);
            setData(res.data.result[0]);
        })
    }, []);
    // alert(data.NAME)

    return (
        // display student details in profile page 
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <b>Profile</b>
                                </h5>
                                <p className="card-text">
                                    <b>Name:</b>
                                    {data.NAME}
                                </p>
                                <p className="card-text">
                                    <b>ID</b>
                                    {data.STDID}
                                </p>
                                <p className="card-text">
                                    <b>Phone:</b>
                                    {data.PHONE}
                                </p>
                                <p className="card-text">
                                    <b>Department:</b>
                                        {data.DEPT}
                                </p>
                                <p className="card-text">
                                    <b>Email:</b>
                                    {data.EMAIL}
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
    