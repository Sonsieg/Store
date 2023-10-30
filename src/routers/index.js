import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { headerOptions } from '../styles';
import StatusBar from '../components/StatusBar';

const FirstStack = createStackNavigator();

const Router = () => {
  const route = () => {
    return (
      <>
        <FirstStack.Navigator screenOptions={headerOptions}>
          <FirstStack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{
              headerShown: false,
            }}
          />
          <FirstStack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ title: '' }}
          />
          <FirstStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ title: '' }}
          />
        </FirstStack.Navigator>
      </>
    );
  };
  return <>{route()}</>;
};

export default Router;
