import React, { Component } from 'react';
import {Button, TextInput, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Alert} from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefauItInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import {firebaseApp} from "../../config/FirebaseConfig";

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      viewMode: 'login'
    }
  }
  loginHandler = () => {

    if (this.state.viewMode === 'register') {
      this.setState({
        viewMode: 'login',
        password: ""
      });
      return false;
    }
    //startMainTabs();
    if (this.state.email === "" || this.state.password === "")
      return false;

    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        //alert(this.state.password)
        startMainTabs();
        //alert('ngon');
      })
      .catch(function (error) {
        Alert.alert(error.toString());
      });
  };
  registerHandler = () => {
    if (this.state.viewMode === 'login') {
      this.setState({
        viewMode: 'register',
        password: ""
      });
      return false;
    }
    if (this.state.password !== this.state.confirmPassword) {
      alert('Password not match!');
      return false;
    }
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        alert('Successfully registered');
        this.setState({
          email: '',
          password: '',
          viewMode: 'login'
        })
      })
      .catch(function (error) {
        alert(error.toString())
      })
  };
  render() {
    let confirmPassword = null;
    if(this.state.viewMode === 'register') {
      confirmPassword = (<DefaultInput placeholder="ConfirmPassword" style={styles.input}
                                       value = {this.state.password.value}
                                       secureTextEntry={true}
                                       onChangeText = {(val) => this.setState({'confirmPassword': val})}
      />);
    }
    if(this.state.viewMode === 'login') {
      confirmPassword = null
    }
    return (
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.container}>
          {/*<MainText>
             <HeadingText>Vui lòng đăng nhập</HeadingText>
          </MainText>
          <Button title="Đăng Nhập" onPress={this.loginHandler}/>*/}
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email" style={styles.input}
                          value = {this.state.email.value}
                          onChangeText = {(val) => this.setState({'email': val})}
            />
            <DefaultInput placeholder="Password" style={styles.input}
                          value = {this.state.password.value}
                          secureTextEntry={true}
                          onChangeText = {(val) => this.setState({'password': val})}
            />
            {confirmPassword}
          </View>
          <TouchableOpacity style={styles.loginOpacity} onPress={this.loginHandler}>
            <View>
              <Text style={styles.loginButton}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerOpacity} title="Register" onPress={this.registerHandler}>
            <View>
              <Text style={styles.loginButton}>Register</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  loginButton: {
  	fontSize: 20,
    color: "black",
  },
  loginOpacity: {
    borderWidth: 1,
    borderColor: "#eee",
    width: 100,
    borderRadius: 5,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "red",
    width: 200
  },
  registerOpacity: {
    marginTop: 10,
  }
});
export default AuthScreen;
