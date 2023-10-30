import React, { Suspense, useEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Platform,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNExitApp from './node_modules/react-native-exit-app/index';
import Root from './src';
import Colors from './src/assets/Colors';

const App = () => {
  let backHandleAlertShow = false;

  const handleBackButton = () => {
    if (!backHandleAlertShow) {
      backHandleAlertShow = true;
      Alert.alert(
        'Thoát ứng dụng',
        'Bạn muốn thoát khỏi ứng dụng ?',
        [
          {
            text: 'Huỷ',
            onPress: () => {
              backHandleAlertShow = false;
            },
          },
          {
            text: 'Đóng',
            onPress: () => {
              RNExitApp.exitApp();
              backHandleAlertShow = false;
            },
          },
        ],
        { cancelable: true },
      );
    }

    if (backHandleAlertShow) {
      backHandleAlertShow = false;
    }
    return true;
  };
  useEffect(() => {
    if (Platform?.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    }
  }, []);

  return (
    <Suspense
      fallback={<ActivityIndicator size="small" color={Colors.YELLOW} />}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.flexRoot}>
          <Root />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  flexRoot: {
    flex: 1,
  },
});

export default App;
