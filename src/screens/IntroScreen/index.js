import React from 'react';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import Colors from '../../assets/Colors';
import Images from '../../assets/Images';
import Box from '../../components/Box';
import Text from '../../components/Text';
import ImageIcon from '../../components/ImageIcon';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { normalize } from '../../styles/index';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
  const navigation = useNavigation();
  const goTo = name => {
    navigation.navigate(name);
  };
  return (
    <LinearGradient
      colors={[Colors.BLACK, Colors.RED, Colors.YELLOW]}
      style={styles.linearGradient}>
      <Box
        flex={1}
        align="center"
        justify="center"
        padding={[getStatusBarHeight(), 15, getBottomSpace() + 20, 15]}>
        <ImageIcon size={200} source={Images.INTRO} />
        <Text
          color={Colors.WHITE}
          margin={[20, 0]}
          style={styles.text}
          fontWeight="700"
          textAlign="center">
          Mua sắm chưa bao giờ đơn giản đến vậy !
        </Text>
        <Box
          width={'80%'}
          padding={[12, 0]}
          justify="center"
          align="center"
          alignSelf="center"
          background={Colors.YELLOW}
          style={styles.border}
          pressable
          onPress={() => {
            goTo('SignInScreen');
          }}>
          <Text color={Colors.WHITE} fontWeight="500">
            Đăng nhập
          </Text>
        </Box>
        <Box
          flexDirection="row"
          justify="space-between"
          align="center"
          width={'100%'}>
          <Box width={'20%'} height={1} background={Colors.WHITE} />
          <Text margin={[12, 0]} color={Colors.WHITE} fontWeight="500">
            Vui lòng đăng ký tài khoản
          </Text>
          <Box width={'20%'} height={1} background={Colors.WHITE} />
        </Box>
        <Box
          width={'80%'}
          padding={[12, 0]}
          justify="center"
          align="center"
          alignSelf="center"
          background={Colors.YELLOW}
          style={styles.border}
          pressable
          onPress={() => {
            goTo('SignUpScreen');
          }}>
          <Text color={Colors.WHITE} fontWeight="500">
            Đăng ký
          </Text>
        </Box>
      </Box>
    </LinearGradient>
  );
};
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  border: {
    borderRadius: normalize(4),
    borderWidth: normalize(2),
    borderColor: Colors.WHITE,
  },
  text: {
    fontStyle: 'italic',
  },
});
export default IntroScreen;
