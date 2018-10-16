import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar, TouchableOpacity} from "react-native";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

class Summary extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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
    alert(this.props.account.length);
    //Get total income expense
    let expenseList = [];
    let incomeList = [];
    // for (const [key, value] of Object.entries(this.props.account)) {
    //   for(const [key1, value1] of Object.entries(value)) {
    //     if(key1 === 'expense' && value1 !== null) {
    //       let valueTemp = [];
    //       if (typeof value1 === 'object') {
    //         valueTemp = value1;
    //       }
    //       for(const [key2, value2] of Object.entries(valueTemp)) {
    //         expenseList.push({
    //           key: key2,
    //           category: value2.category,
    //           note: value2.note,
    //           expenseAmount: value2.expenseAmount,
    //           date: value2.date
    //         })
    //       }
    //     }
    //     if(key1 === 'income' && value1 !== null) {
    //       let valueTemp = [];
    //       if (typeof value1 === 'object') {
    //         valueTemp = value1;
    //       }
    //       for(const [key3, value3] of Object.entries(valueTemp)) {
    //         incomeList.push({
    //           key: key3,
    //           category: value3.category,
    //           note: value3.note,
    //           incomeAmount: value3.incomeAmount,
    //           date: value3.date
    //         })
    //       }
    //     }
    //   }
    // }
    return (
      <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.content}>
          <View style={styles.uiBlock}>
            <MainText>
              <HeadingText style={styles.headingText}>Current Balance</HeadingText>
            </MainText>
          </View>
          <View style={styles.uiBlock}>
            <MainText>
              <HeadingText style={styles.headingText}>Overview</HeadingText>
            </MainText>
          </View>
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
export default connect(mapStateToProps, null)(Summary);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C5C0",
    width: "100%",
    height: "100%"
  },
  content: {
    flex: 1,

  },
  headingText: {
    color: "black",
  },
  uiBlock: {
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 5
  },
  uiBlockContent: {
    backgroundColor: "white",
    margin: 4,
    padding: 10
  },
  timeHeader: {
    fontSize: 15
  },
  iconText: {
    marginTop: 8
  }
});