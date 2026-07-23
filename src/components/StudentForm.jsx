import { useState, useEffect } from "react";

function StudentForm({
  onAddStudent,
  onUpdateStudent,
  studentBeingEdited,
  onCancelEdit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  useEffect(() => {
    if (studentBeingEdited) {
      setFormData({
        name: studentBeingEdited.name,
        email: studentBeingEdited.email,
        course: studentBeingEdited.course,
        age: studentBeingEdited.age,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        course: "",
        age: "",
      });
    }
  }, [studentBeingEdited]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.course ||
      !formData.age
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (studentBeingEdited) {
      onUpdateStudent(formData);
    } else {
      onAddStudent(formData);
    }

    setFormData({
      name: "",
      email: "",
      course: "",
      age: "",
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter student email"
        />
      </div>

      <div className="form-group">
        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter course name"
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter age"
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn btn-blue">
          {studentBeingEdited ? "Update Student" : "Add Student"}
        </button>

        {studentBeingEdited && (
          <button
            type="button"
            className="btn btn-gray"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;