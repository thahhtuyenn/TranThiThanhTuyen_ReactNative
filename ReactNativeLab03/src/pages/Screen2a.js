import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Screen2a = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 20,
          height: "100%",
        }}
      >
        <View style={{ flex: 3 }}>
          <View
            style={{
              padding: 50,
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{ fontFamily: "Roboto", fontSize: 35, fontWeight: "700" }}
            >
              LOGIN
            </Text>
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
                borderWidth: 1,
                borderColor: "#F2F2F2",
                backgroundColor: "#C4C4C44D",
                alignItems: "center",
                paddingLeft: 15,
                paddingRight: 25,
              }}
            >
              <Image source={require("../../assets/images/user.png")}></Image>
              <TextInput
                placeholder="Name"
                style={{ fontSize: 18, paddingLeft: 15 }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                height: 54,
                borderWidth: 1,
                borderColor: "#F2F2F2",
                backgroundColor: "#C4C4C44D",
                alignItems: "center",
                paddingLeft: 15,
                paddingRight: 25,
              }}
            >
              <View style={{ flexDirection: "row", flex: 3 }}>
                <Image source={require("../../assets/images/lock.png")}></Image>
                <TextInput
                  placeholder="Password"
                  style={{ fontSize: 18, paddingLeft: 15 }}
                ></TextInput>
              </View>
              <Image source={require("../../assets/images/eye.png")}></Image>
            </View>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#060000",
                width: "90%",
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
                LOGIN
              </Text>
            </Pressable>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Text
              style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: "700" }}
            >
              CREATE ACCOUNT
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen2a;
