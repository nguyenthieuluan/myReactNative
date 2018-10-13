import React, {Component} from 'react';
import {Button, Picker, StyleSheet, Text, TextInput, View} from "react-native";
import { connect } from 'react-redux';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import {addPlace, getPlaces} from "../../action";



class Spent extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.onLoadPlaces();
    this.categorys = ['Eat and Rink', 'Bill and Utilities', 'Move', 'Shopping', 'Friend and Lover', 'Entertainment', 'Travel', 'Health', 'Education', 'Other expenses'];
    this.state = {
      selected : "Select a account!"
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

  placeAddedHandler = (placeName, initialAccountBalance) => {
    this.props.navigator.pop();
    this.props.onAddPlace(placeName, initialAccountBalance);
  };

  renderAccount() {
    const items = [];
    for (let item of this.props.places) {
      items.push(<Picker.item key={item.key} label={item.name} value={item.name}/>)
    }
    return items;
  }

  renderCategory() {
   const items = [];
   for (let item of this.categorys) {
     items.push(<Picker.item key={item} label={item} value={item}/>)
    }
   return items;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uiBlock}>
        <Text title="Account">Account</Text>
        <Picker
          selectedValue={this.state.selected}
        //  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
        >
          {this.renderAccount()}
        </Picker>
        <Text title="Category">Category</Text>
        <Picker
          selectedValue={this.state.selected}
          //  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
        >
          {this.renderCategory()}
        </Picker>

        <TextInput style={styles.moneyInput} placeholder="Amount of money"/>
        <TextInput style={styles.moneyInput} placeholder="Note"/>

        <Button
          onPress={this.placeAddedHandler}
          title="Save"
          style={styles.buttonSave}
          //onPress={this.placeSubmitHandler}
        />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, initialAccountBalance) => dispatch(addPlace(placeName, initialAccountBalance)),
    onLoadPlaces: () => dispatch(getPlaces())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C5C0",
    width: "100%",
    height: "100%"
  },
  moneyInput: {
    paddingBottom: 10
  },
  buttonSave: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },
  uiBlock: {
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 5
  }
});