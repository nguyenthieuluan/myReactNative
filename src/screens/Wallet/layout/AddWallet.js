import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import { connect } from 'react-redux';

import {addPlace} from "../../../action";
import AccountInput from "../../../components/AccountInput/AccountInput";

class AddWallet extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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

  placeAddedHandler = (placeName, initialAccountBalance, note) => {
    this.props.navigator.pop();
    this.props.onAddPlace(placeName, initialAccountBalance, note)
  };
  render() {
    return (
      <View style={styles.container}>
        <AccountInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, initialAccountBalance, note) => dispatch(addPlace(placeName, initialAccountBalance, note))
  };
};

export default connect(null, mapDispatchToProps)(AddWallet);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C5C0",
    width: "100%",
    height: "100%"
  }
});