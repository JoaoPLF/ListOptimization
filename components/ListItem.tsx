import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";

export type Item = { id: string; grade: number };

export default function ListItem({ item, updateList }: { item: Item; updateList: any }) {
  return (
    <View style={styles.container}>
      <Text>{item.id}</Text>
      <Slider
        value={item.grade}
        onValueChange={(value) => updateList(item.id, value)}
        minimumValue={0}
        maximumValue={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
  },
})