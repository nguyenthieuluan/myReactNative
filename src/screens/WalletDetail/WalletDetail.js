import React, {Component} from "react";
import {View, Button, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';
import { deletePlace } from '../../action/index';
import ExspenseIncomeList from '../../components/ExpenseIncomeList/ExpenseIncomeList';

class walletDetail extends Component {
  onItemDeleted = () => {
      this.props.onDeletePlace(this.props.selectedPlace.key);
    //alert(this.props.selectedPlace.key);
      this.props.navigator.pop();
  };
  onModalClosed = () => {
    alert('ahahaha')

  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uiBlock}>
          {/*<Image source={this.props.selectedPlace.image} style={styles.placeImage} />*/}
          <View style={styles.textHeader}>
            <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
            <Text style={styles.placeName}>{this.props.selectedPlace.initialAccountBalance}</Text>
          </View>
          <Text style={styles.textNote}>Note: {this.props.selectedPlace.note}</Text>

        </View>
        <TouchableOpacity style={styles.buttonDelete } onPress={this.onItemDeleted}>
          <View style={styles.alignCenter}>
            <Icon  size={30} name="ios-trash" color="#F23939"/>
          </View>
        </TouchableOpacity>
        <ExspenseIncomeList/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {

  },
  textHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
};

export default connect(null, mapDispatchToProps)(walletDetail);
