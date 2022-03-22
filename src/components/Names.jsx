import { useState } from "react";
import seminarGroup from "../data/seminarGroup";

const Names = () => {
    const [studentList, setStudentList] = useState(seminarGroup);

    const togglePickedOn = (studentName) => {
        setStudentList(currList => {
            const currStudent = currList.find(student => student.name === studentName);
            const updatedStudent = { name: currStudent.name, pickedOn: !currStudent.pickedOn }
            const otherStudents = currList.filter(student => student.name !== studentName);
            if (updatedStudent.pickedOn) {
                return [...otherStudents, updatedStudent];
            } else {
                return [updatedStudent, ...otherStudents];
            }
        })
    }

    return (
        <div>
            {studentList.map(student => {
                return <button
                    className={student.pickedOn ? 'btn-picked-on' : 'btn-not-picked-on'}
                    key={student.name}
                    onClick={() => togglePickedOn(student.name)}>
                    {student.name}
                </button>
            })}
        </div>
    );
};

export default Names;