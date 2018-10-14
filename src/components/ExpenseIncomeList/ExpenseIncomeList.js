import React from "react";
import {StyleSheet, FlatList, View, Text} from "react-native";

import ExpenseIncomeItem from "./ExpenseIncomeItem/ExpenseIncomeItem";

const expenseIncomeList = props => {
  return (
    <View>
      <FlatList
        style={styles.listContainer}
        data={props.expense}
        renderItem={(info) => (
          <ExpenseIncomeItem
            category={info.item.category}
            note={info.item.note}
            expenseAmount={info.item.expenseAmount}
            date={info.item.date}
            onItemPressed={() => props.onItemSelected(info.item.key)}
          />
        )}
      />
    </View>
  );
};

export default expenseIncomeList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
