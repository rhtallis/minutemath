import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../components/landing/homeScreen';
import SettingsScreen from '../components/settingsScreen';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

export default TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});