import React from "react";
import axios from "axios";

const Result = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.post('http://localhost:3001/faculty/getScore',
         {quizid: localStorage.getItem("rquizid")}
        ).then(res => {
            console.log(res.data);
            // alert(res.data.result[0]);
            setData(res.data);
        }
        )
    }, []);


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <b>Result</b>
                                </h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">Marks</th>
                                            <th scope="col">Total Marks</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>

                                                    <td>{item.NAME}</td>
                                                    <td>{item.mail}</td>

                                                    <td>{item.score}</td>
                                                    <td>{item.total}</td>
                                                </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Result;

