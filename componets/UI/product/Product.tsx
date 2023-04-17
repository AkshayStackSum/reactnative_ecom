import { useEffect, useState } from "react"
import { getAllProducts, getProductByCategories, getProductByPage } from "../../Apis/API"
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import { ProductInflate, ProgrssView } from "../Home"
import { route } from "../../data/Routes"
import { style } from "../styles/Style"

export const ProductsListScreen = (props: any) => {

    const [products, setProducts] = useState(undefined)
    const id = props.route.params.id
    const title = props.route.params.title
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (title != "") {
            props.navigation.setOptions({ title: title })

        }
        id == "" ? getProductByPage(page).then((it) => {
            setLoading(false)
            const data = products ? products.concat(it) : it
            setProducts(data)
        })
            : getProductByCategories(id).then(it => setProducts(it))

    }, [page])

    const getData = () => {
        if (!loading && id == "") {
            setLoading(true);
            setPage(page + 1);
        }
    }


    const renderFooter = () => {
        return loading ? <View style={style.footer}>

            <ActivityIndicator
                color="blue"
                style={{ marginLeft: 8 }} size={'large'} />

        </View> : null

    }


    return products ? <FlatList style={{ marginTop: 4, marginStart: 15, marginEnd: 10 }}
        data={products}
        numColumns={2}
        onEndReached={() => {
            getData()
        }}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={1}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <ProductInflate item={item} onClick={() => {
            props.navigation.navigate(route.detail, { id: item.id })
        }}

        />}
    /> : <ProgrssView />


}


