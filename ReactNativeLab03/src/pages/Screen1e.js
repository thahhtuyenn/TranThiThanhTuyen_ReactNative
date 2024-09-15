import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";

const Screen1e = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Roboto", fontSize: 25, fontWeight: "700" }}>
          REGISTER
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder="Name"
          style={{
            backgroundColor: "#C4C4C44D",
            width: "90%",
            height: 54,
            paddingLeft: 20,
            fontSize: 18,
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder="Phone"
          style={{
            backgroundColor: "#C4C4C44D",
            width: "90%",
            height: 54,
            paddingLeft: 20,
            fontSize: 18,
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder="Birthday"
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
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 25,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/images/rdb.png")}></Image>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              fontWeight: "400",
              paddingLeft: 10,
            }}
          >
            Male
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/images/rdb.png")}></Image>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              fontWeight: "400",
              paddingLeft: 10,
            }}
          >
            Female
          </Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
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
            REGISTER
          </Text>
        </Pressable>
      </View>
      <View style={{ flex: 1.5, alignItems: "center" }}>
        <Text style={{ fontFamily: "Roboto", fontSize: 15, fontWeight: "400" }}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5230",
  },
});

export default Screen1e;
