import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        showAlert('error', 'Failed to fetch students');
      }
    } catch (err) {
      showAlert('error', 'Could not connect to the server');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.course.trim()) newErrors.course = 'Course is required';
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const url = editingId ? `/api/students/${editingId}` : '/api/students';
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        showAlert('success', editingId ? 'Student updated successfully!' : 'Student registered successfully!');
        setFormData({ name: '', email: '', phone: '', course: '' });
        setEditingId(null);
        fetchStudents();
      } else {
        showAlert('error', data.message || 'Operation failed');
      }
    } catch (err) {
      showAlert('error', 'Server error. Please try again.');
    }
  };

  const handleEdit = (student) => {
    setEditingId(student._id);
    setFormData({
      name: student.name,
      email: student.email,
      phone: student.phone,
      course: student.course
    });
    setErrors({});
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student record?')) return;

    try {
      const response = await fetch(`/api/students/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        showAlert('success', 'Student record deleted successfully!');
        fetchStudents();
      } else {
        const data = await response.json();
        showAlert('error', data.message || 'Failed to delete record');
      }
    } catch (err) {
      showAlert('error', 'Server error. Could not delete.');
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', email: '', phone: '', course: '' });
    setErrors({});
  };

  return (
    <div className="container">
      <header>
        <h1>Student Registration System</h1>
        <p>Manage and track student enrollment courses efficiently</p>
      </header>

      {alert && (
        <div className={`alert alert-${alert.type === 'error' ? 'danger' : 'success'}`}>
          {alert.message}
        </div>
      )}

      <div className="grid">
        <div className="card">
          <h2>{editingId ? 'Edit Student Details' : 'Register New Student'}</h2>
          <form onSubmit={handleSubmit} noValidate style={{ marginTop: '1.5rem' }}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="John Doe"
              />
              {errors.name && <div className="error-text">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="john.doe@example.com"
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="+1234567890"
              />
              {errors.phone && <div className="error-text">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="course">Enrolling Course</label>
              <input
                id="course"
                type="text"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Computer Science 101"
              />
              {errors.course && <div className="error-text">{errors.course}</div>}
            </div>

            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update Record' : 'Register Student'}
            </button>

            {editingId && (
              <button type="button" onClick={cancelEdit} className="btn btn-secondary">
                Cancel
              </button>
            )}
          </form>
        </div>

        <div>
          <div className="card" style={{ height: '100%', minHeight: '400px' }}>
            <h2>Registered Students ({students.length})</h2>
            <div className="student-list" style={{ marginTop: '1.5rem' }}>
              {students.length === 0 ? (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '2rem' }}>
                  No students registered yet. Fill the form to add one.
                </p>
              ) : (
                students.map((student) => (
                  <div key={student._id} className="student-card">
                    <div className="student-info">
                      <h3>{student.name}</h3>
                      <p>📧 {student.email}</p>
                      <p>📞 {student.phone}</p>
                      <span className="badge">{student.course}</span>
                    </div>
                    <div className="student-actions">
                      <button onClick={() => handleEdit(student)} className="btn btn-edit">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(student._id)} className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
