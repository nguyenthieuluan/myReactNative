import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: ['titri']
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };
  placeDeleteHandle = (index) => {
    this.setState(prevState => {
        return {
          places: prevState.places.filter((place, i) => {
            return i !== index
          })
        }
      }
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>aaaa</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList
          onItemDeleted={this.placeDeleteHandle}
          places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
