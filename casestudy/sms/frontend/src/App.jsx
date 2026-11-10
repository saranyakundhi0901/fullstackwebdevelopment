import { useEffect, useState } from "react";
import { getStudents, addStudent, updateStudent, deleteStudent } from "./api";

const empty = { name: "", rollNo: "", department: "", email: "" };

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Single place that reloads the list from the server
  const loadStudents = async () => {
    try {
      setError("");
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error("Fetch failed:", err);
      setError(err.response?.data?.error || "Cannot reach the server. Check API URL and CORS.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      if (editId) await updateStudent(editId, form);
      else await addStudent(form);
      setForm(empty);
      setEditId(null);
      await loadStudents(); // KEY FIX: re-fetch after every add/update
    } catch (err) {
      setError(err.response?.data?.error || "Could not save the student.");
    }
  };

  const handleEdit = (s) => {
    setEditId(s._id);
    setForm({ name: s.name, rollNo: s.rollNo, department: s.department, email: s.email || "" });
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      await loadStudents();
    } catch (err) {
      setError(err.response?.data?.error || "Could not delete the student.");
    }
  };

  return (
    <main className="wrap">
      <h1>Student Management System</h1>

      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="rollNo" placeholder="Roll no" value={form.rollNo} onChange={handleChange} required />
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} />
        <button type="submit">{editId ? "Save changes" : "Add student"}</button>
        {editId && (
          <button type="button" className="ghost" onClick={() => { setEditId(null); setForm(empty); }}>
            Cancel
          </button>
        )}
      </form>

      {error && <p className="error" role="alert">{error}</p>}

      {loading ? (
        <p>Loading students…</p>
      ) : students.length === 0 ? (
        <p>No students yet. Add the first one above.</p>
      ) : (
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Name</th><th>Roll no</th><th>Department</th><th>Email</th><th></th></tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id}>
                  <td>{s.name}</td>
                  <td>{s.rollNo}</td>
                  <td>{s.department}</td>
                  <td>{s.email}</td>
                  <td className="actions">
                    <button onClick={() => handleEdit(s)}>Edit</button>
                    <button className="danger" onClick={() => handleDelete(s._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
