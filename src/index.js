import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './routers';
import { navigationRef } from './routers/ref';

const Root = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Router />
      </NavigationContainer>
    </>
  );
};
export default Root;
