const StudentForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!props.studentName.trim()) return;

    props.editMode ? updateHandler(e) : createHandler();
  };

  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: props.studentName,
      isPresent: undefined,
    };

    props.setStudents([...props.students, newStudent]);
    props.setStudentName("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedStudentList = props.students.map((student) => {
      if (student.id === props.editableStudent.id) {
        return { ...student, name: props.studentName };
      }
      return student;
    });

    props.setStudents(updatedStudentList);
    props.setStudentName("");
    props.setEditMode(false);
  };

  return (
    <form className="student-form" onSubmit={submitHandler}>
      <input
        type="text"
        value={props.studentName}
        onChange={(e) => props.setStudentName(e.target.value)}
      ></input>
      <button type="submit">{props.editMode ? "Update" : "Add"}</button>
    </form>
  );
};

export default StudentForm;
