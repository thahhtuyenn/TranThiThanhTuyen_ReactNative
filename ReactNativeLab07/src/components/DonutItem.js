import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";


export const DonutItem = ({props, addToCard}) => {
    const formatPrice = (price, style) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + style;
    };
    return (
        <View style={styles.item}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.img} source={props.image} />
            </View>

            <View style={{ flex: 3 }}>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Text style={[styles.text, { fontSize: 20, marginRight: 10}]} numberOfLines={1}>
                        {props.name}
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[styles.text, { color: '#0000008A', marginRight: 10 }]}>
                        {props.description}
                    </Text>
                </View>
                <View style={{
                    flex: 1.5,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <Text style={[styles.text, { fontSize: 20 }]}>
                        {formatPrice(props.price, "đ")}
                    </Text>

                    <TouchableOpacity onPress={() => {addToCard(props)}}>
                        <Image source={require('../../assets/img/plus_button.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 130,
        width: "100%",
        backgroundColor: "#F4DDDD",
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row',
    },
    img: {
        height: 110,
        width: 110,
        borderRadius: 10
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },
})