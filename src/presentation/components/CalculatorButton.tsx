import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
}

export const CalculatorButton = ({
  label,
  blackText = false,
  color = colors.darkGray,
  doubleSize = false,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.button,
        opacity: pressed ? 1 : 0.8,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
