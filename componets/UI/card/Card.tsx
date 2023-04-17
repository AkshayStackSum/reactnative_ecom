import { FlatList, Image, Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { style } from "../styles/Style"
import React, { useEffect, useState } from "react"
import { ProgrssView } from "../Home"
import { getAllProducts } from "../../Apis/API"
import { ScrollView } from "react-native"
import { route } from "../../data/Routes"
import { getAddress } from "../../data/Database"
import { useIsFocused } from "@react-navigation/native"

export const CartScreen = ({ navigation }) => {

    const isFocused = useIsFocused();

    const [products, setProducts] = useState(undefined)
    const [address, setAddress] = useState('')

    useEffect(() => {
        getAllProducts().then(it => setProducts(it))
    }, [])

    useEffect(() => {
        getAddress().then(it => setAddress(it))

    }, [isFocused])

    return products ? <ScrollView><View style={style.viewBox}>
        <FlatList style={{ maxHeight: 250, backgroundColor: '#F8F8F8', marginHorizontal: 15, padding: 10 }}
            data={products}
            renderItem={({ item, index }) => <CartInflate item={item} onClick={() => {
                navigation.navigate(route.detail, { id: item.id })
            }} />}
        />

        <Text style={[style.textStyle, { marginTop: 10, marginHorizontal: 15, fontSize: 16, fontWeight: 'bold' }]}>Bill Details</Text>

        <View style={{ backgroundColor: '#E8E8E8', marginHorizontal: 15, padding: 10, borderRadius: 8, marginTop: 10 }}>
            <AmountTitle title={'Item Total'} amount={'300.00'} />
            <AmountTitle title={'Tax & Charges'} amount={'69.00'} />
            <View style={{ backgroundColor: 'grey', marginVertical: 10, height: 1 }} />
            <AmountTitle title={'Grand Total'} amount={'369.00'} />
        </View>

        <View style={{ backgroundColor: '#E8E8E8', padding: 10, borderRadius: 8, marginTop: 20 }}>
            <View style={[style.viewStyle, { marginTop: 6 }]}>
                <Text style={[style.textStyle, { fontSize: 16, fontWeight: 'bold' }]}>Deliverd at Home</Text>
                <Text onPress={() => {
                    navigation.navigate(route.address)
                }} style={[style.textStyle, { fontSize: 16, textTransform: 'uppercase', color: 'red', fontWeight: 'bold' }]}>Change</Text>
            </View>

            <Text style={[style.textStyle, { fontSize: 14, marginTop: 10, paddingHorizontal: 10, color: 'grey' }]}>{address == '' ? "HPRJ+H3P, University Rd, Pahada, Udaipur, Rajasthan 313001" : address}</Text>

        </View>


        <TouchableOpacity style={{backgroundColor:'orange', marginHorizontal:15,marginTop:30, padding:15, borderRadius:10}}>
            <Text style={{ textTransform: 'uppercase',fontWeight:'bold', fontSize:16, color:'white', textAlign:'center'}}>Process to checkout</Text>
        </TouchableOpacity>

    </View></ScrollView> : <ProgrssView />
}

const AmountTitle = ({ title, amount }) => {
    return <View style={[style.viewStyle, { marginTop: 6 }]}>
        <Text style={[style.textStyle, { fontSize: 14, fontWeight: 'bold' }]}>{title}</Text>
        <Text style={[style.textStyle, { fontSize: 14, textTransform: 'uppercase', color: 'grey', fontWeight: 'bold' }]}>${amount}</Text>
    </View>
}


const CartInflate = ({ item, onClick }) => {

    const [count, setCount] = useState(1)
    return <TouchableOpacity onPress={onClick}><View style={{ flex: 1, flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between', alignContent: 'center' }}>
        <View style={{ flexDirection: 'row', flex: 3, alignContent: 'center' }}>
            <Image
                source={{ uri: item.images[0] }}
                style={{
                    width: 80, height: 80, borderRadius: 10,
                    overflow: "hidden"
                }}
            />
            <View style={{ marginHorizontal: 10, flex: 1, justifyContent: 'space-around' }}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={[style.textStyle, { marginTop: 6, fontSize: 14, textTransform: 'uppercase', fontWeight: 'bold' }]}>{item.title}</Text>

                <Text style={[style.textStyle, { marginTop: 6, fontSize: 14, textTransform: 'uppercase', color: 'grey', fontWeight: 'bold' }]}>${item.price}</Text>

            </View>
        </View>

        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', borderColor: 'orange', borderWidth: 2, borderRadius: 6 }}>

                <TouchableOpacity onPress={() => {
                    count != 1 ? setCount(count - 1) : null
                }}>
                    <Text style={[style.textStyle, { fontSize: 22, alignContent: 'center', paddingHorizontal: 10, color: 'orange' }]}>-</Text>

                </TouchableOpacity>
                <Text style={[style.textStyle, { marginHorizontal: 2, marginTop: 4, fontSize: 14, }]}>{count}</Text>
                <TouchableOpacity onPress={() => {
                    setCount(count + 1)
                }}>
                    <Text style={[style.textStyle, { fontSize: 18, paddingHorizontal: 10, color: 'orange', }]}>+</Text>

                </TouchableOpacity>

            </View>
            <Text style={[style.textStyle, { marginTop: 6, fontSize: 14, textTransform: 'uppercase', color: 'grey', fontWeight: 'bold' }]}>${count * parseInt(item.price)}</Text>

        </View>
    </View></TouchableOpacity>
}