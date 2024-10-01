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
import { ItemProduct01 } from "../components/ItemProduct01";

export const ProductScreen01 = ({ navigation }) => {
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
        <Text style={styles.textChat}>Chat</Text>
        <Pressable>
          <Image source={require("../assets/imageIcon/cart.png")} />
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
        data={products}
        renderItem={({ item }) => (
          <ItemProduct01 name={item.name} image={item.image} shop={item.shop} />
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
});
