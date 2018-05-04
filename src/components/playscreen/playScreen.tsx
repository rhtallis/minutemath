import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Row, Label, Item, Input } from 'native-base';
import { TabNavigator } from 'react-navigation';
import { operands } from '../../common/enums';

import Timer from './timer'
import QuestionCounter from './questionCount'
import Equation from './equation'

import psHelper from './playScreen.helper';

interface PlayScreenProps {
  navigation: any
}

interface PlayScreenState {
  num1: number;
  num2: number;
  operand: operands;
  timer: number;
  timerInterval: any; 
  questionCount: number;
  userAnswer: string;
  hasTimeLeft: boolean;
}

class PlayScreen extends React.Component<PlayScreenProps, PlayScreenState> {
  static navigationOptions = ({ navigation, navigationOptions }: any) => {
    const { params } = navigation.state;
    
    return {
            title: 'Math Time',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  public constructor(props: PlayScreenProps, context: object) {
    super(props, context);

    let newOperand: operands = psHelper.generateOperand(4);
    let newNum1:number = psHelper.generateNum1(0, 10);
    let newNum2:number = psHelper.generateNum2(newNum1, newOperand, 0, 10);

    this.state = {
      num1: newNum1,
      num2: newNum2,
      operand: newOperand,
      timer: 0,
      timerInterval: null,
      questionCount: 0,
      userAnswer: '',
      hasTimeLeft: true
    };
  }

  public componentDidMount() {
     this.setState({
      timerInterval: setInterval(() => {
        this.incrementTimer();
       }, 1000)
     })
  }

  public componentWillUnmount(){
    clearInterval(this.state.timerInterval)
  }

  private incrementTimer = () => {
    if (this.state.timer < 60) {
      this.setState({
        timer: this.state.timer + 1,
        hasTimeLeft: true
      });
    } else {
      clearTimeout(this.state.timerInterval)
      this.setState({
        hasTimeLeft: false
      });
    }
  }

  private setUserAnswer = (text:string) => {
    if(text.includes('.')){
      //ignore this input
    } else {
      this.setState({
        userAnswer: text
      })
    }
  }

  private checkAnswer = (userAnswer: number) => {
    console.log('check answer')
    console.log('ua: ' + this.state.userAnswer);
    console.log('ca: ' + psHelper.getCorrectAnswer(this.state.num1, this.state.num2, this.state.operand));
    if(psHelper.checkAnswer(psHelper.getCorrectAnswer(this.state.num1, this.state.num2, this.state.operand), +this.state.userAnswer)){
      //TODO: prompt correct

      let newOperand: operands = psHelper.generateOperand(4);
      let newNum1:number = psHelper.generateNum1(0, 10);
      let newNum2:number = psHelper.generateNum2(newNum1, newOperand, 0, 10);

      this.setState({
        userAnswer: '',
        questionCount: psHelper.incrementQuestionNumber(this.state.questionCount),
        num1: newNum1,
        num2: newNum2,
        operand: newOperand
      });

      console.log('correct!!!');      
      //TODO: generate new numbers and answer
    } else {
      //TODO: prompt incorrect
      this.setState({userAnswer: ''})
    }
  }

  render() {
    const { timer } = this.state; 
    const { num1, num2, operand, userAnswer} = this.state;
    return (
      <View>
        <View style={{height: '15%'}}>
        <View style={styles.horizontal}>
            <Timer currentTime={this.state.timer}/>
            <View style={styles.fill}/>
            <QuestionCounter questionCount={this.state.questionCount}/>
          </View>
        </View>
        <View style={{height: '55%', borderWidth: 0.5}}>
          <Equation 
            num1={num1} 
            num2={num2} 
            operand={operand} 
            setUserAnswer={this.setUserAnswer} 
            userAnswer={userAnswer}
          />
        </View>
        <View style={styles.horizontal}>
          <Button>
            <Text>Skip</Text>
          </Button>
          <Button onPress={() => {this.checkAnswer(+this.state.userAnswer)}}>
            <Text>Submit</Text>
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row'
  },
  vertical: {
    flexDirection: 'column'
  },
  verticalNumberView: {
    height: '80%',
  },
  fill: {
    flex: 1
  },
  topBox: {
    width: 100,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: 'red'
  },
  line1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'red'
  },
  operand: {
    borderWidth: 0.5,
    borderColor: 'red'
  },
  num1: {
    borderWidth: 0.5,
    borderColor: 'red'
  },
  num2: {
    borderWidth: 0.5,
    borderColor: 'red'
  }
});


export default PlayScreen;