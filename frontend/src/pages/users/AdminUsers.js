import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, List, ListItem, ListItemText, TextField } from '@mui/material';
import { getUsers, updateUser, deleteUser } from '../../api/users';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedUsername, setUpdatedUsername] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        alert('Failed to fetch users: ' + error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setUpdatedUsername(user.username);
  };

  const handleSaveClick = async (id) => {
    try {
      const updatedUser = await updateUser(id, { username: updatedUsername });
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
      setEditingUserId(null);
    } catch (error) {
      alert('Failed to update user: ' + error.message);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert('Failed to delete user: ' + error.message);
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Users Management
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              {editingUserId === user.id ? (
                <>
                  <TextField
                    value={updatedUsername}
                    onChange={(e) => setUpdatedUsername(e.target.value)}
                    sx={{ mr: 2 }}
                  />
                  <Button onClick={() => handleSaveClick(user.id)} variant="contained" sx={{ mr: 2 }}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <ListItemText primary={user.username} secondary={user.email} />
                  <Button onClick={() => handleEditClick(user)} variant="outlined" sx={{ mr: 2 }}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteClick(user.id)} variant="outlined" color="error">
                    Delete
                  </Button>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default AdminUsers;
