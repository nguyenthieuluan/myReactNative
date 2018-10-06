import React, { Component } from 'react';
import {Button, Text, View} from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler() {
    startMainTabs();
  }
  render() {
    return (
    <View>
      <Text>This is login</Text>
      <Button title="login" onPress={this.loginHandler}/>
    </View>
    )
  }
}
export default AuthScreen;