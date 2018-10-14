import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class AccountInput extends Component {
  state = {
    placeName: "",
    initialAccountBalance: "",
    note: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  initialAccountBalanceChangedHandler = val => {
    this.setState({
      initialAccountBalance: val
    });
  };
  noteChangedHandler = val => {
    this.setState({
      note: val
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "" || this.state.initialAccountBalance.trim() === "") {
      alert('Please enter your account info.');
      return;
    }
    this.props.onPlaceAdded(this.state.placeName, this.state.initialAccountBalance, this.state.note);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <TextInput
          keyboardType = "phone-pad"
          placeholder="Initial account balance"
          value={this.state.initialAccountBalance}
          onChangeText={this.initialAccountBalanceChangedHandler}
          style={styles.placeInput}
        />
        <TextInput
          placeholder="Note"
          value={this.state.note}
          onChangeText={this.noteChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

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
    width: "100%"
  }
});

export default AccountInput;
