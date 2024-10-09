import ListItem, { Item } from "@/components/ListItem";
import { useOptimizedList } from "@/hooks/useOptimizedList";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { listIds, objectList, updateList } = useOptimizedList();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={listIds}
        renderItem={useCallback(({ item }: { item: number }) => <ListItem item={objectList[item]} updateList={updateList} />, [])}
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