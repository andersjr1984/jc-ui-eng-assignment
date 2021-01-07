import React, { useEffect, useState } from 'react';
import {
  arrayOf,
  bool,
  func,
  shape,
} from 'prop-types';
import * as R from 'ramda';
import { makeStyles, Table } from '@material-ui/core';
import { LoadingRows, TableHeader, UserRows } from './TableComponents';

const useStyles = makeStyles((theme) => ({
  actionRow: {
    width: theme.spacing(14),
  },
  tableRoot: {
    '& td': {
      overflowWrap: 'break-word',
    },
    tableLayout: 'fixed',
    width: '100%',
  },
  checkboxRow: {
    textAlign: 'center',
    width: theme.spacing(7),
  },
}));

const UserTable = (props) => {
  const [sortAsc, setSortAsc] = useState(true);
  const [orderBy, setOrderBy] = useState('lastName');
  const { actionRow, checkboxRow, tableRoot } = useStyles();
  const direction = sortAsc ? 'asc' : 'desc';
  const {
    fetchUsers,
    users,
    usersPending,
  } = props;

  const handleRequestSort = (value) => {
    if (value === orderBy) return setSortAsc(R.not);
    return setOrderBy(value);
  };

  // Fetch Users on initial render
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Table classes={{ root: tableRoot }}>
      <TableHeader
        actionRow={actionRow}
        checkboxRow={checkboxRow}
        direction={direction}
        onRequestSort={handleRequestSort}
        orderBy={orderBy}
      />
      {usersPending ? <LoadingRows /> : <UserRows checkboxRow={checkboxRow} users={users} />}
    </Table>
  );
};

UserTable.propTypes = {
  fetchUsers: func.isRequired,
  users: arrayOf(shape({})).isRequired,
  usersPending: bool.isRequired,
};

export default UserTable;
