import React, {Component} from "react";
import {View, Button, StyleSheet, TouchableOpacity, Image, Text, TextInput} from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';
import { deletePlace } from '../../action/index';

class EmployeeDetail extends Component {
  onItemDeleted = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    //alert(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };
  nameChangedHandler = val => {
    this.setState({
      name: val
    });
  };
  passwordChangedHandler = val => {
    this.setState({
      password: val
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uiBlock}>
          <Text>{this.props.selectedEmployee.email}</Text>
          <TextInput placeholder='Name'
                     placeholderTextColor={'#d3d3d3'}
                     autoCorrect={false}
                     value={this.props.selectedEmployee.name}
                     onChangeText={this.nameChangedHandler}/>
          <TextInput placeholder='Password'
                     placeholderTextColor={'#d3d3d3'}
                     autoCorrect={false}
                     value={this.props.selectedEmployee.password}
                     onChangeText={this.passwordChangedHandler}/>
          <View style={styles.buttonHandler}>
            <TouchableOpacity onPress={this.addEmployeeHandler}
                              style={styles.placeButton}>
              <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.addEmployeeHandler}
                              style={styles.placeButton}>
              <Text style={styles.textButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
};

export default connect(null, mapDispatchToProps)(EmployeeDetail);


const styles = StyleSheet.create({
  modalContainer: {

  },
  textHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonHandler: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    //textAlign: "center",
    fontSize: 20
  },
  textNote: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15
  },
  alignCenter: {
    alignItems: "center"
  },
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
  },
  buttonDelete: {
    alignItems:'center',
    justifyContent:'center',
    width: 40,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 40,
    backgroundColor:'#E5DEDE',
    borderRadius:100,
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