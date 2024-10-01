import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";

export const ItemProduct02 = ({
  name,
  image,
  star,
  price,
  discount,
  comment,
}) => {
  return (
    <View style={styles.item}>
      <Image resizeMode="contain" source={image} style={{ height: 90 }} />

      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 14,
          fontWeight: "400",
          marginHorizontal: 10,
        }}
        numberOfLines={2}
      >
        {name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
          marginLeft: 10,
          width: "60%",
          justifyContent: "space-between",
        }}
      >
        {[1, 2, 3, 4, 5].map((item, index) => {
          if (index < star) {
            return (
              <Image
                key={index}
                source={require("../assets/imageIcon/star.png")}
                style={{ height: 15, width: 15 }}
              />
            );
          } else {
            return (
              <Image
                key={index}
                source={require("../assets/imageIcon/noneStar.png")}
                style={{ height: 15, width: 15 }}
              />
            );
          }
        })}
        <Text>({comment})</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          justifyContent: "space-between",
          marginLeft: 10,
        }}
      >
        <Text style={{ fontFamily: "Roboto", fontSize: 14, fontWeight: "400" }}>
          {price}
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 14,
            fontWeight: "400",
            color: "#969DAA",
            marginLeft: 10,
          }}
        >
          -{discount}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 180,
    width: "45%",
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
});
