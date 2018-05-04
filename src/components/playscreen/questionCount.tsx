import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Label } from 'native-base';

interface questionCounterProps{
  questionCount: number;
}

class QuestionCounter extends React.Component<questionCounterProps, {}> {
  public render(){
    const { questionCount } = this.props;
    return(
      <View style={styles.topBox}>
        <Label>Question:</Label>
        <Label>{questionCount}</Label>
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

export default QuestionCounter;