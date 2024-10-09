import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DonutItem } from "../components/DonutItem";
import { useData } from "../hook/useData";
import {useState, useEffect} from "react";

export const MasterPortrait = () => {

    const url = "https://67065011a0e04071d226501a.mockapi.io/donuts";
    const { donuts, setDonuts, fetchData } = useData(url);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flex: 1.5,
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                    <Text style={[styles.text, { color: '#000000A6' }]}>Welcome, Jala!</Text>
                    <Text style={[styles.text, { fontSize: 24 }]}>Choice you Best food</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TextInput
                        placeholder="Search"
                        style={styles.input}
                    />
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#F1B000" }]}>
                        <Text style={[styles.text, { fontSize: 18, }]}>Donut</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text, { fontSize: 18 }]}>Pink Donut</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text, { fontSize: 18, }]}>Floating</Text>
                    </TouchableOpacity>

                </View>
            </View>


            <View style={{ flex: 4 }}>
                <FlatList 
                    data={donuts}
                    renderItem={({item}) => <DonutItem props={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },
    input: {
        height: 45,
        width: "80%",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#C4C4C4",
        paddingLeft: 10,
        fontSize: 16,
        color: "#000000"
    },
    button: {
        height: 45,
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#00000033"
    },
    
});