import React, { Component } from 'react';
import {Button, TextInput, Text, View, StyleSheet, ImageBackground} from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefauItInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';


class AuthScreen extends Component {
  state = {
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      },
    }
  };

  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value
          }
        }
      }
    })
  };

  loginHandler = () => {
    startMainTabs();
  };
  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Vui lòng đăng nhập</HeadingText>
          </MainText>
          <Button title="Đăng Nhập" onPress={this.loginHandler}/>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email của bạn" style={styles.input}
                          value = {this.state.controls.email.value}
                          onChangeText = {(val) => this.updateInputState('email',val)}
            />
            <DefaultInput placeholder="Mật khẩu" style={styles.input}
                          value = {this.state.controls.password.value}
                          onChangeText = {(val) => this.updateInputState('password', val)}
            />
            <DefaultInput placeholder="Xác nhận mật khẩu" style={styles.input}
                          value = {this.state.controls.confirmPassword.value}
                          onChangeText = {(val) => this.updateInputState('confirmPassword', val)}
            />
          </View>
          <Button title="Đăng Ký" onPress={this.loginHandler}/>
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});
export default AuthScreen;
