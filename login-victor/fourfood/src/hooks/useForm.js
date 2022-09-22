import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeInput = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const clearInput = () => {
        setForm(initialState)
    }

    return [form, onChangeInput, clearInput]
}