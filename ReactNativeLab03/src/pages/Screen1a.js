import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Screen1a = () => {
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
        <View
          style={{
            flex: 1.5,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/Ellipse8.png")}
            style={styles.img}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "space-around",
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>LOGIN</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>SIGN UP</Text>
            </Pressable>
          </View>

          <View style={{ flex: 1, marginBottom: 60 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Roboto",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              HOW WE WORK?
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

export default Screen1a;
