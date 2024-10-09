import ListItem, { Item } from "@/components/ListItem";
import { useUnoptimizedList } from "@/hooks/useUnoptimizedList";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { list, updateList } = useUnoptimizedList();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={list}
        renderItem={useCallback(({ item }: { item: Item }) => <ListItem item={item} updateList={updateList} />, [])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  }
})