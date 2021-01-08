import React from 'react';
import { func, string } from 'prop-types';
import { Checkbox, TableCell, TableRow, TableSortLabel } from '@material-ui/core';

const TableHeader = ({ actionRow, checkboxRow, direction, onRequestSort, orderBy }) => (
  <TableRow>
    <TableCell classes={{ root: checkboxRow }} padding="checkbox" variant="head">
      <Checkbox disabled />
    </TableCell>
    <TableCell variant="head">
      <TableSortLabel
        active={orderBy === 'lastName'}
        direction={direction}
        onClick={() => onRequestSort('lastName')}
      >
        Last, First
      </TableSortLabel>
    </TableCell>
    <TableCell variant="head">
      <TableSortLabel
        active={orderBy === 'username'}
        direction={direction}
        onClick={() => onRequestSort('username')}
      >
        Username
      </TableSortLabel>
    </TableCell>
    <TableCell variant="head">
      <TableSortLabel
        active={orderBy === 'email'}
        direction={direction}
        onClick={() => onRequestSort('email')}
      >
        Email
      </TableSortLabel>
    </TableCell>
    <TableCell classes={{ root: actionRow }} colSpan="2" variant="head">
      Actions
    </TableCell>
  </TableRow>
);

TableHeader.propTypes = {
  actionRow: string.isRequired,
  checkboxRow: string.isRequired,
  direction: string.isRequired,
  onRequestSort: func.isRequired,
  orderBy: string.isRequired,
};

export default TableHeader;
