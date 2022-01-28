// Student Home Page
import React from 'react';
import axios from "axios";

const Home = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        axios.post('http://localhost:3001/faculty/profile', {            
            email: localStorage.getItem("LoginUser")
            })
            .then(res => {  
                setData(res.data.result[0]);
                console.log(res.data.result[0]);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Hello {data.Name}</h1>
            
            </div>
    );
}
export default Home;
            
// Student Profile Page
