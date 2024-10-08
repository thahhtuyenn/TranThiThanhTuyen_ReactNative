import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import useData from "../hook/useData";

export const AddToDoScreen = ({ navigation, route }) => {


    const { user, action, itemUpdate } = route.params;
    const { updateTodo, addTodo } = useData("https://66f38c9f71c84d8058790dec.mockapi.io/crudapi");
    const [todo, setTodo] = useState(itemUpdate ? itemUpdate.name : "");

    const handleClickFinish = () => {
        if (todo !== "" && todo !== null) {
            if (action === "add") {
                addTodo(todo);
                Alert.alert("Add job", "Add job successfully");
                navigation.navigate({
                    name: 'ListTodoScreen',
                    params: { action: true },
                    merge: true,
                });
            } else {
                updateTodo(itemUpdate.id, todo);
                Alert.alert("Update job", "Update job successfully");
                navigation.navigate({
                    name: 'ListTodoScreen',
                    params: { action: true },
                    merge: true,
                });
            }

        } else {
            Alert.alert("Invalid job", "Please enter the correct job.");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ flex: 1, marginHorizontal: 20, flexDirection: 'row', justifyContent: "space-between", alignItems: "center", }}>

                    <View style={{ flexDirection: "row", width: "60%", }}>
                        <Image source={require("../../assets/img/avt.png")} />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{
                                color: "#171A1F",
                                fontFamily: "Roboto",
                                fontSize: 20, fontWeight: "700",
                            }}>Hi {user}</Text>
                            <Text style={{
                                color: "#9095A0",
                                fontFamily: "Roboto",
                                fontSize: 14, fontWeight: "700",
                            }}>Have agrate day a head</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ marginBottom: 20, marginLeft: 10 }}
                        onPress={() => { navigation.goBack() }}>
                        <Image source={require("../../assets/img/icon-back.png")} />
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '700' }}>
                        {action === "add" ?
                            "ADD"
                            : "UPDATE"} YOUR JOB</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        handleClickFinish();
                    }}>
                        <Text style={styles.text}>FINISH</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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