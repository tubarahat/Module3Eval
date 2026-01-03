import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Simple Mock Dashboards
const AdminDashboard = () => <h1>Welcome to Admin Dashboard</h1>;
const CustomerDashboard = () => <h1>Welcome to Customer Dashboard</h1>;

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Valid Credentials from your image
    if (email === 'admin@gmail.com' && password === 'admin1234') {
      const userData = { email, role: 'Admin' };
      setUser(userData);
      navigate('/admin/dashboard');
    } 
    else if (email === 'customer@gmail.com' && password === 'customer1234') {
      const userData = { email, role: 'Customer' };
      setUser(userData);
      navigate('/customers/dashboard');
    } 
    else {
      // Rule: If email or password is wrong, show a proper alert
      alert("Invalid email or password!");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} required 
        /><br /><br />
        <input 
          type="password" placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} required 
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        
        {/* Protected Admin Route */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute user={user} roleRequired="Admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* Protected Customer Route */}
        <Route path="/customers/dashboard" element={
          <ProtectedRoute user={user} roleRequired="Customer">
            <CustomerDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}
