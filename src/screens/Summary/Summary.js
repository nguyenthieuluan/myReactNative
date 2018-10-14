import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar, TouchableOpacity} from "react-native";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from "./layout/Item";
import { connect } from 'react-redux';
import ExpenseIncomeList from "../../components/ExpenseIncomeList/ExpenseIncomeList";

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
    //Get total balance
    const currentBalance = this.props.account.reduce(function(prev, cur) {
      return prev + cur.initialAccountBalance;
    }, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //Get total income expense
    let expenseList = [];
    let incomeList = [];
    for (const [key, value] of Object.entries(this.props.account)) {
      for(const [key1, value1] of Object.entries(value)) {
        if(key1 === 'expense' && value1 !== null) {
          let valueTemp = [];
          if (typeof value1 === 'object') {
            valueTemp = value1;
          }
          for(const [key2, value2] of Object.entries(valueTemp)) {
            expenseList.push({
              key: key2,
              category: value2.category,
              note: value2.note,
              expenseAmount: value2.expenseAmount,
              date: value2.date
            })
          }
        }
        if(key1 === 'income' && value1 !== null) {
          let valueTemp = [];
          if (typeof value1 === 'object') {
            valueTemp = value1;
          }
          for(const [key3, value3] of Object.entries(valueTemp)) {
            incomeList.push({
              key: key3,
              category: value3.category,
              note: value3.note,
              incomeAmount: value3.incomeAmount,
              date: value3.date
            })
          }
        }
      }
    }
    expenseList = expenseList.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });

    let totalIncome = 0;
    let totalExpense = 0;
    if(expenseList.length > 0) {
      totalExpense = expenseList.reduce(function(prev, cur) {
        return prev + Number(cur.expenseAmount);
      }, 0);
    }
    if(incomeList.length > 0) {
      totalIncome = incomeList.reduce(function(prev, cur) {
        return prev + Number(cur.incomeAmount);
      }, 0);
    }


    // Chart
    const chart_wh = 150;
    let redExpense = 1;
    let blueIncome = 1;
    if(totalIncome > 0 && totalExpense > 0) {
      redExpense = totalExpense;
      blueIncome = totalIncome;
    }
    const series = [redExpense, blueIncome];
    const sliceColor = ['#2196F3','#F44336'];
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
            <View style={styles.iconText}>
              <Icon style={{color: "#F44336"}} size={15} name="md-square">
                <Text> Income: {totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</Text>
              </Icon>
              <Icon style={{color: '#2196F3'}} size={15} name="md-square">
                <Text> Expense: {totalExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</Text>
              </Icon>
            </View>
          </View>
          <View style={styles.uiBlockContent}>
            {/*<Text style={styles.timeHeader}>{time.toDateString()}</Text>*/}
            <ScrollView>
              <ExpenseIncomeList expense = {expenseList}
                                 onItemSelected={()=>{}}/>
            </ScrollView>
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