import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    viewBox: {
        backgroundColor: 'white',
        flex: 1
    },
    textStyle: {
        color: 'black',
        fontSize: 22,
        fontStyle: "normal",
        fontWeight: 'normal'
    },
    dialog: {
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        elevation: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginHorizontal:10
    },

    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center'
    },

    textStyleWithCircle: {
        color: 'white',
        fontSize: 28,
        fontStyle: "normal",
        backgroundColor: "blue",
        borderRadius: 100,
        height: 40,
        width: 40,
        textAlign: 'center'
    },
    textStyleWithCircle1: {
        color: 'blue',
        fontSize: 28,
        fontStyle: "normal",
        borderRadius: 100,
        borderColor: 'blue',
        borderWidth: 2,
        height: 40,
        width: 40,
        textAlign: 'center'
    },

    button: {
        backgroundColor: 'blue',
        borderRadius: 40
    }
    ,
    circelStyle: {
        borderColor: 'light-grey',
        borderRadius: 100,
        borderWidth: 1,
        height: 40,
        width: 40
    },
    searchBox: {
        borderColor: 'grey',
        borderRadius: 100,
        borderWidth: 1,
        paddingHorizontal: 20,
        backgroundColor: '#F8F8F8',
        color:'black'
    },

    category: {
        borderColor: 'light-grey',
        borderRadius: 100,
        borderWidth: 0.5,
        padding: 6
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    cardProducts: {
        borderRadius: 10,
        padding: 10,
        flex: 1,
        marginEnd: 10,
        elevation: 2,
        marginBottom: 15,
        backgroundColor: 'white'
    }
})



export const color = {
    blue: "#331fb5"
}

const path = './styles/assest/'

export const images = {
    like: path + 'like.png',
    unlike: path + 'unlike.png'
}