import React, {Component} from 'react';
import {Button, Picker, StyleSheet, Text, TextInput, View} from "react-native";
import { connect } from 'react-redux';
import {addPlace, getPlaces} from "../../action";
import ExpenseInput from "../../components/ExpenseInput/ExpenseInput";



class Spent extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.onLoadPlaces();
    this.categorys = ['Eat and Rink', 'Bill and Utilities', 'Move', 'Shopping', 'Friend and Lover', 'Entertainment', 'Travel', 'Health', 'Education', 'Other expenses'];
    this.state = {
      account: "",
      category: "",
      selected : "Select a account!",
      expense: "",
      note: ""
    }
  }
  // Navigator
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };



  render() {
    return (
      <View style={styles.container}>
        <ExpenseInput />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //onAddExpense: (account, category, expense, note) => dispatch(addPlace(placeName, initialAccountBalance)),
    onLoadPlaces: () => dispatch(getPlaces())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C5C0",
    width: "100%",
    height: "100%"
  }
});