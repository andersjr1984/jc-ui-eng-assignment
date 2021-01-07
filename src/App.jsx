import React from 'react';
import { Box, Typography } from '@material-ui/core';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="App">
      <header>
        <Typography align="center" variant="h3">Jump Cloud UI Challenge</Typography>
      </header>
      <Box maxWidth="900px" mx="auto" width="90%">
        <UserTable />
      </Box>
    </div>
  );
}

export default App;
