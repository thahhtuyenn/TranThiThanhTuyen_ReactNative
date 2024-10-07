import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Pressable,
    FlatList,
    Alert,
  } from "react-native";
  import axios from "axios";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useState, useEffect } from "react";

  export const AddToDoScreen = ({ navigation }) => {

    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if(todo === "" || todo === null){
            Alert.alert("Error", "Please enter your job");
            return;
        }
        axios({
            method: "POST",
            url: "https://66f38c9f71c84d8058790dec.mockapi.io/crudapi",
            data: {
                name: todo,
            },
        })
        .then((response) => {
            console.log(response.data);
            setTodo("");
            Alert.alert("Success", "Add todo success");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, justifyContent: "space-between"}}>
                <View style={{flex: 1, marginHorizontal: 20, flexDirection: 'row', justifyContent: "space-between", alignItems: "center",}}>
                    
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

                    <Pressable style={{marginBottom: 20, marginLeft: 10}} 
                    onPress={() => {navigation.goBack()}}>
                        <Image source={require("../../assets/img/icon-back.png")}/>
                    </Pressable>

                </View>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Roboto', fontSize: 32, fontWeight: '700'}}>ADD YOUR JOB</Text>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>                    
                    <View style={styles.textInput}>
                        <Image source={require("../../assets/img/icon-todo.png")}
                        style={{ marginHorizontal: 10 }}
                        />
                        <TextInput
                        placeholder="input your job"
                        style={{ width: "85%", height: 45 }}
                        value={todo}
                        onChangeText={(text) => setTodo(text)}
                        />
                    </View>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Pressable style={styles.button} onPress={() => {addTodo()}}>
                        <Text style={styles.text}>FINISH</Text>
                    </Pressable>
                </View>
                
            </View> 

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/img/image-page-small.png')} />
            </View>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
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
      button: {
        width: "60%",
        height: 45,
        backgroundColor: "#00BDD6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
      },
      text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
  })