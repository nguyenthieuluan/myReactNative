import React, {Component} from "react";
import {View, StyleSheet, TouchableOpacity, Text, TextInput, Dimensions, TouchableHighlight} from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';
import { deletePlace } from '../../action/index';
import MapView from 'react-native-maps';

class EmployeeDetail extends Component {
  state = {
    isSwitchOn: false,
    region: {
      latitude: 10.787927,
      longitude: 106.6136637,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    marker: {
      latitude: 10.787927,
      longitude: 106.6136637,
    }
  };

  //get value
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

// handler
  saveEmployeeHandler = () => {
    alert(JSON.stringify(this.props.selectedEmployee.coordinate.latitude))
//    this.props.navigator.pop();
  };
  deleteEmployeeHandler = () => {
    //this.props.onDeletePlace(this.props.selectedEmployee.key);
    alert(this.props.selectedEmployee.key);
    //this.props.navigator.pop();
  };

  // did mount
  componentDidMount() {
    
    const { coordinate } = JSON.stringify(this.props.selectedEmployee.coordinate);
    const latitude = this.props.selectedEmployee.coordinate.latitude;
    const longitude = this.props.selectedEmployee.coordinate.longitude;
    
    //alert(latitude)
    //const latitude = this.props.selectedEmployee.coordinate.latitude;
    //alert( coordinate )
    //alert( JSON.stringify(coordinate));
    //alert( JSON.stringify(this.props.selectedEmployee.coordinate));
    
    if (coordinate.longitude === '' || coordinate.longitude === '') return;
    this.setState({
      region: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      marker: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      }
    })
  }

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
            <TouchableOpacity onPress={this.saveEmployeeHandler}
                              style={styles.placeButton}>
              <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.deleteEmployeeHandler}
                              style={styles.placeButton}>
              <Text style={styles.textButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>

        <MapView style={styles.mapView}
                 region={this.state.region}
        >
          <MapView.Marker coordinate={this.state.marker}/>
        </MapView>


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
    borderWidth: 1,
    borderColor: "#7f71ee",
    width: 120,
    borderRadius: 8,
    alignItems: "center",
  },
  textButton: {
    fontSize: 20,
    color: "#190dc9"
  },
  mapView: {
    width: "100%",
    height: 500
  }
});