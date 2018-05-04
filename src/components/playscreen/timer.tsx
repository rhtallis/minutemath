import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Label } from 'native-base';

interface timerProps{
  currentTime: number;
}

class Timer extends React.Component<timerProps, {}> {
  public render(){
    const { currentTime } = this.props;
    return(
      <View style={styles.topBox}>
      <Label>Time:</Label>
      <Label>{currentTime}</Label>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  topBox: {
    width: 100,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: 'red'
  }
});

export default Timer;