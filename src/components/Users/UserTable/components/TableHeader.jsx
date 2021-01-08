import React from 'react';
import { bool, string } from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';

const TableHeader = ({ actionRow, smUp }) => (
  <TableRow>
    <TableCell>Last, First</TableCell>
    {smUp && (
      <>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
      </>
    )}
    <TableCell classes={{ root: actionRow }} colSpan="2">
      Actions
    </TableCell>
  </TableRow>
);

TableHeader.propTypes = {
  actionRow: string.isRequired,
  smUp: bool.isRequired,
};

export default TableHeader;
