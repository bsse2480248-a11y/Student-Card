
import { useState } from "react";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import PageHeader from "./components/PageHeader";
import StudentCard from "./components/StudentCard";
import Pagination from "./components/Pagination";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import "./App.css";

const initialStudents = [
  { id: 101, name: "Inshra", major: "Computer Science", year: 2, gpa: 3.8 },
  { id: 102, name: "Rachna Bai", major: "Computer Science", year: 2, gpa: 3.7 },
  { id: 103, name: "Zahra ", major: "Computer Science", year: 2, gpa: 3.8 },
  { id: 104, name: "Maryam", major: "Computer Science", year: 2, gpa: 3.9 },
  { id: 105, name: "Hamza", major: "Software Engineering", year: 3, gpa: 3.6 },
  { id: 106, name: "Sara Khan", major: "Computer Science", year: 2, gpa: 3.9 },
  { id: 107, name: "Ali Ahmed", major: "Information Technology", year: 1, gpa: 3.5 },
  { id: 108, name: "Noor Fatima", major: "Software Engineering", year: 3, gpa: 3.7 },
  { id: 109, name: "Hamza Ali", major: "Computer Science", year: 4, gpa: 3.4 },
  { id: 110, name: "Ayesha Noor", major: "Software Engineering", year: 2, gpa: 3.8 },
  { id: 111, name: "Usman Khan", major: "Information Technology", year: 3, gpa: 3.6 },
  { id: 112, name: "Fatima Ahmed", major: "Computer Science", year: 1, gpa: 3.9 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState(
    "Student records have been successfully updated."
  );

  const pageSize = 4;

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.id} ${student.major}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / pageSize)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleStudents = filteredStudents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function handleSearch(value) {
    setSearch(value);
    setPage(1);
  }

  function handleDelete(id) {
    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );
    setMessage("Student record deleted successfully.");
  }

  function handleAddStudent() {
    const name = window.prompt("Enter student name:");

    if (!name || !name.trim()) return;

    const major =
      window.prompt("Enter student major:", "Computer Science") ||
      "Computer Science";

    const newStudent = {
      id: Math.max(100, ...students.map((student) => student.id)) + 1,
      name: name.trim(),
      major,
      year: 1,
      gpa: 0,
    };

    setStudents((previous) => [...previous, newStudent]);
    setSearch("");
    setPage(Math.ceil((students.length + 1) / pageSize));
    setMessage("New student added successfully.");
  }

  return (
    <div className="app-shell">
      <Navbar search={search} onSearch={handleSearch} />

      <main className="directory-container">
        <Breadcrumb />

        <PageHeader onAddStudent={handleAddStudent} />

        <div className="row g-3 student-grid">
          {visibleStudents.map((student) => (
            <div className="col-12 col-sm-6 col-lg-3" key={student.id}>
              <StudentCard
                student={student}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>

        {visibleStudents.length === 0 && (
          <div className="alert alert-warning mt-3">
            No students found. Try another search.
          </div>
        )}

        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
        />

        {message && (
          <Alert
            message={message}
            onClose={() => setMessage("")}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
