function StudentTable({ students, onEdit, onDelete }) {
  // If there are no students yet, show a simple message instead of an empty table
  if (students.length === 0) {
    return <p className="no-data">No students added yet.</p>;
  }
 
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* We use map() to turn each student object into a table row (<tr>) */}
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.age}</td>
            <td className="action-buttons">
              <button className="btn btn-blue" onClick={() => onEdit(student.id)}>
                Edit
              </button>
              <button className="btn btn-red" onClick={() => onDelete(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 
export default StudentTable;