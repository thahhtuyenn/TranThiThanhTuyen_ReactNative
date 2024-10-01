import {
  View,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { ItemProduct02 } from "../components/ItemProduct02";
import { TextInput } from "react-native-gesture-handler";

export const ProductScreen02 = ({ navigation }) => {
  //ham chuyen doi tu so sang tien te
  const formatPrice = (price, style) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + style;
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://66f386bd71c84d805878f8e0.mockapi.io/api/products`,
    }).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../assets/imageIcon/back.png")} />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            height: 30,
            backgroundColor: "#FFFFFF",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/imageIcon/search.png")}
            style={{ marginHorizontal: 10 }}
          />
          <TextInput placeholder="Day cap usb" />
        </View>
        <Pressable>
          <Image source={require("../assets/imageIcon/cart.png")} />
        </Pressable>

        <Pressable>
          <Image source={require("../assets/imageIcon/other.png")} />
        </Pressable>
      </View>

      <View
        style={{ height: 45, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            textAlign: "left",
            fontFamily: "Roboto",
            fontSize: 14,
            fontWeight: "regular",
            width: "80%",
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop.
        </Text>
      </View>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <ItemProduct02
            name={item.name}
            image={item.image}
            price={formatPrice(item.price, "đ")}
            discount={item.discount}
            star={item.star}
            comment={item.comment}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#1BA9FF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  textChat: {
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "medium",
    fontSize: 18,
  },
  item: {
    width: "45%",
    height: 180,
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
});
