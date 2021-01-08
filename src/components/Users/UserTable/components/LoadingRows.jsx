import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { bool } from 'prop-types';

const LoadingRows = ({ smUp }) => (
  <>
    <TableRow>
      <TableCell colSpan={smUp ? 5 : 3}>
        <Skeleton />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={smUp ? 5 : 3}>
        <Skeleton />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={smUp ? 5 : 3}>
        <Skeleton />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={smUp ? 5 : 3}>
        <Skeleton />
      </TableCell>
    </TableRow>
  </>
);

LoadingRows.propTypes = {
  smUp: bool.isRequired,
};

export default LoadingRows;
