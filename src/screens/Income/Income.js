import React, {Component} from 'react';
import {Button, Picker, StyleSheet, Text, TextInput, View} from "react-native";
import {addPlace, getPlaces} from "../../action";
import { connect } from 'react-redux';

class Income extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.onLoadPlaces();
    this.categorys = ['Bonus', 'Interest', 'Salary', 'Borrow money', 'Awarded', 'Sell things', 'Other revenues'];
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
  renderAccount() {
    const items = [];
    for (let item of this.props.places) {
      items.push(<Picker.Item key={item.key} label={item.name} value={item.name}/>)
    }
    return items;
  }

  renderCategory() {
    const items = [];
    for (let item of this.categorys) {
      items.push((<Picker.Item key={item} label={item.toString()} value={item}/>))
    }
    return items;
  }
  placeAddedHandler = (placeName, initialAccountBalance) => {
    // this.props.navigator.pop();
    // this.props.onAddPlace(placeName, initialAccountBalance);
  };
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
          style={styles.placeButton}
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

export default connect(mapStateToProps, mapDispatchToProps)(Income);

const styles = StyleSheet.create({
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
  }
});