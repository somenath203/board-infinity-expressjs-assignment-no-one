const fs = require('fs');
const path = require('path');

let students = [];


const createStudent = (req, res) => {

    const { studentFirstName, collegeName, location } = req.body;

    if (!(studentFirstName && collegeName && location)) {

        return res.status(400).send({
            "message": "please fill all the details"
        });

    };

    const studentDetails = {
        studentFirstName,
        collegeName,
        location
    };

    const p = path.join(__dirname, '../', 'students.json');

    fs.readFile(p, (error, fileContent) => {


        if (!error) {

            students = JSON.parse(fileContent);

        }

        students.push(studentDetails);

        fs.writeFile(p, JSON.stringify(students), (error) => {

            return res.status(500).send(error);

        });

    });

    res.status(201).json({

        "result": "Success"

    });

};


const getAllStudents = (req, res) => {

    fs.readFile('students.json', 'utf-8', (error, data) => {

        if(error) {

            return res.status(500).send(err);

        };

        res.status(200).json({
            data
        });

    });

}

module.exports = {
    createStudent,
    getAllStudents
};