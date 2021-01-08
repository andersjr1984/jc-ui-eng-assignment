import React from 'react';
import UserTable from './UserTable';
import UserDrawer from './UserDrawer';
import Header from './Header';

// add drawer, snackbar, and dialog here
const User = () => (
  <>
    <Header />
    <UserTable />
    <UserDrawer />
  </>
);

export default User;
