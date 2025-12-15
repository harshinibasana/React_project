import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CrudPage.css";


const CrudPage = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create user
  const createUser = async (e) => {
    e.preventDefault();
  
    if (!form.name || !form.email || !form.phone) {
      alert("All fields are required!");
      return;
    }
  
    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        form
      );
  
      // FIX: Always generate a unique ID
      const newId = Math.max(...users.map((u) => u.id)) + 1;
  
      const newUser = {
        id: newId,
        ...form,
      };
  
      setUsers([...users, newUser]);  // Update UI immediately
  
      alert("User created successfully!");
      setForm({ name: "", email: "", phone: "" });
  
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    }
  };
  
  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((u) => u.id !== id)); // remove locally
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">

      {/* PAGE TITLE */}
      <h2 className="text-center mb-4">Users CRUD (JSONPlaceholder + Bootstrap)</h2>

      {/* CREATE USER CARD */}
      <div className="card shadow-sm">
        <div className="card-header bg-light fw-bold">Create New User</div>

        <div className="card-body">
          <form onSubmit={createUser}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Enter name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                name="phone"
                type="text"
                placeholder="Enter phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Create User
            </button>
          </form>
        </div>
      </div>

      {/* USERS LIST TABLE */}
      <h4 className="mt-5 mb-3">Users List</h4>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CrudPage;
