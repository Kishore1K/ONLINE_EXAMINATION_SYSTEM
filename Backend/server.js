const express = require('express')


const app = express()
// const mysql = require('mysql')

const cors = require('cors')
// const router = express.Router()
// const req = require('express/lib/request')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
app.use(cors())
app.use(express.json())

app.use('/student', require('./routes/student'));
app.use('/faculty', require('./routes/faculty'));



















// app.('/student', student)
//router.post('/student/signup', student)
// app.use('/faculty', faculty)

// bodyParser.urlencoded({extended:false})
// //student signup

// app.post('/signup', (req, res) => {
//     const { usn, password, name, email, phone, dob, dept } = req.body;
//     console.log(usn, password, name, email, phone, dob,password,dept)
//     //hash password
//     const hash = bcrypt.hashSync(password,10);
//     console.log(hash)
//     db.query(`INSERT INTO STUDENT (STDID, NAME, EMAIL,DEPT, DOB, PHONE,PASSWORD) values(?,?,?,?,?,?,?)`,[usn, name, email, dept ,dob, phone,hash],
//     (err, result) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log("Values updated")
//             res.send(result)
//         }
//     }
// )});

// //student login
// //compare password
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     console.log(email, password)
//     //compare hashed password
//     const hash = bcrypt.hashSync(password,10);
//     db.query(`SELECT EMAIL, PASSWORD FROM STUDENTS WHERE email = ? AND password = ?`,[email, password],
//     (err, result) => {
//         if (err) {
//             res.json({ error: err });
//         }

//         if (result && result.length > 0) {
//             bcrypt.compare(password, hash, (error, response) => {
//                 if (response) {
//                     req.session.user = result;
//                     res.json(result);
//                 } else {
//                     res.json({
//                         message: "Incorrect password",
//                     });
//                 }
//             });
//         } else {
//             res.json({ message: "Invalid username" });
//         }
//     }
// )}); //end of student login


// // db.connect((err)=>{
// //     if(err){
// //         throw err;
// //     }
// //     console.log('MySql Connected...');
// // });

// //student registeration
// app.post('/stdsignup',(req,res)=>{
//     const {std_id, name, email, phone, gender, password,dept } = req.body;
//     console.log(std_id, name, email, phone, gender, password, dept)

//     db.query(`INSERT INTO STUDENTS (std_id, name, email, phone, password, dept) values(?,?,?,?,?,?)`,[std_id, name,email, phone, gender, password, dept],
//     (err, res) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log("Values updated")
//         }
//     }
// )});

// app.post('/facsignup', (res, req) => {
//     const { fac_id, name, email, phone,dept, password } = req.body;
//     console.log(fac_id, name, email, phone, dept, password)
//     //hash password
//     // const hash = bcrypt.hashSync(password, 10);
//     // console.log(hash)
//     db.query(`INSERT INTO FACULTY (fac_id, name, email, phone, dept, password) values(?,?,?,?,?,?)`,[fac_id, name, email, phone, dept, password],
//     (err, res) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log("Values updated")
//         }
//     }
// )});


// // app.post('/stdlogin', (req, res) => {
// //     const { email, password } = req.body;
// //     console.log(email, password)
// //     db.query(`SELECT * FROM STUDENTS WHERE email = ? AND password = ?`,[email, password],
// //     (err, res) => {
// //         if(err) {
// //             console.log(err);
// //         }else {
// //             console.log("Values updated")
// //         }
// //     }
// // )});

// // app.post('/faclogin', (req, res) => {
// //     const { email, password } = req.body;
// //     console.log(email, password)
// //     db.query(`SELECT * FROM FACULTY WHERE email = ? AND password = ?`,[email, password],
// //     (err, res) => {
// //         if(err) {
// //             console.log(err);
// //             }else {
// //                 console.log("Values updated")
// //                 }
// //             }
// // )});
                    


// app.post('/stdlogin', (req, res) => {
//     const { std_id, password } = req.body;
//     console.log(std_id, password)
//     db.query(`SELECT * FROM STUDENTS WHERE std_id = ? AND password = ?`, [std_id, password], (err, result) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log(result)
//             res.json(result)
//         }
//     })

// })

// app.get('/factlogin', (req, res) => {
//     const { fac_id, password } = req.body;
//     console.log(fac_id, password)
//     db.query(`SELECT * FROM FACULTY WHERE fac_id = ? AND password = ?`, [fac_id, password], (err, result) => {
//         if(err) {
//             console.log(err);
//             }else {
//                 console.log(result)
//                 res.json(result)
//             }
//         })
// })



// app.post('/signup', (req, res) => {
//     const email = req.body.email
//     const password = req.body.password
//     console.log(email, password)

//     db.query('INSERT INTO  Users (email, password) VALUES(?,?)', [email, password],
//         (err, result) => {
//             if(err) {
//                 console.log(err);
//             }else {
//                 console.log("Values updated")
//             }
//         }
//     );
// });

// // To retrive data from database

// app.get('/employees', (req, res) => {
//     db.query('SELECT * FROM employees', (err, result) => {
//         if(err) {
//             console.log(err);
//         }else {
//             // res.json(result)
//             res.send(result)
//         }
  
//     })
// })


// app.post('/create', (req, res) => {
//     const name = req.body.name
    
//     const email = req.body.email
//     const password = req.body.password
//     const phone = req.body.phone
//     db.query('INSERT INTO  admin (Name,email, Password, Phone) values(?,?,?,?) ', [name, email, password, phone],
//     (err, res)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Values updated")
//         }
//     })
// })


// app.post('/adminLogin', (req, res) => {
//     const email = req.body.email
//     console.log(email)
//     const password = req.body.password
//     console.log(password)
    
//     db.query("SELECT * FROM admin WHERE email = ? AND Password=?",[email, password],(err, result) => {
//         if(err) {
//            res.send({err: err});
//         }else {
         
//             // res.json(result)
//             if(result.length > 0) {
//                 res.send(result)
//                 // res.send(result)
//                 console.log(result)
                
//             }else{
//                 res.send({message: "Wrong PAssword "})
//             }
//         }
        

//     })  
// })


port =3001

app.listen(port, ()=>{
    console.log(`yey Your server is running in port ${port}`)
})
