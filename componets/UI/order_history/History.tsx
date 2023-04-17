import { FlatList, Image, Text, View } from "react-native"
import { style } from "../styles/Style"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { URL } from "../../data/LocalData"

export const HistoryScreen = () => {


    return < FlatList style={style.viewBox} data={[1, 2, 3, 4, 5, 6]} renderItem={({ item }) => <HistoryInflate item={item} />} />

}

const HistoryInflate = ({ item }) => {
    const [visible, isVisible] = useState(false)
    return <View style={{
        flex: 1, marginHorizontal: 10,
        marginVertical: 5, borderRadius: 10, elevation: 4, backgroundColor: 'white'
    }} >
        <View style={[style.viewStyle, { marginHorizontal: 0, padding: 10 }]}>
            <View>
                <Text style={[style.textStyle, { fontSize: 14 }]}> ID - {56 + item}</Text>
                <Text style={[style.textStyle, { fontSize: 14 }]}> Order Date Time : 08-DEC-2022 06:59 AM</Text>
            </View>
            <TouchableOpacity onPress={() => isVisible(!visible)}><Text style={[style.textStyle, {
                transform: [
                    { rotate: visible ? '270deg'  : '90deg'},
                ]
                , color: visible ? 'orange' : 'grey', fontWeight:'bold'
            }]}> {">"}</Text></TouchableOpacity>

        </View>

        {
            visible ? <View >
                <View style={{ backgroundColor: 'grey', marginBottom: 12, height: 1 }} />
                <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                    <View style={[style.viewStyle, { marginHorizontal: 0 }]}>
                        <View style={[style.viewStyle, { flex: 3, marginHorizontal: 0, justifyContent: 'flex-start' }]}>
                            <Image
                                source={{ uri: URL }}
                                style={{
                                    width: 60, height: 60, borderRadius: 30,
                                    overflow: 'visible',

                                }}
                            />
                            <View style={{ marginStart: 6 }}>
                                <Text style={[style.textStyle, { fontSize: 16, fontWeight: 'bold' }]}>Farm House</Text>
                                <Text style={[style.textStyle, { fontSize: 14 }]}>Qty : {item}</Text>

                            </View>

                        </View>
                        <Text style={[style.textStyle, { flex: 0.8, fontSize: 14, textAlign: 'right' }]}>Price: $369</Text>


                    </View>

                    <View style={{ backgroundColor: 'grey', marginVertical: 12, height: 1 }} />

                    <AmountWithTitle amount={240} title={'Total Amount'} />
                    <AmountWithTitle amount={5} title={'Discount Amount'} />
                    <AmountWithTitle amount={8} title={'Delivery Charges'} />
                    <AmountWithTitle amount={31.49} title={'Tax Charges'} />
                    <AmountWithTitle amount={274.59} title={'Total Paid Amount'} />
                </View>
            </View> : null
        }

    </View>
}

const AmountWithTitle = ({ amount, title }) => {

    return <View style={[style.viewStyle, { marginTop: 6, marginHorizontal: 0 }]}>
        <Text style={[style.textStyle, { fontSize: 14, fontWeight: 'bold' }]}>{title}</Text>
        <Text style={[style.textStyle, { fontSize: 14, textTransform: 'uppercase', color: 'grey', fontWeight: 'bold' }]}>{amount}</Text>
    </View>
}
