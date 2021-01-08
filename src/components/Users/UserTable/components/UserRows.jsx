import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { Checkbox, IconButton, TableCell, TableRow, Tooltip } from '@material-ui/core';

import { Delete, Edit } from '@material-ui/icons';

const TableHeader = ({ checkboxRow, onChooseUser, onDeleteUser, onEditUser, users }) =>
  users.map(({ email, firstname, id, lastname, username }) => (
    <TableRow key={id}>
      <TableCell classes={{ root: checkboxRow }} padding="checkbox">
        <Checkbox onClick={() => onChooseUser(id)} />
      </TableCell>
      <TableCell>{`${lastname}, ${firstname}`}</TableCell>
      <TableCell>{username}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell classes={{ root: checkboxRow }} padding="none">
        <Tooltip title="Edit">
          <IconButton className="edit" onClick={() => onEditUser(id)}>
            <Edit />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell classes={{ root: checkboxRow }} padding="none">
        <Tooltip title="Delete">
          <IconButton className="delete" onClick={() => onDeleteUser(id)}>
            <Delete />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  ));

TableHeader.propTypes = {
  onChooseUser: func.isRequired,
  onDeleteUser: func.isRequired,
  onEditUser: func.isRequired,
  users: arrayOf(
    shape({
      email: string,
      firstname: string,
      id: string,
      lastname: string,
      username: string,
    })
  ),
};

export default TableHeader;
