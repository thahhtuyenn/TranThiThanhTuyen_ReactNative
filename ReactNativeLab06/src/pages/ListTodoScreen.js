import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { ItemTodo } from "../components/ItemTodo";
import { SafeAreaView } from "react-native-safe-area-context";
import useData from "../hook/useData";



export const ListTodoScreen = ({ navigation, route }) => {
  const { user } = route.params;

  const { todos, setTodos, searchTodo, updateStatus, search, setSearch, fetchData } = useData("https://66f38c9f71c84d8058790dec.mockapi.io/crudapi");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search === "") {
      fetchData();
    } else {
      searchTodo();
    }
  }, [search])

  useEffect(() => {
    fetchData()
  }, [route.params?.action])

useEffect(() => {}, [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: "space-between", alignItems: "center", }}>
          <TouchableOpacity style={{ marginBottom: 20, marginLeft: 10 }}
            onPress={() => { navigation.goBack() }}>
            <Image source={require("../../assets/img/icon-back.png")} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", width: "60%", }}>
            <Image source={require("../../assets/img/avt.png")} />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{
                color: "#171A1F",
                fontFamily: "Roboto",
                fontSize: 20, fontWeight: "700",
              }}>Hi, {user}</Text>
              <Text style={{
                color: "#9095A0",
                fontFamily: "Roboto",
                fontSize: 14, fontWeight: "700",
              }}>Have agrate day a head</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.textInput}>
            <TouchableOpacity
              onPress={() => searchTodo()}
            >
              <Image
                source={require("../../assets/img/icon-search.png")}
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Search"
              style={{ width: "90%", height: 45 }}
              value={search}
              onChangeText={(text) => setSearch(text)}

            />
          </View>
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center", width: "100%" }}>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return (
              <ItemTodo todo={item} updateStatus={updateStatus} updateTodo={() => {navigation.navigate("AddToDoScreen", {user: user, itemUpdate: item, action: "update"})}} />
            )
          }}
        />
      </View>
      <View style={{ flex: 0.5, margin: '20' }}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate("AddToDoScreen", {user: user, action: "add"}) }}>
          <Image source={require('../../assets/img/icon-add.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    width: "90%",
    borderWidth: 1,
    borderColor: "#9095A0",
    borderRadius: 5,
  },

});
