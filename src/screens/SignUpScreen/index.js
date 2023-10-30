import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/Colors';
import Images from '../../assets/Images';
import Box from '../../components/Box';
import ImageIcon from '../../components/ImageIcon';
import Text from '../../components/Text';
import { normalize } from '../../styles';

const SignUpScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.YELLOW, Colors.BACKGROUND]}
      style={styles.linearGradient}>
      <Box align="center" padding={[0, 15, 30, 15]}>
        <ImageIcon source={Images.LOGO} size={150} />
        <Box width={'100%'} margin={[10, 0, 0, 0]}>
          <Text margin={[0, 0, 8, 0]} color={Colors.BLACK} fontWeight={'600'}>
            Số điện thoại
          </Text>
          <TextInput style={styles.input} />
        </Box>
        <Box width={'100%'} margin={[10, 0, 0, 0]}>
          <Text margin={[0, 0, 8, 0]} color={Colors.BLACK} fontWeight={'600'}>
            Tên tài khoản
          </Text>
          <TextInput style={styles.input} />
        </Box>
        <Box width={'100%'} margin={[10, 0, 0, 0]}>
          <Text margin={[0, 0, 8, 0]} color={Colors.BLACK} fontWeight={'600'}>
            Mật khẩu
          </Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </Box>
        <Box width={'100%'} margin={[10, 0, 15, 0]}>
          <Text margin={[0, 0, 8, 0]} color={Colors.BLACK} fontWeight={'600'}>
            Xác nhận mật khẩu
          </Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </Box>
        <Box
          width={'100%'}
          margin={[20, 0]}
          padding={[12, 0]}
          background={Colors.YELLOW}
          style={styles.border}
          justify="center"
          align="center">
          <Text color={Colors.WHITE} fontWeight={'500'}>
            Đăng ký
          </Text>
        </Box>
      </Box>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  input: {
    width: '100%',
    height: normalize(44),
    paddingVertical: 0,
    paddingHorizontal: normalize(10),
    borderRadius: normalize(4),
    backgroundColor: Colors.WHITE,
  },
  border: {
    borderRadius: normalize(4),
    borderWidth: normalize(2),
    borderColor: Colors.WHITE,
  },
});
export default SignUpScreen;
