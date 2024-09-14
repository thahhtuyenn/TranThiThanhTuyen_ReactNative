import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const LoginFirstScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../images/Ellipse8.png")} style={styles.img} />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Roboto",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          GROW {"\n"} YOUR BUSINESS
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Roboto",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          We will help you to grow your business using {"\n"} online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00CCF9",
  },
  button: {
    width: 119,
    height: 48,
    backgroundColor: "#E3C000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default LoginFirstScreen;
