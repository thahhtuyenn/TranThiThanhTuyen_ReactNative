import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";

const XMEyeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../assets/images/logo.png")}></Image>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            height: 54,
            borderBottomWidth: 1,
            borderColor: "#C4C4C4",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/images/userWhite.png")}></Image>
          <TextInput
            placeholder="Please input user name"
            style={{ fontSize: 18, paddingLeft: 15 }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            height: 54,
            borderBottomWidth: 1,
            borderColor: "#C4C4C4",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/images/lockWhite.png")}></Image>
          <TextInput
            placeholder="Please input password"
            style={{ fontSize: 18, paddingLeft: 15 }}
          ></TextInput>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#386FFC",
              width: "90%",
              height: 54,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
              LOGIN
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{ fontFamily: "Roboto", fontSize: 18, fontWeight: "400" }}
          >
            Register
          </Text>
          <Text
            style={{ fontFamily: "Roboto", fontSize: 18, fontWeight: "400" }}
          >
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{ fontFamily: "Roboto", fontSize: 18, fontWeight: "400" }}
          >
            Other Login Methods
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Image source={require("../../assets/images/addUser.png")}></Image>
          <Image source={require("../../assets/images/wifi.png")}></Image>
          <View
            style={{
              width: 74,
              height: 74,
              backgroundColor: "#3A579C",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/images/fBig.png")}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default XMEyeScreen;
