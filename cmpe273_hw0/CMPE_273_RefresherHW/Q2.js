"use strict"

//existing students enrollment list
const studentArr = [
    {
        "id" : 0,
        "name" : "Jack",
        "status" : "enrolled"
    }
];

//array destructuring
const [
    {
        "id" : id,
        "name": name,
        "status" : status
    }
] = studentArr;

//using array destructuring to check for enrollment student names
function checkEnrollment() {
    if(studentArr.length > 0 && status == 'enrolled') {
        //closure
        function loopNames() {
            for(var i = 0; i < studentArr.length; i++) {
            //using array destructuring variable: name
            console.log("Existing Enrolled Student Name: " + name);
            }
        }
        return loopNames;
    }
}

//one student "Johnny" in waitlist
const waitlist = {
    wid: 12,
    wname: 'Johnny',
    wstatus: 'waitlisted',
  };

//destructuring object
const {wid, wname, wstatus} = waitlist;
const waitListArr = [];


//rest operator
function enrollStudents(...name) {

    //MAX CAP 10 STUDENTS
    if(name.length < 10) {
        for(const [index, element] of name.entries()) {
            studentArr.push({"id" : index+1 , "name" : element, "status" : 'enrolled'});
        }
    }
    console.log("Enrolling New Students: ");
    console.log(studentArr);
}

var mergeList = [];
function mergeStudents() {
    if(studentArr.length < 10) {
        if(waitlist != undefined) {
        //use destructured object variable to push into waitlist array, update status to enrolled
        waitListArr.push({"id" : wid , "name" : wname, "status" : 'enrolled'});
        //spread operator to merge two arrays
        mergeList = [...studentArr, ...waitListArr];
        console.log("Merging Waitlisted Students: ");
        console.log(mergeList);
        }
    }
}

//check existing students, enroll new students, merge waitlist student if cap is not full
var check = checkEnrollment();
check();
enrollStudents("Jimmy", "Sophia", "Derek");
mergeStudents();