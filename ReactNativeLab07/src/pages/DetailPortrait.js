import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import IconF from 'react-native-vector-icons/Ionicons';
import IconAnd from 'react-native-vector-icons/AntDesign';


export const DetailPortrait = ({ route, navigation }) => {
    const { item } = route.params;
    const [count, setCount] = useState(1);

    const formatPrice = (price, style) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + style;
    };

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: item.image }} style={{ width: "100%", height: 400, }} />

                <View style={{ height: 100, justifyContent: "space-around", marginHorizontal: 15,}}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#0000008A', fontWeight: 'bold' }}>{item.description}</Text>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold' }}>{formatPrice(item.price, "đ")}</Text>
                    </View>
                </View>
                <View style={{ height: 60, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, flexDirection: 'row' }}>
                    <View style={{ width: "50%", justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', height: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <IconF name="time-outline" size={25} style={{ color: '#000000', marginRight: 10 }} />
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, fontWeight: '700', color: '#0000008A' }}>Delivery in</Text>
                        </View>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: '700', color: '#000000', marginHorizontal: 15 }}>30 minus</Text>
                    </View>
                    <View style={{ width: "50%", flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            count > 1 ? setCount(count - 1) : setCount(1);
                        }}>
                            <IconAnd name="minussquare" size={25} style={{ color: '#F1B000' }} />
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: '700', color: '#000000', marginHorizontal: 10 }}>{count}</Text>
                        <TouchableOpacity onPress={() => {
                            setCount(count + 1);
                        }}>
                            <IconAnd name="plussquare" size={25} style={{ color: '#F1B000' }} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{height: 110, width: "100%", marginHorizontal: 15, justifyContent: 'space-around', alignItems: 'flex-start'}}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: '700', color: '#000000' }}>Restaurants info</Text>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 15, fontWeight: '700', color: '#000000AB' }} numberOfLines={3}>
                        Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
                    </Text>
                </View>
                <View style={{width: "100%", height: 120, justifyContent: 'center', alignItems: "center"}}>
                    <TouchableOpacity 
                    style={{height: 60, width: 360, backgroundColor: '#F1B000', 
                    borderWidth: 1, borderColor: '#00000033', borderRadius: 5, 
                    justifyContent: 'center', alignItems: "center"}}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 25, fontWeight: '700', color: '#FFFDFD' }}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}