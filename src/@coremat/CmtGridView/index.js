import React from 'react';
import GridView from './GridView';
import PropTypes from 'prop-types';
import GridFooter from './GridFooter';

const CmtGridView = ({ column, itemPadding, ListEmptyComponent, data, onEndReached, renderRow, footerProps, ...rest }) => {
  return (
    <GridView
      {...{
        column,
        itemPadding,
        ListEmptyComponent,
        data,
        onEndReached,
        renderRow,
      }}
      {...rest}
      ListFooterComponent={footerProps && <GridFooter loading={footerProps.loading} footerText={footerProps.footerText} />}
    />
  );
};

export default CmtGridView;
CmtGridView.propTypes = {
  column: PropTypes.number,
  itemPadding: PropTypes.number,
  ListEmptyComponent: PropTypes.element,
  ListFooterComponent: PropTypes.element,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
  renderRow: PropTypes.func,
  footerProps: PropTypes.object,
};
CmtGridView.defaultProps = {
  itemPadding: 0,
  column: 3,
  data: [],
};
