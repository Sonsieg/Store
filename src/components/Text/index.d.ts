import {TextProps} from 'react-native';

type TypoType = 'error' | 'title' | 'link' | 'semi_title' | 'text' | 'subject';
type Align = 'left' | 'right' | 'center';

interface TMGTextProps extends TextProps {
  color: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  margin: number | [number, number] | [number, number, number, number];
  padding: number | [number, number] | [number, number, number, number];
  type: TypoType;
  textAlign: Align;
}

export default function Text(props: TMGTextProps): {};
