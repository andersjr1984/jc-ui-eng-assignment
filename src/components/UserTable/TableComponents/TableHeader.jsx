import React from 'react';
import {
  func,
  string,
} from 'prop-types';
import {
  Checkbox, TableCell, TableRow, TableSortLabel,
} from '@material-ui/core';

const TableHeader = ({
  actionRow, checkboxRow, direction, onRequestSort, orderBy,
}) => (
  <TableRow>
    <TableCell variant="head" classes={{ root: checkboxRow }} padding="checkbox">
      <Checkbox disabled />
    </TableCell>
    <TableCell variant="head">
      <TableSortLabel onClick={() => onRequestSort('lastName')} direction={direction} active={orderBy === 'lastName'}>
        Last, First
      </TableSortLabel>
    </TableCell>
    <TableCell variant="head">
      <TableSortLabel onClick={() => onRequestSort('username')} direction={direction} active={orderBy === 'username'}>
        Username
      </TableSortLabel>
    </TableCell>
    <TableCell variant="head">
      <TableSortLabel onClick={() => onRequestSort('email')} direction={direction} active={orderBy === 'email'}>
        Email
      </TableSortLabel>
    </TableCell>
    <TableCell variant="head" colSpan="2" classes={{ root: actionRow }}>
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
