import React, { Component } from 'react'
import {FlatList, ListView, StyleSheet, View} from 'react-native'
import ListItem from './Item'

const employeeList = props => {
  return (
    <FlatList
    style={styles.listContainer}
    data={props.employees}
    renderItem={(info) => (
      <ListItem
        nameEmployee={info.item.name}
        statusEmployee={info.item.status}
        onItemPressed={() => props.onItemSelected(info.item.key)}
      />
    )}
    />
  )
};

export default employeeList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});