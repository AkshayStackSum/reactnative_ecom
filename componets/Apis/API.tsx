const BASE_URL = "https://api.escuelajs.co/"


export const getCategories = async () => {

    let result = await fetch(BASE_URL + "api/v1/categories")
    result = await result.json()
    return result
}


export const getAllProducts = async () => {

    let result = await fetch(BASE_URL + "api/v1/products")
    result = await result.json()
    return result
}


export async function getProductByID(id: string) {

    let result = await fetch(BASE_URL + "api/v1/products/" + id)
    result = await result.json()
    return result
}


export async function getProductByCategories(id: string) {

    let result = await fetch(BASE_URL + "api/v1/categories/" + id + "/products")
    result = await result.json()
    return result
}


export async function getProductByPage(page: number) {

    let result = await fetch(BASE_URL + "api/v1/products?offset=" + page + "&limit=10")
    result = await result.json()
    return result
}