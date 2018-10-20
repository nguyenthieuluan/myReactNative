import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import {getPlaces} from "../../action";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Summary extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {
      isSwitchOn: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      marker: {
        latitude: 37.78825,
        longitude: -122.4324,
      }
    }
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

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(r =>{
      this.setState({
        region: {
          latitude: r.coords.latitude,
          longitude: r.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        marker: {
          latitude: r.coords.latitude,
          longitude: r.coords.longitude,
        }
      })
    })
  };

  activeHandler = () => {
    this.setState({
        isSwitchOn: false
      })
  };

  offlineHandler = () => {
    this.setState({
      isSwitchOn: true
    })
  };

  render() {
    let active = null;
    let offline = null;
    if (this.state.isSwitchOn) {
      active = (<TouchableOpacity style={styles.active} onPress={this.activeHandler}>
        <Text>Active</Text>
      </TouchableOpacity>);
      offline = null;
    } else {
      offline = (<TouchableOpacity style={styles.offline} onPress={this.offlineHandler}>
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
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
          region={this.state.region}
        >
          <MapView.Marker coordinate={this.state.marker}/>
        </MapView>
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
  mapView: {
    margin: 5,
    borderWidth: 1,
    width: "100%",
    height: 400
  }

});