import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './src/components/landing/homeScreen'
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from './src/components/settingsScreen';
import HighScores from './src/components/highScores';
import PlayScreen from './src/components/playscreen/playScreen';

let iconName: string = '';
let iconColor: string = '';


//Generate Tab Views
const Mainstack = TabNavigator({
  Home: { screen: HomeScreen },
  'High Scores': { screen: HighScores },
  Settings: { screen: SettingsScreen },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        iconName = `ios-play${focused ? '' : '-outline'}`;
        iconColor='green'
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
        iconColor = 'red';
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      // return <Ionicons name={iconName} size={25} color={tintColor} />;
      return <Ionicons name={iconName} size={32} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeBackgroundColor: '#42aaf4',
    showLabel: false,
    // inactiveTintColor: 'gray',
  //   style: {
  //     backgroundColor: 'blue',
  //  }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});

export default StackNavigator(
  {
    Home: {
      screen: Mainstack,
    },
    Play: {
      screen: PlayScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);