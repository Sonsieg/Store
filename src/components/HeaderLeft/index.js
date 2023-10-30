import React from 'react';
import Box from '../Box';
import { Image, StyleSheet } from 'react-native';
import { Images, Colors } from '../../assets';

const HeaderLeft = ({ onPress }) => {
  return (
    <Box pressable padding={[5, 15]} onPress={onPress}>
      <Image source={Images.BACK} style={styles.image} resizeMode="contain" />
    </Box>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: Colors.WHITE,
  },
  image: {
    width: 24,
    height: 24,
    tintColor: Colors.WHITE,
  },
});
export default HeaderLeft;
