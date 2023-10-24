import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";
import AbsentStudents from "./AbsentStudents";

const StudentSection = (props) => {
  const toggleHandler = (student) => {
    const newStudentList = props.students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    props.setStudents(newStudentList);
  };

  return (
    <div className="student-section">
      <AllStudents
        students={props.students}
        setStudents={props.setStudents}
        setStudentName={props.setStudentName}
        setEditMode={props.setEditMode}
        setEditableStudent={props.setEditableStudent}
      />
      <PresentStudents
        students={props.students}
        toggleHandler={toggleHandler}
      />
      <AbsentStudents
        students={props.students}
        toggleHandler={toggleHandler}
      />
    </div>
  );
};

export default StudentSection;
