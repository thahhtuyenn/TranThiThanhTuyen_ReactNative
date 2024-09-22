import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";

//import cac function va bien tu ProductScreen
import { phones } from "./ProductScreen";

export const colors = [
  {
    id: 1,
    color: "blue",
    image: require("../../assets/colors/blue.png"),
  },
  {
    id: 2,
    color: "black",
    image: require("../../assets/colors/black.png"),
  },
  {
    id: 3,
    color: "silver",
    image: require("../../assets/colors/silver.png"),
  },
  {
    id: 4,
    color: "red",
    image: require("../../assets/colors/red.png"),
  },
];

export default function ChooseColorScreen({ route, navigation }) {
  //lay thong tin dien thoai tu ProductScreen, neu co thong tin, nguoc lai la {}
  const { phone } = route.params || {};

  //lay ra dien thoai dang chon
  const [phoneChoose, setPhoneChoose] = useState(phone);

  //ham chuyen doi tu so sang tien te
  const formatPrice = (price, style) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + style;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 20 }}>
      <View style={{ flex: 1, flexDirection: "row", paddingVertical: 15 }}>
        <Image
          source={phoneChoose.image}
          style={{ flex: 1, height: 132 }}
          resizeMode="contain"
        />
        <View
          style={{
            flex: 2,
            // paddingVertical: 10,
            justifyContent: "space-evenly",
          }}
        >
          <Text style={styles.infoPhone}>{phoneChoose.name}</Text>
          <Text style={styles.infoPhone}>
            Màu: <Text style={{ fontWeight: "bold" }}>{phoneChoose.color}</Text>
          </Text>
          <Text style={styles.infoPhone}>
            Cung cấp bởi:{" "}
            <Text style={{ fontWeight: "bold" }}>{phoneChoose.brand}</Text>
          </Text>
          <Text
            style={[styles.infoPhone, { fontWeight: "bold", fontSize: 18 }]}
          >
            {formatPrice(phoneChoose.price, " đ")}{" "}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: "#C4C4C4",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={{ height: 40, width: "100%" }}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              fontWeight: "400",
              margin: 10,
            }}
          >
            Chọn một màu bên dưới:
          </Text>
        </View>
        <View>
          {colors.map((color, index) => {
            return (
              <Pressable
                style={{ margin: 10 }}
                key={index}
                onPress={() => {
                  const phone = phones.find((p) => p.color === color.color);
                  setPhoneChoose(phone);
                }}
              >
                <Image
                  key={index}
                  source={color.image}
                  style={{ width: 100, height: 100 }}
                />
              </Pressable>
            );
          })}
        </View>
        <View
          style={{
            flex: 0.3,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: "90%",
              height: 45,
              backgroundColor: "#1952E294",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate({
                name: "Product",
                params: { color: phoneChoose.color },
                merge: true,
              });
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: "700",
                color: "#F9F2F2",
              }}
            >
              XONG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoPhone: {
    fontFamily: "Roboto",
    fontSize: 15,
  },
});
