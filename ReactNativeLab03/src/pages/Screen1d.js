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

const Screen1d = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{ fontFamily: "Roboto", fontSize: 30, fontWeight: "700" }}
          >
            LOGIN
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TextInput
            placeholder="Email"
            style={{
              backgroundColor: "#C4C4C44D",
              width: "90%",
              height: 54,
              paddingLeft: 20,
              fontSize: 18,
            }}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#C4C4C44D",
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TextInput
              placeholder="Password"
              style={{
                width: "80%",
                height: 54,
                fontSize: 18,
              }}
            />
            <Image source={require("../../assets/images/eye.png")}></Image>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1.5,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#E53935",
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
        <View
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "400" }}
          >
            When you agree to terms and conditions
          </Text>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 16,
              fontWeight: 400,
              color: "#5D25FA",
            }}
          >
            For got your password?
          </Text>
          <Text
            style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "400" }}
          >
            Or login with
          </Text>
        </View>
        <View
          style={{ flex: 1.5, flexDirection: "row", justifyContent: "center" }}
        >
          <View
            style={{
              backgroundColor: "#25479B",
              width: 110,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            <Image source={require("../../assets/images/f.png")}></Image>
          </View>
          <View
            style={{
              backgroundColor: "#0F8EE0",
              width: 110,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 40,
                fontWeight: "900",
                color: "white",
              }}
            >
              Z
            </Text>
          </View>
          <View style={styles.google}>
            <Image source={require("../../assets/images/google.png")}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5230",
  },
  google: {
    // backgroundColor: "#31AA5210",
    width: 110,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#0680F1",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default Screen1d;
