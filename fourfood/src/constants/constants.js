import axios from "axios"

export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodA'

export const Login = async (body) => {
    const {data} = await axios.post(`${BASE_URL}/login`, body)
    return data
}

export const Signup = async (body) => {
    const {data} = await axios.post(`${BASE_URL}/signup`, body)
    return data
}

export const AddAdress = async (header, body) => {
    const {data} = await axios.post(`${BASE_URL}/address`,header, body)
    return data
}

