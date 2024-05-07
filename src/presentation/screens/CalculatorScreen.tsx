import {View, Text, Pressable} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>1</Text>
        </Pressable>
      </View>
    </View>
  );
};
