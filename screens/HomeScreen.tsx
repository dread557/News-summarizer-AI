import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const [question, setQuestion] = useState("");
  const handleChange = (value: string) => {
    setQuestion(value);
  };
  const handleSubmit = () => {};
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="menu-unfold" size={24} color="black" />
          <Text>New Chat</Text>
          <AntDesign name="plus" size={24} color="black" />
        </View>
        <ScrollView>
          <Text>{question}</Text>
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={handleChange}
          />
          <Pressable style={styles.button} onPress={() => handleSubmit}>
            <Feather name="send" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    width: Dimensions.get("window").width,
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    position: "relative",
    height: 50,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "grey",
    position: "absolute",
    bottom: 10,
    margin: 10,
    right: 10,
    left: 10,
    padding: 10,
  },
  button: {
    position: "absolute",
    right: 25,
  },
});
