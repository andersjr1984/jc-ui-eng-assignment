import React, { useEffect } from 'react';
import { arrayOf, bool, func, shape } from 'prop-types';

const UserTable = (props) => {
  const {
    fetchUsers,
    users,
    usersPending,
  } = props;

  // Fetch Users on initial render
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>UserTable</div>
  );
};

UserTable.propTypes = {
  fetchUsers: func.isRequired,
  users: arrayOf(shape({})).isRequired,
  usersPending: bool.isRequired,
};

export default UserTable;
