import React, { useEffect, useState } from 'react';
import CmtGroupListItem from './CmtGroupListItem';
import PropTypes from 'prop-types';
import CmtList from '../CmtList';

const CmtGroupList = ({ isExpandable, isGrid, itemPadding, column, data, renderHeader, renderItem, groupIdentifier }) => {
  const [groups, setGroups] = useState([]);
  const [groupItems, setGroupItems] = useState([]);

  let groupList = [];
  let groupListItems = [];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    groupListItems = data.reduce((groupItems, dataItem) => {
      let groupDetail = null;
      groupDetail = groupIdentifier(dataItem);
      if (groupDetail && groupDetail.id) {
        if (!groupList.some(item => item.id === groupDetail.id)) {
          groupList.push(groupDetail);
        }
        if (!groupItems[groupDetail.id]) {
          groupItems[groupDetail.id] = [];
        }
        groupItems[groupDetail.id].push(dataItem);
      }
      return groupItems;
    }, {});

    setGroups(groupList);
    setGroupItems(groupListItems);
  }, [data]);

  const renderRow = group => (
    <CmtGroupListItem
      key={group.id}
      isExpandable={isExpandable}
      isGrid={isGrid}
      itemPadding={itemPadding}
      column={column}
      group={group}
      items={groupItems}
      renderHeader={renderHeader}
      renderItem={renderItem}
    />
  );

  return <React.Fragment>{groups.length > 0 && <CmtList data={groups} renderRow={renderRow} />}</React.Fragment>;
};

export default CmtGroupList;
CmtGroupList.defaultProps = { isExpandable: false, isGrid: false, data: [] };
CmtGroupList.prototype = {
  isExpandable: PropTypes.bool,
  isGrid: PropTypes.bool,
  itemPadding: PropTypes.number,
  column: PropTypes.number,
  data: PropTypes.array,
  renderHeader: PropTypes.func,
  renderItem: PropTypes.func,
  groupIdentifier: PropTypes.func,
};
