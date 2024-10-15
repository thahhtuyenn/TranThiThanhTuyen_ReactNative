import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';

export const DetailPortrait = ({ route, navigation }) => {
    const { item } = route.params;

    const formatPrice = (price, style) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + style;
    };
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: item.image }} style={{ width: "100%", height: 400, }} />

                <View style={{ height: 80, justifyContent: "space-around", marginHorizontal: 15}}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#0000008A', fontWeight: 'bold' }}>{item.description}</Text>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold' }}>{formatPrice(item.price, "đ")}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}