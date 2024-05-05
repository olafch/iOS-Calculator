import {View, Text} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
    </View>
  );
};
