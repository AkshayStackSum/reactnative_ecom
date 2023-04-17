import { ActivityIndicator, FlatList, Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from "react-native"
import { color, style } from "./styles/Style"


import { values } from "./strings"
import React, { useEffect, useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from "react-native";
import { getAllProducts, getCategories } from "../Apis/API";
import { route } from "../data/Routes";
import { AddCardData, getFireBaseData } from "../../config";
import { addToCart } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";


export const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState("")
    const [category, setCattegories] = useState(undefined)
    const [products, setProducts] = useState(undefined)

    const cartData = useSelector((state)=>state)

    useEffect(()=>{
        console.warn(cartData)

    },[cartData])
    useEffect(() => {
        getCategories().then(it => setCattegories(it));
        getAllProducts().then(it => setProducts(it));
        getFireBaseData()
    }, [])



    return category && products ? <View style={style.viewBox}>
        <View style={{ marginHorizontal: 15, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={[style.textStyle, { fontWeight: 'bold' }]}>Hello, Robbin</Text>
                    <Text style={[style.textStyle, { color: 'grey', fontSize: 16 }]}>{values.what_are}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(route.order_history)

                }}>
                    <View style={[style.circelStyle, { alignItems: "center", justifyContent: 'center' }]}>
                        <ImageBackground source={require('./styles/assest/cart.png')} style={{
                            height: 18,
                            width: 18
                        }} >
                            <Text style={{
                                color: 'white', borderRadius: 100,
                                alignItems: 'center',
                                backgroundColor: 'red', textAlign: 'center', textAlignVertical: 'center',
                                fontSize: 9, height: 15, width: 15, marginStart: 10, marginBottom: 30
                            }}>1</Text>


                        </ImageBackground>
                    </View></TouchableOpacity>

            </View>
            <TextInput style={[style.searchBox, { marginTop: 20 }]} placeholderTextColor={'grey'} placeholder={values.search} defaultValue={search} onChangeText={(text) => setSearch(text)} />
            {
                category ? <FlatList style={{ marginTop: 20 }}
                    horizontal={true}
                    data={category}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => {
                        navigation.navigate(route.product, { id: item.id, title: item.name })

                    }}><View style={[style.category, { flexDirection: 'row', alignItems: 'center', marginEnd: 10 }]}>
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: 18, height: 18, borderRadius: 24,
                                    overflow: "hidden",
                                }}
                            />
                            <Text style={[style.textStyle, { fontSize: 14, marginStart: 4, marginHorizontal: 10 }]}>{item.name}</Text>

                        </View></TouchableOpacity>}
                /> : <ProgrssView />
            }


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                <Text style={[style.textStyle, { fontSize: 18, fontWeight: 'bold' }]}>{values.trending}</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(route.product, { id: '', title: '' })
                }}>
                    <Text style={[style.textStyle, { color: 'blue', fontSize: 16 }]}>{values.see_all}</Text>
                </TouchableOpacity>
            </View>



        </View>
        {
            products ? <FlatList style={{ marginTop: 20, marginStart: 15, marginEnd: 10 }}
                data={products}
                numColumns={2}
                renderItem={({ item, index }) => <ProductInflate item={item} onClick={() => {
                    navigation.navigate(route.detail, { id: item.id })
                }} />}
            /> : <ProgrssView />
        }
    </View>: <ProgrssView />
}



export const ProductInflate = ({ item, onClick }) => {

    const [like, isLike] = useState(false)
    const [cart, isCart] = useState(false)

    const icon = like ? require('./styles/assest/like.png') : require('./styles/assest/unlike.png')

    const dispacher = useDispatch()


    return (<TouchableOpacity onPress={onClick} style={[style.cardProducts]}><View>
        <ImageBackground
            source={{ uri: item.images[0] }}
            style={{
                flex: 1,
                overflow: "hidden",
                height: 120,
            }}
        >
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 90, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => isLike(!like)}>
                    <Image source={icon} style={{
                        height: 24,
                        width: 24,
                        marginEnd: 10
                    }}
                    /></TouchableOpacity>
            </View>

        </ImageBackground>
        <Text style={[style.textStyle, { marginTop: 6, fontSize: 14, fontWeight: 'bold' }]}>{item.title}</Text>
        <Text numberOfLines={2} ellipsizeMode='head' style={[style.textStyle, { fontSize: 12, color: 'grey' }]}>{item.description}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
            <Text style={[style.textStyle, { fontSize: 14, fontWeight: 'bold' }]}>${item.price}</Text>
            <TouchableOpacity onPress={() => {
                if (!cart) {
                    dispacher(addToCart(item))
                    AddCardData(item)
                    isCart(true)
                }
            }}><Text style={[style.textStyleWithCircle, { fontSize: 22, textAlignVertical: 'center' }]}>{cart ? "✔" : "+"}</Text></TouchableOpacity>
        </View>
    </View></TouchableOpacity>)
}



export const ProgrssView = () => {

    return <View style={[style.viewBox, { alignItems: 'center', alignContent: 'center', justifyContent: 'center' }]}>
        <ActivityIndicator size={'large'} color={'blue'} />
    </View>


}