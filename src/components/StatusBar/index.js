import { useFocusEffect } from '@react-navigation/native';
import { Platform, StatusBar as SB } from 'react-native';
import { Colors } from '../../assets';

const StatusBar = ({ barStyle = 'dark-content', bgColor = Colors.RED }) => {
  useFocusEffect(() => {
    if (bgColor && Platform.OS === 'android') {
      SB.setBackgroundColor(bgColor);
    }
    SB.setBarStyle(barStyle);
  });
  return null;
};

export default StatusBar;
