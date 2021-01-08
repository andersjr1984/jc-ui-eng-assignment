import React from 'react';
import { Box, Typography } from '@material-ui/core';
import User from './components/Users';

function App() {
  return (
    <div className="App">
      <header>
        <Typography align="center" variant="h3">
          Jump Cloud UI Challenge
        </Typography>
      </header>
      <Box maxWidth="900px" mx="auto" width="90%">
        <User />
      </Box>
    </div>
  );
}

export default App;
