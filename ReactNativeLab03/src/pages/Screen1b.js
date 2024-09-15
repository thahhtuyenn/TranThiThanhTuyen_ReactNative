import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Screen1b = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 20,
          height: "100%",
        }}
      >
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <View
            style={{
              flex: 2,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/ForgetPass.png")}
              style={styles.img}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 25,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              FORGET {"\n"} PASSWORD
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 15,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Provide your account’s email for which you {"\n"} want to reset
              your password
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.inputEmail}>
              <Image source={require("../../assets/images/email.png")}></Image>
              <Text>Email</Text>
            </View>
          </View>
          <View style={{ flex: 2.5 }}>
            <Pressable style={styles.button}>
              <Text
                style={{ fontFamily: "Roboto", fontSize: 18, fontWeight: 700 }}
              >
                NEXT
              </Text>
            </Pressable>
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
  inputEmail: {
    width: "80%",
    height: 50,
    backgroundColor: "#C4C4C4",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#E3C000",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default Screen1b;
