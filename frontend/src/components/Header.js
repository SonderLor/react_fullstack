import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

const Header = () => {
  const {user, isAuthenticated} = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Flora
        </Typography>
        {isAuthenticated && (
          <>
            <Button color="inherit" component={Link} to="/posts">
              Posts
            </Button>
            <Button color="inherit" component={Link} to="/create-post">
              Create Post
            </Button>
          </>
        )}
        {isAuthenticated ? (
          <>
            <Typography variant="body1" sx={{mr: 2}}>
              Welcome, {user.username}!
            </Typography>
            <Button color="inherit" component={Link} to="/confirm-logout">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
