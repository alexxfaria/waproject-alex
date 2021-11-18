import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import SaleListPage from './List';

const SaleIndexPage = memo(() => {
  return (
    <Switch>
      <Route path='/' component={SaleListPage} />
    </Switch>
  );
});

export default SaleIndexPage;
