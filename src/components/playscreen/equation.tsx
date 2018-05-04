import React from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground } from 'react-native';
import { Label, Item, Input, Button, Icon } from 'native-base';

import eqHelper from './equation.helper';
import { operands } from '../../common/enums';
// import { Icon } from '@expo/vector-icons';


interface equationProps{
  num1: number;
  num2: number;
  operand: operands;
  userAnswer: string;
  setUserAnswer: (userAnswer: string) => void;
}
  
  interface equationState{
    screenHeight: number
}

class Equation extends React.Component<equationProps, equationState> {  
  public constructor(props: equationProps, context: object) {
    super(props, context);
  }
  
  public componentDidMount(){
    this.setState({
      screenHeight: Dimensions.get('window').height
    })
  }

  public componentDidUpdate(){
    this.windowSize = Dimensions.get('window');
    // console.log(this.windowSize.fontScale + ' ' +this.windowSize.height + ' ' + this.windowSize.scale + ' ' + this.windowSize.width);
  }
  
  private windowSize = Dimensions.get("screen");

  private getAdjustedFontSize = (size:number) => {
    console.log(this.windowSize.fontScale + ' ' +this.windowSize.height + ' ' + this.windowSize.scale + ' ' + this.windowSize.width);
    return size * this.windowSize.height * (1.8 - 0.002 * this.windowSize.height) / 400;
  }

  private displayOperand = () => {
    switch (this.props.operand) {
      case operands.subtract:
        return <Icon type='Ionicons' name='md-remove' style={styles.operandStyle}/>
      case operands.divide:
        return <Icon type='MaterialCommunityIcons' name='division' style={styles.operandStyle}/>
      case operands.multiply:
        return <Icon type='Ionicons' name='md-close' style={styles.operandStyle}/>
      default:
        return <Icon type='Ionicons' name='md-add' style={styles.operandStyle}/>
        // return <Icon type='FontAwesome' name='plus' style={{flex: 2, borderWidth: 0.5, borderColor: 'red'}}/>      
    }
  }

  public render(){
    const { operand, num1, num2, userAnswer } = this.props;
    return(
      <View style={styles.verticalNumberView}>
        <View style={{flex: .33}}>
          <View style={styles.line2}>
            <View style={{flex: 3, borderWidth: 0.5}}/>
            <View style={{flex: 4, alignContent: 'center', justifyContent: 'flex-end', borderWidth: 0.5}}>
              <Text          
                style={{
                  textAlign: 'center',
                  fontSize: this.getAdjustedFontSize(75)
                }}
              >{num1}</Text>
            </View>
            <View style={{flex: 3, borderWidth: 0.5}}/>
          </View>
        </View>
        
        <View style={{flex: .33}}>
          <View style={styles.line2}>
            <View style={{flex: 4.2, borderWidth: 0.5}}/>
              <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'green', borderWidth: 0.5}}>
                <this.displayOperand />
              </View>
              <View style={{flex: 4, alignContent: 'center', justifyContent: 'flex-end', borderWidth: 0.5}}>
                <Text 
                  style={{
                      textAlign: 'center',
                      fontSize: this.getAdjustedFontSize(75),
                    }}
                  >{num2}</Text>
              </View>
              <View style={{flex: 4.8, borderWidth: 0.5}}/>
            </View>
          </View>
        <View/>


        <View style={{flex: .33}}>
          <View style={styles.line2}>
            <View style={{flex: 3, borderWidth: 0.5}}/>
            <Item style={{flex: 4, borderWidth: 0.5}}>
              <Input 
                placeholder=''
                placeholderTextColor='grey'
                keyboardType='decimal-pad'
                onChangeText={(text) => this.props.setUserAnswer(text)}
                value={userAnswer}
                autoFocus={true}
                style={{textAlign: 'center', fontSize: this.getAdjustedFontSize(75)}}
              />
            </Item>
            <View style={{flex: 3, borderWidth: 0.5}}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  verticalNumberView: {
    height: '100%',
  },
  line2: {
    flexDirection: 'row',
    height: '100%'
  },
  operandStyle: {textAlign: 'center', fontSize: 50}
});

export default Equation;