import React, { Component } from 'react';
import {Button, TextInput, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Alert} from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefauItInput';
import backgroundImage from '../../assets/background.jpg';
import {firebaseApp} from "../../config/FirebaseConfig";
import {getPlaces, getUser, loginUser} from "../../action";
import { connect } from 'react-redux';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadPlaces();
    this.state = {
      email: "",
      password: "",
    }
  }
  loadUser () {
    //alert(JSON.stringify(this.props.account))
  };
  loginHandler = () => {
    if (this.state.email === "" || this.state.password === "")
      return false;
    this.props.loginUser(this.state.email, this.state.password)
    //alert(this.state.email + this.state.password)
  };

  render() {

    return (
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.container}>
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
          </View>
          <TouchableOpacity style={styles.loginOpacity} onPress={this.loginHandler}>
            <View>
              <Text style={styles.loginButton}>Login</Text>
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
    alignItems: "center",
    backgroundColor: "gray",
    opacity: 0.7
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "white",
    borderColor: "transparent",
    opacity: 1
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
const mapStateToProps = state => {
  return {
    account: state.places.places,
    user: state.places.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPlaces: () => dispatch(getPlaces()),
    getUser: (user) => dispatch(getUser(user)),
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
