import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Switch} from "react-native";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {getPlaces} from "../../action";
import ToggleSwitch from 'toggle-switch-react-native'

class Summary extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {isSwitchOn: false}
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
    let active = null;
    let offline = null;
    if (this.state.isSwitchOn) {
      active = (<TouchableOpacity style={styles.active} onPress={() => this.setState({isSwitchOn: false})}>
        <Text>Active</Text>
      </TouchableOpacity>);
      offline = null;
    } else {
      offline = (<TouchableOpacity style={styles.offline} onPress={() => this.setState({isSwitchOn: true})}>
        <Text>Off</Text>
      </TouchableOpacity>);
      active = null;
    }


    return (
      <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.content}>
          {active}
          {offline}
        </View>
      </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.places.places
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPlaces: () => dispatch(getPlaces())
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

});