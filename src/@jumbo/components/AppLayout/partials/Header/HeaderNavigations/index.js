import React from 'react';

import { PostAdd } from '@material-ui/icons';
import CmtHorizontal from '../../../../../../@coremat/CmtNavigation/Horizontal';
import IntlMessages from '../../../../../utils/IntlMessages';

const HeaderNavigations = () => {
  const navigationMenus = [
    {
      name: <IntlMessages id={'sidebar.main'} />,
      type: 'collapse',
      children: [
        {
          name: <IntlMessages id={'pages.samplePage'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/sample-page',
        },
      ],
    },
  ];

  return <CmtHorizontal menuItems={navigationMenus} />;
};

export default HeaderNavigations;
