import React, { Suspense } from 'react';
import UserInfo from './UserInfo';

const AsynchronousApp = () => (
  <>
    <h2>Asynchronous App</h2>
    <Suspense fallback={<div>Loading...</div>}>
      <UserInfo userID={1} />
      <UserInfo userID={2} />
      <UserInfo userID={3} />
    </Suspense>
  </>
);

export default AsynchronousApp;
