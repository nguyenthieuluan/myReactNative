import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View, StyleSheet} from "react-native";

import {connect} from 'react-redux';
import PlaceList from '../../components/WalletList/WalletList';
import {getPlaces} from "../../action";
import Icon from "react-native-vector-icons/Ionicons";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.onLoadPlaces();
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
  itemSelectedHandler = key => {
    const selPlace = this.props.accounts.find(place => {
      return place.key === key
    });
    this.props.navigator.push({
      screen: "awesome-places.WalletDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    })
  };
  // Add wallet handler
  onAddWalletHandler = () => {
    this.props.navigator.push({
      screen: "awesome-places.AddWallet",
      title: 'Add wallet',
      passProps: {

      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Total account: {this.props.accounts.length}</Text>
        <PlaceList places={this.props.accounts}
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
    accounts: state.places.places
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPlaces: () => dispatch(getPlaces())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C5C0",
    width: "100%",
    height: "100%"
  },
  textHeader: {
    fontSize: 15,
    textAlign: "center"
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
  }
});