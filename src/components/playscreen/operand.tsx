import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Label } from 'native-base';
import { operands } from '../../common/enums';


interface timerProps{
  operand: operands;
}

class OperandDisplay extends React.Component<timerProps, {}> {
  public render(){
    return(
      <View style={styles.topBox}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topBox: {
    width: 100
  }
});

export default OperandDisplay;