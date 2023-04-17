import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { route } from "../../data/Routes";
import { HomeScreen } from "../Home";
import { Button, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { DetailsScreen } from "../details/ProductDetails";
import Icon from "react-native-vector-icons/FontAwesome";
import { style } from "../styles/Style";
import { CartScreen } from "../card/Card";
import { AddressScreen } from "../address/Address";
import { ProductsListScreen } from "../product/Product";
import { HistoryScreen } from "../order_history/History";
import { MyTabs } from "./BottomNV";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();


export const NavigationStack = () => {
  const navigation = useNavigation(); 

  return <Stack.Navigator>
    <Stack.Screen name={route.MYTabs} component={MyTabs} options={{ headerShown: false }} />
    <Stack.Screen name={route.detail} component={DetailsScreen} options={{
      headerBackTitleStyle: {
        fontSize: 15,

      },
      title: "Product Details",
      headerTitleAlign: 'center',
      headerRight: (() =>
      <TouchableOpacity onPress={() => {
        navigation.navigate(route.card)

    }}>
        <View style={[style.circelStyle, { alignItems: "center", justifyContent: 'center' }]}>
            <ImageBackground source={require('../styles/assest/cart.png')} style={{
                height: 18,
                width: 18
            }} >
                    <Text style={{ color: 'white', borderRadius:100, 
                    alignItems:'center',
                     backgroundColor: 'red', textAlign:'center', textAlignVertical:'center',
                       fontSize: 9, height:15, width:15, marginStart:10, marginBottom:30}}>10</Text>


            </ImageBackground>
        </View></TouchableOpacity>
      )
    }} />
    <Stack.Screen name={route.card} component={CartScreen} options={{
      headerBackTitleStyle: {
        fontSize: 15,

      },
      title: "My Cart",
      headerTitleAlign: 'center'}} />

<Stack.Screen name={route.address} component={AddressScreen} options={{
      headerBackTitleStyle: {
        fontSize: 15,

      },
      headerTitleAlign: 'center'}} />

<Stack.Screen name={route.product} component={ProductsListScreen} options={{
      headerBackTitleStyle: {
        fontSize: 15,

      },
      headerTitleAlign: 'center'}} />

<Stack.Screen name={route.order_history} component={HistoryScreen} options={{
      headerBackTitleStyle: {
        fontSize: 15,

      },
      headerTitleAlign: 'center'}} />
  </Stack.Navigator>
}