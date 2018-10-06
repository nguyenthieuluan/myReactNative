import React, {Component} from 'react';
import {Text, View} from "react-native";
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';


import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {addPlace} from "../../action";

class SharePlaceScreen extends Component{
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
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
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);