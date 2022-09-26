import React from 'react'
import './index.css'
import mediumLogo from '../../logos/mediumLogo.png'
import { useNavigate } from 'react-router-dom'
import { goToFeedPage, goToLoginPage, goToSignupPage } from '../../routes/navigation'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import {
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Login } from '../../constants/constants'


const LoginPage = () => {

  const navigate = useNavigate()

  const [form, onChangeInputs, clearInput] = useForm({
    email: "",
    password: ""
  })

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [messageError, setMessageError] = useState("")

  const onSubmit = async (e)=>{
    e.preventDefault()
    console.log(form);
    setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
    try{
      const {token} = isEmailValid && await Login({
        email: form.email,
        password: form.password
    })
    localStorage.setItem("auth-token",token)
    token?(goToFeedPage(navigate)):(goToLoginPage(navigate))
    
    } catch(e) {
      setMessageError(e.response.data.message);
    }  
  }

  const onClickShowPassword = () =>{
    setShowPassword(!showPassword)
  }

 
 
  return (
    <div>
      <div className="form-container">
        <div className="image">
          <img src={mediumLogo} alt="Logo" />
        </div>
        <h1>Entrar</h1>
        <form className='login-form' onSubmit={onSubmit}>
        <FormControl isInvalid={!isEmailValid}>
            <label id='label-form-email'>E-mail*</label>
            <input
                name="email" 
                placeholder='Digite seu email'
                value={form.email}
                onChange={onChangeInputs}/>
            <div className="input-password">
            <label id='label-form-password'>Senha*</label>
            <input 
                name='password'
                type={showPassword ? 'text' : 'password'} 
                placeholder='Digite sua senha' 
                value={form.password}
                onChange={onChangeInputs}/>
                <button id="button-show-password" type='button' onClick={onClickShowPassword}>
                  {showPassword? <AiFillEyeInvisible size={20}/> : <AiFillEye size={20}/>}
                </button>
            </div>
    
                {!isEmailValid ? (
                  <FormErrorMessage as="p" size='sm'>
                    Email nao digitado
                  </FormErrorMessage>
                ) : undefined}
                <p>{messageError}</p>
                
        </FormControl>    

            <button type='submit' >Entrar</button>
            <button id='button-signup' type="submit" onClick={()=>goToSignupPage(navigate)}> Nâo possui conta? Clique aqui.</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

