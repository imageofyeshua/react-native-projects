import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 10 },
    { name: "Friend #3", age: 28 },
    { name: "Friend #4", age: 90 },
    { name: "Friend #5", age: 11 },
    { name: "Friend #6", age: 19 },
    { name: "Friend #7", age: 8 },
    { name: "Friend #8", age: 100 },
    { name: "Friend #9", age: 120 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
