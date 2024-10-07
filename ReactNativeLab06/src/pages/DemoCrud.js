import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export const Item = ({ name, id, fetchData }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        paddingHorizontal: 15,
        alignItems: "center",
        width: "100%",
        height: 50,
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "#C4C4C4",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 16,
          fontWeight: "medium",
          width: 200,
        }}
      >
        {name}
      </Text>
      <Pressable
        style={{
          height: 35,
          width: 55,
          backgroundColor: "#00BDD6",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => update(id, fetchData)}
      >
        <Text style={styles.textBtn}>Update</Text>
      </Pressable>
      <Pressable
        style={{
          height: 35,
          width: 55,
          backgroundColor: "#00BDD6",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => del(id, fetchData)}
      >
        <Text style={styles.textBtn}>Delete</Text>
      </Pressable>
    </View>
  );
};

const update = (id, data) => {
  axios
    .put(`https://66f38c9f71c84d8058790dec.mockapi.io/crudapi/${id}`, {
      name: "Ghec Don Chung",
    })
    .then((response) => {
      console.log(response);
      // Gọi lại API để cập nhật danh sách sau khi update thành công
      data();
    })
    .catch((error) => {
      console.log(error);
    });
};

const del = (id, data) => {
  axios
    .delete(`https://66f38c9f71c84d8058790dec.mockapi.io/crudapi/${id}`) // Chỉnh lại URL đúng format
    .then((response) => {
      console.log(response);
      // Gọi lại API để cập nhật danh sách sau khi xóa thành công
      data();
    })
    .catch((error) => {
      console.log(error);
    });
};

const add = (fetchData) => {
  axios
    .post("https://66f38c9f71c84d8058790dec.mockapi.io/crudapi", {
      name: "Lui Lui",
    })
    .then((response) => {
      console.log(response);
      // Gọi lại API để cập nhật danh sách sau khi thêm thành công
      fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const DemoCrud = () => {
  const [names, setNames] = useState([]);
  const fetchData = () => {
    axios({
      method: "get",
      url: `https://66f38c9f71c84d8058790dec.mockapi.io/crudapi`,
    })
      .then((response) => {
        console.log(response.data);
        setNames(response.data); // Cập nhật state với danh sách mới
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ flex: 4, alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 30,
            fontWeight: "700",
            marginVertical: 10,
          }}
        >
          List name
        </Text>
        <View style={{ width: "100%", height: 550 }}>
          <FlatList
            data={names}
            renderItem={({ item }) => (
              <Item name={item.name} id={item.id} fetchData={fetchData} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <Pressable
          style={styles.button}
          onPress={() => {
            add(fetchData);
          }}
        >
          <Text style={styles.textBtn}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    height: 40,
    width: "70%",
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textBtn: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
