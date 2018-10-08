import React, {Component} from "react";
import {View, Button, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';
import { deletePlace } from '../../action/index';

class placeDetail extends Component {
  onItemDeleted = () => {
      this.props.onDeletePlace(this.props.selectedPlace.key);
      this.props.navigator.pop();
  };
  onModalClosed = () => {
    alert('ahahaha')

  };
  render() {
    return (
      <View style={styles.modalContainer}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity  onPress={this.onItemDeleted}>
            <View style={styles.alignCenter}>
              <Icon  size={30} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
          {/*<Button title="Delete" color="red" onPress={props.onItemDeleted} />*/}
          <Button title="Close" onPress={this.onModalClosed} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  alignCenter: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
};

export default connect(null, mapDispatchToProps)(placeDetail);
