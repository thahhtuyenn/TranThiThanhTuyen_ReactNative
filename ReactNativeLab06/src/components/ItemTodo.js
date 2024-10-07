import {
    View,
    StyleSheet,
    Image,
    Text,
    Pressable,
    TextInput,
} from "react-native";
import axios from "axios";
import { useState } from "react";
export const ItemTodo = ({ id, name, checkedTodo, updateTodo }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [newName, setNewName] = useState(name);
    return (
        <View style={styles.item}>
            <Pressable
                onPress={() => { checkedTodo(id) }}
            >
                <Image source={require("../../assets/img/icon-check.png")} style={{ marginHorizontal: 10 }} />
            </Pressable>
            {

                !isUpdate ? <Text style={styles.textItem}> {name} </Text>
                    : <TextInput value={newName} onChangeText={setNewName} style={{width: "60%", textAlign: 'left'}} />
            }
            <Pressable onPress={() => {setIsUpdate(!isUpdate); setNewName(name)}}>
                {!isUpdate ? <Image source={require("../../assets/img/icon-update.png")} style={{ marginHorizontal: 10 }} />
                    : (<View style={{marginRight: 10}}>
                        <Text style={styles.textBtn}>Cancle</Text>
                    
                        <Pressable onPress={() => {updateTodo(id, newName), setIsUpdate(!isUpdate)}}  >
                            <Text style={styles.textBtn} >Save</Text>
                        </Pressable>
                    </View>)
                }

            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    item: {
        height: 50,
        width: "90%",
        borderRadius: 25,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#DEE1E678"
    },
    textItem: {
        color: "#171A1F",
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "700",
        width: "70%"
    },
    textBtn: {
        fontSize: 16,
        fontWeight: "700",
    }
})