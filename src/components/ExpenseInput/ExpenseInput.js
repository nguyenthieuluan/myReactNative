import React, { Component } from "react";
import {View, TextInput, Button, StyleSheet, Picker, Text} from "react-native";
import {addExpense, getPlaces} from "../../action";
import { connect } from 'react-redux';

class ExpenseInput extends Component {
constructor(props) {
  super(props);
  this.props.onLoadPlaces();
  this.categorys = ['Eat and Rink', 'Bill and Utilities', 'Move', 'Shopping', 'Friend and Lover', 'Entertainment', 'Travel', 'Health', 'Education', 'Other expenses'];
  this.state = {
    selectedValueKey : "",
    selectedCategory: "",
    expense: "",
    note: ""
  }
}
  expenseAddHandler = () => {
    //if (this.state.account.trim() === "" || this.state.category.trim() === "" || this.state.expense.trim() === "" || this.state.note.trim() === "") {
    if (this.state.expense.trim() === "" || this.state.note.trim() === "") {
      alert('Please enter your account info.');
      return;
    }
    this.props.onAddExpense(this.state.selectedValueKey,this.state.selectedCategory ,this.state.expense, this.state.note);
    //alert(this.state.selectedCategory)
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  expenseChangeHandler = val => {
    this.setState({
      expense: val
    });
  };
  noteChangeHandler = val => {
    this.setState({
      note: val
    });
  };

  // Submit Handler

  renderAccount() {
    const items = [];
    for (let item of this.props.places) {
      items.push((<Picker.Item key={item.key} label={item.name} value={item.key}/>))
    }
    return items;
  }

  renderCategory() {
    const items = [];
    for (let item of this.categorys) {
      items.push(<Picker.Item key={item} label={item} value={item}/>)
    }
    return items;
  }

  itemValueChangeHandler = val => {
    this.setState({
      selectedValueKey: val
    })
  };
  itemValueCategoryChangeHandler = val => {
    this.setState({
      selectedCategory: val
    })
  };
  render() {
    return (
      <View style={styles.uiBlock}>
        <Text title="Account">Account</Text>
        <Picker
          selectedValue={this.state.selectedValueKey}
          onValueChange={this.itemValueChangeHandler}
        >
          {this.renderAccount()}
        </Picker>
        <Text title="Category">Category</Text>
        <Picker
          selectedValue={this.state.selectedCategory}
          onValueChange={this.itemValueCategoryChangeHandler}
        >
          {this.renderCategory()}
        </Picker>

        <TextInput style={styles.moneyInput}
                   keyboardType = "phone-pad"
                   onChangeText={this.expenseChangeHandler}
                   value={this.state.expense}
                   placeholder="Amount of money"/>
        <TextInput style={styles.moneyInput}
                   onChangeText={this.noteChangeHandler}
                   value={this.state.note}
                   placeholder="Note"/>
        <Button
          onPress={this.expenseAddHandler}
          title="Save"
          style={styles.buttonSave}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddExpense: (key, category, expenseAmount, note) => dispatch(addExpense(key, category, expenseAmount, note)),
    onLoadPlaces: () => dispatch(getPlaces())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseInput);
