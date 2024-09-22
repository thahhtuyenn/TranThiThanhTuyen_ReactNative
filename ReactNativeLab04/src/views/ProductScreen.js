import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";

//su dung state de luu tru thong tin dien thoai
export const phones = [
  {
    id: 1,
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    price: 1790000,
    discount: 0.15,
    color: "blue",
    brand: "Vsmart",
    rating: 5,
    review: 828,
    image: require("../../assets/phones/vs_blue.png"),
  },
  {
    id: 2,
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    price: 1790000,
    discount: 0.15,
    color: "black",
    brand: "Vsmart",
    rating: 5,
    review: 828,
    image: require("../../assets/phones/vs_black.png"),
  },
  {
    id: 3,
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    price: 1790000,
    discount: 0.15,
    color: "silver",
    brand: "Vsmart",
    rating: 5,
    review: 828,
    image: require("../../assets/phones/vs_silver.png"),
  },
  {
    id: 4,
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    price: 1790000,
    discount: 0.15,
    color: "red",
    brand: "Vsmart",
    rating: 5,
    review: 828,
    image: require("../../assets/phones/vs_red.png"),
  },
];

export default function ProductScreen({ route, navigation }) {
  //sd state de luu tru thong tin dien thoai dang chon
  //mac dinh la dien thoai dau tien trong danh sach
  const [phone, setPhone] = useState(phones[0]);

  //ham chon mau dien thoai
  const chooseColor = (color) => {
    //tim dien thoai co mau trung voi mau duoc chon
    const selectedPhone = phones.find((p) => p.color === color);
    //cap nhat lai state phone
    setPhone(selectedPhone);
  };

  //ham chuyen doi tu so sang tien te
  const formatPrice = (price, style) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + style;
  };

  useEffect(() => {
    //khi chon mau dien thoai thi cap nhat lai thong tin dien thoai
    if (route.params?.color) {
      chooseColor(route.params.color);
    }
  }, [route.params?.color]);

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image source={phone.image} resizeMode="contain" />
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            marginHorizontal: 30,
          }}
        >
          {/* Ten dien thoai */}
          <Text
            style={{ fontFamily: "Roboto", fontSize: 17, fontWeight: "400" }}
          >
            {phone.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              {/*hien thi so luong sao tuong ung voi ratin */}
              {Array(phone.rating)
                .fill()
                .map((_, i) => {
                  return (
                    <Image
                      style={{ marginRight: 10 }}
                      source={require("../../assets/star.png")}
                    />
                  );
                })}
            </View>
            <Text
              style={{ fontFamily: "Roboto", fontSize: 15, fontWeight: "400" }}
            >
              {/* hien thi so luong review */}
              (Xem {phone.review} đánh giá)
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <View
            style={{
              width: "60%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 30,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontFamily: "Roboto", fontSize: 17, fontWeight: "700" }}
            >
              {formatPrice(phone.price * (1 - phone.discount), " đ")}
            </Text>
            {/* textDecorationLine: "line-through" de gach ngang text */}
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 15,
                fontWeight: "700",
                color: "#00000094",
                textDecorationLine: "line-through",
              }}
            >
              {formatPrice(phone.price, " đ")}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "70%",
              marginHorizontal: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 15,
                fontWeight: "700",
                marginRight: 10,
              }}
            >
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <Image source={require("../../assets/question.png")} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 38,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#C4C4C400",
              borderWidth: 1,
              borderColor: "#00000075",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Pressable
              style={{ width: "85%", alignItems: "center" }}
              onPress={() =>
                navigation.navigate("ChooseColor", { phone: phone })
              }
            >
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontSize: 15,
                  fontWeight: "700",
                }}
              >
                4 MÀU-CHỌN MÀU
              </Text>
            </Pressable>
            <Image source={require("../../assets/Vector.png")} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: "90%",
              height: 45,
              alignItems: "center",
              backgroundColor: "#CA1536",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{ fontFamily: "Roboto", fontSize: 15, fontWeight: "700" }}
            >
              CHỌN MUA
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
