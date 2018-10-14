import React, {Component} from 'react';
import {Button, Picker, StyleSheet, Text, TextInput, View} from "react-native";
import {addPlace, getPlaces} from "../../action";
import { connect } from 'react-redux';
import IncomeInput from "../../components/IcomeInput/IncomeInput";

class Income extends Component{
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

  render() {
    return (
      <View style={styles.container}>
        <IncomeInput/>
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
    onAddPlace: (placeName, initialAccountBalance) => dispatch(addPlace(placeName, initialAccountBalance)),
    onLoadPlaces: () => dispatch(getPlaces())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Income);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C5C0",
    width: "100%",
    height: "100%"
  },
  uiBlock: {
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 5
  }
});