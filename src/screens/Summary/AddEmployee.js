import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { connect } from 'react-redux';

class AddEmployee extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };
  //get value
  nameChangeHandler = (val) => {
    this.setState({
      name: val
    })
  };
  emailChangeHandler = (val) => {
    this.setState({
      email: val
    })
  };
  passwordChangeHandler = (val) => {
    this.setState({
      password: val
    })
  };

  // add handler
  addEmployeeHandler = () => {
    //if (this.state.name === '' || this.state.email === '' || this.state.password === '') return;
    alert(this.state.name + this.state.email + this.state.password);
    //this.props.navigator.pop();
    //this.props.onAddPlace(placeName, initialAccountBalance, note)
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>

          <TextInput
            placeholder="Name"
            value={this.state.name}
            onChangeText={this.nameChangeHandler}
            style={styles.placeInput}
          />
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.emailChangeHandler}
            style={styles.placeInput}
          />
          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.passwordChangeHandler}
            style={styles.placeInput}
          />
          <TouchableOpacity onPress={this.addEmployeeHandler}
                            style={styles.placeButton}>
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {

    //onAddPlace: (placeName, initialAccountBalance, note) => dispatch(addPlace(placeName, initialAccountBalance, note))
  };
};

export default connect(null, mapDispatchToProps)(AddEmployee);

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "100%"
  },
  placeButton: {
    borderWidth: 3,
    borderColor: "#7f71ee",
    width: 120,
    borderRadius: 8,
    alignItems: "center",
  },
  textButton: {
    fontSize: 20,
    color: "#190dc9"
  }
});