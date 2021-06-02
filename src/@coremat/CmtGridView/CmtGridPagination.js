import React from 'react';
import GridView from './GridView';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  navPagination: {
    display: 'flex',
    padding: 10,
    '&.left': {
      justifyContent: 'flex-start',
    },
    '&.right': {
      justifyContent: 'flex-end',
    },
    '&.center': {
      justifyContent: 'center',
    },
  },
}));

const CmtGridPagination = ({ data, position, paginationProps, onPageChange, pageItemCounts, ...rest }) => {
  const classes = useStyles();
  const { page, count } = paginationProps || {};
  let updatedData = data;
  if (count > 0) {
    updatedData = data.slice((page - 1) * pageItemCounts, page * pageItemCounts);
  }
  return (
    <GridView
      {...rest}
      data={updatedData}
      ListFooterComponent={
        count > 0 ? (
          <Pagination className={clsx(classes.navPagination, position)} count={count} page={page} onChange={onPageChange} />
        ) : null
      }
    />
  );
};

export default CmtGridPagination;
CmtGridPagination.propTypes = {
  paginationProps: PropTypes.object,
  // @pageItemCounts display item at a time in list
  pageItemCounts: PropTypes.number,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  ListEmptyComponent: PropTypes.element,
  ListFooterComponent: PropTypes.element,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func.isRequired,
  onPageChange: PropTypes.func,
};

CmtGridPagination.defaultProps = {
  paginationProps: {
    // @page is current active page in pagination
    page: 1,
    // @page total count of pages shown in pagination
    count: 5,
  },
  pageItemCounts: 10,
  position: 'right',
  data: [],
};
