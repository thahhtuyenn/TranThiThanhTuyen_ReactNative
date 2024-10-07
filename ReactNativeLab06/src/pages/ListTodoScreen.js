import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { ItemTodo } from "../components/ItemTodo";
import { SafeAreaView } from "react-native-safe-area-context";



export const ListTodoScreen = ({ navigation, route }) => {

  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    axios({
      method: "GET",
      url: "https://66f38c9f71c84d8058790dec.mockapi.io/crudapi",
    })
    .then((response) => {
      console.log(response.data);
      
        setTodos(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const checkedTodo = (id) => {
    axios.delete(`https://66f38c9f71c84d8058790dec.mockapi.io/crudapi/${id}`)
    .then((response) => {
        fetchData();
    })
    .catch((error) => {
        console.log(error);
    });
  }

  const handleSearch = () => {
    if(search !== "" && search !== null){
      const newTodos = todos.filter((todo) => {
        return todo.name.toLowerCase().includes(search.toLowerCase());
      });
      setTodos(newTodos);
    }else{
      fetchData();
    }
  }
  const updateTodo = (id, value) => {
    
    axios.put(`https://66f38c9f71c84d8058790dec.mockapi.io/crudapi/${id}`, {
      name: value,
    })
    .then((response) => {
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flex: 2, flexDirection: 'row', justifyContent: "space-between", alignItems: "center",}}>
          <Pressable style={{marginBottom: 20, marginLeft: 10}} 
          onPress={() => {navigation.goBack()}}>
            <Image source={require("../../assets/img/icon-back.png")}/>
          </Pressable>
          <View style={{flexDirection: "row", width: "60%", }}>
            <Image source={require("../../assets/img/avt.png")}/>
            <View style={{marginHorizontal: 10}}>
              <Text style={{color: "#171A1F", 
                fontFamily: "Roboto", 
                fontSize: 20, fontWeight: "700",
                }}>Hi Tuyen</Text>
              <Text style={{
                color: "#9095A0", 
                fontFamily: "Roboto", 
                fontSize: 14, fontWeight: "700",
              }}>Have agrate day a head</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
              <View style={styles.textInput}>
                <Pressable 
                  onPress={() => handleSearch()}
                >
                  <Image
                    source={require("../../assets/img/icon-search.png")}
                    style={{ marginHorizontal: 10 }}
                  />
                </Pressable>
                <TextInput
                  placeholder="Search"
                  style={{ width: "90%", height: 45 }}
                  value={search}
                  onChangeText={(text) => setSearch(text)}

                />
              </View>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: "center", alignItems: "center"}}>
        <FlatList 
          data={todos}
          renderItem={({item}) => {
            return(
              <ItemTodo id={item.id} name={item.name} checkedTodo={checkedTodo} updateTodo={updateTodo}/>
            )
          }}
        />
      </View>
      <View style={{flex: 0.5, margin: '20'}}>
        <Pressable style={{alignItems: 'center'}} onPress={() => {navigation.navigate("AddToDoScreen")}}>
          <Image source={require('../../assets/img/icon-add.png')} />
        </Pressable>
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
