import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, StyleSheet, View } from 'react-native'
import ListItem from './layout/Item'

class EmployeeList extends Component {
  render() {
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
  }
}

// const mapStateToProps = (state) => {
//   const employees = state.places.places
// }
export default EmployeeList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});