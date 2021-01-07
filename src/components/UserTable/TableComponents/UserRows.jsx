import React from 'react';
import {
  arrayOf,
  func,
  string,
  shape,
} from 'prop-types';
import {
  Checkbox, IconButton, TableCell, TableBody, TableRow,
} from '@material-ui/core';

import { Delete, Edit } from '@material-ui/icons';

const TableHeader = (
  {
    checkboxRow,
    onChooseUser,
    onDeleteUser,
    onEditUser,
    users,
  },
) => users.map(({
  email,
  firstname,
  id,
  lastname,
  username,
}) => (
  <TableBody>
    <TableRow>
      <TableCell classes={{ root: checkboxRow }} padding="checkbox">
        <Checkbox onClick={() => onChooseUser(id)} />
      </TableCell>
      <TableCell>
        {`${lastname}, ${firstname}`}
      </TableCell>
      <TableCell>
        {username}
      </TableCell>
      <TableCell>
        {email}
      </TableCell>
      <TableCell classes={{ root: checkboxRow }} padding="none">
        <IconButton onClick={() => onEditUser(id)}>
          <Edit />
        </IconButton>
      </TableCell>
      <TableCell classes={{ root: checkboxRow }} padding="none">
        <IconButton onClick={() => onDeleteUser(id)}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  </TableBody>
));

TableHeader.propTypes = {
  onChooseUser: func.isRequired,
  onDeleteUser: func.isRequired,
  onEditUser: func.isRequired,
  users: arrayOf(shape({
    email: string,
    firstname: string,
    id: string,
    lastname: string,
    username: string,
  })),
};

export default TableHeader;
