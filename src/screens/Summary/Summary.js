import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import {getEmployees, getAdmin} from "../../action";
import EmployeeList from './layout/EmployeeList';
import Icon from "react-native-vector-icons/Ionicons";
//import { Observable } from 'rxjs/Observable';

class Summary extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.onLoadEmployee();
    this.props.getAdmin();
    this.state = {
      //selEmployee: Observable.selectedEmployee
    }
  };
  // side drawer
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  // item selected Handler
  itemSelectedHandler = key => {
    let selEmployee = this.props.employees.find( x => {
      return x.key === key
    })
    this.props.navigator.push({
      screen: "awesome-places.EmployeeDetail",
      title: selEmployee.name,
      passProps: {
        selectedEmployee: selEmployee
      }
    })
  };

  // Add Employee handler
  onAddWalletHandler = () => {
    this.props.navigator.push({
      screen: "awesome-places.AddEmployee",
      title: 'Add Employee',
      passProps: {}
    })
  };

  // Component Didmount
  componentDidMount() {
    
  }

  // render
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTotal}>Total Employees: {this.props.employeeCount} </Text>
         <EmployeeList
           employees = {this.props.employees}
           onItemSelected={this.itemSelectedHandler}
        />
        <TouchableOpacity style={styles.addButton} onPress={this.onAddWalletHandler}>
          <Icon name="ios-add" style={styles.addButtonIcon} size={30} color="#01a699" />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user, // user login
    account: state.places.places,
    employees: state.employees.employees,
    employeeCount: state.places.admin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadEmployee: () => dispatch(getEmployees()),
    getAdmin: () => dispatch(getAdmin())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Summary);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C5C0",
    width: "100%",
    height: "100%"
  },
  addButtonIcon: {
    color: "white"
  },
  addButton: {
    alignItems:'center',
    justifyContent:'center',
    width: 40,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 40,
    backgroundColor:'#F75E5E',
    borderRadius:100,
  }, 
  textTotal: {
    backgroundColor: "white",
    fontSize: 30,
    margin: 5,
    marginBottom: 5,
    padding: 5
  }
});