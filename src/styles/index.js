import React from 'react';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Dimensions, PixelRatio, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Colors } from '../assets';
import HeaderLeft from '../components/HeaderLeft';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const scale = SCREEN_WIDTH / 360;
const heightBaseScale = SCREEN_HEIGHT / 896;

const { width } = Dimensions.get('window');

const RFValueHorizontal = (
  fontSize,
  customWidth,
  standardScreenWidth = 360,
) => {
  const heightPercent = Math.round(
    (fontSize * (customWidth || width)) / standardScreenWidth,
  );
  return heightPercent > fontSize + 2 ? fontSize + 2 : heightPercent;
};

export const normalizeFont = size => {
  return RFValueHorizontal(size);
};

export const normalize = (size, based) => {
  switch (based) {
    case 'height':
      const newSizeH = size * heightBaseScale;
      if (!newSizeH) {
        return size;
      }
      return Math.round(PixelRatio.roundToNearestPixel(newSizeH));
    default:
      const newSize = size * scale;
      if (!newSize) {
        return size;
      }
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
};

export const normalizeOptions = options => {
  if (!Array.isArray(options) && typeof options !== 'object') {
    return normalizeOptions([options]);
  }

  if (options.length === 1) {
    const value = options[0];
    return [value, value, value, value];
  }

  if (options.length === 2) {
    const value1 = options[0],
      value2 = options[1];
    return [value1, value2, value1, value2];
  }

  return options;
};

export const heighNavBar = () => {
  const statusBarHeight = getStatusBarHeight();
  return normalize(20) + statusBarHeight;
};

export const headerOptions = ({ route, navigation }) => {
  return {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitleAlign: 'center',
    headerTintColor: Colors.WHITE,
    headerStyle: {
      backgroundColor: Colors.YELLOW,
      borderBottomWidth: normalize(2),
      borderBottomColor: Colors.TRANSPARENT,
    },
    headerTitleStyle: {
      fontSize: normalizeFont(14),
      lineHeight: normalizeFont(21),
      paddingHorizontal: normalize(15),
    },
    headerLeft: props => {
      if (!props.canGoBack) {
        return null;
      }
      return (
        <View>
          <HeaderLeft onPress={props.onPress} />
        </View>
      );
    },
    headerRight: () => {
      return null;
    },
  };
};
