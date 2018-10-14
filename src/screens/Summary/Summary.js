import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar, TouchableOpacity} from "react-native";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from "./layout/Item";
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
    const currentBalance = this.props.account.reduce(function(prev, cur) {
      return prev + cur.initialAccountBalance;
    }, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const chart_wh = 150;
    const series = [123, 321];
    const sliceColor = ['#F44336','#2196F3'];
    const time = new Date();
    return (
      <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.content}>
          <View style={styles.uiBlock}>
            <MainText>
              <HeadingText style={styles.headingText}>Current Balance</HeadingText>
            </MainText>
            <Text>{currentBalance} VNĐ</Text>
          </View>
          <View style={styles.uiBlock}>
            <MainText>
              <HeadingText style={styles.headingText}>Overview</HeadingText>
            </MainText>
          </View>
          <View style={styles.uiBlockContent}>
            <PieChart style={styles.content}
                      chart_wh={chart_wh}
                      series={series}
                      sliceColor={sliceColor}
                      doughnut={true}
                      coverRadius={0.45}
                      coverFill={'#FFF'}
            />
            <Icon style={{color: "#F44336"}} size={15} name="md-square">
              <Text> Income</Text>
            </Icon>
            <Icon style={{color: '#2196F3'}} size={15} name="md-square">
              <Text> Expense</Text>
            </Icon>
          </View>
          <View style={styles.uiBlockContent}>
            <Text style={styles.timeHeader}>{time.toDateString()}</Text>
            <Item/>
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
    margin: 5,
    padding: 10
  },
  timeHeader: {
    fontSize: 15
  }
});