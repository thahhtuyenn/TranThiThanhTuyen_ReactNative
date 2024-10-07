import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { ListTodoScreen } from "./ListTodoScreen";
import { useState, useEffect } from "react";

const handleGetStarted = (navigation, email) => {
    console.log(email);
    if(email === "thanhtuyen9623@gmail.com")
    {
      navigation.navigate(ListTodoScreen);
    }
    else
    {
     Alert.alert("Invalid Email", "Please enter the correct email.");
    }
  }

export const StartScreen = ({ navigation }) => {

  [email, setEmail] = useState("thanhtuyen9623@gmail.com"); 


  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <View style={styles.imageText}>
          <Image source={require("../../assets/img/image-page.png")} />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>MANAGER YOUR {"\n"} TASK </Text>
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <View style={styles.containerInput}>
          <View style={styles.input}>
            <Image
              source={require("../../assets/img/icon-mail.png")}
              style={{ marginHorizontal: 10 }}
            />
            <TextInput
              placeholder="Enter your email"
              style={{ width: "80%", height: 45 }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        <View style={styles.containerButton}>
          <Pressable style={styles.button} onPress={() => {handleGetStarted(navigation, email)}}>
            <Text style={styles.text}>GET STARTED</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container3: {
    flex: 3,
  },
  imageText: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#8353E2",
  },
  containerInput: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    width: "80%",
    borderWidth: 1,
    borderColor: "#9095A0",
    borderRadius: 12,
    color: "#00000000",
  },
  containerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60%",
    height: 45,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
