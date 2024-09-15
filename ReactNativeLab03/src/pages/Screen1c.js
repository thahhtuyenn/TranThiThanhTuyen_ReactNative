import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Screen1c = () => {
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
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 2,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 60,
                fontWeight: 700,
                textAlign: "center",
                color: "#000",
              }}
            >
              CODE
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: 700,
                textAlign: "center",
                color: "#000",
              }}
            >
              VERIFICATION
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
                color: "#000",
              }}
            >
              Enter ontime password sent on {"\n"} ++849092605798
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.pass}>
              <View style={styles.passContainer}></View>
              <View style={styles.passContainer}></View>
              <View style={styles.passContainer}></View>
              <View style={styles.passContainer}></View>
              <View style={styles.passContainer}></View>
              <View style={styles.passContainer}></View>
            </View>
          </View>
          <View style={{ flex: 2.5 }}>
            <Pressable style={styles.button}>
              <Text
                style={{ fontFamily: "Roboto", fontSize: 18, fontWeight: 700 }}
              >
                VERIFY CODE
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
  pass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  passContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
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

export default Screen1c;
