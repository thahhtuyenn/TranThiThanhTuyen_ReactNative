import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DonutItem } from "../components/DonutItem";
import { useData } from "../hook/useData";
import { useState, useEffect } from "react";

const donutCategories = [
    {
        id: 1,
        name: "Donut",
    },
    {
        id: 2,
        name: "Pink",
    },
    {
        id: 3,
        name: "Floating",
    },
    {
        id: 4,
        name: "Right",
    },
    {
        id: 5,
        name: "Club",
    }
]

export const MasterPortrait = ({route, navigation}) => {
    
    const url = "https://67065011a0e04071d226501a.mockapi.io/donuts";
    const { donuts, setDonuts, fetchData, category, setCategory } = useData(url);    
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search === "") {
            fetchData();
        } else {
            const filteredDonuts = donuts.filter((donut) => {
                return donut.name.toLowerCase().includes(search.toLowerCase());
            });
            setDonuts(filteredDonuts);
        }
    }, [search]);

    useEffect(() => {
        fetchData();
    }, [category]);


    useEffect(() => {
        fetchData();
    }, []);

    const addToCard = (item) => {
        console.log(item);
        navigation.navigate("DetailPortrait", {item});
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <View style={{
                        height: 200,
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
                                value={search}
                                onChangeText={(text) => setSearch(text)}
                            />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}>
                                    {
                                        donutCategories.map((item) => {
                                            return (
                                                <TouchableOpacity
                                                    key={item.id}
                                                    onPress={() => {
                                                        setCategory(item);
                                                    }}
                                                    style={[styles.button, { backgroundColor: category.id === item.id ? "#F1B000" : "#ffff" }]}>
                                                    <Text style={[styles.text, { fontSize: 18, }]}>{item.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }

                                </View>
                            </ScrollView>
                        </View>
                    </View>


                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={donuts}
                            renderItem={({ item }) => <DonutItem props={item} addToCard={addToCard} />}
                            keyExtractor={(item) => item.id}
                        />

                    </View>
                </View>
            </ScrollView>
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
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#00000033",
        marginHorizontal: 5
    },

});