import React from "react";

const PresentStudents = (props) => {

  const presentList = props.students.filter((student) => student.isPresent === true);

  return (
    <div className="present-list">
      <h2>Present List</h2>
      <ul>
        {presentList.map((item) => (
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

export default PresentStudents;
