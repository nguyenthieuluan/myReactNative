import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import {getPlaces, setCoordinate, changeStatus} from "../../action";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import EmployeeList from './EmployeeList';

class Summary extends Component{
  constructor(props) {
    super(props);
  };

  componentWillMount() {
  };

  componentDidMount() {
  }
  itemSelectedHandler() {
    alert('selected')
  }
  render() {
    return (
      <View>
        <Text>Hi {this.props.user.email}!</Text>
        <Text>This is your employees</Text>
        <EmployeeList
          employees = {this.props.employees}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.places.places,
    user: state.auth.user,
    employees: state.places.employees
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPlaces: () => dispatch(getPlaces()),
    setCoordinate: (latitude, longitude, latitudeDelta, longitudeDelta, adminKey, userKey) =>
     dispatch(setCoordinate(latitude, longitude, latitudeDelta, longitudeDelta, adminKey, userKey)),
    changeStatus: (status , adminKey, userKey) => dispatch(changeStatus(status , adminKey, userKey)),
    onLoadEmployee 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Summary);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%"
  },
  content: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 200,
    height: 50,
    backgroundColor: "blue"
  },
  offline:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 200,
    height: 50,
    backgroundColor: "grey"
  },
  mapView: {
    margin: 5,
    borderWidth: 1,
    width: "100%",
    height: 400
  },
  textWelcome: {
    textAlign: "center",
    fontSize: 20
  }
});