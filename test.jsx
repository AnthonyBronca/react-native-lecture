import React from 'react';


const students = [
    {0: {name: "will", id:0}},
    {1: {name: "krystal", id: 1}},
    {2: {name: "tamara", id: 2}},
    {3: {name: "will", id: 3}},
    {4: {name: "ian", id: 4}},
    {5: {name: "daniel", id: 5}},
    {6: {name: "edward", id: 6}},
    {7: {name: "anthony", id: 7}},
]



const test = () => {
  return (
    <div>
        {students.map((student, idx) => (
            <div key={`${idx}-${student}-${student.id}`}>
                <h1>{student.name}</h1>
            </div>
        ))}
        {teachers.map((teacher, idx) => (
            <div key={idx}>
                <h1>{teacher.name}</h1>
            </div>
        ))}
    </div>
  );
}

export default test;
