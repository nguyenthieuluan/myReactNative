import React, {Component} from 'react';
import {Text, View} from "react-native";
import { connect } from 'react-redux';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import {addPlace} from "../../action";



class Spent extends Component{
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

  placeAddedHandler = (placeName, initialAccountBalance) => {
    // this.props.navigator.pop();
    // this.props.onAddPlace(placeName, initialAccountBalance);
  };
  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, initialAccountBalance) => dispatch(addPlace(placeName, initialAccountBalance))
  };
};

export default connect(null, mapDispatchToProps)(Spent);