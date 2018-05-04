import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { TabNavigator } from 'react-navigation';
var RadioButtons = require('react-native-radio-buttons');


interface HomeScreenProps {
  navigation: any
}

interface HomeScreenState {
  selectedOption1: string;  
  selectedOption2: string;  
  selectedOption3: string;  
  selectedOption4: string;  
}

class LogoTitle extends React.Component {
  render() {
    return (
      <Text>Home</Text>
    );
  }
}

export default class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  static navigationOptions = ({ navigation }:any ) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
    };
  };
  public constructor(props: HomeScreenProps, context: object) {
    super(props, context);

    this.state = {
      selectedOption1:'',
      selectedOption2:'',
      selectedOption3:'',
      selectedOption4:''
    };

    this._setSelectedOption1 = this._setSelectedOption1.bind(this);
    this._setSelectedOption2 = this._setSelectedOption2.bind(this);
    this._setSelectedOption3 = this._setSelectedOption3.bind(this);
    this._setSelectedOption4 = this._setSelectedOption4.bind(this);
  }
  
  _setSelectedOption1 = (selectedOption:any) =>{
    this.setState({
      selectedOption1: selectedOption
    });
  }
  _setSelectedOption2 = (selectedOption:any) =>{
    this.setState({
      selectedOption2: selectedOption
    });
  }
  _setSelectedOption3 = (selectedOption:any) =>{
    this.setState({
      selectedOption3: selectedOption
    });
  }
  _setSelectedOption4 = (selectedOption:any) =>{
    this.setState({
      selectedOption4: selectedOption
    });
  }

  render() {
    const options = [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ];
   
    function renderOption(option:any, selected:any, onSelect:any, index:any){
      const style = selected ? { fontWeight: 'bold' } : {};
      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }
   
    function renderContainer(optionNodes:any){
      return <View>{optionNodes}</View>;
    }
   
    return (
      <View style={{margin: 20}}>
        <RadioButtons.SegmentedControls
          options={ options }
          onSelection={ this._setSelectedOption1.bind(this) }
          selectedOption={ this.state.selectedOption1 }
        />
        <Text>Selected option: {this.state.selectedOption1 || 'none'}</Text>
        
        <RadioButtons.SegmentedControls
          options={ options }
          onSelection={ this._setSelectedOption2.bind(this) }
          selectedOption={ this.state.selectedOption2 }
        />
        <Text>Selected option: {this.state.selectedOption2 || 'none'}</Text>
        
        <RadioButtons.SegmentedControls
          options={ options }
          onSelection={ this._setSelectedOption3.bind(this) }
          selectedOption={ this.state.selectedOption3 }
        />
        <Text>Selected option: {this.state.selectedOption3 || 'none'}</Text>
        
        <RadioButtons.SegmentedControls
          options={ options }
          onSelection={ this._setSelectedOption4.bind(this) }
          selectedOption={ this.state.selectedOption4 }
        />
        <Text>Selected option: {this.state.selectedOption4 || 'none'}</Text>
        
        <Button
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Play', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        >
          <Text>Go to Details</Text>
        </Button>
      </View>);
  }
}