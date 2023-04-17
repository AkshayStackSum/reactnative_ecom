import { Alert, FlatList, Image, Modal, Text, TextInput, View } from "react-native"
import { style } from "../styles/Style"
import { values } from "../strings"
import { addresses } from "../../data/LocalData"
import { TouchableHighlight } from "react-native"
import { TouchableOpacity } from "react-native"
import { useState } from "react"
import { setAddressData } from "../../data/Database"

export const AddressScreen = (props: any) => {
    const [addresss, setAddress] = useState(addresses)
    const [refreshFlatlist, setRefreshFlatList] = useState(false);
    const [isVisible, setVisible] = useState(false)
    const [pata, setPata] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [error, setError] = useState(false)


    function checkValidation() {
        if (pata == '' || city == '' || state == '') {
            setError(true)
        } else {
            addresss.push({
                id: addresses.length+1,
                type: "Home",
                address: pata + ", " + city + ", " + state
            })
            setVisible(false)
            setPata("")
            setCity("")
            setState("")
            setError(false)

        }
    }

    const submit = (index: number) => {

        Alert.alert(
            "Delete",
            "Are you sure you want to delete the address?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        addresss.splice(index, index)
                        //const update = addresss.filter((it) => { if (it.id != item.id) it })
                        setRefreshFlatList(!refreshFlatlist)
                    }
                },
                {
                    text: "No",
                    onPress: () => {

                    },
                    style: "cancel"
                },

            ],
            { cancelable: true }
        );

    }

    return <View style={[style.viewBox, { paddingHorizontal: 15 }]}>
        <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={[style.textStyle, {
                color: 'orange', marginTop: 10,
                fontSize: 16, fontWeight: 'bold'
            }]}>+ Add Address</Text></TouchableOpacity>
        <View style={{ backgroundColor: 'grey', marginVertical: 12, height: 1 }} />
        <Text style={[style.textStyle, { fontSize: 18, fontWeight: 'bold' }]}>{values.saved_address}</Text>


        <Modal transparent={true} animationType={'slide'} visible={isVisible} >
            <View style={style.centeredView}>
                <View style={style.dialog}>
                    <Text style={[style.textStyle, { fontWeight: 'bold', textAlign: 'center' }]}>Add {values.address}</Text>
                    <TextInput style={[style.searchBox, { marginTop: 20 }]}
                        placeholderTextColor={'grey'} placeholder={values.address}
                        defaultValue={pata} onChangeText={(text) => setPata(text)} />
                    <TextInput style={[style.searchBox, { marginTop: 20 }]}
                        placeholderTextColor={'grey'} placeholder={values.city}
                        defaultValue={city} onChangeText={(text) => setCity(text)} />
                    <TextInput style={[style.searchBox, { marginTop: 20 }]}
                        placeholderTextColor={'grey'} placeholder={values.state}
                        defaultValue={state} onChangeText={(text) => setState(text)} />
                    {
                        error ? <Text style={{ color: 'red', marginTop: 20 }}>Please fill all the required fields</Text> : null
                    }
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => {
                            checkValidation()

                        }} style={{ flex: 1, backgroundColor: 'orange', marginTop: 20, padding: 8, borderRadius: 10 }}>
                            <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center' }}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setVisible(false)
                        }} style={{ flex: 1, marginStart: 10, backgroundColor: 'orange', marginTop: 20, padding: 5, borderRadius: 10 }}>
                            <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>


        <FlatList style={{ backgroundColor: 'white' }}
            data={addresss}
            renderItem={({ item, index }) => <AddressInflate item={item} onClick={() => {
                //navigation.navigate(route.detail, { id: item.id })
                setAddressData(item.address)
                props.navigation.goBack()
            }} deleteClick={() => {
                submit(index)

            }} />}
        />
    </View>
}

const AddressInflate = ({ item, onClick, deleteClick }) => {

    return <TouchableOpacity onPress={onClick}><View style={{
        flex: 1, flexDirection: 'row',
        alignItems: 'center', borderRadius: 10,
        backgroundColor: 'white', elevation: 4, justifyContent: 'space-between',
        marginBottom: 10, padding: 10
    }}>
        <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image source={require('../styles/assest/house.png')} style={{
                height: 36,
                width: 36,
                tintColor: 'grey'
            }} />
            <Text style={[style.textStyle, { fontSize: 12, fontWeight: 'bold', color: 'grey' }]}>{item.type}</Text>
        </View>
        <View style={{ flex: 4 }}>
            <Text style={[style.textStyle, { fontSize: 14, marginStart: 8, fontWeight: 'bold' }]}>{item.address}</Text>
        </View>
        <TouchableOpacity onPress={deleteClick}><Image source={require('../styles/assest/delete.png')} style={{
            height: 24,
            width: 24,
            marginStart: 20
        }} /></TouchableOpacity>
    </View></TouchableOpacity>

}



