import {
  View,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

export const ItemProduct01 = ({ name, image, shop }) => {
  return (
    <View style={styles.item}>
      <Image
        source={image}
        resizeMode="contain"
        style={{ height: 95, width: 95 }}
      />

      <View
        style={{
          justifyContent: "space-around",
          height: 100,
          width: "45%",
          paddingBottom: 25,
          margin: 7,
        }}
      >
        <Text
          style={{ fontSize: 16, fontWeight: "400", fontFamily: "Roboto" }}
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            fontFamily: "Roboto",
            color: "red",
          }}
        >
          Shop: <Text>{shop}</Text>
        </Text>
      </View>

      <Pressable style={styles.btnChat}>
        <Text style={styles.textChat}>Chat</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  btnChat: {
    height: 38,
    width: 88,
    backgroundColor: "#F31111",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textChat: {
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "medium",
    fontSize: 18,
  },
});
