import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import {getPlaces, setCoordinate} from "../../action";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Summary extends Component{
  constructor(props) {
    super(props);
    this.props.onLoadPlaces();
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {
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
    }, error => console.log(error),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000});
  };

  componentDidMount() {
    const { coordinate } = this.state;
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          marker: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        })
      }, error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000});

  }
  

  activeHandler = () => {
    this.setState({
        isSwitchOn: false
      })
  };

  offlineHandler = () => {
    this.setState({
      isSwitchOn: true
    });
    this.props.setCoordinate(this.state.region.latitude, this.state.region.longitude, this.state.region.latitudeDelta, this.state.region.longitudeDelta);
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
        <Text style={styles.textWelcome}>Hi {this.props.user.userName} !</Text>
        <Text style={styles.textWelcome}> Your boss: {this.props.user.admin} </Text>
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
    account: state.places.places,
    user: state.places.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPlaces: () => dispatch(getPlaces()),
    setCoordinate: (latitude, longitude, latitudeDelta, longitudeDelta) =>
     dispatch(setCoordinate(latitude, longitude, latitudeDelta, longitudeDelta))
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