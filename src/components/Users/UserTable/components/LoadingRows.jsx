import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const LoadingRows = () => (
  <>
    <TableRow>
      <TableCell colSpan={5}>
        <Skeleton />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={5}>
        <Skeleton />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={5}>
        <Skeleton />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={5}>
        <Skeleton />
      </TableCell>
    </TableRow>
  </>
);

export default LoadingRows;
