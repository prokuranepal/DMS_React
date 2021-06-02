import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardFooter from '../../../../@coremat/CmtCard/CmtCardFooter';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtCard from '../../../../@coremat/CmtCard';

const JumboCard = ({
  title,
  subTitle,
  avatar,
  icon,
  actionHandleIcon,
  actionHandler,
  actionsPos,
  actionsShowOnHover,
  footer,
  children,
  ...restProps
}) => {
  return (
    <CmtCard {...restProps}>
      {(icon || avatar || title || subTitle) && (
        <CmtCardHeader
          {...{
            title,
            subTitle,
            avatar,
            icon,
            actionHandleIcon,
            actionHandler,
            actionsPos,
            actionsShowOnHover,
          }}
          titleProps={{
            variant: 'h4',
            component: 'div',
          }}
        />
      )}
      <CmtCardContent>{children}</CmtCardContent>
      {footer && <CmtCardFooter>{footer}</CmtCardFooter>}
    </CmtCard>
  );
};

export default JumboCard;
