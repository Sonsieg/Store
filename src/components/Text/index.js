import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import Colors from '../../assets/Colors';
import {normalize, normalizeFont, normalizeOptions} from '../../styles';

const Text = ({style, children, margin, padding, type, ...rest}) => {
  const combinedStyle = [
    'size',
    'color',
    'lineHeight',
    'fontSize',
    'fontSizeWithoutNormalize',
    'fontFamily',
    'fontWeight',
    'underline',
    'textAlign',
    'letterSpacing',
  ]
    .map(e => {
      if (!rest[e]) {
        return;
      }
      return styles[e](rest[e]);
    })
    .filter(e => e);

  return (
    <RNText
      style={StyleSheet.flatten([
        styles.default,
        margin && styles.margin(normalizeOptions(margin)),
        padding && styles.padding(normalizeOptions(padding)),
        type && styles.type(type),
        combinedStyle,
        style,
      ])}
      allowFontScaling={false}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  default: {
    color: Colors.BLACK,
  },
  type: type => {
    if (type === 'error') {
      return {
        color: Colors.BLACK,
        fontSize: normalizeFont(10),
      };
    }
    if (type === 'link') {
      return {
        fontSize: normalizeFont(11),
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
      };
    }
    if (type === 'text') {
      return {
        fontSize: normalizeFont(13),
        color: Colors.BLACK,
        fontWeight: 'normal',
      };
    }
    if (type === 'title') {
      return {
        fontSize: normalizeFont(18),
      };
    }
    if (type === 'semi_title') {
      return {
        fontSize: normalizeFont(16),
      };
    }
    if (type === 'subject') {
      return {};
    }

    return {};
  },
  color: color => ({color}),
  fontSize: size => ({fontSize: normalizeFont(size)}),
  fontFamily: fontFamily => ({fontFamily}),
  fontSizeWithoutNormalize: size => ({fontSize: size}),
  fontWeight: fontWeight => ({fontWeight: `${fontWeight}`}),
  margin: ([top, left, bottom, right]) => ({
    marginTop: top,
    marginBottom: bottom,
    marginLeft: normalize(left),
    marginRight: normalize(right),
  }),
  padding: ([top, left, bottom, right]) => ({
    paddingTop: top,
    paddingBottom: bottom,
    paddingLeft: normalize(left),
    paddingRight: normalize(right),
  }),
  underline: () => ({
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  }),
  textAlign: textAlign => ({textAlign}),
  lineHeight: lineHeight => ({lineHeight: normalizeFont(lineHeight)}),
  letterSpacing: letterSpacing => ({
    letterSpacing: letterSpacing,
  }),
  size: size => {
    switch (`${size}`) {
      case '12':
        return {
          lineHeight: normalizeFont(18),
          fontSize: normalizeFont(12),
        };
      case '11':
        return {
          fontSize: normalizeFont(11),
          lineHeight: normalizeFont(16),
        };
      case '10':
        return {
          fontSize: normalizeFont(10),
          lineHeight: normalizeFont(15),
        };
      case '13':
        return {
          fontSize: normalizeFont(13),
          lineHeight: normalizeFont(19),
        };
      case '14':
        return {
          fontSize: normalizeFont(14),
          lineHeight: normalizeFont(21),
        };
      case '16':
        return {
          fontSize: normalizeFont(16),
          lineHeight: normalizeFont(24),
        };
      case '20':
        return {
          fontSize: normalizeFont(20),
          lineHeight: normalizeFont(30),
        };
      case '22':
        return {
          fontSize: normalizeFont(22),
          lineHeight: normalizeFont(33),
        };
      default:
        return {
          fontSize: normalizeFont(size),
        };
    }
  },
});
