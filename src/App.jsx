import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Anuj Yadav",
      email: "anuj@example.com",
      course: "B.Tech CSE",
      age: 20,
    },
    {
      id: 2,
      name: "fahad khan",
      email: "fahad@example.com",
      course: "BCA",
      age: 19,
    },
  ]);

  const [editingId, setEditingId] = useState(null);

  const addStudent = (studentData) => {
    const newStudent = {
      id: Date.now(),
      ...studentData,
    };

    setStudents([...students, newStudent]);
  };

  const updateStudent = (studentData) => {
    const updatedStudents = students.map((student) =>
      student.id === editingId
        ? { id: editingId, ...studentData }
        : student
    );

    setStudents(updatedStudents);
    setEditingId(null);
  };

  const deleteStudent = (id) => {
    const remainingStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(remainingStudents);

    if (editingId === id) {
      setEditingId(null);
    }
  };

  const startEditing = (id) => {
    setEditingId(id);
  };

  const studentBeingEdited =
    students.find((student) => student.id === editingId) || null;

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Student Management System</h1>

        <StudentForm
          onAddStudent={addStudent}
          onUpdateStudent={updateStudent}
          studentBeingEdited={studentBeingEdited}
          onCancelEdit={() => setEditingId(null)}
        />

        <hr className="divider" />

        <StudentTable
          students={students}
          onEdit={startEditing}
          onDelete={deleteStudent}
        />
      </div>
    </div>
  );
}

export default App;