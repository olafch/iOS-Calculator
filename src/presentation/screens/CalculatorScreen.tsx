import {View, Text, Pressable} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="C" color={colors.lightGray} blackText />
        <CalculatorButton label="+/-" color={colors.lightGray} blackText />
        <CalculatorButton label="del" color={colors.lightGray} blackText />
        <CalculatorButton label="÷" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" color={colors.lightGray} />
        <CalculatorButton label="8" color={colors.lightGray} />
        <CalculatorButton label="9" color={colors.lightGray} />
        <CalculatorButton label="×" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" color={colors.lightGray} />
        <CalculatorButton label="5" color={colors.lightGray} />
        <CalculatorButton label="6" color={colors.lightGray} />
        <CalculatorButton label="+" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" color={colors.lightGray} />
        <CalculatorButton label="2" color={colors.lightGray} />
        <CalculatorButton label="3" color={colors.lightGray} />
        <CalculatorButton label="-" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" color={colors.lightGray} doubleSize />
        <CalculatorButton label="." color={colors.lightGray} />
        <CalculatorButton label="=" color={colors.orange} />
      </View>
    </View>
  );
};
