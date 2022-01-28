//STUDENT ROUTES
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { status } = require('express/lib/response');
const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'EXAM2',
});



// student signup

exports.signup = (req, res) => {
    const usn = req.body.usn;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const dob = req.body.dob;
    const dept = req.body.dept;
    const gender = req.body.gender;
    console.log(usn, password, name, email, phone, dob, dept, gender)
    //hash password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err,
            });
        } else {
            db.query(
                `INSERT INTO STUDENT (STDID, NAME, EMAIL,DEPT, DOB, PHONE,PASSWORD, GENDER) values(?,?,?,?,?,?,?, ?)`,
                [usn, name, email, dept, dob, phone, hash, gender],
                (err, result) => {
                    if (err) {
                        res.json({
                            error: err,
                        });
                    } else {
                        res.json({
                            message: "Values updated",
                        });
                    }
                }
            );
        }
    });
};
// student login
exports.login = (req, res, done) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password)
    db.query(
        `SELECT * FROM STUDENT WHERE EMAIL = ? `,
        [email],
        (err, result) => {
            if (err) {
                return res.sendStatus(401)
                
            }

            if (result && result.length > 0)    
                bcrypt.compare(
                    password,
                    result[0].PASSWORD,
                    (error, response) => {
                        if (response) {
                            
                            console.log(result);
                            return res
                            .send(result);
                            
                        } else {
                            return res.sendStatus(401)
                            
                        }
                    }
                );
            else {
                return res.sendStatus(404)
                
            }
        }
    );  
};


//STUDENT PROFILE
exports.profile = (req, res) => {
    db.query(
        "select * from student where email = ?",
        [req.body.email],
        (err, result) => {
            console.log(result)
            if (err) {
                return res
                .json({
                    error: err
                });
            }
            else {
                return res
                .json({
                    result: result
                });
            }
        }
    );
};

//view exams alloted to student
exports.viewExams = (req, res) => {
    mail = req.body.email;
    console.log(mail)
    db.query(
        "select q.quizid, q.name from quiz q, exam e where q.quizid=e.quizid and q.status='1' and e.mail= ?",
        [mail],

        (err, result) => {
            console.log(result)
            if (err) {
                return res
                .json({
                    error: err
                });
            }
            else {
                return res
                .json({
                    result: result
                });
            }
        }
    );
};


//STUDENT UPDATE PROFILE
exports.update = (req, res) => {
    const { usn, password, name, email, phone, dob, dept } = req.body;
    console.log(usn, password, name, email, phone, dob, dept)
    //hash password
    const hash = bcrypt.hashSync(password,10);
    console.log(hash)
    db.query(`UPDATE STUDENT SET NAME = ?, EMAIL = ?, DEPT = ?, DOB = ?, PHONE = ?, PASSWORD = ? WHERE STDID = ?`,[name, email, dept ,dob, phone, hash,usn],
    (err, result) => {
        if(err) {
            console.log(err);
        }else {
            console.log("Values updated")
            res.send(result)
        }
    }
)}


//view questions
exports.viewQuestions = (req, res) => {
    console.log(req.body.quizid)
    db.query(
        "select * from questions where quizid = ?",
        [req.body.quizid],
        (err, result) => {
            console.log(result)
            if (err) {
                return res
                .json({
                    error: err
                });
            }
            else {
                return res
                .json({
                    result: result
                });
            }
        }
    );
}

// Exam results score
exports.examResults = (req, res) => {
    console.log(req.body.email)
    db.query( 
        "select q.name,s.* from quiz q, score s where q.quizid=s.quizid and s.mail= ?",
        [req.body.email],
        (err, result) => {
            console.log(result)
            if (err) {
                return res
                .json({
                    error: err
                });
            }
            else {
                return res
                .json({
                    result: result
                });
            }
        }
    );
}

//insert marks into score table
exports.insertMarks = (req, res) => {
    const mail = req.body.email;
    const quizid = req.body.quizid;
    const marks = req.body.marks;
    const total = req.body.total;
    console.log(mail, quizid, marks, total);
    db.query(
        `INSERT INTO SCORE (quizid,score, mail, total) values(?,?,?, ?)`, [quizid, marks, mail, total],
        (err, result) => {
            if (err) {
                res.json({
                    error: err,
                });
            } else {
                res.json({
                    message: "Values updated",
                });
            }
        }
    );
};


//update details of student
exports.updateDetails = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const dob = req.body.dob;
    console.log(name, email, phone, dob)
    //hash password
    db.query(`UPDATE student SET NAME = ?, DOB = ?, PHONE = ?  WHERE EMAIL = ?`,[name, dob, phone, email],
    (err, result) => {
        if(err) {
            console.log(err);
        }else {
            console.log("Values updated")
            res.send(result)
        }
    }
)}