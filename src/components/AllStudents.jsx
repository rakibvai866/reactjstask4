const AllStudents = (props) => {

  const editHandler = (student) => {
    console.log(student.name);
    props.setEditMode(true);
    props.setStudentName(student.name);
    props.setEditableStudent(student);
  };

  const removeHandler = (studentId) => {
    const deleteStudent = props.students.filter(
      (student) => student.id !== studentId
    );
    props.setStudents(deleteStudent);
    console.log(deleteStudent);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== false) {
      const newStudentList = props.students.map((item) => {
        if (item.id === student.id) {
          return { ...item, isPresent: true };
        }
        return item;
      });
      props.setStudents(newStudentList);
    } else {
      alert("Student is already absent");
    }
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== true) {
      const newStudentList = props.students.map((item) => {
        if (item.id === student.id) {
          return { ...item, isPresent: false };
        }
        return item;
      });
      props.setStudents(newStudentList);
    } else {
      alert("Student is already present");
    }
  };

  return (
    <div className="all-students">
      <h2>All Students</h2>
      <ul>
        {props.students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student)}>Edit</button>
            <button onClick={() => removeHandler(student.id)}>Remove</button>
            <button onClick={() => makePresentHandler(student)}>
              Make Present
            </button>
            <button onClick={() => makeAbsentHandler(student)}>
              Make Absent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;
