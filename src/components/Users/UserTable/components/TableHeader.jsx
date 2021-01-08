import React from 'react';
import { string } from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';

const TableHeader = ({ actionRow }) => (
  <TableRow>
    <TableCell>Last, First</TableCell>
    <TableCell>Username</TableCell>
    <TableCell>Email</TableCell>
    <TableCell classes={{ root: actionRow }} colSpan="2">
      Actions
    </TableCell>
  </TableRow>
);

TableHeader.propTypes = {
  actionRow: string.isRequired,
};

export default TableHeader;
