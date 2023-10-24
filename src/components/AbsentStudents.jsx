import React from "react";

const AbsentStudents = (props) => {

  const absentList = props.students.filter((student) => student.isPresent === false);

  return (
    <div className="absent-list">
      <h2>Absent List</h2>
      <ul>
        {absentList.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => props.toggleHandler(item)}>
              Accidentally Added
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbsentStudents;
