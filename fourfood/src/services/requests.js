import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToFeedPage } from '../routes/coordinator'

export const login = (body, clear, navigate, setButton) => {
    
    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(navigate)
            //setButton("Logout")
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

