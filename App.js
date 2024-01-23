import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  StatusBar,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, { key: text }]);
  };

  const clearItems = () => {
    setData([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Add" onPress={addItem} />
        <Button title="Clear" onPress={clearItems} />
      </View>
      <View style={styles.list}>
        <Text style={styles.header}>Shopping List</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  fields: {
    alignItems: "center",
  },
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
  },
  buttons: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  header: {
    fontWeight: "bold",
    color: "blue",
  },
  list: {
    paddingTop: 10,
    alignItems: "center",
  },
});
