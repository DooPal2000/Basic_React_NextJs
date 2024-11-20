import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Minji",
    },
    {
        id: 3,
        name: "Hoseok",
    },
    {
        id: 4,
        name: "Yoongi",
    },
];

// function AttendanceBook(props) {
//     return (
//         <div>
//             {students.map((student, index) => (
//                 <div key={index}>
//                     <h3>{student.name}</h3>
//                     <input type="checkbox" />
//                 </div>
//             ))}
//         </div>
//     );
// }

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
