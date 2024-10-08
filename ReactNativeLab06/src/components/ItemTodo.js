import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";
import axios from "axios";
export const ItemTodo = ({ todo, updateStatus, updateTodo}) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => { updateStatus(todo.id) }}
            >
                <Image source={require("../../assets/img/icon-check.png")} style={{ marginHorizontal: 10 }} />
            </TouchableOpacity> 
            <Text style={styles.textItem}> {todo.name} </Text>
            <TouchableOpacity 
            onPress={() => {updateTodo()}}
            >
               <Image source={require("../../assets/img/icon-update.png")} style={{ marginHorizontal: 10 }} />
            </TouchableOpacity>
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