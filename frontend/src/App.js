import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import ConfirmLogout from './pages/auth/ConfirmLogout';
import Register from './pages/auth/Register';
import Posts from './pages/posts/Posts';
import CreatePost from './pages/posts/CreatePost';
import EditPost from './pages/posts/EditPost';
import AdminUsers from './pages/users/AdminUsers';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirm-logout" element={<ConfirmLogout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;