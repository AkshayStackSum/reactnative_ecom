import { Button, Dimensions, FlatList, ImageBackground, Platform, ScrollView, Text, TextBase, TouchableOpacity, View } from "react-native"
import { style } from "../styles/Style"
import { useEffect, useState } from "react"
import { getProductByID } from "../../Apis/API"
import { ProgrssView } from "../Home"
import { route } from "../../data/Routes"


export const DetailsScreen = (props: any) => {

    const [product, setProduct] = useState(undefined)
    const [count, setCount] = useState(1)



    useEffect(() => {
        getProductByID(props.route.params.id).then(it => setProduct(it))
    }, [])

    const dimensions = Dimensions.get('window');

    return (product ? <ScrollView style={style.viewBox}>

        <View style={{ paddingBottom: 30 }} >
            <FlatList horizontal={true}
                snapToAlignment='center'
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={product.images}
                renderItem={({ item }) => <View style={style.viewBox}>
                    <ImageBackground source={{ uri: item }}
                        style={{
                            width: dimensions.width, height: 220,
                            overflow: "hidden",
                        }} />
                </View>} />

            <View style={{ marginHorizontal: 15 }}>

                <Text style={[style.textStyle, { marginTop: 10, fontSize: 22, fontWeight: 'bold' }]}>{product.title}</Text>

                <View style={{ flexDirection: 'row', alignItems:'center'}}>
                    <Text style={[style.textStyle, { fontSize: 12, color: "grey" }]}>4.5</Text>
                    <View style={{ height: 12, width: 1, backgroundColor: 'grey', marginStart: 4 }} />
                    <Text style={[style.textStyle, { marginStart: 4, fontSize: 12, color: "blue", textDecorationLine: 'underline' }]} >193 Reviews</Text>

                </View>


                <Text style={[style.textStyle, { marginTop: 10, fontSize: 14, color: 'grey' }]}>{product.description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={[style.textStyle, { fontSize: 18, fontWeight: 'bold' }]}>${product.price}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            count != 1 ? setCount(count - 1) : null
                        }}>
                            <Text style={[style.textStyle, style.textStyleWithCircle1, { alignContent: 'center',textAlign:'center',paddingTop:8, alignItems:'center', fontSize: 18, fontWeight: 'bold' }]}>-</Text>

                        </TouchableOpacity>
                        <Text style={[style.textStyle, { marginHorizontal: 10, fontSize: 14, fontWeight: 'bold' }]}>{count}</Text>
                        <TouchableOpacity onPress={() => {
                            setCount(count + 1)
                        }}>
                            <Text style={[style.textStyle, style.textStyleWithCircle, { fontSize: 18,paddingTop:8, fontWeight: 'bold' }]}>+</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: 'grey', height: 160, marginTop: 20 }}>

            </View>

            <TouchableOpacity onPress={() => {
                props.navigation.navigate(route.card)
            }}>
                <View style={[style.button, { flexDirection: 'row', borderRadius: 30, marginHorizontal: 15, paddingHorizontal: 20, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, marginTop: 20 }]}>
                    <Text style={[style.textStyle, { fontSize: 14, color: 'white' }]}>Add Item to bag</Text>
                    <Text style={[style.textStyle, { fontSize: 14, color: 'white' }]}>${count * parseInt(product.price)}</Text>

                </View>
            </TouchableOpacity>
        </View>



    </ScrollView> : <ProgrssView />
    )
}