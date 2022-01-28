import React from "react";
import axios from "axios";

const Result = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.post("http://localhost:3001/student/result", {
            email: localStorage.getItem("SLoginUser")
        }).then(res => {
            console.log(res.data.result);
            // alert(res.data.result[0]);
            setData(res.data.result);
        })
    }
    , []);
    // alert(data.NAME)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <b>Result</b>
                                </h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Quiz ID</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">Marks</th>
                                            <th scope="col">Total Marks</th>
                                            <th scope="col">Remarks</th>
                                            </tr>
                                    </thead>
                                    <tbody>

                                        {data.map((item, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{item.quizid}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.score}</td>
                                                    <td>{item.total}</td>
                                                    <td>{item.remarks}</td>
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